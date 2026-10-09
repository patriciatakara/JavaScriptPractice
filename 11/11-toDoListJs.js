// To-do List JavaScript

const tasks = [];


// Adds the input task to the list and refreshes the display.
function addTask(){
  let inputName = document.querySelector('.js-inputBox'); // gets the HTML input element, no the value
  let inputDate = document.querySelector('.js-dateBox');

  const task = inputName.value; // gets the value in the box
  const date = inputDate.value;  // gets the value in the box

  if(task !== ''){
    tasks.push({name:task, date:date}); // add task with date (object) to the list of objects
    inputName.value =''; //clean box after adding a task
    inputDate.value =''; //clean box after adding a date
    
  }
  //displayTasks(tasks);
  displayTasks(tasks);
  console.log(tasks.length);
  console.log(tasks);
  return;
}

function enterPressed(key){
  if(key === 'Enter'){
    addTask();
  }
}

// Display list of tasks
function displayTasks(list){
  // combine all htmls
  let toDoListHtml ='';
 
  // for each element on this list we create a new line of html
  for(let i=0; i<list.length; i++){
    const taskObject = list[i];
    const taskName = taskObject.name;
    const taskDate = taskObject.date;
    const html = `
      <div>${taskName}</div>
      <div>${taskDate}</div>
      <button class="deleteButton"
      onclick ="deleteTask(${i})">Delete</button>
  
    `;
    toDoListHtml += html;
  }
    let displayList = document.querySelector('.js-list') 
    
    displayList.innerHTML = toDoListHtml;
  }

  //Delete Button
  function deleteTask(index){
    tasks.splice(index,1);
    displayTasks(tasks); 
  }


// Date Box


