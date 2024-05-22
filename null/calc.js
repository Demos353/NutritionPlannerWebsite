document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes('result.html')) {
        // This code runs on the second page (result.html)

        const targets = document.getElementById('targets');

        // Retrieve the calculated values from localStorage
        const calories = localStorage.getItem('calories');
        const protein = localStorage.getItem('protein');
        const carbs = localStorage.getItem('carbs');
        const fats = localStorage.getItem('fats');

        // Display the results on the second page
        targets.innerHTML = `
            <p> ${Math.round(calories)} Calories per day</p>
            <p>At least ${Math.round(protein)} Proteins</p>
            <p>At most ${Math.round(carbs)} Carbs</p>
            <p>At least ${Math.round(fats)} Fats</p>
        `;
    } else {
        // This code runs on the first page (index.html)

        const profileForm = document.getElementById('profile-form');
        const continueButton = document.querySelector('button[type="submit"]'); // Changed button selection

        continueButton.addEventListener('click', (e) => {
            e.preventDefault();

            // Get user input
            const gender = profileForm.querySelector('input[name="gender"]:checked').value; // Updated input selection
            const age = parseInt(profileForm.age.value);
            const weight = parseFloat(profileForm.weight.value);
            const height = parseFloat(profileForm.height.value);
            const activityLevel = parseFloat(profileForm.activity.value);
            const goal = profileForm.querySelector('input[name="goal"]:checked').value; // Updated input selection
            const bodyFat = profileForm.querySelector('input[name="bodyFat"]:checked').value; // Updated input selection

            // Perform calorie and macronutrient calculations based on goal and body fat
            const calories = calculateCalories(gender, age, weight, height, activityLevel, goal, bodyFat);
            const protein = calculateProtein(weight, goal);
            const carbs = calculateCarbs(calories, goal);
            const fats = calculateFats(calories, goal);

            // Store the calculated values in localStorage
            localStorage.setItem('calories', calories);
            localStorage.setItem('protein', protein);
            localStorage.setItem('carbs', carbs);
            localStorage.setItem('fats', fats);

            // Redirect to the second page
            window.location.href = 'result.html';
        });
        // Rest of your JavaScript code
    }
});


    function calculateCalories(gender, age, weight, height, activityLevel, goal, bodyFat) {
    let bmr;
    
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const tdee = bmr * activityLevel;

    let calories;

    if (goal === 'Lose Fat') {
        calories = tdee - 500; // Create a calorie deficit for fat loss
    } else if (goal === 'Build Muscle') {
        calories = tdee + 500; // Create a calorie surplus for muscle gain
    } else {
        calories = tdee; // Maintain current weight
    }

    // Adjust calories based on body fat preference
    if (bodyFat === 'Low') {
        calories -= 200; // Slightly lower calories for lower body fat
    } else if (bodyFat === 'High') {
        calories += 200; // Slightly higher calories for higher body fat

}
    return calories;

}

function calculateProtein(weight, goal) {
    let protein;
    
    if (goal === 'Build Muscle') {
        protein = weight * 2.5; // Higher protein intake for muscle gain
    } else {
        protein = weight * 1.0; // Standard protein intake
    }

    return protein;
}

function calculateCarbs(calories, goal) {
    let carbs;
    
    if (goal === 'Build Muscle') {
        carbs = (calories * 0.5) / 4; // More carbs for muscle gain
    } else {
        carbs = (calories * 0.45) / 4; // Balanced carbs for other goals
    }

    return carbs;
}

function calculateFats(calories, goal) {
    let fats;

    if (goal === 'Lose Fat') {
        fats = (calories * 0.25) / 9; // Lower fats for fat loss
    } else {
        fats = (calories * 0.3) / 9; // Standard fats for other goals
    }

    return fats;
} 

