import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import nexspaceNodes from "../../components/nexspaceNodes";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function nexspacePage() {
  const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <nexspaceNodes />} */}

      <div className="nexspacePageShell">
        <div className="nexspaceWrapper">
          <Header className="nexspaceNav" />
        </div>
        <main className="nexspaceprojectPage">

          <section className="nexspaceprojectHero">
            <div className="nexspaceheroLeft">
              <span className="nexspaceprojectTag">
  VIRTUAL REALITY · META QUEST EXPERIENCE
</span>
              <h1 className="nexspaceprojectTitle">
  <img
    src="/images/nexspace/nexspace-logo.png"
    alt="Nexspace"
    className="nexspaceTitleLogo"
  />
</h1>
            <p className="nexspaceprojectDescription">
  An immersive Meta Quest virtual reality experience developed in Unity
  using C#. I contributed as the C# Developer, Creative Director and Asset
  Manager, building interactive gameplay mechanics, directing the visual
  identity and optimising 3D assets to deliver a seamless, immersive VR
  experience.
</p>
  <img
    src="/images/nexspace/nexspace-cover-plain.png"
    alt="Nexspace"
    className="nexspaceTitleLogo"
  /> 
              <div className="nexspace-hero-links">
                <a className="nexspace-hero-link" href="https://github.com/meghank1066/NexSpaceVR-HDRP.git" target="_blank" rel="noopener noreferrer">
                  View The Code
                </a>
  <a 
  className="nexspace-hero-link" 
  href="/nexspace/NexspaceWalkthrough"
>
  Video Walkthrough
</a>         </div>
            </div>

         <div className="nexspaceheroRight">
  <div>
    <h4>PROJECT TYPE</h4>
    <p>Group Virtual Reality Project (8 Members)</p>
  </div>

  <div>
    <h4>TIMELINE</h4>
  <p>6 Months</p>
  <p>January - June 2026</p>
  </div>

<div>
            <h4 className="teamnexspace">TEAM</h4>
         <p>
  Meghan Keightley, Konstanty Szer,   <br />Teemu Järvenlahti, Vasco Castro
  <br />
 Ana Isabel Morón, Gabriel Pinheiro,   <br /> Judith Masip

</p>
          </div>

  <div>
    <h4>ROLE</h4>
    <p>C# Developer · Creative Director · Asset Manager</p>
  </div>

  <div>
    <h4>TOOLS</h4>
    <p>Unity · C# · Meta Quest · Blender</p>
  </div>

 <div>
    <h4>Programme</h4>
<p>
  <a 
    href="https://www.ap.be/en/programme/european-project-semester-eps" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    European Project Semester
  </a>
</p>

  </div>

<div>
  <h4>Partnership</h4>
  <p>
    <a
      href="https://www.ap.be/en/immersive-lab"
      target="_blank"
      rel="noopener noreferrer"
    >
      AP Immersive Lab
    </a>
  </p>
</div>

</div>
          </section>

      <section className="nexspaceHeroContainer">
        
  {/* <div className="nexspaceHeroHeader"> 
  <img
    src="/images/nexspace/nexspace-logo.png"
    alt="Nexspace"
    className="nexspaceTitleLogo"
  /> 
    <p className="nexspaceHeroYear">Every Byte Leaves A Mark.</p>
  </div> */}

<div className="nexspaceHeroMockupWrapper">
  <div className="nexspaceMainShowcase">
    <div className="nexspaceImageWrapper">
      <img
        src="/images/nexspace/nexspace-headset-cover.png"
        alt="nexspace promo showcase"
      />
    </div>
  </div>
</div>
</section>

