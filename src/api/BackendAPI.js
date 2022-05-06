export const getGallery = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/gallery`, {
        "method": "GET",
        "headers": {
            'stargallery-api-key': process.env.REACT_APP_STARGALLERY_API_KEY
        }
    }).catch(err => {
        return false;
    })
    if (res) {
        return await res.json();
    }
}

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/upload`, {
        "method": "POST",
        "headers": {
            'stargallery-api-key': process.env.REACT_APP_STARGALLERY_API_KEY
        },
        "body": formData
    }).catch(err => {
        return false;
    })
    if (res) {
        return await res.json();
    }
}

export const extractKey = async (key) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/extract?key=${key}`, {
        "method": "GET",
        "headers": {
            'stargallery-api-key': process.env.REACT_APP_STARGALLERY_API_KEY
        }
    }).catch(err => {
        return false;
    })
    if (res) {
        return await res.json();
    }
}

export const deleteKey = async (key) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/delete?key=${key}`, {
        "method": "GET",
        "headers": {
            'stargallery-api-key': process.env.REACT_APP_STARGALLERY_API_KEY
        }
    }).catch(err => {
        return false;
    })
    if (res) {
        return await res.json();
    }
}