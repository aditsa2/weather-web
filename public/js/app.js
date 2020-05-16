console.log('Client side javascript file is loaded!');
const messageOne = document.querySelector('#message-1');

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.innerHTML = 'Loading...';
    const value = document.querySelector('input').value;
    fetch('http://localhost:3000/weather?address=' + value)
        .then(bolb => bolb.json())
        .then(data => {
            if (data.error)
                messageOne.innerHTML = data.error;
            else
                messageOne.innerHTML = `location: ${data.location} <br /> forecast: ${data.forecast}`;
        });

})