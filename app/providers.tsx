"use client";

import { useTheme, ThemeProvider } from "next-themes";
import {
  FluentProvider,
  createLightTheme,
  createDarkTheme,
  type BrandVariants,
} from "@fluentui/react-components";

/** Palette de marque BMI Technologies – Bleu #1A73E8 */
const bmiTechBrand: BrandVariants = {
  10:  "#020c1e",
  20:  "#062140",
  30:  "#093662",
  40:  "#0c4b84",
  50:  "#0f60a6",
  60:  "#1169c8",
  70:  "#1A73E8",
  80:  "#3a8bee",
  90:  "#5da3f3",
  100: "#7dbbf7",
  110: "#9dd2fb",
  120: "#bde5fd",
  130: "#d3eeff",
  140: "#e6f4ff",
  150: "#f0f8ff",
  160: "#f8fbff",
};

const bmiLightTheme = createLightTheme(bmiTechBrand);
const bmiDarkTheme  = createDarkTheme(bmiTechBrand);

function FluentWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  return (
    <FluentProvider
      theme={resolvedTheme === "dark" ? bmiDarkTheme : bmiLightTheme}
      style={{ background: "transparent" }}
    >
      {children}
    </FluentProvider>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <FluentWrapper>{children}</FluentWrapper>
    </ThemeProvider>
  );
}
