const importAll = (r) => {
    return r.keys().map(r);
}

const ImgGallery = importAll(require.context('./../img', false, /\.(png|jpe?g|svg)$/))
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export default ImgGallery;