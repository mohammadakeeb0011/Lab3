const json = localStorage.getItem('form');
const student = JSON.parse(json);

document.getElementById('nameopfield').innerHTML = `${student.name}`
document.getElementById('rollopfield').innerHTML = `${student.roll}`
document.getElementById('ageopfield').innerHTML = `${student.age}`
document.getElementById('genderopfield').innerHTML = `${student.gender}`
document.getElementById('classopfield').innerHTML = `${student.sem}`
document.getElementById('intrestopfield').innerHTML = `${student.intrest}`