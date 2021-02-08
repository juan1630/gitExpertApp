export const getsGifs = async(category) => {

    const url =   `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=eEPDA03j1IvzhS3hAAbeGHhOeE48k0vN`;
    const resp = await fetch(url);
    const { data } = await resp.json();

// es el return de la promesa
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}
