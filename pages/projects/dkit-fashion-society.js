
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useMobileDevice from "../../hooks/useMobileDevice";

export default function DkitFashionSocietyPage() {
  const isMobile = useMobileDevice();

  return (
    <>
      <div className="fashionSocietyPageShell">
        <div className="fashionSocietyWrapper">
          <Header className="fashionSocietyNav" />
        </div>

        <main className="fashionSocietyProjectPage">

          {/* HERO SECTION */}
          <section className="fashionSocietyProjectHero">
            <div className="fashionSocietyHeroLeft">
              <span className="fashionSocietyProjectTag">
                FASHION · COMMUNITY · LEADERSHIP
              </span>

              <h1 className="fashionSocietyProjectTitle">
                DKIT FASHION SOCIETY
              </h1>

              <p className="fashionSocietyProjectDescription">
                I founded DKIT's first Fashion Society and served as President,
                building a student community around fashion, creativity,
                self-expression and discovering new styles together.
              </p>

              <div className="fashionSocietyHeroLinks">
                <a
                  className="fashionSocietyHeroLink"
                  href="https://dkit-fashion-society-git-main-dkitfashionsociety.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Society Website
                </a>

                <a
                  className="fashionSocietyHeroLink"
                  href="https://www.instagram.com/dkitfashionsociety/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="fashionSocietyHeroRight">
              <div>
                <h4>PROJECT TYPE</h4>
                <p>Student Society · Fashion Community</p>
              </div>

              <div>
                <h4>ROLE</h4>
                <p>Founder &amp; President</p>
              </div>

              <div>
                <h4>MEMBERS</h4>
                <p>Meghan · Caren · Rita · Mila Murphy</p>
              </div>

              <div>
                <h4>FOCUS</h4>
                <p>Fashion · Events · Community · Creativity</p>
              </div>
            </div>
          </section>

          {/* HERO / INTRO IMAGE */}
          <section className="fashionSocietyHeroContainer">
            <div className="fashionSocietyHeroImage">
              <img
                src="/images/dkitfs/nowhere.png"
                alt="DKIT Fashion Society"
              />
            </div>
          </section>

          {/* SECTION 2 — FOUNDING */}
          <section className="fashionSocietyInsightSection">
            <div className="fashionSocietySectionBackground">

              <div className="fashionSocietySectionLabel">
                02 · FOUNDING THE SOCIETY
              </div>

              <div className="fashionSocietySectionContent">
                <h2>
                  Creating a space for students to connect through fashion.
                </h2>

                <p>
                  I founded DKIT's first Fashion Society with Caren, Rita and
                  Mila Murphy, taking on the role of President. The goal was to
                  create a welcoming community where students could meet,
                  socialise and share an interest in fashion and creativity.
                </p>

                <p>
                  As President, I helped shape the society from the ground up,
                  from planning events and encouraging membership to creating
                  opportunities for students to explore fashion together.
                </p>
              </div>

              {/* <div className="fashionSocietySectionImage">
                <img
                  src="/images/dkitfs/nowhere.png"
                  alt="DKIT Fashion Society community"
                />
              </div> */}

            </div>
          </section>

          {/* SECTION 3 — EVENTS */}
          <section className="fashionSocietyEventsSection">
            <div className="fashionSocietySectionBackground">

              <div className="fashionSocietySectionLabel">
                03 · EVENTS &amp; COMMUNITY
              </div>

              <div className="fashionSocietySectionContent">
                <h2>
                  Bringing people together through fashion.
                </h2>

                <p>
                  I organised a variety of social and creative events
                  throughout the year, giving members different ways to get
                  involved with the society.
                </p>

                <ul>
                  <li>
                    <strong>Freshers Fair:</strong> Represented the society at
                    the Freshers Fair and introduced new students to the
                    community.
                  </li>

                  <li>
                    <strong>Upcycling Event:</strong> Organised a creative
                    upcycling event focused on reworking and giving clothing
                    a new life.
                  </li>

                  <li>
                    <strong>Halloween Karaoke:</strong> Planned a Halloween
                    social combining costumes, fashion and karaoke.
                  </li>

                  <li>
                    <strong>Coffee Events:</strong> Organised casual coffee
                    meet-ups for members to socialise and connect.
                  </li>

                  <li>
                    <strong>Thrifting Days:</strong> Organised group trips to
                    explore second-hand fashion and discover new pieces
                    together.
                  </li>
                </ul>
              </div>

              {/* EVENT PHOTOS */}
              <div className="fashionSocietyEventsGallery">

                <figure className="fashionSocietyEventCard fashionSocietyFreshers">
                  <img
                    src="/images/dkitfs/freshersfair.png"
                    alt="DKIT Fashion Society at the Freshers Fair"
                  />

                  <figcaption>
                    Freshers Fair
                  </figcaption>
                </figure>

                <figure className="fashionSocietyEventCard fashionSocietyHalloween">
                  <img
                    src="/images/dkitfs/halloweenevent.png"
                    alt="DKIT Fashion Society Halloween event"
                  />

                  <figcaption>
                    Halloween Karaoke
                  </figcaption>
                </figure>

                <figure className="fashionSocietyEventCard fashionSocietyUpcycling">
                  <img
                    src="/images/dkitfs/upcycling.png"
                    alt="DKIT Fashion Society upcycling event"
                  />

                  <figcaption>
                    Upcycling Event
                  </figcaption>
                </figure>

              </div>

            </div>
          </section>

          {/* SECTION 4 — WEBSITE */}
          <section className="fashionSocietyWebsiteSection">
            <div className="fashionSocietySectionBackground">

              <div className="fashionSocietySectionLabel">
                04 · DIGITAL PRESENCE
              </div>

              <div className="fashionSocietySectionContent">
                <h2>
                  Designing a digital home for the society.
                </h2>

                <p>
                  I also designed and developed a dedicated website for DKIT
                  Fashion Society, creating an online presence for the society
                  and a central place to showcase its identity and activities.
                </p>

                <div className="fashionSocietyWebsitePreview">
                  <div className="fashionSocietyBrowserBar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="fashionSocietyWebsiteImage">
                    <img
                      src="/images/career/dkit-fashion-society.png"
                      alt="DKIT Fashion Society website"
                    />
                  </div>
                </div>

                <div className="fashionSocietyHeroLinks">
                  <a
                    className="fashionSocietyHeroLink"
                    href="https://dkit-fashion-society-git-main-dkitfashionsociety.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 5 — OUTCOME */}
          <section className="fashionSocietyOutcomeSection">
            <div className="fashionSocietySectionBackground">

              <div className="fashionSocietySectionLabel">
                05 · OUTCOME
              </div>

              <div className="fashionSocietySectionContent">
                <h2>
                  Building a fashion community from the ground up.
                </h2>

                <p>
                  Founding DKIT Fashion Society allowed me to combine my
                  interest in fashion with leadership, event planning,
                  creativity and community building.
                </p>

                <p>
                  From launching the society and organising events to creating
                  its website, I helped shape both the community and its
                  identity throughout the year.
                </p>
              </div>

            </div>
          </section>

        </main>

        <div className="fashionSocietyFooterWrapper">
          <Footer className="fashionSocietyFooter" />
        </div>
      </div>
    </>
  );
}