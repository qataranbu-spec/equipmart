
import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const categories = [
    {
      name: "Excavators",
      count: "1,200+ listings",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop",
      link: "/categories/excavators"
    },
    {
      name: "Bulldozers",
      count: "800+ listings",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      link: "/categories/bulldozers"
    },
    {
      name: "Cranes",
      count: "600+ listings",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop",
      link: "/categories/cranes"
    },
    {
      name: "Loaders",
      count: "950+ listings",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      link: "/categories/loaders"
    },
    {
      name: "Dump Trucks",
      count: "720+ listings",
      image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=400&h=300&fit=crop",
      link: "/categories/trucks"
    },
    {
      name: "Concrete Mixers",
      count: "450+ listings",
      image: "https://images.unsplash.com/photo-1572919733405-b8b80114c5ac?w=400&h=300&fit=crop",
      link: "/categories/concrete-mixers"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-xl text-muted-foreground">
            Find the exact equipment you need from our extensive catalog
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.link}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                  <p className="text-white/90">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
