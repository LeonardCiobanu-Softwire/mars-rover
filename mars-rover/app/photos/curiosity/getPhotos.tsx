'use server'
// import * as React from 'react';
import {promises as fs} from "fs";
import React from "react";
import {ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";

export default async function GetCuriosityPhotos() {
    const filename: string = "curiosityPictures.json";
    const file = await fs.readFile(filename, 'utf8');
    const data = JSON.parse(file);
    const arrayData = Array.from(data.photos);

    return (
        <ImageList sx={{ width: "auto", paddingTop: 0.1, paddingBottom: 5, paddingLeft: 3, paddingRight: 3}}>
            <ImageListItem key="Subheader" cols={5}>
            </ImageListItem>
            {arrayData.map((item: any) => (
                <ImageListItem key={item.img_src}>
                    <img
                        srcSet={`${item.img_src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img_src}?w=248&fit=crop&auto=format`}
                        alt={item.camera.full_name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.camera.full_name}
                        subtitle={item.earth_date}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
