function shuffle(array) {
    const length = array.length
    const shuffled = [...array]

    for (let i = length; i > 0; i--) {
        const random = Math.floor(Math.random() * length)

        shuffled[i] = array[random]
        shuffled[random] = array[i]
    }

    return shuffled
}

const createCell = (id, value) => ({id: id, value: value, isVisible: false, image: '/images/' + value + '.png'})

const createBoard = (size) => {
    let id = 0
    const values = shuffle([
        'Mouse',
        'Mouse',
        'Rabbit',
        'Rabbit',
        'Guinea Pig',
        'Guinea Pig',
        'Dog',
        'Dog',
        'Cat',
        'Cat',
        'Rat',
        'Rat',
        'Parrot',
        'Parrot',
        'Duck',
        'Duck'
    ])

    return Array(size)
        .fill(0)
        .map(() => Array(size).fill(0).map(() => createCell(++id, values.pop())))
}

export default createBoard
