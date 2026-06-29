
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
   Walkthrough
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
    className="styleForecastplaceholderImage" 
    src="/images/styleforecast-preview.png" 
    alt="styleForecast Switch 2 UI Redesign Showcase"
    style={{ width: "100%", height: "auto", display: "block" }} 
  />

          </section>
<section className="styleForecastOverviewSection">

  <div className="styleForecastSectionLabel">
    01 · PROJECT OVERVIEW
  </div>

  

  <div className="styleForecastSectionContent">

    <h2>
  Solving real-life problems
</h2>

<p>
  Style Forecast is a web application I built to explore how weather data can be translated into everyday outfit decisions. The idea was to move beyond forecasts as raw information and instead turn them into something more practical and visually guided for users choosing what to wear.
</p>

<p>
  The project was developed over a 2-month period (October–November 2025) as a full-stack application using ASP.NET Core and Blazor Server. It combines live weather data with curated fashion recommendations to create a more intuitive planning experience around daily dressing decisions.
</p>

<p>
  By integrating external APIs and designing a clean, editorial-style interface, the system reframes weather as styling input rather than isolated data points.
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

  <div className="styleForecastSectionLabel">
    02 · PROBLEM SPACE
  </div>

  <div className="styleForecastSectionContent">

      <h2>
  Weather apps show the forecast, but not what it means for your day.
</h2>

<p>
  Most weather apps are accurate, but they stop at information.
</p>

<p>
  I found myself constantly checking forecasts throughout the day especially in unpredictable weather, but still having to make a separate judgement call about what to wear. The data is there, working with items such as temperature, conditions, hourly changes however it doesn’t help us translate directly into action.
</p>

<p>
  That creates a small but repeated gap in everyday use. For example, when I wake up I always check the weather, interpret it for myself and then switch what I had in mind to decide on clothing according to what will best fit the day. On days where conditions change quickly, that process becomes repetitive and slightly inefficient.
</p>

<p>
  The problem wasn’t lack of information but is a lack of interpretation.
</p>

<p>
  This project started from that gap: exploring how weather data could be reframed into something that directly supports outfit decisions overall reducing the mental step between “what’s it like outside?” and “what do I wear?”
</p>

 <div>
      <img
        src="/images/styleforecast/problem-space.png"
        alt="Style Forecast Homepage"
         className="about-photo"
      />
    </div>

    </div>
 

</section>

<section className="styleForecastInsightSection">

  <div className="styleForecastSectionLabel">
    03 · DESIGN INSIGHT
  </div>

  <div className="styleForecastSectionContent">

  <h2>Weather is not data - it is daily context.</h2>

  <p>
    I started noticing that people do not really think about weather in numbers or charts. It is usually more instinctive than that with things like "it feels cold today, I will need layers" or "this looks like a coat day."
  </p>

  <p>
    That made me rethink what weather data is actually used for. It is not just about reporting conditions, it is about helping people decide what their day looks like in practice, especially when it comes to getting dressed.
  </p>

  <p>
    The idea for Style Forecast came from that gap between data and interpretation, taking structured weather information and turning it into something closer to how people already think about clothing choices.
  </p>


  </div>

</section>

<section className="styleForecastDesignSection">

  <div className="styleForecastSectionLabel">
    04 · DESIGN APPROACH
  </div>

  <div className="styleForecastSectionContent">

    <h2>Making the system simple instead of overwhelming</h2>

<p>
  The interface was designed to feel closer to a curated fashion editorial than a utility based dashboard. The goal was to keep the experience calm and visually guided, so recommendations feel like inspiration rather than something generated automatically. This decision was made primarily because I feel the interest for this application is more niche and thus I wanted to cater this design choice to its intended audience, which is fashion-enthusiasts.
</p>

<p>
  Each weather result follows a simple structure such as temperature, mood, outfit direction and then product selection.
</p>

<p>
  The design choices focused on keeping things visually clear and easy to process. This included reducing visual clutter, using larger imagery to support styling decisions and creating a soft hierarchy between weather data and fashion content.
</p>

 <div>
      <img
        src="/images/styleforecast/simple-use.png"
        alt="Simple thinking"
         className="about-photo"
      />
    </div>
  </div>

