import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  ChevronRight, 
  Edit, 
  Trash2, 
  Plus,
  Eye,
  EyeOff,
  Package
} from 'lucide-react';
import { CategoryWithChildren, Category } from '../types/categories';

interface CategoryTreeProps {
  categories: CategoryWithChildren[];
  onEdit: (category: Category) => void;
  onDelete: (categoryId: string) => void;
  onToggleStatus: (categoryId: string) => void;
  onAddSubcategory: (parentId: string) => void;
}

export function CategoryTree({ 
  categories, 
  onEdit, 
  onDelete, 
  onToggleStatus,
  onAddSubcategory 
}: CategoryTreeProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.map(cat => cat.id))
  );

  const toggleExpanded = (categoryId: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Package className="h-5 w-5 mr-2" />
          Category Hierarchy
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categories.map((category) => (
          <CategoryNode
            key={category.id}
            category={category}
            isExpanded={expandedCategories.has(category.id)}
            onToggleExpanded={() => toggleExpanded(category.id)}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
            onAddSubcategory={onAddSubcategory}
            level={0}
          />
        ))}
      </CardContent>
    </Card>
  );
}

interface CategoryNodeProps {
  category: CategoryWithChildren;
  isExpanded: boolean;
  onToggleExpanded: () => void;
  onEdit: (category: Category) => void;
  onDelete: (categoryId: string) => void;
  onToggleStatus: (categoryId: string) => void;
  onAddSubcategory: (parentId: string) => void;
  level: number;
}

function CategoryNode({
  category,
  isExpanded,
  onToggleExpanded,
  onEdit,
  onDelete,
  onToggleStatus,
  onAddSubcategory,
  level
}: CategoryNodeProps) {
  const hasChildren = category.children.length > 0;
  const indent = level * 24;

  return (
    <div className="space-y-1">
      <div
        className={`flex items-center p-2 rounded-md hover:bg-muted/50 transition-colors ${
          !category.isActive ? 'opacity-60' : ''
        }`}
        style={{ marginLeft: `${indent}px` }}
      >
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0 mr-2"
          onClick={onToggleExpanded}
          disabled={!hasChildren}
        >
          {hasChildren ? (
            isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )
          ) : (
            <div className="w-4 h-4" />
          )}
        </Button>

        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className={`font-medium ${level === 0 ? 'text-base' : 'text-sm'}`}>
              {category.name}
            </span>
            <Badge variant={category.isActive ? 'default' : 'secondary'}>
              {category.equipmentCount} items
            </Badge>
            {!category.isActive && (
              <Badge variant="outline" className="text-xs">
                Inactive
              </Badge>
            )}
          </div>

          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleStatus(category.id)}
              className="h-8 w-8 p-0"
            >
              {category.isActive ? (
                <Eye className="h-4 w-4" />
              ) : (
                <EyeOff className="h-4 w-4" />
              )}
            </Button>
            
            {level === 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onAddSubcategory(category.id)}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(category)}
              className="h-8 w-8 p-0"
            >
              <Edit className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(category.id)}
              className="h-8 w-8 p-0 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="space-y-1">
          {category.children.map((child) => (
            <CategoryNode
              key={child.id}
              category={{ ...child, children: [] }}
              isExpanded={false}
              onToggleExpanded={() => {}}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
              onAddSubcategory={onAddSubcategory}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}