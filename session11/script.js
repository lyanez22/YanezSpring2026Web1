function dragElement(groceryElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    groceryElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;

        pos3 = e.clientX;
        pos4 = e.clientY;

        groceryElement.style.top =
            (groceryElement.offsetTop - pos2) + 'px';

        groceryElement.style.left =
            (groceryElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('grocery1'));
dragElement(document.getElementById('grocery2'));
dragElement(document.getElementById('grocery3'));
dragElement(document.getElementById('grocery4'));
dragElement(document.getElementById('grocery5'));
dragElement(document.getElementById('grocery6'));
dragElement(document.getElementById('grocery7'));
dragElement(document.getElementById('grocery8'));
dragElement(document.getElementById('grocery9'));
dragElement(document.getElementById('grocery10'));
dragElement(document.getElementById('grocery11'));
dragElement(document.getElementById('grocery12'));
dragElement(document.getElementById('grocery13'));
dragElement(document.getElementById('grocery14'));