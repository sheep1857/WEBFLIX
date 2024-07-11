$(document).ready(function() {
  function generateImages(container, count) {
    for (let i = 0; i < count; i++) {
        $(container).append('<li class="splide__slide"  data-bs-toggle="modal"><img src="img/white.png" alt="Image ' + (i + 1) + '" class="dynamic-image"></li>');
    }
}

function initializeSplide(selector) {
  new Splide(selector, {
    type: "slide",
    perPage: 5, // Number of images to show per view
    gap: "1rem", // Gap between images
    pagination: false,
    arrows: true,
    breakpoints: {
      1200: {
        perPage: 5,
      },
      992: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      539: {
        perPage: 1,
      },
    },
  }).mount();
}

 // Generate images for both carousels
 generateImages('#splide-student .splide__list', 9);
 generateImages('#st_pic .splide__list', 9);

 // Initialize Splide for both carousels
 initializeSplide('#splide-student');
 initializeSplide('#st_pic');

 // Event listener for image click to show modal
 $('.splide').on('click', '.dynamic-image', function() {
  var src = $(this).attr('src');
  $('#modalImage').attr('src', src);
  var modal = new bootstrap.Modal(document.getElementById('imageModal'));
  modal.show();
});

  $('.scroll-link').on('click', function() {
      var targetId = $(this).attr('href');
      var targetElement = $(targetId);
      var offset = targetElement.offset().top;
      var scrollTo = offset - ($(window).height() / 2) + (targetElement.outerHeight() / 2);

      $('html, body').animate({
          scrollTop: scrollTo
      });
  });
});

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });
  
  //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
  $(window).on('load', function(){
    $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
    $(".open").each(function(index, element){ //openクラスを取得
      var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
      $(Title).addClass('close');       //タイトルにクラス名closeを付与し
      var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
      $(Box).slideDown(500);          //アコーディオンを開く
    });
  });