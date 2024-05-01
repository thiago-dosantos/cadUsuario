const emailInput = document.getElementById('email');
        const validMessage = document.getElementById('validMessage');
        const invalidMessage = document.getElementById('invalidMessage');

        emailInput.addEventListener('input', function() {
            const email = emailInput.value.trim();
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (isValid) {
                validMessage.style.display = 'block';
                invalidMessage.style.display = 'none';
            } else {
                validMessage.style.display = 'none';
                invalidMessage.style.display = 'block';
            }
        });