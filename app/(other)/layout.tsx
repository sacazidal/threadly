import Cookies from "@/components/Cookies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OverHeader from "@/components/OverHeader";
import TakeDiscount from "@/components/TakeDiscount";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Cookies />
      <div className="flex flex-col grow">
        <OverHeader />
        <Header />
        <div className="block md:hidden">
          <TakeDiscount />
        </div>
        <main className="h-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
