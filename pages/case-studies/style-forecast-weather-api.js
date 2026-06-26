
// import css
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import AirParticles from "../../components/AirParticles";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function StyleForecastPage() {

  const isMobile = useMobileDevice();

  return (
    <>

      <div className="styleForecastPageShell">
        <div className="styleForecastWrapper">
          <Header className="styleForecastNav" />
        </div>

        <main className="styleForecastProjectPage">

          <section className="styleForecastProjectHero">

            <div className="styleForecastHeroLeft">

              <span className="styleForecastProjectTag">
                INDIVIDUAL PROJECT · WEB APPLICATION
              </span>

              <h1 className="styleForecastProjectTitle">
                STYLE
                <br />
                FORECAST
              </h1>

              <p className="styleForecastProjectDescription">
                A weather-powered fashion discovery platform that combines
                real-time weather conditions with curated clothing
                recommendations, helping users plan outfits and build
                personalised style inspiration collections.
              </p>

<div className="style-hero-links">
  <a className="style-hero-link" href="https://artsy-dublin-website.vercel.app/" target="_blank" rel="noopener noreferrer">
    Visit Live Site
  </a>
  <a className="style-hero-link" href="https://github.com/meghank1066/StyleAssistantCA1_SOA_MeghanKeightley" target="_blank"  rel="noopener noreferrer">
    View My Code
  </a>
</div>  
</div>

            <div className="styleForecastHeroRight">

              <div>
                <h4>PROJECT TYPE</h4>
                <p>Individual Academic Project</p>
              </div>

              <div>
                <h4>TIMELINE</h4>
                <p>2 Months</p>
                <p>October – November 2025</p>
              </div>

              <div>
                <h4>TEAM</h4>
                <p>Individual</p>
              </div>

              <div>
                <h4>MY ROLE</h4>
                <p>
                  UX Design · UI Design · Frontend Development · API Integration
                </p>
              </div>

              <div>
                <h4>TOOLS</h4>
                <p>
                  Blazor · C# · ASP.NET Core · HTML · CSS · Visual Studio
                </p>
              </div>

              <div>
                <h4>APIS</h4>
                <p>
                  OpenWeather API · ASOS API (RapidAPI)
                </p>
              </div>

            </div>

          </section>

          <section className="styleForecastHeroMockup">

            <img 
    className="nintendoplaceholderImage" 
    src="/images/styleforecast-preview.png" 
    alt="Nintendo Switch 2 UI Redesign Showcase"
    style={{ width: "100%", height: "auto", display: "block" }} 
  />

          </section>
<section className="styleForecastOverviewSection">

  <div className="styleForecastSectionLabel">
    01 · PROJECT OVERVIEW
  </div>

  <div className="styleForecastSectionContent">

    <h2>
     Problem-solving in daily life.
    </h2>

    <p>
      For an assignment, we were tasked 
      with the job of creating 
      a website which would help us solve a problem
      we face in our daily lives. Style Forecast was developed as an individual academic project
      between October and November 2025. The goal was to combine
      real-time weather information with fashion recommendations to
      simplify outfit planning.
    </p>

    <p>
      By integrating external APIs and designing a clean editorial
      interface, the platform transforms weather forecasts into
      personalised style inspiration.
    </p>

    <div className="styleForecastFeatureImage">
      <img
        src="/images/styleforecast/style-forecast-hero.png"
        alt="Style Forecast Homepage"
      />
    </div>

  </div>

</section>
<section className="styleForecastProblemSection">
</section>
<section className="styleForecastInsightSection">

  <div className="styleForecastSectionLabel">
    03 · DESIGN INSIGHT
  </div>

  <div className="styleForecastSectionContent">

    <h2>Weather is not data — it’s daily context.</h2>

    <p>
      The core idea emerged from observing how people mentally translate weather into clothing decisions. Instead of reading forecasts logically, users interpret them emotionally: “it feels cold”, “I’ll probably need layers”, “this looks like a coat day.”
    </p>

    <p>
      This revealed an opportunity: bridge structured meteorological data with intuitive fashion reasoning, turning forecasts into a styling system rather than a static report.
    </p>

    <div className="styleForecastQuoteBlock">
      <p>
        “The goal wasn’t to predict weather — it was to translate it into something wearable.”
      </p>
    </div>

  </div>

</section>

<section className="styleForecastDesignSection">

  <div className="styleForecastSectionLabel">
    04 · DESIGN APPROACH
  </div>

  <div className="styleForecastSectionContent">

    <h2>Editorial clarity over algorithmic overload.</h2>

    <p>
      The interface was intentionally designed to feel more like a curated fashion editorial than a utility dashboard. This reduced cognitive load and reframed recommendations as inspiration rather than automated output.
    </p>

    <p>
      Each weather result is structured into a hierarchy:
      temperature → mood → outfit direction → product selection.
    </p>

    <ul>
      <li>Minimal UI density to reduce decision fatigue</li>
      <li>Large imagery to prioritise visual styling cues</li>
      <li>Soft hierarchy between weather and fashion layers</li>
    </ul>

  </div>

</section>

 
<section className="styleForecastFeaturesSection">

  <div className="styleForecastSectionLabel">
    05 · KEY FEATURES
  </div>

  <div className="styleForecastSectionContent">

    <h2>Turning forecasts into fashion recommendations.</h2>

    <p>
      Users can search for any location, retrieve live weather data, and receive curated clothing recommendations tailored to current conditions.
    </p>

    <div className="styleForecastImageGrid">
      <img src="/images/styleforecast-search.png" alt="Search Experience" />
      <img src="/images/styleforecast-weather.png" alt="Weather Results" />
    </div>

  </div>

</section>
<section className="styleForecastDevelopmentSection">

  <div className="styleForecastSectionLabel">
    06 · DESIGN & DEVELOPMENT
  </div>

  <div className="styleForecastSectionContent">

    <h2>Built with API integration at its core.</h2>

    <p>
      The application was developed using Blazor Server and ASP.NET Core. OpenWeather powers the live weather functionality while the ASOS API provides product recommendations based on forecast conditions.
    </p>

    <div className="styleForecastImageGrid">
      <img src="/images/styleforecast-products.png" alt="Product Recommendations" />
      <img src="/images/styleforecast-filters.png" alt="Filtering System" />
    </div>

  </div>

</section>

<section className="styleForecastOutcomeSection">

  <div className="styleForecastSectionLabel">
    07 · OUTCOME
  </div>

  <div className="styleForecastSectionContent">

    <h2>A complete weather-powered styling assistant.</h2>

    <p>
      The final platform enables users to discover weather-aware outfits, browse fashion recommendations, and save favourite products to a personal lookbook.
    </p>

    <p>
      The project successfully demonstrated API integration, responsive design, and user-focused fashion discovery within a single web application.
    </p>

    <div className="styleForecastImageGrid">
      <img src="/images/styleforecast-lookbook.png" alt="Lookbook" />
      <img src="/images/styleforecast-saved.png" alt="Saved Items" />
    </div>

  </div>

</section>
<section className="styleForecastContributionSection">

  <div className="styleForecastSectionLabel">
    08 · MY CONTRIBUTION
  </div>

  <div className="styleForecastSectionContent">

    <h2>End-to-end ownership across design and implementation.</h2>

    <p>
      I led the UX design, UI system, and full frontend implementation of the application. This included designing the information architecture, building responsive layouts, and integrating external APIs into a cohesive user experience.
    </p>

    <p>
      A key challenge was mapping structured weather data into meaningful fashion recommendations without overwhelming the user with technical detail.
    </p>

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