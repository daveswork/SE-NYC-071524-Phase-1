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
// Access the <select> element.
const cryptoCurrencyFilterElement = document.getElementById('cryptocurrency-filter')

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
            // Get the top ten cryptocurrencies and store them into a variable (array)
            // const topTenCryptoCurrencies = apiDataObject.data.filter(cryptocurrency => {
            //     return Number(cryptocurrency.rank) <= 10
            // })
            // // console.log(topTenCryptoCurrencies)
            // // Iterate through our filtered data and display the top ten cryptocurrencies.
            // topTenCryptoCurrencies.forEach(addCryptoCurrencyToList)
            
            // Access the <select> element which will be used to filter the cryptocurrencies that are displayed on the web page
            //console.log(apiDataObject.data)
            displayCryptocurrencyData(apiDataObject.data)

            cryptoCurrencyFilterElement.addEventListener('change',() => {
                displayCryptocurrencyData(apiDataObject.data)
            })

        })
    }
    else{
        "Error: Unable to retrieve cryptocurrency data!"
    }
})

function addCryptoCurrencyToList(cryptoCurrency){
            const liElement = document.createElement('li')
            liElement.textContent = `${cryptoCurrency.name} (${cryptoCurrency.symbol}) : Rank # ${cryptoCurrency.rank}`
            cryptoCurrencyListElement.appendChild(liElement)
}

function displayCryptocurrencyData(cryptocurrencies){
    cryptoCurrencyListElement.innerHTML = "";

    if(cryptoCurrencyFilterElement.value === "all"){
        cryptocurrencies.forEach(addCryptoCurrencyToList)
    } else if(cryptoCurrencyFilterElement.value === "less_than"){
        cryptocurrencies.forEach(cryptocurrency => {
            if(Number(cryptocurrency.rank) <= 50){
                addCryptoCurrencyToList(cryptocurrency)
            }
        })
    } else if(cryptoCurrencyFilterElement.value === "greater_than"){
        cryptocurrencies.forEach(cryptocurrency => {
            if(Number(cryptocurrency.rank) > 50){
                addCryptoCurrencyToList(cryptocurrency)
            }
        })
    }
    // console.log(cryptoCurrencyFilterElement.value)
    // console.log(cryptocurrencies)
}