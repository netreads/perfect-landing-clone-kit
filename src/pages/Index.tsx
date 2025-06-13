
import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ArrowLeft, Heart, Flag, Star, Users, Download, Shield, Clock, CheckCircle, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 p-4 lg:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 text-base">
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Back to search results</span>
            <span className="sm:hidden">Back</span>
          </Button>
          <div className="text-red-600 font-semibold text-sm sm:text-base text-center">
            🔥 Only 47 left and in 23 carts
          </div>
        </div>
      </div>

      {/* Trust Indicators Bar */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200 py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-green-700">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2 text-blue-700">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">Instant Download</span>
            </div>
            <div className="flex items-center gap-2 text-purple-700">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">10,000+ Happy Parents</span>
            </div>
            <div className="flex items-center gap-2 text-orange-700">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Column - Product Gallery */}
          <div className="relative">
            <ProductGallery />
          </div>

          {/* Right Column - Product Details */}
          <div>
            <ProductDetails />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Worksheets Bundle?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your child's learning journey with professionally designed educational materials
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Access</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Download immediately after purchase. No waiting, no shipping delays. Start learning today!
              </p>
            </Card>
            
            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Designed</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Created by early childhood education specialists for maximum learning effectiveness.
              </p>
            </Card>
            
            <Card className="p-6 lg:p-8 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Thousands of parents report improved learning outcomes and engagement.
              </p>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by Thousands of Families
            </h2>
            <p className="text-lg sm:text-xl opacity-90">
              Join our community of successful learners
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">11,000+</div>
              <div className="text-base sm:text-lg opacity-90">Worksheets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-base sm:text-lg opacity-90">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">987+</div>
              <div className="text-base sm:text-lg opacity-90">Happy Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">4.8★</div>
              <div className="text-base sm:text-lg opacity-90">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16">
          <ReviewsSection />
        </div>

        {/* Final CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 lg:p-12 text-center border-2 border-orange-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Child's Learning?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            Join thousands of parents who've already seen amazing results with our worksheets
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="text-4xl sm:text-5xl font-bold text-green-600">₹199</div>
            <div className="text-xl sm:text-2xl text-gray-500 line-through">₹999</div>
            <Badge className="bg-red-100 text-red-800 border-red-200 text-lg px-4 py-2">80% OFF</Badge>
          </div>
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
            Get Your Worksheets Now
          </Button>
          <p className="text-sm text-gray-600 mt-4">
            🎁 Includes 1500+ FREE Coloring Sheets • Instant Download • 100% Money-Back Guarantee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
