import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function Center() {
  const services = [
    {
      number: "1",
      title: "One-on-One Counselling",
      description:
        "Personalized sessions with certified relationship experts to help couples and families align expectations, resolve concerns, and prepare emotionally for marriage.",
    },
    {
      number: "2",
      title: "Policy & Document Verification",
      description:
        "Hands-on support to verify legal documents, ID proofs, employment records, and insurance or financial details—ensuring complete transparency.",
    },
    {
      number: "3",
      title: "Health Check-Ups",
      description:
        "In-clinic pre-marriage health screenings including general wellness, STD/STI tests, fertility insights, and mental well-being assessments, all conducted with full confidentiality.",
    },
    {
      number: "4",
      title: "Legal Advisory Desk",
      description:
        "Access to certified legal professionals for guidance on prenuptial agreements, interfaith/legal marriage rights, and conflict resolution frameworks.",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="mt-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md::text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Offline Center – In-Person Support You Can Trust
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Services List */}
          <div className="lg:col-span-2 space-y-8">
            {services.map((service, index) => (
              <div key={index} className="flex gap-6 items-start">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-800 leading-none">
                    {service.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#333333] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#5A5A5A] text-base md:text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Logo/Brand Section */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <Card className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg max-w-sm w-full">
              <CardContent className="flex items-center justify-center p-0">
                <div className="relative w-full h-64 sm:h-80">
                  <Image
                    src="/assets/centre.png"
                    alt="Protect Destiny Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
