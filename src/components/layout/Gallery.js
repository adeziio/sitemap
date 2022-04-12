import React, { Component } from 'react';
import { Alert, CircularProgress, ImageList } from '@mui/material';
import { getGallery } from "./../api/BackendAPI";
import GalleryPhoto from "./GalleryPhoto";

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
        let resGallery = await getGallery();
        if (resGallery) {
            newGallery = resGallery.gallery;
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

    focusedView = (base64, date) => {
        const newTab = window.open();
        newTab?.document.write(`<!DOCTYPE html><head><title>${date}</title></head><body><img src="${base64}" width="100%" height="auto" ></body></html>`);
        newTab?.document.close();
    }

    render() {
        const { gallery, resMsg } = this.state;

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
                        {gallery.map((item) => {
                            return (
                                <GalleryPhoto key={item.key} item={item} />
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