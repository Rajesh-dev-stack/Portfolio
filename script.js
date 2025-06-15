document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Contact Form Submission (Conceptual - requires backend for actual email sending)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a backend server
            // using fetch() or XMLHttpRequest.
            // For a simple client-side example, we'll just simulate a success/failure.

            const viewerName = document.getElementById('viewerName').value;
            const viewerEmail = document.getElementById('viewerEmail').value;
            const viewerPhone = document.getElementById('viewerPhone').value;
            const viewerMessage = document.getElementById('viewerMessage').value;

            // Basic validation
            if (!viewerName || !viewerMessage) {
                formMessage.textContent = 'Please fill in your name and message.';
                formMessage.className = 'form-message error';
                return;
            }

            // Simulate sending data
            formMessage.textContent = 'Sending your message...';
            formMessage.className = 'form-message'; // Reset color

            setTimeout(() => {
                // Simulate success or failure
                const success = Math.random() > 0.2; // 80% chance of success

                if (success) {
                    formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                    formMessage.className = 'form-message success';
                    contactForm.reset(); // Clear the form
                } else {
                    formMessage.textContent = 'Failed to send message. Please try again later or contact me directly via email.';
                    formMessage.className = 'form-message error';
                }
            }, 2000); // Simulate network delay
        });
    }
});