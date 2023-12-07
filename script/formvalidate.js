
    function validateForm() {
        const password = document.getElementById("password").value;
        const repeatPassword = document.getElementById("repeatpassword").value;

        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return false;
        }

        return true;
    }
