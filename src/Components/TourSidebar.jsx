import React from 'react';
import { X, Save, Trash2 } from "lucide-react";

const TourSidebar = ({ 
  editedTour, 
  onClose, 
  onInputChange, 
  onArrayInputChange, 
  onSave, 
  onDelete,
  formatArrayField 
}) => {
  return (
    <div className="fixed inset-y-0 right-0 w-[600px] bg-gray-800 shadow-xl z-50 overflow-y-auto border-l border-gray-700">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-bold text-white">EDIT TOUR</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {editedTour && (
          <div className="space-y-2 text-gray-300 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-0.5 text-gray-400">Title</label>
                <input
                  name="title"
                  value={editedTour.title}
                  onChange={onInputChange}
                  className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-0.5 text-gray-400">Slug</label>
                <input
                  name="slug"
                  value={editedTour.slug}
                  onChange={onInputChange}
                  className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-0.5 text-gray-400">Location</label>
                <input
                  name="location"
                  value={editedTour.location}
                  onChange={onInputChange}
                  className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-0.5 text-gray-400">Duration</label>
                <input
                  name="duration"
                  value={editedTour.duration}
                  onChange={onInputChange}
                  className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-0.5 text-gray-400">Description</label>
              <input
                name="description"
                value={editedTour.description}
                onChange={onInputChange}
                className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-0.5 text-gray-400">Price</label>
                <input
                  name="price"
                  type="number"
                  value={editedTour.price}
                  onChange={onInputChange}
                  className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium mb-0.5 text-gray-400">Discount</label>
                <input
                  name="discount"
                  type="number"
                  value={editedTour.discount}
                  onChange={onInputChange}
                  className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-0.5 text-gray-400">Long Description</label>
              <textarea
                name="long_description"
                value={editedTour.long_description}
                onChange={onInputChange}
                rows={3}
                className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-0.5 text-gray-400">Includes</label>
              <textarea
                value={formatArrayField(editedTour.includes)}
                onChange={(e) => onArrayInputChange(e, 'includes')}
                rows={2}
                className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-0.5 text-gray-400">Excludes</label>
              <textarea
                value={formatArrayField(editedTour.excludes)}
                onChange={(e) => onArrayInputChange(e, 'excludes')}
                rows={2}
                className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-0.5 text-gray-400">Itinerary</label>
              <textarea
                value={formatArrayField(editedTour.itinerary_days)}
                onChange={(e) => onArrayInputChange(e, 'itinerary_days')}
                rows={4}
                className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-medium mb-0.5 text-gray-400">Category</label>
              <input
                name="category"
                value={editedTour.category}
                onChange={onInputChange}
                className="w-full px-2 py-1 text-xs bg-gray-700 border border-gray-600 rounded text-white"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-3 border-t border-gray-700">
              <button 
                onClick={onDelete}
                className="flex items-center gap-1 px-3 py-1 text-xs bg-red-600 hover:bg-red-700 rounded text-white"
              >
                <Trash2 className="h-3 w-3" />
                Delete
              </button>
              <button 
                onClick={onSave}
                className="flex items-center gap-1 px-3 py-1 text-xs bg-green-600 hover:bg-green-700 rounded text-white"
              >
                <Save className="h-3 w-3" />
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TourSidebar;