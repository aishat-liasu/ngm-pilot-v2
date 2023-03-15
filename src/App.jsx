import { useState } from 'react';
import './styles/App.css';

import PersonCard from './components/person-card.jsx';
import PersonPopup from './components/person-popup.jsx';

import instagramIcon from './assets/images/instagram-icon.png';
import twitterIcon from './assets/images/twitter-icon.png';
import linkedInIcon from './assets/images/linkedin-icon.png';
import logo from './assets/images/logo.png';

import BimpeAfolabi from './assets/images/speakers/Bimpe-Afolabi.png';
import Kadri from './assets/images/speakers/Kadri.jpg';
import KekereEkun from './assets/images/speakers/Kekere-Ekun.jpg';
import MoshoodOlajide from './assets/images/speakers/Moshood-Olajide.jpg';
import Nwosu from './assets/images/speakers/Nwosu.jpg';
import PaulOnwuanibe from './assets/images/speakers/Paul-Onwuanibe.jpg';
import ShakiruLawal from './assets/images/speakers/Shakiru-Lawal.jpg';
import OlayinkaSubair from './assets/images/speakers/Olayinka-Subair.jpeg';
import Humuanni from './assets/images/speakers/Humua.jpg';

import Participant1 from './assets/images/participants_1.jpg';
import Participant2 from './assets/images/participants_2.jpg';
import NasirGiwa from './assets/images/nasir_giwa.jpg';
import Akintoye from './assets/images/akintoye_keynote_speech.jpg';
import Session1 from './assets/images/session_1.jpg';
import Session2 from './assets/images/session_2.jpg';
import Topdogs1 from './assets/images/topdogs_1.jpg';
import Topdogs2 from './assets/images/topdogs_2.jpg';
import RahmahAward from './assets/images/rahmah_award.jpg';
import BlueCurve from './assets/images/blue_style.png';

