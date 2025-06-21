// Toggle dropdown menu
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dots')) {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

// Handle dropdown options
function handleOption(option) {
    if (option === 'Children') {
        document.getElementById('children').scrollIntoView({ behavior: 'smooth' });
    } else if (option === 'Donations') {
        document.getElementById('donations').scrollIntoView({ behavior: 'smooth' });
    } else if (option === 'Adoption') {
        document.getElementById('adoption').scrollIntoView({ behavior: 'smooth' });
    }
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === 'test@example.com' && password === 'password123') {
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // Redirect after login
    } else {
      alert('Invalid email or password');
    }
  });
 // Handle signup form submission
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Example logic to simulate account creation
    alert(`Account created for ${name}!`);
    window.location.href = 'login.html'; // Redirect to login after signup
});
