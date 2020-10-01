// if divisible by 3 and divisible by 5 / fizzbuzz
// if / by 3 // fizz
// if / by 5 // buzz

function divisibileByThreeAndFive(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    return true
  }
}

function appendToFizzBuzzUl(word, color) {
  let fizzBuzzUl = document.createElement('ul');
  let fizzBuzzLi = document.createElement('li');
  let fizzBuzzTextNode = document.createTextNode('FizzBuzz');
  fizzBuzzLi.appendChild(fizzBuzzTextNode);
  fizzBuzzUl.appendChild(fizzBuzzLi);
  let fizzBuzzDiv = document.getElementById('fizzbuzz')
  fizzBuzzDiv.appendChild(fizzBuzzUl);
}

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (divisibileByThreeAndFive(i)) {
      appendToFizzBuzzUl('FizzBuzz')
    }

  }
}

fizzBuzz()