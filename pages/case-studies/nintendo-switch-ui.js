import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import NintendoScene from "../../components/NintendoScene";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function NintendoPage() {

  const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <NintendoScene />} */}

      <div className="nintendoPageShell">

        <div className="nintendoWrapper">
          <Header className="nintendoNav" />
        </div>

        <main className="nintendoprojectPage">

          <section className="nintendoprojectHero">

            <div className="nintendoheroLeft">

              <span className="nintendoprojectTag">
                UX DESIGN · CASE STUDY · INTERFACE REDESIGN
              </span>

              <h1 className="nintendoprojectTitle">
                NINTENDO SWITCH
              </h1>

              <p className="nintendoprojectDescription">
                A UX case study exploring how the Nintendo Switch user
                interface could be modernised through improved navigation,
                visual hierarchy, and user personalisation. The project
                focuses on enhancing the overall user experience while
                preserving the simplicity and familiarity of Nintendo's
                ecosystem.
              </p>

            </div>

            <div className="nintendoheroRight">

              <div>
                <h4>PROJECT TYPE</h4>
                <p>UX Case Study</p>
              </div>

              <div>
                <h4>TIMELINE</h4> 
                <p>June 2026</p>
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

          <section className="nintendoheroMockup">

            <div className="nintendoplaceholderImage">
              NINTENDO SWITCH CASE STUDY SHOWCASE
            </div>

          </section>
          <section className="nintendoOverviewSection">
 <div className="nintendoSectionBackground"> 
  <div className="nintendoSectionLabel">
    01 · PROJECT OVERVIEW
  </div>

  <div className="nintendoSectionContent">

    <h2>
      Designing playful learning through structured interaction.
    </h2>

    <p>
      Little Star Academy was developed as a UX/UI design project focused on creating an
      engaging educational experience for young learners. The goal was to explore how
      gamification and interaction design can support early learning in a way that feels
      intuitive, motivating, and age-appropriate.
    </p>

    <p>
      The project was designed entirely in Figma, focusing on user flows, interaction states,
      and a child-friendly visual system that balances clarity with playfulness.
    </p>
</div>
  </div>

</section>


<section className="nintendoInsightSection">
 <div className="nintendoSectionBackground"> 
  <div className="nintendoSectionLabel">
    02 · DESIGN INSIGHT
  </div>

  <div className="nintendoSectionContent">

    <h2>
      Children learn through interaction, not instruction.
    </h2>

    <p>
      The core insight behind this project was that traditional educational interfaces often
      feel passive, requiring users to absorb information rather than engage with it.
      For younger users, engagement is driven by feedback, reward loops, and visual clarity.
    </p>

    <p>
      This led to a design direction focused on turning learning into a series of small,
      rewarding interactions rather than linear content consumption.
    </p>

    <div className="nintendoQuoteBlock">
      <p>
        “Learning becomes meaningful when it feels like play, not obligation.”
      </p>
    </div>
</div>
  </div>

</section>


<section className="nintendoDesignSection">
 <div className="nintendoSectionBackground"> 
  <div className="nintendoSectionLabel">
    03 · DESIGN APPROACH
  </div>

  <div className="nintendoSectionContent">

    <h2>
      Designing for clarity, emotion, and cognitive simplicity.
    </h2>

    <p>
      The interface was structured around reducing cognitive load while maintaining a sense
      of discovery. Every screen prioritises simple navigation, strong visual hierarchy,
      and immediate feedback.
    </p>

    <ul>
      <li>Bright, accessible visual language tailored for younger users</li>
      <li>Clear progression system to support motivation and retention</li>
      <li>Component-based UI system built for scalability in Figma</li>
    </ul>

  </div>
</div>
</section>


<section className="nintendoFeaturesSection">
 <div className="nintendoSectionBackground"> 
  <div className="nintendoSectionLabel">
    04 · KEY FEATURES
  </div>

  <div className="nintendoSectionContent">

    <h2>
      Gamified learning through structured progression.
    </h2>

    <p>
      The prototype explores interactive learning modules, progress tracking, and reward
      systems designed to encourage repetition and engagement.
    </p>

    <div className="nintendoImageGrid">
      <img src="/images/nintendo-home.png" alt="Home Screen" />
      <img src="/images/nintendo-learning.png" alt="Learning Module" />
    </div>
</div>
  </div>

</section>


<section className="nintendoDesignSection">
 <div className="nintendoSectionBackground"> 
  <div className="nintendoSectionLabel">
    05 · PROTOTYPE DESIGN
  </div>

  <div className="nintendoSectionContent">

    <h2>
      Built entirely in Figma as a high-fidelity interaction system.
    </h2>

    <p>
      The project was developed using Figma and FigJam to map user flows, define interaction
      states, and prototype key learning interactions. The focus was on behavioural design
      rather than implementation.
    </p>

  </div>
</div>
</section>


<section className="nintendoOutcomeSection">
 <div className="nintendoSectionBackground">
  <div className="nintendoSectionLabel">
    06 · OUTCOME
  </div>

  <div className="nintendoSectionContent">

    <h2>
      A playful, structured learning experience designed for engagement.
    </h2>

    <p>
      The final prototype demonstrates how gamification and UX design principles can be
      combined to create an educational platform that feels intuitive and motivating for
      young learners.
    </p>

  </div>
</div>
</section>


<section className="nintendoContributionSection">
 <div className="nintendoSectionBackground"> 
  <div className="nintendoSectionLabel">
    07 · MY CONTRIBUTION
  </div>

  <div className="nintendoSectionContent">

    <h2>
      End-to-end ownership of UX, UI, and interaction design.
    </h2>

    <p>
      I led the full design process from user flow mapping and wireframing through to
      high-fidelity prototyping in Figma. This included designing interaction systems,
      defining visual language, and structuring a scalable component library.
    </p>

    <p>
      A key challenge was balancing playful aesthetics with usability while ensuring the
      interface remained accessible and easy to navigate for younger audiences.
    </p>

  </div>
</div>
</section>
        </main>

        <div className="nintendoWrapper2">
          <div className="nintendoFooter">
    <Footer />
  </div>
  </div>
      </div>
    </>
  );
}