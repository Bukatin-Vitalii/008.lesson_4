let categories = [
	{
		id: 1,
		name: 'Category 1',
		products: [
			{
				id: 1,
				name: 'Product 1',
				price: 100,
			},
			{
				id: 2,
				name: 'Product 2',
				price: 200,
			},
			{
				id: 3,
				name: 'Product 3',
				price: 300,
			},
		],
	},
	{
		id: 2,
		name: 'Category 2',
		products: [
			{
				id: 4,
				name: 'Product 4',
				price: 400,
			},
			{
				id: 5,
				name: 'Product 5',
				price: 500,
			},
			{
				id: 6,
				name: 'Product 6',
				price: 600,
			},
		],
	},
	{
		id: 3,
		name: 'Category 3',
		products: [
			{
				id: 7,
				name: 'Product 7',
				price: 700,
			},
			{
				id: 8,
				name: 'Product 8',
				price: 800,
			},
			{
				id: 9,
				name: 'Product 9',
				price: 900,
			},
		],
	},
];

let categoriesList = document.querySelector('.categories__list');
let productsList = document.querySelector('.products__list');
let productInfo = document.querySelector('.product__info');
let buyBtn;
let backBtn = document.querySelector('.back-btn');
let message = document.querySelector('.message');

function renderCategories() {
	let categoriesListHTML = '';

	for (let category of categories) {
		categoriesListHTML += `<li class="item" data-id="${category.id}">${category.name}</li>`;
	}

	categoriesList.innerHTML = categoriesListHTML;
}

function renderProducts(categoryId) {
	if (!categoryId) {
		return;
	}
	let productsListHTML = '';
	let category = categories.find((category) => category.id === categoryId);

	for (let product of category.products) {
		productsListHTML += `<li class="item" data-id="${product.id}">${product.name}</li>`;
	}

	productsList.innerHTML = productsListHTML;
}

function renderProductInfo(productId) {
	let product = null;

	for (let category of categories) {
		product = category.products.find((product) => product.id === productId);

		if (product) {
			break;
		}
	}

	productInfo.innerHTML = `
			<h2 class="product__title">${product.name}</h2>
			<p class="product__price">${product.price} $</p>
			<button class="buy-btn">Buy</button>
		`;

	buyBtn = document.querySelector('.buy-btn');

	buyBtn.addEventListener('click', () => {
		showMessage();
	});
}

function showMessage() {
	message.classList.remove('hidden');

	setTimeout(() => {
		location.reload();
	}, 500);
}

renderCategories();

categoriesList.addEventListener('click', (event) => {
	let categoryId = +event.target.dataset.id;

	renderProducts(categoryId);
});

productsList.addEventListener('click', (event) => {
	let productId = +event.target.dataset.id;

	renderProductInfo(productId);
});