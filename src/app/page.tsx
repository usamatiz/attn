/* HUD panel frame: blue chamfered double outline + orange corner brackets. */
function HudFrame() {
  return (
    <svg
      className="hud-frame-svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="hf-main"
        d="M34,4 H966 L996,34 V966 L966,996 H34 L4,966 V34 Z"
      />
      <path
        className="hf-sub"
        d="M46,16 H954 L984,46 V954 L954,984 H46 L16,954 V46 Z"
      />
      <path className="hf-acc" d="M8,74 V28 L28,8 H74" />
      <path className="hf-acc" d="M926,8 H972 L992,28 V74" />
      <path className="hf-acc" d="M992,926 V972 L972,992 H926" />
      <path className="hf-acc" d="M74,992 H28 L8,972 V926" />
    </svg>
  );
}

/* Orange hexagon credential badges for the founder section. */
function CredBadge({ k }: { k: number }) {
  const glyphs = [
    <path key="g" d="M20 18a4 4 0 1 1 8 0c0 3-4 3-4 6M24 30v.2" />,
    <>
      <circle cx="24" cy="24" r="6" />
      <circle cx="24" cy="24" r="1.6" />
    </>,
    <>
      <circle cx="24" cy="24" r="7" />
      <path d="M17 24h14M24 17v14M18.5 19.5c3 2 8 2 11 0M18.5 28.5c3-2 8-2 11 0" />
    </>,
    <>
      <circle cx="20" cy="21" r="3" />
      <circle cx="28" cy="21" r="3" />
      <path d="M15 32c0-3 2.5-5 5-5s5 2 5 5M25 32c0-3 2.5-5 5-5" />
    </>,
  ];
  return (
    <svg className="cred-badge" viewBox="0 0 48 48" aria-hidden="true">
      <path className="cb-hex" d="M24 4 L40 13 V35 L24 44 L8 35 V13 Z" />
      <g className="cb-glyph">{glyphs[k]}</g>
    </svg>
  );
}

/* Large glowing-orange HUD frame for the hero strategy-call form. */
function FormFrame() {
  return (
    <svg
      className="form-frame"
      viewBox="0 0 400 560"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="ff-main"
        d="M44,4 H356 L396,44 V516 L356,556 H44 L4,516 V44 Z"
      />
      <path
        className="ff-sub"
        d="M56,16 H344 L384,56 V504 L344,544 H56 L16,504 V56 Z"
      />
      <path className="ff-acc" d="M8,86 V32 L32,8 H86" />
      <path className="ff-acc" d="M314,8 H368 L392,32 V86" />
      <path className="ff-acc" d="M392,474 V528 L368,552 H314" />
      <path className="ff-acc" d="M86,552 H32 L8,528 V474" />
    </svg>
  );
}

/* Glowing blue HUD card frame for the service panels. */
function CardFrame() {
  return (
    <svg
      className="svc-frame"
      viewBox="0 0 300 340"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="cf-fill"
        d="M20,3 H280 L297,20 V320 L280,337 H20 L3,320 V20 Z"
      />
      <path className="cf-acc" d="M10,46 V22 L22,10 H46" />
      <path className="cf-acc" d="M254,10 H278 L290,22 V46" />
      <path className="cf-acc" d="M290,294 V318 L278,330 H254" />
      <path className="cf-acc" d="M46,330 H22 L10,318 V294" />
    </svg>
  );
}

