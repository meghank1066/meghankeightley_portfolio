import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import EvelynnScene from "../../components/EvelynnScene";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function EvelynnPage() {

  const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <EvelynnScene />} */}

      <div className="evelynnPageShell">

        <div className="evelynnWrapper">
          <Header className="evelynnNav" />
        </div>

        <main className="evelynnprojectPage">

          <section className="evelynnprojectHero">

            <div className="evelynnheroLeft">

              <span className="evelynnprojectTag">
                BRAND DESIGN · UX DESIGN · MOBILE EXPERIENCE
              </span>

              <h1 className="evelynnprojectTitle">
                Evelynn
              </h1>

              <p className="evelynnprojectDescription">
                A brand and digital experience concept for Evelynn Coffee,
                inspired by the café's distinctive pink identity found in
                Drogheda and Bryanstown. The project explores how branding,
                mobile ordering, loyalty rewards, and customer engagement
                can be unified into a seamless coffee experience.
              </p>

            </div>

            <div className="evelynnheroRight">

              <div>
                <h4>PROJECT TYPE</h4>
                <p>Brand & UX Case Study</p>
              </div>

              <div>
                <h4>TIMELINE</h4>
                <p>In Progress</p>
                <p>May 2026</p>
              </div>

              <div>
                <h4>ROLE</h4>
                <p>
                  Brand Design · UX Design · UI Design
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

          <section className="evelynnheroMockup">

            <div className="evelynnplaceholderImage">
              EVELYNN COFFEE CASE STUDY SHOWCASE
            </div>

          </section>

        </main>

        <div className="evelynnWrapper2">
          <Footer className="evelynnFooter" />
        </div>

      </div>
    </>
  );
}
