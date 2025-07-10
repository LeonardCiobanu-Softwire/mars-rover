'use client'
import React from "react";
import "../styles.css"
import Image from "next/image";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { getPhotos } from "@/app/photos/getPhotos";

export default function Photos() {

    const rawData= getPhotos();
    const arrayData = Array.from(rawData);
    const smallArray: [] = arrayData.slice(0, 10);

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
            selector: ".carousel__cell",
            renderMode: "custom",
            mode: "free-snap",
        },
        [carousel]
    )

    return (
        <div className="wrapper">
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderRef}>
                    <div className="carousel__cell number-slide1 "><Image
                        src={smallArray[0].img_src}
                        alt={smallArray[0].camera.full_name}
                        width={300}
                        height={300}
                    /></div>
                    <div className="carousel__cell number-slide2">2</div>
                    <div className="carousel__cell number-slide3">3</div>
                    <div className="carousel__cell number-slide4">4</div>
                    <div className="carousel__cell number-slide5">5</div>
                    <div className="carousel__cell number-slide6">6</div>
                </div>
            </div>
        </div>
    )

    return (
        <ul>
            { arrayData.map((photo: any) => (
                <li key={photo.id}>
                    <Image
                        src={photo.img_src}
                        alt={photo.camera.full_name}
                        width={300}
                        height={300}
                    />
                </li>
            ))}
        </ul>);
}






const carousel: KeenSliderPlugin = (slider) => {
    const z = 300
    function rotate() {
        const deg = 360 * slider.track.details.progress
        slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
    }
    slider.on("created", () => {
        const deg = 360 / slider.slides.length
        slider.slides.forEach((element, idx) => {
            element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
        })
        rotate()
    })
    slider.on("detailsChanged", rotate)
}
