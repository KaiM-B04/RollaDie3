let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    const inputText = inputField.value;
    const newDiv = document.createElement('div');
    newDiv.classList.add('dynamic-div');

    const newPara = document.createElement ('p');
    newPara.textContent = inputText;

    newDiv.appendChild(newPara);
    toDoContainer.appendChild(newDiv);

    inputField.value = '';
});