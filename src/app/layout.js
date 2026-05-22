
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "SportNest",
    description: "Sports Facility Booking Management Platform",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${josefin.className} h-full antialiased scroll-smooth`}
        >
            <body className="min-h-screen flex flex-col overflow-x-hidden">

                <Navbar />

                <main className="flex-1">
                    {children}
                </main>

                <Toaster position="top-right" />

                <Footer />

            </body>
        </html>
    );
}