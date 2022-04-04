import React, { Component } from 'react';
import { Typography } from '@mui/material';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <>
                <Typography variant="body2" color="text.secondary" fontSize="1rem">
                    © 2022 Design & Build by Aden Tran.
                </Typography>
            </>
        )
    }
}