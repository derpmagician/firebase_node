const example = document.querySelector(".example");
const updatedData = example.addEventListener('click', (e) => {
	const nameEl = document.querySelector('#name');
	const ageEl = document.querySelector('#age');
	const addressEl = document.querySelector('#address')
	const phoneEl = document.querySelector('#phone')
	if (nameEl.value.trim() !== "") console.log("name")
	if (ageEl.value.trim() !== "") console.log("age")
	if (addressEl.value.trim() !== "") console.log("address")
	if (phoneEl.value.trim() !== "") console.log("phone")
	
	e.preventDefault();
})

// export { updatedData };