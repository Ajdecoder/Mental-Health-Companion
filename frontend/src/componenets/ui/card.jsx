import { forwardRef } from "react";
import { motion } from "framer-motion";

const Card = forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-xl border bg-card text-card-foreground shadow ${
        variant === "filled" ? "bg-gray-50" : ""
      } ${className}`}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);

const CardTitle = ({ className, ...props }) => (
  <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props} />
);

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };