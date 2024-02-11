function submitReservation() {
    // You can add validation and AJAX submission here
    // For simplicity, let's just log the form data to the console
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        guests: document.getElementById('guests').value,
        specialRequests: document.getElementById('specialRequests').value,
    };

    console.log('Reservation Form Data:', formData);

    // You can add code to send this data to the server or perform other actions
}