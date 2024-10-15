// Calcul de l'âge
var startDate = new Date();
const birthday = new Date("2005-08-16");
let spanAge = document.getElementById("span-Age");

if (startDate.getMonth() > birthday.getMonth() || 
   (startDate.getMonth() == birthday.getMonth() && startDate.getDate() >= birthday.getDate())) {
    spanAge.textContent = startDate.getFullYear() - birthday.getFullYear();
} else {
    spanAge.textContent = (startDate.getFullYear() - birthday.getFullYear()) - 1;
}


