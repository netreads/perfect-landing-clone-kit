
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
    <div className="space-y-6">
      {/* Price and Sale Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-green-600">₹199</span>
          <span className="text-lg text-gray-500 line-through">₹999</span>
          <Badge className="bg-green-100 text-green-800 border-green-200">80% off</Badge>
        </div>
        
        {/* Timer Section */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-red-600" />
            <span className="text-red-700 font-semibold">Bonus expires at midnight:</span>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-red-500">Hours</div>
            </div>
            <div className="text-red-600 text-xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-red-500">Minutes</div>
            </div>
            <div className="text-red-600 text-xl">:</div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-red-500">Seconds</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-red-700">Offer Progress</span>
              <span className="text-red-700 font-medium">{saleProgress.toFixed(0)}% remaining</span>
            </div>
            <Progress value={saleProgress} className="h-2" />
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-green-700">
            <span className="text-sm font-medium">🎁 FREE BONUS:</span>
            <span className="text-sm">1500+ Coloring Sheets included!</span>
          </div>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
          <div className="flex items-center gap-2 text-orange-700">
            <span className="text-sm font-medium">🔥 Hot Deal:</span>
            <span className="text-sm">54 purchases in last 24 hours</span>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">100% Money-Back Guarantee • Instant Download</div>
      </div>

      {/* Product Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 leading-tight mb-2">
          11,000+ Printable Kids Worksheets Bundle - Early Childhood Development Activities for Ages 2.5-7 Years
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">4.8</span>
            <span>(987+ reviews)</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>10,000+ downloads</span>
          </div>
        </div>
      </div>

      {/* Add to Cart and Favorite */}
      <div className="flex gap-3">
        <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-3 text-lg font-medium">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Get Worksheets Now
        </Button>
        <Button variant="outline" size="icon" className="py-3 px-3" onClick={() => setIsFavorited(!isFavorited)}>
          <Heart className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
      </div>

      {/* Enhanced Highlights */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Why parents love this bundle?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <BookOpen className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <div className="font-medium text-blue-900">Educational Excellence</div>
              <div className="text-sm text-blue-700">Designed by early childhood experts</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
            <Zap className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <div className="font-medium text-green-900">Instant Access</div>
              <div className="text-sm text-green-700">Download immediately after purchase</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
            <Smile className="w-5 h-5 text-purple-600 mt-0.5" />
            <div>
              <div className="font-medium text-purple-900">Fun & Engaging</div>
              <div className="text-sm text-purple-700">Kids love these colorful activities</div>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
            <Target className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <div className="font-medium text-orange-900">Skill Development</div>
              <div className="text-sm text-orange-700">Builds essential learning foundations</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
          <div className="text-sm font-medium">Complete Package Includes:</div>
          
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span><strong>11,000+ Worksheets</strong> - Math, Reading, Writing, Science & More</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-green-600" />
              <span><strong>1 PDF + 5 ZIP Files</strong> - Organized by subject and age group</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-purple-600" />
              <span><strong>1500+ Coloring Sheets</strong> - FREE bonus for limited time</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-600" />
              <span><strong>Money-Back Guarantee</strong> - 100% satisfaction guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-teal-600" />
              <span><strong>Email Support</strong> - We're here to help you succeed</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="text-sm text-gray-600 mb-3">Description:</div>
          <div className="text-sm text-gray-700 space-y-3">
            <p>
              <strong>Transform your child's learning journey with over 11,000 engaging printable worksheets!</strong> ✨
            </p>
            <p>
              This comprehensive educational bundle is specially designed for early childhood development, covering ages 2.5 to 7 years. Our expert-created worksheets make learning fun and effective!
            </p>
            <p>
              Give your child the best start in life with activities that develop critical thinking, motor skills, reading comprehension, mathematical concepts, and creativity. Each worksheet is carefully crafted to engage young minds while building essential academic foundations. 📚
            </p>
            <div className="bg-gray-50 p-3 rounded-lg mt-3">
              <div className="text-sm font-medium mb-2">Perfect for:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>• Homeschooling parents</div>
                <div>• Preschool teachers</div>
                <div>• Daycare centers</div>
                <div>• Learning support</div>
                <div>• Educational therapists</div>
                <div>• Busy parents</div>
              </div>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg mt-3">
              <div className="text-sm font-medium mb-2">📝 Subject Areas Include:</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
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
          <Button variant="link" className="p-0 h-auto text-sm text-blue-600 mt-2">
            View sample worksheets →
          </Button>
        </div>
      </div>

      {/* Delivery Info */}
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Download className="w-5 h-5" />
          Instant Digital Delivery
        </h3>
        <div className="space-y-3">
          <div className="font-medium text-green-700">✓ Download immediately after payment</div>
          <div className="text-sm text-gray-700">
            Your educational bundle will be available for download once payment is confirmed. All worksheets are provided as high-quality PDF files, ready to print at home.{" "}
            <Button variant="link" className="p-0 h-auto text-sm underline">
              Printing guide included.
            </Button>
          </div>
          <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded">
            <strong>Files included:</strong> 1 main PDF file + 5 organized ZIP files by subject area
          </div>
          <div className="text-xs text-gray-600 bg-yellow-50 p-2 rounded">
            <strong>Note:</strong> Digital products don't accept returns. Preview samples available before purchase.
          </div>
        </div>
      </Card>
    </div>
  );
};
