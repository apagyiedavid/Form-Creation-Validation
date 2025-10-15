// Define the async function to fetch and show user data
async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const dataContainer = document.getElementById('api-data');

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading / preliminary message
    dataContainer.innerHTML = '';

    // Create a list to display users
    const userList = document.createElement('ul');

    users.forEach(function(user) {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);

  } catch (error) {
    // On error, show a failure message
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', error);
  }
}

// Run fetchUserData when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchUserData();
});
