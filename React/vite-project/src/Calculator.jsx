function Calculator(props) {
  let n1 = props.n1;
  let n2 = props.n2;
  let op = props.op;
  let res = 0;
  console.log(n1, n2, op);

  if (op === "+") {
    res = n1 + n2;
    return <h1> Sum is :{res} </h1>;
  } else if (op === "-") {
    res = n1 - n2;
    return <h1> Difference is :{res} </h1>;
  } else if (op === "*") {
    res = n1 * n2;
    return <h1> Product is :{res} </h1>;
  } else if (op === "/") {
    res = n1 / n2;
    return <h1> Quotient is :{res} </h1>;
  } else if (op === "%") {
    res = n1 % n2;
    return <h1> Remainder is :{res} </h1>;
  } else {
    return <h1> Invalid Operator </h1>;
  }
}
export default Calculator;
