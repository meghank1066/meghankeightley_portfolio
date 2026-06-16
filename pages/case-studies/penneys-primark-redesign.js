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

        </main>

        <div className="penneysWrapper2">
          <Footer className="penneysFooter" />
        </div>

      </div>
    </>
  );
}
