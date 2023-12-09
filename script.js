let position = 1;
displayImg(position);

function slide(e) {
    displayImg(position = e);
   
}
function arrow(e) {

    console.log("e=====>",e)
    displayImg(position += e);
    console.log("position=====>",position);
}

function displayImg(e) {
    const slides = document.querySelectorAll(".img-slider");
    console.log("slides==>",slides);
    let len = slides.length;
    console.log("length==>",len);
    const dots = document.querySelectorAll('.dot'); 
    console.log("dots==>", dots);

    if (e > len) {
        position = 1;
        console.log("length==>",len);
    }
    if (e < 1) {
        position = len;
    }
    for (let i = 0; i < slides.length; i++) {
        slides [i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    console.log("position of img===>", position);
    slides [position - 1].style.display = "block";
    dots[position - 1].classList.add('active');
}
//jquery
$('.img-slider').css("color", "red")
$('.img-slider p').css("color", "blue")


$('.img-slider >  img').click(function(){$('img').css("border", "navy")});

$('.img-slider small').click(function(){$('small').css("color", "navy")});
$('.img-slider').click(function(){$('.slide').css('border', '4px solid black') });

