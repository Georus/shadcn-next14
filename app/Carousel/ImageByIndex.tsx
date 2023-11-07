import image1 from "@/public/Slide-1.jpeg";
import image2 from "@/public/Slide-2.jpeg";
import image3 from "@/public/Slide-3.jpg";
import image4 from "@/public/Slide-4.jpg";

export const images = [image1, image2, image3, image4];

const imageByIndex = (index: number) => images[index % images.length];

export default imageByIndex;
