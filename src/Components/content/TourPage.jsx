import React from 'react';

export default function TourPage() {
  // Sample tour data - replace with your actual data
  const tours = [
    {
      id: 1,
      title: "Mera Bharat Yatra",
      slug: "mera-bharat-yatra",
      location: "Multiple destinations",
      duration: "14 days",
      description: "Cultural experience",
      price: 1499,
      long_description: "Immersive cultural tour...",
      hero_img: "/images/tour1.jpg",
      includes: ["Accommodation", "Meals", "Guide"],
      excludes: ["Flights", "Insurance"],
      itinerary_days: ["Day 1: Arrival", "Day 2: City Tour"],
      gallery_images: ["/img1.jpg", "/img2.jpg"],
      category: "Cultural",
      discount: 10
    },
    // Add more tours as needed
  ];

  // Function to format array fields
  const formatArrayField = (items) => {
    return items.join(", ");
  };

  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-6">Tour Management</h1>
      
      <div className="rounded-lg border overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Long Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hero Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Includes</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Excludes</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Itinerary Days</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gallery Images</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tours.map((tour) => (
              <tr key={tour.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tour.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tour.slug}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tour.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tour.duration}</td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{tour.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${tour.price}</td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{tour.long_description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <img src={tour.hero_img} alt="Hero" className="h-10 w-10 rounded-full object-cover"/>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{formatArrayField(tour.includes)}</td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{formatArrayField(tour.excludes)}</td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">{formatArrayField(tour.itinerary_days)}</td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                  <div className="flex space-x-1">
                    {tour.gallery_images.slice(0, 3).map((img, i) => (
                      <img key={i} src={img} alt={`Gallery ${i}`} className="h-8 w-8 rounded object-cover"/>
                    ))}
                    {tour.gallery_images.length > 3 && (
                      <span className="text-xs text-gray-500">+{tour.gallery_images.length - 3}</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tour.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tour.discount}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}