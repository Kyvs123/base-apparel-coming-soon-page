const input = document.getElementById("email");
const btn = document.getElementById("send");
const error = document.getElementById("error-msg");
let emailData = [];

btn.addEventListener("click", function () {
    
    emailData.push(input.value);
    
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(input.value)) {
        input.innerHTML = `
        <style>
          input{
            border: solid 2px hsl(0, 93%, 68%);
            background-image: url(images/icon-error.svg);
            background-size: 20px;
            background-repeat: no-repeat;
            background-position: 75%;
            filter: opacity(100%); 
          }
        </style>
        `
        error.textContent = "Please provide a valid email"
    } else {

        input.value = "";
        error.textContent = "";
        input.innerHTML = "";
    }


})

