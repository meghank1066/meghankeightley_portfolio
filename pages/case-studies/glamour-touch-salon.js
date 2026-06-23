import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import glamourtouchNodes from "../../components/glamourtouchNodes";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function glamourtouchPage() {

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
  Creating a complete digital experience for a beauty salon.
</h2>

<p>
  Glamour Touch Nails & Beauty was developed as a full-stack web application
  focused on improving the customer booking experience while providing
  management tools for salon owners.
</p>

<p>
  The platform allows customers to explore services, view staff profiles,
  browse the gallery, create personalised nail designs and securely manage
  appointments through an online booking system.
</p>
</div>
  </div>

</section>


<section className="glamourtouchInsightSection">
 <div className="glamourtouchSectionBackground"> 
  <div className="glamourtouchSectionLabel">
    02 · DESIGN INSIGHT
  </div>

  <div className="glamourtouchSectionContent">

   <h2>
  A salon website should feel personal, not transactional.
</h2>

<p>
  Many booking platforms focus only on scheduling, but beauty services are
  built around creativity, trust and personal expression.
</p>

<p>
  Glamour Touch was designed to combine practical functionality with a more
  engaging experience by allowing users to explore styles, connect with the
  brand and visualise their own nail ideas before booking.
</p>

{/* <div className="glamourtouchQuoteBlock">
<p>
“Technology should support creativity, not replace the experience.”
</p>
</div> */}
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

  </div>
</div>
</section>


<section className="glamourtouchFeaturesSection">
 <div className="glamourtouchSectionBackground"> 
  <div className="glamourtouchSectionLabel">
    04 · KEY FEATURES
  </div>

  <div className="glamourtouchSectionContent">

  <h2>
  From online booking to creative nail design.
</h2>

<p>
  The platform combines essential salon functionality with interactive
  features that improve user engagement.
</p>

<ul>
<li>
Online appointment booking system allowing customers to schedule services
</li>

<li>
Owner dashboard functionality for managing salon content and appointments
</li>

<li>
Staff page showcasing available beauty professionals
</li>

<li>
Gallery experience displaying previous nail designs
</li>

<li>
Interactive canvas allowing users to create and experiment with custom nail designs
</li>

<li>
Newsletter footer allowing users to stay updated with salon news and offers
</li>

</ul>
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
  The final application demonstrates how full-stack development and thoughtful
  UX design can transform a traditional salon website into an interactive
  digital service platform.
</p>

<p>
  Glamour Touch combines business functionality with creativity, giving users
  a smoother booking experience while providing owners with tools to manage
  their online presence.
</p>

  </div>
</div>
</section>


<section className="glamourtouchContributionSection">
 <div className="glamourtouchSectionBackground"> 
  <div className="glamourtouchSectionLabel">
    07 · MY CONTRIBUTION
  </div>

  <div className="glamourtouchSectionContent">

    <h2>
      Designing and developing the complete application.
    </h2>

    <p>
       I was responsible for designing and developing the Glamour Touch platform
  from concept through implementation. This included creating the user
  interface, home page, create page, appointments as well as developing backend functionality with Laravel, designing the
  database structure, implementing authentication and building interactive
  features.
    </p>

    <p>
        The project allowed me to explore the relationship between user experience,
  database-driven applications and creative digital interactions.
    </p>

  </div>
</div>
</section>

        </main>

        <div className="glamourtouchWrapper2">
          <Footer className="glamourtouchFooter" />
        </div>

      </div>
    </>
  );
}
