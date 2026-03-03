function resetPassword() {
  const email = document.getElementById('email').value;
  const newPassword = document.getElementById('newPassword').value;
  const confirmNewPassword = document.getElementById('confirmNewPassword').value;
  
  if (!email || !newPassword || !confirmNewPassword) {
    alert("Please fill in all fields.");
  } else if (newPassword !== confirmNewPassword) {
    alert("Passwords do not match.");
  } else {
    alert("Password reset successfully!");
    // ✅ Redirect to login page after reset
    window.location.href = "index.html";
  }
} 