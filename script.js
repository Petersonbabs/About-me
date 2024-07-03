// script.js
document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    currentTimeUTC.style.color = '#fff'
    currentDay.style.color = '#fff'

    const updateTimeAndDay = () => {
        const now = new Date();
        currentTimeUTC.textContent = `${now.toUTCString().split(' ')[4]}`;
        currentDay.textContent = `${now.toLocaleDateString('en-US', { weekday: 'long' })}`;
    };

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
});
