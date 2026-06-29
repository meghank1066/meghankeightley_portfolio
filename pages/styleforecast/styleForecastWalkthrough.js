import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import styleForecastNodes from "../../components/styleForecastNodes";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function StyleForecastWalkthrough() {
  const isMobile = useMobileDevice();

  return (
    <>
      <div className="styleForecastPageShell">

        <div className="styleForecastWrapper">
          <Header className="styleForecastNav" />
        </div>

        <main className="styleForecastProjectPage">

          <section className="styleForecastInsightSection">

            <div className="styleForecastSectionBackground">

              <div className="styleForecastSectionLabel">
                WALKTHROUGH
              </div>

              <div className="styleForecastSectionContent">

                <h2>
                  Style Forecast App Walkthrough
                </h2>

                <p>
                  A short demonstration of the Style Forecast web application,
                  showcasing the main user flows, interface design and
                  core functionality.
                </p>

                <div className="styleForecastVideoGrid">

                  <video
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                  >
                    <source
                      src="/images/styleforecast/styleforecast-walkthrough.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support video.
                  </video>

                </div>

              </div>

            </div>

          </section>

        </main>

        <div className="styleForecastWrapper2">
          <Footer className="styleForecastFooter" />
        </div>

      </div>
    </>
  );
}