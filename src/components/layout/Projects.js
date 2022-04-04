import React, { Component } from 'react';
import { Paper, Grow, Box } from '@mui/material';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { showProjects } = this.props;

        const icon = (
            <Paper sx={{ m: 1 }} elevation={4}>
                <Box component="svg" sx={{ width: 100, height: 100 }}>
                    <Box
                        component="polygon"
                        sx={{
                            fill: (theme) => theme.palette.common.white,
                            stroke: (theme) => theme.palette.divider,
                            strokeWidth: 1,
                        }}
                        points="0,100 50,00, 100,100"
                    />
                </Box>
            </Paper>
        );



        return (
            <>
                {showProjects ?
                    <>
                        <Box sx={{ margin: "2rem" }}>
                            <Box sx={{ display: 'flex' }}>
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

                            <Box sx={{ display: 'flex' }} >
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

                            <Box sx={{ display: 'flex' }} >
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