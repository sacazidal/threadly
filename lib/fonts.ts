import { Inter, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
});
