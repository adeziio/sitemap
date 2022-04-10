
export const gallery = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/gallery`, {
        "method": "GET",
    })
    return await res.json()
}

export const upload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/upload`, {
        "method": "POST",
        "body": formData
    })
    return await res.json()
}

export const extract = async (key) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/extract?key=${key}`, {
        "method": "GET"
    })
    return await res.json()
}
