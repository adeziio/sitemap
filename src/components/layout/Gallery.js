import React, { Component } from 'react';
import { Alert, ImageList } from '@mui/material';
import GalleryPhoto from "./GalleryPhoto";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    getGallery = () => {
        this.props.getGallery();
    }

    render() {
        const { isAdmin, gallery, resMsg } = this.props;

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