//Loop through DB
function createGallery() {
    let galleryHtml = '';

    //Get DB
    gallery_db.forEach(element => {
        galleryHtml = `${galleryHtml}<a href="photos/${element.filename}" data-caption="${element.description}" class="item"><img src="photos/thumbnails/${element.filename}" alt="${element.alt}"></a>\n`;
    });

    //insert cells
    let main = document.querySelector('.gallery');
    main.innerHTML = galleryHtml;

    baguetteBox.run('.gallery', { overlayBackgroundColor: 'rgb(0, 0, 0, 1)' });
    const search = new Filter('search', 'data-caption');
}