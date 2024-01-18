import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "@/components/countdown-timer";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="flex justify-center items-center h-20 bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Miazu
        </h1>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center px-4 md:px-6">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-gray-800 dark:text-gray-100">
                  Coming Soon!
                </h1>
                <br />
                <h2 className="lg:leading-snug text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-gray-700 dark:text-gray-100">
                  Miazu , Your New Favorite Clothing Store
                </h2>
                <br />
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  We&apos;re working hard to bring you the best clothing
                  experience. Stay tuned!
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Image
                  alt="Clothing illustration"
                  className="mx-auto aspect-[2/1] overflow-hidden rounded-xl object-cover border-2 border-gray-300 dark:border-gray-800"
                  height="400"
                  src="/placeHolder.png"
                  width="550"
                />
              </div>
            </div>
            <CountdownTimer  targetDate={new Date('2024-03-03')}/>
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Stay Updated
              </h2>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                href="https://www.facebook.com/miazubd"
              >
                <FacebookIcon />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                href="https://www.instagram.com/miazu_bd/"
              >
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}


function InstagramIcon() {
  return (
    <svg
      className="h-8 w-8"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}