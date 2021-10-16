# 1.
The bug was that `num1` and `num2` were strings and `result` was just the concatenation of those 2 strings and not the addition of the 2 numerical integers.

# 2.
I would fix this by first converting `num1` and `num2` into number type first before adding them. We can do this by using the `parseInt()` method from JavaScript.