import React, { Component } from 'react';
import { Card, CardActionArea, CardMedia, ImageListItem } from '@mui/material';
import { extractKey } from "../api/BackendAPI";

export default class GalleryPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base64: "",
        }
    }

    componentDidMount = () => {
        if (this.props.item) {
            this.extract(this.props.item.key);
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.item !== this.props.item) {
            if (this.props.item) {
                this.extract(this.props.item.key);
            }
        }
    }

    extract = async (key) => {
        let resExtract = await extractKey(key);
        if (resExtract) {
            if (resExtract.status === "Success") {
                this.setState({
                    base64: resExtract.base64
                })
            }
        }
    }

    focusedView = (src, date) => {
        const newTab = window.open();
        newTab?.document.write(`<!DOCTYPE html><head><title>${date}</title></head><body><img src="${src}" width="100%" height="auto" ></body></html>`);
        newTab?.document.close();
    }

    render() {
        const { item } = this.props;
        const { base64 } = this.state;

        const date = item.date;
        const src = `data:image/*;base64,${base64}`;

        return (
            <>
                {base64 !== "" ?
                    <ImageListItem>
                        <Card
                            sx={{ height: "100%", width: "100%", maxWidth: "400px", display: "inline-block" }}
                            elevation={5}
                            onClick={() => this.focusedView(src, date)}
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
                    </ImageListItem>
                    : null
                }
            </>
        )
    }
}