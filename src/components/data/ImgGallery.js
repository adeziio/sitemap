const importAll = (r) => {
    return r.keys().map(r);
}

const ImgGallery = importAll(require.context('./../img', false, /\.(png|jpe?g|svg)$/))

export default ImgGallery;