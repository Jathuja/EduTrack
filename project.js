function showsignin(){
    document.getElementById('signin').style.display="block";
    document.getElementById('register').style.display="none";

}
function showregister(){
    document.getElementById('register').style.display="block";
    document.getElementById('signin').style.display="none";
}

/*Form Validation*/
function validateForm() {
    
    let name = document.forms["regForm"]["name"].value;
    let email = document.forms["regForm"]["email"].value;
    let country = document.forms["regForm"]["country"].value;
    let gender = document.forms["regForm"]["gender"];
    let language = document.forms["regForm"]["language"];
    let selectedGender = false;
    let selectedLanguage = false;


    if (!/^[A-Za-z]+$/.test(name)) {
        alert("Name must contain alphabets only.");
        return false;
    }

    if (country == "") {
        alert("Please select a country.");
        return false;
    }

    if (email == "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = true;
            break;
        }
    }
    if (!selectedGender) {
        alert("Please select your gender.");
        return false;
    }

    for (let i = 0; i < language.length; i++) {
        if (language[i].checked) {
            selectedLanguage = true;
            break;
        }
    }
    if (!selectedLanguage) {
        alert("Please select at least one language.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
/*Business*/


