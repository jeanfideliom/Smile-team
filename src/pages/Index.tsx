
import ViolationCard from "@/components/ViolationCard";

const violations = [
  {
    id: "1",
    date: "2024-03-14",
    type: "high",
    description: "Student does not have school ID card - Unable to verify student identity during campus entry."
  },
  {
    id: "2",
    date: "2024-03-13",
    type: "medium",
    description: "Non-compliant haircut detected - Hair color and style do not meet school dress code guidelines."
  },
  {
    id: "3",
    date: "2024-03-12",
    type: "low",
    description: "Improper uniform violation - Student wearing non-regulation shoes with school uniform."
  }
] as const;

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <span className="inline-block text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mb-3">
            School Policy Overview
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recent Policy Violations
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Monitor and track student policy violations across the school. Each card shows detailed information about specific incidents.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {violations.map((violation) => (
            <ViolationCard
              key={violation.id}
              violation={violation}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
