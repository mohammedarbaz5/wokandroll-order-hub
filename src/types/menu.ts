export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  spiceLevel: number;
  featured: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Menu {
  categories: MenuCategory[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}
