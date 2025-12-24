import { batches } from "@/data/alumniData";

interface BatchFilterProps {
  selectedBatch: string;
  onBatchChange: (batch: string) => void;
}

const BatchFilter = ({ selectedBatch, onBatchChange }: BatchFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
        onClick={() => onBatchChange("all")}
        className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
          selectedBatch === "all"
            ? "bg-gradient-primary text-primary-foreground glow-purple"
            : "bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border"
        }`}
      >
        All Batches
      </button>
      {batches.map((batch) => (
        <button
          key={batch}
          onClick={() => onBatchChange(batch)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            selectedBatch === batch
              ? "bg-gradient-primary text-primary-foreground glow-purple"
              : "bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 border border-border"
          }`}
        >
          Batch {batch}
        </button>
      ))}
    </div>
  );
};

export default BatchFilter;
