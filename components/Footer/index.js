import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";


// export default Footer;
export default function Footer() {
  return ( 
<footer className="w-full py-8 text-white">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center">
       <p className="text-sm text-white opacity-70">
          © Meghan Keightley, {new Date().getFullYear()}
        </p>

        <a
          href="https://github.com/meghank1066"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 underline underline-offset-2 hover:opacity-70 transition"
        >
        <svg
  style={{
    width: 26,
    height: 26,
    color: "white"
  }}
  viewBox="0 0 128 128"
  xmlns="http://www.w3.org/2000/svg"
>
            <path
              fill="currentColor"
              d="M64 5.1C30.7 5.1 3.6 32.1 3.6 65.5c0 26.7 17.3 49.3 41.3 57.3
              3 .6 4.1-1.3 4.1-2.9 0-1.4-.1-6.2-.1-11.2-16.8
              3.7-20.3-7.1-20.3-7.1-2.7-7-6.7-8.8-6.7-8.8-5.5-3.7.4-3.7.4-3.7
              6.1.4 9.3 6.2 9.3 6.2 5.4 9.2 14.1 6.6 17.6 5
              .5-3.9 2.1-6.6 3.8-8.1-13.4-1.5-27.5-6.7-27.5-29.8
              0-6.6 2.4-12 6.2-16.2-.6-1.5-2.7-7.7.6-16
              0 0 5.1-1.6 16.6 6.2 4.8-1.3 10-2 15.1-2
              5.1 0 10.3.7 15.1 2 11.5-7.8 16.6-6.2 16.6-6.2
              3.3 8.3 1.2 14.5.6 16 3.9 4.2 6.2 9.6 6.2 16.2
              0 23.2-14.1 28.3-27.6 29.8 2.2 1.9 4.1 5.6 4.1
              11.2 0 8.1-.1 14.6-.1 16.6 0 1.6 1.1 3.5 4.1
              2.9 24-8 41.3-30.6 41.3-57.3C124.4 32.1 97.3
              5.1 64 5.1z"
            />
          </svg>

          {/* <span>GitHub</span> */}
        </a>
      </div>
    </footer>
  );
}
