import React, { useState } from 'react';
import { Button, FormControl, Alert, Card, CardMedia, CircularProgress, Dialog, DialogContent } from '@mui/material';
import { FileUploader } from "react-drag-drop-files";
import { uploadFile } from "../../api/BackendAPI";

const Upload = (props) => {
    const [file, setFile] = useState(undefined);
    const [previewSrc, setPreviewSrc] = useState("");
    const [isLoading, setIsloading] = useState(false);
    const [dialog, setDialog] = useState(false);
    const [resMsg, setResMsg] = useState("");
    const fileTypes = ["jpeg", "jpg", "png", "gif"];

    const handleFileSelect = (fileUpload) => {
        if (fileUpload) {
            let reader = new FileReader();
            reader.readAsDataURL(fileUpload);
            reader.onloadend = (e) => {
                setFile(fileUpload);
                setPreviewSrc(reader.result);
                setResMsg("");
            }
        }
        else {
            setFile(file);
            setPreviewSrc("");
            setResMsg("");
        }
    };

    const handleSubmit = async () => {
        if (file) {
            toggleDialog();
            setIsloading(true);
            const result = await uploadFile(file);
            if (result) {
                setResMsg(result.status);
            }
            else {
                setResMsg("Failed");
            }
            setIsloading(false);
            toggleDialog();
        }
        else {
            setResMsg("No file selected");
        }
    };

    const toggleDialog = () => {
        setDialog(prevDialog => !prevDialog);
    };

    const handleDialogClick = e => {
        e.stopPropagation();
    };

    const focusedView = (src) => {
        const newTab = window.open();
        newTab?.document.write(`<!DOCTYPE html><head><title></title></head><body><img src="${src}" width="100%" height="auto" ></body></html>`);
        newTab?.document.close();
    };

    return (
        <>
            <FormControl variant="standard" sx={{ width: "22rem", marginTop: "2rem" }}>
                <FileUploader handleChange={handleFileSelect} name="input" types={fileTypes} />
                <Button
                    variant="contained"
                    component="label"
                    sx={{ marginTop: 1 }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
                {isLoading ?
                    <Dialog onClose={toggleDialog} open={dialog} onClick={handleDialogClick} disableBackdropClick>
                        <DialogContent>
                            <CircularProgress sx={{ display: "block", left: 0, right: 0, margin: "auto" }} />
                            Uploading...
                        </DialogContent>
                    </Dialog>
                    :
                    <>
                        {resMsg === "Success" ? <Alert sx={{ marginTop: 1 }} severity="success">{resMsg}</Alert> : null}
                        {resMsg === "No file selected" ? <Alert sx={{ marginTop: 1 }} severity="warning">{resMsg}</Alert> : null}
                        {resMsg === "Failed" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to upload`}</Alert> : null}
                    </>
                }
            </FormControl>
            {previewSrc ?
                <Card
                    sx={{ height: "100%", width: "100%", maxWidth: "20rem", display: "block", m: 2 }}
                    elevation={5}
                >
                    <CardMedia
                        component="img"
                        width="100%"
                        image={previewSrc}
                        alt={"img"}
                        onClick={() => focusedView(previewSrc)}
                    />
                </Card> : null
            }
        </>
    )
}

export default Upload;