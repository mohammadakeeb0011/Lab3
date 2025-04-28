const form = document.querySelector('form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const fd = new FormData(form);
    const student = Object.fromEntries(fd);

    // document.getElementById('nameopfield').innerHTML = `${student.name}`;

    const json = JSON.stringify(student);
    localStorage.setItem('form', json)

    window.location.href = "confirm.html";
});


