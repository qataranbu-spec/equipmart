import { useState } from 'react';
import { ArrowLeft, ArrowRight, FileText, User, Building, DollarSign, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { mockFinancingProducts } from '../../data/mockData';

interface FormData {
  // Product Selection
  productId: string;
  loanAmount: number;
  loanTerm: number;
  downPayment: number;
  
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  ssn: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  
  // Business Information
  businessName: string;
  businessType: string;
  yearsInBusiness: number;
  annualRevenue: number;
  employeeCount: number;
  taxId: string;
  businessAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  
  // Financial Information
  monthlyIncome: number;
  existingDebt: number;
  bankName: string;
  accountType: string;
  
  // Equipment Information
  equipmentType: string;
  equipmentMake: string;
  equipmentModel: string;
  equipmentYear: string;
  equipmentCondition: string;
}

const initialFormData: FormData = {
  productId: '',
  loanAmount: 0,
  loanTerm: 36,
  downPayment: 0,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  dateOfBirth: '',
  ssn: '',
  address: { street: '', city: '', state: '', zipCode: '' },
  businessName: '',
  businessType: '',
  yearsInBusiness: 0,
  annualRevenue: 0,
  employeeCount: 0,
  taxId: '',
  businessAddress: { street: '', city: '', state: '', zipCode: '' },
  monthlyIncome: 0,
  existingDebt: 0,
  bankName: '',
  accountType: '',
  equipmentType: '',
  equipmentMake: '',
  equipmentModel: '',
  equipmentYear: '',
  equipmentCondition: ''
};

export default function LoanApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedProduct, setSelectedProduct] = useState(mockFinancingProducts[0]);

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    { id: 1, title: 'Product Selection', icon: DollarSign },
    { id: 2, title: 'Personal Info', icon: User },
    { id: 3, title: 'Business Info', icon: Building },
    { id: 4, title: 'Financial Info', icon: DollarSign },
    { id: 5, title: 'Equipment Info', icon: FileText },
    { id: 6, title: 'Review & Submit', icon: CheckCircle }
  ];

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateNestedFormData = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...(prev[parent as keyof FormData] as object),
        [field]: value
      }
    }));
  };

  const calculateMonthlyPayment = () => {
    const principal = formData.loanAmount - formData.downPayment;
    const monthlyRate = (selectedProduct.interestRateMin / 100) / 12;
    const numPayments = formData.loanTerm;
    
    if (monthlyRate === 0) return principal / numPayments;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return monthlyPayment;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Financing Product</h3>
              <div className="grid gap-4">
                {mockFinancingProducts.map((product) => (
                  <Card 
                    key={product.id} 
                    className={`cursor-pointer transition-all ${
                      selectedProduct.id === product.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{product.name}</h4>
                          <p className="text-sm text-muted-foreground">{product.companyName}</p>
                        </div>
                        <Badge variant="outline">{product.type}</Badge>
                      </div>
                      <p className="text-sm mb-3">{product.description}</p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Amount Range:</span>
                          <p className="font-medium">${product.minAmount.toLocaleString()} - ${product.maxAmount.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Interest Rate:</span>
                          <p className="font-medium">{product.interestRateMin}% - {product.interestRateMax}%</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loanAmount">Loan Amount</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  value={formData.loanAmount}
                  onChange={(e) => updateFormData('loanAmount', Number(e.target.value))}
                  placeholder="Enter loan amount"
                />
              </div>
              <div>
                <Label htmlFor="loanTerm">Loan Term (months)</Label>
                <Select onValueChange={(value) => updateFormData('loanTerm', Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="24">24 months</SelectItem>
                    <SelectItem value="36">36 months</SelectItem>
                    <SelectItem value="48">48 months</SelectItem>
                    <SelectItem value="60">60 months</SelectItem>
                    <SelectItem value="72">72 months</SelectItem>
                    <SelectItem value="84">84 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="downPayment">Down Payment</Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={formData.downPayment}
                  onChange={(e) => updateFormData('downPayment', Number(e.target.value))}
                  placeholder="Enter down payment"
                />
              </div>
              <div>
                <Label>Estimated Monthly Payment</Label>
                <div className="text-2xl font-bold text-primary">
                  ${calculateMonthlyPayment().toLocaleString('en-US', { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="Enter email"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="ssn">SSN (Last 4 digits)</Label>
                <Input
                  id="ssn"
                  value={formData.ssn}
                  onChange={(e) => updateFormData('ssn', e.target.value)}
                  placeholder="XXXX"
                  maxLength={4}
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Address</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="street">Street Address</Label>
                  <Input
                    id="street"
                    value={formData.address.street}
                    onChange={(e) => updateNestedFormData('address', 'street', e.target.value)}
                    placeholder="Enter street address"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.address.city}
                    onChange={(e) => updateNestedFormData('address', 'city', e.target.value)}
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={formData.address.state}
                    onChange={(e) => updateNestedFormData('address', 'state', e.target.value)}
                    placeholder="Enter state"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={formData.address.zipCode}
                    onChange={(e) => updateNestedFormData('address', 'zipCode', e.target.value)}
                    placeholder="Enter ZIP code"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Business Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => updateFormData('businessName', e.target.value)}
                  placeholder="Enter business name"
                />
              </div>
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Select onValueChange={(value) => updateFormData('businessType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="LLC">LLC</SelectItem>
                    <SelectItem value="Corporation">Corporation</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                    <SelectItem value="Sole Proprietorship">Sole Proprietorship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="yearsInBusiness">Years in Business</Label>
                <Input
                  id="yearsInBusiness"
                  type="number"
                  value={formData.yearsInBusiness}
                  onChange={(e) => updateFormData('yearsInBusiness', Number(e.target.value))}
                  placeholder="Enter years in business"
                />
              </div>
              <div>
                <Label htmlFor="annualRevenue">Annual Revenue</Label>
                <Input
                  id="annualRevenue"
                  type="number"
                  value={formData.annualRevenue}
                  onChange={(e) => updateFormData('annualRevenue', Number(e.target.value))}
                  placeholder="Enter annual revenue"
                />
              </div>
              <div>
                <Label htmlFor="employeeCount">Employee Count</Label>
                <Input
                  id="employeeCount"
                  type="number"
                  value={formData.employeeCount}
                  onChange={(e) => updateFormData('employeeCount', Number(e.target.value))}
                  placeholder="Enter employee count"
                />
              </div>
              <div>
                <Label htmlFor="taxId">Tax ID (EIN)</Label>
                <Input
                  id="taxId"
                  value={formData.taxId}
                  onChange={(e) => updateFormData('taxId', e.target.value)}
                  placeholder="XX-XXXXXXX"
                />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Business Address</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="businessStreet">Street Address</Label>
                  <Input
                    id="businessStreet"
                    value={formData.businessAddress.street}
                    onChange={(e) => updateNestedFormData('businessAddress', 'street', e.target.value)}
                    placeholder="Enter business street address"
                  />
                </div>
                <div>
                  <Label htmlFor="businessCity">City</Label>
                  <Input
                    id="businessCity"
                    value={formData.businessAddress.city}
                    onChange={(e) => updateNestedFormData('businessAddress', 'city', e.target.value)}
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <Label htmlFor="businessState">State</Label>
                  <Input
                    id="businessState"
                    value={formData.businessAddress.state}
                    onChange={(e) => updateNestedFormData('businessAddress', 'state', e.target.value)}
                    placeholder="Enter state"
                  />
                </div>
                <div>
                  <Label htmlFor="businessZipCode">ZIP Code</Label>
                  <Input
                    id="businessZipCode"
                    value={formData.businessAddress.zipCode}
                    onChange={(e) => updateNestedFormData('businessAddress', 'zipCode', e.target.value)}
                    placeholder="Enter ZIP code"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Financial Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="monthlyIncome">Monthly Income</Label>
                <Input
                  id="monthlyIncome"
                  type="number"
                  value={formData.monthlyIncome}
                  onChange={(e) => updateFormData('monthlyIncome', Number(e.target.value))}
                  placeholder="Enter monthly income"
                />
              </div>
              <div>
                <Label htmlFor="existingDebt">Existing Debt</Label>
                <Input
                  id="existingDebt"
                  type="number"
                  value={formData.existingDebt}
                  onChange={(e) => updateFormData('existingDebt', Number(e.target.value))}
                  placeholder="Enter existing debt"
                />
              </div>
              <div>
                <Label htmlFor="bankName">Bank Name</Label>
                <Input
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => updateFormData('bankName', e.target.value)}
                  placeholder="Enter primary bank name"
                />
              </div>
              <div>
                <Label htmlFor="accountType">Account Type</Label>
                <Select onValueChange={(value) => updateFormData('accountType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select account type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Checking</SelectItem>
                    <SelectItem value="savings">Savings</SelectItem>
                    <SelectItem value="business-checking">Business Checking</SelectItem>
                    <SelectItem value="business-savings">Business Savings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Equipment Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="equipmentType">Equipment Type</Label>
                <Select onValueChange={(value) => updateFormData('equipmentType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select equipment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excavator">Excavator</SelectItem>
                    <SelectItem value="bulldozer">Bulldozer</SelectItem>
                    <SelectItem value="crane">Crane</SelectItem>
                    <SelectItem value="loader">Loader</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                    <SelectItem value="concrete-mixer">Concrete Mixer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="equipmentMake">Make</Label>
                <Input
                  id="equipmentMake"
                  value={formData.equipmentMake}
                  onChange={(e) => updateFormData('equipmentMake', e.target.value)}
                  placeholder="Enter equipment make"
                />
              </div>
              <div>
                <Label htmlFor="equipmentModel">Model</Label>
                <Input
                  id="equipmentModel"
                  value={formData.equipmentModel}
                  onChange={(e) => updateFormData('equipmentModel', e.target.value)}
                  placeholder="Enter equipment model"
                />
              </div>
              <div>
                <Label htmlFor="equipmentYear">Year</Label>
                <Input
                  id="equipmentYear"
                  value={formData.equipmentYear}
                  onChange={(e) => updateFormData('equipmentYear', e.target.value)}
                  placeholder="Enter equipment year"
                />
              </div>
              <div>
                <Label htmlFor="equipmentCondition">Condition</Label>
                <Select onValueChange={(value) => updateFormData('equipmentCondition', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                    <SelectItem value="poor">Poor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Review & Submit</h3>
            
            <Card>
              <CardHeader>
                <CardTitle>Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Financing Product</span>
                    <p className="font-medium">{selectedProduct.name}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Lender</span>
                    <p className="font-medium">{selectedProduct.companyName}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Loan Amount</span>
                    <p className="font-medium">${formData.loanAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Down Payment</span>
                    <p className="font-medium">${formData.downPayment.toLocaleString()}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Term</span>
                    <p className="font-medium">{formData.loanTerm} months</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Estimated Monthly Payment</span>
                    <p className="font-medium text-primary text-lg">
                      ${calculateMonthlyPayment().toLocaleString('en-US', { 
                        minimumFractionDigits: 2, 
                        maximumFractionDigits: 2 
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Applicant Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-sm text-muted-foreground">Name</span>
                  <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Business</span>
                  <p className="font-medium">{formData.businessName}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Equipment</span>
                  <p className="font-medium">{formData.equipmentYear} {formData.equipmentMake} {formData.equipmentModel}</p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                By submitting this application, you agree to the terms and conditions of the financing agreement 
                and authorize the lender to perform a credit check.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Equipment Financing Application</h1>
        <p className="text-muted-foreground">Complete your financing application in a few simple steps</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2 mb-6" />
        
        {/* Step Indicators */}
        <div className="flex justify-between">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  isCompleted ? 'bg-green-500 text-white' :
                  isActive ? 'bg-primary text-primary-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className={`text-xs text-center ${
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <Card>
        <CardContent className="p-6">
          {renderStepContent()}
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        
        {currentStep === totalSteps ? (
          <Button className="bg-green-600 hover:bg-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            Submit Application
          </Button>
        ) : (
          <Button onClick={nextStep}>
            Next
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}