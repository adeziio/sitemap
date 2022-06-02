import React, { useState } from 'react';
import { Button, FormControl, Alert, TextField, Card, CardMedia } from '@mui/material';
import { extractKey } from "../../api/BackendAPI";

const Extract = () => {
    const [key, setKey] = useState("");
    const [base64, setBase64] = useState("");
    const [date, setDate] = useState("");
    const [resMsg, setResMsg] = useState("");
    const src = `data:image/*;base64,${base64}`;

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.extract();
        }
    };

    const extract = async () => {
        if (key) {
            let resExtract = await extractKey(key);
            if (resExtract) {
                if (resExtract.status === "Success") {
                    setResMsg(resExtract.status);
                    setBase64(resExtract.base64);
                    setDate(resExtract.date);
                }
                else {
                    setResMsg("Failed");
                    setBase64("");
                    setDate("");
                }
            }
            else {
                setResMsg("Failed");
                setBase64("");
                setDate("");
            }
        }
    };

    const focusedView = (src, date) => {
        const newTab = window.open();
        newTab?.document.write(`<!DOCTYPE html><head><title>${date}</title></head><body><img src="${src}" width="100%" height="auto" ></body></html>`);
        newTab?.document.close();
    };

    return (
        <>
            <FormControl variant="standard" sx={{ width: "20rem", marginTop: "2rem" }}>
                <TextField sx={{ marginTop: 1 }} label="Key" variant="outlined" onChange={(e) => setKey(e.target.value)} onKeyDown={_handleKeyDown} />
                <Button sx={{ marginTop: 1 }} type="button" color="primary" variant="contained" onClick={extract} >
                    Extract
                </Button>
                {resMsg === "Success" ? <Alert sx={{ marginTop: 1 }} severity="success">{resMsg}</Alert> : null}
                {resMsg === "Failed" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to extract`}</Alert> : null}
            </FormControl>
            {base64 ?
                <Card
                    sx={{ height: "100%", width: "100%", maxWidth: "20rem", display: "block", m: 2 }}
                    elevation={5}
                >
                    <CardMedia
                        component="img"
                        width="100%"
                        image={src}
                        alt={"img"}
                        onClick={() => focusedView(src, date)}
                    />
                </Card> : null
            }
        </>
    )
}

export default Extract;