const change = document.querySelectorAll('.return');
change[0].addEventListener('click', click);
change[1].addEventListener('click', click);
change[2].addEventListener('click', click);
change[3].addEventListener('click', click);

// const card2 = document.querySelector('.card2');
// card2.addEventListener('click', click);


function click(event) {
    let elem = event.currentTarget;
    let p1 = elem.parentElement;
    let p2 = p1.parentElement;
    if (p2.style.transform == "rotateY(180deg)") {
        p2.style.transform = "rotateY(0deg)";
    } else {
        p2.style.transform = "rotateY(180deg)";
    }
}

const change2 = document.querySelector('.return2');
change2.addEventListener('click', click2);


function click2() {
  let front = document.querySelector('.front');
  let back = document.querySelector('.back');
  if (front.style.transform == "rotateY(180deg)") {
      front.style.transform = "rotateY(0deg)";
      back.style.transform = "rotateY(180deg)";
  } else {
      front.style.transform = "rotateY(180deg)";
      back.style.transform = "rotateY(0deg)";
  }
}