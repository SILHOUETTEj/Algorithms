let arr = [3,11,22,13,1,45,13,17,22,31,28,10,7]

// Функция для нахождения наименьшего числа
function findSmallest(arr) {
    let smallest = arr[0];
    let smallest_index = 0;
    for(let i = 1; i < arr.length; i++) {
        if(smallest > arr[i]) {

            smallest = arr[i];
            smallest_index = i;
        }
 
    }
    return smallest_index;

}

// Функция сортивки
function selection_sort(arr) {
    let sortedArr = [];
    let lengthOfArr = arr.length;
    for(let i = 0; i < sizeOfArr; i++) {
        sortedArr.push(arr[findSmallest(arr)]);
        arr.splice(findSmallest(arr),1);
        console.log('work');
    }
    return sortedArr;
}

