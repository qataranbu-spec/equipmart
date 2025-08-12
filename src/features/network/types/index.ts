// Network types
export interface NetworkMember {
  id: string;
  name: string;
  role: 'buyer' | 'supplier' | 'expert';
  company: string;
  location: string;
  avatar?: string;
  rating: number;
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  location: string;
  status: 'active' | 'completed' | 'pending';
  owner: NetworkMember;
  category: string;
}