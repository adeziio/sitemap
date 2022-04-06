import React, { Component } from 'react';
import { Grow, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import GalleryStorage from "../data/GalleryStorage";

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { currentFilter } = this.props;

        console.log(currentFilter)

        let growCounter = 500;

        const icon = (item) => (
            <Card sx={{ m: 1, height: "100%", transition: "transform 200ms ease-in-out" }} className="project-card" elevation={5} onClick={() => { }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width="100%"
                        image={item.image}
                        alt={"img"}
                    />
                    <CardContent fontSize="1rem">
                    </CardContent>
                </CardActionArea>
            </Card>
        )

        return (
            <>
                {GalleryStorage.map((row, rowIndex) => {
                    return (

                        <>
                            <Grow
                                key={`${row}-${rowIndex}`}
                                in={true}
                                style={{ transformOrigin: '0 0 0' }}
                                {...(true ? { timeout: (growCounter += 500) } : {})}
                            >
                                <div style={{ width: "100%", maxWidth: "300px", display: "inline-block" }}>
                                    {icon(row)}
                                </div>
                            </Grow>
                        </>

                    )
                })
                }
            </>
        )
    }
}