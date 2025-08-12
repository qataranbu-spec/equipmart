// Marketplace types
export interface Equipment {
  id: string;
  title: string;
  condition: 'New' | 'Used - Functional' | 'Refurbished';
  price: number;
  location: string;
  year: number;
  hours: number;
  image: string;
  seller: string;
  rating: number;
  views: number;
  category: string;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}