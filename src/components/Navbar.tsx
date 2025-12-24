import { GraduationCap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-primary glow-purple">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-heading font-bold text-lg text-foreground">VITS Alumni</h1>
              <p className="text-xs text-muted-foreground">Dept. of IT</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#alumni" className="text-sm text-muted-foreground hover:text-primary transition-colors">Alumni</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
          </div>

          {/* CTA */}
          <button className="px-5 py-2.5 rounded-xl bg-gradient-primary text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity glow-purple">
            Join Network
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
