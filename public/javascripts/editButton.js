let editButtons = document.getElementsByName("edit");


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
            titleInput.id = 'title-edit';

        let startInput = document.createElement('input');
            startInput.type = 'text';
            startInput.value = elemStart;
            startInput.name = 'start_time';
            startInput.id = 'start_time-edit';


        let endInput = document.createElement('input');
            endInput.type = 'text';
            endInput.value = elemEnd;
            endInput.name = 'end_time';
            endInput.id = 'end_time-edit';

        //Create save form
        let saveForm =
            "<form action=\"/?_method=PUT\" method=\"post\">" +
                "<input type=\"hidden\" name=\"title\" id=\"title-edited\">" +
                "<input type=\"hidden\" name=\"start_time\" id=\"start_time-edited\">" +
                "<input type=\"hidden\" name=\"end_time\" id=\"end_time-edited\">" +
            "<button class=\"btn btn-success\" type=\"submit\" name=\"edit-button\" value=" + elem.value + ">Save</button>" +
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

        //Set data for the hidden inputs
        //Insert title  value
        document.getElementById('title-edited').value = document.getElementById('title-edit').value;
        //Insert start time value
        document.getElementById('start_time-edited').value = document.getElementById('start_time-edit').value;
        //Insert end time value
        document.getElementById('end_time-edited').value = document.getElementById('end_time-edit').value;

        //Listen to form changes
        //Title listener
        document.getElementById('title-edit').addEventListener('change', () => {
            document.getElementById('title-edited').value = document.getElementById('title-edit').value;
        });
        //Start time listener
        document.getElementById('start_time-edit').addEventListener('change', () => {
            document.getElementById('start_time-edited').value = document.getElementById('start_time-edit').value;
        });
        //End time listener
        document.getElementById('end_time-edit').addEventListener('change', () => {
            document.getElementById('end_time-edited').value = document.getElementById('end_time-edit').value;
        });


    });
});



