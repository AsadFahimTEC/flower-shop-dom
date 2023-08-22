function handleCLikBtn(target){
    const itemName = target.parentNode.childNodes[1].innerText;
    // get reference of selected items
    const selectedItems = document.getElementById('selected-items');

    // create an elements
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItems.appendChild(li);

}