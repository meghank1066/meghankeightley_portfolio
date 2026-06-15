import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function VeloraPage() {
  return (
    <>
      <div className="veloraWrapper">
        <Header className="veloraNav" />
      </div>

      <main className="veloraprojectPage">

        <section className="veloraprojectHero">

          <div className="veloraheroLeft">

            <span className="veloraprojectTag">
              MOBILE DEVELOPMENT · IOS APPLICATION
            </span>

            <h1 className="veloraprojectTitle">
              VELORA
            </h1>

            <p className="veloraprojectDescription">
              An iOS cycling companion designed to help users locate
              nearby bike stations, plan journeys, and navigate Dublin's
              public bike-sharing network through a clean and intuitive
              mobile experience.
            </p>

          </div>

          <div className="veloraheroRight">

            <div>
              <h4>TIMELINE</h4>
              <p>1 Month</p>
              <p>2025</p>
            </div>

            <div>
              <h4>ROLE</h4>
              <p>
                UX Design · UI Design · Swift Development
              </p>
            </div>

            <div>
              <h4>TOOLS</h4>
              <p>
                Swift · Xcode · Figma
              </p>
            </div>

            <div>
              <h4>PROJECT TYPE</h4>
              <p>
                Solo University Project
              </p>
            </div>

            <div>
              <h4>REPOSITORY</h4>

              <p>
                <a
                  href="YOUR_GITHUB_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="veloraLink"
                >
                  View GitHub Repository
                </a>
              </p>
            </div>

          </div>

        </section>

        <section className="veloraheroMockup">

          <div className="veloraplaceholderImage">
            VELORA APP SHOWCASE
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}