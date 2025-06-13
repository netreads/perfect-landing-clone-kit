import { useState } from "react";
import { Heart, Star, ShoppingCart, Award, Download, FileText, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export const ProductDetails = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  return <div className="space-y-6">
      {/* Price and Sale Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-green-600">₹365</span>
          <span className="text-lg text-gray-500 line-through">₹1,167</span>
          <Badge className="bg-green-100 text-green-800 border-green-200">75% off</Badge>
        </div>
        <div className="text-sm text-gray-600">
          Sale ends in 3-18-13
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-green-700">
            <span className="text-sm font-medium">✓ New markdown!</span>
            <span className="text-sm">Biggest sale in 60+ days</span>
          </div>
        </div>
        <div className="text-sm text-gray-600">GST Included</div>
      </div>

      {/* Product Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          Instagram Medical Templates, Healthcare Instagram Templates, PLR & MRR Templates, Medical Template for Canva, Psychological health, Medicine
        </h1>
      </div>

      {/* Seller Info */}
      

      {/* Add to Cart and Favorite */}
      <div className="flex gap-3">
        <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-3 text-lg font-medium">
          Add to cart
        </Button>
        <Button variant="outline" size="icon" className="py-3 px-3" onClick={() => setIsFavorited(!isFavorited)}>
          <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>

      {/* Star Seller Badge */}
      

      {/* Item Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Item details</h3>
        
        <div className="space-y-3">
          <div className="text-sm font-medium">Highlights</div>
          
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Designed by Buscandoelequilibrio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <span>Party decor for gatherings and celebrations</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Digital download</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Digital file type(s): 1 PDF</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Text in this download may be in another language</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="text-sm text-gray-600 mb-2">Description :</div>
          <div className="text-sm text-gray-700">
            Medical social media template pack, medical social media template for Canva, medical IG template, medical back story
          </div>
          <Button variant="link" className="p-0 h-auto text-sm text-blue-600">
            Learn more about this item
          </Button>
        </div>
      </div>

      {/* Delivery Info */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-3">Delivery</h3>
        <div className="space-y-3">
          <div className="font-medium">Instant Download</div>
          <div className="text-sm text-gray-700">
            Your files will be available to download once payment is confirmed.{" "}
            <Button variant="link" className="p-0 h-auto text-sm underline">
              Here's how.
            </Button>
          </div>
          <div className="text-sm text-gray-700">
            Instant download items don't accept returns, exchanges or cancellations. Please contact the seller about any problems with your order.
          </div>
        </div>
      </Card>
    </div>;
};