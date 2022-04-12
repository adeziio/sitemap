import React, { Component } from 'react';
import { Typography, Button } from '@mui/material';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <>
                <Typography variant="body2" color="text.secondary" fontSize="1rem" sx={{ display: "block" }}>
                    © 2022 Aden Tran.
                </Typography>

                <Typography variant="body2" color="text.secondary" fontSize="1rem" sx={{ display: "inline-block" }}>
                    <Button sx={{ m: 0, p: 0, minWidth: "2rem" }} onClick={() => window.open("https://github.com/adeziio")}>
                        <GitHub />
                    </Button>
                </Typography>

                <Typography variant="body2" color="text.secondary" fontSize="1rem" sx={{ display: "inline-block" }}>
                    <Button sx={{ m: 0, p: 0, minWidth: "2rem" }} onClick={() => window.open("https://www.linkedin.com/in/aden-tran-aba695171")}>
                        <LinkedIn />
                    </Button>
                </Typography>

                <Typography variant="body2" color="text.secondary" fontSize="1rem" sx={{ display: "inline-block" }}>
                    <Button sx={{ m: 0, p: 0, minWidth: "2rem" }} onClick={() => window.open("https://www.instagram.com/adeziio")}>
                        <Instagram />
                    </Button>
                </Typography>
            </>
        )
    }
}