<section className="nexspaceOverviewSection">

  <div className="nexspaceSectionBackground">

    <div className="nexspaceSectionLabel">
      01 · PROJECT OVERVIEW
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        Exploring the future of digital waste through immersive storytelling and embodiment in virtual reality
      </h2>

      <p>
        As part of the European Project Semester (EPS) at AP Hogeschool, our international team of eight students was selected to collaborate with the AP Immersive Lab on the <strong>Virtual Bodies & Artificial Minds</strong> Project. The programme challenged teams to investigate how immersive technologies influence embodiment and presence by creating original VR experiences, conducting user testing and analysing how participants interacted with virtual environments.
      </p>

      <p>
        After researching several concepts, our team chose to create a fully immersive VR experience rather than an AR application. We believed virtual reality offered a stronger sense of embodiment and emotional storytelling allowing users to experience our narrative from within rather than observing it from the outside.
      </p>

      <p>
        Our chosen theme was <strong>Data Waste</strong> which is the often invisible environmental impact of our digital lives. The experience places users inside a futuristic city that gradually deteriorates as the hidden consequences of excessive data consumption unfold. Through environmental storytelling, interaction and immersive world-building, we encourage users to reflect on how everyday digital habits contribute to a growing global problem and what our future could become if those behaviours remain unchanged.
      </p>

      {/* <div className="nexspaceInstaGrid">
        <div className="nexspaceInstaCard">
          <img src="/images/nexspace-1.png" alt="nexspace-1" />
        </div>

        <div className="nexspaceInstaCard">
          <img src="/images/nexspace-2.png" alt="nexspace-2" />
        </div>

        <div className="nexspaceInstaCard">
          <img src="/images/nexspace-3.png" alt="nexspace-3" />
        </div>

        <div className="nexspaceInstaCard">
          <img src="/images/nexspace-4.png" alt="nexspace-4" />
        </div>
      </div> */}

    </div>

  </div>

</section>

  <section className="nexspaceInsightSection">
  <div className="nexspaceSectionBackground">
    <div className="nexspaceSectionLabel">
      02 · DESIGN & DEVELOPMENT
    </div>

    <div className="nexspaceSectionContent">
      <h2>
        Designing an immersive narrative through collaborative world-building.
      </h2>

      <p>
        Our design process began with collaborative workshops, where we explored the theme of <strong>Data Waste</strong> through research, mood boards, and story mapping. As a team, we wanted the experience to feel more than educational as we wanted users to emotionally connect with the consequences of their digital actions through embodiment and immersive storytelling.
      </p>

      <p>
        Together, we developed the narrative from concept to completion, carefully planning how each scene would progress naturally into the next. Every environment, interaction, and visual transition was designed to strengthen the user's sense of presence while gradually revealing the impact of unchecked digital consumption. Rather than simply explaining the issue, our goal was to create an experience that allowed users to feel immersed within the consequences of the story.
      </p>

      <p>
        Using Unity and Blender, we designed and developed our environments, interactions, and custom 3D assets. The team created original props, promotional posters, environmental details, and the television installations that became a central part of the narrative. As the only two students with a software development background, my peer and I introduced the rest of the team to Unity and Blender, helping everyone contribute to the production pipeline while collaboratively bringing our creative vision to life.
      </p>

      <p>
        Development took place using Unity's High Definition Render Pipeline (HDRP), allowing us to take advantage of the AP Immersive Lab's high-performance hardware to achieve realistic lighting, materials, and visual fidelity.
      </p>

      <p>
        Throughout development, every creative and technical decision was shaped collaboratively and refined through multiple rounds of user testing. Over six months, we iterated on the experience across four testing sessions involving more than thirty participants, allowing us to continually improve immersion, pacing, and interaction design based on real user feedback.
      </p>

    </div>
  </div>
