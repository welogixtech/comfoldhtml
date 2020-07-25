(function () {
  // setTimeout(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("#js-scroll"),
  //     smooth: true,
  //     getSpeed: true,
  //     getDirection: true,
  //     useKeyboard: true,
  //   });
  //   scroll.on("call", (value, way, obj) => {
  //     if (value === "animate") {
  //       $(obj.el).addClass($(obj.el).data("animate"));
  //     }
  //   });
  // }, 1000);
  customCursor();
  modalId = $("#gallery-modal");
})();

$(document).ready(function () {
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
  if ($("#owl_collections").length > 0) {
    $("#owl_collections").owlCarousel({
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
          items: 3,
          nav: true,
          dots: true,
          margin: 40,
        },
      },
    });
  }

  $("#space_saving_video").on("hidden.bs.modal", function () {
    var $this = $(this).find("iframe"),
      tempSrc = $this.attr("src");
    $this.attr("src", "");
    $this.attr("src", tempSrc);
  });

  $(".js-imageChangeBtn").on("click", function () {
    var $this = $(this),
      fristImg = $this.attr("data-image-1-src"),
      secondImg = $this.attr("data-image-2-src"),
      thirdImg = $this.attr("data-image-3-src"),
      imageWrapper = $this.parent().data("imageWrapper"),
      fristImgId = $this.parent().data("firstImgId"),
      secondImgId = $this.parent().data("secondImgId"),
      thirdImgId = $this.parent().data("thirdImgId");
    $(imageWrapper).find("img").addClass("animated");
    $(imageWrapper).find("img").removeClass("fadeInUp").addClass("fadeOutUp");
    $(".js-imageChangeBtn").removeClass("active");
    $this.addClass("active");
    setTimeout(() => {
      $(imageWrapper).find("img").removeClass("fadeOutUp");
      $(fristImgId).attr("src", fristImg).addClass("fadeInUp");
      $(secondImgId).attr("src", secondImg).addClass("fadeInDown");
      $(thirdImgId).attr("src", thirdImg).addClass("fadeInRight");
    }, 750);
  });

  //	  $('.js-locationComfoldBtn').on('click',function(){
  //        $('.js-locationComfold').find('img').removeClass('fadeInUp').addClass('fadeOutUp');
  //      var $this = $(this),
  //       fristImg = $this.attr('data-image-1-src'),
  //       secondImg = $this.attr('data-image-2-src'),
  //       thirdImg = $this.attr('data-image-3-src');
  //		$('.js-locationComfoldBtn').removeClass('active')
  //	  $this.addClass('active')
  //       setTimeout(() => {
  //            $('.js-locationComfold').find('img').removeClass('fadeOutUp');
  //            $('#firstImglocation').attr('src', fristImg).addClass('fadeInUp');
  //            $('#secondImglocation').attr('src', secondImg).addClass('fadeInUp');
  //            $('#thirdImglocation').attr('src', thirdImg).addClass('fadeInUp');
  //       },750);
  //
  //  })

  $(".img-hotspot").click(function () {
    var overlayDiv = $(".overlay-text");
    $(".js-spot").removeClass("active");
    overlayDiv.removeClass("active");
    TweenLite.to(overlayDiv, 0.5, { autoAlpha: 0 });
  });
  $(".wallbed-btn").click(function () {
    var $this = $(this);
    TweenLite.to($(".overlay-text"), 0.5, { autoAlpha: 0 });
    $(".spot").fadeOut();
    if ($this.hasClass("opend")) {
      $this.removeClass("opend").addClass("closed").text("Open unit");
      $("#opened-unit").addClass("hidden");
      $("#closed-unit").removeClass("hidden");
      $(".spot").fadeIn(200);
    } else {
      $this.removeClass("closed").addClass("opend").text("Close unit");
      $("#closed-unit").addClass("hidden");
      $("#opened-unit").removeClass("hidden");
      $(".spot").fadeIn(200);
    }
  });
  $(".js-spot").click(function (e) {
    e.stopPropagation();
    imageHotSpot($(this));
  });
  if ($(".grid").length > 0) {
    var $grid = $(".grid").imagesLoaded(function () {
      // init Masonry after all images have loaded
      $grid.masonry({
        itemSelector: ".grid-item",
        // use element for option
        columnWidth: ".grid-sizer",
        percentPosition: true,
      });
    });
  }

  loadGallery(true, ".thumbnail");

  wow = new WOW({
    animateClass: "animated",
    offset: 100,
  });
  wow.init();

  $('.pro-open-close-btn input[type="checkbox"]').change(function () {
    var imgSrc = "",
      $this = $(this);
    imgSrc = this.checked
      ? $this.parents(".pro-open-close-btn").data("closedimg")
      : $this.parents(".pro-open-close-btn").data("openimg");
    $this.parents("figure").find(".listImg").attr("src", imgSrc);
  });
  if ($("#myDropdown").length > 0) {
    $("#myDropdown").ddslick({
      onSelected: function (selectedData) {
        //callback function: do something with selectedData;
      },
    });
  }
});

