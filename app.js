const day = 1440;

// Grab Values
let lastMealHour;
let lastMealMinutes;
let eatingWindow;

function grabNumbers(){
  lastMealHour = Number(document.getElementById('mealHour').options[document.getElementById('mealHour').selectedIndex].value);
  
	lastMealMinutes = Number(document.getElementById('mealMinutes').options[document.getElementById('mealMinutes').selectedIndex].value);
  
	eatingWindow = Number(document.getElementById('eatingWindow').options[document.getElementById('eatingWindow').selectedIndex].value);
}

// Get Result
let hourResult = document.getElementById('hourResult');
let minResult = document.getElementById('minResult');

// Button Event Listener
const button = document.getElementById('btn-calculate');

button.addEventListener('click', buttonClicked);

let endWindow;
function buttonClicked(){
  flashOrange();
function flashOrange() {
  document.getElementById('get').style.backgroundColor = '#ffce73';
    setTimeout(function(){
  document.getElementById('get').style.backgroundColor = 'white';;
  }, 500)
}
  grabNumbers();
  let startWindow = (lastMealHour * 60) + lastMealMinutes;
  eatingWindow *= 60;
  let totalMins = startWindow + eatingWindow;
  if(totalMins > day){
    endWindow = totalMins - day;
    return minutesToTime(endWindow);
  } else {
    endWindow = totalMins;
    return minutesToTime(endWindow);
  }
};

function minutesToTime(minutes){
  let hours = Math.floor(minutes / 60);
  let minut = minutes - (hours * 60);
  hourResult.innerText = hours;
  if (minut != 0){
    minResult.innerText = minut;
  } else {
    minResult.innerText = '00';
  }
}
