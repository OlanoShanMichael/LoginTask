function validate(){
    var username = document.forms["form"]["username"].value;
    var password = document.forms["form"]["password"].value;

    if (username == "admin" && password == "admin") {
        document.getElementById("validTop").innerHTML = "It Works";
        document.getElementById("validBot").innerHTML = " ";
        return false;
    }
    else if (username == "user" && password == "user"){
        document.getElementById("validBot").innerHTML = "It Works";
        document.getElementById("validTop").innerHTML = " ";
        return false;
    }
    else{
        alert("Your username and password may be incorrect. Try again.")
    }
}



