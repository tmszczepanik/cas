import './App.css'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

const weeklySchedule = [
  {
    day: 'Poniedziałek',
    shortDay: 'Pon',
    hours: '11:00–15:00',
    activities: [
      { time: '11:00–15:00', name: 'Tworzymy Dobre Relacje — kawiarenka' },
      { time: '11:15–13:00', name: 'Klatka po klatce — seans filmowy', note: 'Bez 9 i 23 XI' },
      { time: '13:00–14:00', name: 'Filmowy klub dyskusyjny', note: 'Bez 9 i 23 XI' },
      { time: '14:00–15:00', name: 'ŁamiGłówka' },
    ],
  },
  {
    day: 'Wtorek',
    shortDay: 'Wt',
    hours: '11:00–15:00',
    activities: [
      { time: '10:00–11:00', name: 'Spacer z kijami', note: 'Zbiórka przed CAS' },
      { time: '11:00–15:00', name: 'Tworzymy Dobre Relacje — kawiarenka' },
      { time: '11:00–13:30', name: 'Gry stolikowe' },
      { time: '13:30–15:00', name: 'Sznurki i korale — zajęcia manualne', note: 'Bez 17 XI' },
    ],
  },
  {
    day: 'Środa',
    shortDay: 'Śr',
    hours: '11:00–15:15',
    activities: [
      { time: '11:00–15:15', name: 'Tworzymy Dobre Relacje — kawiarenka', note: 'Bez 11 XI' },
      { time: '12:15–13:00', name: 'Język angielski — podstawa', note: 'Bez 11 XI' },
      { time: '13:00–13:45', name: 'Rozmówki lingwistyczne', note: 'Bez 11 XI' },
      { time: '13:45–14:30', name: 'Palcem po ekranie — senior w sieci, e-zdrowie', note: 'IKP, e-recepta; bez 11 XI' },
      { time: '14:30–15:15', name: 'Z komputerem na Ty — senior w sieci, e-zdrowie', note: 'IKP, e-recepta; bez 11 XI' },
    ],
  },
  {
    day: 'Czwartek',
    shortDay: 'Czw',
    hours: '11:00–15:00',
    activities: [
      { time: '11:00–15:00', name: 'Tworzymy Dobre Relacje — kawiarenka' },
      { time: '11:15–12:00', name: 'Zajęcia ruchowe na matach' },
      { time: '12:00–12:45', name: 'Ruch dla kręgosłupa na krzesłach' },
      { time: '13:00–13:45', name: 'Sprawna ręka — ćwiczenia manualne' },
      { time: '14:00–14:45', name: 'Idziemy śmiało — profilaktyka upadków' },
    ],
  },
  {
    day: 'Piątek',
    shortDay: 'Pt',
    hours: '11:00–15:00',
    activities: [
      { time: '11:00–15:00', name: 'Tworzymy Dobre Relacje — kawiarenka' },
    ],
  },
]

const novemberEvents = [
  {
    date: '06',
    weekday: 'piątek',
    time: '12:00–15:00',
    title: 'Wyjście do kina na film „Lalka”',
    location: 'Multikino · zbiórka w holu',
    type: 'Wyjście',
  },
  {
    date: '09',
    weekday: 'poniedziałek',
    time: '12:00–13:00',
    title: 'Techniki regulacji stresu',
    location: 'CAS · seminarium prozdrowotne',
    type: 'Seminarium',
  },
  {
    date: '13',
    weekday: 'piątek',
    time: '13:30–15:00',
    title: 'Profilaktyka chorób — Szczepmy się!',
    location: 'CAS · seminarium prozdrowotne · lek. Maria Życzkowska',
    type: 'Seminarium',
  },
  {
    date: '17',
    weekday: 'wtorek',
    time: '13:30–15:00',
    title: 'Lunch Ciekawy — Senior gościem',
    location: 'CAS · gościnią będzie Barbara Franosz, tłumaczka języka migowego',
    type: 'Spotkanie',
  },
  {
    date: '20',
    weekday: 'piątek',
    time: '10:30–12:30',
    title: 'Wawel w listopadzie',
    location: 'Zwiedzanie Katedry z przewodnikiem i Komnat Wawelskich · zbiórka przed Katedrą',
    type: 'Wyjście',
  },
  {
    date: '23',
    weekday: 'poniedziałek',
    time: '11:30–13:45',
    title: 'Jak chronić się w internecie?',
    location: 'CAS · warsztaty i wykład o cyberbezpieczeństwie dla seniorów',
    type: 'Warsztaty',
  },
]

