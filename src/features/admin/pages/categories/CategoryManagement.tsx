import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Filter, 
  BarChart3,
  Package,
  Eye,
  Users,
  TrendingUp,
  Edit
} from 'lucide-react';
import { CategoryForm } from '../../components/CategoryForm';
import { CategoryTree } from '../../components/CategoryTree';
import { 
  getCategoriesWithChildren, 
  mockCategoryStats 
} from '../../data/categoryMockData';
import { Category, CategoryFormData, CategoryFilter, CategoryType } from '../../types/categories';
import { useToast } from "@/hooks/use-toast";

export function CategoryManagement() {
  const { toast } = useToast();
  const [categories, setCategories] = useState(getCategoriesWithChildren());
  const [stats] = useState(mockCategoryStats);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [addingSubcategoryTo, setAddingSubcategoryTo] = useState<string | null>(null);
  const [filter, setFilter] = useState<CategoryFilter>({});
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddCategory = () => {
    setEditingCategory(null);
    setAddingSubcategoryTo(null);
    setShowForm(true);
  };

  const handleAddSubcategory = (parentId: string) => {
    setEditingCategory(null);
    setAddingSubcategoryTo(parentId);
    setShowForm(true);
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setAddingSubcategoryTo(null);
    setShowForm(true);
  };

  const handleFormSubmit = (data: CategoryFormData) => {
    try {
      if (editingCategory) {
        // Update existing category
        toast({
          title: "Category Updated",
          description: `${data.name} has been updated successfully.`,
        });
      } else {
        // Create new category
        const parentName = addingSubcategoryTo 
          ? categories.find(c => c.id === addingSubcategoryTo)?.name 
          : null;
        
        toast({
          title: "Category Created",
          description: `${data.name} has been ${parentName ? `added to ${parentName}` : 'created'} successfully.`,
        });
      }
      
      setShowForm(false);
      setEditingCategory(null);
      setAddingSubcategoryTo(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
    setEditingCategory(null);
    setAddingSubcategoryTo(null);
  };

  const handleDeleteCategory = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      toast({
        title: "Category Deleted",
        description: `${category.name} has been deleted successfully.`,
      });
    }
  };

  const handleToggleStatus = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      const newStatus = !category.isActive;
      toast({
        title: `Category ${newStatus ? 'Activated' : 'Deactivated'}`,
        description: `${category.name} has been ${newStatus ? 'activated' : 'deactivated'}.`,
      });
    }
  };

  const filteredCategories = categories.filter(category => {
    if (searchQuery && !category.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filter.isActive !== undefined && category.isActive !== filter.isActive) {
      return false;
    }
    if (filter.hasEquipment !== undefined) {
      const hasEquipment = category.equipmentCount > 0;
      if (hasEquipment !== filter.hasEquipment) {
        return false;
      }
    }
    return true;
  });

  if (showForm) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              {editingCategory 
                ? 'Edit Category' 
                : addingSubcategoryTo 
                  ? 'Add Subcategory' 
                  : 'Add Category'
              }
            </h2>
            <p className="text-muted-foreground">
              {editingCategory 
                ? 'Update category information' 
                : addingSubcategoryTo 
                  ? 'Create a new subcategory' 
                  : 'Create a new equipment category'
              }
            </p>
          </div>
        </div>

        <CategoryForm
          category={editingCategory || undefined}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Category Management</h2>
          <p className="text-muted-foreground">
            Organize and manage equipment categories and subcategories
          </p>
        </div>
        <Button onClick={handleAddCategory}>
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Categories</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCategories}</div>
            <p className="text-xs text-muted-foreground">
              Main categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subcategories</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalSubcategories}</div>
            <p className="text-xs text-muted-foreground">
              Specialized categories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Categories</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeCategories}</div>
            <p className="text-xs text-muted-foreground">
              Currently visible
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">With Equipment</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.categoriesWithEquipment}</div>
            <p className="text-xs text-muted-foreground">
              Have listings
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
            </div>

            <Select
              value={filter.isActive?.toString() || 'all'}
              onValueChange={(value) => 
                setFilter(prev => ({ 
                  ...prev, 
                  isActive: value === 'all' ? undefined : value === 'true' 
                }))
              }
            >
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="true">Active</SelectItem>
                <SelectItem value="false">Inactive</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filter.hasEquipment?.toString() || 'all'}
              onValueChange={(value) => 
                setFilter(prev => ({ 
                  ...prev, 
                  hasEquipment: value === 'all' ? undefined : value === 'true' 
                }))
              }
            >
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Equipment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="true">With Equipment</SelectItem>
                <SelectItem value="false">Empty Categories</SelectItem>
              </SelectContent>
            </Select>

            {(searchQuery || filter.isActive !== undefined || filter.hasEquipment !== undefined) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setFilter({});
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Category Tree */}
      <CategoryTree
        categories={filteredCategories}
        onEdit={handleEditCategory}
        onDelete={handleDeleteCategory}
        onToggleStatus={handleToggleStatus}
        onAddSubcategory={handleAddSubcategory}
      />

      {/* Top Performing Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Top Performing Categories
          </CardTitle>
          <CardDescription>
            Categories with the most equipment and views
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.topPerformingCategories.map((category, index) => (
              <div key={category.categoryId} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary" className="w-8 h-8 rounded-full flex items-center justify-center">
                    {index + 1}
                  </Badge>
                  <div>
                    <div className="font-medium">{category.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {category.equipmentCount} equipment • {category.viewCount.toLocaleString()} views
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const cat = categories.find(c => c.id === category.categoryId);
                    if (cat) handleEditCategory(cat);
                  }}
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}