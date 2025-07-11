import * as React from "react";
import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";
import Photos from "@/app/photos/page";
import GetPerseverancePhotos from "@/app/photos/perseverance/getPhotos";
import NavBarPhotos from "@/app/photos/NavbarPhotos";

export default function PerseverancePage() {

    return (
        <div>
            <NavBarPhotos/>
            <ul style={{ position: "absolute", top: 100, left: 0, maxWidth: "100%", maxHeight: "100%" }} >
                <GetPerseverancePhotos/>
            </ul>
        </div>
    );
}
