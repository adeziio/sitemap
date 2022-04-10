import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, CircularProgress } from '@mui/material';
import { gallery, extract } from "./../api/BackendAPI";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }

    componentDidMount = () => {
        this.getGallery();
    }

    getGallery = async () => {
        let newGallery = [];
        let resGallery = await gallery();
        if (resGallery) {
            for (let i = 0; i < resGallery.gallery.length; i++) {
                let resExtract = await extract(resGallery.gallery[i]);
                newGallery.push(resExtract.src);
            }
        }

        this.setState({
            gallery: newGallery,
            mounted: true
        })
    }

    render() {
        const { gallery } = this.state;

        const card = (item, index) => {
            // let itemArr = item.split(".");
            // let isVideo = itemArr[itemArr.length - 1] === "mp4" ? true : false;
            return (
                <Card key={`z-${item}-${index}`} sx={{ height: "100%", width: "100%", maxWidth: "400px", display: "inline-block" }} elevation={5} >
                    {false ?
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
            )
        }

        return (
            <>
                {gallery.length !== 0 ? gallery.map((item, index) => {
                    return (
                        card(item, index)
                    )
                }) :
                    <CircularProgress />
                }
            </>
        )
    }
}