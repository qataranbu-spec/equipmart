// Category management types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  parentId: string | null; // null for main categories
  isActive: boolean;
  sortOrder: number;
  seoTitle?: string;
  seoDescription?: string;
  equipmentCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryWithChildren extends Category {
  children: Category[];
}

export interface CategoryFormData {
  name: string;
  slug: string;
  description: string;
  image: string;
  parentId: string | null;
  isActive: boolean;
  sortOrder: number;
  seoTitle?: string;
  seoDescription?: string;
}

export interface CategoryStats {
  totalCategories: number;
  activeCategories: number;
  totalSubcategories: number;
  categoriesWithEquipment: number;
  topPerformingCategories: Array<{
    categoryId: string;
    name: string;
    equipmentCount: number;
    viewCount: number;
  }>;
}

export type CategoryType = 'main' | 'subcategory';

export interface CategoryFilter {
  type?: CategoryType;
  isActive?: boolean;
  hasEquipment?: boolean;
  parentId?: string;
  search?: string;
}