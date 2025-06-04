
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bus, TrainFront, AlertTriangle } from 'lucide-react';

const Updates = () => {
  const [currentTab, setCurrentTab] = useState("all");
  
  const alerts = [
    {
      id: 1,
      type: "delay",
      service: "subway",
      line: "Blue Line",
      title: "Delays on Blue Line",
      description: "Trains running 10-15 minutes behind schedule due to signal issues.",
      severity: "medium",
      time: "10:23 AM",
      date: "Today"
    },
    {
      id: 2,
      type: "closure",
      service: "subway",
      line: "Green Line",
      title: "Station Closure",
      description: "Central Station is closed for emergency repairs. Please use alternative stations.",
      severity: "high",
      time: "8:45 AM",
      date: "Today"
    },
    {
      id: 3,
      type: "delay",
      service: "bus",
      line: "Route 42",
      title: "Bus Route Detour",
      description: "Due to road construction, Route 42 is detouring via Main St and 5th Ave.",
      severity: "low",
      time: "9:15 AM",
      date: "Today"
    },
    {
      id: 4,
      type: "service",
      service: "bus",
      line: "Express 8",
      title: "Additional Service",
      description: "Extra buses added to Express 8 route during rush hour (4-6pm).",
      severity: "info",
      time: "8:00 AM",
      date: "Today"
    },
    {
      id: 5,
      type: "delay",
      service: "subway",
      line: "Red Line",
      title: "Minor Delays",
      description: "Trains experiencing minor delays due to high passenger volume.",
      severity: "low",
      time: "4:30 PM",
      date: "Yesterday"
    }
  ];
  
  const filteredAlerts = currentTab === "all" 
    ? alerts 
    : alerts.filter(alert => alert.service === currentTab);
  
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <h1 className="font-montserrat text-2xl md:text-3xl font-bold">Live Service Updates</h1>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex gap-1 items-center">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Subway Status: Good Service
          </Badge>
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 flex gap-1 items-center">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            Bus Status: Minor Delays
          </Badge>
        </div>
      </div>
      
      <Card className="mb-8">
        <CardHeader className="pb-3">
          <Tabs defaultValue="all" className="w-full" onValueChange={setCurrentTab}>
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="all" className={currentTab === "all" ? "bg-transit-teal text-white" : ""}>All Updates</TabsTrigger>
              <TabsTrigger value="subway" className={currentTab === "subway" ? "bg-transit-teal text-white" : ""}>
                <TrainFront className="w-4 h-4 mr-2" />
                Subway
              </TabsTrigger>
              <TabsTrigger value="bus" className={currentTab === "bus" ? "bg-transit-teal text-white" : ""}>
                <Bus className="w-4 h-4 mr-2" />
                Bus
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
      </Card>
      
      <div className="space-y-4">
        {filteredAlerts.map(alert => (
          <Card key={alert.id} className="overflow-hidden animate-fade-in">
            <CardContent className="p-0">
              <div className="grid grid-cols-12">
                <div 
                  className={`col-span-1 flex items-center justify-center ${
                    alert.severity === 'high' ? 'bg-red-500' :
                    alert.severity === 'medium' ? 'bg-warning-amber' :
                    alert.severity === 'low' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`}
                >
                  <AlertTriangle className="text-white w-6 h-6" />
                </div>
                
                <div className="col-span-11 p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{alert.title}</h3>
                        <Badge variant="outline" className="font-normal">
                          {alert.line}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mt-1">{alert.description}</p>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-gray-500">{alert.time}</span>
                      <span className="text-sm text-gray-500">{alert.date}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-transit-teal/10 text-transit-teal hover:bg-transit-teal/20">
                      View Affected Routes
                    </Badge>
                    <Badge variant="secondary" className="bg-transit-teal/10 text-transit-teal hover:bg-transit-teal/20">
                      Alternative Options
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 border-t pt-8">
        <h2 className="font-montserrat text-xl font-semibold mb-4">Service Status by Line</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <TrainFront className="w-5 h-5 mr-2" />
                Subway Lines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-1 border-b">
                  <div className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-blue-500 mr-3"></span>
                    <span>Blue Line</span>
                  </div>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Delays
                  </Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b">
                  <div className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-green-500 mr-3"></span>
                    <span>Green Line</span>
                  </div>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    Station Closure
                  </Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b">
                  <div className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-red-500 mr-3"></span>
                    <span>Red Line</span>
                  </div>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Minor Delays
                  </Badge>
                </li>
                <li className="flex justify-between items-center py-1">
                  <div className="flex items-center">
                    <span className="h-4 w-4 rounded-full bg-orange-500 mr-3"></span>
                    <span>Orange Line</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Good Service
                  </Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center">
                <Bus className="w-5 h-5 mr-2" />
                Bus Routes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex justify-between items-center py-1 border-b">
                  <span>Route 42</span>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    Detour
                  </Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b">
                  <span>Express 8</span>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Extra Service
                  </Badge>
                </li>
                <li className="flex justify-between items-center py-1 border-b">
                  <span>Route 67</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Good Service
                  </Badge>
                </li>
                <li className="flex justify-between items-center py-1">
                  <span>Route 15</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Good Service
                  </Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Button className="bg-transit-teal hover:bg-transit-teal/90">
          Subscribe to Service Updates
        </Button>
      </div>
    </div>
  );
};

export default Updates;
