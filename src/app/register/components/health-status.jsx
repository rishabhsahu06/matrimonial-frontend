"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

function HealthStatus() {
  const [isFormOpen, setIsFormOpen] = useState(true);

  const FormSection = ({ title, children }) => (
    <div className="space-y-4 p-6 bg-gradient-to-r from-gray-50/50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
        {title}
      </h3>
      {children}
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

  const yesNoOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  return (
    <div className="container mx-auto">
      <Card className="w-full shadow-lg hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader
          className="cursor-pointer hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 rounded-t-lg group"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <CardTitle className="text-xl font-semibold flex items-center justify-between text-gray-800 group-hover:text-gray-900">
            Health Status
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
              {/* Basic Health Tests */}
              <FormSection title="Basic Health Tests">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField
                    label="Complete Blood Count (CBC)"
                    id="cbc"
                    placeholder="Select Option"
                    options={yesNoOptions}
                  />
                  <SelectField
                    label="HIV / AIDS"
                    id="hivAids"
                    placeholder="Select Option"
                    options={yesNoOptions}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField
                    label="Hepatitis B & C"
                    id="hepatitis"
                    placeholder="Select Option"
                    options={yesNoOptions}
                  />
                  <SelectField
                    label="Other STIs"
                    id="otherStis"
                    placeholder="Select Option"
                    options={yesNoOptions}
                  />
                </div>
              </FormSection>

              {/* Fertility Assessments */}
              <FormSection title="Fertility Assessments">
                <div className="grid grid-cols-1 gap-6">
                  <SelectField
                    label="Semen Analysis (for men)"
                    id="semenAnalysis"
                    placeholder="Select Option"
                    options={yesNoOptions}
                  />
                  <SelectField
                    label="Ovarian Reserve & Hormonal Tests (for women)"
                    id="ovarianReserve"
                    placeholder="Select Option"
                    options={yesNoOptions}
                  />
                </div>
              </FormSection>

              {/* Action Buttons */}
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
                  className="text-white bg-[#F5821E] hover:bg-[#F5821E]/90 px-12 py-6.5 text-base sm:text-lg font-semibold rounded-md transition-colors"
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

export default HealthStatus;
