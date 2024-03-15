function find_highest(array) {
    var highest = array[0]

    for (let index = 0; index < array.length; index++) {
        if (array[index] > highest) {
            highest = array[index]
        }
    }
    return highest
}

// console.log(find_highest([3, 5, 123, 4])); 

function find_string(array) {
    for (let index = 0; index < array.length; index++) {
        if (typeof array[index] === 'string') {
            return array[index]
        }
    }
}

// console.log(find_string([-1, 3, "Good", 6, 99, 12, 2]))


function find_one(array) {
    var finded = []

    for (let index = 0; index < array.length; index++) {
        if (array[index] === 1 || array[index] === 0) {
            finded.push(array[index])
        }
    }
    return finded
}

// console.log(find_one([0, 1]));

function count_range(array) {
    var counted = 0
    for (let index = 0; index < array.length; index++) {
        if (array[index] >= 11 && array[index] <= 55) {
            counted++
        }
    }
    return counted
}

// console.log(count_range([11, 12, 13])); 

function trim_string(input_string) {
    const result = input_string.match(/:(.*?):/)
    return result ? result[1] : ""
}

// console.log(trim_string("aasdkmsalkmd:adasd:0asdasdj"));