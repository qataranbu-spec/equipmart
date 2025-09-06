import { Link } from "react-router-dom"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCategoriesWithChildren } from "@/features/admin/data/categoryMockData"

export default function CategoriesPage() {
  const categories = getCategoriesWithChildren().filter(cat => cat.isActive)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Equipment Categories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse our comprehensive collection of construction and heavy equipment categories. 
            Find exactly what you need for your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow group cursor-pointer">
              <Link to={`/categories/${category.slug}`}>
                <CardContent className="p-6">
                  <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {category.equipmentCount} listings
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                    
                    {category.children.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">
                          Popular subcategories:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {category.children.slice(0, 3).map((child) => (
                            <Badge key={child.id} variant="outline" className="text-xs">
                              {child.name}
                            </Badge>
                          ))}
                          {category.children.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{category.children.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {categories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No categories available at the moment.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}