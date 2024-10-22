function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 400 && someValue <= 2000) {
    return "That will be twenty bucks.";
  } else {
    return "Sorry, I can’t help you with that.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "I love NYC!" : "Sorry, I can’t help you with that.";
}

function switchOnCharmFromTip(tip) {
  switch (true) {
    case tip < 20:
      return "Thank you for your tip!";
    case tip >= 20 && tip < 50:
      return "Thank you so much!";
    case tip >= 50:
      return "Wow! Thank you!";
    default:
      return "No tip received."; 
  }
}

