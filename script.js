document.addEventListener("DOMContentLoaded", () => {
    const placeholder = document.getElementById("header-placeholder");
    if (placeholder) {
        fetch('header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Header konnte nicht geladen werden");
                }
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;
            })
            .catch(error => console.error("Fehler:", error));
    }
    const placeholder2 = document.getElementById("footer-placeholder");
    if (placeholder2) {
        fetch('footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Footer konnte nicht geladen werden");
                }
                return response.text();
            })
            .then(data => {
                placeholder2.innerHTML = data;
            })
            .catch(error => console.error("Fehler:", error));
    }
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        showError("Alle Felder müssen ausgefüllt werden!");
    } else {
        showResponse("Danke, " + name + "! Deine Nachricht wurde erfolgreich gesendet.");
        document.getElementById("contact-form").reset();
    }
});

function showResponse(responseText) {
    let responseDiv = document.getElementById("form-response");
    responseDiv.textContent = responseText;
    responseDiv.style.display = "block";
}

function showError(errorText) {
    let responseDiv = document.getElementById("form-response");
    responseDiv.textContent = errorText;
    responseDiv.style.display = "block";
    responseDiv.style.color = "#e74c3c";
}
