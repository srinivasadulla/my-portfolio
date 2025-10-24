import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-xl font-bold text-foreground hover:text-accent transition-colors"
          >
            Srinivas Reddy Adulla
          </button>
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
            >
              Portfolio
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/about")}
            >
              About
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};