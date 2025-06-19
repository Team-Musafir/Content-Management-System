import React, { useState, useEffect } from 'react';
import TourSidebar from '../TourSidebar';

export default function TourPage() {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [editedTour, setEditedTour] = useState(null);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isSidebarOpen]);

  // Sample tour data
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
  ];

  const handleTourClick = (tour) => {
    setSelectedTour(tour);
    setEditedTour({ ...tour });
    setIsSidebarOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTour(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInputChange = (e, field) => {
    const { value } = e.target;
    setEditedTour(prev => ({
      ...prev,
      [field]: value.split(',').map(item => item.trim())
    }));
  };

  const saveChanges = () => {
    console.log("Saved changes:", editedTour);
    setIsSidebarOpen(false);
  };

  const deleteTour = () => {
    console.log("Deleting tour:", selectedTour.id);
    setIsSidebarOpen(false);
  };

  const formatArrayField = (items) => {
    return items.join(", ");
  };

  return (
    <div className="p-1 overflow-x-auto text-gray-100 min-h-screen ">
      <div className={`transition-all duration-200 ${isSidebarOpen ? 'mr-[600px]' : ''}`}>
        <table className="min-w-full divide-y ">
          <thead>
            <tr className='align-middle'>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Location</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Duration</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Price</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Hero Image</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Gallery</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Category</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {tours.map((tour) => (
              <tr 
                key={tour.id} 
                onClick={() => handleTourClick(tour)}
                className="cursor-pointer hover:bg-gray-800"
              >
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-xs font-medium text-white">{tour.title}</div>
                  <div className="text-xs text-gray-400">{tour.description}</div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-white">{tour.location}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-white">{tour.duration}</td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-green-400">${tour.price}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <img src={tour.hero_img} alt="Hero" className="h-8 w-8 rounded-full object-cover mx-auto"/>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="flex -space-x-1 justify-center">
                    {tour.gallery_images.slice(0, 3).map((img, i) => (
                      <img key={i} src={img} alt={`Gallery ${i}`} className="h-6 w-6 rounded object-cover border border-gray-700"/>
                    ))}
                    {tour.gallery_images.length > 3 && (
                      <span className="text-xs text-gray-500 self-center">+{tour.gallery_images.length - 3}</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-xs text-yellow-400">{tour.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isSidebarOpen && (
        <TourSidebar
          editedTour={editedTour}
          onClose={() => setIsSidebarOpen(false)}
          onInputChange={handleInputChange}
          onArrayInputChange={handleArrayInputChange}
          onSave={saveChanges}
          onDelete={deleteTour}
          formatArrayField={formatArrayField}
        />
      )}
    </div>
  );
}