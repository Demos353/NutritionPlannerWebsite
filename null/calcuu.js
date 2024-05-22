
        var currentStep = 1;

        function showStep(stepNumber) {
            // Hide all steps
            for (var i = 1; i <= 6; i++) {
                document.getElementById('step' + i).style.display = 'none';
            }

            // Show the specified step
            document.getElementById('step' + stepNumber).style.display = 'block';
        }

        // Event listeners for "Next" buttons
        for (var i = 1; i <= 5; i++) {
            document.getElementById('nextStep' + i).addEventListener('click', function () {
                currentStep++;
                showStep(currentStep);
            });
        }

        // Event listener for "Calculate" button
        document.getElementById('calculateButton').addEventListener('click', function () {
                // Retrieve user input
                var age = parseFloat(document.getElementById('age').value);
                var gender = document.getElementById('gender').value;
                var weight = parseFloat(document.getElementById('weight').value);
                var height = parseFloat(document.getElementById('height').value);
                var activityLevel = document.getElementById('activityLevel').value;
                var goal = document.getElementById('goal').value;



                // Calculate BMR based on gender
                var bmr;
                if (gender === 'male') {
                    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
                } else if (gender === 'female') {
                    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
                }

                // Calculate daily calorie needs based on activity level
                var calorieNeeds;
                if (activityLevel === 'sedentary') {
                    calorieNeeds = bmr * 1.2; // Sedentary
                } else if (activityLevel === 'lightlyActive') {
                    calorieNeeds = bmr * 1.375; // Lightly Active
                } else if (activityLevel === 'moderatelyActive') {
                    calorieNeeds = bmr * 1.55; // Moderately Active
                } else if (activityLevel === 'veryActive') {
                    calorieNeeds = bmr * 1.725; // Very Active
                } else if (activityLevel === 'superActive') {
                    calorieNeeds = bmr * 1.9; // Super Active
                }

                // Adjust calorie needs based on the goal
                if (goal === 'lose') {
                    calorieNeeds -= 500; // Create a calorie deficit for weight loss
                } else if (goal === 'gain') {
                    calorieNeeds += 500; // Create a calorie surplus for weight gain
                }

                // Display the result to the user
                var resultElement = document.getElementById('result');
                if (!isNaN(calorieNeeds)) {
                    resultElement.innerHTML = "Your calculated calorie intake is: " + calorieNeeds.toFixed(2) + " calories per day";
                } else {
                    resultElement.innerHTML = "Unable to calculate calorie intake. Please check your inputs.";
                }
            });

        // Show the initial step
        showStep(currentStep);