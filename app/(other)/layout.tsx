import Cookies from "@/components/Cookies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import OverHeader from "@/components/OverHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Cookies />
      <OverHeader />
      <Header />
      <Navigation />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
