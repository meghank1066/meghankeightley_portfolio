import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import PenneysScene from "../../components/PenneysScene";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function PenneysPage() {

  const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <PenneysScene />} */}

      <div className="penneysPageShell">

        <div className="penneysWrapper">
          <Header className="penneysNav" />
        </div>

        <main className="penneysprojectPage">

          <section className="penneysprojectHero">

            <div className="penneysheroLeft">

              <span className="penneysprojectTag">
                UX DESIGN · MOBILE EXPERIENCE · E-COMMERCE
              </span>

              <h1 className="penneysprojectTitle">
                Penneys
              </h1>

              <p className="penneysprojectDescription">
                A UX case study exploring how the Penneys mobile experience
                could better support product discovery, store navigation,
                stock visibility, and shopping journeys for Irish consumers.
                The project focuses on creating a faster, more intuitive
                retail experience while maintaining the accessibility and
                value-driven identity that defines the brand.
              </p>

            </div>

            <div className="penneysheroRight">

              <div>
                <h4>PROJECT TYPE</h4>
                <p>UX Case Study</p>
              </div>

              <div>
                <h4>TIMELINE</h4>
                <p>In Progress</p>
                <p>May 2026</p>
              </div>

              <div>
                <h4>ROLE</h4>
                <p>
                  UX Research · UX Design · UI Design
                </p>
              </div>

              <div>
                <h4>TOOLS</h4>
                <p>
                  Figma · FigJam · Photoshop
                </p>
              </div>

              <div>
                <h4>STATUS</h4>
                <p>
                  Currently in development
                </p>
              </div>

            </div>

          </section>

          <section className="penneysheroMockup">

            <div className="penneysplaceholderImage">
              PENNEYS CASE STUDY SHOWCASE
            </div>

          </section>

          
      <section className="penneysOverviewSection">

  <div className="penneysSectionBackground">

    <div className="penneysSectionLabel">
      01 · PROJECT OVERVIEW
    </div>


    <div className="penneysSectionContent">

      <h2>
        Making invisible indoor health risks visible.
      </h2>

      <p>
        penneys is a mobile application designed to help users identify mould types,
        understand potential health risks, and access clear prevention guidance.
        The system translates environmental health data into an accessible, user-friendly experience.
      </p>

      <p>
        Developed as a 12-month final year group project, the platform combines UX research,
        mobile UI design, and Android development to address a real-world public health problem.
      </p>

    </div>

  </div>

</section>

<section className="penneysProblemSection">

  <div className="penneysSectionBackground">

    <div className="penneysSectionLabel">
      02 · PROBLEM SPACE
    </div>


    <div className="penneysSectionContent">

      <h2>
        Turning weather data into something people can actually use.
      </h2>

      <p>
        Many users rely on weather apps that provide accurate data but fail to translate that information into real-world decisions like outfit planning.
      </p>

      <p>
        This creates a gap between raw environmental data and everyday lifestyle interpretation.
      </p>

    </div>

  </div>

</section>

<section className="penneysInsightSection">

  <div className="penneysSectionBackground">

    <div className="penneysSectionLabel">
      03 · DESIGN INSIGHT
    </div>


    <div className="penneysSectionContent">

      <h2>
        Weather is not data — it’s decision context.
      </h2>

      <p>
        The core insight came from observing how people don’t interpret temperature numerically — they interpret it emotionally and behaviorally.
      </p>

      <p>
        Phrases like “it feels cold” or “I’ll need layers” reflect a translation layer between data and action that most apps ignore.
      </p>


      <div className="styleForecastQuoteBlock">
        <p>
          “The opportunity wasn’t to show weather — it was to translate it into decisions.”
        </p>
      </div>


    </div>

  </div>

</section>

<section className="penneysDesignSection">

  <div className="penneysSectionBackground">

    <div className="penneysSectionLabel">
      04 · DESIGN APPROACH
    </div>


    <div className="penneysSectionContent">

      <h2>
        Clarity under pressure: designing for health interpretation.
      </h2>

      <p>
        The interface prioritises fast comprehension of risk levels and clear action pathways,
        reducing cognitive load in potentially stressful contexts.
      </p>


      <ul>
        <li>Risk-first hierarchy (severity before detail)</li>
        <li>Simple iconography for mould classification</li>
        <li>Progressive disclosure for medical guidance</li>
      </ul>


    </div>

  </div>

