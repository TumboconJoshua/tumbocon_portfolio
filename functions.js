document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the button
    document.getElementById("contactButton").addEventListener("click", function() {
        console.log("Button clicked"); // Debugging: Check if the click event is fired
        window.location.href = "mailto:tumboconjoshua26@gmail.com";
    });
});

// Update local time dynamically
function updateTime() {
    const timeElement = document.getElementById("localTime");
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateTime, 1000);
updateTime();


document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.project-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    // For auto sliding (infinite loop)
    let isSliding = false;
    let slideInterval;

    // Start auto sliding on page load
    const startAutoSlide = () => {
        slideInterval = setInterval(() => {
            if (!isSliding) {
                isSliding = true;
                slider.scrollBy({
                    left: slider.offsetWidth,
                    behavior: 'smooth'
                });
                setTimeout(() => isSliding = false, 300);
            }
        }, 3000); // Change slides every 3 seconds
    };

    // Start auto slide on page load
    startAutoSlide();

    // Mouse drag functionality
    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        clearInterval(slideInterval); // Stop the auto slide when dragging
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        startAutoSlide(); // Restart auto sliding when mouse leaves
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        startAutoSlide(); // Restart auto sliding after mouse release
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // Scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });

    // Add click event to pause/resume animation
    slider.addEventListener('click', () => {
        if (slider.style.animationPlayState === 'paused') {
            slider.style.animationPlayState = 'running'; // Resume the animation
        } else {
            slider.style.animationPlayState = 'paused'; // Pause the animation
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the download button
    const downloadButton = document.getElementById("downloadButton");

    // Add an event listener to the button
    downloadButton.addEventListener("click", function() {
        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = 'files/Tumbocon Joshua.pdf'; // Path to your resume
        link.download = 'Tumbocon Joshua.pdf'; // Optional: Specify the file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up by removing the link element
    });
});







