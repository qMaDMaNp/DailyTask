let editButtons = document.getElementsByName("edit");
let pageBody = document.getElementsByTagName("body")[0];


editButtons.forEach((elem) => {
    elem.addEventListener('click',  () => {
        let elemListLine = elem.parentNode.parentNode,
            elemParent = elem.parentNode,
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
            titleInput.name = 'title';
            titleInput.id = 'pavlo';

        let startInput = document.createElement('input');
            startInput.type = 'text';
            startInput.value = elemStart;
            startInput.name = 'start-time';

        let endInput = document.createElement('input');
            endInput.type = 'text';
            endInput.value = elemEnd;
            endInput.name = 'end_time';

        //Create save form
        let saveForm =
            "<form action=\"/?_method=PUT\" method=\"post\">" +
                "<input type=\"hidden\" name=\"title\" id=\"pavlik\">" +
                "<input type=\"hidden\" name=\"start_time\">" +
                "<input type=\"hidden\" name=\"end_time\">" +
            "<button class=\"btn btn-success\" type=\"submit\" name=\"edit-button\" value=" + elem.value + " + >Save</button>" +
            "</form>";


        //Delete elements
        elemTitleItem.removeChild(elemTitleItem.getElementsByTagName('p')[0]); //remove title text
        elemStartItem.removeChild(elemStartItem.getElementsByTagName('p')[0]); //remove start time text
        elementEndItem.removeChild(elementEndItem.getElementsByTagName('p')[0]); //remove end time text
        elem.remove(); //remove button

        //Append elements
        elemTitleItem.appendChild(titleInput); //add inputs to view
        elemStartItem.appendChild(startInput); //add inputs to view
        elementEndItem.appendChild(endInput);  //add inputs to view
        elemParent.innerHTML = saveForm; //add save form

        //Listen to form changes
        document.getElementById('pavlo').addEventListener('change', () => {
           console.log('pavlo value: ' + document.getElementById('pavlo').value);
            document.getElementById('pavlik').value = document.getElementById('pavlo').value;
            console.log('pavlik value: ' + document.getElementById('pavlik').value)
        });
        //Delete buttons

        //Add new elements


        //Send server request with data;


    });
});



