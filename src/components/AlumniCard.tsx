import { Mail, Phone, Award, Hash } from "lucide-react";
import type { Alumni } from "@/data/alumniData";

interface AlumniCardProps {
  alumni: Alumni;
  index: number;
}

const AlumniCard = ({ alumni, index }: AlumniCardProps) => {
  const initials = alumni.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div 
      className="card-elevated rounded-2xl p-6 hover:glow-purple transition-all duration-500 group animate-slide-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-lg font-bold text-primary-foreground">{initials}</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-foreground text-lg truncate group-hover:text-primary transition-colors">
            {alumni.name}
          </h3>
          
          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
            <Hash className="w-3.5 h-3.5" />
            <span className="font-mono">{alumni.rollNumber}</span>
          </div>

          {/* Details */}
          <div className="mt-3 space-y-2">
            {alumni.email && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{alumni.email}</span>
              </div>
            )}
            
            {alumni.phone && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{alumni.phone}</span>
              </div>
            )}

            {alumni.cgpa && (
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-3.5 h-3.5 flex-shrink-0 text-secondary" />
                <span className="text-secondary font-medium">CGPA: {alumni.cgpa}</span>
              </div>
            )}
          </div>
        </div>

        {/* Batch badge */}
        <div className="flex-shrink-0">
          <span className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-primary text-primary-foreground">
            {alumni.batch}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
