function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var now = new Date();

    var diff = now - dob;

    var hours = Math.floor(diff / (1000 * 60 * 60));
    var years = Math.floor(hours / (24 * 365));
    var months = Math.floor(hours / (24 * 30));
    var days = Math.floor(hours / 24);

    document.getElementById('result').innerHTML = `
        <p>Horas de vida: ${hours}</p>
        <p>Años: ${years}</p>
        <p>Meses vividos: ${months}</p>
        <p>Días vividos: ${days}</p>
    `;
}