"use client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0B0F17] cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[#00F0FF] text-[#0B0F17] hover:bg-[#00D0FF] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] focus:ring-[#00F0FF]",
    secondary:
      "bg-[#4F46E5] text-white hover:bg-[#4338CA] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] focus:ring-[#4F46E5]",
    outline:
      "border border-[#00F0FF] text-[#00F0FF] bg-transparent hover:bg-[rgba(0,240,255,0.1)] focus:ring-[#00F0FF]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base font-bold",
  };

  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
