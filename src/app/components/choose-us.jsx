import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function ChooseUs() {
  const cardData = [
    {
      id: 1,
      title: "Expert-Guided Process",
      description:
        "Get support from trusted professionals. Our team includes certified doctors, legal advisors, and counsellors to guide you every step of the way.",
      bgColor: "bg-[#BC7D27]",
      textColor: "text-white",
    },
    {
      id: 2,
      image: "/assets/couple.png",
      alt: "Happy couple celebrating together",
    },
    {
      id: 3,
      title: "Secure and Confidential",
      description:
        "Your personal data is safe with us. All medical records, agreements, and conversations are encrypted and shared only with your consent.",
      bgColor: "bg-[#EED6B4]",
      textColor: "text-gray-800",
    },
    {
      id: 4,
      image: "/assets/makeup.png",
      alt: "Woman working on laptop",
    },
    {
      id: 5,
      title: "Complete Transparency",
      description:
        "We empower couples to enter marriage with open eyes and honest conversations. From health status to legal terms, we help you lay everything on the tab.",
      bgColor: "bg-[#F5821E99]",
      textColor: "text-white",
    },
  ];

  return (
    <div className="container mx-auto py-12 ">
      <section className="space-y-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-4 md:mt-8">
          <div className="space-y-4">
            <p className="text-gray-600 text-sm md:text-lg font-medium tracking-wide uppercase">
              Why Choose Us
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Because Marriage Deserves More Than Just a Ceremony
            </h1>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We combine legal clarity, health transparency, and emotional
              readiness - all in one secure, supportive platform designed for
              modern couples.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* First Row */}
          <div className="lg:col-span-1">
            <Card
              className={`h-full ${cardData[0].bgColor} border-none shadow-lg`}
            >
              <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center">
                <div className="space-y-4">
                  <h3
                    className={`text-xl md:text-2xl font-bold ${cardData[0].textColor} leading-tight`}
                  >
                    {cardData[0].title}
                  </h3>
                  <p
                    className={`${cardData[0].textColor} opacity-90 text-sm md:text-base leading-relaxed`}
                  >
                    {cardData[0].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 md:h-80 lg:h-full min-h-[300px]">
                  <Image
                    src={cardData[1].image}
                    alt={cardData[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card
              className={`h-full ${cardData[2].bgColor} border-none shadow-lg`}
            >
              <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center">
                <div className="space-y-4">
                  <h3
                    className={`text-xl md:text-2xl font-bold ${cardData[2].textColor} leading-tight`}
                  >
                    {cardData[2].title}
                  </h3>
                  <p
                    className={`${cardData[2].textColor} text-sm md:text-base leading-relaxed`}
                  >
                    {cardData[2].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row */}
          <div className="lg:col-span-1 md:order-1 lg:order-none">
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative h-64 md:h-80 lg:h-full min-h-[300px]">
                  <Image
                    src={cardData[3].image}
                    alt={cardData[3].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 md:order-0 lg:order-none">
            <Card
              className={`h-full ${cardData[4].bgColor} border-none shadow-lg`}
            >
              <CardContent className="p-6 md:p-8 h-full flex flex-col justify-center">
                <div className="space-y-4">
                  <h3
                    className={`text-2xl md:text-3xl font-bold ${cardData[4].textColor} leading-tight`}
                  >
                    {cardData[4].title}
                  </h3>
                  <p
                    className={`${cardData[4].textColor} opacity-90 text-base md:text-lg leading-relaxed max-w-2xl`}
                  >
                    {cardData[4].description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChooseUs;
