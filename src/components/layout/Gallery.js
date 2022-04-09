import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, } from '@mui/material';
import ImgGallery from "../data/ImgGallery";
import GifGallery from "../data/GifGallery";
import VidGallery from "../data/VidGallery";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { currentFilter } = this.props;

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
                    <Card sx={{ height: "100%", width: "100%", maxWidth: "400px", display: "inline-block" }} elevation={5} onClick={() => { this.toggleFocusedView(index) }}>
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
                {currentGallery.length !== 0 ? currentGallery.map((row, rowIndex) => {
                    return (
                        <a key={`z-${row}-${rowIndex}`} href={row}>
                            {card(row, rowIndex)}
                        </a>
                    )
                }) :
                    null
                }
            </>
        )
    }
}