</section>
 <section className="nexspaceDesignSection">
  <div className="nexspaceSectionBackground"> 
    <div className="nexspaceSectionLabel">
      03 · THE BRAND
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        Creating a futuristic identity to represent the hidden impact of digital consumption.
      </h2>

      <p>
        NexSpace's visual identity was designed around the idea of a future shaped by excessive digital growth. Since the experience explores data waste and the environmental consequences of our online behaviours, we wanted the branding to feel futuristic, technological and slightly dystopian, reflecting a world where digital innovation has progressed beyond sustainable limits.
      </p>

      <p>
        Through our visual direction, we combined futuristic environments, digital interfaces and sci-fi inspired imagery to represent the contrast between technological advancement and environmental decline. The identity reflects both the excitement of emerging technology and the consequences of relying on increasingly data-heavy systems.
      </p>

      <p>
        The colour palette balances vibrant futuristic accents with darker tones to represent this contrast. Purple and blue tones represent innovation, artificial intelligence and digital spaces, while the darker navy foundation reflects the uncertainty and environmental impact hidden behind modern technology. Softer highlights provide balance, representing the human perspective and the possibility of creating a more sustainable digital future.
      </p>


      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "56.25%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAGgAgcX3AE/3pP0VIhmY-M_K9Q1ny9Aag/view?embed"
          allowFullScreen
          allow="fullscreen"
          title="NexSpace Client Pitch"
        />
      </div>

      <a
        href="https://www.canva.com/design/DAGgAgcX3AE/3pP0VIhmY-M_K9Q1ny9Aag/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* View NexSpace Client Pitch ↗ */}
      </a>


      <h3 className="h3text">
        NexSpace's Brand Identity
      </h3>

      <div className="nexspaceImageRow">
        <img 
          src="/images/nexspace/nexspace-logo.png" 
          className="nexspaceLogoSquare"
          alt="nexspace logo"
        />

        <img 
          src="/images/nexspace/logo-cloud.png"
          className="nexspaceLogoSquare"
          alt="nexspace alternative logo"
        />
      </div>


      <div className="nexspace-color-row">

        <div className="nexspace-swatch">
          <div
            className="nexspace-swatch-block"
            style={{ background: "#7a66f1" }}
          ></div>
          <span className="nexspace-swatch-hex">#7A66F1</span>
          <span className="nexspace-swatch-name">Purple / Digital Innovation</span>
        </div>


        <div className="nexspace-swatch">
          <div
            className="nexspace-swatch-block"
            style={{ background: "#d8cfff" }}
          ></div>
          <span className="nexspace-swatch-hex">#D8CFFF</span>
          <span className="nexspace-swatch-name">Soft Lavender / Human Connection</span>
        </div>


        <div className="nexspace-swatch">
          <div
            className="nexspace-swatch-block"
            style={{ background: "#404B93" }}
          ></div>
          <span className="nexspace-swatch-hex">#404B93</span>
          <span className="nexspace-swatch-name">Deep Blue / Digital Systems</span>
        </div>


        <div className="nexspace-swatch">
          <div
            className="nexspace-swatch-block"
            style={{ background: "#a0e0f4" }}
          ></div>
          <span className="nexspace-swatch-hex">#A0E0F4</span>
          <span className="nexspace-swatch-name">Light Blue / Futuristic Interfaces</span>
        </div>


        <div className="nexspace-swatch">
          <div
            className="nexspace-swatch-block"
            style={{ background: "#0b132b" }}
          ></div>
          <span className="nexspace-swatch-hex">#0B132B</span>
          <span className="nexspace-swatch-name">Navy / Digital Dystopia</span>
        </div>


        <div className="nexspace-swatch">
          <div
            className="nexspace-swatch-block"
            style={{ background: "#ffffff", border: "1px solid #ddd" }}
          ></div>
          <span className="nexspace-swatch-hex">#FFFFFF</span>
          <span className="nexspace-swatch-name">White / System Collapse & Reset</span>
        </div>

      </div>

    </div>
  </div>
</section>


{/* 04 · IMMERSIVE STORYTELLING */}
<section className="nexspaceFeaturesSection">
  <div className="nexspaceSectionBackground">
    <div className="nexspaceSectionLabel">
      04 · IMMERSIVE STORYTELLING
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        Using narrative and world-building to communicate an invisible problem.
      </h2>

      <p>
        The experience begins with users seated inside a futuristic vehicle, guided by an alien robotic narrator through a technologically advanced city. Rather than presenting facts directly, the environment itself becomes the storyteller, encouraging users to observe and interpret the world around them.
      </p>

      <p>
        As the journey progresses, the city gradually deteriorates before users enter a room surrounded by televisions that encourage reflection on everyday digital behaviours. The experience concludes as the virtual world crashes into an empty white space, symbolising the hidden consequences of excessive data consumption and leaving users to reflect on the future of an increasingly digital society.
      </p>

    </div>
  </div>
</section>


{/* 05 · EMBODIMENT */}
<section className="nexspaceFeaturesSection">
  <div className="nexspaceSectionBackground">
    <div className="nexspaceSectionLabel">
      05 · EMBODIMENT
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        Making the virtual world feel physically believable.
      </h2>

      <p>
        A major focus of the project was exploring embodiment—how users could genuinely feel present within the virtual environment rather than simply observing it. Every interaction was designed to strengthen the user's sense of presence and connection to the world around them.
      </p>

      <p>
        We explored concepts including synchronising a physical seatbelt with its virtual counterpart, allowing users to see their own virtual legs while seated, and creating interactive objects inside the vehicle that reacted naturally to touch. We also investigated hyper-personalisation, where the experience could recognise and address users directly, reinforcing the feeling that the virtual environment was aware of their presence.
      </p>

    </div>
  </div>
</section>


