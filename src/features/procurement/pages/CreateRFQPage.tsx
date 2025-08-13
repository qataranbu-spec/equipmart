import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Plus, X } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

interface RFQRequirement {
  id: string;
  description: string;
  quantity: number;
  specifications: string;
  deliveryLocation: string;
  deliveryDate: Date | undefined;
}

export default function CreateRFQPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState<Date>();
  const [requirements, setRequirements] = useState<RFQRequirement[]>([
    {
      id: '1',
      description: '',
      quantity: 1,
      specifications: '',
      deliveryLocation: '',
      deliveryDate: undefined
    }
  ]);

  const categories = [
    'Heavy Machinery',
    'Construction Equipment',
    'Industrial Tools',
    'Transportation',
    'Materials',
    'Services'
  ];

  const addRequirement = () => {
    const newRequirement: RFQRequirement = {
      id: Date.now().toString(),
      description: '',
      quantity: 1,
      specifications: '',
      deliveryLocation: '',
      deliveryDate: undefined
    };
    setRequirements([...requirements, newRequirement]);
  };

  const removeRequirement = (id: string) => {
    if (requirements.length > 1) {
      setRequirements(requirements.filter(req => req.id !== id));
    }
  };

  const updateRequirement = (id: string, field: keyof RFQRequirement, value: any) => {
    setRequirements(requirements.map(req => 
      req.id === id ? { ...req, [field]: value } : req
    ));
  };

  const handleSubmit = (status: 'draft' | 'published') => {
    if (!title || !description || !category || !deadline) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically save to your backend
    console.log('Creating RFQ:', {
      title,
      description,
      category,
      budget: budget ? parseFloat(budget) : undefined,
      deadline,
      requirements: requirements.filter(req => req.description.trim()),
      status
    });

    toast({
      title: "Success",
      description: `RFQ ${status === 'draft' ? 'saved as draft' : 'published'} successfully.`,
    });

    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-foreground">Create Request for Quotation (RFQ)</h1>
            <p className="text-muted-foreground mt-2">
              Create a detailed RFQ to receive competitive bids from suppliers
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>RFQ Details</CardTitle>
              <CardDescription>
                Provide comprehensive information about your procurement requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">RFQ Title *</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g., Heavy Excavators for Construction Project"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your procurement needs in detail..."
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                  <Input
                    id="budget"
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <Label>Response Deadline *</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !deadline && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {deadline ? format(deadline, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={deadline}
                        onSelect={setDeadline}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <Label className="text-base font-semibold">Requirements</Label>
                  <Button onClick={addRequirement} size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Requirement
                  </Button>
                </div>

                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <Card key={req.id} className="border-l-4 border-l-primary/20">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-medium">Requirement {index + 1}</h4>
                          {requirements.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeRequirement(req.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <Label>Item Description</Label>
                            <Input
                              value={req.description}
                              onChange={(e) => updateRequirement(req.id, 'description', e.target.value)}
                              placeholder="Describe the item or service needed"
                            />
                          </div>
                          <div>
                            <Label>Quantity</Label>
                            <Input
                              type="number"
                              value={req.quantity}
                              onChange={(e) => updateRequirement(req.id, 'quantity', parseInt(e.target.value) || 1)}
                              min="1"
                            />
                          </div>
                          <div>
                            <Label>Delivery Location</Label>
                            <Input
                              value={req.deliveryLocation}
                              onChange={(e) => updateRequirement(req.id, 'deliveryLocation', e.target.value)}
                              placeholder="Delivery address"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label>Specifications</Label>
                            <Textarea
                              value={req.specifications}
                              onChange={(e) => updateRequirement(req.id, 'specifications', e.target.value)}
                              placeholder="Technical specifications, quality requirements, etc."
                              rows={3}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <Button onClick={() => handleSubmit('draft')} variant="outline" className="flex-1">
                  Save as Draft
                </Button>
                <Button onClick={() => handleSubmit('published')} className="flex-1">
                  Publish RFQ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}