import React from "react";
import BudgetStatus from "./BudgetStatus/BudgetStatus";
import ProductCards from "./ProductCards/ProductCards";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

export default function Dashboard() {
  return (
    <>
      <ProjectDetails />
      <BudgetStatus/>
      <ProductCards/>
    </>
  );
}
