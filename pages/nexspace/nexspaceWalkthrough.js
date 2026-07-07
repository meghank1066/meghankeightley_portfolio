import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import nexspaceNodes from "../../components/nexspaceNodes";
import useMobileDevice from "../../hooks/useMobileDevice";


export default function nexspaceWalkthrough() {
  const isMobile = useMobileDevice();

  return (
    <>
      {/* {isMobile === false && <nexspaceNodes />} */}

      <div className="nexspacePageShell">

        <div className="nexspaceWrapper">
          <Header className="nexspaceNav" />


        <main className="nexspaceprojectPage2">

          <section className="nexspaceInsightSection">

            <div className="nexspaceSectionBackground">

              <div className="nexspaceSectionLabel">
                WALKTHROUGH
              </div>


              <div className="nexspaceSectionContent">

                <h2>
                  NEXSPACE App Walkthrough
                </h2>

                <p>
                  A short demonstration of the nexspace iOS application,
                  showcasing the main user flows, interface design and
                  core functionality.
                </p>


                <div className="nexspaceVideoContainer">

                  <video
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                  >
                    <source
                      src="/images/nexspace/nexspace-experience.mp4"
                      type="video/mp4"
                    />

                    Your browser does not support video.
                  </video>

                </div>


              </div>

            </div>

          </section>


        </main>
 </div>

        <div className="nexspaceWrapper2">
          <Footer className="nexspaceFooter" />
        </div>


      </div>
    </>
  );
}