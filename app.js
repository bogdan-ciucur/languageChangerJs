
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.text');

link.forEach(e => {
e.addEventListener('click', () => {
	langEl.querySelector('.active').classList.remove('active');
	e.classList.add('active');

	const attr = e.getAttribute('language');

	titleEl.textContent = data[attr].title;
	descrEl.textContent = data[attr].text;
});
});

let data = {
	"romanian": 
	{
	"title": "Titlu",
	"text": 
		"Romana"
	},



	"english": 
	{
	"title": "Title",
	"text": 
		"English",
	},
	
}