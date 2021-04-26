### Part 1a
1. 20
2. 20
3. 20
4. Error. This is because result is out of scope since it was declared inside the if statement.
5. Error. This is because const variables cannot be modified after being initialized with a value.
6. Error. Since line 9 already presents an error, this part of the program won't be executed.
### Part 1b
1. Will print 3. This is because i is declared as a var, so it can be used outside of scope. Additionally, the for loop stops iterating when i = 3. Thus, 3 is printed on line 12.
2. Will print 150. This is because discountedPrice is declared as a var, so it can be used outside of scope. Additionally, the final value of discountedPrice will be 150 because 300 is the last element processed, which results in a dicountedPrice of 150.
3. Will print 150. This is because the final value of finalPrice will use the final value of discountedPrice. Since the final value of discountedPrice was 150, doing the rounding operation causes finalPrice to have the same value as disconutedPrice.
4. This function will return the discounted array. This is because discounted is initialized as an array, so when you return it, it will be an array.
5. Error. This is because i is out of scope since it was declared inside of the for loop with let.
6. Error, This is because discountedPrice is out of scope since it was declared inside of the for loop with let.
7. Will print 150. This is because the final value of finalPrice will use the final value of discountedPrice. Since the final value of discountedPrice was 150, doing the rounding operation causes finalPrice to have the same value as disconutedPrice. Additionally, finalPrice is in scope, which allows it to be printed without error.
8. This function will return the discounted array. This is because discounted is initialized as an array, so when you return it, it will be an array.
9. Error. This is because i is out of scope since it was declared inside of the for loop with let.
10. Will print 3. This is because length is initialized to the length of the prices array, which is 3. Additionally, this value does not change throughout the program, which leads to no errors because length is declared as a const.
11. This function will return the discounted array. This is because discounted is initialized as an array, so when you return it, it will be an array. Additionally, discounted is not reassigned, which means no errors because it is a const. Although the properties of discounted is changed, it is allowed for const arrays.
12. Question 12
    - student.name
    - student["Grad Year"] 
    - student.greeting() 
    - student['Favorite Teacher'].name 
    - student.courseload[0]
13. Question 13
    - '3' + 2 = '32'. Number is casted to string, which results in the operation '3' + '2'. This is equal to '32'.
    - '3' - 2 = 1. String is casted to number, which results in the operation 3 - 2. This is equal to 1.
    - 3 + null = 3. Null is casted to 0, which results in the operation 3 + 0. This is equal to 3.
    - '3' + null = '3null'. Null is casted to string, which results in the operation '3' + 'null'. This is equal to 3null.
    - true + 3 = 4. True is casted to a number, which results in the operation 1 + 3. This is equal to 4.
    - false + null = 0. false and null are casted to 0. This results in the operation 0 + 0. This is equal to 0.
    - '3' + undefined = '3undefined'. undefined is casted to string, which results in the operation '3' + 'undefined'. This is eqaul to '3undefined'.
    - '3' - undefined = NaN. String is casted to number, which results in the operation 3 - underfined. This is equal to NaN.
14. Question 14
    - '2' > 1 -> true. '2' is casted to number, which results in the expression 2 > 1. This is true;
    - '2' < '12' -> false. By comparing the first character of each string, we can see that '2' is greater than '1' lexicographically. Thus, the result if false.
    - 2 == '2' -> true. String is casted to number, which results in the expression 2 == 2. This is true.
    - 2 === '2' -> false. Since the strict equlity check is used, it returns false since 2 and '2' are different types.
    - true == 2 -> true. Since true is all values greater than 0,
    the result of true == 2 is true.
    - true === Boolean(2) -> true. Boolean(2) is casted to true because true is all values greater than 0. Since the strict equality used and both variables are true, it returns true.
15. === is the strict equality check, which means that both the variable and the typing have to the same. == does not require the same typing because of casting. 
16. In corresponding file.
17. The result for the following code will be [2,4,6]. This is because of how the modifyArray function processes the callback parameter. When callback is called in line 4, it calls doSomething do modify the element inside the array. This results in the element getting multipled by 2 before getting pushed into newArr. 
18. In corresponding file.
19. 1 4 3 2