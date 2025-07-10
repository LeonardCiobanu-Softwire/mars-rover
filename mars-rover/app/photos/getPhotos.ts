'use server'
import {promises as fs} from "fs";

export async function getPhotos() {
    const file = await fs.readFile('response.json', 'utf8');
    const data = JSON.parse(file);
    return data.photos;
}