/* Ten distinct geometric line-art brand marks (blue stroke). */
function BrandIcon({ k }: { k: number }) {
  const marks = [
    <>
      <path d="M24 8 L36 34 H12 Z" />
      <path d="M24 18 L31 34 H17 Z" />
    </>,
    <>
      <path d="M24 6 L42 24 L24 42 L6 24 Z" />
      <circle cx="24" cy="24" r="6" />
      <path d="M24 12v24M12 24h24" />
    </>,
    <>
      <circle cx="24" cy="24" r="13" />
      <circle cx="24" cy="24" r="6" />
      <path d="M24 11v6M24 31v6" />
    </>,
    <>
      <circle cx="24" cy="24" r="13" />
      <circle cx="24" cy="24" r="9" />
    </>,
    <>
      <path d="M24 8 L38 16 V32 L24 40 L10 32 V16 Z" />
      <path d="M10 16 L24 26 L38 16" />
    </>,
    <>
      <path d="M24 8 L40 24 L24 40 L8 24 Z" />
      <path d="M24 17 L31 24 L24 31 L17 24 Z" />
    </>,
    <>
      <path d="M24 8v32M8 24h32" />
      <path d="M24 8l-5 6h10zM24 40l-5-6h10zM8 24l6-5v10zM40 24l-6-5v10z" />
    </>,
    <>
      <circle cx="24" cy="24" r="13" />
      <circle cx="24" cy="24" r="7" />
    </>,
    <>
      <path d="M24 9 L37 19 L32 37 H16 L11 19 Z" />
      <circle cx="24" cy="24" r="5" />
    </>,
    <>
      <path d="M24 6 L42 24 L24 42 L6 24 Z" />
      <circle cx="24" cy="15" r="3" />
      <circle cx="15" cy="28" r="3" />
      <circle cx="33" cy="28" r="3" />
      <path d="M24 18l-7 8M24 18l7 8M17 28h14" />
    </>,
  ];
  return (
    <svg className="brand-icon" viewBox="0 0 48 48" aria-hidden="true">
      {marks[k]}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="attn-page">
      <header className="site-header">
        <a href="#hero" className="brand">
          ATTN<span>!</span>
        </a>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#founder">About</a>
          <a href="#services">Services</a>
          <a href="#proof">Results</a>
          <a href="#lead-magnet">Resources</a>
        </nav>
        <label
          htmlFor="nav-toggle"
          className="nav-burger"
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </label>
        <a className="nav-cta" href="#final-cta">
          Book Strategy Call
        </a>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section id="hero" className="section hero dark-section">
          <div className="hero-bg-lines" />
          <div className="hero-grid container">
            <div className="hero-copy">
              <h1 className="sr-only">
                Back to the Future — Your business. Our mission.
              </h1>
              <div className="video-shell hero-poster">
                <video
                  className="hero-video"
                  controls
                  poster="/attn/hero/hero-video-cover.png"
                >
                  <source src="/attn/hero/hero-video.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="hero-support">
                We blend data, creativity and cutting-edge strategy to take your
                brand from where it is,{" "}
                <strong>to where it&rsquo;s going.</strong>
              </p>
            </div>

            <aside className="form-block hero-form" aria-label="Strategy call form">
              <FormFrame />
              <h3>
                Book your free
                <br />
                strategy call
              </h3>
              <p className="form-sub">Let&rsquo;s build what&rsquo;s next.</p>
              <form className="lead-form">
                <div className="form-row two-col">
                  <input type="text" name="full_name" placeholder="Full Name" />
                  <input type="email" name="email" placeholder="Email Address" />
                </div>
                <input type="tel" name="phone" placeholder="Phone Number" />
                <select name="monthly_revenue" defaultValue="">
                  <option value="">Monthly Revenue</option>
                  <option>$0–$25k</option>
                  <option>$25k–$100k</option>
                  <option>$100k–$250k</option>
                  <option>$250k+</option>
                </select>
                <input
                  type="text"
                  name="goal"
                  placeholder="What are you looking to achieve?"
                />
                <button type="submit" className="btn btn-orange hero-submit">
                  Book my free call
                </button>
              </form>
              <p className="privacy">🔒 We respect your privacy. No spam. Ever.</p>
            </aside>
          </div>
        </section>

        {/* ---------- FEATURED IN ---------- */}
        <section id="featured" className="featured-strip">
          <div className="container">
            <div className="featured-frame">
              <span className="featured-tab">As featured in</span>
              <div className="pubs">
                <span className="pub pub-serif">Forbes</span>
                <span className="pub pub-serif pub-entre">Entrepreneur</span>
                <span className="pub pub-serif pub-inc">
                  <span>Inc.</span>
                </span>
                <span className="pub pub-bi">
                  Business
                  <br />
                  Insider
                </span>
                <span className="pub pub-ml">Marketing Land</span>
                <span className="pub pub-yahoo">
                  <span className="yh">
                    yahoo<b>!</b>
                  </span>
                  <small>finance</small>
                </span>
                <span className="pub pub-serif pub-ceo">
                  CEO
                  <small>Weekly</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- PAIN POINTS ---------- */}
        <section id="pain-points" className="section pain dark-section">
          <svg
            className="pain-frame"
            viewBox="0 0 1000 620"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="pf-line"
              d="M40,6 H960 L994,40 V580 L960,614 H40 L6,580 V40 Z"
            />
            <path className="pf-line pf-accent" d="M6,150 H40 M6,470 H40" />
            <path className="pf-line pf-accent" d="M960,150 H994 M960,470 H994" />
            <rect className="pf-dot" x="35" y="145" width="10" height="10" />
            <rect className="pf-dot" x="35" y="465" width="10" height="10" />
            <rect className="pf-dot" x="955" y="145" width="10" height="10" />
            <rect className="pf-dot" x="955" y="465" width="10" height="10" />
          </svg>
          <div className="container">
            <h2 className="section-title">
              As a business owner, do you <span>struggle</span> with...
            </h2>
            <div className="pain-grid">
              <article className="pain-card">
                <span className="pain-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="24" cy="24" r="16" />
                    <path d="M24 13v11l7 4" />
                    <path d="M24 8v3M24 37v3M8 24h3M37 24h3" />
                  </svg>
                </span>
                <h3>Lack of time</h3>
                <p>
                  Not enough hours
                  <br />
                  in the day to focus
                  <br />
                  on growth.
                </p>
              </article>
              <article className="pain-card">
                <span className="pain-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="18" cy="17" r="6" />
                    <circle cx="31" cy="17" r="6" />
                    <path d="M7 37c0-6 5-10 11-10s11 4 11 10" />
                    <path d="M27 27c6 0 11 4 11 10" />
                  </svg>
                </span>
                <h3>Inconsistent leads</h3>
                <p>
                  Unpredictable lead
                  <br />
                  flow that makes
                  <br />
                  planning impossible.
                </p>
              </article>
              <article className="pain-card">
                <span className="pain-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M24 6l14 5v9c0 9-6 16-14 20-8-4-14-11-14-20v-9z" />
                    <path d="M17 24l5 5 9-10" />
                  </svg>
                </span>
                <h3>Low trust &amp; visibility</h3>
                <p>
                  Struggling to stand out
                  <br />
                  and build trust in a
                  <br />
                  crowded market.
                </p>
              </article>
              <article className="pain-card">
                <span className="pain-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M8 40h32" />
                    <rect x="11" y="26" width="7" height="12" />
                    <rect x="22" y="18" width="7" height="20" />
                    <rect x="33" y="10" width="7" height="28" />
                  </svg>
                </span>
                <h3>Poor ROI</h3>
                <p>
                  Marketing spend
                  <br />
                  without measurable
                  <br />
                  results or return.
                </p>
              </article>
              <article className="pain-card">
                <span className="pain-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="24" cy="24" r="16" />
                    <path d="M18.5 18.5a5.5 5.5 0 1 1 7 5.3c-1.6.6-2.5 1.7-2.5 3.4v1.3" />
                    <circle cx="23" cy="34" r="0.6" />
                  </svg>
                </span>
                <h3>Unclear strategy</h3>
                <p>
                  No clear plan or direction
                  <br />
                  to scale with confidence
                  <br />
                  and consistency.
                </p>
              </article>
            </div>
            <p className="section-note">
              You&rsquo;re not alone. <span>We can change that.</span>
            </p>
          </div>
        </section>

        {/* ---------- PROOF ---------- */}
        <section id="proof" className="section proof light-section paper-section">
          <div className="container proof-grid">
            <div className="hud-frame proof-stat">
              <HudFrame />
              <p>
                You&rsquo;re not alone.
                <br />
                We have helped over 350+ businesses
                <br />
                to scale and generate
              </p>
              <strong className="mega-stat">$250M+</strong>
              <p>
                in combined revenue
                <br />
                for our clients
              </p>
            </div>
            <div className="hud-frame brand-panel">
              <HudFrame />
              <div className="brand-grid">
                {[
                  { n: "Brand One", i: <BrandIcon k={0} /> },
                  { n: "Brand Two", i: <BrandIcon k={1} /> },
                  { n: "Brand Three", i: <BrandIcon k={2} /> },
                  { n: "Brand Four", i: <BrandIcon k={3} /> },
                  { n: "Brand Five", i: <BrandIcon k={4} /> },
                  { n: "Brand Six", i: <BrandIcon k={5} /> },
                  { n: "Brand Seven", i: <BrandIcon k={6} /> },
                  { n: "Brand Eight", i: <BrandIcon k={7} /> },
                  { n: "Brand Nine", i: <BrandIcon k={8} /> },
                  { n: "Brand Ten", i: <BrandIcon k={9} /> },
                ].map((b) => (
                  <span className="brand-cell" key={b.n}>
                    {b.i}
                    <em>{b.n}</em>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section id="services" className="section services dark-section">
          <div className="container">
            <h2 className="section-title">
              Here&rsquo;s how we can <span>help you</span>
            </h2>
            <div className="service-grid">
              <article className="service-card">
                <CardFrame />
                <span className="service-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <circle cx="21" cy="27" r="13" />
                    <circle cx="21" cy="27" r="7" />
                    <circle cx="21" cy="27" r="1.6" />
                    <path d="M28 20l6-6M31 14h5v5" />
                  </svg>
                </span>
                <h3>Paid Media</h3>
                <p>
                  Meta Ads, Google Ads,
                  <br />
                  YouTube &amp; more
                </p>
              </article>
              <article className="service-card">
                <CardFrame />
                <span className="service-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M9 22h5v17H9z" />
                    <path d="M14 24l6-13c2.4-.3 4 1.2 3.7 3.7L22 22h11c2.2 0 3.6 2 3 4l-3 10c-.5 1.8-2 3-3.9 3H14z" />
                  </svg>
                </span>
                <h3>Social Media</h3>
                <p>
                  Content, community &amp;
                  <br />
                  brand storytelling
                </p>
              </article>
              <article className="service-card">
                <CardFrame />
                <span className="service-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <rect x="7" y="10" width="34" height="28" rx="2" />
                    <path d="M7 18h34" />
                    <path d="M11 14h.5M15 14h.5M19 14h.5" />
                    <path d="M12 24h9M12 29h14M12 34h11" />
                  </svg>
                </span>
                <h3>
                  Websites &amp;
                  <br />
                  Landing Pages
                </h3>
                <p>
                  Conversion-focused
                  <br />
                  design &amp; development
                </p>
              </article>
              <article className="service-card">
                <CardFrame />
                <span className="service-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <rect x="7" y="12" width="34" height="24" rx="2" />
                    <path d="M8 14l16 12 16-12" />
                  </svg>
                </span>
                <h3>Email Marketing</h3>
                <p>
                  Automations, ECRM &amp;
                  <br />
                  nurturing flows
                </p>
              </article>
              <article className="service-card">
                <CardFrame />
                <span className="service-icon">
                  <svg viewBox="0 0 48 48" aria-hidden="true">
                    <rect x="11" y="17" width="26" height="19" rx="4" />
                    <circle cx="24" cy="11" r="2.5" />
                    <path d="M24 13.5v3.5" />
                    <circle cx="19" cy="26" r="2" />
                    <circle cx="29" cy="26" r="2" />
                    <path d="M7 24v5M41 24v5" />
                  </svg>
                </span>
                <h3>AI &amp; Automation</h3>
                <p>
                  Smarter systems,
                  <br />
                  leads, outreach
                  <br />
                  &amp; more growth.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ---------- LEAD MAGNET ---------- */}
        <section id="lead-magnet" className="section lead-magnet light-section paper-section">
          <div className="container lead-grid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="book-cover"
              src="/attn/lead-magnet/growth-strategy-blueprint-book.png"
              alt="Growth Strategy Blueprint"
            />
            <div className="lead-copy">
              <p className="eyebrow orange">Free lead magnet download</p>
              <h2>
                Still not sure,
                <br />
                start here first!
              </h2>
              <p>
                Get our Growth Strategy Blueprint and discover the exact framework
                we use to help businesses scale.
              </p>
              <form className="download-form">
                <input type="email" placeholder="Enter your email address" />
                <button className="btn btn-orange" type="submit">
                  Download free guide
                </button>
              </form>
              <p className="privacy dark">
                🔒 We respect your privacy. No spam. Ever.
              </p>
            </div>
            <div className="annotation-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/attn/elements/arrow-orange.svg"
                alt=""
                className="note-arrow"
              />
              <p className="hand-note">
                A step-by-step blueprint
                <br />
                to help you grow with
                <br />
                clarity and confidence.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- TESTIMONIALS (empty photo slots — no assets yet) ---------- */}
        <section id="testimonials" className="section testimonials dark-section">
          <div className="container">
            <h2 className="section-title">
              What our <span>clients</span> say
            </h2>
            <div className="testimonial-grid">
              <article className="testimonial-card">
                <CardFrame />
                <div className="tphoto" />
                <div className="tbody">
                  <div className="stars">★★★★★</div>
                  <p className="quote">
                    &ldquo;Will and his team transformed our marketing. In 6
                    months, we saw our leads increase 3x and our sales pipeline
                    finally became predictable.&rdquo;
                  </p>
                  <p className="tname">
                    — James D., <span>Founder</span>
                  </p>
                </div>
              </article>
              <article className="testimonial-card">
                <CardFrame />
                <div className="tphoto" />
                <div className="tbody">
                  <div className="stars">★★★★★</div>
                  <p className="quote">
                    &ldquo;Their strategy, execution and attention to detail are
                    next level. We finally have a system that consistently drives
                    results.&rdquo;
                  </p>
                  <p className="tname">
                    — Sarah C., <span>CEO</span>
                  </p>
                </div>
              </article>
              <article className="testimonial-card">
                <CardFrame />
                <div className="tphoto" />
                <div className="tbody">
                  <div className="stars">★★★★★</div>
                  <p className="quote">
                    &ldquo;The best investment we&rsquo;ve made. Clear strategy,
                    conversion-focused and measurable results — game
                    changer.&rdquo;
                  </p>
                  <p className="tname">
                    — Matt, <span>Founder</span>
                  </p>
                </div>
              </article>
            </div>
            <div className="dots">
              <i />
              <i className="on" />
              <i />
            </div>
          </div>
        </section>

        {/* ---------- FOUNDER (empty photo slot — no asset yet) ---------- */}
        <section
          id="founder"
          className="section founder founder-section light-section paper-section"
        >
          <div className="container founder-grid">
            <div className="founder-photo-wrap">
              <FormFrame />
              <div className="founder-empty" />
            </div>
            <div>
              <h2>
                Who is <span>Will Giles?</span>
              </h2>
              <p>
                Will Giles is a growth marketing strategist helping brands turn
                bold ideas into measurable results.
              </p>
              <div className="credential-grid">
                <span className="cred">
                  <CredBadge k={0} />
                  <span className="cred-text">
                    <strong>15+ Years Experience</strong>
                    Driving scalable growth across multiple industries
                  </span>
                </span>
                <span className="cred">
                  <CredBadge k={1} />
                  <span className="cred-text">
                    <strong>Strategy First</strong>
                    Data-backed, human-focused results
                  </span>
                </span>
                <span className="cred">
                  <CredBadge k={2} />
                  <span className="cred-text">
                    <strong>Real World Experience</strong>
                    From startup hustle to global brands
                  </span>
                </span>
                <span className="cred">
                  <CredBadge k={3} />
                  <span className="cred-text">
                    <strong>Partner, Not Supplier</strong>
                    We&rsquo;re in your corner for the long run
                  </span>
                </span>
              </div>
              <div className="founder-note-row">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/attn/elements/arrow-blue.svg"
                  alt=""
                  className="note-arrow founder-arrow"
                />
                <p className="founder-note">Let&rsquo;s build what&rsquo;s next.</p>
              </div>
            </div>
            <div className="founder-cta">
              <a className="btn btn-orange founder-btn" href="#final-cta">
                Book my free call
              </a>
              <p className="privacy dark founder-privacy">
                🔒 We respect your privacy. No spam. Ever.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section id="final-cta" className="section final-cta dark-section">
          <div className="container final-form-wrap">
            <FormFrame />
            <h2>
              Let&rsquo;s build <span>what&rsquo;s next.</span>
            </h2>
            <p className="final-sub">Your future customers are waiting</p>
            <form className="lead-form">
              <div className="form-row four-col">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <select defaultValue="">
                  <option value="">Monthly Revenue</option>
                  <option>$0–$25k</option>
                  <option>$25k–$100k</option>
                  <option>$100k–$250k</option>
                  <option>$250k+</option>
                </select>
              </div>
              <div className="form-row final-row">
                <input type="text" placeholder="What are you looking to achieve?" />
                <button className="btn btn-orange hero-submit" type="submit">
                  Book my free call
                </button>
              </div>
            </form>
            <p className="privacy">🔒 We respect your privacy. No spam. Ever.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer dark-section">
        <div className="container footer-grid">
          <a href="#hero" className="brand">
            ATTN<span>!</span>
          </a>
          <p>Growth marketing for the future.</p>
          <p className="tagline">Where analog meets digital.</p>
        </div>
      </footer>
    </div>
  );
}