</section>

 
{/* FEATURE A: SEARCH + WEATHER INPUT */}
<section className="styleForecastFeaturesSection">

  <div className="styleForecastSectionLabel">
    05 · KEY FEATURES
  </div>

  <div className="styleForecastSectionContent">

    <h2>Live weather search experience</h2>

    <p>
      The core of the application starts with a simple location search. Users can enter any city to retrieve real-time weather data, which becomes the foundation for all styling recommendations.
    </p>

    <p>
      Instead of treating weather as standalone information, it is immediately processed into outfit direction, giving users an instant sense of what to wear based on current conditions.
    </p>

    <div className="styleForecastImageGrid">
      <img src="/images/styleforecast/style-forecast-hero.png" alt="Search Experience" />
      <img src="/images/styleforecast/results-styleforecast.png" alt="Weather Results" />
    </div>

  </div>
</section>


{/* FEATURE B: FILTERING SYSTEM */}
<section className="styleForecastFeaturesSection">
  <div className="styleForecastSectionBackground">

    <div className="styleForecastSectionLabel">
      05 · KEY FEATURES
    </div>

    <div className="styleForecastSectionContent">

      <h2>Filtering by style preference</h2>

      <p>
        Users can refine recommendations using filters such as gender, colour and  item type. This allows the system to move beyond generic suggestions and instead reflect more personal styling preferences.
      </p>

      <p>
        The filtering system dynamically updates results based on API data, helping users quickly narrow down outfits that match both weather conditions and individual taste.
      </p>

      <div className="styleForecastImageGrid">
        <img src="/images/styleforecast-filters.png" alt="Filtering System" />
        <img src="/images/styleforecast-products.png" alt="Filtered Product Results" />
      </div>

    </div>
  </div>
</section>


{/* FEATURE C: LOOKBOOK / SAVED ITEMS */}
<section className="styleForecastFeaturesSection">
  <div className="styleForecastSectionBackground">

    <div className="styleForecastSectionLabel">
      05 · KEY FEATURES
    </div>

    <div className="styleForecastSectionContent">

      <h2>Personal lookbook for saved outfits</h2>

      <p>
        Users can save selected items into a personal lookbook to revisit later. This turns the platform from a one-time recommendation tool into a space for ongoing outfit planning.
      </p>

      <p>
        The lookbook acts as a lightweight wardrobe memory, allowing users to track inspiration across different weather conditions and return to pieces they liked.
      </p>

      <div className="styleForecastImageGrid">
        
        <img src="/images/styleforecast/lookbook-save.png" alt="Lookbook View" />
        <img src="/images/styleforecast/lookbook-styleforecast.png" alt="Lookbook View" />
      </div>

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

<section className="styleForecastEdgeCasesSection">

  <div className="styleForecastSectionLabel">
    07 · EDGE CASES & REAL-WORLD CHALLENGES
  </div>

  <div className="styleForecastSectionContent">

    <h2>What broke, what I learned and  what I’d improve.</h2>

    <h3>API rate limits & development constraints</h3>
    <p>
      During development, I ran into API rate limits quite early due to repeated testing of weather and product endpoints.
      This meant I couldn’t rely on constant live calls while building and debugging the application.
    </p>
    <p>
      To work around this, I became more intentional with testing and reduced unnecessary requests. It made me more aware of
      how quickly external services can become a bottleneck in real-world applications and  how important it is to design
      systems that don’t assume unlimited API access.
    </p>

    <h3>Location input precision issues</h3>
    <p>
      One unexpected issue was that the weather API required very specific location formatting (for example, “Dublin, IE”)
      rather than more natural input like “Dublin”. This created a mismatch between how users think and how the API expects data.
    </p>
    <p>
      I had to adjust input formatting and be strict about how locations were passed into requests. This highlighted the gap
      between user-friendly interfaces and API requirements and  the need for a translation layer between them.
    </p>

    <h3>Search usability and lack of suggestions</h3>
    <p>
      At the beginning, users had to enter exact location formats without guidance, which made the search experience less intuitive.
      Small variations in spelling or formatting could lead to failed results.
    </p>
    <p>
      This showed me that good UX is not just about visual design, but about reducing friction in how users interact with data.
      In future, I would add suggested searches or autocomplete to map user input to valid API formats.
    </p>

    <h3>Filtering system complexity</h3>
    <p>
      Building the filtering system was more challenging than expected, especially when dealing with dynamic API-driven data.
      I had to carefully manage state to ensure filters worked consistently and didn’t conflict with each other.
    </p>
    <p>
      Early versions behaved unpredictably when multiple filters were applied or when new data was loaded. This pushed me to
      rethink my state structure and separate filtering logic from data fetching more clearly.
    </p>

    <h3>Reflection</h3>
    <p>
      Overall, these challenges made the project feel closer to a real-world system than a simple academic assignment.
      I had to consider API limitations, input validation and  UX gaps that only became visible through testing and iteration.
    </p>

  </div>
  

</section>

