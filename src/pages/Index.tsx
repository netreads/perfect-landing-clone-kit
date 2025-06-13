import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ArrowLeft, Heart, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
const Index = () => {
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
            <ArrowLeft size={16} />
            Back to search results
          </Button>
          <div className="text-red-600 font-medium">
            Only 2 left and in 2 carts
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Product Gallery */}
          <div className="relative">
            <ProductGallery />
            <div className="flex items-center justify-between mt-4">
              
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div>
            <ProductDetails />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <ReviewsSection />
        </div>
      </div>
    </div>;
};
export default Index;