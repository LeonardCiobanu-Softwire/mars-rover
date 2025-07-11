import React from "react";
import "../styles.css"
// import Image from "next/image";
import "keen-slider/keen-slider.min.css"
import GetPhotos from "@/app/photos/getPhotos";
import {IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";

export default function Photos() {

    return (
        <div>
            <GetPhotos params={'src'}/>
        </div>
    );
}

const itemData =

{/*<GetPhotos params={'src'}/>*/}






