
import { 
  Shield, 
  Coins, 
  BarChart3, 
  Users, 
  Globe, 
  BookOpen
} from "lucide-react";

const features = [
  {
    title: "Secure Transactions",
    description: "State-of-the-art encryption and security protocols to protect your digital assets and personal information.",
    icon: <Shield className="h-10 w-10 text-primary" />,
  },
  {
    title: "Multiple Cryptocurrencies",
    description: "Exchange various cryptocurrencies including USDT, Bitcoin, Ethereum, and other popular digital currencies.",
    icon: <Coins className="h-10 w-10 text-primary" />,
  },
  {
    title: "NFT Exchange",
    description: "Trade Non-Fungible Tokens on our secure platform, backed by our expertise in digital asset exchanges.",
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
  },
  {
    title: "Customer-Centric Approach",
    description: "Dedicated customer support team ready to assist you with any questions or concerns.",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    title: "Global Accessibility",
    description: "Access our platform from anywhere in the world, with a focus on serving the Somali market.",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
  {
    title: "Educational Resources",
    description: "Learn about cryptocurrency trading with our comprehensive educational resources.",
    icon: <BookOpen className="h-10 w-10 text-primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <section 
      id="features" 
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/20 text-primary rounded-full">
            Our Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Why Choose OMAYA Express Exchange
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive suite of features designed to make your cryptocurrency trading experience seamless, secure, and successful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800/80 rounded-xl p-6 shadow-sm border border-gray-700 hover:shadow-md transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
