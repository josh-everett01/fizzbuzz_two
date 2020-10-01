
function fizzBuzz() {
  createFizzBuzzUl()
  for (let number = 1; number <= 100; number++) {
    if (divisibileByThreeAndFive(number)) {
      appendToFizzBuzzUl('FizzBuzz', '#01FFC3')
    }
    else if (divisibleByThree(number)) {
      appendToFizzBuzzUl('Fizz', '#01FFFF')
    }
    else if (divisibleByFive(number)) {
      appendToFizzBuzzUl('Buzz', '#FFB3FD')
    }
    else {
      appendToFizzBuzzUl(number, 'red');
    }
  }
}

function createFizzBuzzUl() {
  let fizzBuzzUl = document.createElement('ul');
  fizzBuzzUl.style.listStyleType = "none";
  fizzBuzzUl.setAttribute('id', 'fizzbuzz-ul')
  let fizzBuzzDiv = document.getElementById('fizzbuzz')
  fizzBuzzDiv.appendChild(fizzBuzzUl);

}

function divisibileByThreeAndFive(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return true
  }
}

function divisibleByThree(number) {
  if (number % 3 === 0) {
    return true;
  }
}

function divisibleByFive(number) {
  if (number % 5 === 0) {
    return true;
  }
}

function appendToFizzBuzzUl(word, color) {
  let fizzBuzzLi = document.createElement('li');
  let wordColor = fizzBuzzLi.style.color = color
  let fizzBuzzTextNode = document.createTextNode(word);
  fizzBuzzLi.appendChild(fizzBuzzTextNode);
  let fizzBuzzUl = document.getElementById('fizzbuzz-ul')
  fizzBuzzUl.appendChild(fizzBuzzLi);
}

fizzBuzz()