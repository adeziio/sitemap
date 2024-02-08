import { Typography } from '@mui/material';

const About = (props) => {
    const { size } = props;

    return (
        <>
            <div style={{ marginTop: "2rem" }}>
                <Typography variant="h5" color="text.primary" fontSize="1.5rem" fontWeight="bold" margin="1rem" >
                    Welcome to Star Gallery!
                </Typography>
                <Typography variant="p" color="text.primary" fontSize="1rem" display="block" margin="1rem" >
                    Click <span style={{ fontWeight: "bold", color: "#1976d2" }} className="pointer" onClick={() => props.setPage("Upload")}>Upload</span> to submit your own photo
                </Typography>
                <Typography variant="p" color="text.primary" fontSize="1rem" display="block" margin="1rem" >
                    Gallery Size: <span style={{ fontWeight: "bold" }}>{size}</span>
                </Typography>
            </div>
        </>
    )
}

export default About;