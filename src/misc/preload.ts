export default function preload(toPreload: string[]) {
    let images = [];
    for (let i = 0; i < toPreload.length; i++) {
        images[i] = new Image();
        images[i].src = toPreload[i];
    }
}