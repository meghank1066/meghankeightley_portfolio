
//import css 
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AirParticles from "../../components/AirParticles";

export default function SporexPage() {
  return (
    <>
      <AirParticles />
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

        </div>

        <div className="sporexheroRight">

          <div>
            <h4>TIMELINE</h4>
            <p>Year-long project </p>
            <p>2025 – 2026</p>
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

      </main>

      <Footer />
    </>
  );
}