/* app.jsx — assembles sections, wires Tweaks + theme + reveal */
const { useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "bjj",
  "accent": "red",
  "showTicker": true,
  "bigName": true,
  "intro": true,
  "rankBar": true
}/*EDITMODE-END*/;

function useReveal(deps) {
  useEffectApp(() => {
    let raf = 0;
    const check = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("in");
      });
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    // initial passes (covers fonts/layout settling)
    check();
    requestAnimationFrame(check);
    const t1 = setTimeout(check, 300);
    const t2 = setTimeout(() => document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in")), 2500);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2);
    };
  }, deps || []);
}

function RankBar() {
  const BELTS = [
    { name: "White", c: "oklch(0.93 0.014 95)" },
    { name: "Blue", c: "oklch(0.50 0.16 255)" },
    { name: "Purple", c: "oklch(0.46 0.17 300)" },
    { name: "Brown", c: "oklch(0.42 0.085 60)" },
    { name: "Black", c: "oklch(0.20 0.012 60)" },
  ];
  const [p, setP] = React.useState(0);
  useEffectApp(() => {
    let raf = 0;
    const calc = () => {
      const st = window.scrollY || document.documentElement.scrollTop || 0;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, Math.max(0, st / h)) : 0);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(calc); };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    const t1 = setTimeout(calc, 400);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf); clearTimeout(t1);
    };
  }, []);
  const idx = Math.min(4, Math.floor(p * 5));
  const belt = BELTS[idx];
  const pct = Math.round(p * 100);
  const promoted = p > 0.985;
  return (
    <div className={"rankbar" + (promoted ? " is-promoted" : "")} title={belt.name + " belt · " + pct + "%"} aria-hidden="true">
      <div className="rankbar__fill" style={{ transform: `scaleX(${p})`, backgroundColor: belt.c }}></div>
    </div>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const data = window.PORTFOLIO;

  // Detect a frozen animation clock (offscreen/throttled iframe). If transitions
  // don't advance, opacity fades would stick at 0 — fall back to instant reveal.
  useEffectApp(() => {
    const probe = document.createElement("div");
    probe.style.cssText = "position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;transition:opacity .6s linear;pointer-events:none;";
    document.body.appendChild(probe);
    requestAnimationFrame(() => { probe.style.opacity = "1"; });
    const id = setTimeout(() => {
      const a = probe.getAnimations ? probe.getAnimations()[0] : null;
      const frozen = !a || a.currentTime === 0 || a.currentTime === null;
      if (frozen) document.documentElement.classList.add("no-anim");
      probe.remove();
    }, 140);
    return () => clearTimeout(id);
  }, []);

  useEffectApp(() => {
    document.documentElement.setAttribute("data-theme", t.theme);
    document.documentElement.setAttribute("data-accent", t.accent);
  }, [t.theme, t.accent]);

  useReveal([t.theme]);

  const THEMES = ["paper", "telemetry", "mono", "redbull", "bjj", "lakers"];
  const cycleTheme = () => setTweak("theme", THEMES[(THEMES.indexOf(t.theme) + 1) % THEMES.length]);

  return (
    <React.Fragment>
      {t.rankBar ? <RankBar /> : null}
      <Nav data={data} theme={t.theme} onCycleTheme={cycleTheme} />
      <Hero data={data} />
      {t.showTicker ? <Ticker items={data.ticker} /> : null}
      <main>
        <About data={data} />
        <Experience data={data} />
        <Projects data={data} />
        <Skills data={data} />
        <Contact data={data} />
      </main>
      <Footer data={data} />

      <TweaksPanel>
        <TweakSection label="Direction" />
        <TweakRadio
          label="Theme"
          value={t.theme}
          options={["paper", "telemetry", "mono", "redbull", "bjj", "lakers"]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakColor
          label="Accent"
          value={t.accent === "red" ? "#d23b2e" : t.accent === "blue" ? "#2f6bd6" : "#b6e83b"}
          options={["#d23b2e", "#2f6bd6", "#b6e83b"]}
          onChange={(hex) => setTweak("accent", hex === "#d23b2e" ? "red" : hex === "#2f6bd6" ? "blue" : "lime")}
        />
        <TweakSection label="Layout" />
        <TweakToggle label="Tech ticker" value={t.showTicker} onChange={(v) => setTweak("showTicker", v)} />
        <TweakToggle label="Belt rank bar" value={t.rankBar} onChange={(v) => setTweak("rankBar", v)} />
        <TweakToggle
          label="Belt intro on load"
          value={t.intro}
          onChange={(v) => { setTweak("intro", v); try { localStorage.setItem("mm_intro", v ? "on" : "off"); } catch (e) {} }}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
