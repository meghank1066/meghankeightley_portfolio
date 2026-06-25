import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Socials from "../components/Socials";
import Button from "../components/Button";

import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  const { headerData, resume } = data;

  useEffect(() => {
    setMount(true);
    if (!headerData?.showResume) router.push("/");
  }, []);

  // Helper component for experience
  const ProjectResume = ({ dates, type, position, bullets }) => {
    const bulletsArray = useMemo(() => {
      if (!bullets) return [];
      return Array.isArray(bullets)
        ? bullets
        : bullets.split(",").map((b) => b.trim());
    }, [bullets]);

    return (
      <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
        <div className="w-full">
          <h3 className="font-semibold text-lg">{position}</h3>
          <p className="text-sm opacity-75">{type} | {dates}</p>
          {bulletsArray.length > 0 && (
            <ul className="list-disc mt-2 ml-5">
              {bulletsArray.map((bullet, idx) => (
                <li key={idx} className="py-1">{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <>

      <div className={`container mx-auto mb-10 ${headerData?.showCursor ? "cursor-none" : ""}`}>
        <Header isBlog />

        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <div className={`w-full max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg shadow-sm ${theme.theme === "dark" ? "bg-slate-900" : "bg-gray-50"}`} style={{ backgroundColor: &apos;transparent&apos; }}>
 {/* <h1 className="text-3xl width: 100, font-bold">{headerData?.fullname}</h1>
              <h2 className="text-xl mt-5">{resume?.tagline}</h2>
              <h2 className="w-4/5 text-xl mt-5 opacity-50">{resume?.description}</h2> */}

              <div className="mt-2"><Socials /></div>

           <div className="mt-5 w-full">
 <h1 className="text-3xl font-bold w-full text-center">My CV</h1>
  <iframe
    src="/Meghan_Keightley_CV_Main.pdf"
    width="100%"
    height="600px"
    className="mt-3 border"
    title="CV PDF"
  ></iframe>
</div>

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Resume;
