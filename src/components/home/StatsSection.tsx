
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: "10,000+", label: "Equipment Listed" },
    { number: "5,000+", label: "Active Suppliers" },
    { number: "50+", label: "Countries Served" },
    { number: "$2B+", label: "Transactions Processed" }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
