async function photo() {
    try {
        const photoId = 'red-cinema-chair-evlkOfkQ5rE';
        const apiKey = 'wdsHA_bS64SMzhIWhO6NF0WOXrXj98RrIZDSazby9ds';
        const response = await axios.get(`https://api.unsplash.com/photos/${photoId}?client_id=${apiKey}`);
        console.log(response.data);

        const rawImageUrl = response.data.urls.regular;
        document.body.style.backgroundImage = `url('${rawImageUrl}')`;
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';


    } catch (error) {
        console.error(error);
    }
}
photo(); 
