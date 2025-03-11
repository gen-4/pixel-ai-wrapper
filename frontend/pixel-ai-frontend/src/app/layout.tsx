import type { Metadata } from "next";
import { Tiny5 } from "next/font/google";
import "@/globals.css";

import Header from '@/components/header/Header';

const tiny5 = Tiny5({
    variable: "--font-tiny5",
    subsets: ["latin"],
    weight: ["400"]
});

export const metadata: Metadata = {
    title: "Pixel Art AI",
    description: "Generate pixel art",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={ `${tiny5.variable}` }>
                <Header />
                { children }
            </body>
        </html>
    );
}
