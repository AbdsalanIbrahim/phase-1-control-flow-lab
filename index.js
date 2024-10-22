function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 400 && someValue <= 2000) {
    return 'That will be $30.';
  } else if (someValue > 2000 && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

function calculateRideCost() {
  const rideDistance = document.getElementById('rideDistance').value;
  const result = scuberGreetingForFeet(Number(rideDistance));
  document.getElementById('rideCostResult').textContent = result;
}

function checkCity() {
  const city = document.getElementById('city').value;
  const result = ternaryCheckCity(city);
  document.getElementById('cityResult').textContent = result;
}

function calculateTipResponse() {
  const tip = document.getElementById('tip').value;
  const result = switchOnCharmFromTip(tip);
  document.getElementById('tipResult').textContent = result;
}

