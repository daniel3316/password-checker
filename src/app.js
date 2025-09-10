const passwordStrengthChecker = (password) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /[0-9]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [lengthCriteria, numberCriteria, lowercaseCriteria, uppercaseCriteria, specialCharacterCriteria].filter(Boolean).length;

    if (criteriaMet === 5) {
        return 'Strong';
    } else if (criteriaMet >= 3) {
        return 'Moderate';
    } else {
        return 'Weak';
    }
};

const checkCommonPatterns = (password) => {
    const commonPatterns = ['123456', 'password', '123456789', '12345678', '12345', '1234567', 'qwerty', 'abc123', 'football', 'monkey'];
    return commonPatterns.includes(password);
};

const validatePassword = () => {
    const passwordInput = document.getElementById('password-input').value;
    const feedbackElement = document.getElementById('feedback');

    if (checkCommonPatterns(passwordInput)) {
        feedbackElement.textContent = 'Password is too common. Please choose a different one.';
        feedbackElement.style.color = 'red';
    } else {
        const strength = passwordStrengthChecker(passwordInput);
        feedbackElement.textContent = `Password strength: ${strength}`;
        feedbackElement.style.color = strength === 'Strong' ? 'green' : strength === 'Moderate' ? 'orange' : 'red';
    }
};
document.getElementById('check-password-btn').addEventListener('click', validatePassword);
// ...existing code...
// (Removed duplicate function declarations)

// Button click feedback (already present)
document.getElementById('check-password-btn').addEventListener('click', validatePassword);

// Real-time feedback (add this)
document.getElementById('password-input').addEventListener('input', validatePassword);

// Toggle password visibility (add this)
document.getElementById('toggle-password').addEventListener('click', function() {
    const input = document.getElementById('password-input');
    if (input.type === 'password') {
        input.type = 'text';
        this.textContent = 'Hide';
    } else {
        input.type = 'password';
        this.textContent = 'Show';
    }
});