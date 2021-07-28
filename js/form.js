
var formController = (function() {

    
    
    
    document.getElementById("main-form").addEventListener("submit", submitForm);
    
    function submitForm(e) {
      e.preventDefault();
  
      let name = document.querySelector(".input-name").value;
      let email = document.querySelector(".input-email").value;
      let message = document.querySelector(".input-message").value;
  
      saveContactInfo(name, email, message);

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
  
    //send email info
    function sendEmail(name, email, message) {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "victor.resume35@gmail.com",
        Password: "vsgpvhbrrjaododm",
        To: "victor.resume35@gmail.com",
        From: "victor.resume35@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`,
        
      }).then((message) => {
        $("#pop-up-window").css({
            "display": "block"
        }); clear();
      });
    }

    function clear(){
  		document.getElementById("input_name").value = '';
      document.getElementById("input_email").value = '';
      document.getElementById("input_message").value = '';
    }

    document.getElementById("tiny-close-btn").addEventListener("click", cancel);

    function cancel (e) {
        e.preventDefault();
        $("#pop-up-window").css({"display": "none"});
    }

})();






//$(document).ready(function () {});




  /*
  
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
      Username: "victor.resume35@gmail.com",
      Password: "selepqjumlcmaxes",
      To: "victor.resume35@gmail.com",
      From: "victor.resume35@gmail.com",
      Subject: `${name} sent you a message`,
      Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`,
      
    }).then((message) => alert("Mail sent successfully"))
  } 
  
  
  */