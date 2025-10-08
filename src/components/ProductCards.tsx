import { Heart, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  colors: string[];
  image: string;
  totalImages: number;
}

export const ProductCard = ({ name, description, price, colors, totalImages }: ProductCardProps) => {
  const [currentImage, setCurrentImage] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev > 1 ? prev - 1 : totalImages));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev < totalImages ? prev + 1 : 1));
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow">
      <div className="relative bg-gray-100 rounded-lg mb-4 aspect-square flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg" />
        
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/90 px-3 py-1 rounded-full text-sm">
          <button onClick={handlePrevImage} className="hover:text-primary">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-xs font-medium">
            {currentImage} of {totalImages}
          </span>
          <button onClick={handleNextImage} className="hover:text-primary">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <h3 className="font-semibold text-base mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
      
      <div className="text-sm text-primary mb-3 flex items-center gap-1">
        <span className="inline-block w-1 h-1 bg-primary rounded-full"></span>
        Buy in installments with Goonpay Wallet
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold">${price}</span>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border-2 border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="flex-shrink-0"
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
        </Button>
        <Button className="flex-1 bg-primary hover:bg-primary/90">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Buy now
        </Button>
      </div>
    </Card>
  );
};
