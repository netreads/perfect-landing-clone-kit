import { Star, ThumbsUp, Verified, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
const reviews = [{
  id: 1,
  rating: 5,
  author: "Sarah Johnson",
  date: "3 days ago",
  content: "Absolutely amazing collection! As a homeschooling mom of 3, I was struggling to find quality worksheets that would keep my kids engaged. This bundle has been a lifesaver! The variety is incredible - from basic tracing for my 3-year-old to advanced math problems for my 6-year-old. My children actually ask to do 'worksheet time' now!",
  verified: true,
  recommended: true,
  helpful: 89,
  profession: "Homeschooling Parent",
  images: 4,
  purchasedItem: "Complete 11,000+ Worksheets Bundle + Bonus Coloring Sheets"
}, {
  id: 2,
  rating: 5,
  author: "Maria Rodriguez",
  date: "1 week ago",
  content: "¡Increíble valor! I'm a preschool teacher and these worksheets have transformed my classroom activities. The quality is outstanding and the kids love the colorful designs. The organization by age and subject makes it so easy to find exactly what I need. Best educational purchase I've made this year!",
  verified: true,
  recommended: true,
  helpful: 67,
  profession: "Preschool Teacher",
  images: 6,
  purchasedItem: "Educational Worksheets Bundle - Ages 2.5-7"
}, {
  id: 3,
  rating: 5,
  author: "Jennifer Smith",
  date: "1 week ago",
  content: "My 4-year-old daughter was struggling with letter recognition until we started using these worksheets. The progression is perfect and she's now reading simple words! The bonus coloring sheets are an added treasure. Worth every penny and more. Thank you for creating such a comprehensive learning resource!",
  verified: true,
  recommended: true,
  helpful: 142,
  profession: "Parent",
  images: 3,
  purchasedItem: "Kids Learning Worksheets + 1500 Coloring Sheets Bonus"
}, {
  id: 4,
  rating: 5,
  author: "Dr. Amanda Chen",
  date: "2 weeks ago",
  content: "As a pediatric occupational therapist, I'm always looking for quality resources to help children develop fine motor skills and cognitive abilities. This collection exceeds all expectations! The worksheets are professionally designed, age-appropriate, and incredibly effective. I now recommend this to all my clients' parents.",
  verified: true,
  recommended: true,
  helpful: 78,
  profession: "Pediatric OT",
  images: 2,
  purchasedItem: "Complete Early Childhood Development Worksheet Bundle"
}, {
  id: 5,
  rating: 5,
  author: "Michael Thompson",
  date: "2 weeks ago",
  content: "Outstanding value for money! My twin boys (age 5) love these worksheets. The math activities have really helped them understand numbers and counting. The variety keeps them engaged and I love that I can print as many copies as I need. Customer service was also very helpful when I had download questions.",
  verified: true,
  recommended: true,
  helpful: 95,
  profession: "Father of Twins",
  images: 5,
  purchasedItem: "Printable Kids Worksheets - Complete Bundle"
}];
export const ReviewsSection = () => {
  return <div className="space-y-6">
      {/* Enhanced Rating Summary */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <div>
              <div className="text-lg font-semibold">Excellent</div>
              <div className="text-gray-600">Based on 987 reviews</div>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-2">
              <Award className="w-4 h-4 mr-1" />
              Parents' Choice
            </Badge>
            <div className="text-sm text-gray-600">96% recommend this bundle</div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {[5, 4, 3, 2, 1].map(stars => <div key={stars} className="flex items-center gap-2">
              <span className="text-sm">{stars}</span>
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{
              width: stars === 5 ? '87%' : stars === 4 ? '9%' : '3%'
            }}></div>
              </div>
              <span className="text-xs text-gray-600">
                {stars === 5 ? '859' : stars === 4 ? '89' : stars === 3 ? '25' : stars === 2 ? '8' : '6'}
              </span>
            </div>)}
        </div>
      </div>

      <div className="text-sm text-gray-600 flex items-center gap-2">
        <Verified className="w-4 h-4 text-blue-600" />
        All reviews are from verified purchases
      </div>

      {/* Enhanced Rating Categories */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-orange-50 to-red-50">
          <div className="text-2xl font-bold text-orange-600">4.9/5</div>
          <div className="text-sm text-gray-600">Content Quality</div>
          <div className="text-xs text-green-600 mt-1">Outstanding</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-2xl font-bold text-green-600">4.8/5</div>
          <div className="text-sm text-gray-600">Kid Engagement</div>
          <div className="text-xs text-green-600 mt-1">Excellent</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-2xl font-bold text-blue-600">4.7/5</div>
          <div className="text-sm text-gray-600">Value for Money</div>
          <div className="text-xs text-green-600 mt-1">Amazing</div>
        </Card>
      </div>

      {/* Reviews Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Parent Reviews</h3>
          <p className="text-sm text-gray-600">See what families are saying about our worksheets</p>
        </div>
        <Select defaultValue="helpful">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="helpful">Most Helpful</SelectItem>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="highest">Highest Rated</SelectItem>
            <SelectItem value="lowest">Lowest Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Enhanced Reviews List */}
      <div className="space-y-6">
        {reviews.map(review => <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {/* Review Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`} />)}
                  </div>
                  <span className="font-medium">{review.rating}/5</span>
                  {review.verified && <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                      <Verified className="w-3 h-3 mr-1" />
                      Verified Purchase
                    </Badge>}
                  {review.recommended && <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Recommends
                    </Badge>}
                </div>
                <div className="text-sm text-gray-600">{review.date}</div>
              </div>

              {/* Review Content */}
              <div className="text-gray-700">{review.content}</div>

              {/* Additional Info */}
              {review.images && <div className="text-sm text-gray-600">
                  <span className="font-medium">📷 {review.images} photos of kids using worksheets</span>
                </div>}

              {/* Purchased Item */}
              <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                <span className="font-medium">Purchased:</span> {review.purchasedItem}
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-white">
                      {review.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium">{review.author}</div>
                    <div className="text-sm text-gray-600">{review.profession}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </div>
            </div>
          </Card>)}
      </div>

      {/* Load More Reviews */}
      <div className="text-center">
        
        
      </div>
    </div>;
};