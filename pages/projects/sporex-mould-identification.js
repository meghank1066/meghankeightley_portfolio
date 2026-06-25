
//import css 
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AirParticles from "../../components/AirParticles";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function SporexPage() {

   const isMobile = useMobileDevice();

  return (
    
    <>
     {isMobile === false &&  <AirParticles /> }
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
  Designing a smarter approach to indoor health awareness through AI-powered
  mould identification, environmental insights, and user-centred guidance
  making complex data understandable for everyday users. SPOREX was created to
  transform a traditionally manual and unclear process into an accessible
  digital experience, combining image recognition, environmental monitoring,
  and health-focused recommendations to support users in identifying risks
  earlier and making informed decisions about their living environments.
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

         <img 
    className="sporexplaceholderImage" 
    src="/images/sporex_display.png" 
    alt="Coverscreen"
    style={{ width: "100%", height: "auto", display: "block" }} 
  />

      </section>

<section className="sporexOverviewSection">

  <div className="sporexSectionBackground">

    <div className="sporexSectionLabel">
      01 · PROJECT OVERVIEW
    </div>

    <div className="sporexSectionContent">

      <h2>
        A connected system for detecting, understanding and preventing mould in the home.
      </h2>

      <p>
        Sporex is an AI-powered mobile application designed to identify mould growth through image recognition, interpret environmental risk factors and guide users through safe prevention and treatment steps.
      </p>

      <p>
        Built as part of a year-long final year team project, the platform combines mobile UX design, computer vision and IoT sensor integration to address a real-world indoor health issue  particularly in damp housing environments.
      </p>

      <p>
        The system extends beyond a standard mobile app by integrating real-time environmental data such as humidity, CO₂ levels and temperature, allowing users to understand not just what mould is present, but why it is forming.
      </p>

           <div className="sporexInstaGrid">
  <div className="sporexInstaCard">
    <img src="/images/sporex-1.png" alt="sporex-1" />
  </div>

  <div className="sporexInstaCard">
    <img src="/images/sporex-2.png" alt="sporex-2" />
  </div>

  <div className="sporexInstaCard">
    <img src="/images/sporex-3.png" alt="sporex-3" />
  </div>

  <div className="sporexInstaCard">
    <img src="/images/sporex-4.png" alt="sporex-4" />
  </div>
</div>

    </div>

  </div>

</section>

<section className="sporexProblemSection">

  <div className="sporexSectionBackground">

    <div className="sporexSectionLabel">
      02 · PROBLEM SPACE
    </div>

    <div className="sporexSectionContent">

      <h2>
        Mould is visible in homes, but invisible in decision-making.
      </h2>

      <p>
        The idea for SPOREX came from a real situation in August 2025, after noticing visible damp and mould issues in a friend’s rented home. Although the problem was obvious, there was no simple way to understand the severity, potential health impact, or what action should be taken next.
      </p>

      <p>
        From a UX and human-factors perspective, the issue was not just detecting mould, it was helping people interpret what they were seeing. Existing solutions are often expensive, disconnected, or designed for occasional testing rather than everyday users.
      </p>

      <p>
        Traditional mould testing kits can cost over €100 and provide limited guidance beyond detection, creating accessibility barriers for renters and households dealing with damp environments.
      </p>

      <p>
        The project also identified a wider health consideration, particularly for users with asthma and respiratory conditions. This shifted SPOREX from being a one-time detection tool into a longer-term platform focused on awareness, monitoring, and prevention.
      </p>

      <p>
        SPOREX was built around the idea that environmental health information should not just be collected — it should be understandable, accessible, and actionable for everyday living.
      </p>

    </div>

  </div>

</section>

<section className="sporexInsightSection">

  <div className="sporexSectionBackground">

    <div className="sporexSectionLabel">
      03 · DESIGN INSIGHT
    </div>

    <div className="sporexSectionContent">

      <h2>
        From concept to system: defining the SPOREX vision.
      </h2>

      <p>
        SPOREX began as a concept I developed and pitched to the team, focused on addressing the gap between environmental health data and real-world understanding.
      </p>

      <p>
        Rather than treating mould detection as a purely technical problem, I framed it as a communication problem, how to translate invisible environmental risks into something users can interpret instantly and act upon.
      </p>

      <p>
        This early direction shaped the entire project scope, from AI-based detection to IoT integration and community-driven awareness tools.
      </p>

      <p>
        As part of the concept development, I also sourced and proposed collaboration with the Asthma Society of Ireland to ensure the project remained grounded in real respiratory health concerns and aligned with credible public health context.
      </p>
{/* 
      <div className="styleForecastQuoteBlock">
        <p>
          “The challenge wasn’t detecting mould, it was making environmental risk understandable enough to act on.”
        </p>
      </div> */}
 <img
                src="/images/problem-image.png"
                alt="Meghan"
                className="about-photo"
              />

    </div>

  </div>

</section>

<section className="sporexDesignSection">

  <div className="sporexSectionBackground">

    <div className="sporexSectionLabel">
      04 · DESIGN APPROACH
    </div>

    <div className="sporexSectionContent">

      <h2>
        Designing for clarity in environmental health data.
      </h2>

      <p>
        SPOREX required translating complex AI outputs, IoT sensor readings and environmental health data into an interface that could be understood instantly by non-technical users.
      </p>

      <p>
        The core challenge was reducing cognitive load without stripping meaning ensuring users could interpret risk levels, environmental conditions and recommended actions at a glance.
      </p>

      <p>
        My approach focused on building a visual language that connects system data to human decision-making through hierarchy, colour logic and structured simplicity.
      </p>

      {/* GRID: DESIGN PRINCIPLES */}
      <div className="sporexDesignGrid">

        <div className="sporexDesignCard">
          <h3>Risk-first hierarchy</h3>
          <p>
            Health risk indicators are prioritised above all secondary data so users instantly understand severity.
          </p>
        </div>

        <div className="sporexDesignCard">
          <h3>Data → visual translation</h3>
          <p>
            AI confidence scores and sensor readings are converted into clear UI states like safe, caution and high risk.
          </p>
        </div>

        <div className="sporexDesignCard">
          <h3>Accessibility-led design</h3>
          <p>
            High contrast, clear typography and minimal visual noise ensure fast comprehension under stress.
          </p>
        </div>

        {/* <div className="sporexDesignCard">
          <h3>Unified system UI</h3>
          <p>
            AI detection, IoT monitoring and community features share a consistent visual language.
          </p>
        </div> */}

      </div>

      {/* QUOTE BLOCK */}
      {/* <div className="styleForecastQuoteBlock">
        <p>
          “The goal wasn’t to display more data as it was to make the right data immediately understandable.”
        </p>
      </div> */}

      {/* VISUAL DESIGN ASSETS GRID */}
      <div className="sporexAssetGrid">

        <div className="sporexAssetCard">
            <img
                src="/images/sporex-moodboard.png"
                alt="Moodboard"
                className="sporexImagePlaceholder"
              /> 
          <p>Moodboard development exploring tone, texture and environmental health aesthetics.</p>
        </div>

        <div className="sporexAssetCard"> 
              <img
                src="/images/brand-identity-1.png"
                alt="Brand Identity"
                className="sporexImagePlaceholder"
              /> 
          <p>Logo design and brand system defining SPOREX’s visual identity and trust language.</p>
        </div>

        {/* <div className="sporexAssetCard"> 
            <img
                src="/images/color-palette.png"
                alt="logo-sporex"
                className="sporexImagePlaceholder"
              /> 
          <p>Risk-based colour system mapping environmental severity to intuitive UI states.</p>
        </div> */}

        <div className="sporexAssetCard">
         <img
                src="/images/paper-prototype-sporex.png"
                alt="paper-prototype"
                className="sporexImagePlaceholder"
              /> 
          <p>Early-stage UX sketches used to validate navigation flow and interaction logic.</p>
        </div>

      </div>

    </div>

  </div>

</section>

<section className="sporexFeaturesSection">

  <div className="sporexSectionBackground">

    <div className="sporexSectionLabel">
      05 · KEY SCREENS & FEATURES
    </div>

    <div className="sporexSectionContent">

      <h2>
        From detection to understanding  designed as one continuous flow.
      </h2>

      <p>
        Sporex was structured around a set of core mobile screens that guide users from identifying mould to understanding risk levels and taking preventative action. Each screen was designed to reduce uncertainty and translate environmental health data into clear decisions.
      </p>

      <p>
        Instead of overwhelming users with technical terminology, the interface prioritises visual clarity, progressive disclosure and immediate action pathways.
      </p>

      {/* FEATURE 1 */}
      <div className="sporexFeatureBlock">

        <h3>AI Mould Detection</h3>

        <p>
          Users can capture or upload an image to identify mould type. The system returns a classification result with confidence scoring and visual indicators designed for quick interpretation.
        </p>

        <div className="sporexImageGrid">
          <div className="sporexImagePlaceholder">
            Detection Screen (Camera / Upload)
          </div>
          <div className="sporexImagePlaceholder">
            Classification Result + Risk Output
          </div>
        </div>

      </div>

      {/* FEATURE 2 */}
      <div className="sporexFeatureBlock">

        <h3>Health Risk Dashboard</h3>

        <p>
          Each mould type is mapped to a structured risk profile explaining potential respiratory impacts, severity levels and at-risk groups in a simplified, non-clinical format.
        </p>

        <div className="sporexImageGrid">
          <div className="sporexImagePlaceholder">
            Risk Level Breakdown UI
          </div>
          <div className="sporexImagePlaceholder">
            Symptom / Impact Overview
          </div>
        </div>

      </div>

      {/* FEATURE 3 */}
      <div className="sporexFeatureBlock">

        <h3>Prevention & Guidance Flow</h3>

        <p>
          Instead of static advice pages, prevention guidance is structured as step-based actions  making it easier for users to follow remediation instructions in real-world scenarios.
        </p>

        <div className="sporexImageGrid">
          <div className="sporexImagePlaceholder">
            Step-by-step Cleanup Guide
          </div>
          <div className="sporexImagePlaceholder">
            Prevention Recommendations UI
          </div>
        </div>

      </div>

      {/* FEATURE 4 */}
      <div className="sporexFeatureBlock">

        <h3>Environmental Awareness Layer</h3>

        <p>
          The system also integrates contextual environmental information, helping users understand how humidity, ventilation and indoor conditions contribute to mould formation.
        </p>

        <div className="sporexImageGrid">
          <div className="sporexImagePlaceholder">
            Air Quality / Environment Metrics
          </div>
          <div className="sporexImagePlaceholder">
            Condition Indicators Dashboard
          </div>
        </div>

      </div>

    </div>

  </div>

</section>

<section className="sporexDevSection">

  <div className="sporexSectionBackground">

    <div className="sporexSectionLabel">
      06 · DESIGN & DEVELOPMENT
    </div>

    <div className="sporexSectionContent">

      <h2>
        Built as a full-stack mobile system over 8 months.
      </h2>

      <p>
        SPOREX was developed across an 8-month build cycle using Android Studio and Jetpack Compose for the frontend,
        with MongoDB powering structured data storage for mould classifications, user history and  environmental records.
      </p>

      <p>
        As frontend lead, my responsibility was translating UX research and Figma designs directly into functional mobile components.
        This meant not just replicating screens, but designing reusable UI patterns that could scale across AI detection,
        IoT sensor data and  community features.
      </p>

      <p>
        The core challenge was maintaining consistency between rapidly evolving design decisions and a working production UI,
        while ensuring that backend data structures mapped cleanly into user-facing interfaces.
      </p>

      <ul>
        <li>
          <strong>Frontend architecture:</strong> Jetpack Compose component-based structure for reusable UI elements (cards, risk indicators, dashboards)
        </li>

        <li>
          <strong>Data integration:</strong> MongoDB collections mapped directly to app states (user scans, history logs, environmental readings)
        </li>

        <li>
          <strong>Design translation:</strong> Figma prototypes converted into responsive mobile layouts with consistent spacing, typography and  hierarchy
        </li>

        <li>
          <strong>System cohesion:</strong> Unified UI logic across AI detection, IoT data display and  community interaction features
        </li>
      </ul>
      
   {/* HERO BUILD IMAGE */}
<div className="sporexImageHero">
  <img
    className="sporexHeroImg"
    src="/images/sporex-built.png"
    alt="sporex build overview"
  />
</div>

{/* RELEASE IMAGE GRID */}
<div className="sporexReleaseGrid">
  <div className="sporexReleaseCard">
    <img src="/images/release1.png" alt="release 1" />
  </div>

  <div className="sporexReleaseCard">
    <img src="/images/release2.png" alt="release 2" />
  </div>

  <div className="sporexReleaseCard">
    <img src="/images/release3.png" alt="release 3" />
  </div>

  <div className="sporexReleaseCard">
    <img src="/images/sprint12eg.png" alt="sprint 12 example" />
  </div>
</div> 

      
  {/* <div className="sporexImagePlaceholder sporexTallImage">
  <img 
    className="sporexVerticalImg" 
    src="/images/brandboard.png" 
    alt="Brand board"
  /> 
</div> */}

      <p>
        The final result was a structured mobile system where design and engineering were tightly coupled,
        allowing UI decisions to directly reflect real-time data and environmental inputs.
      </p>

    </div>

  </div>

</section>

<section className="sporexTestingSection">
  <div className="sporexSectionBackground">
    <div className="sporexSectionLabel">
      10 · USER TESTING
    </div>

    <div className="sporexSectionContent">

      <h2>
        Iterative user testing aligned with Scrum release cycles.
      </h2>

      <p>
        User testing was conducted continuously throughout the development lifecycle, with structured testing sessions aligned to each official Scrum release. Rather than a single end-stage evaluation, the application was validated iteratively at each milestone to ensure usability, stability, and clarity of interaction.
      </p>

      <p>
        Each release introduced targeted testing scenarios designed to simulate real-world usage, particularly focusing on onboarding flow, navigation clarity, and the image-based mould detection system. These scenarios allowed us to observe how users naturally interacted with the app under realistic conditions, highlighting friction points early in the development cycle.
      </p>

      <p>
        A key focus of testing was the image capture and scanning process. By observing how participants framed and submitted photos of suspected mould, we were able to identify inconsistencies in user behaviour that could lead to mis-scans or inaccurate interpretation by the AI system. These insights directly informed UI refinements and guidance improvements across subsequent releases.
      </p>

      <p>
        This iterative approach ensured that each Scrum release was validated through real user interaction, progressively improving usability, accuracy, and overall experience across the full development cycle.
      </p>

      <div className="sporexTestingImages">
        <img
          src="/images/sporex-user-testing.png"
          alt="User testing session observing image capture behaviour"
        /> 

    </div>
  </div>
    </div>
</section>

<section className="sporexPartnershipSection">

  <div className="sporexSectionBackground">

    <div className="sporexSectionLabel">
      07 · PARTNERSHIP CONTEXT
    </div>

    <div className="sporexSectionContent">

      <h2>
        Grounded in real-world respiratory health collaboration.
      </h2>

      <p>
        SPOREX was developed in collaboration with the Asthma Society of Ireland, ensuring the system aligned with real respiratory health needs rather than abstract design assumptions.
      </p>

      <p>
        This partnership influenced both the tone and structure of the application  particularly how medical risk, environmental data, and prevention guidance are communicated to non-technical users.
      </p>

      <p>
        Early-stage discussions helped validate the problem space and reinforced the importance of accessibility, clarity, and trust in health-related interfaces.
      </p>


        <div className="sporexPartnershipImage">
  <img
    src="/images/asthmasporexposter.png"
    alt="Asthma Society collaboration poster"
  />
</div>



      <div className="sporexCollabSection">

        <h3>Stakeholder Engagement</h3>

        <p>
          Two formal meetings were conducted with representatives from the Asthma Society of Ireland.
          The first focused on validating the concept and aligning the project with real patient needs.
          The second reviewed system progress, including AI mould detection, environmental sensor integration,
          and early UI prototypes.
        </p>

        <p>
          Key feedback emphasised the importance of clear risk communication, accessible language,
          and avoiding overwhelming users with clinical or technical terminology.
        </p>

      </div>

     <div className="sporexCollabImage">
  <img
    src="/images/sporex_asthmacollab.png"
    alt="Asthma collaboration visual"
  />
</div>

      <div className="sporexCollabSection">

        <h3>Real-world validation (Expo Day)</h3>

        <p>
          At the final showcase, representatives from the Asthma Society of Ireland visited the project stand,
          providing informal feedback on usability, clarity of health messaging, and potential real-world applications.
        </p>

        <p>
          This reinforced the importance of designing for long-term engagement rather than a one-time diagnostic tool.
        </p>

      </div>

      <div className="sporexFeatureHighlight">

        <h3>Feature impact: Callback system (added June 2026)</h3>

        <p>
          Following stakeholder feedback, a callback feature was introduced to connect users with Asthma Society professionals.
          This shifted the app from a static information tool to a guided support system,
          improving trust and extending user engagement beyond initial diagnosis.
        </p>

      </div>

      <a
        href="https://www.asthma.ie"
        target="_blank"
        rel="noopener noreferrer"
        className="partnerLink"
      >
        The Asthma Society of Ireland ↗
      </a>

    </div>

  </div>

</section>

<section className="sporexOutcomeSection">
  <div className="sporexSectionBackground">

    <div className="sporexSectionLabel">
      08 · OUTCOME
    </div>

    <div className="sporexSectionContent">

      <h2>
        A working prototype for environmental health awareness.
      </h2>

      <p>
        The final application delivers a functional mobile prototype that translates UX research and mobile design principles into a clear, actionable system for identifying and understanding mould-related environmental risks.
      </p>

      <p>
        Throughout development, the project evolved through iterative testing, design refinement, and continuous alignment between frontend implementation, AI-driven features, and environmental data interpretation.
      </p>

      <p>
        A key milestone in the project was the final year Expo, where the system was presented to both industry visitors and academic reviewers. This provided real-time feedback on usability, clarity of health communication, and overall system purpose within a real-world context.
      </p>

      <p>
        The Asthma Society of Ireland, who had been engaged throughout the project via a series of remote collaboration meetings, also attended the showcase. Their feedback validated the direction of the application and reinforced its relevance to respiratory health awareness and public education.
      </p>

      <p>
        The application is currently available as a deployable mobile build for testing and demonstration purposes, allowing users to experience the full end-to-end system including AI detection, environmental monitoring, and guidance features.
      </p>

    </div>

  </div>
</section>

<section className="sporexOutcomeSection">
  <div className="sporexSectionBackground">
    <div className="sporexSectionLabel">
      08 · OUTCOME
    </div>

    <div className="sporexSectionContent">

      <h2>
        A working prototype for environmental health awareness, validated through real-world testing and industry review.
      </h2>

      <p>
        The final application delivers a fully functional mobile prototype that translates complex environmental health data into clear, actionable insights through UX research, UI design, and iterative development.
      </p>

      <p>
        A key milestone was our final year Expo, where the project was presented to industry visitors and academic reviewers. We also showcased the work to our external collaborator, who we had been meeting with consistently over several months through structured online sessions, allowing continuous feedback to shape the direction of the product.
      </p>

      <p>
        The outcome reflects a full year of iteration, user testing, and mobile development  evolving from early concept exploration into a cohesive, user-centred system designed for real-world environmental awareness.
      </p>

         <div className="sporexOutcomephoto">
  <img
    src="/images/sporex_promo_full.png"
    alt="sporex Outcome photo"
  />
</div>

    </div>
  </div>
</section>

<section className="sporexContributionSection">
  <div className="sporexSectionBackground">
    <div className="sporexSectionLabel">
      09 · MY CONTRIBUTION
    </div>

    <div className="sporexSectionContent">

      <h2>
        Creative direction, UX leadership, frontend development and full visual system ownership.
      </h2>

      <p>
        I acted as Creative Director across the project, leading the visual identity, interface direction, and overall user experience. My role combined UX research, UI design, graphic design, and frontend implementation, translating conceptual ideas into a cohesive mobile experience.
      </p>

      <p>
        On the development side, I worked as the primary frontend developer, building and refining mobile UI components and ensuring design consistency across the application. I focused on turning complex environmental and AI-driven data into interfaces that felt intuitive, structured, and emotionally readable.
      </p>

      <p>
        I also led the majority of user testing sessions, designing scenarios that prompted realistic user behaviour, particularly around image capture for mould detection. By observing how users photographed and interacted with the scanning feature, I identified key points of user error and helped refine the experience to reduce mis-scans and improve overall reliability of results.
      </p>

<div className="sporexContributionGrid">

  <div className="sporexContributionCard">
    <img
      src="/images/sporex-meghan.png"
      alt="My contribution highlight"
    />
  </div>

  <div className="sporexContributionCard">
   <img src="/images/mycontribution.webp"
      alt="My contribution highlight"
    />
  </div>

</div>
</div>
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