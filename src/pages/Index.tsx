import { useState, useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturedDishes } from '@/components/FeaturedDishes';
import { WhySection } from '@/components/WhySection';
import { MenuSection } from '@/components/MenuSection';
import { Footer } from '@/components/Footer';
import { Cart } from '@/components/Cart';
import { useCart } from '@/hooks/useCart';
import { Menu, MenuItem } from '@/types/menu';
import menuData from '@/data/menu.json';

const Index = () => {
  const [menu] = useState<Menu>(menuData as Menu);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount,
  } = useCart();

  const featuredDishes = menu.categories
    .flatMap((cat) => cat.items)
    .filter((item) => item.featured);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header itemCount={getItemCount()} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="pt-16">
        <Hero onOrderClick={scrollToMenu} />
        <FeaturedDishes dishes={featuredDishes} onAddToCart={addToCart} />
        <WhySection />
        <div ref={menuRef}>
          <MenuSection categories={menu.categories} onAddToCart={addToCart} />
        </div>
      </main>

      <Footer />

      <Cart
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        total={getTotal()}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default Index;
