document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = document.getElementById('age').value;
    let ageGroup = '';

    if (age < 0) {
        ageGroup = 'Invalid age. Please enter a valid age.';
    } else if (age <= 12) {
        ageGroup = 'Child';
    } else if (age <= 17) {
        ageGroup = 'Teenager';
    } else if (age <= 64) {
        ageGroup = 'Adult';
    } else if (age >= 65) {
        ageGroup = 'Senior';
    } else {
        ageGroup = 'Please enter a valid age.';
    }

    document.getElementById('result').innerText = `You belong to the ${ageGroup} age group.`;
});
