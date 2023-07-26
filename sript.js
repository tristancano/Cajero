
const usuarios = [
  { usuario: 'usuario1', contraseña: 'contraseña1', saldo: 200 },
  { usuario: 'usuario2', contraseña: 'contraseña2', saldo: 290 },
  { usuario: 'usuario3', contraseña: 'contraseña3', saldo: 67 }
];


const loginForm = document.getElementById('loginForm');
const transactions = document.getElementById('transactions');
const welcomeUser = document.getElementById('welcomeUser');
const saldo = document.getElementById('saldo');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const consignarBtn = document.getElementById('consignarBtn');
const retirarBtn = document.getElementById('retirarBtn');
const montoInput = document.getElementById('monto');
const logoutBtn = document.getElementById('logoutBtn');


let usuarioLogueado = null;

function iniciarSesion() {
  const usuario = usernameInput.value;
  const contraseña = passwordInput.value;
  usuarioLogueado = usuarios.find(user => user.usuario === usuario && user.contraseña === contraseña);

  if (usuarioLogueado) {
    loginForm.style.display = 'none';
    saldos.style.display = 'block';
    transactions.style.display = 'block';
    welcomeUser.textContent = usuarioLogueado.usuario;
    saldo.textContent = usuarioLogueado.saldo;
    montoInput.value = '';
  } else {
    alert('Credenciales inválidas. Intenta nuevamente');
  }
}

function consultaSaldo () {
  if (usuarioLogueado) {
   
    transactions.style.display = 'block';
    alert("Tu saldo es " + usuarioLogueado.saldo +" COP")

}
}


function consignar() {
  const monto = Number(montoInput.value);
  if (monto > 0 && (monto+usuarioLogueado)< 990) {
    usuarioLogueado.saldo += monto;
    saldo.textContent = usuarioLogueado.saldo;
    alert(`Consignación exitosa. Nuevo saldo: $${usuarioLogueado.saldo}`);
    
  } else {
    alert('El monto debe ser mayor a cero y no puedes exceder un saldo total de 990');
  }
}

function retirar() {
  const monto = Number(montoInput.value);
  if (monto > 10 && monto <= usuarioLogueado.saldo) {
    usuarioLogueado.saldo -= monto;
    saldo.textContent = usuarioLogueado.saldo;
    alert(`Retiro exitoso. Nuevo saldo: $${usuarioLogueado.saldo}`);
  } else {
    alert('Monto inválido o saldo insuficiente.');
  }
}


function cerrarSesion() {
  usuarioLogueado = null;
  loginForm.style.display = 'block';
  transactions.style.display = 'none';
  usernameInput.value = '';
  passwordInput.value = '';
}


loginBtn.addEventListener('click', iniciarSesion);
saldoBtn.addEventListener('click', consultaSaldo);
consignarBtn.addEventListener('click', consignar);
retirarBtn.addEventListener('click', retirar);
logoutBtn.addEventListener('click', cerrarSesion);
