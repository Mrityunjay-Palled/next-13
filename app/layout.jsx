import "./globals.css";
import {Montserrat} from "@next/font/google"

const montserrat=Montserrat({
  weight:['400','700'],
  subsets:['latin'],
  variable:'--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} mx-10`}>
        <h1 className="text-2xl font-bold text-center mb-10 mt-10 text-red-500">The Movie App</h1>
        {children}
      </body>
    </html>
  );
}
