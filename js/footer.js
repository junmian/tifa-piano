// Display current year 

const today = new Date();
const currentYear = today.getFullYear();

const footerYear = document.getElementById("current-year");
const currentFooterYear = today.getFullYear();

function displayFooterYear() {
    footerYear.innerHTML = currentFooterYear;
}

displayFooterYear();