import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, DialogContent, DialogContentText, Dialog, DialogTitle, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import ImgGallery from "../data/ImgGallery";
import GifGallery from "../data/GifGallery";
import VidGallery from "../data/VidGallery";
import SwipeableViews from 'react-swipeable-views';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoModal: false,
            activeStep: 0
        }
    }

    setActiveStep = (step) => {
        this.setState({
            activeStep: step
        })
    }

    togglePhotoModal = (item, index) => {
        this.setState((prevState) => ({
            photoModal: !prevState.photoModal,
            activeStep: index
        }))
    }

    render() {
        const { currentFilter } = this.props;
        const { photoModal, activeStep } = this.state;

        let currentGallery = [];

        if (currentFilter === "All") {
            currentGallery = ImgGallery.concat(GifGallery).concat(VidGallery);
        }
        else if (currentFilter === "Image") {
            currentGallery = ImgGallery;
        }
        else if (currentFilter === "Video") {
            currentGallery = VidGallery;
        }
        else if (currentFilter === "Gif") {
            currentGallery = GifGallery;
        }

        const card = (item, index) => {
            let itemArr = item.split(".");
            let isVideo = itemArr[itemArr.length - 1] === "mp4" ? true : false;
            return (
                <>
                    <Card sx={{ m: 1, height: "100%", transition: "transform 200ms ease-in-out" }} elevation={5} onClick={() => { this.togglePhotoModal(item, index) }}>
                        {isVideo ?
                            <CardActionArea>
                                <CardMedia
                                    component="video"
                                    width="100%"
                                    controls
                                    image={item}
                                />
                            </CardActionArea> :
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    width="100%"
                                    image={item}
                                    alt={"img"}
                                />
                            </CardActionArea>
                        }
                    </Card>
                </>
            )
        }

        return (
            <>
                <Dialog
                    sx={{ width: "100vw" }}
                    open={photoModal}
                    onClose={this.togglePhotoModal}
                >
                    <DialogTitle sx={{ m: 0, p: 1 }} className="dark-bg" >
                        {photoModal ? (
                            <IconButton
                                aria-label="close"
                                onClick={this.togglePhotoModal}
                                sx={{
                                    color: "white",
                                }}
                            >
                                <CloseOutlined />
                            </IconButton>
                        ) : null}
                    </DialogTitle>
                    <DialogContent className="dark-bg">
                        <DialogContentText >
                            <SwipeableViews
                                className='photo-modal-box'
                                axis={'x'}
                                index={Number(activeStep)}
                                enableMouseEvents
                            >
                                {currentGallery.length !== 0 ? currentGallery.map((item, index) => {
                                    let itemArr = item.split(".");
                                    let isVideo = itemArr[itemArr.length - 1] === "mp4" ? true : false;
                                    return (isVideo ?
                                        <CardMedia
                                            key={`c-${item}-${index}`}
                                            className="photo-modal-content "
                                            component="video"
                                            width="100%"
                                            controls
                                            image={item}
                                        /> : <img key={`c-${item}-${index}`} className="photo-modal-content " src={item} alt="img" />
                                    )
                                }) : null}
                            </SwipeableViews>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
                {currentGallery.length !== 0 ? currentGallery.map((row, rowIndex) => {
                    return (
                        <div key={`z-${row}-${rowIndex}`} style={{ width: "100%", maxWidth: "400px", display: "inline-block" }}>
                            {card(row, rowIndex)}
                        </div>

                    )
                }) : null}
            </>
        )
    }
}