// JavaScript to toggle radio button color to green and ensure exclusivity
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', function () {
        const labels = document.querySelectorAll('label.custom-radio');
        
        // Loop through all labels and reset their styles
        labels.forEach(label => {
            label.classList.remove('checked');
            label.style.backgroundColor = "#fff"; // Reset to default color
        });

        // Set the style for the selected radio button
        if (this.checked) {
            const label = this.previousElementSibling;
            label.classList.add('checked');
            label.style.backgroundColor = "green"; // Change the color to green
        }
    });
});
