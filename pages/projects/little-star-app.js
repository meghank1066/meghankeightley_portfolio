import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import LittleStarNodes from "../../components/LittleStarNodes";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function LittleStarPage() {

  const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <LittleStarNodes />} */}

      <div className="littleStarPageShell">

        <div className="littleStarWrapper">
          <Header className="littleStarNav" />
        </div>

        <main className="littleStarProjectPage">

          <section className="littleStarProjectHero">

            <div className="littleStarHeroLeft">

              <span className="littleStarProjectTag">
                UX DESIGN · EDUCATIONAL EXPERIENCE · GAMIFICATION
              </span>

              <h1 className="littleStarProjectTitle">
                Little Star Academy
              </h1>

              <p className="littleStarProjectDescription">
                A UX/UI design project focused on creating an engaging
                educational experience for young learners. The concept
                combines interactive learning games, progress tracking,
                and child-friendly design principles to encourage
                development through play while supporting parents and
                educators.
              </p>

            </div>

            <div className="littleStarHeroRight">

              <div>
                <h4>PROJECT TYPE</h4>
                <p>Educational UX/UI Design Project</p>
              </div>

              <div>
                <h4>TIMELINE</h4>
                <p>4 Weeks</p>
                <p>2025</p>
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
                  Figma · FigJam · Prototyping
                </p>
              </div>

              <div>
                <h4>PROTOTYPE</h4>

                <p>
                  <a
                    href="YOUR_FIGMA_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="littleStarLink"
                  >
                    View Interactive Prototype
                  </a>
                </p>
              </div>

            </div>

          </section>

          <section className="littleStarHeroMockup">

            <div className="littleStarPlaceholderImage">
              LITTLE STAR ACADEMY SHOWCASE
            </div>

          </section>

        </main>

        <div className="littleStarWrapper2">
          <Footer className="littleStarFooter" />
        </div>

      </div>
    </>
  );
}