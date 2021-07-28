 
var hireMeController = (function() {
        
        document.getElementById("hire-me").addEventListener("submit", submitForm);
        
        function submitForm(e) {
        e.preventDefault();
    
        let name = document.querySelector(".hire-name").value;
        let email = document.querySelector(".hire-email").value;
        let country = document.querySelector(".hire-country").value;
        let state = document.querySelector(".hire-state").value;
        let company = document.querySelector(".hire-company").value;
        let industry = document.querySelector(".hire-industry").value;

        let selectJobType = document.getElementById("select-1").value;
        
        let selectCurrencyType = document.getElementById("select-2").value;
        
        let message = document.querySelector(".hire-message").value;
    
        saveContactInfo(name, email,country, state, company, industry, selectJobType, selectCurrencyType, message);

        sendEmail(name, email,country, state, company, industry, selectJobType, selectCurrencyType, message);

        }

        // save infos to firebase
        function saveContactInfo(name, email,country, state, company, industry, selectJobType, selectCurrencyType, message) {
            let newContactInfo = contactInfo.push();
        
            newContactInfo.set({
            Name: name,
            Email: email,
            Country: country,
            State: state,
            Company: company,
            Industry: industry,
            SelectJobType: selectJobType,
            SelectCurrencyType: selectCurrencyType,
            Message: message
        
            });
        }
    
        
        //send email info
        function sendEmail(name, email,country, state, company, industry, selectJobType, selectCurrencyType, message) {
            Email.send({
            Host: "smtp.gmail.com",
            Username: "victor.resume35@gmail.com",
            Password: "vsgpvhbrrjaododm",
            To: "victor.resume35@gmail.com",
            From: "victor.resume35@gmail.com",
            Subject: `${name} would like to HIRE you`,
            Body: `
                Name: ${name} <br> 
                Email: ${email} <br> 
                Country: ${country} <br> 
                State: ${state} <br> 
                Company: ${company} <br> 
                Industry: ${industry} <br> 
                SelectJobType: ${selectJobType} <br> 
                SelectCurrencyType: ${selectCurrencyType} <br> 
                Message: ${message} <br> 
                
                `,
            
            }).then((message) => {
                alert('Offer sent successfully');
                }); clear();

        }

        document.getElementById("tiny-close-btn").addEventListener("click", cancel);

        function cancel (e) {
            e.preventDefault();
            $("#pop-up-window").css({"display": "none"});
        }


        function clear(){        
          document.querySelector(".hire-name").value = '';
          document.querySelector(".hire-email").value = '';
          document.querySelector(".hire-country").value = '';
          document.querySelector(".hire-state").value = '';
          document.querySelector(".hire-company").value = '';
          document.querySelector(".hire-industry").value = '';
          document.getElementById("select-1").value;
          document.getElementById("select-2").value;
          document.querySelector(".hire-message").value = '';
        }


  


})();

/*

      document.getElementById("tiny-close-btn").addEventListener("click", cancel);

        function cancel (e) {
            e.preventDefault();
            $("#pop-up-window").css({"display": "none"});
        }


        function clear(){        
          document.querySelector(".hire-name").value;
          document.querySelector(".hire-email").value;
          document.querySelector(".hire-country").value;
          document.querySelector(".hire-state").value;
          document.querySelector(".hire-company").value;
          document.querySelector(".hire-industry").value;
          document.getElementById("select-1").value;
          document.getElementById("select-2").value;
          document.querySelector(".hire-message").value;
        }

    


/*
    
    
    
    
    
    
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCCD1nCWWsKNRjaCB9H0SZWtshcW8XVCYI",
    authDomain: "hire-me-f830a.firebaseapp.com",
    databaseURL: "https://hire-me-f830a-default-rtdb.firebaseio.com",
    projectId: "hire-me-f830a",
    storageBucket: "hire-me-f830a.appspot.com",
    messagingSenderId: "44861747200",
    appId: "1:44861747200:web:a1f789cfd505f663d9a8e5",
    measurementId: "G-HYK269TRG8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    */
