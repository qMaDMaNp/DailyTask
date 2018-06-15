let editButtons = document.getElementsByName("edit-button");
let pageBody = document.getElementsByTagName("body")[0];


editButtons.forEach((elem) => {
    elem.addEventListener('click',  () => {
        let elemListLine = elem.parentNode.parentNode,
            elemTitleItem = null,
            elemTitle = null,
            elemStartItem = null,
            elemStart = null,
            elementEndItem = null,
            elemEnd = null;

        for(let keys in elemListLine.children) {
            if(elemListLine.children[keys].classList.contains('title')) {
                elemTitleItem = elemListLine.children[keys];
                elemTitle = elemListLine.children[keys].textContent;
            }
            if(elemListLine.children[keys].classList.contains('start-time')) {
                elemStartItem = elemListLine.children[keys];
                elemStart = elemListLine.children[keys].textContent;
            }
            if(elemListLine.children[keys].classList.contains('end-time')) {
                elementEndItem = elemListLine.children[keys];
                elemEnd = elemListLine.children[keys].textContent;
                break;
            }
        }
        console.log(elemTitle, elemStart, elemEnd);
        //CREATE INPUTS for editing with a values elemTitle, elemStart, elemEnd
        let titleInput = document.createElement('input');
            titleInput.type = 'text';
            titleInput.value = elemTitle;

        let startInput = document.createElement('input');
            startInput.type = 'text';
            startInput.value = elemStart;

        let endInput = document.createElement('input');
            endInput.type = 'text';
            endInput.value = elemEnd;

        //Delete elements
        elemTitleItem.removeChild(elemTitleItem.getElementsByTagName('p')[0]);
        elemStartItem.removeChild(elemStartItem.getElementsByTagName('p')[0]);
        elementEndItem.removeChild(elementEndItem.getElementsByTagName('p')[0]);


        //Append inputs
        elemTitleItem.appendChild(titleInput);
        elemStartItem.appendChild(startInput);
        elementEndItem.appendChild(endInput);

        //Add new elements


        //Send server request with data;


    });
});



