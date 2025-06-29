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

function SpouseExpectation() {
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

  const colourOptions = [
    { value: "fair", label: "Fair" },
    { value: "medium", label: "Medium" },
    { value: "dark", label: "Dark" },
    { value: "any", label: "Any" },
  ];

  const residentialStatusOptions = [
    { value: "permanent", label: "Permanent" },
    { value: "nri", label: "NRI" },
  ];

  const occupationOptions = [
    { value: "salaried", label: "Salaried" },
    { value: "self-employed", label: "Self Employed" },
    { value: "business", label: "Business" },
    { value: "professional", label: "Professional" },
    { value: "any", label: "Any" },
  ];

  const incomeOptions = [
    { value: "below-2-lakh", label: "Below 2 Lakh" },
    { value: "2-5-lakh", label: "2-5 Lakh" },
    { value: "5-10-lakh", label: "5-10 Lakh" },
    { value: "10-20-lakh", label: "10-20 Lakh" },
    { value: "20-50-lakh", label: "20-50 Lakh" },
    { value: "50-lakh-1-crore", label: "50 Lakh - 1 Crore" },
    { value: "above-1-crore", label: "Above 1 Crore" },
  ];

  const maritalStatusOptions = [
    { value: "single", label: "Single" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
    { value: "any", label: "Any" },
  ];

  const haveChildrenOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "doesnt-matter", label: "Doesn't Matter" },
  ];

  const religionOptions = [
    { value: "hindu", label: "Hindu" },
    { value: "muslim", label: "Muslim" },
    { value: "christian", label: "Christian" },
    { value: "sikh", label: "Sikh" },
    { value: "buddhist", label: "Buddhist" },
    { value: "jain", label: "Jain" },
    { value: "other", label: "Other" },
    { value: "any", label: "Any" },
  ];

  const familyTypeOptions = [
    { value: "joint-family", label: "Joint Family" },
    { value: "single-family", label: "Single Family" },
    { value: "any", label: "Any" },
  ];

  const manglikOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "anshik", label: "Anshik" },
    { value: "doesnt-matter", label: "Doesn't Matter" },
  ];

  const familyRitualsOptions = [
    { value: "very-religious", label: "Very Religious" },
    { value: "religious", label: "Religious" },
    { value: "moderately-religious", label: "Moderately Religious" },
    { value: "not-religious", label: "Not Religious" },
    { value: "any", label: "Any" },
  ];

  const skilledOptions = [
    { value: "cooking", label: "Cooking" },
    { value: "household-management", label: "Managing the Household" },
    { value: "raising-children", label: "Raising Children" },
    { value: "all", label: "All of the Above" },
    { value: "any", label: "Any" },
  ];

  const personalityOptions = [
    { value: "supportive", label: "Supportive" },
    { value: "understanding", label: "Understanding" },
    { value: "communicative", label: "Communicative" },
    { value: "all", label: "All of the Above" },
  ];

  const profileCreatedByOptions = [
    { value: "self", label: "Self" },
    { value: "parent", label: "Parent" },
    { value: "sibling", label: "Sibling" },
    { value: "relative", label: "Relative" },
    { value: "friend", label: "Friend" },
  ];

  const foodHabitsOptions = [
    { value: "vegetarian", label: "Vegetarian" },
    { value: "non-vegetarian", label: "Non-Vegetarian" },
    { value: "vegan", label: "Vegan" },
    { value: "jain", label: "Jain" },
    { value: "any", label: "Any" },
  ];

  const smokingOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "occasionally", label: "Occasionally" },
    { value: "doesnt-matter", label: "Doesn't Matter" },
  ];

  const drinkingOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "occasionally", label: "Occasionally" },
    { value: "socially", label: "Socially" },
    { value: "doesnt-matter", label: "Doesn't Matter" },
  ];

  const disabilityOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "doesnt-matter", label: "Doesn't Matter" },
  ];

  return (
    <div className="container mx-auto">
      <Card className="w-full shadow-lg hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader
          className="cursor-pointer hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 rounded-t-lg group"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <CardTitle className="text-xl font-semibold flex items-center justify-between text-gray-800 group-hover:text-gray-900">
            Expectations from Spouse
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
              {/* Basic Information */}
              <FormSection title="Basic Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Age"
                    id="age"
                    placeholder="Enter Age Range (e.g., 25-30)"
                  />
                  <InputField
                    label="Height"
                    id="height"
                    placeholder="Enter Height Range (e.g., 5'4-5'8)"
                  />
                  <SelectField
                    label="Colour"
                    id="colour"
                    placeholder="Select Colour"
                    options={colourOptions}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Country (State/City)"
                    id="location"
                    placeholder="Enter Preferred Location"
                  />
                  <SelectField
                    label="Residential Status"
                    id="residentialStatus"
                    placeholder="Select Status"
                    options={residentialStatusOptions}
                  />
                </div>
              </FormSection>

              {/* Education & Career */}
              <FormSection title="Education & Career">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Education"
                    id="education"
                    placeholder="Enter Education Level"
                  />
                  <InputField
                    label="Highest Degree"
                    id="highestDegree"
                    placeholder="Enter Highest Degree"
                  />
                  <SelectField
                    label="Occupation"
                    id="occupation"
                    placeholder="Select Occupation Type"
                    options={occupationOptions}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <SelectField
                    label="Income"
                    id="income"
                    placeholder="Select Income Range"
                    options={incomeOptions}
                  />
                </div>
              </FormSection>

              {/* Personal Details */}
              <FormSection title="Personal Details">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SelectField
                    label="Marital Status"
                    id="maritalStatus"
                    placeholder="Select Status"
                    options={maritalStatusOptions}
                  />
                  <SelectField
                    label="Have Children"
                    id="haveChildren"
                    placeholder="Select Option"
                    options={haveChildrenOptions}
                  />
                  <InputField
                    label="Mother Tongue"
                    id="motherTongue"
                    placeholder="Enter Mother Tongue"
                  />
                </div>
              </FormSection>

              {/* Religious & Cultural */}
              <FormSection title="Religious & Cultural">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SelectField
                    label="Religion"
                    id="religion"
                    placeholder="Select Religion"
                    options={religionOptions}
                  />
                  <InputField
                    label="Caste"
                    id="caste"
                    placeholder="Enter Caste"
                  />
                  <SelectField
                    label="Family Type"
                    id="familyType"
                    placeholder="Select Family Type"
                    options={familyTypeOptions}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField
                    label="Manglik"
                    id="manglik"
                    placeholder="Select Option"
                    options={manglikOptions}
                  />
                  <SelectField
                    label="Family Ritual Followers"
                    id="familyRituals"
                    placeholder="Select Level"
                    options={familyRitualsOptions}
                  />
                </div>
              </FormSection>

              {/* Skills & Personality */}
              <FormSection title="Skills & Personality">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SelectField
                    label="To be Skilled"
                    id="skills"
                    placeholder="Select Skills"
                    options={skilledOptions}
                  />
                  <SelectField
                    label="To be (Personality)"
                    id="personality"
                    placeholder="Select Personality Traits"
                    options={personalityOptions}
                  />
                </div>
              </FormSection>

              {/* Lifestyle Preferences */}
              <FormSection title="Lifestyle Preferences">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SelectField
                    label="Food Habits"
                    id="foodHabits"
                    placeholder="Select Food Preference"
                    options={foodHabitsOptions}
                  />
                  <SelectField
                    label="Smoking"
                    id="smoking"
                    placeholder="Select Option"
                    options={smokingOptions}
                  />
                  <SelectField
                    label="Drinking"
                    id="drinking"
                    placeholder="Select Option"
                    options={drinkingOptions}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <SelectField
                    label="Disability"
                    id="disability"
                    placeholder="Select Option"
                    options={disabilityOptions}
                  />
                </div>
              </FormSection>

              {/* Financial & Other */}
              <FormSection title="Financial & Other Expectations">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Gifts from Groom Side (Value in INR)"
                    id="expectedGift"
                    placeholder="Enter Expected Gift Value"
                    type="number"
                  />
                  <SelectField
                    label="Profile Created By"
                    id="profileCreatedBy"
                    placeholder="Select Creator"
                    options={profileCreatedByOptions}
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

export default SpouseExpectation;
