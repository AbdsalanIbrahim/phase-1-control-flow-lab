// 1. Function for scuberGreetingForFeet
function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 2000 && someValue < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (someValue >= 2500) {
    return "No can do.";
  }
}

// 2. Function for ternaryCheckCity
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// 3. Function for switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
