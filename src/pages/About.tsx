
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-transit-teal text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-6">
              About MobilityMesh
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              We're reimagining urban mobility by connecting all transit options into one seamless network.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                MobilityMesh was founded with a simple but powerful vision: to transform urban transportation by creating a unified mobility network that optimizes travel across all available transit options.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that efficient, accessible, and sustainable mobility is a right, not a privilege. By leveraging cutting-edge technology and real-time data, we're working to eliminate transportation barriers and reduce the environmental impact of urban travel.
              </p>
              <p className="text-gray-600">
                Our AI-powered platform continually learns from user feedback and transit patterns, creating a dynamic network that adapts to the ever-changing pulse of city movement.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800"
                alt="Urban landscape"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-transit-teal/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-transit-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-montserrat text-lg font-semibold mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We're constantly developing new ways to optimize travel networks and improve the user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-transit-teal/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-transit-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-montserrat text-lg font-semibold mb-2">
                  Inclusivity
                </h3>
                <p className="text-gray-600">
                  We're committed to making transportation accessible for everyone, regardless of physical ability or economic status.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-transit-teal/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-transit-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-montserrat text-lg font-semibold mb-2">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We prioritize eco-friendly transit options and work to reduce the carbon footprint of urban mobility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "CEO & Co-founder",
                bio: "Alex has 15+ years of experience in transportation engineering and urban planning.",
                image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=300&h=300"
              },
              {
                name: "Sarah Johnson",
                role: "CTO",
                bio: "Sarah leads our technology team with expertise in AI, machine learning, and distributed systems.",
                image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=300&h=300"
              },
              {
                name: "Miguel Rodriguez",
                role: "Chief Innovation Officer",
                bio: "Miguel focuses on developing new transit solutions and partnerships with transportation providers.",
                image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=300&h=300"
              }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="h-40 w-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-transit-teal mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Transit Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow flex items-center justify-center h-24">
                <div className="text-gray-400 font-semibold">Transit Partner {i}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
              Join the Mobility Revolution
            </h2>
            <p className="text-gray-600 mb-8">
              Experience the future of urban transportation with MobilityMesh. Plan your first journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/journey">
                <Button size="lg" className="bg-transit-teal hover:bg-transit-teal/90">
                  Plan Your Journey
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline">
                  Join MobilityMesh
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
