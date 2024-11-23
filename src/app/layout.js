import { yekan } from "@/utils/font"
import "./globals.css";
import Layout from "@/components/layout/Layout";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
