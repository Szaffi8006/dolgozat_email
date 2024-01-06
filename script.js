function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function generateEmail() {
    var fullName = document.getElementById("fullName").value;
    var birthYear = document.getElementById("birthYear").value;
    if (birthYear.length !== 4) {
        alert("Kérlek, adj meg egy érvényes születési évet!");
        return;
    }

    var nameInitials = fullName.split(' ').map(name => removeAccents(name.slice(0, 3).toLowerCase())).join('');
    var lastDigitOfYear = birthYear.slice(-1);

    var generatedEmail = nameInitials + lastDigitOfYear + "@duck.com";

   
    document.getElementById("generatedEmail").textContent = "Generált email cím: " + generatedEmail;
}
