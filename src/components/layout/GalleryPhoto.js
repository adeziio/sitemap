import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, ImageListItem, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { extractKey, deleteKey } from "../api/BackendAPI";

export default class GalleryPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base64: "",
            dialog: false
        }
    }

    toggleDialog = () => {
        this.setState((prevState) => ({
            dialog: !prevState.dialog
        }))
    }

    componentDidMount = () => {
        if (this.props.item) {
            this.extract(this.props.item.key);
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.item !== this.props.item) {
            if (this.props.item) {
                this.extract(this.props.item.key);
            }
        }
    }

    extract = async (key) => {
        let resExtract = await extractKey(key);
        if (resExtract) {
            if (resExtract.status === "Success") {
                this.setState({
                    base64: resExtract.base64
                })
            }
        }
    }

    delete = async (key) => {
        let resDelete = await deleteKey(key);
        if (resDelete) {
            if (resDelete.status === "Success") {
                this.props.getGallery();
            }
        }
        this.toggleDialog();
    }

    focusedView = (src, date) => {
        const newTab = window.open();
        newTab?.document.write(`<!DOCTYPE html><head><title>${date}</title></head><body><img src="${src}" width="100%" height="auto" ></body></html>`);
        newTab?.document.close();
    }

    render() {
        const { item, isAdmin } = this.props;
        const { base64, dialog } = this.state;

        const key = item.key;
        const date = item.date;
        const src = `data:image/*;base64,${base64}`;

        return (
            <>
                {base64 !== "" ?
                    <>
                        <Dialog onClose={this.toggleDialog} open={dialog}>
                            <DialogTitle>Delete this photo?
                                <DialogContent sx={{ display: "block", p: 0, m: 0 }}>
                                    <Button sx={{ m: 1, backgroundColor: "#005b96" }} variant="contained" onClick={() => this.delete(key)} autoFocus>
                                        Yes
                                    </Button>
                                    <Button sx={{ m: 1, backgroundColor: "#005b96" }} variant="contained" onClick={this.toggleDialog} autoFocus>
                                        No
                                    </Button>
                                </DialogContent>
                            </DialogTitle>
                            <DialogContent>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    image={src}
                                    alt={"img"}
                                    onClick={() => this.focusedView(src, date)}
                                />
                            </DialogContent>
                        </Dialog>
                        <ImageListItem>
                            <Card
                                sx={{ height: "100%", width: "100%", maxWidth: "400px", display: "inline-block" }}
                                elevation={5}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        width="100%"
                                        image={src}
                                        alt={"img"}
                                        onClick={() => this.focusedView(src, date)}
                                    />
                                    {isAdmin ?
                                        <>
                                            <DeleteForever onClick={() => this.toggleDialog(key)} />
                                        </> : null
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
}