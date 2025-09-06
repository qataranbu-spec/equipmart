import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Filter, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { mockFinancingProducts } from '../../data/mockData';
import { FinancingProduct } from '../../types';

export default function ProductManagement() {
  const [products, setProducts] = useState(mockFinancingProducts);
  const [selectedProduct, setSelectedProduct] = useState<FinancingProduct | null>(null);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || product.type === filterType;
    return matchesSearch && matchesType;
  });

  const toggleProductStatus = (productId: string) => {
    setProducts(prev => prev.map(product => 
      product.id === productId 
        ? { ...product, active: !product.active }
        : product
    ));
  };

  const ProductForm = ({ product, onSave, onCancel }: {
    product?: FinancingProduct;
    onSave: (product: Partial<FinancingProduct>) => void;
    onCancel: () => void;
  }) => {
    const [formData, setFormData] = useState({
      name: product?.name || '',
      type: product?.type || 'loan',
      description: product?.description || '',
      minAmount: product?.minAmount || 0,
      maxAmount: product?.maxAmount || 0,
      minTerm: product?.minTerm || 12,
      maxTerm: product?.maxTerm || 84,
      interestRateMin: product?.interestRateMin || 0,
      interestRateMax: product?.interestRateMax || 0,
      creditScoreRequired: product?.creditScoreRequired || 600,
      downPaymentRequired: product?.downPaymentRequired || 0,
      processingFee: product?.processingFee || 0,
      earlyPaymentPenalty: product?.earlyPaymentPenalty || false,
      equipmentTypes: product?.equipmentTypes || [],
      features: product?.features || [],
      eligibilityCriteria: product?.eligibilityCriteria || []
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter product name"
              required
            />
          </div>
          <div>
            <Label htmlFor="type">Product Type</Label>
            <Select onValueChange={(value: 'loan' | 'lease' | 'insurance' | 'warranty') => 
              setFormData(prev => ({ ...prev, type: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select product type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="loan">Loan</SelectItem>
                <SelectItem value="lease">Lease</SelectItem>
                <SelectItem value="insurance">Insurance</SelectItem>
                <SelectItem value="warranty">Warranty</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Enter product description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="minAmount">Minimum Amount ($)</Label>
            <Input
              id="minAmount"
              type="number"
              value={formData.minAmount}
              onChange={(e) => setFormData(prev => ({ ...prev, minAmount: Number(e.target.value) }))}
              placeholder="Enter minimum amount"
            />
          </div>
          <div>
            <Label htmlFor="maxAmount">Maximum Amount ($)</Label>
            <Input
              id="maxAmount"
              type="number"
              value={formData.maxAmount}
              onChange={(e) => setFormData(prev => ({ ...prev, maxAmount: Number(e.target.value) }))}
              placeholder="Enter maximum amount"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="minTerm">Minimum Term (months)</Label>
            <Input
              id="minTerm"
              type="number"
              value={formData.minTerm}
              onChange={(e) => setFormData(prev => ({ ...prev, minTerm: Number(e.target.value) }))}
              placeholder="Enter minimum term"
            />
          </div>
          <div>
            <Label htmlFor="maxTerm">Maximum Term (months)</Label>
            <Input
              id="maxTerm"
              type="number"
              value={formData.maxTerm}
              onChange={(e) => setFormData(prev => ({ ...prev, maxTerm: Number(e.target.value) }))}
              placeholder="Enter maximum term"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="interestRateMin">Minimum Interest Rate (%)</Label>
            <Input
              id="interestRateMin"
              type="number"
              step="0.01"
              value={formData.interestRateMin}
              onChange={(e) => setFormData(prev => ({ ...prev, interestRateMin: Number(e.target.value) }))}
              placeholder="Enter minimum rate"
            />
          </div>
          <div>
            <Label htmlFor="interestRateMax">Maximum Interest Rate (%)</Label>
            <Input
              id="interestRateMax"
              type="number"
              step="0.01"
              value={formData.interestRateMax}
              onChange={(e) => setFormData(prev => ({ ...prev, interestRateMax: Number(e.target.value) }))}
              placeholder="Enter maximum rate"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="creditScoreRequired">Credit Score Required</Label>
            <Input
              id="creditScoreRequired"
              type="number"
              value={formData.creditScoreRequired}
              onChange={(e) => setFormData(prev => ({ ...prev, creditScoreRequired: Number(e.target.value) }))}
              placeholder="Enter minimum credit score"
            />
          </div>
          <div>
            <Label htmlFor="downPaymentRequired">Down Payment Required (%)</Label>
            <Input
              id="downPaymentRequired"
              type="number"
              value={formData.downPaymentRequired}
              onChange={(e) => setFormData(prev => ({ ...prev, downPaymentRequired: Number(e.target.value) }))}
              placeholder="Enter down payment percentage"
            />
          </div>
          <div>
            <Label htmlFor="processingFee">Processing Fee (%)</Label>
            <Input
              id="processingFee"
              type="number"
              step="0.01"
              value={formData.processingFee}
              onChange={(e) => setFormData(prev => ({ ...prev, processingFee: Number(e.target.value) }))}
              placeholder="Enter processing fee"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="earlyPaymentPenalty"
            checked={formData.earlyPaymentPenalty}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, earlyPaymentPenalty: checked }))}
          />
          <Label htmlFor="earlyPaymentPenalty">Early Payment Penalty</Label>
        </div>

        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            {product ? 'Update Product' : 'Create Product'}
          </Button>
        </div>
      </form>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Product Management</h1>
            <p className="text-muted-foreground">Manage your financing products and terms</p>
          </div>
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>Create New Product</DialogTitle>
                <DialogDescription>
                  Add a new financing product to your portfolio
                </DialogDescription>
              </DialogHeader>
              <ProductForm
                onSave={(productData) => {
                  const newProduct: FinancingProduct = {
                    id: `fp-${Date.now()}`,
                    companyId: 'fc-1',
                    companyName: 'Your Company',
                    active: true,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    ...productData
                  } as FinancingProduct;
                  setProducts(prev => [...prev, newProduct]);
                  setIsCreateDialogOpen(false);
                }}
                onCancel={() => setIsCreateDialogOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="loan">Loans</SelectItem>
              <SelectItem value="lease">Leases</SelectItem>
              <SelectItem value="insurance">Insurance</SelectItem>
              <SelectItem value="warranty">Warranty</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <TabsList>
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="table">Table View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription>{product.companyName}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={product.type === 'loan' ? 'default' : 'secondary'}>
                        {product.type}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleProductStatus(product.id)}
                      >
                        {product.active ? 
                          <Eye className="h-4 w-4 text-green-600" /> : 
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        }
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Amount Range:</span>
                      <span className="font-medium">
                        ${product.minAmount.toLocaleString()} - ${product.maxAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Interest Rate:</span>
                      <span className="font-medium">
                        {product.interestRateMin}% - {product.interestRateMax}%
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Term:</span>
                      <span className="font-medium">
                        {product.minTerm} - {product.maxTerm} months
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog open={isEditDialogOpen && selectedProduct?.id === product.id} 
                            onOpenChange={(open) => {
                              setIsEditDialogOpen(open);
                              if (open) setSelectedProduct(product);
                            }}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Edit Product</DialogTitle>
                          <DialogDescription>
                            Update your financing product details
                          </DialogDescription>
                        </DialogHeader>
                        {selectedProduct && (
                          <ProductForm
                            product={selectedProduct}
                            onSave={(productData) => {
                              setProducts(prev => prev.map(p => 
                                p.id === selectedProduct.id 
                                  ? { ...p, ...productData, updatedAt: new Date().toISOString() }
                                  : p
                              ));
                              setIsEditDialogOpen(false);
                              setSelectedProduct(null);
                            }}
                            onCancel={() => {
                              setIsEditDialogOpen(false);
                              setSelectedProduct(null);
                            }}
                          />
                        )}
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="table">
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount Range</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">{product.companyName}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={product.type === 'loan' ? 'default' : 'secondary'}>
                        {product.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      ${product.minAmount.toLocaleString()} - ${product.maxAmount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      {product.interestRateMin}% - {product.interestRateMax}%
                    </TableCell>
                    <TableCell>
                      {product.minTerm} - {product.maxTerm} months
                    </TableCell>
                    <TableCell>
                      <Badge variant={product.active ? 'default' : 'secondary'}>
                        {product.active ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleProductStatus(product.id)}
                        >
                          {product.active ? 
                            <EyeOff className="h-4 w-4" /> : 
                            <Eye className="h-4 w-4" />
                          }
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}