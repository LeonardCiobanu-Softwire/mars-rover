import * as React from "react";
import GetCuriosityPhotos from "@/app/photos/curiosity/getPhotos";
import NavBarPhotos from "@/app/photos/NavbarPhotos";

export default function CuriosityPage() {

    return (
        <div>
            <NavBarPhotos/>
            <ul style={{ position: "absolute", top: 100, left: 0, width: "auto", height: "100%"}}>
                <GetCuriosityPhotos/>
            </ul>
        </div>
    );
}
