let arr = [3,11,22,13,1,45,13,17,22,31,28,10,7]

// Функция сортировки
function quick_sort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        let pivot = arr[0];
        let lessArr = [];
        let largerArr = []
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] > pivot) {
                largerArr.push(arr[i])
            } else lessArr.push(arr[i])
        }
       
        lessArr = quick_sort(lessArr)
        largerArr = quick_sort(largerArr)
        return lessArr.concat(pivot,largerArr)
    }


}

