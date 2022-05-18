export const fetchGallery = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/gallery`, {
            "method": "GET",
            "headers": {
                'stargallery-api-key': process.env.REACT_APP_STARGALLERY_API_KEY
            }
        })
        if (res.status === 200) {
            return await res.json();
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
}

export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/upload`, {
            "method": "POST",
            "headers": {
                'stargallery-api-key': process.env.REACT_APP_STARGALLERY_API_KEY
            },
            "body": formData
        })
        if (res.status === 200) {
            return await res.json();
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
}

export const extractKey = async (key) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/extract?key=${key}`, {
            "method": "GET",
            "headers": {
                'stargallery-api-key': process.env.REACT_APP_STARGALLERY_API_KEY
            }
        })
        if (res.status === 200) {
            return await res.json();
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
}

export const deleteKey = async (key) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/delete?key=${key}`, {
            "method": "GET",
            "headers": {
                'stargallery-api-key': process.env.REACT_APP_STARGALLERY_API_KEY
            }
        })
        if (res.status === 200) {
            return await res.json();
        }
        else {
            return false;
        }
    }
    catch (error) {
        return false;
    }
}