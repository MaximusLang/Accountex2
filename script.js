//verifies if the user has signed up or not
function check() {
    if (localStorage.getItem("password") === null) {
      alert("Please sign up first.");
      window.location.href = "index.html";
    } else {
      window.location.href = "PM.html";
    }
  }

  function deleteAccount() {
    // Clear local storage and redirect to index.html
    localStorage.clear();
    alert("Account deleted successfully.");
    window.location.href = 'index.html';
}

function resetPassword() {
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (newPassword === confirmPassword) {
        localStorage.setItem('password', newPassword);
        alert('Password reset successfully! You can now log in with your new password.');
        window.location.href = 'PM.html';
    } else {
        alert('Passwords do not match. Please try again.');
    }
}
