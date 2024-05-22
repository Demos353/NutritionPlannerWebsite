        // Get all radio inputs with class "rad"
        const radioInputs = document.querySelectorAll('.rad');

        // Add click event listeners to each radio input
        radioInputs.forEach(input => {
            input.addEventListener('click', function () {
                // Unselect other radio inputs with the same "name"
                radioInputs.forEach(otherInput => {
                    if (otherInput !== input) {
                        otherInput.checked = false;
                        otherInput.parentElement.style.backgroundColor = '';
                        otherInput.parentElement.style.color = '';
                    }
                });

                // Check if the input is checked
                if (input.checked) {
                    // Change the background color of the parent label
                    input.parentElement.style.backgroundColor = 'green';
                    // Optional: Change the text color to make it more visible
                    input.parentElement.style.color = 'white';
                } else {
                    // Revert to the default styles if the input is not checked
                    input.parentElement.style.backgroundColor = '';
                    input.parentElement.style.color = '';
                }
            });
        });
                // Get all radio inputs with class "rad"
        const radiosInputs = document.querySelectorAll('.radi');

        // Add click event listeners to each radio input
        radiosInputs.forEach(input => {
            input.addEventListener('click', function () {
                // Unselect other radio inputs with the same "name"
                radiosInputs.forEach(otherInput => {
                    if (otherInput !== input) {
                        otherInput.checked = false;
                        otherInput.parentElement.style.backgroundColor = '';
                        otherInput.parentElement.style.color = '';
                    }
                });

                // Check if the input is checked
                if (input.checked) {
                    // Change the background color of the parent label
                    input.parentElement.style.backgroundColor = 'green';
                    // Optional: Change the text color to make it more visible
                    input.parentElement.style.color = 'white';
                } else {
                    // Revert to the default styles if the input is not checked
                    input.parentElement.style.backgroundColor = '';
                    input.parentElement.style.color = '';
                }
            });
        });
// Get references to the link and the hidden paragraph by their IDs
const toggleLink = document.getElementById('toggle-section');
const hiddenParagraph = document.getElementById('hidden-paragraph');

// Add a click event listener to the link
toggleLink.addEventListener('click', function() {
    // Toggle the visibility of the hidden paragraph
    if (hiddenParagraph.style.display === 'none') {
        hiddenParagraph.style.display = 'block'; // Show the paragraph
    } else {
        hiddenParagraph.style.display = 'none'; // Hide the paragraph
    }
});

        // Get references to the radio inputs and div elements
        const generalGoalRadio = document.querySelector('.rad[value="General Goal"]');
        const exactGoalRadio = document.querySelector('.rad[value="Exact Goal"]');
        const generalGoalDiv = document.querySelector('.generalGoal');
        const exactGoalDiv = document.querySelector('.exactGoal');

        // Add event listeners to the radio inputs
        generalGoalRadio.addEventListener('change', function () {
            if (generalGoalRadio.checked) {
                generalGoalDiv.style.display = 'flex';
                exactGoalDiv.style.display = 'none';
            }
        });

        exactGoalRadio.addEventListener('change', function () {
            if (exactGoalRadio.checked) {
                exactGoalDiv.style.display = 'block';
                generalGoalDiv.style.display = 'none';
            }
        });

        // Initialize the initial state based on the default checked radio button
        if (generalGoalRadio.checked) {
            generalGoalDiv.style.display = 'flex';
            exactGoalDiv.style.display = 'none';
        } else if (exactGoalRadio.checked) {
            exactGoalDiv.style.display = 'block';
            generalGoalDiv.style.display = 'none';
        } else {
            generalGoalDiv.style.display = 'none';
            exactGoalDiv.style.display = 'none';
        }


// In goal.html
document.addEventListener('DOMContentLoaded', function () {
    const continueButton = document.querySelector('.rounded-button');

    continueButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the selected goal
        const selectedGoal = document.querySelector('input[name="goal"]:checked');
        const goal = selectedGoal ? selectedGoal.value : '';

        // Redirect to profile.html with the selected goal as a query parameter
        window.location.href = `profile.html?goal=${encodeURIComponent(goal)}`;
    });
});



