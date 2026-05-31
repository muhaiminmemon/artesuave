/* sections-a.jsx — Nav, Hero, About, Experience */
const { useState, useEffect } = React;

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      try {
        const s = new Intl.DateTimeFormat("en-GB", {
          timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
        }).format(new Date());
        setT(s);
      } catch (e) { setT(""); }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="nav__clock">YYZ · {t}</span>;
}

const THEME_LABELS = { paper: "Light", telemetry: "Dark", mono: "Mono", redbull: "Red Bull", bjj: "Arte Suave", lakers: "Lakers" };

function Nav({ data, theme, onCycleTheme }) {
  return (
    <nav className="nav">
      <div className="wrap nav__inner">
        <a className="nav__mark" href="#top" style={{ textDecoration: "none", color: "inherit" }}>
          <span className="sq"></span>{data.initials} / MUHAIMIN
        </a>
        <div className="nav__links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <Clock />
          <button className="nav__theme" onClick={onCycleTheme} title="Switch theme" aria-label="Switch theme">
            <span className="nav__theme-sw"></span>
            <span>{THEME_LABELS[theme] || theme}</span>
          </button>
          <a className="nav__cta" href="#contact" style={{ color: "var(--accent)" }}>Contact ↗</a>
        </div>
      </div>
    </nav>
  );
}

function Hero({ data }) {
  return (
    <header className="hero wrap" id="top">
      <div className="hero__eyebrow reveal">
        <span className="live" aria-hidden="true"></span>
        <span>{data.role}</span>
        <span className="bar"></span>
        <span>{data.location}</span>
        <span className="bar"></span>
        <span>Available 2027</span>
      </div>

      <h1 className="hero__name reveal">
        <span className="ln1">Muhammad</span><br />
        <span className="ln2">Muhaimin</span><br />
        <span className="ln3">Memon</span>
      </h1>

      <div className="hero__lead">
        <div className="reveal">
          <p className="hero__tagline">Machine learning<br />& MLOps, from training<br />to production.</p>
        </div>
        <div className="reveal">
          <p className="hero__sub">{data.subtag}</p>
          <div className="hero__cta">
            <a className="btn btn--accent" href="#projects">View the work</a>
            <a className="btn btn--ghost" href={"mailto:" + data.email}>Email me</a>
          </div>
        </div>
      </div>

      <div className="stats__cap">
        <span className="stats__cap-a">// Telemetry</span>
        <span>Who I am, at a glance</span>
      </div>
      <div className="stats reveal">
        {data.stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat__no">{"S" + (i + 1)}</div>
            <div className="stat__v">{s.v}</div>
            <div className="stat__k">{s.k}</div>
            <div className="stat__note">{s.note}</div>
          </div>
        ))}
      </div>
    </header>
  );
}

function Ticker({ items }) {
  const row = (
    <span className="ticker__track">
      {[...items, ...items].map((it, i) => (
        <span className="ticker__item" key={i}>
          <b>{it}</b><span className="ticker__sep">/</span>
        </span>
      ))}
    </span>
  );
  return <div className="ticker">{row}</div>;
}

function About({ data }) {
  const a = data.about;
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow"><span className="idx">01</span> / About</span>
          <span className="eyebrow"><span className="dot"></span>Profile</span>
        </div>
        <div className="section__body about__grid">
          <div className="reveal">
            <p className="about__lead">
              I work across the machine-learning lifecycle, from training and benchmarking models to the <em>MLOps</em> that ships and monitors them in production.
            </p>
            <p className="about__blurb">{a.blurb}</p>
          </div>
          <div className="edu reveal">
            <div className="edu__row">
              <div className="edu__k">Institution</div>
              <div className="edu__v">{a.school}</div>
            </div>
            <div className="edu__row">
              <div className="edu__k">Based in</div>
              <div className="edu__v">{data.location}</div>
            </div>
            <div className="edu__row">
              <div className="edu__k">Status</div>
              <div className="edu__v">{a.citizen}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ data }) {
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow"><span className="idx">02</span> / Experience</span>
          <span className="eyebrow"><span className="dot"></span>{data.experience.length} stints · 3+ yrs</span>
        </div>
        <div className="section__body exp">
          {data.experience.map((s, i) => (
            <div className="stint reveal" key={i}>
              <div className="stint__time">
                <div className="stint__date">{s.date}</div>
                <div className="stint__loc">{s.loc}</div>
                {s.status ? <span className="stint__status">{s.status}</span> : null}
              </div>
              <div className="stint__main">
                <div className="stint__no">{s.no}</div>
                <div className="stint__role">{s.role}</div>
                <div className="stint__org">{s.org}</div>
                <ul className="stint__points">
                  {s.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <div className="stint__stack">
                  {s.stack.map((t, j) => <span className="chip" key={j}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Ticker, About, Experience });
