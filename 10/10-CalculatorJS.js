  //Calculator JavaScript
  
  // Keep track of the current calculator input and restore it from localStorage.
    // Initializes with what is in local storage. If none, it is initialized with an empty string
    let calculation = localStorage.getItem('calculation') || "";
    let total =""

    // When the page first load, if a calculation is already saved to the local storage, display it otherwise, display zero
    if(localStorage.getItem('calculation')){
      document.querySelector('.js-display').innerHTML = `${calculation}`;
    }else{
      document.querySelector('.js-display').innerHTML = `0`;
    }

    // Keep adding input, then save into local storage
    function updateCalculation(input){
      calculation += input;
      localStorage.setItem('calculation',calculation);  // save on local storage
      return localStorage.getItem('calculation');   // retrieve what is saved
    }
  
    // return the total
    function totalCalculation(calculation){
      return total = eval(calculation); // eval() evaluate the string expression using math
    }

    // Display the input when clicking a button
    function display(input){
      document.querySelector('.js-display').innerHTML = `${input}`;
    }
