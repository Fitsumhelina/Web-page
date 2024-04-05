// document.querySelector('.form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting normally

//     // Get form values
//     var name = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;

//     // Create JavaScript object
//     var userData = {
//         name: name,
//         phone: phone,
//         email: email
//     };

//     // Save data to localStorage
//     localStorage.setItem('userData', JSON.stringify(userData));

//     // Redirect to another page
//     window.location.href = 'members.html';
// });

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    // Create JavaScript object
    var userData = {
        name: name,
        phone: phone,
        email: email
    };

    // Save data to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to the members page
    window.location.href = 'members.html';
});

