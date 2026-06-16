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

          <section className="nintendoheroMockup">

            <div className="nintendoplaceholderImage">
              NINTENDO SWITCH CASE STUDY SHOWCASE
            </div>

          </section>

        </main>

        <div className="nintendoWrapper2">
          <Footer className="nintendoFooter" />
        </div>

      </div>
    </>
  );
}