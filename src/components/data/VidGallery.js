const importAll = (r) => {
    return r.keys().map(r);
}

const VidGallery = importAll(require.context('./../vid', false, /\.(mp4)$/))
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export default VidGallery;