<section className="styleForecastDesignDecisionsSection">

  <div className="styleForecastSectionLabel">
    08 · DESIGN DECISIONS I DIDN’T MAKE
  </div>

  <div className="styleForecastSectionContent">

    <h2>Intentional simplification was part of the design process.</h2>

    <p>
      While building the application, I made several deliberate decisions to avoid overcomplicating the system.
      These choices were important in keeping the project focused, usable and  stable within the time constraints.
    </p>

    <h3>I didn’t over-engineer the UI with heavy animations</h3>
    <p>
      Although I considered adding more advanced transitions and motion effects, I chose to keep the interface minimal.
      This ensured that the focus remained on the weather and outfit recommendations rather than visual distractions,
      and also helped maintain performance and responsiveness across devices.
    </p>

    <h3>I didn’t build full user authentication or accounts</h3>
    <p>
      Even though a login system could have supported saved preferences and personalised recommendations,
      I intentionally excluded it to prioritise the core experience of translating weather into fashion decisions.
      This kept the scope manageable and allowed me to focus on API integration and UI logic.
    </p>

    <h3>I didn’t implement overly complex filtering logic</h3>
    <p>
      I explored more advanced filtering systems early on, but found that they introduced unnecessary complexity
      for the scale of the project. Instead, I kept filtering straightforward and predictable to ensure stability
      when working with live API data.
    </p>

    <h3>Scope vs impact</h3>
    <p>
      These decisions were guided by a focus on impact rather than feature volume. I prioritised areas that directly
      improved usability and core functionality, while intentionally avoiding complexity that would not significantly
      enhance the user experience within the scope of the project.
    </p>

    <div className="styleForecastScopeGrid">

      <div className="scopeColumn">
        <h4>WHAT I DEFERRED</h4>
        <ul>
          <li>Authentication / user accounts</li>
          <li>Advanced animation systems</li>
          <li>Complex multi-layer filtering logic</li>
          <li>AI-driven outfit generation</li>
        </ul>
      </div>

      <div className="impactColumn">
        <h4>WHY IT DIDN’T MATTER (FOR THIS PROJECT)</h4>
        <ul>
          <li>Core value is accessible without login</li>
          <li>UI clarity was more important than motion design</li>
          <li>Simple filters improved reliability with live data</li>
          <li>Curated logic ensured consistency and control</li>
        </ul>
      </div>

    </div>

    <h3>Reflection</h3>
    <p>
      These decisions helped me treat the project as a focused product rather than a feature-heavy prototype.
      By reducing scope in the right places, I was able to strengthen the quality of the core experience
      and ensure the application remained stable, usable and  coherent.
    </p>

  </div>

</section>

<section className="styleForecastOutcomeSection">

  <div className="styleForecastSectionLabel">
    09 · OUTCOME
  </div>

  <div className="styleForecastSectionContent">

    <h2>A complete weather-powered styling assistant.</h2>

    <p>
      The final platform enables users to discover weather-aware outfits, browse fashion recommendations and  save favourite products to a personal lookbook.
    </p>

    <p>
      The project successfully demonstrated API integration, responsive design and  user-focused fashion discovery within a single web application. In the future I hope to develop on this project and expand it into something more accessible for people to use, perhaps an app in IOS or Android.
    </p>

    <div className="styleForecastImageGrid">
      <img src="/images/styleforecast-lookbook.png" alt="Lookbook" />
      <img src="/images/styleforecast-saved.png" alt="Saved Items" />
    </div>

  </div>

</section>

<section className="styleForecastImpactSection">

  <div className="styleForecastSectionLabel">
    10 · PROJECT IMPACT
  </div>

  <div className="styleForecastSectionContent">

    <h2>What this project demonstrates.</h2>

    <p>
      This project demonstrates my ability to design and build a full-stack web application that integrates external APIs,
      transforms structured data into a user-focused experience and maintains a clear design system across all components.
    </p>

    <div className="styleForecastImpactGrid">

      <div className="impactCard">
        <h4>Real-time data translation</h4>
        <p>Turning live weather API responses into meaningful outfit decisions instead of raw numbers.</p>
      </div>

      <div className="impactCard">
        <h4>Component-based UI systems</h4>
        <p>Designing reusable, structured interfaces that stay consistent across multiple dynamic views.</p>
      </div>

      <div className="impactCard">
        <h4>System constraints handling</h4>
        <p>Working around API rate limits, inconsistent data formats, and input edge cases.</p>
      </div>

      <div className="impactCard">
        <h4>Product thinking under constraints</h4>
        <p>Balancing scope vs usability while keeping the core experience focused and stable.</p>
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