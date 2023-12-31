const taskName = document.getElementById('task-name');
const listContainer = document.getElementById('list-container');
//Get form element
const taskForm = document.getElementById('task-form');


function addTask(event)
{
    //Prevent default for submission page reload
    event.preventDefault();
   
    if (taskName.value === '')
    {
        alert("You must enter a task!");
    }
    else
    {
        //Create a list item element
        let li = document.createElement("li");
        //set li task name value to innerHTML
        li.innerHTML = taskName.value;
        //Append the list item to the list container
        listContainer.appendChild(li);
        //append x to end of li item
        let img = document.createElement("img");
        img.src = 'img/delete.png';
        li.appendChild(img);
    }   
    //Clear the input text form
    taskName.value = '';
}
taskForm.addEventListener('submit', addTask);

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        console.log("checked")
        saveData();
    }
    else if(e.target.tagName === "IMG")
    {
        e.target.parentElement.remove();
        console.log("remove")
        saveData();
    }
}, false);

//Save data locally to browser storage
function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();