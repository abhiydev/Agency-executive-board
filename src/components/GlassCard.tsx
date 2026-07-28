import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  hoverGlow = true,
}) => {
  return (
    <div
      className={`kamiy-glass-card p-6 md:p-8 ${
        hoverGlow ? "hover:border-[#00F0FF]/40" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};
