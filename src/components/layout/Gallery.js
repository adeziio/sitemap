import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, } from '@mui/material';
import ImgGallery from "../data/ImgGallery";
import GifGallery from "../data/GifGallery";
import VidGallery from "../data/VidGallery";
import FocusedView from './FocusedView';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocusedView: false,
            activeStep: 0
        }
    }

    setActiveStep = (step) => {
        this.setState({
            activeStep: step
        })
    }

    toggleFocusedView = (index) => {
        this.setState((prevState) => ({
            isFocusedView: !prevState.isFocusedView,
            activeStep: index ? index : prevState.activeStep
        }))
    }

    render() {
        const { currentFilter } = this.props;
        const { isFocusedView, activeStep } = this.state;

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
                    <a href={item} >
                        <Card key={`z-${item}-${index}`} sx={{ height: "100%", width: "100%", maxWidth: "400px", display: "inline-block" }} elevation={5} onClick={() => { this.toggleFocusedView(index) }}>
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
                    </a>
                </>
            )
        }

        return (
            <>
                {/* <FocusedView
                    currentGallery={currentGallery}
                    isFocusedView={isFocusedView}
                    toggleFocusedView={this.toggleFocusedView}
                    activeStep={activeStep}
                /> */}
                {currentGallery.length !== 0 ? currentGallery.map((row, rowIndex) => {
                    return (

                        card(row, rowIndex)


                    )
                }) :
                    null
                }
            </>
        )
    }
}