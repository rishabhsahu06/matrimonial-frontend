import React from "react";
import IndividualForm from "./components/individual-aspec-form";
import FamilyAspects from "./components/family-aspects";
import SpouseExpectation from "./components/spouse-expectation";
import HealthStatus from "./components/health-status";

function page() {
  return (
    <div className="mt-28">
      <div className="">
        <IndividualForm />
      </div>
      <div className="mt-12">
        <FamilyAspects />
      </div>
      <div className="mt-12">
        <SpouseExpectation />
      </div>
      <div className="mt-12 mb-12">
        <HealthStatus />
      </div>
    </div>
  );
}

export default page;
