const nav = document.querySelector('nav');
if(getCurrentUser()) {
  nav.innerHTML = `<ul>
      <li><a href="Products.html">Products</a></li>
      <li><a href="profile.html">Profile</a></li>
      <li><a id="logout">Logout</a></li>
    </ul>
  `;
} else {
  nav.innerHTML = `
    <ul>
      <li><a href="Register.html">Sign Up</a></li>
      <li><a href="profile.html">Profile</a></li>
      <li><a id="logout">Logout</a></li>
    </ul>
  `
}
export async function fetchData(url = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${url}`, {
    method: methodType,
    mode: 'cors',
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data) 
  });
  if(response.ok) {
    return await response.json(); 
  } else {
    throw await response.json();
  }
}

export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeCurrentUser() {
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentUser();
  window.location.href = "Login.html";
}
