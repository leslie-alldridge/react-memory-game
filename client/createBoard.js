function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

const createCell = (id, value) => ({id: id, value: value, isVisible: false, image: '/images/' + value + '.png'})

const createBoard = (size) => {
  let id = 0
  const values = shuffle([
    'Mouse', 'Mouse',
    'Rabbit', 'Rabbit',
    'Guinea Pig', 'Guinea Pig',
    'Dog', 'Dog',
    'Cat', 'Cat',
    'Rat', 'Rat',
    'Parrot', 'Parrot',
    'Duck', 'Duck'
  ])

  return Array(size).fill(0).map(
    () => Array(size).fill(0).map(
      () => createCell(++id, values.pop())
    )
  )
}

export default createBoard