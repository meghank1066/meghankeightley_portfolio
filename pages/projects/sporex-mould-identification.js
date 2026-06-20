
//import css 
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AirParticles from "../../components/AirParticles";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function SporexPage() {

   const isMobile = useMobileDevice();

  return (
    
    <>
     {/* {isMobile === false &&  <AirParticles /> } */}
      <div className="sporexPageShell">
    <div className="sporexWrapper">
<Header className="sporexNav" />
  </div>

      <main className="sporexprojectPage">
{/* 
      <h1 className="sporexbackgroundWord">
        SPOREX
      </h1> */}

      <section className="sporexprojectHero">

        <div className="sporexheroLeft">

          <span className="sporexprojectTag">
            FINAL YEAR PROJECT - MOBILE APP 
          </span>

          <h1 className="sporexprojectTitle">
            SPOREX
            <br />
            
          </h1>

          <p className="sporexprojectDescription">
            Helping users identify mould types,
            understand health risks, and access
            prevention guidance through an
            accessible digital platform.
          </p>

<div className="sporex-hero-links">

  <a className="sporex-hero-link sporex-apk-link"
     href="https://github.com/WiktorTeter/SporeX/releases/download/v1.0.3/SporeX-Expo-Build-v3.apk"
     target="_blank"
     rel="noopener noreferrer">
    Download our Android APK
  </a>

  <a className="sporex-hero-link"
     href="https://github.com/meghank1066/SporeX"
     target="_blank"
     rel="noopener">
    View My Code
  </a>

  <a className="sporex-hero-link"
     href="https://mahara.dkit.ie/view/view.php?t=e7154ea44877de1456d9"
     target="_blank"
     rel="noopener">
    Individual SPOREX Portfolio
  </a>

</div>

        </div>

        <div className="sporexheroRight">

          <div>
  <h4>PROJECT TYPE</h4>
  <p>Final Year Project</p>
</div>

<div>
  <h4>TIMELINE</h4>
  <p>12 Months</p>
  <p>2025–2026</p>
</div>

          <div>
            <h4 className="teamsporex">TEAM</h4>
         <p>
  Meghan Keightley, Diane Dalyop, Xu Teck Tan,
  <br />
  Wiktor Teter, Eljesa Mesi
</p>
          </div>

          <div>
            <h4>MY ROLE</h4>
            <p>
              UX Research · UI Design · Frontend Development
            </p>
          </div>

          <div>
            <h4>TOOLS</h4>
            <p>
              Kotlin · Jetpack Compose · Android Studio · MongoDB · Figma
            </p>
          </div>

          <div>
  <h4>PARTNERSHIP</h4>

  <p>
    <a
      href="https://www.asthma.ie"
      target="_blank"
      rel="noopener noreferrer"
      className="partnerLink"
    >
      The Asthma Society of Ireland
    </a>
  </p>
</div>

        </div>

      </section>

      <section className="sporexheroMockup">

        <div className="sporexplaceholderImage">
          SPOREX SCREENSHOT
        </div>

      </section>

      <section className="sporexOverviewSection">

  <div className="sporexSectionLabel">
    01 · PROJECT OVERVIEW
  </div>

  <div className="sporexSectionContent">

    <h2>
      Making invisible indoor health risks visible.
    </h2>

    <p>
      Sporex is a mobile application designed to help users identify mould types,
      understand potential health risks, and access clear prevention guidance.
      The system translates environmental health data into an accessible, user-friendly experience.
    </p>

    <p>
      Developed as a 12-month final year group project, the platform combines UX research,
      mobile UI design, and Android development to address a real-world public health problem.
    </p>

  </div>

</section>

<section className="sporexProblemSection">
  <div className="sporexSectionLabel">02 · PROBLEM SPACE</div>
  <div className="sporexSectionContent">

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

</section>

<section className="sporexInsightSection">
  <div className="sporexSectionLabel">03 · DESIGN INSIGHT</div>
  <div className="sporexSectionContent">


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

</section>


<section className="sporexDesignSection">
  <div className="sporexSectionLabel">04 · DESIGN APPROACH</div>
  <div className="sporexSectionContent">

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

</section>

<section className="sporexFeaturesSection">

  <div className="sporexSectionLabel">
    05 · KEY FEATURES
  </div>

  <div className="sporexSectionContent">

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

</section>

<section className="sporexDevSection">

  <div className="sporexSectionLabel">
    06 · DESIGN & DEVELOPMENT
  </div>

  <div className="sporexSectionContent">

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
    <div className="sporexImageGrid">

      <div className="sporexImagePlaceholder">Android Studio Build</div>

      <div className="sporexImagePlaceholder">Jetpack Compose UI</div>

      <div className="sporexImagePlaceholder">MongoDB Schema / Data Flow</div>

      <div className="sporexImagePlaceholder">App Prototype Screens</div>

    </div>

  </div>

</section>

<section className="sporexPartnershipSection">

  <div className="sporexSectionLabel">
    07 · PARTNERSHIP CONTEXT
  </div>

  <div className="sporexSectionContent">

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
    <div className="sporexPlaceholderImage">
      Partnership / Research Collaboration Visual
    </div>

  </div>

</section>

<section className="sporexOutcomeSection">

  <div className="sporexSectionLabel">
    08 · OUTCOME
  </div>

  <div className="sporexSectionContent">

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

</section>

<section className="sporexContributionSection">

  <div className="sporexSectionLabel">
    09 · MY CONTRIBUTION
  </div>

  <div className="sporexSectionContent">

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

</section>

      </main>
      <div className="sporexWrapper2">
 <Footer className="sporexFooter" />
  </div>
  </div>
    </>
  );
}