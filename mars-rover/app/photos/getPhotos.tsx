'use server'
// import { useState } from 'react';
import {promises as fs} from "fs";
import Image from "next/image";
import React from "react";
import {ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";
// import {useKeenSlider} from "keen-slider/react";

export default async function GetPhoto({ params: { id: string } }) {
    const file = await fs.readFile('response.json', 'utf8');
    const data = JSON.parse(file);
    const arrayData = Array.from(data.photos);

    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">December</ListSubheader>
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

// <ul>
//     { arrayData.map((photo: any) => (
//         <li key={photo.id}>
//             <Image
//                 src={photo.img_src}
//                 alt={photo.camera.full_name}
//                 width={300}
//                 height={300}
//             />
//         </li>
//     ))}
// </ul>
// );
