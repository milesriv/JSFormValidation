//Form Validation

let blnValidPhone = false;
let blnValidEmail = false;

let frmVehicles = document.getElementById("vehicle");
let eleVehicles = frmVehicles.elements;

let btnSubmit = document.getElementsByTagName("button");
btnSubmit[0].addEventListener("click", SubmitValid);

function SubmitValid() {
    event.preventDefault();

    //If email and phone# input fields are invalid, don't submit
    if (blnValidEmail == false || blnValidPhone == false) {
        alert("Invalid data within form");
    } else {
        frmVehicles.submit();
    }
}

let inpPhone = eleVehicles.phone_number;
inpPhone.addEventListener("blur", function () {
    ValidatePhone(inpPhone);
});

function ValidatePhone(pnumber) {
    let regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    //Is valid
    if (regexPhone.test(pnumber.value)) {
        blnValidPhone = true;
        inpPhone.style.color = "black";

        //Is invalid
    } else {
        blnValidPhone = false; //Set to false in case user changes it later
        inpPhone.style.color = "red";
    }
}

let inpEmail = eleVehicles.email_address;
inpEmail.addEventListener("blur", function () {
    ValidateEmail(inpEmail);
});

function ValidateEmail(email) {
    let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    //Is valid
    if (regexEmail.test(email.value)) {
        blnValidEmail = true;
        inpEmail.style.color = "black";

        //Is invalid
    } else {
        blnValidEmail = false; //Set to false in case user changes it later
        inpEmail.style.color = "red";
    }
}

let chkAll = eleVehicles.namedItem("all_opts");
chkAll.addEventListener("change", ChkBoxAllChange);

let chkOptions = eleVehicles.options;

function ChkBoxAllChange() {

    //Loop through and check all checkboxes
    if (chkAll.checked) {
        for (let i = 0; i < chkOptions.length; i++) {
            chkOptions[i].checked = true;
        }

        //Loop through and uncheck all checkboxes
    } else {
        for (let i = 0; i < chkOptions.length; i++) {
            chkOptions[i].checked = false;
        }
    }
}


//email regex:   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]                      {1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 


//phone regex:   /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