{/* 06 · ENVIRONMENTAL STORYTELLING */}
<section className="nexspaceFeaturesSection">
  <div className="nexspaceSectionBackground">
    <div className="nexspaceSectionLabel">
      06 · ENVIRONMENTAL STORYTELLING
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        Allowing the environment to become the narrator.
      </h2>

      <p>
        Rather than relying on lengthy dialogue or text, the experience communicates its message through environmental design. Promotional posters, futuristic architecture, television broadcasts, lighting, sound design and environmental decay gradually reveal the consequences of excessive data waste.
      </p>

      <p>
        This approach encouraged users to discover the story naturally as they progressed through the experience, creating moments of curiosity, discomfort and reflection without interrupting immersion.
      </p>

    </div>
  </div>
</section>

<section className="nexspaceDevSection">

  <div className="nexspaceSectionBackground">

    <div className="nexspaceSectionLabel">
      07 · SCENE CREATION
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        A narrative told through three immersive environments.
      </h2>

      <p>
        Rather than relying on traditional cutscenes or dialogue, our VR experience communicated its message through three carefully designed environments. Each scene represented a different stage of the user's journey, gradually shifting from curiosity to reflection before ending with the collapse of the digital world.
      </p>

      {/* CITY */}
      <div className="nexspaceSceneBlock">

        <h3> · The Futuristic City</h3>

        <p>
          The experience opens in a technologically advanced dystopian city, where users remain seated inside a moving vehicle as an alien robotic narrator introduces the world around them. The environment establishes a sense of wonder while subtly hinting at the hidden environmental cost of our increasingly digital lives through architecture, advertisements and world-building.
        </p>

        <div className="nexspaceSceneImage">
          <img
            src="/images/nexspace/futuristic-city.png"
            alt="Futuristic city scene"
          />
        </div>

      </div>

      {/* TV ROOM */}
      <div className="nexspaceSceneBlock">

        <h3> · The Television Room</h3>

        <p>
          Users are transported into a room filled with televisions, promotional posters and digital media. The pace intentionally slows, encouraging participants to reflect on their own online behaviours and the volume of data generated every day. This environment acts as the emotional turning point before the experience reaches its climax.
        </p>

        <div className="nexspaceSceneImage">
          <img
            src="/images/nexspace/tv-asset.webp"
            alt="Television room"
          />
        </div>

      </div>

      {/* WHITE ROOM */}
      <div className="nexspaceSceneBlock">

        <h3> · The White Void</h3>

        <p>
          As the televisions begin to crash and the digital environment destabilises, the entire world fades into an empty white space. This final scene symbolises the collapse of the digital ecosystem and leaves users with a moment of silence and reflection, reinforcing the invisible consequences of excessive data consumption through a simple but powerful visual metaphor.
        </p>

      </div>

    </div>

  </div>

</section>
{/* 08 · USER TESTING */}
{/* <section className="nexspaceFeaturesSection">
  <div className="nexspaceSectionBackground">
    <div className="nexspaceSectionLabel">
      08 · USER TESTING & ITERATION
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        Refining the experience through participant feedback.
      </h2>

      <p>
        Over six months, the experience evolved through four structured rounds of user testing involving more than thirty participants. Each testing session provided valuable insights into immersion, narrative pacing, accessibility and interaction design.
      </p>

      <p>
        Feedback from participants directly influenced design decisions throughout development, allowing the team to refine interactions, improve clarity and strengthen the overall sense of embodiment before delivering the final experience.
      </p>

    </div>
  </div>
</section> */}
<br />

<section className="nexspaceFeaturesSection">
  <div className="nexspaceSectionBackground">

    <div className="nexspaceSectionLabel">
      08 · USER TESTING & ITERATION
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        Understanding immersion through experimentation and user research.
      </h2>

      <p>
        Before developing NexSpace, our team began by exploring existing VR experiences within the AP Immersive Lab to understand what created a strong sense of presence, embodiment and engagement. Each team member individually experienced different VR applications using Meta Quest headsets, documenting their thoughts, emotions and observations throughout the process.
      </p>

      <p>
        Following each experience, we created written analyses exploring what worked well, what reduced immersion, and how interactions, environments and storytelling techniques could be improved. These findings helped establish the design principles that guided our own VR experience, particularly around creating believable environments and meaningful user interactions.
      </p>


      {/* VR TESTING IMAGE GRID */}
      <div className="nexspaceInstaGrid">

        <div className="nexspaceInstaCard">
          <img 
           src="/images/nexspace/user-testing-1-group.png"
            alt="VR testing session 1" 
          />
        </div>

      </div>


      <div className="nexspaceFeatureBlock">

        <h3>Early Immersion Research</h3>

        <p>
          This initial experiment allowed us to identify key factors that influence embodiment, including environmental realism, physical interaction, narrative pacing and the relationship between the user's real-world body and virtual presence. These insights directly influenced our later design decisions, from the seated vehicle experience to our exploration of personalised and reactive interactions.
        </p>

      </div>


      <div className="nexspaceFeatureBlock">

        <h3>Iterative User Testing</h3>

        <p>
          Throughout development, we continued testing NexSpace through multiple iterations. Across four testing sessions over six months with more than thirty participants, we collected feedback on immersion, accessibility, storytelling and interaction design. Each round helped us refine the experience and ensure that the final version communicated the impact of data waste while maintaining a strong sense of presence.
        </p>

      </div>
   <div className="nexspaceInstaGrid">

        <div className="nexspaceInstaCard">
          <img 
           src="/images/nexspace/experience.png"
            alt="VR testing session 1" 
          />
        </div>

      </div>

    </div>

  </div>
