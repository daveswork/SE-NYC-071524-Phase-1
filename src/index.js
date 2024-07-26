const restaurantMenu = document.getElementById('restaurant-menu')

fetch('http://localhost:3000/foods')
.then(response => response.json())
.then(foods => {
    displayFoodDetails(foods[0])

    foods.forEach(food => {
        addFoodImageToRestaurantMenu(food)
    })
})

function addFoodImageToRestaurantMenu(food){
    const imgElement = document.createElement('img')
    imgElement.src = food.image
    imgElement.addEventListener('mouseover', () => {
        displayFoodDetails(food)
    })

    imgElement.addEventListener('click', () => {

        imgElement.remove()

        fetch(`http://localhost:3000/foods/${currentlyDisplayedFood.id}`, {
            method: "DELETE"
        })
    })

    restaurantMenu.appendChild(imgElement)
}

function displayFoodDetails(food){
    currentlyDisplayedFood = food
    const foodDetailImageElement = document.getElementsByClassName('detail-image')[0]
    foodDetailImageElement.src = food.image
    const foodNameElement = document.getElementsByClassName('name')[0]
    foodNameElement.textContent = food.name
    const foodDescriptionDisplayElement = document.getElementById('description-display')
    foodDescriptionDisplayElement.textContent = food.description
}


const cryptoCurrencyListElement = document.getElementById('cryptocurrency-list')
// console.log(cryptoCurrencyList)

// Example code 

fetch("https://api.coincap.io/v2/assets")
.then(response => {
    if(response.ok){
        response.json().then(apiDataObject => {
            // apiDataObject.data.forEach(cryptoCurrency => {
            //     //console.log(cryptoCurrency)
            //     const liElement = document.createElement('li')
            //     liElement.textContent = `${cryptoCurrency.name} (${cryptoCurrency.symbol}) : Rank # ${cryptoCurrency.rank}`
            //     cryptoCurrencyListElement.appendChild(liElement)
            // })
            const topTenCryptoCurrencies = apiDataObject.data.filter(cryptocurrency => {
                return Number(cryptocurrency.rank) <= 10
            })
            console.log(topTenCryptoCurrencies)
        })
    }
    else{
        "Error: Unable to retrieve cryptocurrency data!"
    }
})