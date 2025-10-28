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
      className="group overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-500 border-border/50 cursor-pointer bg-gradient-to-br from-card to-card/95 hover:border-accent/30"
      onClick={onClick}
    >
      <div className="relative h-72 bg-gradient-to-br from-muted/30 to-muted/10 overflow-hidden border-b border-border/50">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain p-8 group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
            <ExternalLink className="h-16 w-16 text-muted-foreground/30" />
          </div>
        )}
        {patents && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-lg">
            Patented
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-bold text-accent uppercase tracking-wider">
            {category}
          </p>
          <h3 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="pt-2 space-y-2.5">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0 shadow-[0_0_8px_var(--accent)]" />
              <p className="text-sm text-foreground/80">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="pt-4 flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
          <span>View Details</span>
          <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </CardContent>
    </Card>
  );
};
