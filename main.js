function validateform(){
    console.log("Called. ")
    var matricNo = document.myForm.matricNo.value;  
    var password = document.myForm.password.value; 
    var text;
    
    if(matricNo == ""){
        text = "Matric No cannot be empty.";
        document.getElementById("demo").innerHTML = text;
        document.myForm.matricNo.focus();
        return false;
    }else if(matricNo == isNaN(matricNo) || matricNo.length != 8){
      text = "Please enter a valid 8-digit matriculation number.";
      document.getElementById("demo").innerHTML = text;
      document.myForm.matricNo.focus();
      return false;
    }else if(password == ""){
        text = "Password cannot be empty.";
        document.getElementById("demo").innerHTML = text;
        document.myForm.password.focus();
        return false;
    }else if(password == isNaN(password) || password.length != 7){
        text = "Password must be 7 characters long.";
        document.getElementById("demo").innerHTML = text;
        document.myForm.password.focus();
        return false;
    }
    
    text = "";
    document.getElementById("demo").innerHTML = text;
    return( true );
}