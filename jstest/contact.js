// Denna kod är skriven av mig

// Hämtar formulär
const form = document.getElementById("contact-form");

// Funktion när du klickar "skicka"
form.addEventListener('submit', send);
function send (event){
    
    // Variabler för användarens input
    let name = (document.getElementById("inputName").value);
    let mail = (document.getElementById("inputMail").value);
    let message = (document.getElementById("inputMessage").value);

    // Om användaren glömmer fylla i ett fält
    if (name == "" || mail == "" || message == ""){
        alert("Fyll i alla fält, tack!");
        event.preventDefault();    
    } else {
         alert("Tack för ditt meddelande!");
    }};

