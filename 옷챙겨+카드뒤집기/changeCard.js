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

    console.log(p2);
}

