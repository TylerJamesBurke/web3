/** code
function getRandomCocktail() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        displayRandomCocktail(data);
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
}

getRandomCocktail();

function displayRandomCocktail(cocktail) {
  console.log(cocktail.drinks[0]);

  let drinkSection = document.querySelector("#drinksection");

  let drinkName = document.createElement("h2");
  drinkName.innerHTML = cocktail.drinks[0].strDrink;

  drinkSection.appendChild(drinkName);
  console.log(cocktail.drinks[0].strDrink);

  let img = document.createElement("img");
  img.src = cocktail.drinks[0].strDrinkThumb;

  drinkSection.appendChild(img);

  for (let i = 1; i < 16; i++) {
    console.log(i);

    if (cocktail.drinks[0][`strIngredient${i}`] == null) {
      break;
    }

    let ingredient = document.createElement("ul");
    ingredient.innerHTML =
      cocktail.drinks[0][`strMeasure${i}`] +
      ": " +
      cocktail.drinks[0][`strIngredient${i}`];

    drinkSection.appendChild(ingredient);
  }

  let instructions = document.createElement("p");
  instructions.innerHTML = cocktail.drinks[0].strInstructions;

  drinkSection.appendChild(instructions);
}**/








new Vue( {
  el: '#app',
  data: function(){
    return{
      newItem:'',
      items:[],
      showSingleDrink:false,
      activeDrink:{}

  
    }
  },




   // name: this.strDrink,
   //            img: this.strDrinkThumb,
   //            ingredient1: this.strIngredient1,
   //            ingredient2: this.strIngredient2,
   //            ingredient3: this.strIngredient3,
    //search cocktail

  
 
    methods: {
        searchItem: function () {
        console.log(`Search is: ${this.newItem}`);
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.newItem}`)
          .then(response => response.json())
          .then(data => {
            this.items = data.drinks;
           
          });
         
     
        },

  displayDrink: function (drinkId) {
    console.log(`Drink ID is: ${drinkId}`);
    var that = this;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(response => response.json())
        .then(data => {
          that.activeDrink = data.drinks[0];
          that.showSingleDrink = true;
          that.activeDrink.ingredients = [];

          for(var i=1; i<=15; i++) {
              if(that.activeDrink['strIngredient' +i] !== null) {
                  var ingred = that.activeDrink['strIngredient' + i];
                  var amount = that.activeDrink['strMeasure' + i];

                  var ing = {
                      amount:amount,
                      ing:ingred
                  }
                  that.activeDrink.ingredients.push(ing)
              }
            }
            console.log(that.activeDrink);
        });
      }
  }


   
      
   
  
});

