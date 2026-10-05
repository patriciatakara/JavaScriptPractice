//10.c
const jsButton = document.querySelector('.js-button10c');
console.log(jsButton.classList.contains('secondProp')); 

//10.d/e
function toggle(button){
  if(button.classList.contains('isToggled')){
    button.classList.remove('isToggled');
  }else{
    button.classList.add('isToggled');
  }
}
