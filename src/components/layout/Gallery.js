import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, CircularProgress, ImageList, ImageListItem } from '@mui/material';
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
                if (resExtract) {
                    if (resExtract.status === "Success") {
                        newGallery.push(resExtract.src);
                    }
                }
            }
        }

        this.setState({
            gallery: newGallery,
            mounted: true
        })
    }

    render() {
        const { gallery } = this.state;

        const card = (src, index) => {
            return (
                <Card
                    key={`z-${index}`}
                    sx={{ height: "100%", width: "100%", maxWidth: "400px", display: "inline-block" }}
                    elevation={5}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            width="100%"
                            image={src}
                            alt={"img"}
                        />
                    </CardActionArea>
                </Card>
            )
        }

        return (
            <>
                {gallery.length !== 0 ?
                    <ImageList
                        variant="masonry"
                        sx={{
                            columnCount: {
                                xs: '1 !important',
                                sm: '2 !important',
                                md: '3 !important',
                                lg: '4 !important',
                                xl: '5 !important',
                            },
                        }}
                    >
                        {gallery.map((item, index) => {
                            return (
                                <ImageListItem key={item.img}>
                                    {card(item, index)}
                                </ImageListItem>
                            )
                        })}
                    </ImageList>
                    :
                    <CircularProgress />
                }
            </>
        )
    }
}