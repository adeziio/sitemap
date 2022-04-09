
export const listGallery = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/listGallery`, {
        "method": "GET",
        "headers": {

        }
    })
    return await res.json()
}

export const upload = async (file) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/upload`, {
        "method": "POST",
        "headers": {

        },
        "body": new URLSearchParams({
            file: file
        })
    })
    return await res.json()
}

