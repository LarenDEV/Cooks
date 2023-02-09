let number = 2;

const dishes = {
	1: {
		price: '30$',
		name: 'Tasty Soup',
		description: 'Rice noodles, soy sauce, hoisin,<br> chili garlic sauce, honey',
		preparation: '20 mins',
	},

	2: {
		price: '45$',
		name: 'Rice &  Salad',
		description: 'Rice, cucumber, grapes, rice,<br> pawpaw',
		preparation: '30 mins',
	},

	3: {
		price: '60$',
		name: 'Goat meat soup',
		description: 'Goat meat, okra, carrot,<br> vegetables, chili garlic sauce',
		preparation: '25 mins',
	},
};

const dishBig 			= document.querySelector('.dish-big');
const dishTitle 		= document.querySelector('.dish-title');
const dishSubtitle 		= document.querySelector('.dish-subtitle');
const dishPrice			= document.querySelector('.price');
const dishPreparation	= document.querySelector('.preparation');

setInterval(() => {
	dishBig.setAttribute('src', `./img/dish-${number}.png`);
	dishTitle.innerHTML = dishes[number].name;
	dishSubtitle.innerHTML = dishes[number].description;
	dishPrice.innerHTML = `Price<br><strong>${dishes[number].price}</strong>`;
	dishPreparation.innerHTML = `Preparation<br><strong>${dishes[number].preparation}</strong>`;
	document.body.style.background = `radial-gradient(50% 50% at 50% 50%, rgba(251, 188, 5, .7) 0%, rgba(255, 143, 63, .95) 100%) , url('./img/dish-${number}.png') no-repeat center`;
	document.body.style.backgroundSize = 'cover';

	if(number < 3) {
		number++;
	} else {
		number = 1;
	}
}, 2000);