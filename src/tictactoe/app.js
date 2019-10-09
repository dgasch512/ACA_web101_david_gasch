 console.log('Helllloooooo')
// find location of click and add x or o
function addGamePiece(selectedElement) {
  // create new element
  let newElement = document.createElement('h1')
  // add text to element
  newElement.innerHTML = 'x'
  // add element with text to selectedElement on page
  selectedElement.appendChild(newElement)
  // tell me what I did
  console.log('show clicked div', selectedElement)
}

// determine player1 or player2
// keep score
// find a winner via 3 in a row 
 
 
 
 
 