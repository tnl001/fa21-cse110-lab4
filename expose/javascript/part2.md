# 1. 
Line 12 will print 3 because i was declared as a `var` type which can be access anywhere within the scope of the function. At the end of the for-loop, `i` becomes 3 since that is when the loop ends (we passed in an array of 3 items for the prices). 

# 2. 
Line 13 will print 150 because discountedPrice was declared as a `var` type which can be access anywhere within the scope of the function. At the end of the for-loop, `discountedPrice` becomes 150 since that is 0.5 (or 50%) discounted from the price 300, which is the last price in the array. 

# 3. 
Line 14 will also print 150 because finalPrice was declared as a `var` type which can be access anywhere within the scope of the function. At the end of the for-loop, `finalPrice` becomes 150 since that is 0.5 (or 50%) discounted from the price 300, which is the last price in the array. 

# 4. 
This function will return an array of discounted prices where each new price is half of the corresponding old price. This is because we passed in 0.5 as the discount argument. Inside the function, it loops through the old prices and for each of them, it calculates the new price using the discount argument. Then, each new price will be pushed to an array which will be returned at the end.

# 5. 
Line 12 will print an error because `i` is outside of the for-loop. `i` was declared as a `let` type so it can only be accessed inside the for-loop.

# 6. 
Line 13 will print an error because `discountedPrice` is outside of the for-loop. `discountedPrice` was declared as a `let` type so it can only be accessed inside the for-loop.

# 7. 
Line 14 will print 150 because that is what `finalPrice` is updated to at the end of the for-loop. Since `finalPrice` was declared outside of the for-loop and inside of the function, it can be accessed anywhere within the function.

# 8. 
Similar to #4, since the returning array was declared as a `let` type within the function outtermost scope, it can be accessed anywhere. This function will return an array of discounted prices where each new price is half of the corresponding old price. This is because we passed in 0.5 as the discount argument. Inside the function, it loops through the old prices and for each of them, it calculates the new price using the discount argument. Then, each new price will be pushed to an array which will be returned at the end.

# 9. 
Line 11 will print an error because `i` is outside of the for-loop. `i` was declared as a `let` type so it can only be accessed inside the for-loop.

# 10. 
Line 12 will print 3 because `length` was declared to be the length of the input array `prices`, which is 3 (and we did not modify the array so the length stayed the same).

# 11. 
This function will return an array of discounted prices where each new price is half of the corresponding old price. This is because we passed in 0.5 as the discount argument. Inside the function, it loops through the old prices and for each of them, it calculates the new price using the discount argument. Then, each new price will be pushed to an array which will be returned at the end. Notice that we did not re-assign the constant `discounted` array but rather pushing items into it, so it didn't give an error.

# 12. 

A.  `student.name;`

B.  `student["Grad Year"];`

C.  `student.greeting();`

D.  `student["Favorite Teacher"].name;`

E.  `student.courseLoad[0];`


# 13. 

A.  `'32'`. JS maps `2` to its exact string representation, which is `'2'`, and then concat. the strings.


B. `1`. JS maps `'3'` to its integer representation, which is `3`, and then performs the subtraction.

C. `3`. JS maps `null` to `0` and then performs addition.


D. `'3null'`. JS maps `null` to `'null'` and concat. the 2 strings.


E. `4`. JS maps `true` to `1` and then performs addition.


F. `0`. `false` maps to `0` and `null` also maps to `0`.

G. `'3undefined'`. JS maps `undefined` to `'undefined'` and then concat. the 2 strings.

H. `NaN`. There's no mapping for `undefined` to an `int`.

# 14. 

A.  `true`. `'2'` maps to `2` which is > 1.

B.  `false`. First char is `'2'` which is > `'1'`.
    .  `true`. `'2'` maps to `2` which is == `2`.

C.  `false`. `2` is a number type while `'2'` is a string type.

D.  `false`. JS maps `true` to `1` which is not `2`.

E.  `true`. The boolean of any value by itself is always true.

# 15. 
`===` will check for everything (value, datatype, etc), while `==` only checks for value.

# 17.   
The result will be an array `[2,4,6]` because the `modifyArray` function takes `doSomething` function as an argument and then used that argument to calculate the item of the returning array `newArr`. `doSomething` takes in a number and multiplies it by 2. Inside the `modifyArray` function, we can see how `newArr` is pushing the results of calling the callback function `doSomething` which took each item of the `array` argument and multiplied them by 2.

# 19.  
  `1`\
  `4`\
  `3`\
  `2`