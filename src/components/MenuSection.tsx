import { useState } from 'react';
import { MenuCategory, MenuItem } from '@/types/menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Flame } from 'lucide-react';

interface MenuSectionProps {
  categories: MenuCategory[];
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection = ({ categories, onAddToCart }: MenuSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getSpiceIcons = (level: number) => {
    return Array.from({ length: level }).map((_, i) => (
      <Flame key={i} className="h-4 w-4 text-primary fill-primary" />
    ));
  };

  const filteredItems = activeCategory === 'all'
    ? categories.flatMap((cat) => cat.items)
    : categories.find((cat) => cat.id === activeCategory)?.items || [];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our wide selection of authentic Chinese dishes
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
              className={activeCategory === 'all' ? 'hero-gradient text-white' : ''}
            >
              All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? 'hero-gradient text-white' : ''}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden card-shadow hover:card-shadow-hover transition-smooth hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`/src/assets/${item.image}`}
                  alt={item.name}
                  className="w-full h-full object-cover transition-smooth hover:scale-110"
                />
                {item.spiceLevel > 0 && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    {getSpiceIcons(item.spiceLevel)}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => onAddToCart(item)}
                    className="hero-gradient text-white rounded-full hover:scale-105 transition-smooth"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
