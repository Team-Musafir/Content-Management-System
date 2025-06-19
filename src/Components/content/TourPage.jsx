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
      long_description: "Immersive cultural tour through India's diverse heritage, visiting historical sites and experiencing local traditions",
      hero_img: "/images/tour1.jpg",
      includes: ["Accommodation", "Meals", "Guide"],
      excludes: ["Flights", "Insurance"],
      itinerary_days: ["Day 1: Arrival", "Day 2: City Tour", "Day 3: Cultural Show", "Day 4: Departure"],
      gallery_images: ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"],
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
    <div className="p-1 overflow-x-auto text-gray-100 min-h-screen">
      <div>
        <table className="min-w-full divide-y">
          <thead>
            <tr className='align-middle'>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Title</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Slug</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Location</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Duration</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Description</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Price</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Long Description</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider  align-middle">Hero Image</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Includes</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Excludes</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Itinerary Days</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Gallery Images</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Category</th>
              <th className="px-6 pb-3 whitespace-nowrap text-left text-xs font-medium text-gray-300 uppercase tracking-wider align-middle">Discount</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {tours.map((tour) => (
              <tr key={tour.id}>
                <td className="px-6 py-4 align-middle whitespace-nowrap text-ellipsis max-w-[120px] text-xs font-medium text-white">{tour.title}</td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] text-xs text-gray-300">{tour.slug}</td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] text-xs text-white">{tour.location}</td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[80px] text-xs text-white">{tour.duration}</td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] text-xs text-gray-300">{tour.description}</td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[80px] text-xs text-green-400">${tour.price}</td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] text-xs text-gray-300" title={tour.long_description}>
                  {tour.long_description}
                </td>
                <td className="px-6 py-4 align-middle whitespace-nowrap">
                  <img src={tour.hero_img} alt="Hero" className="h-10 w-10 rounded-full object-cover mx-auto"/>
                </td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] text-sm text-gray-300" title={formatArrayField(tour.includes)}>
                  {formatArrayField(tour.includes)}
                </td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] text-sm text-gray-300" title={formatArrayField(tour.excludes)}>
                  {formatArrayField(tour.excludes)}
                </td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] text-sm text-gray-300" title={formatArrayField(tour.itinerary_days)}>
                  {formatArrayField(tour.itinerary_days)}
                </td>
                <td className="px-6 py-4 align-middle whitespace-nowrap">
                  <div className="flex space-x-1 justify-center">
                    {tour.gallery_images.slice(0, 3).map((img, i) => (
                      <img key={i} src={img} alt={`Gallery ${i}`} className="h-8 w-8 rounded object-cover"/>
                    ))}
                    {tour.gallery_images.length > 3 && (
                      <span className="text-xs text-gray-500 self-center">+{tour.gallery_images.length - 3}</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[100px] text-sm text-white">{tour.category}</td>
                <td className="px-6 py-4 align-middle whitespace-nowrap overflow-hidden text-ellipsis max-w-[80px] text-sm text-yellow-400">{tour.discount}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}