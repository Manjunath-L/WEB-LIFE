//* 1. Arithmetic Operators -->`+`, `-`, `*`, `/`, `%`, `**`

// let a = 10;
// let b = 5;
// console.log(a + b); //& Addition
// console.log(a - b); //& Subtraction
// console.log(a * b); //& Multiplication
// console.log(a / b); //& Division
// console.log(a % b); //& Modulus

// console.log(b % a);
// console.log(-a % b);
// console.log(a % -b);

// console.log(a ** b); //& Exponentiation
// console.log(b ** a);
// console.log(2 ** 2);

//* 2. Assignment Operators --> `=`, `+=`, `-=` , `*=` , `/=` , `%=` , `**=`

// let a = 10;
// let b = 5;
// console.log(a += b); //& a = a + b --> 10 + 5 = 15
// console.log(a -= b); //& a = a - b --> 15 - 5 = 10
// console.log(a *= b); //& a = a * b --> 10 * 5 = 50
// console.log(a /= b); //& a = a / b --> 50 / 5 = 10
// console.log(a %= 2); //& a = a % 2 --> 10 % 2 = 0
// console.log(a **= 3); //& a = a ** 3 --> 0 ** 3 = 0

//* 3. Comparison Operators --> `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

// let x = 10; //& This is a number
// let y = 10;
// let z = `10`; //& This is a string
// //& `==` --> value only
// console.log(x == y); //& This will return true because both are equal in value and type.
// console.log(x == z); //& This will return true because both are equal in value, even though they are of different types (number and string).
// //& `===` --> value and datatype
// console.log(x === y); //& This will return true because both are equal in value and type.
// console.log(x === z); //& This will return false because they are of different types (number and string).

// console.log(x != y);
// console.log(x !== y); //& This will return false because both are equal in value and type.
// console.log(x !== z); //& This will return true because they are of different types (number and string).
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

//* 4. Logical Operators --> `&&`, `||`, `!`

//& `&&` --> Logical AND: returns true if both operands are true, otherwise returns false.
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// //& `||` --> Logical OR: returns true if at least one of the operands is true, otherwise returns false.
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// //& `!` --> Logical NOT: returns true if the operand is false, otherwise returns false.
// console.log(!true);
// console.log(!false);

//* 5. Bitwise Operators --> `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`

//& `&` --> Bitwise AND: compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1. Otherwise, it is set to 0.
// let a = 5; //& In binary: 0101
// let b = 1; //& In binary: 0001
// console.log(a & b); //& Bitwise AND: 0101 & 0001 = 0001 (1 in decimal)
// console.log(14 & 4); //& 14 in binary: 1110, 4 in binary: 0100, 1110 & 0100 = 0100 (4 in decimal)
// console.log(8 & 15); //& 8 in binary: 1000, 15 in binary: 1111, 1000 & 1111 = 1000 (8 in decimal)

//& `|` --> Bitwise OR: compares each bit of the first operand to the corresponding bit of the second operand. If either bit is 1, the corresponding result bit is set to 1. Otherwise, it is set to 0.
// let a = 5;
// let b = 1;
// console.log(a | b); //& Bitwise OR: 0101 | 0001 = 0101 (5 in decimal)

//& `^` --> Bitwise XOR: compares each bit of the first operand to the corresponding bit of the second operand. If the bits are different, the corresponding result bit is set to 1. Otherwise, it is set to 0.
// let a = 5;
// let b = 1;
// console.log(a ^ b); //& Bitwise XOR: 0101 ^ 0001 = 0100 (4 in decimal)

//& `~` --> Bitwise NOT: inverts each bit of the operand. If the bit is 0, it is set to 1. If the bit is 1, it is set to 0.
let x = 5;
console.log(~x); //& Bitwise NOT: ~0101 = 1010 (10 in decimal)

//& `<<` --> Bitwise left shift: shifts the bits of the first operand to the left by the number of bits specified in the second operand. The bits that are shifted out are lost.
// let a = 8;
// let b = a << 1;
// console.log(b); //& Bitwise left shift: 1000 << 1 = 0000 (16 in decimal)

//& `>>` --> Bitwise right shift: shifts the bits of the first operand to the right by the number of bits specified in the second operand. The bits that are shifted out are lost.
// let a = 5;
// let b = a >> 1;
// console.log(b); //& Bitwise right shift: 0101 >> 1 = 0010 (2 in decimal)

//* Nullish Operator --> `??`

let valuableData = "diamond🩵" ?? "default data";
// let valuableData = undefined?? "defalut data";
console.log(valuableData);

//* Comma Operator --> `,`

// let x = (1, 2, 3);
// console.log(x); //& This will return 3 because the comma operator evaluates each of its operands (from left to right) and returns the value of the last operand.
