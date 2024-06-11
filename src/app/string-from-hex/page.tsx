"use client";
import IOForm from "../../components/IOForm";

const UnitsPage = () => {
  const handleFormSubmit = (value1: string, value2: string) => {
    console.log("Units form submitted:", value1, value2);
    // Handle form submission logic for units route (e.g., convert units)
  };

  return (
    <div className="container mx-auto p-4">
      <h1>Decode Hex To String</h1>
      <IOForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default UnitsPage;
