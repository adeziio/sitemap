import React, { useState } from 'react';
import { Button, FormControl, Alert, TextField } from '@mui/material';
import { deleteKey } from "../../api/BackendAPI";

const Delete = () => {
    const [key, setKey] = useState("");
    const [resMsg, setResMsg] = useState("");

    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            deleteByKey();
        }
    };

    const deleteByKey = async () => {
        if (key) {
            let resDelete = await deleteKey(key);
            if (resDelete) {
                setResMsg(resDelete.status);
            }
            else {
                setResMsg("Failed");
            }
        }
    };

    return (
        <>
            <FormControl variant="standard" sx={{ width: "20rem", marginTop: "2rem" }}>
                <TextField sx={{ marginTop: 1 }} label="Key" variant="outlined" onChange={(e) => setKey(e.target.value)} onKeyDown={_handleKeyDown} />
                <Button sx={{ marginTop: 1 }} type="button" color="primary" variant="contained" onClick={deleteByKey} >
                    Delete
                </Button>
                {resMsg === "Success" ? <Alert sx={{ marginTop: 1 }} severity="success">{resMsg}</Alert> : null}
                {resMsg === "Failed" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to delete`}</Alert> : null}
            </FormControl>
        </>
    )
}

export default Delete;