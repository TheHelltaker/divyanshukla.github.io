const themeSwitcher = document.getElementById('theme-switcher');
const body = document.body;

// Function to apply the theme
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
};

// Function to toggle the theme
const toggleTheme = () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
};

// Event listener for the theme switcher button
themeSwitcher.addEventListener('click', toggleTheme);

// On page load, apply the saved theme or the default theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Default to dark theme
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    }
});