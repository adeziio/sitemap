const importAll = (r) => {
    return r.keys().map(r);
}

const VidGallery = importAll(require.context('./../vid', false, /\.(mp4)$/))

export default VidGallery;