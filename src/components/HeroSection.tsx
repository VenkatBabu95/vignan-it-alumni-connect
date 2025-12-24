import { GraduationCap, Users, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-4 py-16 bg-gradient-to-b from-muted/50 to-background">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Department of Information Technology</span>
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-foreground">VITS</span>{" "}
          <span className="text-gradient">Alumni Network</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Connecting graduates of Vignan Institute of Technology and Science. 
          Explore our community of IT professionals shaping the future.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <StatCard icon={Users} value="180+" label="Alumni Members" />
          <StatCard icon={Calendar} value="3" label="Graduating Batches" />
          <StatCard icon={GraduationCap} value="IT" label="Department Excellence" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon: Icon, 
  value, 
  label 
}: { 
  icon: React.ComponentType<{ className?: string }>; 
  value: string; 
  label: string;
}) => (
  <div className="card-elevated rounded-2xl p-6 hover:glow-purple transition-all duration-500 group">
    <div className="flex items-center justify-center gap-3">
      <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="text-left">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  </div>
);

export default HeroSection;
