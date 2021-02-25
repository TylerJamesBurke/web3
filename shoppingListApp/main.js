const itemToAdd = document.getElementById("itemToAdd");
const itemInfo = document.getElementById("itemInfo");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("list");

class Item {
	constructor (itemName) {
		this.name = itemName;

		this.create();
	}

	create () {
		let listItem = document.createElement("div");
        listItem.classList.add("list-item");
        
       
		let input = document.createElement("input");
		input.type = "text";
		input.classList.add("item-name");
		input.value = this.name;
		input.disabled = true;

		let actions = document.createElement("div");
        actions.classList.add("item-actions");
        
        let checkedItem = document.createElement("input")
        checkedItem.type = "checkbox";
        checkedItem.classList.add("item-name");
        checkedItem.addEventListener("click", () => this.complete(input));

		let updateButton = document.createElement("button");
		updateButton.classList.add("update");
		updateButton.innerText = "Edit";
		updateButton.addEventListener("click", () => this.update(input));

		let removeButton = document.createElement("button");
		removeButton.classList.add("remove");
		removeButton.innerText = "Remove";
		removeButton.addEventListener("click", () => this.remove(listItem));

        listItem.appendChild(checkedItem);
        actions.appendChild(updateButton);
        actions.appendChild(removeButton);
       
		listItem.appendChild(input);
		listItem.appendChild(actions);

		itemList.appendChild(listItem);
    }
    




    complete (listItem){

        if (listItem.style.textDecoration === "line-through") {
            listItem.style.textDecoration = "none" ;
            listItem.style.color = "#000";
            itemInfo.style.fontWeight = "400";
            
          } else {
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "#cfcfcf"
          }

        
    }
	update (input) {
		input.disabled = !input.disabled;
	}

	remove (listItem) {
		listItem.parentNode.removeChild(listItem);
	}
}


// adding item on page
addButton.addEventListener("click", () => newItem());

function newItem () {
	if (itemToAdd.value != "" + itemInfo.value != "") {
        new Item(itemToAdd.value + " - " + itemInfo.value);
        itemToAdd.value = "";
        itemInfo.value = "";
       
    }
    
}



//saving data
//function saveItemsToFirebase (itemToAdd){
 //   db.collection("items").add(itemToAdd)
//}


/*var storedItem = localStorage.newItem();
function save(){
    var Item =  itemToAdd.value + itemInfo.value;
    localStorage.setItem(storedItem, Item);
    
}

function get(){
    localStorage.getItem(storedItem);
}


addButton.addEventListener( 'click', function(e) {
    e.preventDefault();
    localStorage.setItem("userName", usernameInput.value);
    localStorage.setItem("userStatus", statusInput.value);
    
    ();
});
*/