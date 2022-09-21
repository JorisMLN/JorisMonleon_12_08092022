export const isLogingForToken = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    })
  };

  try {
    const response = await fetch('url', requestOptions);
    const jsonRes = await response.json();
    console.log(response.status);

    if (response.status === 404) {
      console.log('not found');
    }

    if (response.status === 200) {
      console.log(jsonRes);
    }

  } catch {
    console.error();
    return [];
  }
}
isLogingForToken();
