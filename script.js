//They must be true in order to authorize submition
var PHONE_OK = false;
var CREDIT_NUMBER_OK = false;
var CREDIT_EXP_OK = false;
var FORM_FILLED = false;

//Phone Validation

function validatePhone(){
    var phoneInput, test;
    phoneInput = document.getElementById("phone").value;
    test = /\d{3}-\d{3}-\d{3}/.test(phoneInput);
    
    if(test){
        document.getElementById("phoneAlert").innerHTML = ""
        document.getElementById("phone").style.color = "#146eb4"
        PHONE_OK = true;
        return
    }
    else{
        PHONE_OK = false;
        document.getElementById("phoneAlert").innerHTML = "*Write your phone number in the format 555-555-555";
        document.getElementById("phone").style.color = "#ff3b28"
        document.getElementById("phone").focus();
        }
}

//Cart operations

function addItems(){
    var item0, item1, item2, item3, total;
    item0 = document.getElementById("item_0");
    item1 = document.getElementById("item_1");
    item2 = document.getElementById("item_2");
    item3 = document.getElementById("item_3");
    total = 0;

    if(item0.checked === true){
        total+=9.46;
    }
    if(item1.checked === true){
        total+=209.99;
    }
    if(item2.checked === true){
        total+=39.99;
    }
    if(item3.checked === true){
        total+=14.97;
    }

    document.getElementById("total").value = total.toFixed(2);
}

//Payment validation

function validateCard(){
    var cardInput, test;
    cardInput = document.getElementById("credit_card").value;
    test = /\d{4}\s\d{4}\s\d{4}\s\d{4}/.test(cardInput);
    
    if(test){
        document.getElementById("credit_cardAlert").innerHTML = ""
        document.getElementById("credit_card").style.color = "#146eb4"
        CREDIT_NUMBER_OK = true;
        return
    }
    else{
        CREDIT_NUMBER_OK = false;
        document.getElementById("credit_cardAlert").innerHTML = "*Required format 1111 1111 1111 1111";
        document.getElementById("credit_card").style.color = "#ff3b28"
        document.getElementById("credit_card").focus();
        }
}

function validateExpirationFormat(){
    var exp, test;
    exp = document.getElementById("exp_date").value;
    test = /\d{2}\/\d{4}/.test(exp); 
  
    
    //Check if expiration date was wroted correctly
    if(test){
        document.getElementById("exp_dateAlert").innerHTML = ""
        validateExpirationDate()
    }
    else{
        CREDIT_EXP_OK = false;
        document.getElementById("exp_dateAlert").innerHTML = "*Required format 01/2021"
        document.getElementById("exp_date").style.color = "#ff3b28"
        document.getElementById("exp_date").focus()
    }
}


function validateExpirationDate(){
    var exp, test;
    exp = document.getElementById("exp_date").value;
    test = /0[1-9]\/202[1-9]|1[0-2]\/202[1-9]/.test(exp);

    //Check if expiration date is inside the allowed range
    if(test){
        document.getElementById("exp_dateAlert").innerHTML = ""
        document.getElementById("exp_date").style.color = "#146eb4"
        CREDIT_EXP_OK = true;
        return
        
    }
    else{
        CREDIT_EXP_OK = false;
        document.getElementById("exp_dateAlert").innerHTML = "*Exp. Date must be between 01/2021 and 12/2029"
        document.getElementById("exp_date").style.color = "#ff3b28"
        document.getElementById("exp_date").focus()
    }
}
function checkForEmptyFields(){
    var name, lastName, address, phone, creditNumber, creditExp;
    name = document.getElementById("first_name").value;
    lastName = document.getElementById("last_name").value;
    address = document.getElementById("address").value;
    phone = document.getElementById("phone").value;
    creditNumber = document.getElementById("credit_card").value;
    creditExp = document.getElementById("exp_date").value;

    if(name.length === 0){
        document.getElementById("first_name").focus();
        document.getElementById("generalAlertId").innerHTML = "*All requiered fields must be filled"
    }
    else if(lastName.length === 0){
        document.getElementById("last_name").focus();
        document.getElementById("generalAlertId").innerHTML = "*All requiered fields must be filled"
    }
    else if(address.length === 0){
        document.getElementById("address").focus();
        document.getElementById("generalAlertId").innerHTML = "*All requiered fields must be filled"
    }
    else if(phone.length === 0){
        document.getElementById("phone").focus();
        document.getElementById("generalAlertId").innerHTML = "*All requiered fields must be filled"
    }
    else if(creditNumber.length === 0){
        document.getElementById("credit_card").focus();
        document.getElementById("alertCard").innerHTML = "*All requiered fields must be filled"
    }
    else if(creditExp.length === 0){
        document.getElementById("exp_date").focus();
        document.getElementById("alertCard").innerHTML = "*All requiered fields must be filled"
    }
    else{
        document.getElementById("generalAlertId").innerHTML = ""
        document.getElementById("alertCard").innerHTML = ""
        FORM_FILLED = true;
    }
}

function validateForm() {
    
    if(FORM_FILLED){
        
        if(!PHONE_OK){
            validatePhone();
            return false
        }
        if(!CREDIT_NUMBER_OK){
            validateCard()
            return false
        }
        if(!CREDIT_NUMBER_OK){
            validateExpirationFormat()
            return false
        }
        if(PHONE_OK & CREDIT_NUMBER_OK & CREDIT_EXP_OK){
            console.log("form submitted");
            return true
        }
    }
    else{
        checkForEmptyFields();
        return false
    }
    
}

