if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

import express from 'express';
import { db } from './confFirebase.js';
import { collection, doc, getDocs, getDoc, addDoc, deleteDoc, updateDoc   } from "firebase/firestore";
const app = express();
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('port', process.env.PORT || 3001);
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));


app.get('/', async (req, res) => {
	const querySnapshot = await getDocs(collection(db, "contacts_collection"));
	const contacts = [];
	querySnapshot.forEach((doc) => {
		// console.log(`${doc.id} => ${doc.data()}`);
		// const contacts = docs.map((contact) => ({id:contact.id, data:contact.data()}))
		contacts.push({id:doc.id, data:doc.data()});
	});
	// console.log(contacts)
	// const {docs} = querySnapshot;
	// const contacts = docs.map((contact) => ({id:contact.id, data:contact.data()}))
	res.render('index', {contacts});
});

app.post('/agregar', async (req, res) => {
	try {
		const docRef = await addDoc(collection(db, "contacts_collection"), {
			name: req.body.name,
			age: req.body.age,
			address: req.body.address,
			phone: req.body.phone
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}

	res.redirect('/')
});


app.get('/contact/:id', async (req, res) => {
	let id = req.params.id;
	console.log(req.body);
	const docRef = doc(db, "contacts_collection", id);
	const contact = await getDoc(docRef);
	if (contact.exists()) {
		// console.log("Document data:", contact.data());
		res.render('contact', {contact});

	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}

	// updateBtnEl.addEventListener('click', () =>{
	// 	console.log("as")
	// });
});

app.put('/contact/updt/:id', async (req, res) => {
	console.log(req.body);
	res.redirect('/');
});

app.get('/contact/update/:id', async (req, res) => {
	// const updateData = new UpdateData(req.body)
	let id = req.params.id;
	// console.log(updateData)
	const docRef = doc(db, "contacts_collection", id);
	// console.log(id)
	// console.log(req.body.name);
	await updateDoc(docRef, {
		name: "otro Raul"
	});
	// console.log(docRef)

	res.redirect('/');
});

app.get('/borrar/:id', async (req, res) => {
	let id = req.params.id;
	await deleteDoc(doc(db, "contacts_collection", id));
	
	res.redirect('/');
});

// Init
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
  console.log('directory-name 👉️', __dirname);
});
