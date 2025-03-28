import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  FileText,
  Shield,
  CreditCard,
  UserCheck,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-[#353533e] border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1d8751] to-[#1d8751]">
                <img
                  className="h-10"
                  src="https://res.cloudinary.com/pitz/image/upload/v1728908973/Frame_kn30vu.png"
                  alt=""
                />{" "}
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A fast-growing, legally registered digital asset exchange company
              specializing in secure and efficient exchange services for various
              cryptocurrencies and NFTs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/OMAYAExchange?_rdc=1&_rdr"
                className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fomayaexchange"
                className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2FOMAYAExchange%2F&is_from_rlen=1&source=follow_on_link"
                className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/market"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Market Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Cryptocurrency Exchange
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  NFT Exchange
                </Link>
              </li>
              <li>
                <Link
                  to="/services/security"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Security & Integrity
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* New Legal Policies Column */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Our Policies</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-[#1d8751] mt-0.5" />
                <Link
                  to="/legal/terms-and-condtions"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Terms of use
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-[#1d8751] mt-0.5" />
                <Link
                  to="/legal/privacy-policy"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-[#1d8751] mt-0.5" />
                <Link
                  to="/legal/aml-policy"
                  className="text-muted-foreground hover:text-[#1d8751] transition-colors"
                >
                  AML Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#1d8751] mr-2 mt-0.5" />
                <span className="text-muted-foreground">
                  Aaran Plaza, Hodan District Mogadishu, Somalia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#1d8751] mr-2" />
                <span className="text-muted-foreground">+252611273030</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#1d8751] mr-2" />
                <span className="text-muted-foreground">info@omaya.io</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12  pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {currentYear} OMAYA Express Exchange. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
