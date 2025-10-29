import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent hover:from-primary hover:to-accent transition-all duration-300"
          >
            Srinivas Reddy Adulla
          </button>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
              className="hover:text-accent hover:bg-accent/10"
            >
              Portfolio
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => navigate("/about")}
              className="hover:text-accent hover:bg-accent/10"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="hover:text-accent hover:bg-accent/10 opacity-50 cursor-not-allowed"
              disabled
            >
              ML Projects
              <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">Soon</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};