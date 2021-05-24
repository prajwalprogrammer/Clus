function getRandomColor() {
    return 'rgb(' + 
      (Math.floor(Math.random()*250)) + ', ' +
      (Math.floor(Math.random()*250)) + ', ' +
      (Math.floor(Math.random()*250)) +
      ')';
  }

  
export default getRandomColor