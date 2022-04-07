import React, { Component } from 'react';
import { Zoom, Card, CardActionArea, CardMedia } from '@mui/material';
import ImgGallery from "../data/ImgGallery";
import GifGallery from "../data/GifGallery";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { currentFilter } = this.props;

        let growCounter = 0;

        const icon = (item) => (
            <Card sx={{ m: 1, height: "100%", transition: "transform 200ms ease-in-out" }} className="project-card" elevation={5} onClick={() => { }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width="100%"
                        image={item}
                        alt={"img"}
                    />
                </CardActionArea>
            </Card>
        )

        return (
            <>
                {currentFilter === "All" || currentFilter === "Image" ?
                    ImgGallery.map((row, rowIndex) => {
                        return (
                            <>
                                <Zoom in={true} style={{ transitionDelay: `${growCounter += 100}ms` }}>
                                    <div style={{ width: "100%", maxWidth: "300px", display: "inline-block" }}>
                                        {icon(row)}
                                    </div>
                                </Zoom>
                            </>

                        )
                    })
                    : null
                }

                {currentFilter === "All" || currentFilter === "Gif" ?
                    GifGallery.map((row, rowIndex) => {
                        return (
                            <>
                                <Zoom in={true} style={{ transitionDelay: `${growCounter += 100}ms` }}>
                                    <div style={{ width: "100%", maxWidth: "300px", display: "inline-block" }}>
                                        {icon(row)}
                                    </div>
                                </Zoom>
                            </>

                        )
                    })
                    : null
                }
            </>
        )
    }
}