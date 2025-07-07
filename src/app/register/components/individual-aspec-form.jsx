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
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Upload, Calendar, Clock } from "lucide-react";

function IndividualForm() {
  const [isFormOpen, setIsFormOpen] = useState(true);

  const [expectationsOpen, setExpectationsOpen] = useState(false);

  const FileUploadArea = ({ label }) => (
    <div className="group border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-pink-400 hover:bg-pink-50/30 transition-all duration-300 ease-in-out cursor-pointer">
      <Upload className="mx-auto h-8 w-8 text-gray-400 group-hover:text-pink-500 transition-colors duration-300 mb-2" />
      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-2">
        Drag and drop to upload your files.
      </p>

      <Button
        size="lg"
        className="text-white bg-[#F5821E] hover:bg-[#F5821E]/90 px-12 py-6.5 text-base sm:text-lg font-semibold rounded-md transition-colors"
      >
        {label}
      </Button>
    </div>
  );

  const FormSection = ({ title, children }) => (
    <div className="space-y-4 p-6 bg-gradient-to-r from-gray-50/50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
        {title}
      </h3>
      {children}
    </div>
  );

  const InputField = ({ label, id, placeholder, type = "text", icon }) => (
    <div className="space-y-2 group">
      <Label
        htmlFor={id}
        className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
      >
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="transition-all duration-300 border-gray-200 hover:border-gray-300 focus:border-pink-400 focus:ring-pink-400/20 hover:shadow-sm"
        />
        {icon && (
          <div className="absolute right-3 top-3 text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
            {icon}
          </div>
        )}
      </div>
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

  const stateOptions = [
    { value: "andhra-pradesh", label: "Andhra Pradesh" },
    { value: "arunachal-pradesh", label: "Arunachal Pradesh" },
    { value: "assam", label: "Assam" },
    { value: "bihar", label: "Bihar" },
    { value: "chhattisgarh", label: "Chhattisgarh" },
    { value: "goa", label: "Goa" },
    { value: "gujarat", label: "Gujarat" },
    { value: "haryana", label: "Haryana" },
    { value: "himachal-pradesh", label: "Himachal Pradesh" },
    { value: "jharkhand", label: "Jharkhand" },
    { value: "karnataka", label: "Karnataka" },
    { value: "kerala", label: "Kerala" },
    { value: "madhya-pradesh", label: "Madhya Pradesh" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "manipur", label: "Manipur" },
    { value: "meghalaya", label: "Meghalaya" },
    { value: "mizoram", label: "Mizoram" },
    { value: "nagaland", label: "Nagaland" },
    { value: "odisha", label: "Odisha" },
    { value: "punjab", label: "Punjab" },
    { value: "rajasthan", label: "Rajasthan" },
    { value: "sikkim", label: "Sikkim" },
    { value: "tamil-nadu", label: "Tamil Nadu" },
    { value: "telangana", label: "Telangana" },
    { value: "tripura", label: "Tripura" },
    { value: "uttar-pradesh", label: "Uttar Pradesh" },
    { value: "uttarakhand", label: "Uttarakhand" },
    { value: "west-bengal", label: "West Bengal" },
    { value: "delhi", label: "Delhi" },
  ];

  const occupationOptions = [
    { value: "business", label: "Business" },
    { value: "service-private", label: "Service - Private" },
    { value: "service-government", label: "Service - Government" },
    { value: "professional", label: "Professional" },
    { value: "doctor", label: "Doctor" },
    { value: "engineer", label: "Engineer" },
    { value: "teacher", label: "Teacher" },
    { value: "lawyer", label: "Lawyer" },
    { value: "ca", label: "Chartered Accountant" },
    { value: "it", label: "IT Professional" },
    { value: "banking", label: "Banking" },
    { value: "defense", label: "Defense" },
    { value: "agriculture", label: "Agriculture" },
    { value: "retired", label: "Retired" },
    { value: "homemaker", label: "Homemaker" },
    { value: "student", label: "Student" },
    { value: "other", label: "Other" },
  ];

  const bloodGroupOptions = [
    { value: "a+", label: "A+" },
    { value: "a-", label: "A-" },
    { value: "b+", label: "B+" },
    { value: "b-", label: "B-" },
    { value: "ab+", label: "AB+" },
    { value: "ab-", label: "AB-" },
    { value: "o+", label: "O+" },
    { value: "o-", label: "O-" },
  ];

  return (
    <div className="container mx-auto ">
      <Card className="w-full shadow-lg hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader
          className="cursor-pointer  transition-all duration-300 rounded-t-lg group"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <CardTitle className="text-xl font-semibold flex items-center justify-between text-gray-800 group-hover:text-gray-900">
            Individual Aspects
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
              {/* General Information */}
              <FormSection title="General Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="First Name"
                    id="firstName"
                    placeholder="Enter First Name"
                  />
                  <InputField
                    label="Middle Name"
                    id="middleName"
                    placeholder="Enter Middle Name"
                  />
                  <InputField
                    label="Last Name"
                    id="lastName"
                    placeholder="Enter Last Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Father Name"
                    id="fatherName"
                    placeholder="Enter Father Name"
                  />
                  <InputField
                    label="Mother Name"
                    id="motherName"
                    placeholder="Enter Mother Name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Date of birth"
                    id="dateOfBirth"
                    placeholder="Select Date of birth"
                    icon={<Calendar className="h-4 w-4" />}
                  />
                  <InputField
                    label="Time of birth"
                    id="timeOfBirth"
                    placeholder="Select Time of birth"
                    icon={<Clock className="h-4 w-4" />}
                  />
                  <InputField
                    label="Place of birth"
                    id="placeOfBirth"
                    placeholder="Enter Place of birth"
                  />
                </div>

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
                  <InputField
                    label="Gotra"
                    id="gotra"
                    placeholder="Enter Gotra"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Nakshatra"
                    id="nakshatra"
                    placeholder="Enter Nakshatra"
                  />
                  <SelectField
                    label="Manglik Status"
                    id="manglikStatus"
                    placeholder="Select Status"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                      { value: "anshik", label: "Anshik" },
                    ]}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Janampatri
                  </Label>
                  <FileUploadArea label="Upload Images" />
                </div>
              </FormSection>

              {/* Address Information */}
              <FormSection title="Address Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="House No."
                    id="houseNo"
                    placeholder="Enter House No."
                  />
                  <InputField
                    label="Vill/Street"
                    id="villStreet"
                    placeholder="Enter Vill/Street"
                  />
                  <InputField
                    label="Post Office"
                    id="postOffice"
                    placeholder="Enter Post Office"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Pin Code"
                    id="pinCode"
                    placeholder="Enter Pin Code"
                  />
                  <InputField
                    label="District"
                    id="district"
                    placeholder="Enter District"
                  />
                  <SelectField
                    label="State"
                    id="state"
                    placeholder="Select State"
                    options={stateOptions}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Police Station"
                    id="policeStation"
                    placeholder="Select Police Station"
                  />
                  <InputField
                    label="Aadhaar No"
                    id="aadhaarNo"
                    placeholder="Enter Aadhaar No"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Upload Aadhaar Card
                  </Label>
                  <FileUploadArea label="Upload Images" />
                </div>
              </FormSection>

              {/* Education Information */}
              <FormSection title="Education Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Highest Degree"
                    id="highestDegree"
                    placeholder="Enter Highest Degree"
                  />
                  <InputField
                    label="Under Graduate"
                    id="underGraduate"
                    placeholder="Enter Under Graduate"
                  />
                  <InputField
                    label="School"
                    id="school"
                    placeholder="Enter School"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Languages Known"
                    id="languagesKnown"
                    placeholder="Enter Languages"
                  />
                  <InputField
                    label="Mother Tongue"
                    id="motherTongue"
                    placeholder="Enter Mother Tongue"
                  />
                  <SelectField
                    label="Marital Status"
                    id="maritalStatus"
                    placeholder="Select Status"
                    options={[
                      { value: "single", label: "Single" },
                      { value: "married", label: "Married" },
                      { value: "divorced", label: "Divorced" },
                      { value: "widowed", label: "Widowed" },
                    ]}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Height"
                    id="height"
                    placeholder="Enter Height"
                  />
                  <SelectField
                    label="Colour"
                    id="colour"
                    placeholder="Select Colour"
                    options={[
                      { value: "fair", label: "Fair" },
                      { value: "medium", label: "Medium" },
                      { value: "dark", label: "Dark" },
                    ]}
                  />
                  <InputField
                    label="Aadhaar No"
                    id="aadhaarNo2"
                    placeholder="Enter Aadhaar No"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Upload Latest Photo
                  </Label>
                  <FileUploadArea label="Upload Images" />
                </div>
              </FormSection>

              {/* Occupation Information */}
              <FormSection title="Occupation Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <SelectField
                    label="Occupation"
                    id="occupation"
                    placeholder="Select Occupation"
                    options={occupationOptions}
                  />
                  <SelectField
                    label="If Salaried"
                    id="ifSalaried"
                    placeholder="Select"
                    options={[
                      { value: "yes", label: "Yes" },
                      { value: "no", label: "No" },
                    ]}
                  />
                  <InputField
                    label="Name Of Company"
                    id="companyName"
                    placeholder="Enter Name Of Company"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Designation"
                    id="designation"
                    placeholder="Enter Designation"
                  />
                  <InputField
                    label="Annual Income"
                    id="annualIncome"
                    placeholder="Enter Annual Income"
                  />
                  <InputField
                    label="Liabilities"
                    id="liabilities"
                    placeholder="Enter Liabilities"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Assets"
                    id="assets"
                    placeholder="Enter Assets"
                  />
                  <InputField
                    label="Pan No"
                    id="panNo"
                    placeholder="Enter Pan No"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">
                    Upload Pan Card
                  </Label>
                  <FileUploadArea label="Upload Images" />
                </div>
              </FormSection>

              {/* Health Information */}
              <FormSection title="Health Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Health"
                    id="health"
                    placeholder="Enter Health Status"
                  />
                  <SelectField
                    label="Blood Group"
                    id="bloodGroup"
                    placeholder="Select Blood Group"
                    options={bloodGroupOptions}
                  />
                  <InputField
                    label="Any Disability/Chronic Disease"
                    id="disability"
                    placeholder="Enter Any Disability/Chronic Disease"
                  />
                </div>
              </FormSection>

              {/* Other Information */}
              <FormSection title="Other Information">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Hobbies"
                    id="hobbies"
                    placeholder="Enter Hobbies"
                  />
                  <InputField
                    label="Interests"
                    id="interests"
                    placeholder="Enter Interests"
                  />
                  <InputField
                    label="Favourite Music"
                    id="favouriteMusic"
                    placeholder="Enter Favourite Music"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Favourite Movie"
                    id="favouriteMovie"
                    placeholder="Enter Favourite Movie"
                  />
                  <InputField
                    label="Favourite TV Shows"
                    id="favouriteTvShows"
                    placeholder="Enter Favourite TV Shows"
                  />
                  <SelectField
                    label="Food I Cook"
                    id="foodICook"
                    placeholder="Select Food Type"
                    options={[
                      { value: "vegetarian", label: "Vegetarian" },
                      { value: "non-vegetarian", label: "Non-Vegetarian" },
                      { value: "vegan", label: "Vegan" },
                      { value: "jain", label: "Jain" },
                    ]}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Dress Style"
                    id="dressStyle"
                    placeholder="Enter Dress Style"
                  />
                  <InputField
                    label="Favourite Vacation Destination"
                    id="favouriteVacation"
                    placeholder="Enter Favourite Vacation Destination"
                  />
                  <InputField
                    label="Likes"
                    id="likes"
                    placeholder="Enter Likes"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Dislikes"
                    id="dislikes"
                    placeholder="Enter Dislikes"
                  />
                  <SelectField
                    label="Your Personality"
                    id="personality"
                    placeholder="Select Personality"
                    options={[
                      { value: "introvert", label: "Introvert" },
                      { value: "extrovert", label: "Extrovert" },
                      { value: "ambivert", label: "Ambivert" },
                    ]}
                  />
                  <InputField
                    label="Goals"
                    id="goals"
                    placeholder="Enter Goals"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Interested in Settling Abroad"
                    id="settlingAbroad"
                    placeholder="Yes/No"
                  />
                  <InputField
                    label="Mobile No"
                    id="mobileNo"
                    placeholder="Enter Mobile No"
                  />
                  <InputField
                    label="Alt Mobile No"
                    id="altMobileNo"
                    placeholder="Enter Alt Mobile No"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Email ID"
                    id="emailId"
                    placeholder="Enter Email ID"
                    type="email"
                  />
                  <InputField
                    label="Alt Email ID"
                    id="altEmailId"
                    placeholder="Enter Alt Email ID"
                    type="email"
                  />
                  <SelectField
                    label="Profile Created By"
                    id="profileCreatedBy"
                    placeholder="Select Creator"
                    options={[
                      { value: "self", label: "Self" },
                      { value: "parent", label: "Parent" },
                      { value: "sibling", label: "Sibling" },
                      { value: "relative", label: "Relative" },
                      { value: "friend", label: "Friend" },
                    ]}
                  />
                </div>
              </FormSection>

              {/* Expectations From Spouse - Collapsible */}
              <Collapsible
                open={expectationsOpen}
                onOpenChange={setExpectationsOpen}
              >
                <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-up-2 data-[state=open]:slide-down-2 duration-300">
                  <div className="pt-4 space-y-4 p-6 bg-gradient-to-r from-gray-50/50 to-white rounded-b-xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField
                        label="Age Range"
                        id="ageRange"
                        placeholder="Enter Age Range"
                      />
                      <InputField
                        label="Height Range"
                        id="heightRange"
                        placeholder="Enter Height Range"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="expectations"
                        className="text-sm font-medium text-gray-700"
                      >
                        Other Expectations
                      </Label>
                      <Textarea
                        id="expectations"
                        placeholder="Enter your expectations from spouse"
                        rows={4}
                        className="transition-all duration-300 border-gray-200 hover:border-gray-300 focus:border-pink-400 focus:ring-pink-400/20 hover:shadow-sm resize-none"
                      />
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

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

export default IndividualForm;
