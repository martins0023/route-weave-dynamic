
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bus, Car, MapPin, Route, TrainFront } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-transit-teal to-teal-700 text-white">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-montserrat text-3xl md:text-5xl font-bold leading-tight">
              Seamlessly connect to the best transport options
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-md">
              MobilityMesh optimizes your journey across all transport modes in real time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/journey">
                <Button size="lg" className="bg-white text-transit-teal hover:bg-white/90">
                  Plan Your Journey
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=600"
                alt="Urban transportation network"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-lg shadow-lg flex items-center gap-3 transform -translate-y-6">
                  <MapPin className="text-transit-teal" />
                  <div>
                    <div className="text-sm font-semibold text-gray-800">Fastest Route</div>
                    <div className="text-xs text-gray-600">23 min · 3 transfers · $2.75</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
              One platform, all your transit needs
            </h2>
            <p className="text-gray-600">
              MobilityMesh combines all transportation options to give you the most efficient routes based on your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 bg-transit-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Route className="text-transit-teal" />
                </div>
                <h3 className="font-montserrat text-lg font-semibold mb-2">Unified Journey Planner</h3>
                <p className="text-gray-600">
                  Real-time itineraries combining walking, e-scooters, buses, trains, and ride-hail services.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 bg-transit-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <MapPin className="text-transit-teal" />
                </div>
                <h3 className="font-montserrat text-lg font-semibold mb-2">AI Route Optimizer</h3>
                <p className="text-gray-600">
                  Multi-objective algorithm balancing ETA, fare, CO₂ emissions, and accessibility needs.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 bg-transit-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                  <Bus className="text-transit-teal" />
                </div>
                <h3 className="font-montserrat text-lg font-semibold mb-2">Live Update Engine</h3>
                <p className="text-gray-600">
                  Push notifications for service disruptions, crowding levels, and alternate route suggestions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
              How MobilityMesh Works
            </h2>
            <p className="text-gray-600">
              Get from point A to B with the optimal combination of transportation modes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            <div className="relative flex flex-col items-center text-center animate-slide-in">
              <div className="bg-transit-teal text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 z-10">
                1
              </div>
              <h3 className="font-montserrat text-lg font-semibold mb-2">Enter Destinations</h3>
              <p className="text-gray-600">
                Input your starting point and destination, along with your preferences.
              </p>
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-6"></div>
            </div>

            <div className="relative flex flex-col items-center text-center animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-transit-teal text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4 z-10">
                2
              </div>
              <h3 className="font-montserrat text-lg font-semibold mb-2">Compare Options</h3>
              <p className="text-gray-600">
                Review multiple route combinations optimized for time, cost, or environmental impact.
              </p>
              <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-6"></div>
            </div>

            <div className="flex flex-col items-center text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-transit-teal text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-montserrat text-lg font-semibold mb-2">Travel Seamlessly</h3>
              <p className="text-gray-600">
                Follow turn-by-turn navigation and receive real-time updates throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
              Trusted by Commuters Worldwide
            </h2>
            <p className="text-gray-600">
              See what people are saying about their experience with MobilityMesh.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "MobilityMesh saved me so much time on my commute. I discovered a combination of train and bike-share that cut 15 minutes off my daily travel."
                </p>
                <p className="font-semibold">Sarah T.</p>
                <p className="text-sm text-gray-500">Daily Commuter, Chicago</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "I love the live updates feature. When my train was delayed, MobilityMesh immediately suggested an alternative bus route."
                </p>
                <p className="font-semibold">Michael R.</p>
                <p className="text-sm text-gray-500">Tech Professional, San Francisco</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "As someone with mobility challenges, I appreciate that MobilityMesh always suggests accessible routes and provides detailed information about elevators and ramps."
                </p>
                <p className="font-semibold">Elena J.</p>
                <p className="text-sm text-gray-500">Accessibility Advocate, New York</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-transit-teal text-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
              Ready to optimize your transit experience?
            </h2>
            <p className="text-white/90 mb-8">
              Join thousands of commuters who are saving time and reducing stress with MobilityMesh.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/journey">
                <Button size="lg" className="bg-white text-transit-teal hover:bg-white/90">
                  Plan Your First Journey
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
