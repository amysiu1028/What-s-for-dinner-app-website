var sideButton = document.querySelector('#side')
var mainButton = document.querySelector('#main')
var dessertButton = document.querySelector('#dessert')
var mealButton = document.querySelector('#meal')
var letsCookButton = document.querySelector('.lets-cook')
var potImage = document.querySelector('.pot-image')
var randomText = document.querySelector('.random-text')
var clearButton = document.querySelector('.clear-button')


var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
]
var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesan',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
]
var desserts = [
    'Desserts',
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
]
var meals = [];
array = []

letsCookButton.addEventListener('click',generateRandomDish, showPrompt)
clearButton.addEventListener('click',clearPrompt)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function getRandomPrompt(event,array) {
    event.preventDefault
    var randomDish = ""
    if (array === sides) {
        randomDish = sides[getRandomIndex(sides)];
    } else if (array === mains) {
        randomDish = mains[getRandomIndex(mains)];
    } else if (array === desserts) {
        randomDish = desserts[getRandomIndex(desserts)];
    } else if (array === meals) {
        var randomMains = mains[getRandomIndex(mains)];
        var randomSides = sides[getRandomIndex(sides)];
        var randomDesserts = desserts[getRandomIndex(desserts)];
        randomDish = `${randomMains} with a side of ${randomSides} and ${randomDesserts} for dessert!`
    } 
    displayPrompt(randomDish)
}

function displayPrompt(randomDish) {
    randomText.innerHTML = `<section class="prompt">
    <h3>You should make</h3>
    <h1>${randomDish}!</h1>
    </section>`; 
}

function generateRandomDish(event) {
    event.preventDefault(); 
    if (sideButton.checked) {
        getRandomPrompt(event,sides)
    } else if (mainButton.checked) {
        getRandomPrompt(event,mains)
    } else if (dessertButton.checked) {
        getRandomPrompt(event,desserts)
    } else if (mealButton.checked) {
        getRandomPrompt(event,meals)
    }
    showPrompt(event)
 }

 function showPrompt(event) {
    event.preventDefault()
    potImage.classList.add('hidden');
    randomText.classList.remove("hidden");
    clearButton.classList.remove('hidden');
 }

function clearPrompt() {
    potImage.classList.remove('hidden');
    randomText.classList.add("hidden");
    clearButton.classList.add('hidden')
}
