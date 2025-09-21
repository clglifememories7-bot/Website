import React from 'react';
import { ArrowLeft, MapPin, Home, Ruler, Calendar } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  area: string;
  type: 'land' | 'building';
  image: string;
  status: 'available' | 'sold' | 'upcoming';
  description: string;
  amenities: string[];
}

const Properties = () => {
  // Editable properties data - you can modify these details
  const properties: Property[] = [
    {
      id: 1,
      title: "Premium Residential Plot",
      location: "Jubilee Hills, Hyderabad",
      price: "₹2.5 Cr",
      area: "300 sq yards",
      type: "land",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "available",
      description: "Prime residential plot in the heart of Jubilee Hills with excellent connectivity.",
      amenities: ["Gated Community", "24/7 Security", "Underground Utilities", "Park Facing"]
    },
    {
      id: 2,
      title: "Luxury Villa",
      location: "Banjara Hills, Hyderabad",
      price: "₹4.2 Cr",
      area: "4500 sq ft",
      type: "building",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "available",
      description: "Stunning 4BHK villa with modern amenities and premium finishes.",
      amenities: ["Swimming Pool", "Garden", "Parking", "Modular Kitchen", "Gym"]
    },
    {
      id: 3,
      title: "Commercial Plot",
      location: "HITEC City, Hyderabad",
      price: "₹8.5 Cr",
      area: "500 sq yards",
      type: "land",
      image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "available",
      description: "Strategic commercial plot in IT corridor with high appreciation potential.",
      amenities: ["IT Hub Location", "Metro Connectivity", "Shopping Malls Nearby", "Restaurants"]
    },
    {
      id: 4,
      title: "Modern Apartment",
      location: "Kondapur, Hyderabad",
      price: "₹1.8 Cr",
      area: "2200 sq ft",
      type: "building",
      image: "https://images.pexels.com/photos/1396118/pexels-photo-1396118.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "upcoming",
      description: "Contemporary 3BHK apartment with world-class amenities.",
      amenities: ["Clubhouse", "Swimming Pool", "Gym", "Children's Play Area", "Landscaped Gardens"]
    },
    {
      id: 5,
      title: "Farmhouse Plot",
      location: "Shamshabad, Hyderabad",
      price: "₹1.2 Cr",
      area: "1000 sq yards",
      type: "land",
      image: "https://images.pexels.com/photos/1396119/pexels-photo-1396119.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "available",
      description: "Spacious farmhouse plot perfect for weekend getaway or investment.",
      amenities: ["Peaceful Location", "Good Road Access", "Electricity Available", "Water Connection"]
    },
    {
      id: 6,
      title: "Duplex House",
      location: "Gachibowli, Hyderabad",
      price: "₹3.5 Cr",
      area: "3800 sq ft",
      type: "building",
      image: "https://images.pexels.com/photos/1396117/pexels-photo-1396117.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "sold",
      description: "Elegant duplex house with premium specifications and modern design.",
      amenities: ["Terrace Garden", "Home Theater", "Study Room", "Servant Quarter", "Car Parking"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-400 bg-green-400/20';
      case 'sold': return 'text-red-400 bg-red-400/20';
      case 'upcoming': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-red-950/20 to-gray-950 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={handleBackClick}
              className="flex items-center space-x-2 text-white/90 hover:text-red-400 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 bg-clip-text text-transparent">
              Available Properties
            </h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="bg-gradient-to-br from-gray-900/80 to-red-950/30 rounded-2xl overflow-hidden border border-red-600/30 hover:border-red-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer backdrop-blur-sm"
            >
              {/* Property Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
                    {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    {property.type === 'land' ? <Ruler className="h-3 w-3 mr-1" /> : <Home className="h-3 w-3 mr-1" />}
                    {property.type === 'land' ? 'Land' : 'Building'}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{property.title}</h3>
                
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin className="h-4 w-4 mr-2 text-red-400" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-red-400">{property.price}</span>
                  <span className="text-gray-300 text-sm">{property.area}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{property.description}</p>

                {/* Amenities */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.slice(0, 3).map((amenity, index) => (
                      <span 
                        key={index}
                        className="bg-red-600/20 text-red-300 px-2 py-1 rounded-md text-xs"
                      >
                        {amenity}
                      </span>
                    ))}
                    {property.amenities.length > 3 && (
                      <span className="text-gray-400 text-xs">+{property.amenities.length - 3} more</span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    property.status === 'available' 
                      ? 'bg-red-600 hover:bg-transparent hover:border-2 hover:border-red-400 hover:text-red-400 text-white' 
                      : property.status === 'upcoming'
                      ? 'bg-yellow-600 hover:bg-transparent hover:border-2 hover:border-yellow-400 hover:text-yellow-400 text-white'
                      : 'bg-gray-600 cursor-not-allowed text-gray-300'
                  }`}
                  disabled={property.status === 'sold'}
                >
                  {property.status === 'available' ? 'View Details' : 
                   property.status === 'upcoming' ? 'Coming Soon' : 'Sold Out'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-red-950/30 to-gray-900/30 border-t border-red-600/30 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Interested in Any Property?</h2>
          <p className="text-gray-300 mb-6">Contact us for site visits, documentation, and personalized assistance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-transparent hover:border-2 hover:border-red-400 hover:text-red-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Schedule Site Visit
            </button>
            <button className="border-2 border-red-400 text-red-400 hover:bg-transparent hover:border-white hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Get Price Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;