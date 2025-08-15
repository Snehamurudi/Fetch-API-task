const API_URL = 'https://jsonplaceholder.typicode.com/users';
const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading...</p>";
  
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const users = await response.json();
    displayUsers(users);
    
  } catch (error) {
    userContainer.innerHTML = `<p class="error">Error: ${error.message}</p>`;
  }
}

function displayUsers(users) {
  userContainer.innerHTML = "";
  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
    `;
    userContainer.appendChild(card);
  });
}

// Reload button event
reloadBtn.addEventListener('click', fetchUsers);

// Initial fetch
fetchUsers();
