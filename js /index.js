'use strict';

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
             for (let value of arguments) {

                    this[this.length++] = value;
             }

             return this.length;
        },


    };