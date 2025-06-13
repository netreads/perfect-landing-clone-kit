import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ArrowLeft, Shield, Clock, Download, Users, Star, Award, CheckCircle, Globe, Heart, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const Index = () => {
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-3 md:p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-sm md:text-base">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to search results</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <div className="text-red-600 font-medium text-sm md:text-base text-center">
            Only 47 left and in 23 carts
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Product Gallery */}
          <div className="relative order-1">
            <ProductGallery />
          </div>

          {/* Right Column - Product Details */}
          <div className="order-2">
            <ProductDetails />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Worksheet Bundle?
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Everything you need for your child's educational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Expert Designed</h3>
              <p className="text-sm md:text-base text-gray-600">Created by early childhood education specialists with proven learning methods</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Global Standards</h3>
              <p className="text-sm md:text-base text-gray-600">Aligned with international early childhood development standards</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Parent Approved</h3>
              <p className="text-sm md:text-base text-gray-600">Loved by thousands of parents worldwide with 4.8/5 rating</p>
            </Card>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Join Thousands of Happy Families
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-lg md:text-xl font-bold">4.8</span>
              <span className="text-sm md:text-base text-gray-600">(987+ reviews)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-sm md:text-base text-gray-700">Happy Families</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">11,000+</div>
              <div className="text-sm md:text-base text-gray-700">Quality Worksheets</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">96%</div>
              <div className="text-sm md:text-base text-gray-700">Recommend to Friends</div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 md:mt-16">
          <ReviewsSection />
        </div>
      </div>
    </div>;
};
export default Index;