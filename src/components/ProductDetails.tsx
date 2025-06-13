import { useState, useEffect } from "react";
import { Heart, Star, ShoppingCart, Award, Download, FileText, Globe, Shield, Clock, Users, CheckCircle, Zap, Palette, TrendingUp, BookOpen, Smile, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const ProductDetails = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [saleProgress, setSaleProgress] = useState(75);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentSecond = now.getSeconds();
      
      // Calculate time until end of day (23:59:59)
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const timeDiff = endOfDay.getTime() - now.getTime();
      
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      setTimeLeft({ hours, minutes, seconds });
      
      // Calculate progress based on time of day (60% to 96%)
      const totalSecondsInDay = 24 * 60 * 60;
      const secondsElapsed = currentHour * 3600 + currentMinute * 60 + currentSecond;
      const progressPercent = 96 - (36 * secondsElapsed / totalSecondsInDay); // 96% to 60%
      setSaleProgress(Math.max(60, Math.min(96, progressPercent)));
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Enhanced Price Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 lg:p-8">
        <div className="text-center mb-4">
          <div className="text-sm font-medium text-green-800 mb-2">🎯 LIMITED TIME OFFER</div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-green-600">₹199</span>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl text-gray-500 line-through">₹999</span>
              <Badge className="bg-red-500 text-white text-lg px-3 py-1 animate-pulse">80% OFF</Badge>
            </div>
          </div>
          <div className="text-lg sm:text-xl font-semibold text-green-800">
            Save ₹800 Today! 🎉
          </div>
        </div>
        
        {/* Enhanced Timer Section */}
        <div className="bg-white border-2 border-red-200 rounded-lg p-4 lg:p-6 mb-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-red-600" />
            <span className="text-red-700 font-bold text-lg sm:text-xl">Bonus expires at midnight:</span>
          </div>
          <div className="flex items-center justify-center gap-3 lg:gap-6 mb-4">
            <div className="text-center bg-red-100 rounded-lg p-3 lg:p-4 min-w-[80px]">
              <div className="text-3xl lg:text-4xl font-bold text-red-600">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-sm text-red-500 font-medium">Hours</div>
            </div>
            <div className="text-red-600 text-2xl lg:text-3xl font-bold">:</div>
            <div className="text-center bg-red-100 rounded-lg p-3 lg:p-4 min-w-[80px]">
              <div className="text-3xl lg:text-4xl font-bold text-red-600">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-sm text-red-500 font-medium">Minutes</div>
            </div>
            <div className="text-red-600 text-2xl lg:text-3xl font-bold">:</div>
            <div className="text-center bg-red-100 rounded-lg p-3 lg:p-4 min-w-[80px]">
              <div className="text-3xl lg:text-4xl font-bold text-red-600">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-sm text-red-500 font-medium">Seconds</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-base font-medium">
              <span className="text-red-700">⏰ Offer Progress</span>
              <span className="text-red-700 font-bold">{saleProgress.toFixed(0)}% remaining</span>
            </div>
            <Progress value={saleProgress} className="h-3 bg-red-100" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 text-orange-800 text-base sm:text-lg font-semibold">
            <span>🎁 FREE BONUS:</span>
            <span>1500+ Coloring Sheets included!</span>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 rounded-lg p-4">
          <div className="flex items-center gap-2 text-red-800 text-base sm:text-lg font-semibold">
            <span>🔥 Hot Deal:</span>
            <span>54 purchases in last 24 hours</span>
          </div>
        </div>
      </div>

      {/* Product Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          11,000+ Printable Kids Worksheets Bundle - Early Childhood Development Activities for Ages 2.5-7 Years
        </h1>
        <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-base sm:text-lg">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-lg">4.8</span>
            <span className="text-gray-600">(987+ reviews)</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-5 h-5" />
            <span className="font-medium">10,000+ downloads</span>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-4 lg:py-6 text-lg lg:text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
          <ShoppingCart className="w-6 h-6 mr-3" />
          Get Worksheets Now
        </Button>
        <Button variant="outline" size="icon" className="py-4 px-4 lg:py-6 lg:px-6 border-2" onClick={() => setIsFavorited(!isFavorited)}>
          <Heart className={`w-6 h-6 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-gray-700 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-1">
          <Shield className="w-4 h-4 text-green-600" />
          <span>100% Money-Back Guarantee</span>
        </div>
        <div className="flex items-center gap-1">
          <Download className="w-4 h-4 text-blue-600" />
          <span>Instant Download</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-purple-600" />
          <span>Secure Payment</span>
        </div>
      </div>

      {/* Enhanced Highlights */}
      <div className="space-y-6">
        <h3 className="text-xl lg:text-2xl font-bold">Why parents love this bundle?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <div className="flex items-start gap-4 p-4 lg:p-6 bg-blue-50 rounded-xl">
            <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
            <div>
              <div className="font-bold text-blue-900 text-lg">Educational Excellence</div>
              <div className="text-base text-blue-700">Designed by early childhood experts</div>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 lg:p-6 bg-green-50 rounded-xl">
            <Zap className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <div className="font-bold text-green-900 text-lg">Instant Access</div>
              <div className="text-base text-green-700">Download immediately after purchase</div>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 lg:p-6 bg-purple-50 rounded-xl">
            <Smile className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <div className="font-bold text-purple-900 text-lg">Fun & Engaging</div>
              <div className="text-base text-purple-700">Kids love these colorful activities</div>
            </div>
          </div>
          
          <div className="flex items-start gap-4 p-4 lg:p-6 bg-orange-50 rounded-xl">
            <Target className="w-6 h-6 text-orange-600 mt-1" />
            <div>
              <div className="font-bold text-orange-900 text-lg">Skill Development</div>
              <div className="text-base text-orange-700">Builds essential learning foundations</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 lg:space-y-6">
          <div className="text-lg font-bold">Complete Package Includes:</div>
          
          <div className="space-y-3 lg:space-y-4">
            <div className="flex items-center gap-3 text-base lg:text-lg">
              <FileText className="w-5 h-5 text-blue-600" />
              <span><strong>11,000+ Worksheets</strong> - Math, Reading, Writing, Science & More</span>
            </div>
            <div className="flex items-center gap-3 text-base lg:text-lg">
              <Download className="w-5 h-5 text-green-600" />
              <span><strong>1 PDF + 5 ZIP Files</strong> - Organized by subject and age group</span>
            </div>
            <div className="flex items-center gap-3 text-base lg:text-lg">
              <Palette className="w-5 h-5 text-purple-600" />
              <span><strong>1500+ Coloring Sheets</strong> - FREE bonus for limited time</span>
            </div>
            <div className="flex items-center gap-3 text-base lg:text-lg">
              <Shield className="w-5 h-5 text-orange-600" />
              <span><strong>Money-Back Guarantee</strong> - 100% satisfaction guaranteed</span>
            </div>
            <div className="flex items-center gap-3 text-base lg:text-lg">
              <Globe className="w-5 h-5 text-teal-600" />
              <span><strong>Email Support</strong> - We're here to help you succeed</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="text-lg font-bold mb-4">Description:</div>
          <div className="text-base lg:text-lg text-gray-700 space-y-4 leading-relaxed">
            <p>
              <strong>Transform your child's learning journey with over 11,000 engaging printable worksheets!</strong> ✨
            </p>
            <p>
              This comprehensive educational bundle is specially designed for early childhood development, covering ages 2.5 to 7 years. Our expert-created worksheets make learning fun and effective!
            </p>
            <p>
              Give your child the best start in life with activities that develop critical thinking, motor skills, reading comprehension, mathematical concepts, and creativity. Each worksheet is carefully crafted to engage young minds while building essential academic foundations. 📚
            </p>
            <div className="bg-gray-50 p-4 lg:p-6 rounded-xl">
              <div className="text-lg font-bold mb-3">Perfect for:</div>
              <div className="grid grid-cols-2 gap-3 text-base">
                <div>• Homeschooling parents</div>
                <div>• Preschool teachers</div>
                <div>• Daycare centers</div>
                <div>• Learning support</div>
                <div>• Educational therapists</div>
                <div>• Busy parents</div>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 lg:p-6 rounded-xl">
              <div className="text-lg font-bold mb-3">📝 Subject Areas Include:</div>
              <div className="grid grid-cols-2 gap-3 text-base">
                <div>• Mathematics & Numbers</div>
                <div>• Reading & Phonics</div>
                <div>• Writing & Tracing</div>
                <div>• Science & Nature</div>
                <div>• Motor Skills</div>
                <div>• Creative Arts</div>
                <div>• Social Skills</div>
                <div>• Problem Solving</div>
              </div>
            </div>
          </div>
          <Button variant="link" className="p-0 h-auto text-base text-blue-600 mt-4 font-medium">
            View sample worksheets →
          </Button>
        </div>
      </div>

      {/* Delivery Info */}
      <Card className="p-6 lg:p-8">
        <h3 className="text-xl lg:text-2xl font-bold mb-4 flex items-center gap-3">
          <Download className="w-6 h-6" />
          Instant Digital Delivery
        </h3>
        <div className="space-y-4">
          <div className="font-bold text-green-700 text-lg">✓ Download immediately after payment</div>
          <div className="text-base lg:text-lg text-gray-700 leading-relaxed">
            Your educational bundle will be available for download once payment is confirmed. All worksheets are provided as high-quality PDF files, ready to print at home.{" "}
            <Button variant="link" className="p-0 h-auto text-base underline font-medium">
              Printing guide included.
            </Button>
          </div>
          <div className="text-sm lg:text-base text-gray-600 bg-blue-50 p-3 lg:p-4 rounded-lg">
            <strong>Files included:</strong> 1 main PDF file + 5 organized ZIP files by subject area
          </div>
          <div className="text-sm lg:text-base text-gray-600 bg-yellow-50 p-3 lg:p-4 rounded-lg">
            <strong>Note:</strong> Digital products don't accept returns. Preview samples available before purchase.
          </div>
        </div>
      </Card>
    </div>
  );
};
