import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Adrian Portfolio</title>
        <meta property="og:title" content="Adrian Portfolio" />
      </Helmet>
      <div className="home-header">
        <header
          data-thq="thq-navbar"
          className="home-navbar-interactive navbarContainer"
        >
          <span className="logo">ADRIAN</span>
          <svg viewBox="0 0 1024 1024" className="home-icon socialIcons">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links">
              <span className="home-nav12 bodySmall">Home</span>
              <span className="home-nav22 bodySmall">About</span>
              <span className="home-nav32 bodySmall">Portfolio</span>
              <span className="home-nav42 bodySmall">Services</span>
              <span className="home-nav52 bodySmall">Contact</span>
            </nav>
            <div className="home-buttons">
              <button className="home-login buttonFlat">Login</button>
              <button className="home-register buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div
            data-thq="thq-mobile-menu"
            className="home-mobile-menu1 mobileMenu"
          >
            <div className="home-nav">
              <div className="home-top">
                <span className="logo">ADRIAN</span>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links1">
                <span className="home-nav121 bodySmall">Home</span>
                <span className="home-nav221 bodySmall">About</span>
                <span className="home-nav321 bodySmall">Portfolio</span>
                <span className="home-nav421 bodySmall">Services</span>
                <span className="home-nav521 bodySmall">Contact</span>
              </nav>
              <div className="home-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-hero">
        <div className="home-hero1 heroContainer">
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              <span>Adrian Ojeda</span>
              <br></br>
              <span>Portafolio de Sitios Web</span>
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Crafting beautiful and functional websites</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <a
                href="https://#portafolios"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-button1 buttonFilled"
              >
                Ver portafolios
              </a>
              <a
                href="https://wa.link/f7lrjm"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-button2 buttonFlat"
              >
                Contactar →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Our Key Features
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>Discover what sets us apart in web design</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                heading="Responsive Design"
                subHeading="Creating websites that look great on all devices"
              ></FeatureCard>
              <FeatureCard
                heading="User-Friendly Interface"
                subHeading="Intuitive designs to enhance user experience"
              ></FeatureCard>
              <FeatureCard
                heading="Customized Solutions"
                subHeading="Tailored designs to meet specific client needs"
              ></FeatureCard>
              <FeatureCard
                heading="SEO Optimization"
                subHeading="Implementing strategies to improve search engine rankings"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-pricing1 pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose the Right Plan for Your Website</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock the full potential of your website with our flexible
                  pricing options.
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text039 heading3">Free</span>
                <span className="bodySmall">
                  Perfect for personal websites or blogs
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text040">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text043">✔</span>
                  <span className="bodySmall">Customizable templates</span>
                </div>
                <div className="home-container10">
                  <span className="home-text044">✔</span>
                  <span className="bodySmall">Mobile responsive design</span>
                </div>
                <div className="home-container11">
                  <span className="home-text045">✔</span>
                  <span className="bodySmall">Basic SEO optimization</span>
                </div>
                <div className="home-container12">
                  <span className="home-text046">✔</span>
                  <span className="bodySmall">Limited customer support</span>
                </div>
              </div>
              <button className="home-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container13">
                <span className="home-text047 heading3">BASIC</span>
                <span className="bodySmall">
                  Ideal for small businesses or startups
                </span>
              </div>
              <div className="home-container14">
                <span className="home-text048">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">25</span>
                <span className="home-text051">/ month</span>
              </div>
              <div className="home-container15">
                <div className="home-container16">
                  <span className="home-text052">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home-container17">
                  <span className="home-text054">✔</span>
                  <span className="bodySmall">All Free plan features</span>
                </div>
                <div className="home-container18">
                  <span className="home-text055">✔</span>
                  <span className="bodySmall">E-commerce integration</span>
                </div>
                <div className="home-container19">
                  <span className="home-text056">✔</span>
                  <span className="bodySmall">Advanced SEO tools</span>
                </div>
                <div className="home-container20">
                  <span className="home-text057">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
              </div>
              <button className="home-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container21">
                <span className="home-text058 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Great for established businesses or e-commerce sites
                </span>
              </div>
              <div className="home-container22">
                <span className="home-text061">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">50</span>
                <span className="home-text064">/ month</span>
              </div>
              <div className="home-container23">
                <div className="home-container24">
                  <span className="home-text065">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home-container25">
                  <span className="home-text067">✔</span>
                  <span className="bodySmall">All Basic plan features</span>
                </div>
                <div className="home-container26">
                  <span className="home-text068">✔</span>
                  <span className="bodySmall">Custom domain name</span>
                </div>
                <div className="home-container27">
                  <span className="home-text069">✔</span>
                  <span className="bodySmall">
                    Unlimited bandwidth and storage
                  </span>
                </div>
                <div className="home-container28">
                  <span className="home-text070">✔</span>
                  <span className="bodySmall">
                    24/7 premium customer support
                  </span>
                </div>
              </div>
              <button className="home-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1 bannerContainer">
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  With a passion for design and a focus on user experience,
                  Adrian Ojeda creates stunning websites that leave a lasting
                  impression. Explore the portfolio to see the work firsthand.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <div className="portafolios">
            <div className="home-container29">
              <a
                href="https://cuidartesamarte.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-container30">
                  <h1 className="home-text085">Cuidarte Es Amarte</h1>
                  <span className="home-text086">
                    Página web desarrollada por mi trabajando en Bgcreativos.
                  </span>
                </div>
              </a>
            </div>
            <div className="home-container31">
              <a
                href="https://imejobsolutions.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-container32">
                  <h1 className="home-text087">IME Job Solutions</h1>
                  <span className="home-text088">
                    Página web desarrollada por mi trabajando en Bgcreativos.
                  </span>
                </div>
              </a>
            </div>
            <div className="home-container33">
              <a
                href="https://ape-experience-react.pages.dev/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <div className="home-container34">
                  <h1 className="home-text089">APE Experience</h1>
                  <span className="home-text090">
                    Página web prototipo en desarrolllo por mi.
                  </span>
                </div>
              </a>
            </div>
            <div className="home-container35">
              <a
                href="https://mueblesnew.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <div className="home-container36">
                  <h1 className="home-text091">Muebles New</h1>
                  <span className="home-text092">
                    Página web desarrollada por mi trabajando en Bgcreativos.
                  </span>
                </div>
              </a>
            </div>
            <div className="home-container37">
              <a
                href="https://agroabeca.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <div className="home-container38">
                  <h1 className="home-text093">Agroabeca</h1>
                  <span className="home-text094">
                    Página web desarrollada por mi trabajando en Bgcreativos.
                  </span>
                </div>
              </a>
            </div>
            <div className="home-container39">
              <a
                href="https://e2413e44.dulces-alicia-maracaibo.pages.dev/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <div className="home-container40">
                  <h1 className="home-text095">
                    <span>Dulces Alicia Maracaibo</span>
                    <br></br>
                  </h1>
                  <span className="home-text098">
                    Página web prototipo en desarrollo hecho por mi.
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container41">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text102 heading2">Common questions</h2>
              <span className="home-text103 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container42">
              <Question1
                answer="My design process involves understanding the client's needs, conducting research, creating wireframes, designing mockups, and iterating based on feedback."
                question="What is your design process?"
              ></Question1>
              <Question1
                answer="Yes, I offer website maintenance services to ensure that your website stays up-to-date and functions smoothly."
                question="Do you provide website maintenance services?"
              ></Question1>
              <Question1
                answer="I am proficient in using a variety of design tools and platforms, including Adobe Creative Suite, Figma, and WordPress."
                question="Can you work with specific design tools or platforms?"
              ></Question1>
              <Question1
                answer="The turnaround time for a project can vary depending on its complexity, but I strive to deliver high-quality work within a reasonable timeframe."
                question="What is your turnaround time for a typical project?"
              ></Question1>
              <Question1
                answer="Yes, I specialize in creating responsive designs that look great on all devices, ensuring a seamless user experience for your website visitors."
                question="Do you provide responsive design services?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container43">
            <span className="logo">ADRIAN</span>
            <nav className="home-nav1">
              <span className="home-nav122 bodySmall">Home</span>
              <span className="home-nav222 bodySmall">About</span>
              <span className="home-nav322 bodySmall">Portfolio</span>
              <span className="home-nav422 bodySmall">Services</span>
              <span className="home-nav522 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container44">
            <span className="bodySmall home-text106">
              © 2024 Adrian Ojeda | Todos los derechos reservados.
            </span>
            <div className="home-icon-group1">
              <a
                href="https://www.instagram.com/aeojedap/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon10 socialIcons"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
