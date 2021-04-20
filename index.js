// let arr = [2,100, 9,8,4,5,1,3,4,5,6,73,4,22]
// arr.sort( (function (a, b) {
//     return b - a
// }))
    
// console.log(arr);

// 'Task 2'
// let arr = [1, '', 30, false, null, undefined, 20, 31, 'js']
// let newArr = arr.filter(item => item != null && item != false)
// console.log(newArr);

// 'Task 3'



// вариант 1

// const users = [
//    {
//        name: 'Vitaliy',
//        age: 29
//    },
//    {
//        name: 'Petya',
//        age: 17
//    },
//    {
//        name: 'Senya',
//        age: 26
//    },
//    {
//        name: 'Arseniy',
//        age: 20
//    }
//  ];

// let result = propertyValue(users, 'name');
// console.log(result);
// function propertyValue(arr, key) {
//    let arrFunc = arr;
//    arrFunc.reduce( (acc, item, i, arr) =>{
//        return acc, arr[i] = arr[i][key]
//    }, [])
//    return arrFunc
//  }


// вариант 2

// let users = [
//     {
//         name: 'Kate',
//         age: 22
//     },
//     {
//         name: 'Semen',
//         age: 41
//     },
//     {
//         name: 'Vitaliy',
//         age: 29
//     },
//     {
//         name: 'Victoria',
//         age: 28
//     }
// ];

// let propertUsers = users.map( item => item.name)
// console.log(propertUsers);





// //  'Task 4'

//  let arr = ["I", "will", "learn", "JavaScript", "in", "future"]
// arr.reduce( (acc, item, i, arr) =>{
//     return acc, arr[i] = arr[i].length
//  }, [])
// console.log(arr);


// 'Task 5'
// let numbers = [2, 3, 5, 7, 11, 13, 17];
// let x = currentSums(numbers);
// console.log(x);
// function currentSums(numbers) {
//    let result = [];
//    numbers.reduce(function(acc, current, i) {
//       return result[i] = acc + current;
//    }, 0);
//    return result
// }

// task 6

// let arr = ["I", "will", "learn", "JavaScript", "in", "future"]
// arr.map( (cur, ind, arr) => {
//     return arr[ind] = arr[ind].length
// })
// console.log(arr);

// Task 7

// let inputValue = document.getElementById('inputValue');
// let btn_1 = document.getElementById('btn_1')
// let result = document.getElementById('result')
// let btn_2 = document.getElementById('btn_2')

// btn_1.addEventListener('click',createArr)

// function createArr() {
//    let y = inputValue.value;
//    let sortArr = y.split('');
//    sortArr.sort( (a, b) => {
//       return a - b;
//    })
//    console.log(sortArr);
//    btn_2.onclick = function() {
//       result.innerHTML = sortArr
//    }
// };

