const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-user-token", "<user_token>");
const API_KEY = '<key>';
myHeaders.append("x-api-key", API_KEY);

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
};

const url = `https://status.adobe.io/api/v1/event-subscriptions?eventId=<string>&productId=<string>`;

fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));