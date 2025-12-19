/**
 * Provost Cup - Faculty Navigation Logic
 */

function enterFaculty(faculty) {
    console.log(`Initializing ${faculty} Sector...`);
    
    // Create a smooth transition effect before redirecting
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        // This will redirect to the specific faculty page (e.g., medicine.html or nursing.html)
        window.location.href = `${faculty}.html`;
    }, 500);
}

// Log System Status
window.addEventListener('DOMContentLoaded', () => {
    console.log("Provost League Nodes: Synchronized");
    console.log("Aesthetic: Medical Purple");
});