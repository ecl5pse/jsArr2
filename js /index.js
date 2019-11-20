'use strict';

/*
function MyArray()
{

    this.length = 0;
    for (let value of arguments) {

        this.push(value);
    }




MyArray.prototype = {

    pop() {
             if (this.length > 0) {
             const result = this[--this.length];
            delete this[this.length];
            return result;
            }
        },

    push() {
             if(this.length > 0){
                 ``
             }
             }
    },



    };

*/


/*
const users= [
    {
        name: 'Test1',
        age: 13,
    },

    {
        name: 'Tes@1',
        age: 99,
    },

    {
        name:'Test4',
        age:55,
    },
    {
        name:'Test5',
        age:55,
    },
];



users.forEach(
    function (value) {

        value.isSelected = false;

    }
);


*/



// function powEach(currentValue , index , arr) {
//
//     arr[index] = pow(currentValue , 2);
//
// }


/*
function pow (base , exponent) {

    if(exponent === 1){
        return base;
    }

    return base *pow(base , exponent - 1);
}



*/




/*
const  MAJORITY_AGE=18;


function User(name , age) {

    this.name = name;
    this.age = age;

};

const  users = [];

let i = 0;


while (i++ < 40){
    users.push(new User(`Username${i}`,10+i ));
};


const minorUsers = users.filter(
    user => user.age < MAJORITY_AGE
);


const resultOne = users.filter(
    user => user.age >= MAJORITY_AGE
);

*/

/*

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
*/



const  user = [];

for(let i = 0 ; i<10 ; i++ ) {

    user.push(
        {
            name: `User${i + 1}`,
            age: 10+i,
        }
    )
}

    const result = user.map(

        function (user) {

            return {
                name: user.name,
                age: user.age,
                isSelected: false,
            };
        }
    );






