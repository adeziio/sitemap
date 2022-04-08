import React, { Component } from 'react';
import { Zoom, Card, CardActionArea, CardMedia, Modal, Box } from '@mui/material';
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
        let growCounter = 0;

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

        const photoModalStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: "60%",
            height: "70%",
            bgcolor: 'black',
            boxShadow: 24,
            p: 4,
        };

        const card = (item, index) => {
            const isVideo = item.split(".").at(-1) === "mp4";
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

        const handleStepChange = (step) => {
            this.setActiveStep(step);
        };

        return (
            <>
                <Modal
                    open={photoModal}
                    onClose={this.togglePhotoModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={photoModalStyle}>
                        <SwipeableViews
                            className='photo-modal-box'
                            axis={'x'}
                            index={Number(activeStep)}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {currentGallery.length !== 0 ? currentGallery.map((item, index) => {
                                console.log(item, typeof item)
                                // let isVideo = typeof item === 'string' ? item.split(".").at(-1) === "mp4" : false;
                                return (
                                    true ?
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
                    </Box>
                </Modal>
                {currentGallery.length !== 0 ? currentGallery.map((row, rowIndex) => {
                    return (
                        <Zoom key={`z-${row}-${rowIndex}`} in={true} style={{ transitionDelay: `${growCounter += 100}ms` }}>
                            <div style={{ width: "100%", maxWidth: "300px", display: "inline-block" }}>
                                {card(row, rowIndex)}
                            </div>
                        </Zoom>
                    )
                }) : null}
            </>
        )
    }
}