
import { useState, useEffect } from "react";
import { Heart, Star, ShoppingCart, Award, Download, FileText, Globe, Shield, Clock, Users, CheckCircle, Zap, Palette, TrendingUp, BookOpen, Smile, Target, Camera, Video, Brain, Flame, Calendar, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProductDetails = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const timeDiff = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Urgency Alert */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-5">
        <div className="text-red-700 font-medium text-base md:text-lg mb-1">
          Only 12 left and in 8 carts
        </div>
      </div>

      {/* Enhanced Pricing Section */}
      <div className="space-y-4">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600">₹497</span>
          <span className="text-xl md:text-2xl text-gray-500 line-through">₹4,999</span>
          <Badge className="bg-red-500 text-white text-base md:text-lg px-4 py-2">90% OFF</Badge>
        </div>
        
        {/* Timer */}
        <div className="text-base md:text-lg text-gray-700">
          Limited time offer ends in <span className="font-semibold text-red-600">{timeLeft.hours}:{timeLeft.minutes.toString().padStart(2, '0')}:{timeLeft.seconds.toString().padStart(2, '0')}</span>
        </div>
        
        {/* New markdown message */}
        <div className="bg-green-100 border border-green-300 rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-2 text-green-800">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium text-base md:text-lg">✨ Biggest discount! Save over ₹4,500 today</span>
          </div>
        </div>
        
        <div className="text-base md:text-lg text-gray-600">All taxes included</div>
      </div>

      {/* Product Title */}
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          2,000+ Health & Nutrition Social Media Templates - Ready-to-Use Canva Templates for Health Professionals
        </h1>
        <div className="flex items-center gap-4 text-base md:text-lg text-gray-600 flex-wrap">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">4.9</span>
            <span>(1,247+ reviews)</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-5 h-5 md:w-6 md:h-6" />
            <span>5,000+ health pros using</span>
          </div>
        </div>
      </div>

      {/* Add to Cart and Favorite */}
      <div className="flex gap-3">
        <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 md:py-5 text-lg md:text-xl font-medium">
          <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 mr-2" />
          YES! I WANT THIS NOW
        </Button>
        <Button variant="outline" size="icon" className="py-4 md:py-5 px-4 md:px-5" onClick={() => setIsFavorited(!isFavorited)}>
          <Heart className={`w-6 h-6 md:w-7 md:h-7 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>

      {/* Bonus Offers */}
      <div className="space-y-3">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-2 text-yellow-800">
            <Gift className="w-5 h-5" />
            <span className="text-base md:text-lg font-medium">🎁 4 FREE BONUSES (Worth ₹4,100+) Included!</span>
          </div>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 md:p-5">
          <div className="flex items-center gap-2 text-orange-700">
            <span className="text-base md:text-lg font-medium">🔥 Hot Deal:</span>
            <span className="text-base md:text-lg">127 health pros bought in last 24 hours</span>
          </div>
        </div>
        
        <div className="text-base md:text-lg text-gray-600">100% Money-Back Guarantee • Instant Download</div>
      </div>

      {/* Enhanced Highlights */}
      <div className="space-y-6 md:space-y-8">
        <h3 className="text-xl md:text-2xl font-semibold">💡 Why Health Pros Love This Bundle:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 md:p-5 bg-blue-50 rounded-lg">
            <Zap className="w-6 h-6 md:w-7 md:h-7 text-blue-600 mt-0.5" />
            <div>
              <div className="font-medium text-blue-900 text-base md:text-lg">⚡ Ready-to-post in 5 minutes</div>
              <div className="text-sm md:text-base text-blue-700">Quick customization saves hours weekly</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 md:p-5 bg-green-50 rounded-lg">
            <Palette className="w-6 h-6 md:w-7 md:h-7 text-green-600 mt-0.5" />
            <div>
              <div className="font-medium text-green-900 text-base md:text-lg">🎨 Edit fonts, colors & photos with 1 click</div>
              <div className="text-sm md:text-base text-green-700">Works with free Canva account</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 md:p-5 bg-purple-50 rounded-lg">
            <Target className="w-6 h-6 md:w-7 md:h-7 text-purple-600 mt-0.5" />
            <div>
              <div className="font-medium text-purple-900 text-base md:text-lg">💰 Save thousands on hiring designers</div>
              <div className="text-sm md:text-base text-purple-700">Professional quality at fraction of cost</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-4 md:p-5 bg-orange-50 rounded-lg">
            <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-orange-600 mt-0.5" />
            <div>
              <div className="font-medium text-orange-900 text-base md:text-lg">📈 Attract clients + book more appointments</div>
              <div className="text-sm md:text-base text-orange-700">Build authority & trust in your niche</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="text-base md:text-lg font-medium">Complete Package Includes:</div>
          
          <div className="space-y-3 text-base md:text-lg text-gray-700">
            <div className="flex items-center gap-3">
              <Camera className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              <span><strong>2,000+ Social Media Templates</strong> - Marketing Posts, Q&A, Facts & More</span>
            </div>
            <div className="flex items-center gap-3">
              <Video className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
              <span><strong>Canva Video Course</strong> - Master Canva like a pro (₹699 value)</span>
            </div>
            <div className="flex items-center gap-3">
              <Brain className="w-5 h-5 md:w-6 md:h-6 text-purple-600" />
              <span><strong>AI Research Course</strong> - Leverage AI for content (₹699 value)</span>
            </div>
            <div className="flex items-center gap-3">
              <Flame className="w-5 h-5 md:w-6 md:h-6 text-red-600" />
              <span><strong>250 Viral Hooks & Headlines</strong> - Proven engagement formulas (₹2000 value)</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 md:w-6 md:h-6 text-teal-600" />
              <span><strong>30-Day Social Media Challenge</strong> - Step-by-step growth plan (₹699 value)</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 md:pt-8">
          <div className="text-base md:text-lg text-gray-600 mb-4">Description:</div>
          <div className="text-base md:text-lg text-gray-700 space-y-4">
            <p>
              <strong>✅ Get Instant Access to 2000+ Professionally Designed, Fully Editable Health & Wellness Social Media Templates — Even If You Have Zero Design Skills!</strong>
            </p>
            <p>
              Build Your Brand. Boost Your Bookings. Save Hours Weekly.
            </p>
            <p>
              🔓 Unlock a massive collection of ready-to-post content made just for health, nutrition, and wellness professionals — all editable in Canva with a FREE account.
            </p>
            
            <div className="bg-green-50 p-4 md:p-5 rounded-lg mt-4">
              <div className="text-base md:text-lg font-medium mb-3">Template Categories Include:</div>
              <div className="grid grid-cols-2 gap-2 text-sm md:text-base">
                <div>• Marketing Posts</div>
                <div>• Weight Loss Q&A</div>
                <div>• Did-You-Know Facts</div>
                <div>• Exercise & Fitness Content</div>
                <div>• Hormonal Health</div>
                <div>• Human Biology</div>
                <div>• Reminders & Testimonials</div>
                <div>• Quote of the Day</div>
                <div>• Before & Afters</div>
                <div>• Brochures & Business Cards</div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 md:p-5 rounded-lg mt-4">
              <div className="text-base md:text-lg font-medium mb-3">🚀 Here's How It Works:</div>
              <div className="space-y-2 text-sm md:text-base">
                <div>1. Download the PDF with all template links</div>
                <div>2. Customize in Canva in just a few clicks</div>
                <div>3. Export and Post to Instagram, Facebook, or LinkedIn</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Info */}
      <Card className="p-5 md:p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
          <Download className="w-6 h-6 md:w-7 md:h-7" />
          Instant Digital Access
        </h3>
        <div className="space-y-4">
          <div className="font-medium text-green-700 text-base md:text-lg">✓ Download immediately after payment</div>
          <div className="text-base md:text-lg text-gray-700">
            Your complete Health & Nutrition Social Media Templates bundle will be available for instant download once payment is confirmed. All templates work with FREE Canva account.{" "}
            <Button variant="link" className="p-0 h-auto text-base md:text-lg underline">
              Setup guide included.
            </Button>
          </div>
          <div className="text-sm md:text-base text-gray-600 bg-blue-50 p-3 rounded">
            <strong>What you get:</strong> PDF with direct links to all 2,000+ Canva templates + 4 bonus courses
          </div>
          <div className="text-sm md:text-base text-gray-600 bg-yellow-50 p-3 rounded">
            <strong>Note:</strong> Digital products don't accept returns. 100% money-back guarantee if not satisfied.
          </div>
        </div>
      </Card>
    </div>
  );
};
