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


let slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
    console.log(`Before updating, slideIndex[${no}] = ${slideIndex[no]}`);
    slideIndex[no] += n;
    console.log(`After updating, slideIndex[${no}] = ${slideIndex[no]}`);
    showSlides(slideIndex[no], no); // Calling showSlides after the update
}


function showSlides(n, no) {
    console.log(`Displaying slide ${n} for slideId: ${slideId[no]}`);
    let i;
    let x = document.getElementsByClassName(slideId[no]);

    // Ensure n is within the correct bounds
    if (n > x.length) {
        slideIndex[no] = 1;  // Reset to the first slide
        n = 1;  // Ensure `n` is within bounds
    }
    if (n < 1) {
        slideIndex[no] = x.length;  // Reset to the last slide
        n = x.length;  // Ensure `n` is within bounds
    }

    // Hide all slides first
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  // Hide the current slide
        console.log(`Hiding slide: ${i}`);  // Debug log for hidden slides
    }

    // Update the slideIndex for the specific slide set (no)
    slideIndex[no] = n;

    // Show the selected slide
    x[slideIndex[no] - 1].style.display = "block";  // Correct index calculation
    console.log(`Showing slide: ${slideIndex[no] - 1}`);  // Log the shown slide index
}




function openImageInNewPage(imageSrc) {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Image Viewer</title>
            <style>
                body {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin: 0;
                    height: 100vh;
                    background-color: #f0f0f0;
                }
                img {
                    max-width: 90%;
                    max-height: 80%;
                }
                a {
                    margin-top: 20px;
                    font-size: 18px;
                    color: #007BFF;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <img src="${imageSrc}" alt="Full-size image">
            <a href="javascript:window.close()">Revenir en arrière</a>
        </body>
        </html>
    `);
}

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dblclick', () => openImageInNewPage(img.src));
});


