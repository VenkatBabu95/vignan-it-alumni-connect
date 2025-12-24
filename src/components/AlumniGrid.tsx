import { useState, useMemo } from "react";
import { Search, Users } from "lucide-react";
import { alumniData } from "@/data/alumniData";
import AlumniCard from "./AlumniCard";
import BatchFilter from "./BatchFilter";

const AlumniGrid = () => {
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlumni = useMemo(() => {
    return alumniData.filter((alumni) => {
      const matchesBatch = selectedBatch === "all" || alumni.batch === selectedBatch;
      const matchesSearch = 
        alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.rollNumber.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBatch && matchesSearch;
    });
  }, [selectedBatch, searchQuery]);

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Alumni Directory</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our talented graduates year by year. Connect, collaborate, and celebrate their achievements.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or roll number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
        </div>

        {/* Batch filter */}
        <BatchFilter selectedBatch={selectedBatch} onBatchChange={setSelectedBatch} />

        {/* Results count */}
        <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
          <Users className="w-5 h-5" />
          <span>
            Showing <span className="text-primary font-semibold">{filteredAlumni.length}</span> alumni
            {selectedBatch !== "all" && ` from batch ${selectedBatch}`}
          </span>
        </div>

        {/* Alumni grid */}
        {filteredAlumni.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAlumni.map((alumni, index) => (
              <AlumniCard key={alumni.id} alumni={alumni} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Users className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No alumni found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AlumniGrid;
