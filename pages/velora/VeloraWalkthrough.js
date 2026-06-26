import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VeloraNodes from "../../components/VeloraNodes";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function VeloraWalkthrough() {
  const isMobile = useMobileDevice();

  return (
    <>
      {isMobile === false && <VeloraNodes />}

      <div className="veloraPageShell">

        <div className="veloraWrapper">
          <Header className="veloraNav" />


        <main className="veloraprojectPage">

          <section className="veloraInsightSection">

            <div className="veloraSectionBackground">

              <div className="veloraSectionLabel">
                WALKTHROUGH
              </div>


              <div className="veloraSectionContent">

                <h2>
                  Velora App Walkthrough
                </h2>

                <p>
                  A short demonstration of the Velora iOS application,
                  showcasing the main user flows, interface design and
                  core functionality.
                </p>


                <div className="veloraVideoContainer">

                  <video
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                  >
                    <source
                      src="/images/velora/Velora-Walkthrough.mp4"
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

        <div className="veloraWrapper2">
          <Footer className="veloraFooter" />
        </div>


      </div>
    </>
  );
}