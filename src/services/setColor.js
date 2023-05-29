//set color from svg

export const setColor = (lang) => {
  switch (lang) {
    case "JavaScript":
      return "yellow";
    case "HTML":
      return "darkred";
    default:
      return "grey";
  }
};

export const setColorCircle = (lang) => {
  switch(lang) {
    case 'public':
      return 'lightgreen';
    case 'private':
      return 'red'
  }
}