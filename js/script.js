const display = document.querySelector("#display");
const input1 = document.querySelector(".input1");
const numberBtn = document.querySelectorAll(".btn-number");
const clearBtn = document.querySelector(".clear-btn");
const operatorBtn = document.querySelectorAll(".btn-operator");
const opposite = document.querySelector(".calc-opposite");
const currentNumber = document.querySelector("#currentNumber");
const result = document.querySelector(".output");

numberBtn.forEach((num) => {
    num.addEventListener('click', () => {
        input1.value += num.textContent;
    });
});

clearBtn.addEventListener('click', () => {
    input1.value = "";
});
operatorBtn.forEach((op) => {
    op.addEventListener('click', () => {
        input1.value += op.textContent;
    })
});
result.addEventListener('click', () => {
    input1.value = eval(input1.value); 
});
opposite.addEventListener('click', () => {
    if (+currentNumber.innerText > 0) {
      const negative = Math.abs(+currentNumber.innerText) * -1;
      currentNumber.innerText = negative;
      numArray = [];
      numArray.push(negative);
    } else if (+currentNumber.innerText < 0) {
      const positive = Math.abs(+currentNumber.innerText) * 1;
      currentNumber.innerText = positive;
      numArray = [];
      numArray.push(positive);
    }
  });





const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};




function getDateTime() {
    var now     = new Date(); 
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds();    
    if(hour.toString().length == 1) {
         hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
         minute = '0'+minute;
    }
    if(second.toString().length == 1) {
         second = '0'+second;
    }   
    var dateTime = hour+':'+minute+':'+second;   
     return dateTime;
}


setInterval(function(){
    currentTime = getDateTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);