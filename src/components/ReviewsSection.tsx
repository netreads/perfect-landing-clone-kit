
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const reviews = [
  {
    id: 1,
    rating: 5,
    author: "Julio Saavedra",
    date: "30 Mar, 2025",
    content: "Great quality product! I strongly recommend it. Thanks a lot.",
    verified: true,
    recommended: true
  },
  {
    id: 2,
    rating: 5,
    author: "Tinsley",
    date: "08 Jan, 2025",
    content: "These are well crafted and high quality, I highly recommend these Instagram Templates! Happy with my purchase, thank you :)",
    verified: true,
    recommended: true
  },
  {
    id: 3,
    rating: 5,
    author: "pridiemo",
    date: "12 Jun, 2025",
    content: "Very helpful and looking forward to buy more materials in Spanish",
    verified: true,
    recommended: true,
    purchasedItem: "Depression Worksheets, Mental Health Therapy Worksheets, Mental Health Plan, Therapy, Psychology, Mental..."
  },
  {
    id: 4,
    rating: 5,
    author: "pridiemo",
    date: "12 Jun, 2025",
    content: "Very helpful material and a plus that it is in Spanish",
    verified: true,
    recommended: true,
    purchasedItem: "Mindfulness Worksheets , Calming Your Mind Worksheets, Positive Mind, Mental Health Plan, Therapy, Mindful..."
  }
];

export const ReviewsSection = () => {
  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          <span className="text-2xl font-bold">5 out of 5</span>
          <span className="text-gray-600">(104 reviews)</span>
        </div>
      </div>

      <div className="text-sm text-gray-600">
        All reviews are from verified buyers
      </div>

      {/* Rating Breakdown */}
      <div className="grid grid-cols-3 gap-4 max-w-md">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-orange-500">5/5</div>
          <div className="text-sm text-gray-600">Item quality</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-orange-500">5/5</div>
          <div className="text-sm text-gray-600">Delivery</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-orange-500">5/5</div>
          <div className="text-sm text-gray-600">Customer service</div>
        </Card>
      </div>

      {/* Reviews Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Reviews for this shop</h3>
        <Select defaultValue="suggested">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="suggested">Sort by: Suggested</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="highest">Highest rated</SelectItem>
            <SelectItem value="lowest">Lowest rated</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6">
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
                  <span className="font-medium">{review.rating}</span>
                  {review.verified && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      This item
                    </span>
                  )}
                  {review.recommended && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Recommends
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">{review.date}</div>
              </div>

              {/* Review Content */}
              <div className="text-gray-700">{review.content}</div>

              {/* Purchased Item */}
              {review.purchasedItem && (
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Purchased item:</span> {review.purchasedItem}
                </div>
              )}

              {/* Review Footer */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <span className="font-medium">{review.author}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
