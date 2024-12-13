import React, { useState } from 'react';
import { Star } from 'lucide-react';

const initialReviews = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent quality products and professional service. Highly recommended!',
    date: '2024-03-15'
  },
  {
    id: '2',
    name: 'Chaitanya',
    rating: 4,
    comment: 'Great variety of products and helpful staff. Will definitely come back.',
    date: '2024-03-10'
  },
  {
    id: '3',
    name: 'Suresh',
    rating: 5,
    comment: 'Best construction materials supplier in the area. Very reliable.',
    date: '2024-03-05'
  }
];

export function ReviewSection() {
  const [reviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New review submitted:', newReview);
    // Handle review submission
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Customer Reviews</h2>
        
        {/* Reviews Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{review.name}</span>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Leave a Review</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <div className="flex space-x-2 mt-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating })}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        rating <= newReview.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Review</label>
              <textarea
                id="comment"
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}