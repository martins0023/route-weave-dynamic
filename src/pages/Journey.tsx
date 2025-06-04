import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { MapPin, Clock, DollarSign, Leaf, Bus, Car, TrainFront } from 'lucide-react';

const Journey = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [priorityPreference, setPriorityPreference] = useState('balanced');
  const [accessibilityNeeded, setAccessibilityNeeded] = useState(false);
  const [ecoFriendly, setEcoFriendly] = useState(false);
  const [showRoutes, setShowRoutes] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would fetch routes from an API
    setShowRoutes(true);
  };
  
  const mockRoutes = [
    {
      id: 1,
      name: 'Fastest Route',
      duration: '23 min',
      cost: '$2.75',
      emissions: 'Low',
      modes: ['walking', 'subway', 'walking'],
      steps: [
        { mode: 'walking', duration: '5 min', description: 'Walk to Central Station' },
        { mode: 'subway', duration: '12 min', description: 'Take Blue Line to Market St.' },
        { mode: 'walking', duration: '6 min', description: 'Walk to final destination' }
      ]
    },
    {
      id: 2,
      name: 'Cost-Effective Route',
      duration: '30 min',
      cost: '$1.50',
      emissions: 'Medium',
      modes: ['walking', 'bus', 'walking'],
      steps: [
        { mode: 'walking', duration: '7 min', description: 'Walk to Main St. bus stop' },
        { mode: 'bus', duration: '18 min', description: 'Take Bus #42 to Commerce Ave.' },
        { mode: 'walking', duration: '5 min', description: 'Walk to final destination' }
      ]
    },
    {
      id: 3,
      name: 'Eco-Friendly Route',
      duration: '35 min',
      cost: '$3.50',
      emissions: 'Very Low',
      modes: ['walking', 'bike-sharing', 'walking'],
      steps: [
        { mode: 'walking', duration: '3 min', description: 'Walk to bike station' },
        { mode: 'bike-sharing', duration: '27 min', description: 'Ride bike to Downtown' },
        { mode: 'walking', duration: '5 min', description: 'Walk to final destination' }
      ]
    }
  ];

  const priorityOptions = [
    { value: 'fastest', label: 'Time', icon: <Clock className="w-4 h-4" /> },
    { value: 'cheapest', label: 'Cost', icon: <DollarSign className="w-4 h-4" /> },
    { value: 'eco', label: 'Eco', icon: <Leaf className="w-4 h-4" /> },
    { value: 'balanced', label: 'Balanced', icon: <TrainFront className="w-4 h-4" /> },
  ];
  
  return (
    <div className="container py-8">
      <h1 className="font-montserrat text-2xl md:text-3xl font-bold mb-6">Plan Your Journey</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <form onSubmit={handleSearch}>
            <div className="grid gap-6">
              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-transit-teal w-5 h-5" />
                  <Label htmlFor="origin">Origin</Label>
                </div>
                <Input
                  id="origin"
                  placeholder="Enter your starting point"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid gap-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-transit-teal w-5 h-5" />
                  <Label htmlFor="destination">Destination</Label>
                </div>
                <Input
                  id="destination"
                  placeholder="Enter your destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid gap-4">
                <Label>Optimization Priority</Label>
                <Tabs value={priorityPreference} onValueChange={setPriorityPreference}>
                  <TabsList className="grid grid-cols-4 w-full">
                    {priorityOptions.map((option) => (
                      <TabsTrigger 
                        key={option.value}
                        value={option.value}
                        className="data-[state=active]:bg-transit-teal data-[state=active]:text-white"
                      >
                        <div className="flex flex-col items-center space-y-1">
                          {option.icon}
                          <span>{option.label}</span>
                        </div>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="grid gap-4">
                <Label>Preferences</Label>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="accessibility" 
                      checked={accessibilityNeeded}
                      onCheckedChange={setAccessibilityNeeded}
                    />
                    <Label htmlFor="accessibility">Wheelchair accessible routes only</Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="eco" 
                      checked={ecoFriendly}
                      onCheckedChange={setEcoFriendly}
                    />
                    <Label htmlFor="eco">Prioritize low-emission transportation</Label>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="bg-transit-teal hover:bg-transit-teal/90 w-full">
                Find Routes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
      {showRoutes && (
        <div className="animate-fade-in">
          <h2 className="font-montserrat text-xl font-semibold mb-4">Available Routes</h2>
          
          <div className="grid gap-6">
            {mockRoutes.map((route) => (
              <Card key={route.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardHeader className="bg-gray-50 py-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-montserrat text-lg">{route.name}</CardTitle>
                    <Button className="bg-transit-teal hover:bg-transit-teal/90">Select</Button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="flex items-center">
                      <Clock className="text-transit-teal w-5 h-5 mr-2" />
                      <span>{route.duration}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <DollarSign className="text-transit-teal w-5 h-5 mr-2" />
                      <span>{route.cost}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Leaf className="text-transit-teal w-5 h-5 mr-2" />
                      <span>CO₂: {route.emissions}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Journey Details</h4>
                    <div className="space-y-3">
                      {route.steps.map((step, index) => (
                        <div key={index} className="flex items-start">
                          {step.mode === 'walking' && <MapPin className="text-gray-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />}
                          {step.mode === 'subway' && <TrainFront className="text-blue-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />}
                          {step.mode === 'bus' && <Bus className="text-green-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />}
                          {step.mode === 'bike-sharing' && <Car className="text-orange-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />}
                          <div>
                            <div className="font-medium">{step.description}</div>
                            <div className="text-sm text-gray-500">{step.duration}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Journey;
