import { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import { useTheme } from "next-themes";
import Cursor from "../components/Cursor";
//import footer

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

useEffect(() => {
  setMounted(true);
}, []);


  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <h1 ref={textOne} className="hidden"></h1>

 <div
  className={`container mx-auto mb-10 ${
    data.headerData?.showCursor ? "cursor-none" : ""
  }`}
>
  
  {/* <Header isBlog={false} handleAboutScroll={() => {}} /> */}
{/* 
{mounted && (
  <div style={{ marginTop: '2.5rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div
      style={{
        width: '100%',
        maxWidth: '40rem',
        padding: '5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme === "dark" ? '#121212' : '#f9fafb'
      }}
    >
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>
        {data.headerData?.fullname}
      </h1>
      <h2 style={{ width: '100%', fontSize: '1.25rem', color: theme === "dark" ? 'white' : 'black', marginTop: '1.25rem' }}>
        {data.tagline || "No tagline available."}
      </h2>
     <h2 style={{ width: '100%', fontSize: '1.25rem', color: theme === "dark" ? 'white' : 'black', marginTop: '1.25rem' }}>
        {data.description || "No description available."}
      </h2>

      <div style={{ marginTop: '0.5rem' }}>
        <Socials />
      </div>
    </div>
  </div>
)} */}

</div>
        
          {/* <Socials className="mt-2 laptop:mt-5" /> */}
        {/* <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
         <h1 className="text-2xl font-bold">My Projects</h1> */}


          {/* <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div> */}
        {/* </div> */}

    <Footer />
      </div> 
      </div>
    
  );
  
}
