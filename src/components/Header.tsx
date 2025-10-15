import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  itemCount: number;
  onCartClick: () => void;
}

export const Header = ({ itemCount, onCartClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">Wok</span> & <span className="text-accent">Roll</span>
            </h1>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={onCartClick}
            className="relative hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart
            {itemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 hero-gradient"
              >
                {itemCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
