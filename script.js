document.addEventListener('DOMContentLoaded', () => {
    const timerElement = document.getElementById('assignment-timer');
    
    // Set the deadline from your image
    const deadline = new Date('January 9, 2026 18:00:00').getTime();
    const now = new Date().getTime();
    
    const diff = deadline - now;

    if (diff <= 0) {
        timerElement.textContent = "Assignment Due Today!";
        timerElement.style.color = "red";
    } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        timerElement.textContent = `Submission due in: ${days} days`;
    }
});