const centerGallery = [
  {
    src: publicAsset('centrum-wejscie.webp'),
    alt: 'Wejście do centrum aktywności – kolorowy budynek z przestrzenią do spotkań',
    caption: 'Centrum przy ul. Niedużej 4',
  },
  {
    src: publicAsset('centrum-wnetrze-1.webp'),
    alt: 'Kolorowe wnętrze sali spotkań z wygodnymi fotelami',
    caption: 'Miejsce na spotkania i rozmowy',
  },
  {
    src: publicAsset('centrum-wnetrze-2.webp'),
    alt: 'Wnętrze centrum aktywności – przestrzeń do spotkań i zajęć',
    caption: 'Przestrzeń wspólnych aktywności',
  },
  {
    src: publicAsset('centrum-kawiarenka.webp'),
    alt: 'Bar kawowy w centrum aktywności z kolorowym wystrojem',
    caption: 'Nasza kawiarenka',
  },
]

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M7.5 3.5v3M16.5 3.5v3M3.5 9.5h17" />
    </svg>
  )
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#start" aria-label="Centrum Aktywności Seniora Kraina Dobrych Relacji — strona główna">
          <img src={publicAsset('kraina-logo.jpg')} alt="" />
          <span>
            Centrum Aktywności Seniora
            <strong>Kraina Dobrych Relacji</strong>
          </span>
        </a>

        <nav className="main-nav" aria-label="Nawigacja główna">
          <a className="nav-active" href="#harmonogram">Harmonogram</a>
          <a href="#wydarzenia">Wydarzenia</a>
          <a href="#fundacja">Fundacja</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <a className="header-phone" href="tel:+48605781579">
          <span className="phone-icon" aria-hidden="true">↗</span>
          <span>605 78 15 79</span>
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="start">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Centrum Aktywności Seniora · Kraków</p>
            <h1>Tu dobrze być <em>razem.</em></h1>
            <p className="hero-description">
              Zapraszamy do Krainy Dobrych Relacji — miejsca spotkań,
              aktywności i życzliwej atmosfery. Sprawdź, co dzieje się
              w naszym Centrum w listopadzie.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#harmonogram">
                <CalendarIcon />
                Zobacz harmonogram
              </a>
              <a className="text-link" href="#wydarzenia">
                Bieżące wydarzenia <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-address">
              <span className="pin-icon" aria-hidden="true">⌖</span>
              <span>ul. Nieduża 4, Kraków</span>
            </div>
          </div>

          <aside className="hours-card" aria-label="Godziny otwarcia CAS">
            <div className="hours-card-heading">
              <span className="hours-icon"><CalendarIcon /></span>
              <span>
                <small>Jesteśmy dla Ciebie</small>
                <strong>Godziny otwarcia CAS</strong>
              </span>
            </div>
            <div className="hours-list">
              {weeklySchedule.map((day) => (
                <div className="hours-row" key={day.day}>
                  <span>{day.day}</span>
                  <strong>{day.hours}</strong>
                </div>
              ))}
            </div>
            <div className="coordinator-note">
              <span className="note-dot" />
              <span>Dyżur koordynatorki: wtorek, 11:00–15:00</span>
            </div>
          </aside>
        </section>

        <section className="schedule-section" id="harmonogram">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  <span>01</span>
                  <span>Listopad 2026</span>
                </div>
                <h2>Stały <em>harmonogram zajęć</em></h2>
                <p>Wpadnij do nas w tygodniu — czekają spotkania, ruch i wspólnie spędzony czas.</p>
              </div>
              <a className="pdf-link" href={publicAsset('harmonogram-listopad-2026.pdf')} target="_blank" rel="noreferrer">
                <span className="pdf-icon">PDF</span>
                <span>Pobierz pełny harmonogram <small>Listopad 2026 · PDF</small></span>
                <span className="download-arrow" aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="schedule-grid">
              {weeklySchedule.map((day, index) => (
                <article className={`day-card${index === 0 ? ' day-card--featured' : ''}`} key={day.day}>
                  <header className="day-card-header">
                    <span className="day-name">{day.day}</span>
                    <span className="day-hours">{day.hours}</span>
                  </header>
                  <ul className="activity-list">
                    {day.activities.map((activity) => (
                      <li key={`${activity.time}-${activity.name}`}>
                        <time>{activity.time}</time>
                        <span className="activity-name">{activity.name}</span>
                        {activity.note && <small>{activity.note}</small>}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="schedule-footnote">
              Szczegóły i zmiany w harmonogramie znajdziesz w pełnym pliku PDF. Zajęcia dodatkowe — poniżej.
            </p>
          </div>
        </section>

        <section className="events-section section-wrap" id="wydarzenia">
          <div className="section-heading events-heading">
            <div>
              <div className="section-label">
                <span>02</span>
                <span>Warto zapisać w kalendarzu</span>
              </div>
              <h2>Wydarzenia <em>listopada</em></h2>
              <p>Spotkania, wyjścia i warsztaty — wybierz coś dla siebie.</p>
            </div>
            <div className="event-month-mark" aria-hidden="true">
              <strong>XI</strong>
              <span>2026</span>
            </div>
          </div>

          <div className="events-list">
            {novemberEvents.map((event) => (
              <article className="event-row" key={event.date}>
                <div className="event-date">
                  <strong>{event.date}</strong>
                  <span>{event.weekday}</span>
                </div>
                <div className="event-main">
                  <span className="event-type">{event.type}</span>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                </div>
                <time className="event-time">{event.time}</time>
              </article>
            ))}
          </div>
          <div className="registration-note">
            <span className="registration-icon" aria-hidden="true">!</span>
            <p>
              <strong>Na wszystkie zajęcia obowiązują zapisy.</strong>
              <span>Zadzwoń do koordynatorki: <a href="tel:+48605781579">605 78 15 79</a></span>
            </p>
          </div>
        </section>

        <section className="foundation-story" id="fundacja">
          <div className="section-wrap">
            <div className="section-label">
              <span>03</span>
              <span>O fundacji</span>
            </div>
            <div className="story-copy">
              <h2>Fundacja Kraina Nestora</h2>
              <p>
                Misją Fundacji Kraina Nestora jest budowanie świata, w którym pokolenia uczą się od siebie nawzajem, wspierają się i wspólnie tworzą silne, empatyczne oraz aktywne społeczności. Tworzymy krainę dobrych relacji.
              </p>
              <p>
                Łączymy dzieci, młodzież i seniorów poprzez działania edukacyjne, społeczne, kulturalne i rekreacyjne, przeciwdziałając samotności, wykluczeniu oraz bierności społecznej. Wierzymy, że wzajemny szacunek, dialog i współpraca między pokoleniami wzbogacają życie każdego człowieka oraz wzmacniają więzi społeczne.
              </p>
              <p>
                Tworzymy przestrzeń do rozwoju, aktywności i integracji, wspierając seniorów w zachowaniu samodzielności i poczucia sprawczości, a dzieci i młodzież w kształtowaniu postaw odpowiedzialności, empatii oraz zaangażowania obywatelskiego.
              </p>
              <p>
                Razem budujemy CAS „Krainę Dobrych Relacji” – miejsce, w którym doświadczenie spotyka się z młodością, a relacje międzyludzkie stają się fundamentem lepszej przyszłości.
              </p>
            </div>

            <div className="foundation-goal">
              <span className="goal-mark" aria-hidden="true">✳</span>
              <div>
                <h3>Cel działalności:</h3>
                <p>Utworzenie i prowadzenie Centrum Aktywności Seniora „Kraina Dobrych Relacji” w Krakowie przy ul. Niedużej 4 w III Dzielnicy</p>
              </div>
            </div>

            <div className="center-gallery" id="nasze-dzialania">
              <div className="gallery-heading">
                <div>
                  <div className="section-label">
                    <span>04</span>
                    <span>Poznaj nas</span>
                  </div>
                  <h3>Nasze działania</h3>
                </div>
                <p>Zobacz miejsce, w którym spotykamy się na co dzień.</p>
              </div>
              <div className="gallery-grid">
                {centerGallery.map((image) => (
                  <figure key={image.src}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                    <figcaption>{image.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="senior-invitation">
              <div className="invitation-copy">
                <p className="invitation-greeting">Drodzy Seniorzy,</p>
                <p>
                  Od pierwszego października rozpoczyna działalność Centrum Aktywności Seniora „Kraina Dobrych Relacji”, stworzone z myślą o osobach w wieku 60 lat i więcej. Zapraszamy od poniedziałku do piątku, w godzinach 11:00-15:00, na spotkania przy kawie, rozmowy, rozwijanie zainteresowań, naukę nowych rzeczy i wspólne spędzanie czasu. Udział we wszystkich zajęciach i spotkaniach jest całkowicie <strong>BEZPŁATNY</strong> finansowany ze środków miasta Krakowa. Centrum mieści się przy ul. Niedużej 4 w Krakowie, w budynku Krainy Zabaw Anikino – serdecznie zapraszamy wszystkich seniorów, którzy chcieliby poznać nowych ludzi, aktywnie spędzić czas i po prostu dobrze się poczuć wśród innych.
                </p>
              </div>
              <img
                className="senior-poster"
                src={publicAsset('centrum-spotkania.webp')}
                alt="Plakat informacyjny Centrum Aktywności Seniora Kraina Dobrych Relacji dla osób 60+"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="about-section" id="dane-fundacji">
          <div className="section-wrap about-inner">
            <div className="section-label section-label--light">
              <span>05</span>
              <span>Dane fundacji</span>
            </div>
            <div>
              <h2>Fundacja Kraina Nestora</h2>
              <p>Dane rejestrowe, dane kontaktowe i dokumenty fundacji.</p>
            </div>
            <img className="about-logo" src={publicAsset('kraina-logo.jpg')} alt="Logo Fundacji Kraina Nestora" />
            <div className="foundation-details">
              <h3>Położenie</h3>
              <dl className="foundation-facts">
                <div>
                  <dt>Fundacja</dt>
                  <dd>Fundacja Kraina Nestora</dd>
                </div>
                <div>
                  <dt>NIP</dt>
                  <dd>9452319207</dd>
                </div>
                <div>
                  <dt>REGON</dt>
                  <dd>542996095</dd>
                </div>
                <div>
                  <dt>Adres</dt>
                  <dd>Ul. Nieduża 4<br />31-443 Kraków</dd>
                </div>
              </dl>
              <div className="foundation-account">
                <h4>Konto Fundacji:</h4>
                <p>41 1140 2004 0000 3902 8677 5222 <span>(mBank)</span></p>
                <small>
                  Osoby chcące wpłacić darowiznę na działalność naszego NGO i chcące
                  odpisać ją od podatku, proszone są o wpisanie w treści przelewu:
                  <strong> „DAROWIZNA NA CELE STATUTOWE”</strong>
                </small>
              </div>
              <div className="foundation-documents">
                <h4>Dokumenty fundacji</h4>
                <a href={publicAsset('krs-fundacja-kraina-nestora.pdf')} download>
                  <span className="document-type">PDF</span>
                  <span>
                    Odpis aktualny z KRS
                    <small>Stan na 16 czerwca 2026</small>
                  </span>
                  <span className="document-download" aria-hidden="true">↓</span>
                </a>
                <a href={publicAsset('statut-fundacji-kraina-nestora.pdf')} download>
                  <span className="document-type">PDF</span>
                  <span>
                    Statut Fundacji
                    <small>Tekst jednolity z 10 września 2025</small>
                  </span>
                  <span className="document-download" aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap" id="kontakt">
        <a className="footer-brand" href="#start">
          <img src={publicAsset('kraina-logo.jpg')} alt="" />
          <span>Kraina Dobrych Relacji<small>Centrum Aktywności Seniora</small></span>
        </a>
        <div className="footer-contact">
          <span>Odwiedź nas</span>
          <a href="https://maps.google.com/?q=ul.+Niedu%C5%BCa+4,+31-443+Krak%C3%B3w" target="_blank" rel="noreferrer">
            ul. Nieduża 4, 31-443 Kraków
          </a>
        </div>
        <div className="footer-contact">
          <span>Kontakt</span>
          <a href="tel:+48605781579">Telefon: 605781579</a>
          <a href="mailto:fundacja@krainanestora.org">
            e-mail: krainanestora@gmail.com
          </a>
        </div>
        <a className="footer-facebook" href="https://www.facebook.com/profile.php?id=61594298001240" target="_blank" rel="noreferrer">
          Facebook <span aria-hidden="true">↗</span>
        </a>
      </footer>
      <div className="footer-bottom">
        <div className="section-wrap">
          <span>Fundacja Kraina Nestora</span>
          <span>© 2026 · Tworzymy krainę dobrych relacji</span>
        </div>
      </div>
    </div>
  )
}

export default App
