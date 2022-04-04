import React, { Component } from 'react';
import { Grow, Box, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import ProjectsItem from "./../data/ProjectsItem";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { showProjects } = this.props;
        let growCounter = 500;

        const icon = (item) => (
            <Card sx={{ m: 1, height: "100%" }} elevation={10} onClick={() => window.open(item.url, "_blank")}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width="100%"
                        image={item.image}
                        alt={item.name}
                    />
                    <CardContent >
                        <Typography component="div" fontFamily="cursive" fontSize="2rem" >
                            <div style={{ backgroundColor: "white", color: "#1976d2" }}>{item.name}</div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )

        return (
            <>
                {showProjects ?
                    <>
                        <Box sx={{ margin: "2rem", display: "inline-block" }}>
                            {ProjectsItem.map((row, rowIndex) => {
                                return (
                                    <Box key={`${row}-${rowIndex}`} sx={{ display: 'flex', maxWidth: "900px", m: 2 }}>
                                        {
                                            row.map((col, columnIndex) => {
                                                return (
                                                    <>
                                                        <Grow
                                                            key={`${col}-${columnIndex}`}
                                                            in={showProjects}
                                                            style={{ transformOrigin: '0 0 0' }}
                                                            {...(showProjects ? { timeout: (growCounter += 500) } : {})}
                                                        >
                                                            <div style={{ width: "33%" }}>
                                                                {icon(col)}
                                                            </div>
                                                        </Grow>
                                                    </>
                                                )
                                            })
                                        }
                                    </Box>
                                )
                            })
                            }
                        </Box>
                    </>
                    : null
                }
            </>
        )
    }
}