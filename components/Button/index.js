import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, type, onClick, classes }) => {
  if (type === 'primary') {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-2 laptop:p-2 laptop:m-2 rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 ease-out first:ml-0 ${classes}`}
      >
        {children}
      </motion.button>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-2 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center hover:bg-gray-100 ${classes}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
