function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const success = true;
        if (success) {
          const data = 'Hello, Promise!';
          resolve(data);
        } else {
          reject('Oops! Something went wrong.');
        }
      }, 1000);
    });
  }
  
  // Using the Promise
  fetchData()
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  