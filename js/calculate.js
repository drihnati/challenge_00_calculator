function calculate(n1, n2, op) {
  if (op === '+') {
    let total = Number(n1) + Number(n2)
    console.log('The sum is ' + total)
   
  }
  else if (op === '-') {
    let total = Number(n1) - Number(n2)
    console.log('The subtraction is ' + total)
  }
  else if (op === '/') {
    let total = Number(n1) / Number(n2)
    console.log('The division is ' + total)
  }
  else if (op === '*') {
    let total = Number(n1) * Number(n2)
    console.log('The multiplication is ' + total)
  }
  else {
    console.log('error')
  }
}

