const foods = [
    {
        name: "Flatburger",
        image: "./assets/food/flatburger.jpeg",
        description: "Our signature Flatburger which is a super delicious cheeseburger that'll leave you wanting another Flatburger! It's too good to be true!"
    },
    {
        name: "Maple Bacon Burger",
        image: "./assets/food/maple-bacon-burger.jpeg",
        description: "A great option for a breakfast burger or a great option for brunch if you're hungry enough to eat 2 of these burgers!"
    },
    {
        name: "Mushroom Burger",
        image: "./assets/food/mushroom-burger.webp",
        description: "A mushroom burger with our exclusive Flatburger melted cheese!"
    },
    {
        name: "Avocado Bun Burger",
        image: "./assets/food/avocado-bun-burger.jpeg",
        description: "A healthier take on our signature Flatburger but with avocado buns!"
    },
    {
        name: "Ramen Burger",
        image: "./assets/food/ramen-burger.jpeg",
        description: "If you love ramen and burgers, what are you waiting for? Order our exclusive ramen burger now!"
    },
    {
        name: "French Fries",
        image: "./assets/food/french-fries.jpeg",
        description: "The good old french fries made in Flatburger style!"
    },
    {
        name: "Burrito",
        image: "./assets/food/burrito.webp",
        description: "A Flatburger style burrito with our exclusive Flatburger melted cheese and any meat of your choosing in addition to your choice of additional ingredients!"
    },
    {
        name: "Taco",
        image: "./assets/food/taco.jpeg",
        description: "The Flatburger exclusive Taco! Get it while supplies last!"
    },
    {
        name: "Hot Dog",
        image: "./assets/food/hot-dog.jpeg",
        description: "The Flatburger exclusive Hot Dog! Get it while supplies last!"
    },
    {
        name: "Onion Rings",
        image: "./assets/food/onion-rings.jpeg",
        description: "The Flatburger exclusive Onion Rings! Get them while supplies last!"
    }
]

const restaurantMenu = document.getElementById('restaurant-menu')

// foods.forEach(food => {
//     const foodImage = document.createElement('img')
//     foodImage.src = food.image
//     restaurantMenu.appendChild(foodImage)

//     // Event listener takes the name of the event and the callback function
//     // foodImage.addEventListener('click', () => {
//     //     // console.log('Yay! You clicked me!');
//     //     // console.log(food);
//     //     const foodDetailImage = document.querySelector('.detail-image');
//     //     foodDetailImage.src = food.image
        
//     //     const foodName = document.querySelector('.name');
//     //     foodName.textContent = food.name


//     //     const foodDescriptionDisplay = document.getElementById('description-display');
//     //     foodDescriptionDisplay.textContent = food.description

//     // });
//     foodImage.addEventListener('click', () => {
//         displayFoodDetails(food)
//     } )
// })

foods.forEach(addFoodImageToRestaurantMenu)


const foodDetailImage = document.querySelector('.detail-image')
foodDetailImage.src = foods[0].image

const foodName = document.querySelector('.name') 
foodName.textContent = foods[0].name

const foodDescriptionDisplay = document.querySelector('#description-display')
foodDescriptionDisplay.textContent = foods[0].description


// displayFoodDetails(foods[2])

function displayFoodDetails(food){
    console.log(food);

    const foodDetailImage = document.querySelector('.detail-image');
    foodDetailImage.src = food.image;
    // const foodDetailImage = document.querySelector('.detail-image');
    // foodDetailImage.src = food.image
    
    const foodName = document.querySelector('.name');
    foodName.textContent = food.name


    const foodDescriptionDisplay = document.getElementById('description-display');
    foodDescriptionDisplay.textContent = food.description
    
}



function addFoodImageToRestaurantMenu(food){
    const foodImage = document.createElement('img')
    foodImage.src = food.image
    restaurantMenu.appendChild(foodImage)   

    // Deliverable #1 solution
    foodImage.addEventListener('click', () => {
        displayFoodDetails(food)
    } )
}


// Deliverable #2 solution
const newFoodItem = document.getElementById("new-food")
console.log(newFoodItem)
newFoodItem.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event)
    const newNameInputElement = document.getElementById('new-name');
    const newImageElement = document.getElementById('new-image');
    const newDescriptionTextAreaElement = document.getElementById('new-description');

    const newFood = {
        name: newNameInputElement.value,
        image: newImageElement.value,
        description: newDescriptionTextAreaElement.value
        // description:
    }

    console.log(newFood)
    addFoodImageToRestaurantMenu(newFood);

})





