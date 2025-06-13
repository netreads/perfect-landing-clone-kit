
import { Star, ThumbsUp, Verified, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: 1,
    rating: 5,
    author: "Dr. Sarah Mitchell",
    date: "2 days ago",
    content: "Absolutely amazing templates! As a healthcare professional, I was struggling to create engaging social media content. These templates have transformed my Instagram presence. The quality is outstanding and they're so easy to customize in Canva. My patient engagement has increased by 300%!",
    verified: true,
    recommended: true,
    helpful: 47,
    profession: "Healthcare Professional",
    images: 3,
    purchasedItem: "Medical Instagram Templates - Complete Pack"
  },
  {
    id: 2,
    rating: 5,
    author: "Maria Rodriguez",
    date: "5 days ago",
    content: "¡Increíbles plantillas! The Spanish versions are perfect for my clinic in Mexico. Professional design, easy to edit, and my patients love the educational content I can now create. Worth every penny! The PLR license is a huge bonus.",
    verified: true,
    recommended: true,
    helpful: 32,
    profession: "Clinic Owner",
    images: 2,
    purchasedItem: "Medical Social Media Templates + PLR Rights"
  },
  {
    id: 3,
    rating: 5,
    author: "Dr. James Wilson",
    date: "1 week ago",
    content: "I've purchased many template packs before, but this one stands out. The psychological health templates are particularly well-designed and evidence-based. My mental health practice has seen a 250% increase in social media followers since using these.",
    verified: true,
    recommended: true,
    helpful: 89,
    profession: "Psychologist",
    images: 4,
    purchasedItem: "Psychology & Mental Health Template Bundle"
  },
  {
    id: 4,
    rating: 5,
    author: "Lisa Chen",
    date: "1 week ago",
    content: "As a health coach, these templates save me hours every week! The variety is incredible - from nutrition tips to workout motivation. The Canva integration is seamless. My clients always ask where I get my beautiful graphics from!",
    verified: true,
    recommended: true,
    helpful: 56,
    profession: "Health Coach",
    images: 1,
    purchasedItem: "Complete Medical Template Collection"
  },
  {
    id: 5,
    rating: 5,
    author: "Dr. Michael Brown",
    date: "2 weeks ago",
    content: "Exceptional quality and value! The templates cover everything from general health tips to specialized medical content. The MRR license allows me to offer these to my colleagues too. Highly professional and medically accurate content.",
    verified: true,
    recommended: true,
    helpful: 73,
    profession: "Medical Director",
    images: 5,
    purchasedItem: "Medical Templates with MRR License"
  }
];

export const ReviewsSection = () => {
  return (
    <div className="space-y-6">
      {/* Enhanced Rating Summary */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold">4.9</span>
            </div>
            <div>
              <div className="text-lg font-semibold">Excellent</div>
              <div className="text-gray-600">Based on 2,847 reviews</div>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-2">
              <Award className="w-4 h-4 mr-1" />
              Top Rated
            </Badge>
            <div className="text-sm text-gray-600">98% recommend this product</div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-2">
              <span className="text-sm">{stars}</span>
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-yellow-400 h-2 rounded-full" 
                  style={{ width: stars === 5 ? '85%' : stars === 4 ? '12%' : '2%' }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">
                {stars === 5 ? '2,420' : stars === 4 ? '341' : stars === 3 ? '57' : stars === 2 ? '18' : '11'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-600 flex items-center gap-2">
        <Verified className="w-4 h-4 text-blue-600" />
        All reviews are from verified buyers
      </div>

      {/* Enhanced Rating Categories */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-orange-50 to-red-50">
          <div className="text-2xl font-bold text-orange-600">4.9/5</div>
          <div className="text-sm text-gray-600">Template Quality</div>
          <div className="text-xs text-green-600 mt-1">Exceptional</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-2xl font-bold text-green-600">5.0/5</div>
          <div className="text-sm text-gray-600">Delivery Speed</div>
          <div className="text-xs text-green-600 mt-1">Instant</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-2xl font-bold text-blue-600">4.8/5</div>
          <div className="text-sm text-gray-600">Customer Service</div>
          <div className="text-xs text-green-600 mt-1">Outstanding</div>
        </Card>
      </div>

      {/* Reviews Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Customer Reviews</h3>
          <p className="text-sm text-gray-600">See what healthcare professionals are saying</p>
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
        {reviews.map((review) => (
          <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              {/* Review Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{review.rating}/5</span>
                  {review.verified && (
                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                      <Verified className="w-3 h-3 mr-1" />
                      Verified Purchase
                    </Badge>
                  )}
                  {review.recommended && (
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Recommends
                    </Badge>
                  )}
                </div>
                <div className="text-sm text-gray-600">{review.date}</div>
              </div>

              {/* Review Content */}
              <div className="text-gray-700">{review.content}</div>

              {/* Additional Info */}
              {review.images && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">📷 {review.images} photos attached</span>
                </div>
              )}

              {/* Purchased Item */}
              <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                <span className="font-medium">Purchased:</span> {review.purchasedItem}
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
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
          </Card>
        ))}
      </div>

      {/* Load More Reviews */}
      <div className="text-center">
        <Button variant="outline" className="px-8">
          Load More Reviews
        </Button>
        <p className="text-sm text-gray-600 mt-2">Showing 5 of 2,847 reviews</p>
      </div>
    </div>
  );
};
