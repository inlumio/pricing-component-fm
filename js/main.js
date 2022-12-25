const togler = document.getElementById('toggler');
const cardsContainer = document.querySelector('.pricing__types');

window.addEventListener('load', changePlan)

togler.addEventListener('click',changePlan);

function changePlan() {
	if (togler.checked) {
		cardsContainer.classList.add('types--mounth');
		cardsContainer.classList.remove('types--annual');
	} else {
		cardsContainer.classList.remove('types--mounth');
		cardsContainer.classList.add('types--annual');
	}
}
