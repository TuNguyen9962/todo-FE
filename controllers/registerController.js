
function Register() {
  this.usernameInput = document.getElementById('username');
  this.passwordInput = document.getElementById('password');
  this.repeatPasswordInput = document.getElementById('repeatPassword');

  this.registerButton = document.getElementById('register');
  this.registerButton.addEventListener('click', this.register.bind(this));
  this.checkLogin()
}

Register.prototype.checkLogin = function () {
  const storedUser = sessionStorage.getItem('loggedInUser');
  // const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    if (storedUser.userId !== null) {
      window.location.href = '../todoList/index.html';
    }
  }
};

Register.prototype.register = function () { 
  // debugger
  function generateUID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
  const username = this.usernameInput.value
  const password = this.passwordInput.value
  const repeatPassword = this.repeatPasswordInput.value

  if (password !== repeatPassword) {
    alert('Passwords do not match')
    
  } else {
    const newUser = {
      username,
      password,
      userId: generateUID()
    }
    var dataAccountList = []
    const accountData = localStorage.getItem('accountData');
    if (accountData) {
      dataAccountList = JSON.parse(accountData);
    } else {
      dataAccountList = [];
    }
    dataAccountList.push(newUser);
    localStorage.setItem('accountData', JSON.stringify(dataAccountList));

    alert('Registration successful! You can now log in.')
    console.log('Registration successful')
  
    this.usernameInput.value = '';
    this.passwordInput.value = '';
    this.repeatPasswordInput.value = '';

    window.location.href = '../todoList/index.html';
  }
}

const app = new Register();