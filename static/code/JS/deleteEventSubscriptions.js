const myHeaders = new Headers();
myHeaders.append("Authorization", "<token>");
myHeaders.append("x-user-token", "<user_token>");
const API_KEY = '<key>';

const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
};

const url = `https://status.adobe.io/api/v1/event-subscriptions?api_key=${API_KEY}&eventId=<string>&productId=<string>`;

fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));