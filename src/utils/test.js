import axios from 'axios';

axios.all([
    axios.get('https://api.github.com/users/codeheaven-io'),
        axios.get('https://api.github.com/users/codeheaven-io/repos')
    ])
    .then(function () {
        console.log(arguments)
    });