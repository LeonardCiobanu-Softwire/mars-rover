import * as React from 'react';
import "../styles.css"
import "keen-slider/keen-slider.min.css"
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";

export default function NavBarPhotos() {

    return (
        <div style={{position: 'absolute', top: 50, left: 30,  width: "100%"}}>
            <div style={{position: 'relative', top: 0, left: 0, opacity: 1}}>
                <ButtonGroup variant="contained" aria-label="Basic button group" >
                    <Button color="inherit" href="/photos/curiosity" style={{backgroundColor: "#fd746a", color: "#ffffff"}}>
                        Curiosity
                    </Button>
                    <Button color="inherit" href="/photos/perseverance" style={{backgroundColor: "#fd746a", color: "#ffffff"}}>
                        Perseverance
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
