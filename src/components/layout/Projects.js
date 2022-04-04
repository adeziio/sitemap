import React, { Component } from 'react';
import { Grow, Box, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import waddle from "./../img/waddle.png";

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { showProjects } = this.props;

        const icon = (
            <Card sx={{ m: 1 }} elevation={4} onClick={() => window.open("https://waddlez.vercel.app/", "_blank")}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        // height="140"
                        width="100%"
                        image={waddle}
                        alt="waddle"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" fontFamily="cursive">
                            Waddle
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );

        return (
            <>
                {showProjects ?
                    <>
                        <Box sx={{ margin: "2rem", display: "inline-block" }}>
                            <Box sx={{ display: 'flex', maxWidth: "900px" }}>
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 500 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 1000 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 1500 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                            </Box>

                            <Box sx={{ display: 'flex', maxWidth: "900px" }} >
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 2000 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 2500 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 3000 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                            </Box>

                            <Box sx={{ display: 'flex', maxWidth: "900px" }} >
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 3500 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 4000 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                                <Grow
                                    in={showProjects}
                                    style={{ transformOrigin: '0 0 0' }}
                                    {...(showProjects ? { timeout: 4500 } : {})}
                                >
                                    <div style={{ width: "33%" }}>
                                        {icon}
                                    </div>
                                </Grow>
                            </Box>
                        </Box>
                    </>
                    : null
                }
            </>
        )
    }
}