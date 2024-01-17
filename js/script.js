$(document).ready(function () {
  //  START MENU

  // mobile menu
  function slideInOut() {
    $("div.side").removeClass(
      "animate__animated animate__fadeOutRight animate__faster"
    );
    $("div.side").addClass(
      "block animate__animated animate__slideInRight animate__faster"
    );
  }

  function closeSide() {
    $("div.side").removeClass(
      "block animate__animated animate__slideInRight animate__faster"
    );
    $("div.side").addClass(
      "animate__animated animate__fadeOutRight animate__faster block"
    );
  }

  function changeSearchColor() {
    $("#mg").css({
      color: "#00A9FF",
    });
  }

  function revertSearchColor() {
    $("#mg").css({
      color: "#A4A4A4",
    });
  }

  function toggleMenu() {
    $("#sub").slideToggle();
    $("#li-open").toggleClass("border");
    $("#arrow-mobile").toggleClass("rotate180");
    $("#arrow-mobile").toggleClass("changeColor");
    $("#ul-open").toggleClass("plusHeight");
  }

  $("#burger").click(slideInOut);
  $("div.close").click(closeSide);
  $("div.search").focusin(changeSearchColor);
  $("div.search").focusout(revertSearchColor);
  $("#li-open").click(toggleMenu);
  //   end mobile menu

  // desktop menu

  $("#menu-logo-desktop").mouseenter(function () {
    $(this).addClass("animate__animated animate__jello");
  });
  $("#menu-logo-desktop").mouseleave(function () {
    $(this).removeClass("animate__animated animate__jello");
  });

  const lines = ["line1", "line2", "line3", "line4"];
  const homeDivs = ["home", "doreh", "blog", "tms"];

  homeDivs.forEach((div, index) => {
    const $div = $(`#${div}`);
    const $line = $(`#${lines[index]}`);

    $div.hover(
      () => {
        $line.addClass("block animate__animated animate__headShake");
      },
      () => {
        $line.removeClass("block animate__animated animate__headShake");
      }
    );
  });

  const searchInput = $("#searchInput");
  const magG = $("#magG");
  const mgDesktop = $("#mg-desktop");

  function handleSearchInputFocus() {
    searchInput.css({
      width: "200px",
    });
    magG.removeClass("rotate2");
    magG.addClass("rotate");
    mgDesktop.css({
      color: "#00A9FF",
    });

    if ($("#myModal").hasClass("in")) {
      $("#myModal").modal("hide");
    }
  }

  function handleSearchInputBlur() {
    searchInput.css({
      width: "100px",
    });
    magG.addClass("rotate2");
    magG.removeClass("rotate");
    mgDesktop.css({
      color: "#A4A4A4",
    });
  }

  searchInput
    .on("focus", handleSearchInputFocus)
    .on("blur", handleSearchInputBlur);

  // end desktop menu

  // signup desktop
  $("#signup-logo-desktop").mouseover(function () {
    $(this).toggleClass("animate__animated animate__jello");
  });

  $(
    "#p-sbt, #input-name, #input-email, #input-phone, #input-pass, #btn-sign, #btn-login, #a-signup, #close-signup"
  ).on({
    focusin: function () {
      var id = $(this).attr("id");
      if (id.includes("input")) {
        $("#span-" + id.split("-")[1]).addClass(
          "changeColor animate__animated animate__jackInTheBox"
        );
      }
    },
    focusout: function () {
      var id = $(this).attr("id");
      if (id.includes("input")) {
        $("#span-" + id.split("-")[1]).removeClass(
          "changeColor animate__animated animate__jackInTheBox"
        );
      }
    },
    click: function () {
      var id = $(this).attr("id");
      if (id === "a-signup") {
        $("#signup-modal").removeClass(
          "animate__animated animate__fadeOut animate__fast"
        );
        $("#signup-modal").addClass(
          "block2 animate__animated animate__fadeIn animate__fast"
        );
      } else if (id === "close-signup") {
        $("#signup-modal").removeClass(
          "animate__animated animate__fadeIn animate__fast"
        );
        $("#signup-modal").addClass(
          "animate__animated animate__fadeOut animate__fast block2"
        );
        $("#p-sign").removeClass(
          "changeColor animate__animated animate__jackInTheBox"
        );
        $("#p-login").removeClass(
          "changeColor animate__animated animate__jackInTheBox"
        );
      }
    },
    mouseenter: function () {
      var id = $(this).attr("id");
      if (id === "p-sbt") {
        $("#p-sign").addClass(
          "changeColor animate__animated animate__jackInTheBox"
        );
      } else if (id.includes("btn")) {
        $("#btn-" + id.split("-")[1]).addClass(
          "animate__animated animate__jello"
        );
      }
    },
  });
  // end signup desktop

  // signup mobile

  function resetModalSignupMobile() {
    $("#signup-modal-mobile")
      .removeClass("block2 animate__animated animate__fadeIn animate__fast")
      .addClass("animate__animated animate__fadeOut animate__fast");
    $(".changeColor").removeClass(
      "changeColor animate__animated animate__jackInTheBox animate__jello"
    );
  }

  $(
    "#mobile-sbt, #input-name-m, #input-email-m, #input-phone-m, #input-pass-m, #btn-sign-m, #btn-login-m, #mobile-signup, #close-signup-m"
  ).on({
    focusin: function () {
      var id = $(this).attr("id");
      $(
        "#span-" +
          id.replace("input-", "").replace("-m", "").replace("btn-", "") +
          "-m"
      ).addClass("changeColor animate__animated animate__jackInTheBox");
    },
    focusout: function () {
      var id = $(this).attr("id");
      $(
        "#span-" +
          id.replace("input-", "").replace("-m", "").replace("btn-", "") +
          "-m"
      ).removeClass("changeColor animate__animated animate__jackInTheBox");
    },
    click: function () {
      var id = $(this).attr("id");
      if (id === "mobile-signup") {
        $("#signup-modal-mobile")
          .removeClass("animate__animated animate__fadeOut animate__fast")
          .addClass("block2 animate__animated animate__fadeIn animate__fast");
      } else if (id === "close-signup-m") {
        resetModalSignupMobile();
      }
    },
    mouseenter: function () {
      var id = $(this).attr("id");
      if (id === "mobile-sbt") {
        $("#mobile-sign").addClass(
          "changeColor animate__animated animate__jackInTheBox"
        );
      } else if (id.startsWith("btn-")) {
        $("#" + id).addClass("animate__animated animate__jello");
      }
    },
  });

  // end signup mobile

  // login desktop

  $("#login-logo-desktop").mouseover(function () {
    $(this).toggleClass("animate__animated animate__jello");
  });

  function hoverAnimation(element, animationClass) {
    $(element).hover(function () {
      $(this).addClass(animationClass);
    });
  }

  hoverAnimation("#btn-sign-v", "animate__animated animate__jello");
  hoverAnimation("#btn-login-v", "animate__animated animate__jello");

  function buttonClick(button, modal, previousModal) {
    $(button).click(function () {
      $(modal).removeClass("animate__animated animate__fadeOut animate__fast");
      $(modal).addClass(
        "block2 animate__animated animate__fadeIn animate__fast"
      );
      $(previousModal).removeClass("block2");
    });
  }

  buttonClick("#btn-sign-v", "#signup-modal", "#login-modal");

  buttonClick("#btn-login", "#login-modal", "#signup-modal");

  $("#close-login").click(function () {
    $("#login-modal").removeClass(
      "block2 animate__animated animate__fadeIn animate__fast"
    );
    $("#login-modal").addClass(
      "animate__animated animate__fadeOut animate__fast"
    );
    $("#p-login").removeClass(
      "changeColor animate__animated animate__jackInTheBox"
    );
    $("#p-sign").removeClass(
      "changeColor animate__animated animate__jackInTheBox"
    );
  });

  function focusInOutAnimation(inputField, spanField, animationClass) {
    $(inputField).focusin(function () {
      $(spanField).addClass(animationClass);
    });

    $(inputField).focusout(function () {
      $(spanField).removeClass(animationClass);
    });
  }

  focusInOutAnimation(
    "#input-email-login",
    "#span-email-login",
    "changeColor animate__animated animate__jackInTheBox"
  );
  focusInOutAnimation(
    "#input-pass-login",
    "#span-pass-login",
    "changeColor animate__animated animate__jackInTheBox"
  );

  $("#p-vorod").mousemove(function () {
    $("#p-login").addClass(
      "changeColor animate__animated animate__jackInTheBox"
    );
  });

  // end login desktop

  // login mobile

  function addClassToElement(selector, className) {
    $(selector).addClass(className);
  }

  function removeClassFromElement(selector, className) {
    $(selector).removeClass(className);
  }

  function toggleClassOnElement(selector, className, condition) {
    condition
      ? addClassToElement(selector, className)
      : removeClassFromElement(selector, className);
  }

  function resetModalLoginMobile() {
    removeClassFromElement(
      "#mobile-login",
      "changeColor animate__animated animate__jackInTheBox"
    );
    removeClassFromElement(
      "#span-email-ML, #span-pass-ML",
      "changeColor animate__animated animate__jackInTheBox"
    );
    removeClassFromElement(
      "#btn-sign-ML, #btn-login-ML",
      "animate__animated animate__jello"
    );
    removeClassFromElement(
      "#login-modal-mobile, #signup-modal-mobile",
      "block2 animate__animated animate__slideInRight animate__fast"
    );
    removeClassFromElement(
      "#login-modal-mobile, #signup-modal-mobile",
      "animate__animated animate__fadeOutRight animate__fast"
    );
  }

  $("#mobile-vorod").on("mousemove", function () {
    addClassToElement(
      "#mobile-login",
      "changeColor animate__animated animate__jackInTheBox"
    );
  });

  $("#input-email-ML, #input-pass-ML").on({
    focusin: function () {
      addClassToElement(
        "#span-" + this.id.split("-")[1] + "-ML",
        "changeColor animate__animated animate__jackInTheBox"
      );
    },
    focusout: function () {
      removeClassFromElement(
        "#span-" + this.id.split("-")[1] + "-ML",
        "changeColor animate__animated animate__jackInTheBox"
      );
    },
  });

  $("#btn-sign-ML, #btn-login-ML").on("mouseenter", function () {
    addClassToElement(this, "animate__animated animate__jello");
  });

  $("#btn-login-m, #btn-sign-ML").on("click", function () {
    var id = this.id === "btn-login-m" ? "login" : "signup";
    removeClassFromElement(
      "#" + id + "-modal-mobile",
      "animate__animated animate__fadeOutRight animate__fast"
    );
    addClassToElement(
      "#" + id + "-modal-mobile",
      "block2 animate__animated animate__slideInRight animate__fast"
    );
    toggleClassOnElement(
      "#" + (id === "login" ? "signup" : "login") + "-modal-mobile",
      "block2",
      false
    );
  });

  $("#close-login-ML").on("click", function () {
    removeClassFromElement(
      "#login-modal-mobile",
      "block2 animate__animated animate__slideInRight animate__fast"
    );
    addClassToElement(
      "#login-modal-mobile",
      "animate__animated animate__fadeOutRight animate__fast"
    );
    resetModalLoginMobile();
  });

  // end login mobile

  // submenu desktop
  $("#doreh").hover(function () {
    $("#submenu").toggleClass(
      "block2 animate__animated animate__fadeIn animate__faster"
    );
  });
  // end submenu desktop

  // END MENU

  // START CONTENT

  // inturduce section
  //end inturduce section

  // category section

  let animationRun = false;

  function animate(selector, callback, duration = 100) {
    clearInterval(window[selector]);
    window[selector] = setInterval(function () {
      callback();
    }, duration);
  }

  function generateRandomNumbers() {
    var categoryContent = [];
    var randomNumber = Math.floor(Math.random() * 100);

    $(".category-circle").each(function () {
      categoryContent.push($(this).text());
    });

    animate("circleAnimation", function () {
      randomNumber = Math.floor(Math.random() * 100);
      $(".category-circle").html(randomNumber);
    });

    setTimeout(function () {
      clearInterval(window.circleAnimation);
      $(".category-circle").each(function (index) {
        $(this).html(categoryContent[index]);
      });
    }, 4000);
  }

  $(window).scroll(function () {
    if (!animationRun) {
      $(".category-circle").each(function () {
        if ($(this).offset().top - $(window).scrollTop() < $(window).height()) {
          generateRandomNumbers();
          animationRun = true;
        }
      });
    }
  });

  // hover function
  function toggleHoverClass(element, circle) {
    $(element).hover(
      function () {
        $(circle).addClass("category-circle-hover");
      },
      function () {
        $(circle).removeClass("category-circle-hover");
      }
    );
  }

  toggleHoverClass(".category-card-html", ".category-circle-html");
  toggleHoverClass(".category-card-seo", ".category-circle-seo");
  toggleHoverClass(".category-card-js", ".category-circle-js");
  toggleHoverClass(".category-card-react", ".category-circle-react");
  toggleHoverClass(".category-card-wordpress", ".category-circle-wordpress");

  //end category section

  //  newest section
  // desktop
  function handleMouseEnterNew(cardNumber) {
    $("#like-" + cardNumber).removeClass(
      "animate__animated animate__fadeOutRight animate__faster"
    );
    $("#like-" + cardNumber).addClass(
      "block2 animate__animated animate__fadeInLeft animate__faster"
    );
    $("#genre-" + cardNumber).addClass("animate__animated animate__tada");
  }

  function handleMouseLeaveNew(cardNumber) {
    $("#like-" + cardNumber).removeClass(
      "block2 animate__animated animate__fadeInLeft animate__faster"
    );
    $("#like-" + cardNumber).addClass(
      "block2 animate__animated animate__fadeOutRight animate__faster"
    );
    $("#genre-" + cardNumber).removeClass("animate__animated animate__tada");
  }

  for (let i = 1; i <= 16; i++) {
    $("#course-card-" + i).mouseenter(function () {
      handleMouseEnterNew(i);
    });
    $("#course-card-" + i).mouseleave(function () {
      handleMouseLeaveNew(i);
    });
  }
  $(".like").on("click", function () {
    $(this).toggleClass("like-changeColor");
  });
  // end desktop
  // mobile
  function handleMouseEnterNewMobile(cardNumber) {
    $(`#like-${cardNumber}-mobile`).removeClass(
      "animate__animated animate__fadeOutRight animate__faster"
    );
    $(`#like-${cardNumber}-mobile`).addClass(
      "block2 animate__animated animate__fadeInLeft animate__faster"
    );
    $(`#genre-${cardNumber}-mobile`).addClass(
      "animate__animated animate__tada"
    );
  }

  function handleMouseLeaveNewMobile(cardNumber) {
    $(`#like-${cardNumber}-mobile`).removeClass(
      "block2 animate__animated animate__fadeInLeft animate__faster"
    );
    $(`#like-${cardNumber}-mobile`).addClass(
      "block2 animate__animated animate__fadeOutRight animate__faster"
    );
    $(`#genre-${cardNumber}-mobile`).removeClass(
      "animate__animated animate__tada"
    );
  }

  for (let i = 1; i <= 16; i++) {
    $(`#course-card-${i}-mobile`).mouseenter(() =>
      handleMouseEnterNewMobile(i)
    );
    $(`#course-card-${i}-mobile`).mouseleave(() =>
      handleMouseLeaveNewMobile(i)
    );
  }

  // end mobile
  // end newest section

  // instagram

  function handleAnimationsInsta(add) {
    $("#view-post").addClass("animate__animated animate__jello", add);
    $(".insta-logo").addClass(
      "animate__animated animate__backOutRight animate__slow",
      add
    );
    $(".verify-logo").addClass(
      "block animate__animated animate__fadeInUp",
      add
    );
  }

  $(".instagram").on({
    mouseenter: function () {
      handleAnimationsInsta(true);
    },
    mouseleave: function () {
      handleAnimationsInsta(false);
    },
  });
  // end instagram

  // agency

  function handleAnimationsSite(add) {
    $("#view-site").addClass("animate__animated animate__jello", add);
    $(".website-logo").addClass(
      "animate__animated animate__backOutRight animate__slow",
      add
    );
    $(".verify-logo2").addClass(
      "block animate__animated animate__fadeInUp",
      add
    );
  }

  $(".jelvehAgency").on({
    mouseenter: function () {
      handleAnimationsSite(true);
    },
    mouseleave: function () {
      handleAnimationsSite(false);
    },
  });
  // end agency

  // about swiper

  swiper.on("slideChangeTransitionEnd", function () {
    var colorClass = "slide" + (this.activeIndex + 1) + "-button-color";
    $(".swiper-button-prev3, .swiper-button-next3")
      .removeClass(
        "slide1-button-color slide2-button-color slide3-button-color slide4-button-color"
      )
      .addClass(colorClass);
  });
  // slide 1

  function animateElements() {
    $("#about-slide1-text").addClass(
      "opacity1 animate__animated animate__bounceInRight animate__slow"
    );

    $(".about-slide1-p").addClass(
      "opacity1 animate__animated animate__bounceInUp animate__fast animate__delay-2s"
    );

    $("#about-slide1-img").addClass(
      "opacity1 animate__animated animate__backInUp animate__fast"
    );
    $(".swiper-button-prev3, .swiper-button-next3").addClass(function () {
      $(this).addClass("slide1-button-color");
    });
  }

  function addEventListeners() {
    $(document).scroll(function () {
      let st = $(this).scrollTop();
      if (st > $(".about-swiper").offset().top - 300) {
        animateElements();
      }
    });

    let myVar;
    swiper.on("slideChange", function () {
      if (this.activeIndex == 0) {
        if (myVar) {
          clearInterval(myVar);
        }
        myVar = setInterval(() => {
          animateElements();
        }, 300);
      } else {
        if (myVar) {
          clearInterval(myVar);
        }
        $("#about-slide1-text").removeClass(
          "opacity1 animate__animated animate__bounceInRight"
        );

        $(".about-slide1-p").removeClass(
          "opacity1 animate__animated animate__bounceInUp animate__fast animate__delay-1s"
        );

        $("#about-slide1-img").removeClass(
          "opacity1 animate__animated animate__backInUp animate__fast"
        );
        $(".swiper-button-prev3, .swiper-button-next3").removeClass(
          "slide1-button-color"
        );
      }
    });
  }

  addEventListeners();

  // end slide 1

  // slide 2

  const startAnimationSlide2 = () => {
    setTimeout(() => {
      $("#about-slide2-text").addClass(
        "opacity1 animate__animated animate__slideInDown animate__fast"
      );

      $(".about-slide2-p").addClass(
        "animate__animated animate__jello animate__delay-1s"
      );
    }, 500);

    $("#about-slide2-img").addClass(
      "opacity1 animate__animated animate__slideInLeft animate__fast"
    );

    setTimeout(() => {
      $("#about-btn-start").addClass(
        "opacity1 animate__animated animate__backInUp"
      );
    }, 700);
  };

  const stopAnimationSlide2 = () => {
    setTimeout(() => {
      $("#about-slide2-text").removeClass(
        "opacity1 animate__animated animate__slideInDown animate__fast"
      );

      $(".about-slide2-p").removeClass(
        "animate__animated animate__jello animate__delay-1s"
      );
    }, 500);

    $("#about-slide2-img").removeClass(
      "opacity1 animate__animated animate__slideInLeft animate__fast"
    );

    setTimeout(() => {
      $("#about-btn-start").removeClass(
        "opacity1 animate__animated animate__backInUp"
      );
    }, 700);
  };

  $("#p-frontend").mouseenter(function () {
    $("#about-span-code").addClass(
      "animate__animated animate__hinge animate__fast"
    );
  });

  let myVar1;
  swiper.on("slideChange", function () {
    if (this.activeIndex == 1) {
      if (myVar1) {
        clearInterval(myVar1);
      }
      myVar1 = setInterval(startAnimationSlide2, 300);
    } else {
      if (myVar1) {
        clearInterval(myVar1);
      }
      stopAnimationSlide2();
    }
  });
  // end slide 2

  // slide 3

  const startAnimationSlide3 = () => {
    setTimeout(() => {
      $("#about-slide3-text").addClass(
        "opacity1 animate__animated animate__fadeInTopLeft animate__fast"
      );

      $(".about-slide3-p").addClass(
        "opacity1 animate__animated animate__bounceInDown animate__fast animate__delay-1s"
      );
    }, 500);

    $("#about-slide3-img").addClass(
      "opacity1 animate__animated animate__lightSpeedInRight animate__fast"
    );

    setTimeout(() => {
      $("#about-btn-now").addClass(
        "opacity1 animate__animated animate__bounceInUp"
      );
    }, 700);
  };

  const stopAnimationSlide3 = () => {
    setTimeout(() => {
      $("#about-slide3-text").removeClass(
        "opacity1 animate__animated animate__fadeInTopLeft animate__fast"
      );

      $(".about-slide3-p").removeClass(
        "opacity1 animate__animated animate__bounceInDown animate__fast animate__delay-1s"
      );
    }, 500);

    $("#about-slide3-img").removeClass(
      "opacity1 animate__animated animate__lightSpeedInRight animate__fast"
    );

    setTimeout(() => {
      $("#about-btn-now").removeClass(
        "opacity1 animate__animated animate__bounceInUp"
      );
    }, 700);
  };

  let myVar2;
  swiper.on("slideChange", function () {
    if (this.activeIndex == 2) {
      if (myVar2) {
        clearInterval(myVar2);
      }
      myVar2 = setInterval(startAnimationSlide3, 300);
    } else {
      if (myVar2) {
        clearInterval(myVar2);
      }
      stopAnimationSlide3();
    }
  });

  // end slide 3

  // slide 4

  const startAnimationSlide4 = () => {
    setTimeout(() => {
      $("#about-slide4-text").addClass(
        "opacity1 animate__animated animate__bounceInRight animate__fast"
      );

      $(".about-slide4-p").addClass(
        "opacity1 animate__animated animate__bounceInDown animate__fast animate__delay-1s"
      );
    }, 500);

    $("#about-slide4-img").addClass(
      "opacity1 animate__animated animate__zoomInDown animate__fast"
    );

    setTimeout(() => {
      $("#about-btn-now2").addClass(
        "opacity1 animate__animated animate__fadeInUpBig"
      );
    }, 700);
  };

  const stopAnimationSlide4 = () => {
    setTimeout(() => {
      $("#about-slide4-text").removeClass(
        "opacity1 animate__animated animate__bounceInRight animate__fast"
      );

      $(".about-slide4-p").removeClass(
        "opacity1 animate__animated animate__bounceInDown animate__fast animate__delay-1s"
      );
    }, 500);

    $("#about-slide4-img").removeClass(
      "opacity1 animate__animated animate__zoomInDown animate__fast"
    );

    setTimeout(() => {
      $("#about-btn-now2").removeClass(
        "opacity1 animate__animated animate__fadeInUpBig"
      );
    }, 700);
  };

  let myVar3;
  swiper.on("slideChange", function () {
    if (this.activeIndex == 3) {
      if (myVar3) {
        clearInterval(myVar3);
      }
      myVar3 = setInterval(startAnimationSlide4, 300);
    } else {
      if (myVar3) {
        clearInterval(myVar3);
      }
      stopAnimationSlide4();
    }
  });
  // end slide 4
  // end about swiper
  // favorite section
  // desktop
  function handleMouseEnterFav(cardNumber) {
    $("#fav-like-" + cardNumber).removeClass(
      "animate__animated animate__fadeOutRight animate__faster"
    );
    $("#fav-like-" + cardNumber).addClass(
      "block2 animate__animated animate__fadeInLeft animate__faster"
    );
    $("#fav-genre-" + cardNumber).addClass("animate__animated animate__tada");
  }

  function handleMouseLeaveFav(cardNumber) {
    $("#fav-like-" + cardNumber).removeClass(
      "block2 animate__animated animate__fadeInLeft animate__faster"
    );
    $("#fav-like-" + cardNumber).addClass(
      "block2 animate__animated animate__fadeOutRight animate__faster"
    );
    $("#fav-genre-" + cardNumber).removeClass(
      "animate__animated animate__tada"
    );
  }

  for (let i = 1; i <= 8; i++) {
    $("#fav-card-" + i).mouseenter(function () {
      handleMouseEnterFav(i);
    });
    $("#fav-card-" + i).mouseleave(function () {
      handleMouseLeaveFav(i);
    });
  }
  //  end desktop

  // mobile
  function handleMouseEnterFavMobile(cardNumber) {
    $(`#fav-like-${cardNumber}-mobile`).removeClass(
      "animate__animated animate__fadeOutRight animate__faster"
    );
    $(`#fav-like-${cardNumber}-mobile`).addClass(
      "block2 animate__animated animate__fadeInLeft animate__faster"
    );
    $(`#fav-genre-${cardNumber}-mobile`).addClass(
      "animate__animated animate__tada"
    );
  }

  function handleMouseLeaveFavMobile(cardNumber) {
    $(`#fav-like-${cardNumber}-mobile`).removeClass(
      "block2 animate__animated animate__fadeInLeft animate__faster"
    );
    $(`#fav-like-${cardNumber}-mobile`).addClass(
      "block2 animate__animated animate__fadeOutRight animate__faster"
    );
    $(`#fav-genre-${cardNumber}-mobile`).removeClass(
      "animate__animated animate__tada"
    );
  }

  for (let i = 1; i <= 8; i++) {
    $(`#fav-card-${i}-mobile`).mouseenter(() => handleMouseEnterFavMobile(i));
    $(`#fav-card-${i}-mobile`).mouseleave(() => handleMouseLeaveFavMobile(i));
  }
  // end mobile
  // end favorite section
  // blog section
  var cards = [
    ".blog-card-1",
    ".blog-card-2",
    ".blog-card-3",
    ".blog-card-4",
    ".blog-card-5",
    ".blog-card-6",
    ".blog-card-7",
    ".blog-card-8",
    ".blog-card-9",
    ".blog-card-10",
    ".blog-card-11",
    ".blog-card-12",
  ];

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];

    $(card).mouseenter(function () {
      var index = $(this).index() + 1;
      $("#blog-genre-" + index).addClass(
        "opacity1 animate__animated animate__fadeInRight animate__faster"
      );
      $("#blog-icon-" + index).addClass(
        "opacity1 animate__animated animate__fadeInLeft animate__faster"
      );
      $("#blog-img-" + index).addClass("scale-blur");
    });

    $(card).mouseleave(function () {
      var index = $(this).index() + 1;
      $("#blog-img-" + index).removeClass("scale-blur");
    });
  }
  // end blog section
  // END CONTENT
  //  start footer
  function animateFooterLogo() {
    $("#footer-logo-desktop").toggleClass("animate__animated animate__jello");
  }

  function switchFooterLogo() {
    $("#footer-logo-desktop").addClass("none");
    $("#footer-logo2-desktop").addClass(
      "block3 animate__animated animate__zoomInRight"
    );
    $("#footer-p1-desktop").addClass("none");
    $("#footer-p2-desktop").addClass(
      "block3 animate__animated animate__zoomInRight"
    );
  }

  function revertFooterLogo() {
    $("#footer-logo2-desktop").removeClass(
      "block3 animate__animated animate__zoomInRight"
    );
    $("#footer-logo-desktop").removeClass("none");
    $("#footer-logo-desktop").addClass("animate__animated animate__zoomInLeft");
    $("#footer-p2-desktop").removeClass(
      "block3 animate__animated animate__zoomInRight"
    );
    $("#footer-p1-desktop").removeClass("none");
    $("#footer-p1-desktop").addClass("animate__animated animate__zoomInLeft");
  }

  $("#footer-logo-desktop").on({
    mouseover: animateFooterLogo,
    click: switchFooterLogo,
  });

  $("#footer-logo2-desktop").on("click", revertFooterLogo);
  // end footer
  // COURSES PAGE
  // sort/filter modal
  function toggleModal(modalClass, overflow) {
    $("body").css("overflow", overflow);

    if ($("." + modalClass).hasClass("block2")) {
      $("." + modalClass).removeClass(
        "animate__animated animate__fadeInUp animate__fast block2"
      );
    } else {
      $("." + modalClass).addClass(
        "animate__animated animate__fadeInUp animate__fast block2"
      );
    }
  }

  $(".filter").click(function () {
    toggleModal("filter-modal", "hidden");
  });

  $(".close-filter").click(function () {
    toggleModal("filter-modal", "auto");
  });

  $("#filter-btn").click(function () {
    toggleModal("filter-modal", "auto");
  });

  $(".sort").click(function () {
    toggleModal("sort-modal", "hidden");
  });

  $(".close-sort").click(function () {
    toggleModal("sort-modal", "auto");
  });

  $("#sort-btn").click(function () {
    toggleModal("sort-modal", "auto");
  });
  // end sort/filter modal
  $("#courses-input").focusin(function () {
    $("#courses-mag").addClass("animate__animated animate__jello changeColor");
  });
  $("#courses-input").focusout(function () {
    $("#courses-mag").removeClass(
      "animate__animated animate__jello changeColor"
    );
  });
  // END COURSES PAGE
  // BLOG PAGE
  const elements = {
    input: "#blog-input",
    inputMobile: "#blog-input-mobile",
    cat: ".dstebndi",
    cat1: ".catg-1",
    cat2: ".catg-2",
    cat3: ".catg-3",
    cat4: ".catg-4",
    cat5: ".catg-5",
    cat6: ".catg-6",
    cat7: ".catg-7",
    cat8: ".catg-8",
    cat9: ".catg-9",
    mag: "#blog-mag",
    magMobile: "#blog-mag-mobile",
    catSpan: "#blog-cat-span",
    flesh: {
      1: ".flesh-1",
      2: ".flesh-2",
      3: ".flesh-3",
      4: ".flesh-4",
      5: ".flesh-5",
      6: ".flesh-6",
      7: ".flesh-7",
      8: ".flesh-8",
      9: ".flesh-9",
    },
  };

  $(elements.input).on({
    focusin: function () {
      $(elements.mag).addClass("animate__animated animate__jello changeColor");
    },
    focusout: function () {
      $(elements.mag).removeClass(
        "animate__animated animate__jello changeColor"
      );
    },
  });

  $(elements.inputMobile).on({
    focusin: function () {
      $(elements.magMobile).addClass(
        "animate__animated animate__jello changeColor"
      );
    },
    focusout: function () {
      $(elements.magMobile).removeClass(
        "animate__animated animate__jello changeColor"
      );
    },
  });

  $(elements.cat).on({
    mouseover: function () {
      $(elements.catSpan).toggleClass("animate__animated animate__swing");
    },
  });

  Object.keys(elements.flesh).forEach((cat) => {
    $(elements["cat" + cat]).on({
      mouseenter: function () {
        $(elements.flesh[cat]).toggleClass(
          "animate__animated animate__rubberBand"
        );
      },
    });
  });
  // END BLOG PAGE
  $("#theme-toggle-dark-icon-desktop").click(function () {
    $("#FS-image").removeClass("block2").addClass("none");
    $("#FS-image-dark").removeClass("none").addClass("block2");
    $(".aparat-light").removeClass("block2").addClass("none");
    $(".aparat-dark").removeClass("none").addClass("block2");
  });

  $("#theme-toggle-light-icon-desktop").click(function () {
    $("#FS-image").removeClass("none").addClass("block2");
    $("#FS-image-dark").removeClass("block2").addClass("none");
    $(".aparat-light").removeClass("none").addClass("block2");
    $(".aparat-dark").removeClass("block2").addClass("none");
  });
});
// end jquery
//////////////////////////////////////////////////////////
// start JS
// newest desktop swiper
var swiper = new Swiper(".mySwiper1", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// end newest desktop swiper
// newest mobile swiper
var swiper = new Swiper(".mySwiper2", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// end newest mobile swiper

// about swiper
var swiper = new Swiper(".mySwiper3", {
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});

var animationAboutSlide1 = lottie.loadAnimation({
  container: document.getElementById("about-slide1-img"),
  path: `../media/AboutSwiper/AboutSwiper-Slide1.json`,
  render: "svg",
  loop: true,
  autoplay: true,
  name: "inturduce-animation-Slide1",
});

var animationAboutSlide2 = lottie.loadAnimation({
  container: document.getElementById("about-slide2-img"),
  path: `../media/AboutSwiper/AboutSwiper-Slide2.json`,
  render: "svg",
  loop: true,
  autoplay: true,
  name: "inturduce-animation-Slide2",
});
var animationAboutSlide3 = lottie.loadAnimation({
  container: document.getElementById("about-slide3-img"),
  path: `../media/AboutSwiper/AboutSwiper-Slide3.json`,
  render: "svg",
  loop: true,
  autoplay: true,
  name: "inturduce-animation-Slide3",
});
var animationAboutSlide4 = lottie.loadAnimation({
  container: document.getElementById("about-slide4-img"),
  path: `../media/AboutSwiper/AboutSwiper-Slide4.json`,
  render: "svg",
  loop: true,
  autoplay: true,
  name: "inturduce-animation-Slide4",
});

// end about swiper
// footer swiper
var swiper4 = new Swiper(".mySwiper4", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// end footer swiper
// dark mode
// mobile
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
// desktop
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
var themeToggleDarkIcon = document.getElementById(
  "theme-toggle-dark-icon-desktop"
);
var themeToggleLightIcon = document.getElementById(
  "theme-toggle-light-icon-desktop"
);

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle-desktop");

themeToggleBtn.addEventListener("click", function () {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});
// end dark mode
// inturduce json animation
var animationLight = lottie.loadAnimation({
  container: document.getElementById("FS-image"),
  path: `../media/FirstSection/Animation - inturduce.json`,
  render: "svg",
  loop: true,
  autoplay: true,
  name: "inturduce-animation-light",
});

var animationDark = lottie.loadAnimation({
  container: document.getElementById("FS-image-dark"),
  path: `../media/FirstSection/Animation - inturduce - dark.json`,
  render: "svg",
  loop: true,
  autoplay: true,
  name: "inturduce-animation-dark",
});



var animationContact = lottie.loadAnimation({
  container: document.getElementById("contact-img"),
  path: `../media/Contact/Animation - 1701511852584.json`,
  render: "svg",
  loop: true,
  autoplay: true,
  name: "contact-animation",
});

var animationContact = lottie.loadAnimation({
  container: document.getElementById("contact-phone"),
  path: `../media/Contact/Animation - email.json`,
  render: "svg",
  loop: true,
  autoplay: true,
  name: "contact-animation",
});


// end inturduce json animation
// blog title
const typedTextSpanBlog = document.querySelector(".typed-text-blog");
const cursorSpanBlog = document.querySelector(".cursor-blog");

const textArrayBlog = ["مقالات"];
const typingDelayBlog = 200;
const erasingDelayBlog = 150;
const newTextDelayBlog = 400;
let textArrayIndexBlog = 0;
let charIndexBlog = 0;

function typeBlog() {
  if (charIndexBlog < textArrayBlog[textArrayIndexBlog].length) {
    if (!cursorSpanBlog.classList.contains("typing"))
      cursorSpanBlog.classList.add("typing");
    typedTextSpanBlog.textContent +=
      textArrayBlog[textArrayIndexBlog].charAt(charIndexBlog);
    charIndexBlog++;
    setTimeout(typeBlog, typingDelayBlog);
  } else {
    cursorSpanBlog.classList.remove("typing");
    setTimeout(eraseBlog, newTextDelayBlog);
  }
}

function eraseBlog() {
  if (charIndexBlog > 0) {
    if (!cursorSpanBlog.classList.contains("typing"))
      cursorSpanBlog.classList.add("typing");
    typedTextSpanBlog.textContent = textArrayBlog[textArrayIndexBlog].substring(
      0,
      charIndexBlog - 1
    );
    charIndexBlog--;
    setTimeout(eraseBlog, erasingDelayBlog);
  } else {
    cursorSpanBlog.classList.remove("typing");
    textArrayIndexBlog++;
    if (textArrayIndexBlog >= textArrayBlog.length) textArrayIndexBlog = 0;
    setTimeout(typeBlog, typingDelayBlog + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArrayBlog.length) setTimeout(typeBlog, newTextDelayBlog + 250);
});
// end blog title

// courses title
const typedTextSpanCourses = document.querySelector(".typed-text-courses");
const cursorSpanCourses = document.querySelector(".cursor-courses");

const textArrayCourses = ["دوره‌ها"];
const typingDelayCourses = 200;
const erasingDelayCourses = 150;
const newTextDelayCourses = 400;
let textArrayIndexCourses = 0;
let charIndexCourses = 0;

function typeCourses() {
  if (charIndexCourses < textArrayCourses[textArrayIndexCourses].length) {
    if (!cursorSpanCourses.classList.contains("typing"))
      cursorSpanCourses.classList.add("typing");
    typedTextSpanCourses.textContent +=
      textArrayCourses[textArrayIndexCourses].charAt(charIndexCourses);
    charIndexCourses++;
    setTimeout(typeCourses, typingDelayCourses);
  } else {
    cursorSpanCourses.classList.remove("typing");
    setTimeout(eraseCourses, newTextDelayCourses);
  }
}

function eraseCourses() {
  if (charIndexCourses > 0) {
    if (!cursorSpanCourses.classList.contains("typing"))
      cursorSpanCourses.classList.add("typing");
    typedTextSpanCourses.textContent = textArrayCourses[
      textArrayIndexCourses
    ].substring(0, charIndexCourses - 1);
    charIndexCourses--;
    setTimeout(eraseCourses, erasingDelayCourses);
  } else {
    cursorSpanCourses.classList.remove("typing");
    textArrayIndexCourses++;
    if (textArrayIndexCourses >= textArrayCourses.length)
      textArrayIndexCourses = 0;
    setTimeout(typeCourses, typingDelayCourses + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArrayCourses.length)
    setTimeout(typeCourses, newTextDelayCourses + 250);
});
// end courses title
// contact title
const typedTextSpanContact = document.querySelector(".typed-text-contact");
const cursorSpanContact = document.querySelector(".cursor-contact");

const textArrayContact = ["تماس‌با‌ما"];
const typingDelayContact = 200;
const erasingDelayContact = 150;
const newTextDelayContact = 400;
let textArrayIndexContact = 0;
let charIndexContact = 0;

function typeContact() {
  if (charIndexContact < textArrayContact[textArrayIndexContact].length) {
    if (!cursorSpanContact.classList.contains("typing"))
      cursorSpanContact.classList.add("typing");
    typedTextSpanContact.textContent +=
      textArrayContact[textArrayIndexContact].charAt(charIndexContact);
    charIndexContact++;
    setTimeout(typeContact, typingDelayContact);
  } else {
    cursorSpanContact.classList.remove("typing");
    setTimeout(eraseContact, newTextDelayContact);
  }
}

function eraseContact() {
  if (charIndexContact > 0) {
    if (!cursorSpanContact.classList.contains("typing"))
      cursorSpanContact.classList.add("typing");
    typedTextSpanContact.textContent = textArrayContact[
      textArrayIndexContact
    ].substring(0, charIndexContact - 1);
    charIndexContact--;
    setTimeout(eraseContact, erasingDelayContact);
  } else {
    cursorSpanContact.classList.remove("typing");
    textArrayIndexContact++;
    if (textArrayIndexContact >= textArrayContact.length)
      textArrayIndexContact = 0;
    setTimeout(typeContact, typingDelayContact + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArrayContact.length)
    setTimeout(typeContact, newTextDelayContact + 250);
});
// end contact title
