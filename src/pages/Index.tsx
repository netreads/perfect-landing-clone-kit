
import { ProductGallery } from "@/components/ProductGallery";
import { ProductDetails } from "@/components/ProductDetails";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FAQsSection } from "@/components/FAQsSection";
import { ArrowLeft, Shield, Clock, Download, Users, Star, Award, CheckCircle, Globe, Heart, Flag, Zap, TrendingUp, Camera, Palette, Target } from "lucide-react";
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
            Only 12 left and in 8 carts
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2 text-green-700">
              <Shield className="w-4 h-4" />
              <span className="font-medium">100% Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Download className="w-4 h-4" />
              <span className="font-medium">Instant Download</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Users className="w-4 h-4" />
              <span className="font-medium">5,000+ Happy Health Pros</span>
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <Award className="w-4 h-4" />
              <span className="font-medium">Professional Grade Templates</span>
            </div>
          </div>
        </div>
      </div>

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Health Professionals Choose Our Templates?
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Everything you need to grow your health & nutrition business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Ready in 5 Minutes</h3>
              <p className="text-base md:text-lg text-gray-600">Quick customization with just a few clicks in Canva</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Fully Editable</h3>
              <p className="text-base md:text-lg text-gray-600">Change fonts, colors & photos with 1 click in free Canva</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Health Niche Focused</h3>
              <p className="text-base md:text-lg text-gray-600">Designed specifically for health & wellness professionals</p>
            </Card>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎁 What You Get (INSTANT DOWNLOAD)
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">📱</div>
              <h3 className="text-lg font-semibold mb-2">2,000+ Social Media Templates</h3>
              <p className="text-gray-600 text-sm">Marketing posts, Q&A, facts, fitness content, and more</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">🎥</div>
              <h3 className="text-lg font-semibold mb-2">Canva Video Course</h3>
              <p className="text-gray-600 text-sm">Master Canva like a pro (Value: ₹699)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold mb-2">AI Research Course</h3>
              <p className="text-gray-600 text-sm">Leverage AI for content creation (Value: ₹699)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">🔥</div>
              <h3 className="text-lg font-semibold mb-2">250 Viral Hooks & Headlines</h3>
              <p className="text-gray-600 text-sm">Proven formulas that get engagement (Value: ₹2000)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">📅</div>
              <h3 className="text-lg font-semibold mb-2">30-Day Social Media Challenge</h3>
              <p className="text-gray-600 text-sm">Step-by-step growth plan (Value: ₹699)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-2xl mb-3">📚</div>
              <h3 className="text-lg font-semibold mb-2">E-book: Social Media Marketing</h3>
              <p className="text-gray-600 text-sm">Complete guide made simple for health pros</p>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join 5,000+ Health Professionals
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 md:w-7 md:h-7 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="text-xl md:text-2xl font-bold">4.9</span>
              <span className="text-base md:text-lg text-gray-600">(1,247+ reviews)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-base md:text-lg text-gray-700">Health Professionals</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2,000+</div>
              <div className="text-base md:text-lg text-gray-700">Ready-to-Use Templates</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-base md:text-lg text-gray-700">Recommend to Colleagues</div>
            </div>
          </div>
        </div>

        {/* Perfect For Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              This Is Perfect for You If:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">You're tired of wasting time on Canva every day</h3>
                  <p className="text-gray-600">Get ready-made templates instead of starting from scratch</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">You want to grow without hiring expensive designers</h3>
                  <p className="text-gray-600">Save thousands on design costs with professional templates</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">You need to post consistently</h3>
                  <p className="text-gray-600">Never run out of content ideas with our vast template library</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">You want a plug-and-play marketing system</h3>
                  <p className="text-gray-600">Complete marketing solution that doesn't cost a fortune</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 md:mt-16">
          <ReviewsSection />
        </div>

        {/* FAQs Section */}
        <div className="mt-12 md:mt-16">
          <FAQsSection />
        </div>
      </div>
    </div>;
};

export default Index;