function App() {
  const speakerList = [
    {
      name: 'Mr Paul Onwuanibe',
      jobTitle: 'CEO, Landmark Group',
      imageSrc: PaulOnwuanibe,
      description:
        'Paul Onwuanibe is the founder of Landmark Group. He has over 25 years of professional experience in project design and execution within and outside of Africa.',
    },
    {
      name: 'Moshood Olajide',
      jobTitle: 'CFO, Ardova plc, Formerly Forte Oil',
      imageSrc: MoshoodOlajide,
    },
    {
      name: 'Chikezie Nwosu',
      jobTitle: 'MD/CEO Waltersmith Petroman Oil Limited',
      imageSrc: Nwosu,
      description:
        'Mr. Chikezie Nwosu is an experienced senior executive with over 29 years local & international experience in the oil & gas industry vis-a-viz management of oil & gas projects, new business development, divestments and acquisitions.',
    },
    {
      name: 'Modupe Kadri',
      jobTitle: 'CFO MTN Nigeria',
      imageSrc: Kadri,
    },
    {
      name: 'Toyin Kekere-Ekun',
      jobTitle: 'CEO Lotus Financial Services Limited',
      imageSrc: KekereEkun,
      description:
        'Ms. Kekere-Ekun is the Chief Executive Officer of Lotus Financial Services, a pioneer ethical and halal Financial Advisory Institution. Prior to her position as CEO she was Group Head Business Development and Operations of Lotus Financial Capital.',
    },
    {
      name: 'Bimpe Afolabi',
      jobTitle:
        'Partner in Internal Audit, Governance, Risk and Compliance Services, KPMG Nigeria',
      imageSrc: BimpeAfolabi,
    },
    {
      name: 'Shakiru Lawal',
      jobTitle: 'Country Human Resource Manager, Nestle',
      imageSrc: ShakiruLawal,
    },
    {
      name: 'Olayinka Subair',
      jobTitle: 'Country Manager, Pfizer Nigeria',
      description:
        "Olayinka Subair is Pfizer Nigeria's Country Manager and Cluster Lead, West Africa.",
      imageSrc: OlayinkaSubair,
    },
    {
      name: 'Humuanni Mogaji-Olambiwonnu',
      jobTitle:
        'Deputy General Manager Training and Welfare Lagos State Development and Property Corporation',
      imageSrc: Humuanni,
    },
  ];

  //popup state control
  const [openPopup, setOpenPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  //slider button state control
  const [leftArrowDisabled, setLeftArrowDisabled] = useState(true);
  const [rightArrowDisabled, setRightArrowDisabled] = useState(false);
  const speakerContainer = document.querySelector('.speaker-list');

  function scrollRight() {
    setLeftArrowDisabled(false);

    speakerContainer.scrollLeft += 0.2 * speakerContainer.scrollWidth;

    if (speakerContainer.scrollLeft >= 0.8 * speakerContainer.scrollWidth) {
      setRightArrowDisabled(true);
    }
  }

  function scrollLeft() {
    setRightArrowDisabled(false);

    speakerContainer.scrollLeft -= 0.2 * speakerContainer.scrollWidth;

    if (speakerContainer.scrollLeft === 0) {
      setLeftArrowDisabled(true);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <a
          href="http://ngmplatform.com/"
          target="_blank"
        >
          <img src={logo} alt="NGM Logo" className="logo" />
        </a>
      </header>
      {/* <section className="hero">
        <article className="heroText">
          <h1>About NGM PILOT</h1>
          <p>
            <span className="bolden">Nasir Giwa Mentorship (NGM) </span> is
            focused on creating the next generation of top tier leaders,
            entrepreneurs and business executives. The PILOT conference was
            organised to create the breeding ground to provide access to a
            network of people who have set the path, or are trying to find the
            path.
          </p>
        </article>
        <div className="heroContainer ">
          <div className="blueStyle">
            <img src={BlueCurve} alt="style" />
          </div>

          <div className="imgContainer">
            <img
              src={Participant1}
              alt="Attentive participants at the PILOT Conference 2022"
              class="image"
            />
          </div>
        </div>
      </section> */}

      {/* <section className="section-speakers">
        <h2>Facilitators</h2>

        <div className="slider">
          <button
            onClick={scrollLeft}
            className="slider-btn left-arrow"
            disabled={leftArrowDisabled}
          >
            &lt;
          </button>
          <ul className="speaker-list">
            {speakerList.length > 0 &&
              speakerList.map((speaker, index) => (
                <PersonCard
                  imageSrc={speaker.imageSrc}
                  altText={speaker.name}
                  name={speaker.name}
                  jobTitle={speaker.jobTitle}
                  description={speaker.description}
                  index={index}
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
                  setPopupData={setPopupData}
                />
              ))}
          </ul>
          <button
            onClick={scrollRight}
            className="slider-btn right-arrow"
            disabled={rightArrowDisabled}
          >
            &gt;
          </button>
        </div>
      </section> */}

      {openPopup && <PersonPopup popupControl={setOpenPopup} {...popupData} />}

      <section className="summary">
        <h2>
          Nasir Giwa Mentorship Platform Holds Her First Annual Conference
          Empowering Future Leaders
        </h2>
        <p>
          Nasir Giwa Mentorship Platform recently held its first annual
          conference, themed "Promoting Innovative Leaders of Tomorrow (PILOT)."
          The event was aimed at providing undergraduates, professionals, and
          business owners with a clear path to success and equipping them with
          the tools they need to thrive in their careers.
        </p>
        <figure class="figure">
          <img
            src={Participant2}
            alt="Attentive participants at the PILOT Conference 2022"
            class="image"
          />
          <figcaption class="caption">
            Attentive participants at the PILOT Conference 2022
          </figcaption>
        </figure>
        <p>
          As a mentorship community for students and early to mid-career
          professionals, NGM strives to instil excellence in its mentees. The
          conference, held on October 15th, 2022, was attended by about 1000
          participants from various backgrounds, including business executives,
          entrepreneurs, and thought leaders.
        </p>
        <p>
          During his opening speech, Engr. Nasir Giwa, the Grand Mentor, urged
          participants to aim for the best and emphasised the importance of
          having a mentor and being accountable. "As a community, NGM aims for
          the best and instils excellence in our mentees. But we also believe
          that each person needs a mentor who can guide them, challenge them,
          and keep them accountable."
        </p>
        <figure class="figure">
          <img
            src={NasirGiwa}
            alt="Alhaji Nasir Giwa listening to a session at the event"
            class="image"
          />
          <figcaption class="caption">Engr. Nasir Giwa</figcaption>
        </figure>
        <p>
          The conference featured notable speakers and panellists, including Dr.
          Akintoye Akindele, Chairman of Platform Capital Investment Partners,
          who delivered the keynote speech. Dr. Akindele encouraged participants
          to view challenges as opportunities and to persevere in the face of
          adversity. "Success is not just about achieving your goals, but also
          about the journey you take to get there. Challenges are opportunities
          for growth and development."
        </p>
        <figure class="figure">
          <img
            src={Akintoye}
            alt="Dr Akintoye Akindele giving his keynote speech at the event"
            class="image"
          />
          <figcaption class="caption">
            Dr Akintoye Akindele, Chairman, Platform Capital
          </figcaption>
        </figure>
        <p>
          Other topics discussed at the conference included "Leadership that
          Gets Results: What Got You Here Won’t Get You There," "Channelling
          Innovation to Become a Maven in a Dynamic World," and "Treading the
          Track of Tenacity." The panellists included industry leaders such as
          Paul Onwuanibe, CEO of Landmark Africa, Modupe Kadri, CFO of MTN
          Nigeria, and Bimpe Afolabi, KPMG Partner.
        </p>
        <figure class="figure">
          <img
            src={Session2}
            alt="A panelist session discussing the theme: 'Leadership that
            Gets Results: What Got You Here Won’t Get You There'"
            class="image"
          />
          <figcaption class="caption">
            Paul Onwuanibe, Shakiru Lawal, Modupe Kadri, and Bimpe Afolabi.
            (Left to Right)
          </figcaption>
        </figure>
        <p>
          One of NGM's mentees, who graduated with a perfect CGPA of 5.0 from
          Bells University, was rewarded for her academic excellence. She
          received a cash prize of 750,000 Naira from NGM, Dr. Akintoye, and Mr.
          Modupe Kadri, as a way of recognizing her achievements and motivating
          other mentees. "We believe that recognizing excellence is important
          because it encourages our mentees to strive for greatness and inspires
          others to do the same," said Engr. Nasir Giwa.
        </p>
        <figure class="figure">
          <img
            src={RahmahAward}
            alt="Rahmah Arogundade receiving her 250k award from NGM and some of the panelist"
            class="image"
          />
          <figcaption class="caption">
            Rahmah Arogundade receiving her 250k award
          </figcaption>
        </figure>
        <p>
          NGM's first annual conference was a great success, with participants
          gaining valuable insights and practical advice from experienced
          professionals. As NGM continues to provide mentorship and support for
          aspiring leaders and entrepreneurs, we can expect to see more success
          stories like this in the future. "We are committed to helping our
          mentees achieve their goals and realize their full potential. We
          believe that with the right guidance and support, anyone can become an
          innovative leader of tomorrow," said Engr. Nasir Giwa.
        </p>
        <figure class="figure">
          <img
            src={Topdogs1}
            alt="A group picture with some of the panelist"
            class="image"
          />
          <figcaption class="caption">
            A group picture with some of the panelist
          </figcaption>
        </figure>
      </section>

      <section className="section-speakers">
        <h2>Facilitators</h2>

        <div className="slider">
          <button
            onClick={scrollLeft}
            className="slider-btn left-arrow"
            disabled={leftArrowDisabled}
          >
            &lt;
          </button>
          <ul className="speaker-list">
            {speakerList.length > 0 &&
              speakerList.map((speaker, index) => (
                <PersonCard
                  imageSrc={speaker.imageSrc}
                  altText={speaker.name}
                  name={speaker.name}
                  jobTitle={speaker.jobTitle}
                  description={speaker.description}
                  index={index}
                  openPopup={openPopup}
                  setOpenPopup={setOpenPopup}
                  setPopupData={setPopupData}
                />
              ))}
          </ul>
          <button
            onClick={scrollRight}
            className="slider-btn right-arrow"
            disabled={rightArrowDisabled}
          >
            &gt;
          </button>
        </div>
      </section>

      <footer className="footer">
        <h2>Contact Us</h2>
        <address>
          <a href="tel:+2348100579094">(234) 810 057 9094</a>
          <a href="tel:+2349126937936">(234) 912 693 7936</a>
          <a href="mailto:info@ngmplatform.com">info@ngmplatform.com</a>
        </address>
        <ul className="social-links">
          <li>
            <a
              href="https://ng.linkedin.com/company/ngm-platform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ngm_platform?s=21&t=cKJANbNPca6dtmb2cHRD9Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/ngm.platform?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
