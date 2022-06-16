import axios from 'axios';


axios
    .post('http://localhost:1337/auth/local/register', {
        username: 'Kapman',
        email: 'test@test.com',
        password: 'Password',
    })
    .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
    })
    .catch(error => {
        console.log('An error occurred:', error.response);
    });