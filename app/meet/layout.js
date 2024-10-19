// app/layout.js

import "@/styles/globals.css"; // Global styles
import "@/components/models/secondfeature/pages/LearnSign"; // Specific styles for LearnSign component

import { SocketProvider } from "@/context/socket";
import { TranscriptProvider } from '@/context/TranscriptContext'; // Import TranscriptProvider

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <TranscriptProvider>
                    <SocketProvider>
                        {children}
                    </SocketProvider>
                </TranscriptProvider>
            </body>
        </html>
    );
}
