fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(response => response.json())
.then((parsedDataRandom) => {
  console.log(parsedDataRandom)
})

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(response => response.json())
.then((parsedDataSearch) => {
  console.log(parsedDataSearch)
})