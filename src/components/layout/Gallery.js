import React, { Component } from 'react';
import { Alert, ImageList } from '@mui/material';
import GalleryPhoto from "./GalleryPhoto";
import { getGallery } from "./../api/BackendAPI";

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
        let resGallery = await getGallery();
        if (resGallery) {
            this.setState({
                gallery: resGallery.gallery
            }, () => {
                this.props.setSize(resGallery.size)
            })
        }
        else {
            this.setState({
                resMsg: "Failed"
            })
        }
    }

    render() {
        const { isAdmin } = this.props;
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
                                <GalleryPhoto key={item.key} item={item} isAdmin={isAdmin} getGallery={this.getGallery} />
                            )
                        })}
                    </ImageList>
                    : resMsg === "Failed" ?
                        <Alert sx={{ marginTop: 1 }} severity="error">{`Failed to load gallery`}</Alert>
                        : null
                }
            </>
        )
    }
}