</section>

<section className="nexspacePartnershipSection">

  <div className="nexspaceSectionBackground">

    <div className="nexspaceSectionLabel">
      10 · RESEARCH PARTNERSHIP
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        Collaborating with AP Immersive Lab to explore embodiment in virtual reality.
      </h2>

      <p>
        NexSpace was developed in partnership with <strong>AP Immersive Lab</strong> as part of the European Project Semester at AP Hogeschool, Antwerp. Throughout the project, our team worked directly within the Immersive Lab, using its professional VR facilities to research embodiment, immersive storytelling, and user interaction through experimentation.
      </p>

      <p>
        The lab provided access to high-performance workstations capable of running Unity's High Definition Render Pipeline (HDRP), Meta Quest headsets for development and user testing, and a dedicated green screen studio for recording demonstrations and project media. Working within this environment allowed us to prototype, iterate and evaluate the experience using professional equipment throughout the semester.
      </p>

      {/* IMAGE 1 */}
      <div className="nexspacePartnershipImage">
        <img
          src="/images/nexspace/ap-lab.webp"
          alt="Working in the AP Immersive Lab"
        />
      </div>

      <div className="nexspaceCollabSection">

        {/* <h3>Research Collaboration</h3> */}

        <p>
          Our collaboration extended beyond development. Each month, the team presented progress updates, research findings and user testing outcomes to members of AP Immersive Lab. These meetings created opportunities to discuss embodiment, immersion and interaction design while refining our research direction through expert feedback.
        </p>

        <p>
          The project was not only about delivering a finished VR experience, it also contributed practical research into how immersive technologies can influence user perception, presence and emotional engagement.
          Below is one of our mid-semester presentations, which we delivered to AP Immersive Lab to share our research findings and design progress.
        </p>

      </div>

      {/* IMAGE 2 */}
 <div className="nexspaceCollabImage">
  <div
    style={{
      position: "relative",
      width: "100%",
      height: 0,
      paddingTop: "56.25%",
      paddingBottom: 0,
      boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
      marginTop: "1.6em",
      marginBottom: "0.9em",
      overflow: "hidden",
      borderRadius: "8px",
      willChange: "transform",
    }}
  >
    <iframe
      loading="lazy"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        border: "none",
        padding: 0,
        margin: 0,
      }}
      src="https://www.canva.com/design/DAGmPvGeQog/AwyWpy8UoSHnl8cZJnFacg/view?embed"
      allowFullScreen
      allow="fullscreen"
      title="AP Team Body Presentation"
    />
  </div>

  <a
    href="https://www.canva.com/design/DAGmPvGeQog/AwyWpy8UoSHnl8cZJnFacg/view"
    target="_blank"
    rel="noopener noreferrer"
  >
    AP Team Body Presentation - May
  </a>
</div>


      <div className="nexspaceCollabSection">

        <h3>Academic Mentorship</h3>

        <p>
          Throughout the semester, our team met every Monday morning with our academic mentors, <strong>Hiram</strong> and <strong>Nathan</strong>, before beginning development. These weekly sessions provided continuous guidance, helping us evaluate our design decisions, research methodology and technical progress.
        </p>

        <p>
          Hiram, who leads the European Project Semester programme, played a key role in shaping the project's direction and supporting its development from concept to completion. Nathan brought expertise in psychology, helping us better understand embodiment, user behaviour and the cognitive principles behind immersive storytelling, which informed both our design decisions and research approach.
        Below is our final presentation to AP Immersive Lab, which we delivered at the end of the semester to showcase our completed VR experience and share our research findings.
        </p>

      </div>

      {/* IMAGE 3 */}
      {/* IMAGE 2 */}
