//random numbers buttons
let randomOne = Math.ceil(Math.random() * 36);
let randomTwo = Math.ceil(Math.random() * 36);
let randomThree = Math.ceil(Math.random() * 36);
let randomfour = Math.ceil(Math.random() * 36);
let randomFive = Math.ceil(Math.random() * 36);
let randomSix = Math.ceil(Math.random() * 36);
let randomSeven = Math.ceil(Math.random() * 36);
let randomEight = Math.ceil(Math.random() * 36);
let randomNine = Math.ceil(Math.random() * 36);
let randomTen = Math.ceil(Math.random() * 36);
//arr of random numbers
let a = [
  randomOne,
  randomTwo,
  randomThree,
  randomfour,
  randomFive,
  randomSix,
  randomSeven,
  randomEight,
  randomNine,
  randomTen,
];
//console.log(a);
// let a = [1, 2, 3, 4, 2, 2, 4, 1, 5, 6];
// let b = [...new Set(a)];
// console.log(b);

let b = [...new Set(a)];
//console.log(b);

let arrCorrectNumber = [b[0], b[1], b[2], b[3], b[4], b[5]];
//console.log(arrCorrectNumber);
let count = 0;
let num = 0;
let inputs = document.querySelectorAll(".guess");
let clickBtn = document.querySelector("#clickBtn");
let correctNumbers = document.querySelector("#correctNumbers");
let moreInfo = document.querySelector("#moreInfo");
let amount = document.querySelector("#amount");
let start = document.querySelector("#start");
//totol amount
let randomTotal = Math.floor(Math.random() * 3);
let total = [950560.56, 1200560.45, 892000.54, 1300345.88];
totalAmount.value = `R${total[randomTotal]}`;
clickBtn.addEventListener("click", () => {
  num++;
  console.log(num);
  if (
    inputs[0].value == "" ||
    inputs[1].value == "" ||
    inputs[2].value == "" ||
    inputs[3].value == "" ||
    inputs[4].value == "" ||
    inputs[5].value == ""
  ) {
    alert("No blanks allowed!!!");
  } else {
    if (arrCorrectNumber.includes(Number(inputs[0].value))) {
      count++;
      inputs[0].style.backgroundColor = "green";
    } else {
      inputs[0].style.backgroundColor = "red";
    }
    if (arrCorrectNumber.includes(Number(inputs[1].value))) {
      count++;
      inputs[1].style.backgroundColor = "green";
    } else {
      inputs[1].style.backgroundColor = "red";
    }
    if (arrCorrectNumber.includes(Number(inputs[2].value))) {
      count++;
      inputs[2].style.backgroundColor = "green";
    } else {
      inputs[2].style.backgroundColor = "red";
    }
    if (arrCorrectNumber.includes(Number(inputs[3].value))) {
      count++;
      inputs[3].style.backgroundColor = "green";
    } else {
      inputs[3].style.backgroundColor = "red";
    }
    if (arrCorrectNumber.includes(Number(inputs[4].value))) {
      count++;
      inputs[4].style.backgroundColor = "green";
    } else {
      inputs[4].style.backgroundColor = "red";
    }
    if (arrCorrectNumber.includes(Number(inputs[5].value))) {
      count++;
      inputs[5].style.backgroundColor = "green";
    } else {
      inputs[5].style.backgroundColor = "red";
    }
    if (num == 1) {
      console.log(num);
      arrCorrectNumber.forEach((correctNumber) => {
        correctNumbers.innerHTML += `<button class="btn btn-info btn-sm">${correctNumber}</button>`;
      });
    }
    moreInfo.value = `${count}`;
    if (count == 0) {
      amount.value = `R0`;
    } else if (count == 1) {
      let randomNum = Math.floor(Math.random() * 3);
      let arrOne = [5.12, 6.45, 8.92, 4.51];
      amount.value = `R${arrOne[randomNum]}`;
    } else if (count == 2) {
      let randomNum = Math.floor(Math.random() * 3);
      let arrOne = [210.44, 260.05, 300.94, 190.53];
      amount.value = `R${arrOne[randomNum]}`;
    } else if (count == 3) {
      let randomNum = Math.floor(Math.random() * 3);
      let arrOne = [17210.48, 16500.56, 20900.23, 14500.53];
      amount.value = `R${arrOne[randomNum]}`;
    } else if (count == 4) {
      let randomNum = Math.floor(Math.random() * 3);
      let arrOne = [200345.22, 190320.56, 219000.21, 181500.52];
      amount.value = `R${arrOne[randomNum]}`;
    } else if (count == 5) {
      let randomNum = Math.floor(Math.random() * 3);
      let arrOne = [950560.56, 1200560.45, 892000.54, 1300345.88];
      amount.value = `R${arrOne[randomNum]}`;
    }
  }
});

start.addEventListener("click", () => {
  location.reload();
});
