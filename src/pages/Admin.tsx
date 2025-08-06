import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Settings, 
  Plane, 
  Train, 
  Building2, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Users,
  BarChart3
} from 'lucide-react';

interface ApiConfig {
  id: string;
  api_type: 'irctc' | 'flight' | 'hotel';
  api_name: string;
  api_key: string | null;
  api_secret: string | null;
  base_url: string | null;
  is_active: boolean;
  configuration: any;
  created_at: string;
}

interface HotelProperty {
  id: string;
  hotel_name: string;
  description: string | null;
  address: string;
  city: string;
  state: string;
  star_rating: number | null;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
}

export default function Admin() {
  const { user, profile, loading, isAdmin } = useAuth();
  const { toast } = useToast();
  
  const [apiConfigs, setApiConfigs] = useState<ApiConfig[]>([]);
  const [hotelProperties, setHotelProperties] = useState<HotelProperty[]>([]);
  const [showApiForm, setShowApiForm] = useState(false);
  const [editingApi, setEditingApi] = useState<ApiConfig | null>(null);
  
  const [newApiConfig, setNewApiConfig] = useState({
    api_type: 'flight' as 'irctc' | 'flight' | 'hotel',
    api_name: '',
    api_key: '',
    api_secret: '',
    base_url: '',
    is_active: true,
    configuration: '{}'
  });

  useEffect(() => {
    if (isAdmin) {
      fetchApiConfigs();
      fetchHotelProperties();
    }
  }, [isAdmin]);

  const fetchApiConfigs = async () => {
    const { data, error } = await supabase
      .from('api_configurations')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch API configurations",
        variant: "destructive"
      });
    } else {
      setApiConfigs((data || []) as ApiConfig[]);
    }
  };

  const fetchHotelProperties = async () => {
    const { data, error } = await supabase
      .from('hotel_properties')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      toast({
        title: "Error", 
        description: "Failed to fetch hotel properties",
        variant: "destructive"
      });
    } else {
      setHotelProperties((data || []) as HotelProperty[]);
    }
  };

  const handleSaveApiConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const configData = {
      ...newApiConfig,
      configuration: JSON.parse(newApiConfig.configuration || '{}'),
      created_by: user?.id
    };

    const { error } = editingApi
      ? await supabase
          .from('api_configurations')
          .update(configData)
          .eq('id', editingApi.id)
      : await supabase
          .from('api_configurations')
          .insert([configData]);

    if (error) {
      toast({
        title: "Error",
        description: `Failed to ${editingApi ? 'update' : 'create'} API configuration`,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: `API configuration ${editingApi ? 'updated' : 'created'} successfully`
      });
      
      setShowApiForm(false);
      setEditingApi(null);
      setNewApiConfig({
        api_type: 'flight',
        api_name: '',
        api_key: '',
        api_secret: '',
        base_url: '',
        is_active: true,
        configuration: '{}'
      });
      fetchApiConfigs();
    }
  };

  const handleDeleteApiConfig = async (id: string) => {
    const { error } = await supabase
      .from('api_configurations')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete API configuration",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "API configuration deleted successfully"
      });
      fetchApiConfigs();
    }
  };

  const handleToggleApiStatus = async (id: string, isActive: boolean) => {
    const { error } = await supabase
      .from('api_configurations')
      .update({ is_active: isActive })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update API status",
        variant: "destructive"
      });
    } else {
      fetchApiConfigs();
    }
  };

  const handleVerifyHotel = async (id: string, isVerified: boolean) => {
    const { error } = await supabase
      .from('hotel_properties')
      .update({ is_verified: isVerified })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update hotel verification",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: `Hotel ${isVerified ? 'verified' : 'unverified'} successfully`
      });
      fetchHotelProperties();
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="gradient-hero rounded-lg p-2">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Admin Panel</h1>
                <p className="text-muted-foreground">Manage your travel platform</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-primary/10">
              Administrator
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="apis" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="apis">API Management</TabsTrigger>
            <TabsTrigger value="hotels">Hotel Properties</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="apis" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">API Configurations</h2>
                <p className="text-muted-foreground">Manage IRCTC, Flight, and Hotel APIs</p>
              </div>
              <Button onClick={() => setShowApiForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add API Configuration
              </Button>
            </div>

            {showApiForm && (
              <Card>
                <CardHeader>
                  <CardTitle>{editingApi ? 'Edit' : 'Add'} API Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSaveApiConfig} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>API Type</Label>
                        <Select
                          value={newApiConfig.api_type}
                          onValueChange={(value) => setNewApiConfig(prev => ({
                            ...prev,
                            api_type: value as 'irctc' | 'flight' | 'hotel'
                          }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="flight">Flight API</SelectItem>
                            <SelectItem value="irctc">IRCTC API</SelectItem>
                            <SelectItem value="hotel">Hotel API</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>API Name</Label>
                        <Input
                          placeholder="e.g., Amadeus Flight API"
                          value={newApiConfig.api_name}
                          onChange={(e) => setNewApiConfig(prev => ({
                            ...prev,
                            api_name: e.target.value
                          }))}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>API Key</Label>
                        <Input
                          type="password"
                          placeholder="Enter API key"
                          value={newApiConfig.api_key}
                          onChange={(e) => setNewApiConfig(prev => ({
                            ...prev,
                            api_key: e.target.value
                          }))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>API Secret</Label>
                        <Input
                          type="password"
                          placeholder="Enter API secret"
                          value={newApiConfig.api_secret}
                          onChange={(e) => setNewApiConfig(prev => ({
                            ...prev,
                            api_secret: e.target.value
                          }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Base URL</Label>
                      <Input
                        placeholder="https://api.example.com"
                        value={newApiConfig.base_url}
                        onChange={(e) => setNewApiConfig(prev => ({
                          ...prev,
                          base_url: e.target.value
                        }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Configuration (JSON)</Label>
                      <Textarea
                        placeholder='{"timeout": 30000, "retries": 3}'
                        value={newApiConfig.configuration}
                        onChange={(e) => setNewApiConfig(prev => ({
                          ...prev,
                          configuration: e.target.value
                        }))}
                        rows={4}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={newApiConfig.is_active}
                        onCheckedChange={(checked) => setNewApiConfig(prev => ({
                          ...prev,
                          is_active: checked
                        }))}
                      />
                      <Label>Active</Label>
                    </div>

                    <div className="flex gap-2">
                      <Button type="submit">
                        {editingApi ? 'Update' : 'Create'} Configuration
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setShowApiForm(false);
                          setEditingApi(null);
                        }}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {apiConfigs.map((config) => (
                <Card key={config.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="gradient-hero rounded-lg p-2">
                          {config.api_type === 'flight' && <Plane className="h-5 w-5 text-white" />}
                          {config.api_type === 'irctc' && <Train className="h-5 w-5 text-white" />}
                          {config.api_type === 'hotel' && <Building2 className="h-5 w-5 text-white" />}
                        </div>
                        <div>
                          <h3 className="font-semibold">{config.api_name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {config.api_type.toUpperCase()} API
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={config.is_active ? "default" : "secondary"}>
                          {config.is_active ? "Active" : "Inactive"}
                        </Badge>
                        <Switch
                          checked={config.is_active}
                          onCheckedChange={(checked) => handleToggleApiStatus(config.id, checked)}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setEditingApi(config);
                            setNewApiConfig({
                              api_type: config.api_type,
                              api_name: config.api_name,
                              api_key: config.api_key || '',
                              api_secret: config.api_secret || '',
                              base_url: config.base_url || '',
                              is_active: config.is_active,
                              configuration: JSON.stringify(config.configuration, null, 2)
                            });
                            setShowApiForm(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteApiConfig(config.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hotels" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Hotel Properties</h2>
              <p className="text-muted-foreground">Review and verify hotel registrations</p>
            </div>

            <div className="grid gap-4">
              {hotelProperties.map((hotel) => (
                <Card key={hotel.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{hotel.hotel_name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {hotel.address}, {hotel.city}, {hotel.state}
                        </p>
                        {hotel.star_rating && (
                          <div className="flex items-center mt-1">
                            {"★".repeat(hotel.star_rating)} 
                            <span className="ml-2 text-sm text-muted-foreground">
                              {hotel.star_rating} Star
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={hotel.is_verified ? "default" : "secondary"}>
                          {hotel.is_verified ? "Verified" : "Pending"}
                        </Badge>
                        <Badge variant={hotel.is_active ? "default" : "destructive"}>
                          {hotel.is_active ? "Active" : "Inactive"}
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleVerifyHotel(hotel.id, !hotel.is_verified)}
                        >
                          {hotel.is_verified ? "Unverify" : "Verify"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Management
                </CardTitle>
                <CardDescription>
                  Manage user accounts and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">User management features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Analytics Dashboard
                </CardTitle>
                <CardDescription>
                  View platform performance and statistics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}