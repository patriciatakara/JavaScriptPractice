// To-do List JavaScript

const tasks = [];

function addTask(){
  let input = document.querySelector('.js-inputBox'); // gets the HTML input element, no the value
  let task = input.value; // gets the value in the box

  if(task !== ''){
    tasks.push(task); // add task to list
    input.value =''; //clean box after adding a task
  }
  console.log(tasks);
  console.log(tasks.length);
  console.log(tasks);
  return;
}

function enterPressed(key){
  if(key === 'Enter'){
    addTask();
  }
}




