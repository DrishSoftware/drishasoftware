emailjs.init('d-E5X-MzVwxvgNoM4');

function handleSubmit() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let solution = document.getElementById('solution').value;
    let message = document.getElementById('message').value;

    // emailjs keys
    let serviceId = 'service_475juwy';
    let templateId = 'template_v24txqb';

    // template params
    var templateParams = {
        from_name: name,
        from_phone: phone,
        from_email: email,
        solution: solution,
        message: message,
        to_name: "Dhananjaya"
    };

    emailjs.send(serviceId, templateId, templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
    
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
            document.getElementById('solution').value = '';
            document.getElementById('message').value = '';
        });
}
