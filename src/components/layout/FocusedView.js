import React, { Component } from 'react';
import { CardMedia, DialogContent, DialogContentText, Dialog, DialogTitle, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';

export default class FocusedView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    toggleFocusedView = () => {
        this.props.toggleFocusedView();
    }


    render() {
        const { currentGallery, isFocusedView, activeStep } = this.props;

        return (
            <>
                <Dialog
                    className="dialog"
                    open={isFocusedView}
                    onClose={this.toggleFocusedView}
                >
                    <DialogTitle sx={{ m: 0, p: 1 }} className="dark-bg" >
                        {isFocusedView ? (
                            <IconButton
                                aria-label="close"
                                onClick={this.toggleFocusedView}
                                sx={{
                                    color: "white",
                                }}
                            >
                                <CloseOutlined />
                            </IconButton>
                        ) : null}
                    </DialogTitle>
                    <DialogContent className="dark-bg">
                        <DialogContentText >
                            <SwipeableViews
                                className='photo-modal-box'
                                axis={'x'}
                                index={Number(activeStep)}
                                enableMouseEvents
                            >
                                {currentGallery.length !== 0 ? currentGallery.map((item, index) => {
                                    let itemArr = item.split(".");
                                    let isVideo = itemArr[itemArr.length - 1] === "mp4" ? true : false;
                                    return (isVideo ?
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
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </>
        )
    }
}