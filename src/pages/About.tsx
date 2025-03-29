import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Award,
  TrendingUp,
  ShieldCheck,
  Users,
  Globe,
} from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us | OMAYA Express Exchange";
  }, []);

  const timeline = [
    {
      year: "2015",
      event:
        "Omar Ali Omar begins his journey in the cryptocurrency market as an individual investor",
    },
    {
      year: "2019",
      event:
        "OMAYA Express Exchange is founded by Omar Ali Omar, focusing on cryptocurrency exchange services",
    },
    {
      year: "2020",
      event:
        "Official registration with the Ministry of Commerce and the Central Bank of Somalia",
    },
    {
      year: "2021",
      event: "Expansion of services to include NFT exchange capabilities",
    },
    {
      year: "2022",
      event:
        "Achieved consistent monthly exchange volume of 500K-800K USD during bear market conditions",
    },
    {
      year: "2023",
      event:
        "Seeking investment to scale operations and enhance platform capabilities",
    },
  ];

  const values = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Security & Trust",
      description:
        "We prioritize the security of our clients' assets and personal information, implementing robust security measures to protect against threats.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer-Centric",
      description:
        "Our clients are at the heart of everything we do. We strive to provide exceptional service and support to meet their unique needs.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description:
        "We continuously explore new technologies and approaches to improve our platform and offer cutting-edge solutions to our clients.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Accessibility",
      description:
        "We're committed to making cryptocurrency trading accessible to everyone, regardless of their level of experience or technical knowledge.",
    },
  ];

  const achievements = [
    {
      number: "$800K+",
      label: "Monthly Exchange Volume",
      subtitle: "During bear market conditions",
    },
    {
      number: "2,500+",
      label: "Active Users",
      subtitle: "And growing every day",
    },
    {
      number: "5+",
      label: "Years of Experience",
      subtitle: "In the cryptocurrency market",
    },
    {
      number: "10+",
      label: "Supported Cryptocurrencies",
      subtitle: "Including Bitcoin, Ethereum, and USDT",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/20 text-primary rounded-full">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About OMAYA Express Exchange
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Founded in 2019 by Omar Ali Omar, OMAYA Express Exchange is a
            leading digital asset exchange company in Somalia, registered with
            the Ministry of Commerce and the Central Bank.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button
              className="bg-primary hover:bg-primary/90 text-black"
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/market">Market Analysis</Link>
            </Button>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll p-8">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary/20 rounded-full mr-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4">
                To provide a secure, reliable, and user-friendly platform for
                cryptocurrency and NFT exchanges, empowering individuals to
                participate in the digital economy with confidence.
              </p>
              <p className="text-muted-foreground">
                We aim to bridge the gap between traditional financial systems
                and digital assets, making cryptocurrency trading accessible to
                everyone in Somalia and beyond.
              </p>
            </CardContent>
          </Card>

          <Card
            className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll p-8"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-primary/20 rounded-full mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <CardContent className="p-0">
              <p className="text-muted-foreground mb-4">
                To become the leading digital asset exchange platform in Somalia
                and East Africa, known for our security, reliability, and
                customer-centric approach.
              </p>
              <p className="text-muted-foreground">
                We envision a future where digital assets are seamlessly
                integrated into everyday financial transactions, and OMAYA
                Express Exchange is at the forefront of this transformation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company History Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From our humble beginnings to our current position as a leading
              digital asset exchange in Somalia, our journey has been marked by
              growth, resilience, and innovation.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row items-start"> {/* Reduced gap */}
  {/* Timeline Section */}
  <div className="relative border-l border-primary/30 ml-4 md:ml-0 flex-1">
    {timeline.map((item, index) => (
      <div
        key={index}
        className="mb-8 ml-6 animate-on-scroll" 
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <span className="absolute flex items-center justify-center w-8 h-8 bg-primary text-black rounded-full -left-4 ring-4 ring-background">
          {item.year.slice(2)}
        </span>
        <div className="p-4 bg-card/50 border border-border/50 rounded-lg backdrop-blur-sm">
          <time className="mb-1 text-sm font-normal leading-none text-primary">
            {item.year}
          </time>
          <p className="text-base font-normal text-muted-foreground">
            {item.event}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Images Section - Larger and Closer */}
  <div className="flex flex-col gap-3 w-full md:w-auto md:pl-4 mt-0"> {/* Reduced padding-left and gap */}
    <div className="flex gap-3">
      <div className="flex flex-col gap-3">
        <div className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-2xl shadow-md">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/pitz/image/upload/v1743243986/image_2_u3etcp.jpg"
            alt="Company event"
          />
        </div>
        <div className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-2xl shadow-md">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/pitz/image/upload/v1743244292/image_4_r2gcjm.jpg"
            alt="Team meeting"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6"> {/* Reduced margin-top */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-2xl shadow-md">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/pitz/image/upload/v1743243985/image_1_e7acra.jpg"
            alt="Office workspace"
          />
        </div>
        <div className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-2xl shadow-md">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/pitz/image/upload/v1743243985/image_3_crzhhp.jpg"
            alt="Company growth"
          />
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide our decisions, shape our culture, and
              define how we interact with our clients and the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll flex"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-5 bg-primary/10 flex items-center justify-center">
                  {value.icon}
                </div>
                <CardContent className="flex-1 p-5">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Despite the inherent volatility of the cryptocurrency market,
              we've consistently delivered value to our clients and achieved
              significant milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll text-center p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-medium mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.subtitle}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our company is led by experienced professionals who are passionate
              about cryptocurrency and committed to our mission.
            </p>
          </div>

          <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-on-scroll max-w-3xl mx-auto">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="w-40 h-40 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://res.cloudinary.com/pitz/image/upload/v1743243985/image_3_crzhhp.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Omar Ali Omar</h3>
                <div className="text-primary font-medium mb-4">
                  Founder & CEO
                </div>
                <p className="text-muted-foreground mb-4">
                  With nearly a decade of experience in the cryptocurrency
                  market, Omar Ali Omar brings deep industry knowledge and
                  strategic vision to OMAYA Express Exchange. His leadership has
                  been instrumental in establishing the company as a trusted
                  digital asset exchange in Somalia.
                </p>
                <p className="text-muted-foreground">
                  As CEO, Omar oversees all strategic and operational aspects of
                  the company, ensuring that OMAYA Express Exchange remains
                  aligned with its mission and vision of providing secure,
                  efficient, and user-friendly exchange services.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-8 text-center animate-on-scroll">
          <h2 className="text-2xl font-bold mb-4">
            Join OMAYA Express Exchange Today
          </h2>
          <p className="text-muted-foreground mb-6">
            Experience the security, efficiency, and user-friendliness of our
            digital asset exchange platform. Get started on your cryptocurrency
            journey with OMAYA Express Exchange.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-black" asChild>
            <Link to="/trade">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
