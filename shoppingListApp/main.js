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
        
        let checkedItem = document.createElement("button")
        checkedItem.classList.add("complete");
        checkedItem.innerText = "Complete";
        checkedItem.addEventListener("click", () => this.complete(input));

		let updateButton = document.createElement("button");
		updateButton.classList.add("update");
		updateButton.innerText = "Edit";
		updateButton.addEventListener("click", () => this.update(input));

		let removeButton = document.createElement("button");
		removeButton.classList.add("remove");
		removeButton.innerText = "Remove";
		removeButton.addEventListener("click", () => this.remove(listItem));

        actions.appendChild(checkedItem);
        actions.appendChild(updateButton);
        actions.appendChild(removeButton);
       
		listItem.appendChild(input);
		listItem.appendChild(actions);

		itemList.appendChild(listItem);
    }
    




    complete (listItem){

        if (listItem.style.textDecoration === "none") {
            listItem.style.textDecoration = "line-through";
          } else {
            listItem.style.textDecoration = "none";
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
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('items').add({
        name: itemToAdd.value,
        name: itemInfo.value
    });
})