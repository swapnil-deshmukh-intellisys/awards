import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
