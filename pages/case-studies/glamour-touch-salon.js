import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import glamourtouchNodes from "../../components/glamourtouchNodes";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function GlamourtouchPage() {

//   const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <glamourtouchNodes />} */}

      <div className="glamourtouchPageShell">

        <div className="glamourtouchWrapper">
          <Header className="glamourtouchNav" />
        </div>

        <main className="glamourtouchProjectPage">

          <section className="glamourtouchProjectHero">

            <div className="glamourtouchHeroLeft">

              <span className="glamourtouchProjectTag">
  FULL STACK DEVELOPMENT · UX/UI DESIGN · LARAVEL APPLICATION
</span>

<h1 className="glamourtouchProjectTitle">
  Glamour Touch Nails & Beauty
</h1>

<p className="glamourtouchProjectDescription">
  A full-stack salon management and booking platform designed for a modern
  nail and beauty experience. The website combines customer-focused design
  with a Laravel-powered backend, allowing users and salon owners to manage
  appointments, accounts, services, staff information and creative nail
  designs through an interactive digital experience.
</p>

              <div className="glamourtouch-hero-links">
  <a
    className="glamourtouch-hero-link"
    href="YOUR_LIVE_SITE_URL"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Website
  </a>
  </div>

            </div>

            <div className="glamourtouchHeroRight">

             <div>
  <h4>PROJECT TYPE</h4>
  <p>
    Full Stack Web Application
    <br />
    Salon Booking Platform
  </p>
</div>

<div>
  <h4>TIMELINE</h4>
  <p>Development Project</p>
  <p>2025</p>
</div>

<div>
  <h4>ROLE</h4>
  <p>
    Full Stack Development · UX/UI Design · Database Design
  </p>
</div>

<div>
  <h4>TEAM</h4>
  <p>Meghan Keightley, Aoife Murphy 
    <br /> & Meghana Rathnam</p>
</div>

<div>
  <h4>TECH STACK</h4>
  <p>
    Laravel · PHP · MySQL · HTML/CSS · JavaScript
  </p>
</div>

<div>
  <h4>FEATURES</h4>
  <p>
    Authentication · Online Booking · Interactive Canvas
  </p>
</div>
            </div>

          </section>

          <section className="glamourtouchHeroMockup">

              <div className="glamourtouchWebsiteEmbed">

    <iframe
      src="https://clientsite01-production.up.railway.app"
      title="Glamour Touch Website Preview"
      loading="lazy"
    />

  </div>

          </section>

          <section className="glamourtouchOverviewSection">
 <div className="glamourtouchSectionBackground"> 
  <div className="glamourtouchSectionLabel">
    01 · PROJECT OVERVIEW
  </div>

<div className="glamourtouchSectionContent">

<h2>
  Creating a complete digital experience for a local beauty service.
</h2>

<p>
  Glamour Touch Nails & Beauty was developed as a full-stack web application
  inspired by the idea of creating a digital platform for local service-based
  businesses. The project focuses on improving the connection between customers
  and salon owners by creating a smoother, more personalised appointment
  experience.
</p>

<p>
  The platform allows customers to discover available beauty services, explore
  staff profiles, view salon work through an image gallery, create personalised
  nail designs and manage appointments through an online booking system.
  Alongside the customer experience, an admin dashboard was developed to help
  salon owners manage services, staff members, images and appointments
  efficiently.
</p>

</div>
  </div>

</section>

   
<section className="glamourtouchHeroMockup">

  <img  
    className="glamourtouchPlaceholderImage" 
    src="/images/glamourtouch/glamour-touch-hero.png" 
    alt="Coverscreen"
    style={{ width: "100%", height: "auto", display: "block" }} 
  />

</section>



<section className="glamourtouchInsightSection">
 <div className="glamourtouchSectionBackground"> 
  <div className="glamourtouchSectionLabel">
    02 · DESIGN INSIGHT
  </div>

  <div className="glamourtouchSectionContent">

<div className="glamourtouchSectionContent">

<h2>
  Designing a luxury salon experience beyond just bookings.
</h2>

<p>
  The visual identity for Glamour Touch was designed around the idea that a
  beauty service should feel personal, creative and expressive. The interface
  combines a minimal black and white foundation with a bright pink accent
  colour, creating a balance between elegance and the playful creativity
  associated with nail design.
</p>

<p>
  The design was inspired by high-end beauty brands, where the experience
  extends beyond scheduling an appointment. Customers can explore the salon,
  browse nail inspiration through the gallery, manage their details and
  experiment with personalised nail designs through an interactive canvas
  feature before booking.
</p>


    </div>

</div> 
  </div>

</section>


<section className="glamourtouchDesignSection">
 <div className="glamourtouchSectionBackground"> 
  <div className="glamourtouchSectionLabel">
    03 · DESIGN APPROACH
  </div>

  <div className="glamourtouchSectionContent">

  <h2>
  Building a scalable salon platform with Laravel.
</h2>

<p>
  The application was developed using Laravel to handle backend logic,
  authentication, database management and user interactions.
</p>

<ul>
<li>User authentication with customer and owner accounts</li>
<li>Database-driven services, staff and appointment management</li>
<li>Secure login and logout functionality</li>
<li>Responsive interface designed around usability</li>
</ul>
 
{/* GRID: DESIGN PRINCIPLES */}
<div className="glamourtouchDesignGrid">

  <div className="glamourtouchDesignCard">
    <h3>Service-first experience</h3>
    <p>
      The platform is structured around effortless booking, allowing customers to
      browse treatments, view pricing, and secure appointments in just a few steps.
    </p>
  </div>

  <div className="glamourtouchDesignCard">
    <h3>Beauty → interaction</h3>
    <p>
      The experience goes beyond booking, offering an engaging way to explore nail
      styles and inspiration before visiting the salon, making the journey more personal.
    </p>
  </div>

  <div className="glamourtouchDesignCard">
    <h3>Luxury brand identity</h3>
    <p>
      A refined visual system built with elegant typography, soft spacing, and
      bold imagery to reflect the modern, high-end feel of a beauty salon brand.
    </p>
  </div>

</div>
  </div>
</div>
</section>


<section className="glamourtouchFeaturesSection">

  <div className="glamourtouchSectionBackground">

    <div className="glamourtouchSectionLabel">
      05 · KEY SCREENS & FEATURES
    </div>

    <div className="glamourtouchSectionContent">

      <h2>
        From browsing to booking — a seamless beauty experience designed around the user.
      </h2>

      <p>
        Glamour Touch was developed as a full-stack Laravel booking system built by our team to streamline salon operations while delivering a smooth, elegant customer experience. From account creation to appointment scheduling, we focused on clarity, speed and usability.
      </p>

      <p>
        We combined functional system design with a creative layer, allowing users not only to book appointments but also to explore nail inspiration and interact with a digital nail art canvas before their visit.
      </p>

      {/* FEATURE 1 */}
      <div className="glamourtouchFeatureBlock">

        <h3>User Authentication System</h3>

        <p>
          We implemented a secure login and registration system that allows users to create accounts, manage their profiles, and access personalised booking history and preferences.
        </p>

        <div className="glamourtouchImageGrid">
          <div className="glamourtouchImagePlaceholder">
            Login / Register UI
          </div>
          <div className="glamourtouchImagePlaceholder">
            User Profile Dashboard
          </div>
        </div>

      </div>

      {/* FEATURE 2 */}
      <div className="glamourtouchFeatureBlock">

        <h3>Appointment Booking System</h3>

        <p>
          We built a fully integrated booking flow where users can select services, choose staff, and schedule appointments in real time, while admins manage availability and bookings through the backend system.
        </p>

        <div className="glamourtouchImageGrid">
           <div className="glamourtouchImagePlaceholder"> 
        <img src="/images/glamourtouch/appt-not-logged-in.png" /> 
          </div>
          <div className="glamourtouchImagePlaceholder"> 
        <img src="/images/glamourtouch/appointment-service.png" /> 
          </div>
          <div className="glamourtouchImagePlaceholder">
          <img src="/images/glamourtouch/appt-organise.png" /> 
          </div>
          <div className="glamourtouchImagePlaceholder">
         <img src="/images/glamourtouch/calender.png" /> 
          </div>
          <div className="glamourtouchImagePlaceholder">
          <img src="/images/glamourtouch/update-appt.png" /> 
          </div>
          <div className="glamourtouchImagePlaceholder">
          <img src="/images/glamourtouch/appt-cancelled.png" /> 
          </div>
        </div>

      </div>

      {/* FEATURE 3 */}
      <div className="glamourtouchFeatureBlock">

        <h3>Admin Management Dashboard</h3>

        <p>
          We designed an admin dashboard that allows efficient management of appointments, services, staff schedules, and customer data, all from a centralised interface.
        </p>

        <div className="glamourtouchImageGrid">
          <div className="glamourtouchImagePlaceholder">
             <img src="/images/glamourtouch/login-page.png" /> 
          </div>
          <div className="glamourtouchImagePlaceholder">
             <img src="/images/glamourtouch/appointments-done.png" /> 
          </div>
        </div>

      </div>

      {/* FEATURE 4 */}
      <div className="glamourtouchFeatureBlock">

        <h3>Nail Art Design Canvas</h3>

        <p>
          We created an interactive nail design canvas that lets users experiment with nail art styles visually before their appointment, adding a creative and personalised layer to the booking experience.
        </p>

        <div className="glamourtouchImageGrid">
          <div className="glamourtouchImagePlaceholder">
             <img src="/images/glamourtouch/create-page.png" /> 
          </div>
          <div className="glamourtouchImagePlaceholder">
             <img src="/images/glamourtouch/creations-gallery.png" /> 
          </div>
        </div>

      </div>

    </div>

  </div>

</section>


<section className="glamourtouchDesignSection">

  <div className="glamourtouchSectionBackground">

    <div className="glamourtouchSectionLabel">
      05 · DATABASE & USER MANAGEMENT
    </div>

    <div className="glamourtouchSectionContent">

      <h2>
        Connecting users, owners and salon operations.
      </h2>

      <p>
        A relational database structure was implemented to manage user accounts,
        appointments, services and salon information.
      </p>

      <p>
        Laravel authentication was used to create separate experiences for customers
        and salon owners, ensuring users can securely access relevant features.
      </p>

      {/* LARGE IMAGE BLOCKS */}
      <div className="nintendoImageGrid">

        <div className="nintendoplaceholderImage">
        <img src="/images/glamourtouch/Glamour-Touch-Brand-Identity.png" />
        </div>

        <div className="nintendoplaceholderImage">
         <img src="/images/glamourtouch/GlamourTouch-Logo.png" />
        </div>

        <div className="nintendoplaceholderImage">
         <img src="/images/glamourtouch/glamour-website.png" />
        </div>

      </div>

    </div>

  </div>

</section>


<section className="glamourtouchOutcomeSection">

  <div className="glamourtouchSectionBackground">

    <div className="glamourtouchSectionLabel">
      06 · OUTCOME
    </div>

    <div className="glamourtouchSectionContent">

      <h2>
        A complete salon experience built for both customers and owners.
      </h2>

      <p>
        The final application demonstrates how full-stack Laravel development and
        thoughtful UX design can transform a traditional salon website into a fully
        interactive digital service platform.
      </p>

      <p>
        Glamour Touch combines business functionality with creativity — giving users
        a smooth booking journey while providing owners with full control over
        services, scheduling and customer management.
      </p>

      {/* BIG OUTCOME VISUALS */}
      <div className="nintendoImageGrid">

        <div className="nintendoplaceholderImage">
         <img src="/images/glamourtouch/homepage.png" alt="Homepage" />
        </div>

        <div className="nintendoplaceholderImage">
       
         <img src="/images/glamourtouch/about-us-page.png" alt="About Page" />
        </div>
 

      </div>

      {/* FEATURE BREAKDOWN INSIDE OUTCOME */}
      <h3 className="h3text">Key Delivered Features</h3>

      <div className="glamourtouchFeatureBlock">

        <h3>User Accounts & Authentication</h3>
        <p>
          We implemented secure login and registration functionality, allowing users
          to manage profiles and access personalised booking history.
        </p>

      </div>

      <div className="glamourtouchFeatureBlock">

        <h3>Live Appointment System</h3>
        <p>
          Customers can book appointments in real time while administrators manage
          availability, services and scheduling through a central system.
        </p>

      </div>

      <div className="glamourtouchFeatureBlock">

        <h3>Nail Art Design Canvas</h3>
        <p>
          We integrated an interactive design tool where users can create and
          visualise nail art before their appointment.
        </p>

      </div>


{/* FINAL WRAP-UP BLOCK */}
<div className="glamourtouchFeatureBlock">

  <h3>Project reflection</h3>

  <p>
    This project gave me a strong opportunity to collaborate within a development team
    and understand how a full-stack application comes together from both a technical
    and user experience perspective.
  </p>

  <p>
    I was primarily responsible for the frontend implementation, database migrations,
    appointment system structure, and the development of the interactive nail design
    canvas feature.
  </p>

  <p>
    Overall, I learned a lot working on Glamour Touch with my team, especially around
    building scalable Laravel systems and translating creative ideas into functional,
    user-focused features.
  </p>

</div>
    </div>

  </div>

</section>


 

        </main>
</div>
        <div className="glamourtouchWrapper2">
          <Footer className="glamourtouchFooter" />
        </div>

      
    </>
  );
}
