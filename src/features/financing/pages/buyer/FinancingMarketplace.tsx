import { useState } from 'react';
import { Search, Filter, Calculator, CreditCard, Building2, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockFinancingCompanies, mockFinancingProducts } from '../../data/mockData';
import { FinancingProduct, FinancingCompany } from '../../types';

export default function FinancingMarketplace() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const filteredProducts = mockFinancingProducts.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedType === 'all' || product.type === selectedType)
  );

  const getCompanyInfo = (companyId: string) => 
    mockFinancingCompanies.find(c => c.id === companyId);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Equipment Financing Marketplace</h1>
        <p className="text-muted-foreground text-lg">Find the best financing solutions for your equipment needs</p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 bg-card p-6 rounded-lg border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search financing products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-border rounded-md bg-background"
          >
            <option value="all">All Product Types</option>
            <option value="loan">Loans</option>
            <option value="lease">Leases</option>
            <option value="insurance">Insurance</option>
            <option value="warranty">Warranties</option>
          </select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>
      </div>

      {/* Financing Companies Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Featured Financing Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockFinancingCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{company.name}</CardTitle>
                    <CardDescription className="text-sm mt-1">
                      Established {company.established}
                    </CardDescription>
                  </div>
                  {company.verified && (
                    <Badge variant="default" className="bg-green-500">Verified</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">{company.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({company.reviews} reviews)</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{company.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Loan Range:</span>
                    <span className="font-medium">
                      ${company.minLoanAmount.toLocaleString()} - ${company.maxLoanAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Min Credit Score:</span>
                    <span className="font-medium">{company.minCreditScore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Approval Time:</span>
                    <span className="font-medium">{company.averageApprovalTime}</span>
                  </div>
                </div>
                <Button className="w-full mt-4">View Products</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Financing Products */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Available Financing Products</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProducts.map((product) => {
            const company = getCompanyInfo(product.companyId);
            return (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="text-sm mt-1 flex items-center gap-2">
                        <Building2 className="h-3 w-3" />
                        {product.companyName}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={product.type === 'loan' ? 'default' : 'secondary'}
                      className="capitalize"
                    >
                      {product.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Amount Range:</span>
                      <p className="font-medium">
                        ${product.minAmount.toLocaleString()} - ${product.maxAmount.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Interest Rate:</span>
                      <p className="font-medium">
                        {product.interestRateMin}% - {product.interestRateMax}%
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Term:</span>
                      <p className="font-medium">
                        {product.minTerm} - {product.maxTerm} months
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Down Payment:</span>
                      <p className="font-medium">{product.downPaymentRequired}%</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-sm font-medium text-foreground">Key Features:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {product.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      <Calculator className="h-4 w-4 mr-2" />
                      Calculate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 bg-primary/5 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Need Help Choosing the Right Financing?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our financing experts can help you compare options and find the best solution for your equipment needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">
            Speak with an Expert
          </Button>
          <Button variant="outline" size="lg">
            Get Pre-Qualified
          </Button>
        </div>
      </section>
    </div>
  );
}