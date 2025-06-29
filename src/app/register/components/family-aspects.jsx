"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronUp } from "lucide-react";

function FamilyAspects() {
  const [isFormOpen, setIsFormOpen] = useState(true);

  const FormSection = ({ title, children }) => (
    <div className="space-y-4 p-6 bg-gradient-to-r from-gray-50/50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
        {title}
      </h3>
      {children}
    </div>
  );

  const InputField = ({ label, id, placeholder, type = "text" }) => (
    <div className="space-y-2 group">
      <Label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="transition-all duration-300 border-gray-200 hover:border-gray-300 focus:border-pink-400 focus:ring-pink-400/20 hover:shadow-sm"
      />
    </div>
  );

  const SelectField = ({ label, id, placeholder, options }) => (
    <div className="space-y-2 group">
      <Label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
      >
        {label}
      </Label>
      <Select>
        <SelectTrigger className="transition-all duration-300 border-gray-200 hover:border-gray-300 focus:border-pink-400 focus:ring-pink-400/20 hover:shadow-sm">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="animate-in fade-in-0 zoom-in-95 duration-200">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="hover:bg-pink-50 focus:bg-pink-50 transition-colors duration-200"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const religionOptions = [
    { value: "hindu", label: "Hindu" },
    { value: "muslim", label: "Muslim" },
    { value: "christian", label: "Christian" },
    { value: "sikh", label: "Sikh" },
    { value: "buddhist", label: "Buddhist" },
    { value: "jain", label: "Jain" },
    { value: "other", label: "Other" },
  ];

  const nationalityOptions = [
    { value: "indian", label: "Indian" },
    { value: "nri", label: "NRI" },
    { value: "migrants", label: "Migrants" },
  ];

  const familyRitualsOptions = [
    { value: "very-religious", label: "Very Religious" },
    { value: "religious", label: "Religious" },
    { value: "moderately-religious", label: "Moderately Religious" },
    { value: "not-religious", label: "Not Religious" },
  ];

  const financialStatusOptions = [
    { value: "below-2-lakh", label: "Below 2 Lakh" },
    { value: "2-5-lakh", label: "2-5 Lakh" },
    { value: "5-10-lakh", label: "5-10 Lakh" },
    { value: "10-20-lakh", label: "10-20 Lakh" },
    { value: "20-50-lakh", label: "20-50 Lakh" },
    { value: "50-lakh-1-crore", label: "50 Lakh - 1 Crore" },
    { value: "above-1-crore", label: "Above 1 Crore" },
  ];

  const fatherStatusOptions = [
    { value: "employed", label: "Employed" },
    { value: "business", label: "Business" },
    { value: "retired", label: "Retired" },
    { value: "not-employed", label: "Not Employed" },
    { value: "passed-away", label: "Passed Away" },
  ];

  const motherStatusOptions = [
    { value: "homemaker", label: "Homemaker" },
    { value: "employed", label: "Employed" },
    { value: "business", label: "Business" },
    { value: "retired", label: "Retired" },
    { value: "passed-away", label: "Passed Away" },
  ];

  const livingWithParentsOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "sometimes", label: "Sometimes" },
  ];

  return (
    <div className="container mx-auto">
      <Card className="w-full shadow-lg hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader
          className="cursor-pointer hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 rounded-t-lg group"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <CardTitle className="text-xl font-semibold flex items-center justify-between text-gray-800 group-hover:text-gray-900">
            Family Aspects
            <div
              className={`transform transition-all duration-300 ${
                isFormOpen ? "rotate-0" : "rotate-180"
              }`}
            >
              <ChevronUp className="h-5 w-5 group-hover:scale-110" />
            </div>
          </CardTitle>
        </CardHeader>

        <Collapsible open={isFormOpen} onOpenChange={setIsFormOpen}>
          <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-300">
            <CardContent className="space-y-8 p-6">
              <FormSection title="Family Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Family Beliefs"
                    id="familyBeliefs"
                    placeholder="Enter Family Beliefs"
                  />
                  <SelectField
                    label="Religion"
                    id="religion"
                    placeholder="Select Religion"
                    options={religionOptions}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Caste"
                    id="caste"
                    placeholder="Enter Caste"
                  />
                  <InputField
                    label="Sub Caste"
                    id="subCaste"
                    placeholder="Enter Sub Caste"
                  />
                  <SelectField
                    label="Nationality"
                    id="nationality"
                    placeholder="Select Nationality"
                    options={nationalityOptions}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField
                    label="Family Rituals Followers"
                    id="familyRituals"
                    placeholder="Select Level"
                    options={familyRitualsOptions}
                  />
                  <SelectField
                    label="Financial Status (Annual Income)"
                    id="financialStatus"
                    placeholder="Select Income Range"
                    options={financialStatusOptions}
                  />
                </div>
              </FormSection>

              <FormSection title="Parents Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField
                    label="Father is"
                    id="fatherStatus"
                    placeholder="Select Father's Status"
                    options={fatherStatusOptions}
                  />
                  <SelectField
                    label="Mother is"
                    id="motherStatus"
                    placeholder="Select Mother's Status"
                    options={motherStatusOptions}
                  />
                </div>
              </FormSection>

              <FormSection title="Siblings Information">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Brothers"
                    id="brothers"
                    placeholder="Enter Number of Brothers"
                    type="number"
                  />
                  <InputField
                    label="Sisters"
                    id="sisters"
                    placeholder="Enter Number of Sisters"
                    type="number"
                  />
                </div>
              </FormSection>

              <FormSection title="Living Arrangements">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField
                    label="Living with Parents"
                    id="livingWithParents"
                    placeholder="Select Option"
                    options={livingWithParentsOptions}
                  />
                  <InputField
                    label="Family based in"
                    id="familyBasedIn"
                    placeholder="Enter Location"
                  />
                </div>
              </FormSection>

              <FormSection title="Financial Expectations">
                <div className="grid grid-cols-1 gap-6">
                  <InputField
                    label="Expecting Gift from Groom Side (Value in INR)"
                    id="expectedGift"
                    placeholder="Enter Expected Gift Value"
                    type="number"
                  />
                </div>
              </FormSection>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-end">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-black/80 text-black hover:bg-white hover:text-gray-900 px-12 py-6 text-base sm:text-lg font-semibold rounded-md transition-colors bg-transparent"
                >
                  Cancel
                </Button>
                <Button
                  size="lg"
                  className="text-white bg-[#E92063] hover:bg-[#E92063]/90 px-12 py-6.5 text-base sm:text-lg font-semibold rounded-md transition-colors"
                >
                  Submit
                </Button>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </div>
  );
}

export default FamilyAspects;
