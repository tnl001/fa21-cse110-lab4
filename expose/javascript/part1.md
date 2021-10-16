# 1. 
`values added: 20`
   
# 2. 
`final result: 20`
   
# 3. 
`values added: 20`
   
# 4. 
Line 13 returns an error because it is accessing the variable 'result' that is outside of its block. 'result' was declared as 'let' inside of the if block, so it cannot be accessed outside of that if block.
   
# 5. 
Line 9 returns an error because we declared 'result' as a constant type but then tried to re-assign it in line 7.
   
# 6. 
The program can't reach line 13 since there's an error at line 9 described in #5. Line 13 alone (not counting the error from line 9) would return an error because 'result' is outside of the if block (since 'const' type gives the variable the same scope as 'let' type).