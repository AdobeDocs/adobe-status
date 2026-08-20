const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer <token>");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-user-token", "<user_token>");
const API_KEY = '<key>';

const rawJsonBody = '<json_payload>';
const url = `https://status.adobe.io/api/v1/subscriptions?api_key=${API_KEY}`;

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: rawJsonBody,
    redirect: 'follow'
};

fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));