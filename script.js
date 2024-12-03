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
});
