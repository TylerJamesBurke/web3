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
}



/*

new Vue( {
  el: '#drinkSection',
  data: function(){
    return{
      newItem:'',
      currentDrink:[],
      drinkList:[],
      strDrink:'',
      strIngredient1:'',
      strIngredient2:'',
      strIngredient3:'',
    }
  },



  methods: {

    //search cocktail

    searchDrink(){ 
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.newItem}`)
      .then(response => response.json())
      .then(data => {
 
        this.drinkList = data['drinks'];
      });
    },
  
    displayInfo(cocktail,index){
      this.strDrink = this.drinkList[index];
      //displays drink name
      console.log(this.strDrink['strDrink']);
      this.currentDrink.push(this.drinkList[index]);
      console.log(this.currentDrink);
      console.log(this.drinkList);
      document.querySelector('.card').style.display = 'block';
    },
   
  }
  
});
*/