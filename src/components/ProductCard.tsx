import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  title: string;
  category: string;
  description: string;
  features: string[];
  image?: string;
  patents?: boolean;
  onClick?: () => void;
}

export const ProductCard = ({ 
  title, 
  category, 
  description, 
  features,
  image,
  patents = false,
  onClick
}: ProductCardProps) => {
  return (
    <Card 
      className="group overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border-border cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 bg-muted overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <ExternalLink className="h-16 w-16 text-muted-foreground/30" />
          </div>
        )}
        {patents && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            Patented
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            {category}
          </p>
          <h3 className="text-2xl font-bold text-card-foreground">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="pt-2 space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