<div className="nexspaceCollabImage">

  <div
    style={{
      position: "relative",
      width: "100%",
      height: 0,
      paddingTop: "56.25%",
      paddingBottom: 0,
      boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
      marginTop: "1.6em",
      marginBottom: "0.9em",
      overflow: "hidden",
      borderRadius: "8px",
      willChange: "transform",
    }}
  >
    <iframe
      loading="lazy"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        border: "none",
        padding: 0,
        margin: 0,
      }}
      src="https://www.canva.com/design/DAGiRTh80UE/0gyDFKXx0M4DciL2NazUKQ/view?embed"
      allowFullScreen
      allow="fullscreen"
      title="Prototype Presentation"
    />
  </div>

  <a
    href="https://www.canva.com/design/DAGiRTh80UE/0gyDFKXx0M4DciL2NazUKQ/view"
    target="_blank"
    rel="noopener noreferrer"
  >
    {/* Prototype Presentation ↗ */}
  </a>

</div>


      <div className="nexspaceFeatureHighlight">

        {/* <h3>Professional Research Environment</h3> */}

        <p>
          Working alongside AP Immersive Lab transformed the project from a typical university assignment into a collaborative research experience. Access to specialist facilities, continuous mentorship, structured research meetings and repeated user testing enabled our team to investigate embodiment and immersive storytelling through both academic research and practical experimentation.
        </p>

      </div>

      {/* IMAGE 4 */}
      <div className="nexspacePartnershipImage"> 
    <img
    src="/images/nexspace/outcome.webp"
      alt="My contribution highlight"
    />
  </div>

      <a
        href="https://www.ap.be/en/immersive-lab"
        target="_blank"
        rel="noopener noreferrer"
        className="partnerLink"
      >
        {/* AP Immersive Lab ↗ */}
      </a>

    </div>

  </div>

</section>

<section className="nexspaceOutcomeSection">
  <div className="nexspaceSectionBackground">
    <div className="nexspaceSectionLabel">
      10 · OUTCOME
    </div>

    <div className="nexspaceSectionContent">

      <h2>
        A completed VR experience exploring immersion, embodiment and the future impact of data waste.
      </h2>

      <p>
        The final outcome was a fully developed VR experience for the Meta Quest headset, successfully delivering our vision of communicating the hidden consequences of digital waste through immersive storytelling. By combining environmental design, narrative progression and interactive elements, the project transformed an abstract global issue into a tangible experience users could explore and reflect on.
      </p>

      <p>
        Throughout development, we worked closely with AP Immersive Lab, presenting our progress, research findings and user testing results during regular project reviews. Our midterm evaluation and final demonstrations allowed us to showcase the experience, receive expert feedback, and validate that our approach successfully explored the relationship between immersion, embodiment and storytelling.
      </p>

      <p>
        While the completed project focused on delivering a fully functional VR experience, our research also identified opportunities for future development. Planned experiments included integrating additional biometric feedback such as heart rate tracking, alongside more advanced adaptive interactions and personalised immersive features to further explore how technology can influence presence and emotional connection within virtual environments.
      </p>

      <p>
        Overall, the project was a successful collaboration between our team, AP Immersive Lab and our academic mentors. It demonstrated how experimentation, user research and immersive technology can be combined to create meaningful experiences that encourage users to reconsider the relationship between digital technology and the world around them.
      </p>

      <div className="nexspaceOutcomephoto">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EpmIR8zo4qo?si=nyQHZPx5Pdv2li-5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div className="nexspaceOutcomephoto">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HabYOJH90Ok?si=WLokoUpJx9FgZ_Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>

    </div>
  </div>
</section>

<section className="nexspaceContributionSection">
  <div className="nexspaceSectionBackground">
    <div className="nexspaceSectionLabel">
      11 · MY CONTRIBUTION
    </div>

    <div className="nexspaceSectionContent">

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

      <div className="nexspaceContributionGrid">

  <div className="nexspaceContributionCard">
    <img
      src="/images/nexspace/meinlab.png"
      alt="My contribution highlight"
    />
  </div>

  <div className="nexspaceContributionCard">
   <img src="/images/nexspace/working.jpg"
      alt="My contribution highlight"
    />
  </div>

</div>
 
</div>
</div>
</section>

        </main>

        <div className="nexspaceWrapper2">
          <Footer className="nexspaceFooter" />
        </div>
      </div>
    </>
  );
}