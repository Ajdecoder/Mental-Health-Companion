import { forwardRef } from "react";
import { motion } from "framer-motion";

const Badge = forwardRef(
  ({ className, variant = "default", hoverable = false, ...props }, ref) => {
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    };

    return (
      <motion.span
        ref={ref}
        whileHover={hoverable ? { scale: 1.05 } : {}}
        whileTap={hoverable ? { scale: 0.95 } : {}}
        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };