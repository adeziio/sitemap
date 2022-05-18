import React, { useEffect, useState } from 'react';
import notFound from './../../logo/not-found.jpg';
import { extractKey } from "../../api/BackendAPI";

const FocusedView = () => {
    const [base64, setBase64] = useState("");
    const [resMsg, setResMsg] = useState("");
    const src = resMsg !== "Failed" ? `data:image/*;base64,${base64}` : notFound;

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const key = urlParams.get('key');
        extract(key);
    });

    const extract = async (key) => {
        let resExtract = await extractKey(key);
        if (resExtract) {
            if (resExtract.status === "Success") {
                setBase64(resExtract.base64);
            }
            else {
                setResMsg("Failed");
            }
        }
        else {
            setResMsg("Failed");
        }
    };

    return (
        <>
            <img src={`${src}`} alt="" width="100%" height="auto" />
        </>
    )
}

export default FocusedView;