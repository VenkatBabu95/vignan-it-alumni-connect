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
            : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
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
              : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
          }`}
        >
          Batch {batch}
        </button>
      ))}
    </div>
  );
};

export default BatchFilter;
