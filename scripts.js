fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(parsedDataRandom => {
    console.log(parsedDataRandom);
    displayRandomData(parsedDataRandom.meals);
  });

function displayRandomData(meals) {

        const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    
        const image = document.createElement('img');
        image.src = randomMeal.strMealThumb;
    
        const title = document.createElement('h1');
        title.textContent = randomMeal.strMeal;
    
        // const paragraph = document.createElement('p');
        // paragraph.textContent = randomMeal.strInstructions;
    
    const randomImgs = document.querySelector('.randomImgs');
    randomImgs.appendChild(image);
    randomImgs.appendChild(title);
    // randomImgs.appendChild(paragraph);
}

// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
// .then(response => response.json())
// .then((parsedDataSearch) => {
//   console.log(parsedDataSearch)
// })


const searchButton = document.querySelector('button[type="submit"]');
const searchInput = document.querySelector('input[type="text"]');
const gridContainer = document.querySelector('.grid-container');

searchButton.addEventListener('click', function() {
const category = searchInput.value;
const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

fetch(apiUrl)
.then(response => response.json())
.then(parsedData => {
const meals = parsedData.meals;
gridContainer.innerHTML = '';

meals.forEach(meal => {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('grid-item');
  
    const image = document.createElement('img');
    image.src = meal.strMealThumb;
    mealDiv.appendChild(image);
  
    const title = document.createElement('h2');
    title.textContent = meal.strMeal;
    mealDiv.appendChild(title);
  
    gridContainer.appendChild(mealDiv);
  
    // You can add more elements for each meal here
  });

});
});

