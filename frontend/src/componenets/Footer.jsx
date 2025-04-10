import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/UserContext";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Careers", path: "/careers" },
        { name: "Press", path: "/press" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Cookie Policy", path: "/cookies" },
        { name: "Security", path: "/security" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", path: "/docs" },
        { name: "Help Center", path: "/support" },
        { name: "Community", path: "/community" },
        { name: "Webinars", path: "/webinars" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, path: "https://facebook.com" },
    { icon: <FaTwitter />, path: "https://twitter.com" },
    { icon: <FaInstagram />, path: "https://instagram.com" },
    { icon: <FaLinkedin />, path: "https://linkedin.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`bg-gray-900 text-gray-300 dark:bg-gray-800 mt-auto ${
        theme === "dark" ? "dark-footer-styles" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <NavLink to="/" className="flex items-center">
              <span className="text-2xl">🧠</span>
              <span className="ml-2 text-xl font-bold text-white">MindCare</span>
            </NavLink>
            <p className="text-sm leading-relaxed">
              Empowering mental wellness through AI-driven solutions. Making mental health
              support accessible to everyone, everywhere.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.div whileHover={{ x: 5 }}>
                      <NavLink
                        to={link.path}
                        className="text-sm hover:text-purple-400 transition-colors"
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact & Social */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm">support@mindcare.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
              <p className="text-sm">123 Wellness Street</p>
              <p className="text-sm">Mental Health City, MH 54321</p>
            </div>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-sm flex items-center justify-center gap-1">
            <span>© {currentYear} MindCare. All rights reserved.</span>
            <FaHeart className="text-red-500 inline mx-1" />
            <span>Made with care</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;