function loadGallery(setIDs, setClickAttr) {
  let current_image,
    selector,
    counter = 0;

  $("#show-next-image, #show-previous-image").click(function () {
    if ($(this).attr("id") === "show-previous-image") {
      current_image--;
    } else {
      current_image++;
    }

    selector = $('[data-image-id="' + current_image + '"]');
    updateGallery(selector);
  });

  function updateGallery(selector) {
    let $sel = selector;
    current_image = $sel.data("image-id");
    $("#image-gallery-image")
      .fadeOut(400, function () {
        $("#image-gallery-image").attr("src", $sel.data("image"));
      })
      .fadeIn(400);

    disableButtons(counter, $sel.data("image-id"));
  }

  if (setIDs == true) {
    $("[data-image-id]").each(function () {
      counter++;
      $(this).attr("data-image-id", counter);
    });
  }
  $(setClickAttr).on("click", function () {
    updateGallery($(this));
  });
}

//This function disables buttons when needed
function disableButtons(counter_max, counter_current) {
  $("#show-previous-image, #show-next-image").show();
  if (counter_max === counter_current) {
    $("#show-next-image").hide();
  } else if (counter_current === 1) {
    $("#show-previous-image").hide();
  }
}

$(".scrollTo").click(function (e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    500
  );
  return false;
});

$(document).keydown(function (e) {
  switch (e.which) {
    case 37: // left
      if (
        (modalId.data("bs.modal") || {})._isShown &&
        $("#show-previous-image").is(":visible")
      ) {
        $("#show-previous-image").click();
      }
      break;

    case 39: // right
      if (
        (modalId.data("bs.modal") || {})._isShown &&
        $("#show-next-image").is(":visible")
      ) {
        $("#show-next-image").click();
      }
      break;

    default:
      return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});

function customCursor() {
  var cursorDiv = $(document).find(".js-mouse"),
    defautTxt = cursorDiv.find(".js-mouse-text").text();
  if (cursorDiv.length > 0) {
    cursorDiv.attr("data-mouse", "");
    $(document).on("mousemove", function (event) {
      cursorDiv.addClass("is-active");
      TweenLite.to(cursorDiv, 0.3, {
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
          sigleMenuLeft = sigleMenu.offset().left - (offsetLeft + 0),
          singelMenuRight = sigleMenu.width();
        navLine.width(singelMenuRight).css("left", sigleMenuLeft);
      }),
        element.on("mouseout", function (e) {
          navLine.width(currentMenuWidth).css("left", currentMenuLeft);
        });
    });
}

function imageHotSpot($this) {
  var overlayDiv = $(".overlay-text"),
    position = $this.position(),
    overlaytx = $this.data("overlaytxt"),
    _left = "auto",
    _top = "auto";
  overlayDiv.html(overlaytx);
  if ($this.hasClass("active")) {
    $this.removeClass("active");
    overlayDiv.removeClass("active");
    TweenLite.to(overlayDiv, 0.5, { autoAlpha: 0 });
  } else {
    $(".js-spot").removeClass("active");
    overlayDiv.addClass("active");
    $this.addClass("active");
    var innerHeight = $(".img-hotspot").innerHeight(),
      overlaytxHeight = overlayDiv.innerHeight(),
      innerWidth = $(".img-hotspot").innerWidth(),
      overlaytxWidth = overlayDiv.innerWidth();
    if (position.top + 100 + overlaytxHeight < innerHeight) {
      overlayDiv.removeClass("pos-bottom").addClass("pos-top");
      _top = position.top - 10;
    } else {
      _top = position.top - overlaytxHeight + 40;
      overlayDiv.removeClass("pos-top").addClass("pos-bottom");
    }

    if (position.left + 45 + overlaytxWidth < innerWidth) {
      overlayDiv.removeClass("pos-left").addClass("pos-right");
      _left = position.left + 45;
    } else {
      _left = position.left - overlaytxWidth;
      overlayDiv.removeClass("pos-right").addClass("pos-left");
    }

    TweenLite.to(overlayDiv, 0.5, {
      css: { left: _left, top: _top },
      ease: Circ.easeOut,
    });
    TweenLite.set(overlayDiv, { autoAlpha: 1 });
  }
}
