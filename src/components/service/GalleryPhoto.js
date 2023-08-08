import React, { useState, useEffect } from 'react';
import { Card, Alert, CardActionArea, CardMedia, ImageListItem, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { extractKey, deleteKey } from "../../api/BackendAPI";

const GalleryPhoto = (props) => {
    const [base64, setBase64] = useState("");
    const [dialog, setDialog] = useState(false);
    const [resMsg, setResMsg] = useState("");
    const { item, isAdmin } = props;
    const key = item.key;
    const date = item.date;
    const src = `data:image/*;base64,${base64}`;

    useEffect(() => {
        extractByKey(item.key);
    }, [item.key]);

    const toggleDialog = () => {
        setDialog(prevDialog => !prevDialog);
        setResMsg("");
    };

    const extractByKey = async (key) => {
        let resExtract = await extractKey(key);
        if (resExtract) {
            if (resExtract.status === "Success") {
                setBase64(resExtract.base64);
            }
        }
    };

    const deleteByKey = async (key) => {
        let resDelete = await deleteKey(key);
        if (resDelete) {
            if (resDelete.status === "Success") {
                toggleDialog();
                props.getGallery();
            }
            else {
                setResMsg("Failed");
            }
        }
        else {
            setResMsg("Failed");
        }
    };

    const focusedView = (key) => {
        window.open(`/photo?key=${key}`, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            {base64 !== "" ?
                <>
                    <Dialog onClose={toggleDialog} open={dialog}>
                        <DialogTitle>Delete this photo?
                            <DialogContent sx={{ display: "block", p: 0, m: 0 }}>
                                <Button sx={{ m: 1, backgroundColor: "#005b96" }} variant="contained" onClick={() => deleteByKey(key)} autoFocus>
                                    Yes
                                </Button>
                                <Button sx={{ m: 1, backgroundColor: "#005b96" }} variant="contained" onClick={toggleDialog} autoFocus>
                                    No
                                </Button>
                                {resMsg === "Failed" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to delete`}</Alert> : null}
                            </DialogContent>
                        </DialogTitle>
                        <DialogContent>
                            <CardMedia
                                component="img"
                                width="100%"
                                image={src}
                                alt=""
                            // onClick={() => focusedView(key)}
                            />
                        </DialogContent>
                    </Dialog>
                    <ImageListItem>
                        <Card
                            sx={{ height: "auto", width: "100%", maxWidth: "400px", display: "inline-block" }}
                            elevation={5}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    image={src}
                                    alt=""
                                // onClick={() => focusedView(key)}
                                />

                                {isAdmin ?
                                    <>
                                        <div>
                                            {date}
                                        </div>
                                        {/* <DeleteForever onClick={() => toggleDialog(key)} /> */}
                                    </>
                                    : null
                                }
                            </CardActionArea>
                        </Card>
                    </ImageListItem>
                </>
                : null
            }
        </>
    )
}

export default GalleryPhoto;