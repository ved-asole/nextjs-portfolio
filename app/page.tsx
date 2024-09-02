import Portfolio from "./pages/portfolio";
import Header from './pages/header';
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <div>
        <Header />
        <Portfolio />
      </div>
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}
