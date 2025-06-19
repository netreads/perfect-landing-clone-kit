
import { Star, ThumbsUp, Verified, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: 1,
    rating: 5,
    author: "Dr. Priya Sharma",
    date: "3 days ago",
    content: "Absolutely game-changing! As a nutritionist running my own practice, I was spending hours every week creating social media content. This template bundle has been a lifesaver! The variety is incredible - from weight loss Q&As to hormonal health posts. My engagement has tripled since I started using these templates!",
    verified: true,
    recommended: true,
    helpful: 89,
    profession: "Certified Nutritionist",
    images: 4,
    purchasedItem: "Complete 2,000+ Health & Wellness Social Media Templates + Bonuses"
  },
  {
    id: 2,
    rating: 5,
    author: "Sarah Mitchell",
    date: "1 week ago",
    content: "Worth every penny! I'm a health coach and these templates have transformed my social media presence. The before & after templates and testimonial layouts are perfect for showcasing client results. The Canva course bonus was incredibly helpful too. My follower count has grown by 300% in just 2 months!",
    verified: true,
    recommended: true,
    helpful: 127,
    profession: "Health Coach",
    images: 6,
    purchasedItem: "Health & Wellness Social Media Templates Bundle + AI Research Course"
  },
  {
    id: 3,
    rating: 5,
    author: "Dr. Rajesh Gupta",
    date: "1 week ago",
    content: "Professional and time-saving! As a fitness trainer with zero design skills, I was struggling to create engaging posts. These templates are perfectly designed for health professionals. The exercise content and motivational quotes have helped me build real authority in my niche. Highly recommend!",
    verified: true,
    recommended: true,
    helpful: 142,
    profession: "Certified Fitness Trainer",
    images: 3,
    purchasedItem: "2,000+ Social Media Templates + 250 Viral Hooks"
  },
  {
    id: 4,
    rating: 5,
    author: "Dr. Amanda Wilson",
    date: "2 weeks ago",
    content: "Outstanding value! As a wellness practitioner, I needed professional content that would build trust with potential clients. This bundle exceeded all expectations! The human biology posts and did-you-know facts are incredibly well-researched. My appointment bookings have increased by 40% since using these templates.",
    verified: true,
    recommended: true,
    helpful: 98,
    profession: "Wellness Practitioner",
    images: 2,
    purchasedItem: "Complete Health & Wellness Social Media Bundle"
  },
  {
    id: 5,
    rating: 5,
    author: "Maria Rodriguez",
    date: "2 weeks ago",
    content: "Life-changing for my business! I run a nutrition clinic and was spending 15+ hours weekly on content creation. Now I can create professional posts in under 5 minutes! The variety of templates - from marketing posts to educational content - covers everything I need. The 30-day challenge bonus was the cherry on top!",
    verified: true,
    recommended: true,
    helpful: 156,
    profession: "Clinical Nutritionist",
    images: 5,
    purchasedItem: "Health & Wellness Templates + 30-Day Social Media Challenge"
  }
];

export const ReviewsSection = () => {
  return (
    <div className="space-y-6">
      {/* Enhanced Rating Summary */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl font-bold">4.9</span>
            </div>
            <div>
              <div className="text-lg font-semibold">Excellent</div>
              <div className="text-gray-600">Based on 1,247+ reviews</div>
            </div>
          </div>
          <div className="text-right">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-2">
              <Award className="w-4 h-4 mr-1" />
              Health Pros' Choice
            </Badge>
            <div className="text-sm text-gray-600">98% recommend this bundle</div>
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
                  style={{ width: stars === 5 ? '92%' : stars === 4 ? '6%' : '1.5%' }}
                ></div>
              </div>
              <span className="text-xs text-gray-600">
                {stars === 5 ? '1,147' : stars === 4 ? '75' : stars === 3 ? '18' : stars === 2 ? '4' : '3'}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-sm text-gray-600 flex items-center gap-2">
        <Verified className="w-4 h-4 text-blue-600" />
        All reviews are from verified health professionals
      </div>

      {/* Enhanced Rating Categories */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="text-2xl font-bold text-green-600">4.9/5</div>
          <div className="text-sm text-gray-600">Template Quality</div>
          <div className="text-xs text-green-600 mt-1">Outstanding</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-2xl font-bold text-blue-600">4.8/5</div>
          <div className="text-sm text-gray-600">Client Engagement</div>
          <div className="text-xs text-green-600 mt-1">Excellent</div>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-orange-50 to-red-50">
          <div className="text-2xl font-bold text-orange-600">4.9/5</div>
          <div className="text-sm text-gray-600">Time Savings</div>
          <div className="text-xs text-green-600 mt-1">Amazing</div>
        </Card>
      </div>

      {/* Reviews Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Health Professional Reviews</h3>
          <p className="text-sm text-gray-600">See what wellness experts are saying about our templates</p>
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
                  <span className="font-medium">📸 {review.images} photos of social media results</span>
                </div>
              )}

              {/* Purchased Item */}
              <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                <span className="font-medium">Purchased:</span> {review.purchasedItem}
              </div>

              {/* Review Footer */}
              <div className="flex items-center justify-between pt-3 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
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
        <p className="text-sm text-gray-600 mt-2">Showing 5 of 1,247+ reviews</p>
      </div>
    </div>
  );
};
