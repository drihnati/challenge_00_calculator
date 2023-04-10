function calculate(n1, n2, op) {
if (op==='+') {
  let total= Number(n1)+Number(n2)
  alert('The sum is ' + total)
} 
else if (op==='-') {
  let total= Number(n1)-Number(n2)
  alert('The subtract is ' + total)
}
else if (op==='/') {
  let total= Number(n1)/Number(n2)
  alert('The division is ' + total)
}
else if (op==='*'){
  let total= Number(n1)*Number(n2)
  alert('The multiply is ' + total)
}
else {
  alert('error')
}
}