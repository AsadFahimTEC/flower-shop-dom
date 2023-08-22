// intialized global  variable
let total = 0;

function handleCLikBtn(target){
      // get reference of selected items
      const selectedItems = document.getElementById('selected-items');

    // show the item names innerText
    const itemName = target.parentNode.childNodes[1].innerText;

    // create an elements
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItems.appendChild(li);

    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];

    // calculate the total
    total = parseInt(total) + parseInt(price);
    console.log(total);
    document.getElementById('total').innerText= total;
}