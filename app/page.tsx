import Portfolio from "./pages/portfolio";
import Header from './pages/header';
import { ThemeProvider } from "@/components/ui/theme-provider";

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
    </ThemeProvider>
  );
}
