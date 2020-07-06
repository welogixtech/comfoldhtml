(function () {
  setTimeout(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#js-scroll"),
      smooth: true,
      getSpeed: true,
      getDirection: true,
      useKeyboard: true,
    });
    scroll.on("call", (value, way, obj) => {
      if (value === "animate") {
        $(obj.el).addClass($(obj.el).data("animate"));
      }
    });
  }, 1000);

  init();
})();

function init() {
  customCursor();
  menuBorderAnimation();

  if ($("#owl_home_banner").length > 0) {
    $("#owl_home_banner").owlCarousel({
      nav: false,
      loop: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      margin: 0,
      responsiveClass: true,
      animateOut: "fadeOut",
      animateIn: "slideInLeft",
      responsive: {
        0: {
          items: 1,
        },
        700: {
          items: 1,
        },
        900: {
          items: 1,
          dots: false,
        },
      },
    });
  }
  if ($("#owl_recent_projects").length > 0) {
    $("#owl_recent_projects").owlCarousel({
      loop: false,
      nav: false,

      margin: 20,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 2,
        },
        900: {
          items: 3,
          dots: true,
          margin: 20,
        },
      },
    });
  }
  if ($("#owl_happy_customer").length > 0) {
    $("#owl_happy_customer").owlCarousel({
      loop: false,
      nav: false,
      margin: 20,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        980: {
          items: 2,
        },
        1150: {
          items: 2,
          nav: true,
          dots: true,
          margin: 40,
        },
      },
    });
  }

  $('#space_saving_video').on('hidden.bs.modal', function() {
    var $this = $(this).find('iframe'),
      tempSrc = $this.attr('src');
    $this.attr('src', "");
    $this.attr('src', tempSrc);
  });


  $('.js-locationImg').hover(function(){
        var imgid = $(this).data('imgid');
        TweenLite.to('#'+imgid, .8, {css: {scaleX: 1.3, scaleY: 1.3, zIndex:5},ease: Circ.easeOut})
      },function(){
        var imgid = $(this).data('imgid');
        TweenLite.to('#'+imgid, .8, {css: {scaleX: 1, scaleY: 1, zIndex:1},ease: Circ.easeOut})
    }
);

  $('.js-learWhyComfoldBtn').on('click',function(){
        $('.js-learnWhyComfold').find('img').removeClass('fadeInUp').addClass('fadeOutUp');
      var $this = $(this),
       fristImg = $this.attr('data-image-1-src'),
       secondImg = $this.attr('data-image-2-src'),
       thirdImg = $this.attr('data-image-3-src');
       setTimeout(() => {
            $('.js-learnWhyComfold').find('img').removeClass('fadeOutUp');
            $('#firstImg').attr('src', fristImg).addClass('fadeInUp');
            $('#secondImg').attr('src', secondImg).addClass('fadeInUp');
            $('#thirdImg').attr('src', thirdImg).addClass('fadeInUp');
       },750);
       
  })

}

function customCursor() {
  var cursorDiv = $(document).find(".js-mouse"),
    defautTxt = cursorDiv.find(".js-mouse-text").text();
  if (cursorDiv.length > 0) {
    cursorDiv.attr("data-mouse", "");
    $(document).on("mousemove", function (event) {
      cursorDiv.addClass("is-active");
      TweenLite.to(cursorDiv, 0, {
        x: event.clientX,
        y: event.clientY,
        force3D: true,
      });
    });
    $(document).on("mouseleave", "[data-mouse]", function (event) {
      if ($(event.toElement).closest("[data-mouse]")) {
        var element = $(event.toElement).closest("[data-mouse]"),
          attrVal = element.data("mouse");
        element.data("mouse-text") &&
          cursorDiv.find(".js-mouse-text").text(element.data("mouse-text"));
        cursorDiv.attr("data-mouse", "").attr("data-mouse", attrVal);
      } else {
        cursorDiv.attr("data-mouse", "");
      }
    });
    $(document).on("mouseenter", "[data-mouse]", function () {
      var element = $(this).data("mouse");
      if ($(this).data("mouse-text")) {
        cursorDiv.find(".js-mouse-text").text($(this).data("mouse-text"));
      } else {
        cursorDiv.find(".js-mouse-text").text(defautTxt);
      }
      cursorDiv.attr("data-mouse", "").attr("data-mouse", element);
    });
  }
}
function menuBorderAnimation() {
  var nav = $(document).find(".navbar-nav-custom"),
    navLine = $(document).find(".js-site-nav-line"),
    offsetLeft = nav.offset().left,
    currentMenu = nav.find("li.current-menu-item > a"),
    currentMenuOffset = currentMenu.offset(),
    currentMenuLeft = currentMenuOffset
      ? currentMenuOffset.left - offsetLeft
      : 0,
    currentMenuWidth = currentMenuOffset ? currentMenu.width() : 0;
  navLine.width(currentMenuWidth).css("left", currentMenuLeft),
    nav.find("li").each(function () {
      var element = $(this);
      element.on("mouseover", function (e) {
        var sigleMenu = $(this).find("a"),
          sigleMenuLeft = sigleMenu.offset().left - offsetLeft,
          singelMenuRight = sigleMenu.width();
        navLine.width(singelMenuRight).css("left", sigleMenuLeft);
      }),
        element.on("mouseout", function (e) {
          navLine.width(currentMenuWidth).css("left", currentMenuLeft);
        });
    });
}
