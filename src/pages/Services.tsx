
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Shield, Coins, BarChart3, RefreshCw, Globe, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Coins className="h-10 w-10 text-primary" />,
    title: "Cryptocurrency Exchange",
    description: "Our platform supports multiple cryptocurrencies including USDT, Bitcoin, Ethereum and other popular digital currencies, allowing users to buy, sell, and exchange at competitive rates.",
    details: "With our state-of-the-art exchange system, you can seamlessly convert between different cryptocurrencies or exchange your digital assets for fiat currency. We offer favorable rates and ensure that transactions are processed quickly and securely."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "NFT Exchange Services",
    description: "Trade Non-Fungible Tokens on our secure platform, backed by our expertise in digital asset exchanges.",
    details: "Our NFT exchange service allows you to buy, sell, and trade unique digital assets. Whether you're an artist looking to monetize your work or a collector seeking rare digital items, our platform provides the tools and security you need to participate in the exciting world of NFTs."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure Transactions",
    description: "We employ state-of-the-art encryption technologies and robust security measures to protect user data and funds.",
    details: "Security is our top priority. We use advanced encryption, multi-factor authentication, and cold storage solutions to ensure that your digital assets are protected against unauthorized access and cyber threats. Our security team continuously monitors for potential vulnerabilities and implements preventive measures."
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-primary" />,
    title: "User-Friendly Platform",
    description: "Our intuitive platform is designed for both beginners and experienced traders, making cryptocurrency exchange accessible to everyone.",
    details: "We've designed our platform with user experience in mind. The interface is clean, intuitive, and easy to navigate, regardless of your level of experience with digital assets. Our goal is to make cryptocurrency trading accessible to everyone, from first-time users to seasoned traders."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Accessibility",
    description: "Access our platform from anywhere in the world, with a focus on serving the Somali market.",
    details: "While we are based in Somalia and have a deep understanding of the local market, our platform is accessible globally. This allows our users to connect with the international cryptocurrency market, opening up a world of opportunities for investment and growth."
  },
  {
    icon: <Wallet className="h-10 w-10 text-primary" />,
    title: "Customer Support",
    description: "Our dedicated customer service team works round the clock to address any queries or concerns that our clients may have.",
    details: "We understand that navigating the world of digital assets can sometimes be challenging, which is why we've put together a team of knowledgeable and friendly customer support representatives. They're available to assist you with any questions or issues you might encounter while using our platform."
  }
];

const Services = () => {
  useEffect(() => {
    document.title = "Our Services | OMAYA Express Exchange";
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/20 text-primary rounded-full">
            Our Offerings
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Digital Asset Services</h1>
          <p className="text-lg text-muted-foreground">
            OMAYA Express Exchange offers a range of services designed to make cryptocurrency trading accessible, secure, and efficient for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-card/50 border border-border/50 rounded-xl p-8 backdrop-blur-sm animate-on-scroll">
          <h2 className="text-2xl font-bold mb-4 text-primary">Ready to Start Trading?</h2>
          <p className="mb-6 text-muted-foreground">
            Join OMAYA Express Exchange today and experience secure, efficient cryptocurrency exchange services designed for the Somali market.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-black" asChild>
            <Link to="/trade">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
