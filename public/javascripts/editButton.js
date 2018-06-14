var editButtons = document.getElementsByName("edit-button");
var ourUL = editButtons[1].parentNode.parentNode;

for(keys in ourUL.children) {
    if(ourUL.children[keys].classList.contains('title')){
        console.log(ourUL.children[1].textContent)
    } else {
        console.log(22323421);
    }
}


editButtons.forEach((elem) => {
    elem.addEventListener('click', () => {

    });
});