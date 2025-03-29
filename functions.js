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

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".timeline-container");
    let isDragging = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let momentumID;

    container.addEventListener("mousedown", (e) => {
        isDragging = true;
        container.classList.add("active");
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        velocity = 0;

        // Disable text selection while dragging
        document.body.style.userSelect = "none";

        // Stop momentum scrolling if active
        cancelAnimationFrame(momentumID);
    });

    container.addEventListener("mouseup", () => {
        isDragging = false;
        container.classList.remove("active");

        // Re-enable text selection after dragging
        document.body.style.userSelect = "auto";

        // Apply momentum scrolling
        momentumScroll();
    });

    container.addEventListener("mouseleave", () => {
        isDragging = false;
        container.classList.remove("active");

        // Apply momentum scrolling if the mouse leaves
        momentumScroll();
    });

    container.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 0.2; // Adjust speed multiplier
        container.scrollLeft = scrollLeft - walk;

        // Store velocity for momentum effect
        velocity = walk;
    });

    // Smooth momentum scrolling
    function momentumScroll() {
        if (Math.abs(velocity) < 0.5) return; // Stop when speed is very low
        container.scrollLeft -= velocity;
        velocity *= 0.95; 
        momentumID = requestAnimationFrame(momentumScroll);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const toolItems = document.querySelectorAll(".tool-item");

    toolItems.forEach(item => {
        const title = item.querySelector("h3");
        if (!title) return; // Skip if no h3 found

        const originalText = title.innerText;
        const chars = ",.<>?/</>!@#$%^&*()_+-=[]{}|;:'";

        item.addEventListener("mouseenter", () => {
            let iterations = 0;
            const scrambleInterval = setInterval(() => {
                title.innerText = title.innerText
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index]; // Keep the correct letter after scrambling
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");

                if (iterations >= originalText.length) {
                    clearInterval(scrambleInterval);
                }

                iterations += 1 / 2; // Controls the speed of unscrambling
            }, 20);
        });

        item.addEventListener("mouseleave", () => {
            title.innerText = originalText; // Restore original text when not hovering
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".tool-item, .tech-item"); // Select both tool and tech items

    items.forEach(item => {
        const title = item.querySelector("h3");
        if (!title) return; // Skip if no h3 found

        const originalText = title.innerText;
        const chars = "0123456789!@#$%^&*()_+-=[]{}|;:'\",.<>?/";

        item.addEventListener("mouseenter", () => {
            let iterations = 0;
            const scrambleInterval = setInterval(() => {
                title.innerText = title.innerText
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) {
                            return originalText[index]; // Keep the correct letter after scrambling
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");

                if (iterations >= originalText.length) {
                    clearInterval(scrambleInterval);
                }

                iterations += 1 / 2; // Controls the speed of unscrambling
            }, 30);
        });

        item.addEventListener("mouseleave", () => {
            title.innerText = originalText; // Restore original text when not hovering
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const webDevText = document.querySelector(".changing-font");
    const fonts = ["Arial", "Courier New", "Georgia", "Impact", "Times New Roman", "Verdana"];

    // Set a fixed space so the div doesn’t move
    webDevText.style.display = "inline-block";
    webDevText.style.width = "150px"; // Adjust based on font sizes


    webDevText.addEventListener("mouseenter", () => {
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        webDevText.style.fontFamily = randomFont;
    });
});

















