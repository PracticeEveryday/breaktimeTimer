let breakTime = prompt("쉬는 시간");
let minute = breakTime -1;
let seconds = 60;
let article = document.querySelector('#clock');

article.innerHTML = `${breakTime} : 00`;
let Timer = setInterval(() => {
  seconds--;
  if(minute > 0) {
    if(seconds === 0) {
      seconds = 60;
      minute--
    }
  } else if(minute === 0 && seconds === 0) {
    clearTimeout(Timer);
    alert("쉬는 시간 끝!")
  }

  article.innerHTML = `${minute} : ${seconds}`;
}, 1000)
