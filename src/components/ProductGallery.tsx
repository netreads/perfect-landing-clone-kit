
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const productImages = [
  "/lovable-uploads/9b8a1b41-ab17-436d-ac13-485c6a1e63d6.png",
  "/lovable-uploads/09e28f3f-d0cd-4ad8-971d-f8094a74d91f.png",
  "/lovable-uploads/54fe79bc-5d02-4b93-9b71-bd82ae53310c.png",
  "/lovable-uploads/99d92588-3983-43ea-a518-7beb20b50276.png",
  "/lovable-uploads/eba438c7-5667-4265-a7f6-6b861619176a.png",
  "/lovable-uploads/def99a66-dbf1-4dd1-a20c-aec2a5be7d64.png",
  "/lovable-uploads/36247320-8c9a-4cf4-9249-265f2f3f4b4a.png"
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
          alt="Health & Nutrition Social Media Templates Bundle - Professional Designs"
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
                ? "border-green-500"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={image}
              alt={`Health & nutrition template sample ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
