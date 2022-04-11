import React, { Component } from 'react';
import { Alert, Card, CardActionArea, CardMedia, CircularProgress, ImageList, ImageListItem } from '@mui/material';
import { gallery, extract } from "./../api/BackendAPI";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: [],
            resMsg: ""
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
            this.setState({
                gallery: newGallery
            })
        }
        else {
            this.setState({
                resMsg: "Failed"
            })
        }
    }

    focusedView = (src) => {
        const newTab = window.open();
        newTab?.document.write(`<!DOCTYPE html><head><title></title></head><body><img src="${src}" width="100%" height="auto" ></body></html>`);
        newTab?.document.close();
    }

    render() {
        const { gallery, resMsg } = this.state;

        const card = (src) => {
            return (
                <Card
                    sx={{ height: "100%", width: "100%", maxWidth: "400px", display: "inline-block" }}
                    elevation={5}
                    onClick={() => this.focusedView(src)}
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
                                <ImageListItem key={`z-${index}`}>
                                    {card(item)}
                                </ImageListItem>
                            )
                        })}
                    </ImageList>
                    : resMsg === "Failed" ?
                        <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to load gallery`}</Alert>
                        : <CircularProgress />
                }
            </>
        )
    }
}