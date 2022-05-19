const con = document.querySelector('.clothes3');
const male = document.querySelector('.manbtn');
let female = document.querySelector('.womanbtn');

let tempo = 8;


$(document).ready(function () {
   male.addEventListener('click',function (){console.log("남성")
       $('a').remove();
   });
   female.addEventListener('click',female_clothes);

});

function female_clothes() {
    $.ajax({
        url: `./Cody.json`,
        dataType: 'json',
        type: 'GET',
        success: function (data) {

            if (tempo <= 8) {
                for (let i = 1; i < 13; i++) {
                    const newlink = document.createElement('a');
                    newlink.classList.add('clothes_link');
                    con.appendChild(newlink);
                    newlink.href = data.woman_cody_link[0][i];
                    newlink.target = 'blank';
                    newlink.style.backgroundImage = 'url(' + data.woman_cody_img[0][i] + ')';
                    newlink.style.backgroundSize = 'cover';
                }
            }else {
                for (let i = 0; i < 9; i++) {
                    const newDiv = document.createElement('div');
                    newDiv.classList.add('clothes_div');
                    con.appendChild(newDiv);
                }
            }

        }
    });
}