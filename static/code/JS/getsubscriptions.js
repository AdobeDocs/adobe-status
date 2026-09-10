const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
myHeaders.append("x-user-token", "<user_token>");
const API_KEY = '<key>';
myHeaders.append("x-api-key", API_KEY);

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch(`https://status.adobe.io/api/v1/subscriptions`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));