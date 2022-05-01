import React, { Component } from 'react';
import { Card, Alert, CardActionArea, CardMedia, ImageListItem, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { extractKey, deleteKey } from "../api/BackendAPI";

export default class GalleryPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base64: "",
            dialog: false,
            isHover: false,
            resMsg: ""
        }
    }

    setResMsg = (resMsg) => {
        this.setState({
            resMsg: resMsg
        })
    }

    toggleDialog = () => {
        this.setState((prevState) => ({
            dialog: !prevState.dialog,
            resMsg: ""
        }))
    }

    toggleIsHover = (param) => {
        this.setState({
            isHover: param
        })
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
                this.toggleDialog();
                this.props.getGallery();
            }
            else {
                this.setResMsg("Failed");
            }
        }
        else {
            this.setResMsg("Failed");
        }
    }

    focusedView = (key) => {
        window.open(`/photo?key=${key}`, '_blank', 'noopener,noreferrer');
    }

    render() {
        const { item, isAdmin } = this.props;
        const { base64, dialog, isHover, resMsg } = this.state;
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
                                    {resMsg === "Failed" ? <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to delete`}</Alert> : null}
                                </DialogContent>
                            </DialogTitle>
                            <DialogContent>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    image={src}
                                    alt={"img"}
                                    onClick={() => this.focusedView(key)}
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
                                        onClick={() => this.focusedView(key)}
                                        onMouseOver={() => this.toggleIsHover(true)}
                                        onMouseOut={() => this.toggleIsHover(false)}
                                    />

                                    {isHover && !isAdmin ?
                                        <div>
                                            {date}
                                        </div>
                                        : null
                                    }

                                    {isAdmin ?
                                        <>
                                            <div>
                                                {date}
                                            </div>
                                            <DeleteForever onClick={() => this.toggleDialog(key)} />
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
}