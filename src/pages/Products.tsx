import { ChevronRight, Home, ArrowUpDown } from "lucide-react";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ProductCard } from "@/components/ProductCards";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  {
    id: 1,
    name: "Apple iMac 27\"",
    description: "Apple M3 Octa-Core, 23.8inch, RAM 8GB, SSD 256GB, Apple M3 8-Core, macOS Sonoma",
    price: 1199,
    colors: ["#000000", "#16a34a", "#0891b2", "#c026d3"],
    image: "",
    totalImages: 4,
  },
  {
    id: 2,
    name: "PlayStation 5 Slim Console",
    description: "Up to 120fps with 120Hz output, 1TB HDD, 2 Controllers, Ray Tracing",
    price: 499,
    colors: ["#000000", "#16a34a"],
    image: "",
    totalImages: 4,
  },
  {
    id: 3,
    name: "iPad Pro 13-inch (M4): XDR Display",
    description: "Ultra Retina XDR Display, 256GB, Landscape 12MP Front Camera/12MP",
    price: 1199,
    colors: ["#000000", "#ef4444", "#ec4899"],
    image: "",
    totalImages: 4,
  },
  {
    id: 4,
    name: "Xbox Series S 1TB SSD",
    description: "512GB SSD, 120fps, 1440p Gaming All-Bluetooth Connectivity",
    price: 299,
    colors: ["#ffffff", "#000000"],
    image: "",
    totalImages: 4,
  },
  {
    id: 5,
    name: "Apple iPhone 15 Pro Max",
    description: "Natural Titanium, 6.7 inches 512GB, Unlocked/Renewed 100% working",
    price: 1199,
    colors: ["#000000", "#ffffff", "#0891b2"],
    image: "",
    totalImages: 4,
  },
  {
    id: 6,
    name: "iMac 24\" (2023)",
    description: "Retina 4.5K, 8GB, 256GB SSD, 8-core GPU, Gigabit Ethernet, macOS...",
    price: 1499,
    colors: ["#000000", "#16a34a", "#0891b2"],
    image: "",
    totalImages: 4,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span>Products</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Electronics</span>
          </div>
        </div>
      </header>

      <div className="flex">
        <FilterSidebar />
        
        <main className="flex-1">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Electronics</h1>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <ArrowUpDown className="w-4 h-4 mr-2" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-popover">
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Name: A to Z</DropdownMenuItem>
                  <DropdownMenuItem>Name: Z to A</DropdownMenuItem>
                  <DropdownMenuItem>Newest First</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="px-8">
                Load more
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
