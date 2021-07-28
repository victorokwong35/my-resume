$(document).ready(function () {
  // PRELOADER
  $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.

  // PAGE LOADER
  jQuery("#grid-container").on("initComplete.cbp", function () {
    if ($("#ajax-tab-container").length) {
      $("#ajax-tab-container").easytabs({
        tabs: "header nav ul li",
        animate: true,
        updateHash: false,
        transitionIn: "fadeIn",
        transitionOut: "fadeOut",
        animationSpeed: 100,
        tabActiveClass: "active",
        transitionInEasing: "linear",
        transitionOutEasing: "linear",
      });
    }
  });

  // RESPONSIVE MENU
  function transform() {
    var outdiv =
      '<div class="menuout"><div class="menuin"><ul class="tabs"></ul></div></div>';
    $(outdiv).appendTo("nav");
    var resmenus = $(".tabs").html();
    $(".menuout .menuin .tabs").append(resmenus);
    $(".menuin").hide();
  }
  transform();
  $(".hamburger").on("click", function () {
    $(".menuin").slideToggle();
  });
  $(".menuout").on("click", function () {
    $(".menuin").slideUp();
  });

  // OWL CAROUSEL GENERAL JS
  if ($(".owl-carousel").length) {
    $(".owl-carousel").each(function () {
      $(this).owlCarousel({
        items: $(this).data("items") ? $(this).data("items") : 3,
        autoPlay: $(this).data("autoplay") ? $(this).data("autoplay") : 2500,
        pagination: $(this).data("pagination")
          ? $(this).data("pagination")
          : false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
      });
    });
  }

  // PORTFOLIO CONTENT
  $("#grid-container").cubeportfolio({
    layoutMode: "grid",
    filters: "#filters-container",
    gridAdjustment: "responsive",
    animationType: "skew",
    defaultFilter: "*",
    gapVertical: 0,
    gapHorizontal: 0,
    singlePageAnimation: "fade",
    mediaQueries: [
      {
        width: 700,
        cols: 3,
      },
      {
        width: 480,
        cols: 2,
        options: {
          caption: "",
          gapHorizontal: 30,
          gapVertical: 20,
        },
      },
      {
        width: 320,
        cols: 1,
        options: {
          caption: "",
          gapHorizontal: 50,
        },
      },
    ],
    singlePageCallback: function (url, element) {
      var t = this;
      $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        timeout: 30000,
      })
        .done(function (result) {
          t.updateSinglePage(result);
        })
        .fail(function () {
          t.updateSinglePage("AJAX Error! Please refresh the page!");
        });
    },
    plugins: {
      loadMore: {
        element: "#js-loadMore-agency",
        action: "click",
        loadItems: 3,
      },
    },
  });

  // BLOG CONTENT
  $("#grid-blog").cubeportfolio({
    layoutMode: "grid",
    gridAdjustment: "responsive",
    gapVertical: 0,
    gapHorizontal: 0,
    mediaQueries: [
      {
        width: 700,
        cols: 3,
      },
      {
        width: 480,
        cols: 2,
        options: {
          caption: "",
          gapHorizontal: 30,
          gapVertical: 20,
        },
      },
      {
        width: 320,
        cols: 1,
        options: {
          caption: "",
          gapHorizontal: 50,
        },
      },
    ],
    plugins: {
      loadMore: {
        element: "#load-posts",
        action: "click",
        loadItems: 3,
      },
    },
  });

  // GALLERY WIDGET
  $("#widget-gallery").cubeportfolio({
    layoutMode: "grid",
    gridAdjustment: "responsive",
    gapVertical: 0,
    gapHorizontal: 0,
    mediaQueries: [
      {
        width: 700,
        cols: 4,
      },
      {
        width: 480,
        cols: 2,
        options: {
          caption: "",
          gapHorizontal: 30,
          gapVertical: 20,
        },
      },
      {
        width: 320,
        cols: 1,
        options: {
          caption: "",
          gapHorizontal: 50,
        },
      },
    ],
  });


  loadScript("/js/constant.js", myCallback);

}); // document ready end

function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
   // head.appendChild(script);
    document.body.appendChild(script);
}


var myCallback = function() {
  
  setupFirebase();
   
};


  


//Contact section


//NEW LINE JS
/*
$(document).ready(function() {

  document.querySelector(".site-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();

    let name = document.querySelector(".input-name").value;
    let email = document.querySelector(".input-email").value;
    let message = document.querySelector(".input-message").value;

    saveContactInfo(name, email, message);

    document.saveContactInfo(".site-form").reset();

    sendEmail(name, email, message);

    

  }

  // save infos to firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
      Name: name,
      Email: email,
      Message: message,

    });
  }

  retrieveInfos();

  //send email info
  function sendEmail(name, email, message) {
    Email.send({
      Host: "smtp.gmail.com",
      Username: 'victor.resume35@gmail.com',
      Password: "selepqjumlcmaxes",
      To: 'victorokwong35@gmail.com',
      From: 'victor.resume35@gmail.com',
      Subject: `${name} sent you a message`,
      Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`
      
    });
  }
  
}); */





















/*

$(document).ready(function() {

  document.querySelector("#main-form").addEventListener("submit", submitForm);
  
  function submitForm(params) {
    

    let name = document.querySelector(".input-name").value;
    let email = document.querySelector(".input-email").value;
    let message = document.querySelector(".input-message").value;

    saveContactInfo(name, email, message);

  }

  // save infos to firebase
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
      name: name,
      email: email,
      message: message,
    });
  }
  
});


*/


/*

  $("#send-btn").click(function() {
    $("#pop-up-window").css({
        "display": "block"
    });
  
  });
  
  $("#tiny-close-btn").click(function (e) {
    $("#pop-up-window").css({"display": "none"});
  });
  



var inputData = (function() {  
    return {
        getInput: function() {
            return {
                name: document.querySelector('.site-input').value,
                email: document.querySelector('.site-email').value,
                message: document.querySelector('.site-area').value
            };
        }
    }
    
});

*/

/*
    document.querySelector(".send-btn").addEventListener("click", function() {

        $("#pop-up-window").css({
            "display": "block"
        });
    });


    $("#tiny-close-btn").click(function (e) {
    e.preventDefault();
    $("#pop-up-window").css({
        "display": "none"
    });

});

var name = document.querySelector(".site-input").value;
var email = document.querySelector(".site-email").value;
var message = document.querySelector(".site-area").value;


var keyPress = document.addEventListener("keypress", function () {
  if (event.keyCode === 13 || event.which === 13) {
    submitButton();
  }
});



*/

/*


*/

// window load end


