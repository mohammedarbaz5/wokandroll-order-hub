import { MenuItem } from '@/types/menu';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Flame } from 'lucide-react';

interface FeaturedDishesProps {
  dishes: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

export const FeaturedDishes = ({ dishes, onAddToCart }: FeaturedDishesProps) => {
  const getSpiceIcons = (level: number) => {
    return Array.from({ length: level }).map((_, i) => (
      <Flame key={i} className="h-4 w-4 text-primary fill-primary" />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Chef's <span className="text-primary">Specials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most popular dishes, crafted with authentic recipes and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <Card
              key={dish.id}
              className="overflow-hidden card-shadow hover:card-shadow-hover transition-smooth hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`/src/assets/${dish.image}`}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-smooth hover:scale-110"
                />
                {dish.spiceLevel > 0 && (
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    {getSpiceIcons(dish.spiceLevel)}
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{dish.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${dish.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => onAddToCart(dish)}
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
