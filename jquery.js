let position = 1;
displayImg(position);

function slide(e) {
    displayImg(position = e);
}

function arrow(e) {
    displayImg(position += e);
}

function displayImg(e) {
    const slides = $(".img-slider");
    console.log("slides==>",slides);
    const dots = $('.dot');
    const len = slides.length;
    console.log("len===>",len);

    if (e > len) {
        position = 1;
    }
    if (e < 1) {
        position = len;
    }

    slides.hide();
    dots.removeClass('active');

    slides.eq(position - 1).show();
    dots.eq(position - 1).addClass('active');
}

$('.img-slider').click(function(){$('.slide').css('border', '4px solid black') });
$('.img-slider').dblclick(function(){$('.slide').css('border', 'none') });
$('.more').hover(function(){
    $('#down-arrow').animate({
        height : '80px',
    })
})

//AJAX
// function loadDoc() {
//     $(document).ready(function(){
//         $("button").click(function(){
//           $("#join").load("content.txt");
//         });
//       });

// }
// $("button").click(function(){
//     $.ajax({url: "test.txt", success: function(result){
//       $("#join-patch").html(result);
//     }});
//   });
