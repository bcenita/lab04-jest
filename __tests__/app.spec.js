'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */

describe('Basic math', function() {
    it('should add numbers correctly', function() {
        //javascript
        let result = 1 + 1;
    
        //assertion
        expect(result).toEqual(2);
    });
});

describe('invertCase() function', function() {
    it('should invert case for each letter', function() {
        let test = invertCase('the quick brown fox jumps over the lazy dog');
        expect(test).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
    });
});
