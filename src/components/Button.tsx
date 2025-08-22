// src/components/Button.tsx
import { motion } from 'framer-motion';
import React from 'react';

type BaseProps = {
  children: React.ReactNode;
};
type LinkButtonProps = BaseProps & {
  as: 'a';
  href: string;
};
type SubmitButtonProps = BaseProps & {
  as: 'button';
  type: 'submit';
};
type ButtonProps = LinkButtonProps | SubmitButtonProps;

export default function Button(props: ButtonProps) {
  const commonClasses = "inline-block font-sans font-bold py-3 px-8 rounded-lg transition-all duration-300 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white hover:shadow-lg hover:shadow-accent/40 hover:scale-105";

  if (props.as === 'button') {
    return (
      <motion.button
        type={props.type}
        className={commonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor-stick
      >
        {props.children}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={props.href}
      className={commonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-cursor-stick
    >
      {props.children}
    </motion.a>
  );
}