const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
myHeaders.append("x-user-token", "<user_token>");
const API_KEY = '<key>';

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch(`https://status.adobe.io/api/v1/event-subscriptions?api_key=${API_KEY}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));