const submit = document.getElementById("Continue");
const submit2 = document.getElementById("Continue2")
const redpara = document.getElementById("Hidepara")
const passwordO = document.getElementById("mypassword")
    submit.addEventListener("click", emailValidation);
    var i=1;
    function emailValidation() {        
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var Email = document.getElementById("myemail");
        
        if (Email.value.match(mailformat)) {
            alert("Valid email address!");
            Email.focus();
            submit.className="none";
            passwordO.className="block";
            submit2.className="block";
            document.getElementById("logIn").classList="block";
            document.getElementById("log-in").className = "none";
            document.getElementById("proof").className = "block";
          
            
            var obj = {
                email: email.value,
               
            }
            console.log(obj);
           var j_email_password = JSON.stringify(obj);
           console.log(j_email_password);
         
          
          localStorage.setItem(`local${i++}`,j_email_password);
          
          // localStorage.setItem("email",j_email);
         //location.replace("http://127.0.0.1:5500/unit3/moviesWebsite/Login.html")
            return true;
        }
        else {
            alert("You have entered an invalid email address!");
           redpara.className="block";
           Email.className="borderReed"
            return false;
        }
    }

    const loginBtn = document.getElementById("log-in")
    const proof = document.getElementById("proof")

    function loginPage() {

        var text = localStorage.getItem(`local${i++}`);
        //let email = document.getElementById('email_log').value;
      //  console.log(email);
        console.log(text);
        
        // let password = document.getElementById("password_log").value;
        // console.log(password);
        // var obj = JSON.parse(text);
        // console.log(obj);
        //     if (obj.email === email && obj.password== password) {
        //         alert("You are Successfully logging in");
        //     location.replace("http://127.0.0.1:5500/unit3/moviesWebsite/home.html");
        //     return true;
                
        //     } 
        //     else {
        //     alert("Yo arre using wrong Email id / Password");
        //     return false;
        // }

        var password = document.getElementById("mypassword").value;
       obj2 = [password]
        var jsonPasword = JSON.stringify(obj2);
        localStorage.setItem(`local${i++}`,jsonPasword);
        location.replace("home.html");
        loginBtn.style.display="none";
        proof.style.display="block";
    }
    
    submit2.addEventListener("click", loginPage);

    function locatonRe() {
        location.replace("home.html");
    }