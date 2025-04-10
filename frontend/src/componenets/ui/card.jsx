import { forwardRef } from "react";
import { motion } from "framer-motion";

const Card = forwardRef(({ 
  className, 
  variant = "default", 
  hoverEffect = true,
  ...props 
}, ref) => {
  return (
    <motion.div
      ref={ref}
      whileHover={hoverEffect ? { 
        y: -5, 
        scale: 1.02, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" 
      } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-2xl border transition-all
        ${variant === 'filled' ? 'bg-gray-50 dark:bg-gray-800' : ''}
        ${variant === 'glass' ? 'backdrop-blur-lg bg-white/30 dark:bg-gray-800/50 border-white/20' : ''}
        ${variant === 'gradient' ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900' : ''}
        shadow-lg hover:shadow-xl
        dark:border-gray-700
        ${className}`}
      {...props}
    >
      {/* Optional decorative gradient */}
      {variant === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-gray-700/30 dark:to-gray-800/30" />
      )}
      {props.children}
    </motion.div>
  );
});
Card.displayName = "Card";

const CardHeader = ({ className, icon, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {icon && (
      <motion.div 
        className="mb-4 text-3xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        {icon}
      </motion.div>
    )}
    {props.children}
  </div>
);

const CardTitle = ({ className, ...props }) => (
  <h3 
    className={`text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-300 bg-clip-text text-transparent ${className}`}
    {...props} 
  />
);

const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={`p-6 pt-0 space-y-4 text-gray-600 dark:text-gray-300 ${className}`}
    {...props} 
  />
));
CardContent.displayName = "CardContent";

// Optional new components
const CardFooter = ({ className, ...props }) => (
  <div 
    className={`p-6 pt-0 border-t border-gray-100 dark:border-gray-700 ${className}`}
    {...props} 
  />
);

const CardHighlight = ({ className, ...props }) => (
  <div 
    className={`absolute top-0 right-0 px-4 py-2 text-sm font-semibold rounded-bl-lg bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-900 ${className}`}
    {...props} 
  />
);

export { Card, CardHeader, CardTitle, CardContent, CardFooter, CardHighlight };