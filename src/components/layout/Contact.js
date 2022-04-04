import React, { Component } from 'react';
import { Typography, Grid } from '@mui/material';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <>
                <Grid container column={3}>
                    <Grid item xs={4}>
                        <Typography variant="h5" color="text.primary" fontSize="1rem">
                            Location:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize="1rem">
                            Woodbridge, Virginia
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" color="text.primary" fontSize="1rem">
                            Phone:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize="1rem">
                            (703) 663-0098
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h5" color="text.primary" fontSize="1rem">
                            Email:
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize="1rem">
                            adeziio@yahoo.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontSize="1rem">
                            adeziio.t@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </>
        )
    }
}