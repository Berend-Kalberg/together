export default async function getUser() {

  let arr = [];

  const url = `https://together-app.eu.auth0.com/api/v2/users?q=${user.email}`;

  const response = await fetch(url, {
    headers: {
      Authentication: token
    }
  });
  const responseJson = await response.json();

  console.log(response, responseJson);

  if (responseJson.results) {
    console.log(responseJson.results);
    arr.push(responseJson.results);

    return arr
  }
};

