
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const productImages = [
  "/lovable-uploads/2753c287-7486-4b4e-88ac-5ef5da90adde.png",
  "/lovable-uploads/36375b62-7bb5-44c4-bbdc-78eb145680ac.png",
  "/lovable-uploads/07cecaf3-a232-474d-beb1-0de858dc77a4.png",
  "/lovable-uploads/b50a3a7c-fc72-4f15-9cee-40367f9b0214.png",
  "/lovable-uploads/ba399d13-6152-42c7-937a-8ea129c5279d.png",
  "/lovable-uploads/6ad93064-ce6f-4098-8d30-fc9b1c7de237.png"
];

export const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={productImages[currentImage]}
          alt="Kids Educational Worksheets Bundle - Sample Activities"
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full"
          onClick={prevImage}
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full"
          onClick={nextImage}
        >
          <ChevronRight size={20} />
        </Button>
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-2 overflow-x-auto">
        {productImages.map((image, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              currentImage === index
                ? "border-blue-500"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={image}
              alt={`Worksheet sample ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
