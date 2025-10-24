import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductDetailDialogProps {
  title: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  patents?: boolean;
  fullDescription?: string;
  specifications?: string[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProductDetailDialog = ({ 
  title, 
  category, 
  description,
  features,
  images,
  patents = false,
  fullDescription,
  specifications,
  open,
  onOpenChange
}: ProductDetailDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                {category}
              </p>
              <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
            </div>
            {patents && (
              <Badge className="bg-accent text-accent-foreground">
                Patented
              </Badge>
            )}
          </div>
        </DialogHeader>
        
        <ScrollArea className="max-h-[calc(90vh-120px)] pr-4">
          <div className="space-y-6">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {fullDescription || description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            {specifications && specifications.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Specifications</h3>
                <div className="space-y-2">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};