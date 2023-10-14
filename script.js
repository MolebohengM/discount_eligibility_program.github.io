function checkEligibility() {
    var age = document.getElementById("age").value;
    var membership = document.getElementById("membership").checked;

    if (age >= 65 || (age >= 18 && membership)) {
        document.getElementById("output").textContent = "Yay! \n You are eligible for a discount.";
        document.getElementById("output").style.color = "green";
    } else {
        document.getElementById("output").textContent = "Oops! You are not eligible for a discount."
        document.getElementById("output").style.color = "red";
    }
}