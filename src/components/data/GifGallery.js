const importAll = (r) => {
    return r.keys().map(r);
}

const GifGallery = importAll(require.context('./../gif', false, /\.(gif)$/))
export default GifGallery;