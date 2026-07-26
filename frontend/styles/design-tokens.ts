export const colors = {
  primary: "#3B82F6",
  primaryHover: "#2563EB",

  secondary: "#6366F1",
  secondaryHover: "#4F46E5",

  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",

  background: "#09090B",
  surface: "#18181B",
  surfaceLight: "#27272A",

  text: "#FAFAFA",
  textSecondary: "#A1A1AA",
  textMuted: "#71717A",

  border: "#27272A",

  white: "#FFFFFF",
  black: "#000000",
} as const;

export const radius = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(0,0,0,0.05)",
  md: "0 4px 6px rgba(0,0,0,0.10)",
  lg: "0 10px 20px rgba(0,0,0,0.15)",
} as const;