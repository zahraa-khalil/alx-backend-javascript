function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('Success! API responded.');
    } else {
      reject('Error: API failed.');
    }
  });
}