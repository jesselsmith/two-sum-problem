function bruteForceTwoSum(array, sum) {
    let solutions = []
    
    array.forEach((number, i) => {
        for(let j = i + 1; j < array.length; j++){
            if(number + array[j] == sum){
                solutions.push([number, array[j]])
            }
        }
    });

    return solutions
}

function binarySearchTwoSum(array, sum){
    let solutions = []
    
    array.sort((a,b) => a - b)

    array.forEach((number, i) => {
        let diff = sum - number
        let indexOfDiff = binarySearch(array, diff, i)
        if(indexOfDiff !== -1){
            solutions.push([number, diff])
            array.splice(indexOfDiff, 1)
        }
    })

    return solutions
}

function binarySearch(array, queryItem, startIndex, endIndex = array.length) {    
    if(endIndex - startIndex <= 0){
        return -1
    }
    let halfway = Math.floor((startIndex + endIndex) / 2)

    if(array[halfway] == queryItem){
        return halfway
    }else if(array[halfway] < queryItem){
        return binarySearch(array, queryItem, halfway + 1)
    }else{
        return binarySearch(array, queryItem, startIndex, halfway - 1)
    }
}

function binaryMatch(sortedArray, missingNum) {
    return !!binarySearch(sortedArray, missingNum, 0)
}


function hashTwoSum(array, sum){
    let numHash = {}
    
    array.forEach(number => {
        if(numHash[number]){
            numHash[number] += 1
        }else{
            numHash[number] = 1
        }
    })

    let solutions = []
    array.forEach(number => {
        if(numHash[number]){
            numHash[number] -= 1
            if(numHash[sum - number]){
                solutions.push([number, sum - number])
                numHash[sum - number] -= 1
            }
        }
    })
    return solutions

}