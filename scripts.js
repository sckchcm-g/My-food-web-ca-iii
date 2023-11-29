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
// console.log(parsedData.meals)

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
  

  });

});
});


// const button = document.getElementsByClassName('buttonscroll');
// button.addEventListener('click', () => {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: 'smooth'
//   });
// });



function displayRandomData(meals) {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];

  const image = document.createElement('img');
  image.src = randomMeal.strMealThumb;

  const title = document.createElement('h1');
  title.textContent = randomMeal.strMeal;

  const randomImgs = document.querySelector('.randomImgs');
  randomImgs.appendChild(image);
  randomImgs.appendChild(title);

  randomImgs.addEventListener('click', function() {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`)
      .then(response => response.json())
      .then(data => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if (data.meals[0][`strIngredient${i}`]) {
            const ingredient = data.meals[0][`strIngredient${i}`];
            const measure = data.meals[0][`strMeasure${i}`];
            ingredients.push(`${ingredient} - ${measure}`);
          }
        }


        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Ingredients</h2>
            <ul>
              ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
          </div>
        `;
        document.body.appendChild(modal);


        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function() {
          modal.remove();
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
}