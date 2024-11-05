import "./globals.css";
import { inter } from "./ui/fonts";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${inter.className}antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
