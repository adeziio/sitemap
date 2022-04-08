const importAll = (r) => {
    return r.keys().map(r);
}

const GifGallery = importAll(require.context('./../gif', false, /\.(gif)$/))
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export default GifGallery;