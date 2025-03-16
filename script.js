const serviceAreaPostcodes = ["3175", "3174", "3173", "3177", "3171", "3172"];

function checkPostcode() {
    const postcode = document.getElementById("postcode").value.trim();
    const resultDiv = document.getElementById("result");

    if (postcode.length !== 4 || isNaN(postcode)) {
        resultDiv.innerHTML = "Please enter a valid 4-digit postcode.";
        resultDiv.style.color = "red";
        return;
    }

    if (serviceAreaPostcodes.includes(postcode)) {
        resultDiv.innerHTML = "Great! We service your area.";
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = "Sorry, your postcode is outside our service area.";
        resultDiv.style.color = "red";
    }
}
