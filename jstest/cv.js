// Denna kod är skriven av mig

// variabler för arbetsplatser
const lidlYear = document.getElementById("lidl-year");
const lidlCompany = document.getElementById("lidl-company");
const lidlDescription = document.getElementById("lidl-description");
const fmYear = document.getElementById("fm-year");
const fmCompany = document.getElementById("fm-company");
const fmDescription = document.getElementById("fm-description");
const paYear = document.getElementById("pa-year");
const paCompany = document.getElementById("pa-company");
const paDescription = document.getElementById("pa-description");
const willysYear = document.getElementById("willys-year");
const willysCompany = document.getElementById("willys-company");
const willysDescription = document.getElementById("willys-description");

// funktion för att hämta json och lista ut arbetsplatser på sidan
async function getCv() {
    const response = await fetch("../json/cv.json");
    if (response.ok) {
        const json = await response.json();

        lidlYear.textContent = json.workExperience[0].year;
        lidlCompany.textContent = json.workExperience[0].company;
        lidlDescription.textContent = json.workExperience[0].description;

        fmYear.textContent = json.workExperience[1].year;
        fmCompany.textContent = json.workExperience[1].company;
        fmDescription.textContent = json.workExperience[1].description;

        paYear.textContent = json.workExperience[2].year;
        paCompany.textContent = json.workExperience[2].company;
        paDescription.textContent = json.workExperience[2].description;
        
        willysYear.textContent = json.workExperience[3].year;
        willysCompany.textContent = json.workExperience[3].company;
        willysDescription.textContent = json.workExperience[3].description;

    } else {
        console.log(response.status);
    }
}
// kör funktionen
getCv();