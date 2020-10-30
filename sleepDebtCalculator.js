const getSleepHours = (day) =>{
if(day === 'Monday'){
  return 8;
}else if(day === 'Tusday'){
  return 9;
}else if(day === 'Wednesday'){
  return 10;
}else if(day === 'Thursday'){
  return 7;
}else if(day === 'Friday'){
  return 11;
}else if(day === 'Saturday'){
  return 5;
}else{
  return 'eror'
}
}

const getActualSleepHours = () =>  getSleepHours('Monday') + getSleepHours('Tusday') +getSleepHours('Wednesday') +getSleepHours('Thursday') +getSleepHours('Friday') +getSleepHours('Saturday') ;   

const getIdealSleepHours = () => {
  const idealHours = 9;
  return idealHours * 7;
  }; 

  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  }


  if(actualSleepHours === idealSleepHours){
    console.log('You got perfect amount sleep')
  }else if(actualSleepHours > idealSleepHours) {
  console.log('You got more sleep than needed ');
}else if(actualSleepHours < idealSleephours){
console.log(' You should get some rest.')
}else{
  console.log('something wrong check your code')
}
calculateSleepDebt();
