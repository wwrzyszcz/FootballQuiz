axios.get('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
    .then(response => {

    })
    .catch(error => {
        console.log('Error fetching and parsing data', error);
    });