</section>

<section className="penneysFeaturesSection">

  <div className="penneysSectionBackground">

    <div className="penneysSectionLabel">
      05 · KEY FEATURES
    </div>


    <div className="penneysSectionContent">

      <h2>
        From identification to prevention in one flow.
      </h2>


      <ul>
        <li>Mould identification system with visual classification support</li>
        <li>Health risk explanations tailored for non-expert users</li>
        <li>Prevention and treatment guidance module</li>
        <li>Mobile-first interaction designed in Jetpack Compose</li>
      </ul>


    </div>

  </div>

</section>

<section className="penneysDevSection">

  <div className="penneysSectionBackground">

    <div className="penneysSectionLabel">
      06 · DESIGN & DEVELOPMENT
    </div>


    <div className="penneysSectionContent">

      <h2>
        Built as a full-stack mobile experience.
      </h2>


      <p>
        The application was developed using Android Studio and Jetpack Compose,
        with MongoDB supporting data storage and structured mould classification content.
      </p>


      <p>
        UX design was translated directly into mobile components, ensuring consistency between
        research insights and implementation.
      </p>


      {/* 🖼 IMAGE GRID */}
      <div className="penneysImageGrid">

        <div className="penneysImagePlaceholder">
          Android Studio Build
        </div>

        <div className="penneysImagePlaceholder">
          Jetpack Compose UI
        </div>

        <div className="penneysImagePlaceholder">
          MongoDB Schema / Data Flow
        </div>

        <div className="penneysImagePlaceholder">
          App Prototype Screens
        </div>

      </div>


    </div>

  </div>

</section>

<section className="penneysPartnershipSection">

  <div className="penneysSectionBackground">

    <div className="penneysSectionLabel">
      07 · PARTNERSHIP CONTEXT
    </div>


    <div className="penneysSectionContent">

      <h2>
        Grounded in real-world health awareness.
      </h2>


      <p>
        The project was developed in collaboration with The Asthma Society of Ireland,
        ensuring alignment with real respiratory health concerns and public education goals.
      </p>


      <p>
        This influenced both the tone of the interface and the prioritisation of accessible language.
      </p>


      <a
        href="https://www.asthma.ie"
        target="_blank"
        rel="noopener noreferrer"
        className="partnerLink"
      >
        The Asthma Society of Ireland ↗
      </a>


      {/* 🖼 SINGLE FEATURE IMAGE */}
      <div className="penneysPlaceholderImage">
        Partnership / Research Collaboration Visual
      </div>


    </div>

  </div>

</section>

<section className="penneysOutcomeSection">
  <div className="penneysSectionBackground">
  <div className="penneysSectionLabel">
    08 · OUTCOME
  </div>

  <div className="penneysSectionContent">

    <h2>
      A working prototype for environmental health awareness.
    </h2>

    <p>
      The final application demonstrates how UX research and mobile design can be used
      to simplify complex health information into actionable guidance.
    </p>

    <p>
      It also showcases collaboration, iterative testing, and full mobile development
      across a year-long academic cycle.
    </p>

  </div>
</div>
</section>

<section className="penneysContributionSection">
  <div className="penneysSectionBackground">
  <div className="penneysSectionLabel">
    09 · MY CONTRIBUTION
  </div>

  <div className="penneysSectionContent">

    <h2>
      UX research, UI design, and frontend mobile implementation.
    </h2>

    <p>
      I contributed across UX research, interface design, and Android development,
      translating user insights into mobile UI components using Jetpack Compose.
    </p>

    <p>
      My focus was on simplifying complex environmental health information into
      a structured and emotionally readable experience.
    </p>

  </div>
</div>
</section>

        </main>

       <div className="penneysWrapper2">
                 <div className="penneysFooter">
           <Footer />
         </div>
         </div>

      </div>
    </>
  );
}
