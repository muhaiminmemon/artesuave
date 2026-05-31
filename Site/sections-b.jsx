/* sections-b.jsx — Projects, Skills, Beyond, Contact, Footer */

function Projects({ data }) {
  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow"><span className="idx">03</span> / Featured Projects</span>
          <span className="eyebrow"><span className="dot"></span>Selected work</span>
        </div>
        <div className="section__body projects">
          {data.projects.map((p, i) =>
          <article className="project reveal" key={i}>
              <div className="project__top">
                <div className="project__id">
                  <span className="project__name">{p.name}</span>
                  <span className="project__type">{p.type}</span>
                </div>
                <p className="project__tagline">{p.tagline}</p>
              </div>

              <div className="project__metrics">
                {p.metrics.map((m, j) =>
              <div className="metric" key={j}>
                    <div className={"metric__v" + (j === 0 ? " accent" : "")}>{m.v}</div>
                    <div className="metric__k">{m.k}</div>
                  </div>
              )}
              </div>

              <div className="project__body">
                <div>
                  <p className="project__desc">{p.desc}</p>
                  <p className="project__detail">{p.detail}</p>
                </div>
                <div className="project__side">
                  <div className="project__stack">
                    {p.stack.map((t, j) => <span className="chip" key={j}>{t}</span>)}
                  </div>
                  <a className="btn btn--ghost" href={p.link} target="_blank" rel="noopener">
                    {p.linkLabel} ↗
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function Skills({ data }) {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow"><span className="idx">04</span> / Setup Sheet</span>
          <span className="eyebrow"><span className="dot"></span>Stack &amp; tooling</span>
        </div>
        <div className="section__body">
          <div className="skills reveal">
            {data.skills.map((c, i) =>
            <div className="skillcol" key={i}>
                <div className="skillcol__h">
                  <span>{c.group}</span>
                  <span>{String(c.items.length).padStart(2, "0")}</span>
                </div>
                {c.items.map((it, j) => <div className="skill-item" key={j}>{it}</div>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function Beyond({ data }) {
  return (
    <section className="section" id="beyond">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow"><span className="idx">05</span> / Off the Clock</span>
          <span className="eyebrow"><span className="dot"></span>The rest of it</span>
        </div>
        <div className="section__body">
          <div className="beyond reveal">
            {data.beyond.map((b, i) =>
            <div className="bcard" key={i}>
                <div className="bcard__label">{b.label}</div>
                <div>
                  <div className="bcard__title">{b.title}</div>
                  <p className="bcard__blurb" style={{ marginTop: "14px" }}>{b.blurb}</p>
                </div>
                <div className="bcard__row">
                  <span className="bcard__meta">{b.meta}</span>
                  <span className="bcard__meta">{String(i + 1).padStart(2, "0")} / {String(data.beyond.length).padStart(2, "0")}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function Contact({ data }) {
  const rows = [
  { k: "Email", v: data.email, href: "mailto:" + data.email },
  { k: "GitHub", v: "@" + data.github, href: "https://github.com/" + data.github },
  { k: "LinkedIn", v: "/" + data.linkedin, href: "https://linkedin.com/in/" + data.linkedin },
  { k: "Phone", v: data.phone, href: "tel:" + data.phone.replace(/[^+\d]/g, "") }];

  return (
    <section className="section" id="contact" style={{ borderBottom: "none" }}>
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow"><span className="idx">05</span> / Contact</span>
          <span className="eyebrow"><span className="dot"></span>Reach out</span>
        </div>
        <div className="section__body">
          <p className="eyebrow reveal" style={{ marginBottom: "18px" }}>Open to Summer &amp; Fall 2027 roles</p>
          <h2 className="contact__big reveal">
            <a href={"mailto:" + data.email}>Get in<br />touch.</a>
          </h2>
          <div className="contact__rows reveal">
            {rows.map((r, i) =>
            <a className="crow" key={i} href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel="noopener">
                <div className="crow__k">{r.k}</div>
                <div className="crow__v">{r.v}</div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function Footer({ data }) {
  return (
    <footer className="footer wrap">
      <span>© {new Date().getFullYear()} {data.name}</span>
      <span>ORIGINAL DESIGN, NO TEMPLATE</span>
      <span>Toronto, ON</span>
    </footer>);

}

Object.assign(window, { Projects, Skills, Beyond, Contact, Footer });