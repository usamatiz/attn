/* BuildVideo — ATTN! funnel live buildout, IG story 1080×1920 */
const { Stage, Sprite, useTime, Easing, interpolate, clamp } = window;

const INK = '#202020', ORANGE = '#fe6700', PAPER = '#f0eee9';
const MONO = "'Share Tech Mono', monospace";
const MARKER = "'Permanent Marker', cursive";
const ANTON = "'Anton', sans-serif";

/* ---------- wireframe primitives ---------- */
const Stub = ({ w = '100%', h = 14, c = '#d9d9d9', mt = 0, center }) => (
  <div style={{ width: w, height: h, background: c, borderRadius: h / 2, marginTop: mt, marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }} />
);
const XBox = ({ h, children, style }) => (
  <div style={{
    position: 'relative', height: h, border: '2.5px solid #555', background: '#fafafa',
    backgroundImage: 'linear-gradient(to top right,transparent calc(50% - 1.2px),#bbb calc(50% - 1.2px),#bbb calc(50% + 1.2px),transparent calc(50% + 1.2px)),linear-gradient(to bottom right,transparent calc(50% - 1.2px),#bbb calc(50% - 1.2px),#bbb calc(50% + 1.2px),transparent calc(50% + 1.2px))',
    ...style
  }}>{children}</div>
);
const Play = () => (
  <div style={{ position: 'absolute', left: '50%', top: '50%', width: 64, height: 64, margin: '-32px 0 0 -32px', border: '3px solid #555', borderRadius: '50%' }}>
    <div style={{ position: 'absolute', left: 24, top: 17, borderLeft: '20px solid #555', borderTop: '12px solid transparent', borderBottom: '12px solid transparent' }} />
  </div>
);
const Btn = ({ label, style }) => (
  <div style={{ height: 46, background: ORANGE, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', font: '18px ' + MONO, color: '#fff', letterSpacing: 2, ...style }}>{label}</div>
);
const Inp = ({ style }) => <div style={{ height: 40, border: '2px solid #999', borderRadius: 4, background: '#fff', ...style }} />;
const Logos = ({ n }) => (
  <div style={{ display: 'flex', gap: 8 }}>{Array.from({ length: n }).map((_, i) => <div key={i} style={{ flex: 1, height: 44, border: '1.5px dashed #999', background: '#f2f2f2' }} />)}</div>
);
const Circle = ({ s = 52, style }) => <div style={{ width: s, height: s, border: '2.5px solid #555', borderRadius: '50%', margin: '0 auto', ...style }} />;
const ARCHIVO = "'Archivo', sans-serif";
const LOGOFONT = "'Archivo Black', sans-serif";
const Logo = ({ size = 40, color = INK }) => (
  <div style={{ fontFamily: LOGOFONT, fontSize: size, color, lineHeight: 1, letterSpacing: '-0.02em' }}>ATTN<span style={{ color: ORANGE }}>!</span></div>
);
const Note = ({ children }) => <div style={{ font: '17px ' + MARKER, color: '#c65200', lineHeight: 1.25, marginTop: 8 }}>{children}</div>;

function Tag({ t0, label, style }) {
  const t = useTime();
  if (t < t0) return null;
  const p = clamp((t - t0) / 0.3, 0, 1), e = Easing.easeOutCubic(p);
  return (
    <div style={{
      position: 'absolute', top: 10, left: 10, fontFamily: MONO, fontSize: 18, background: ORANGE, color: '#fff',
      padding: '4px 10px', letterSpacing: 1, opacity: p, transform: `scale(${1.9 - 0.9 * e}) rotate(${-7 + 5 * e}deg)`, transformOrigin: 'left top', ...style
    }}>{label}</div>
  );
}
function Pop({ t0, children }) {
  const t = useTime();
  const p = clamp((t - t0) / 0.5, 0, 1);
  if (p <= 0) return null;
  const e = Easing.easeOutBack(p);
  return <div style={{ opacity: clamp(p * 2.5, 0, 1), transform: `translateY(${(1 - e) * 30}px) scale(${0.97 + 0.03 * e})`, transformOrigin: 'top center' }}>{children}</div>;
}

/* ---------- sections of the v2.6 funnel ---------- */
const SEC = 'padding:18px 26px;border-bottom:2px dashed rgba(0,0,0,.16)';
const secStyle = { padding: '18px 26px', borderBottom: '2px dashed rgba(0,0,0,.16)', display: 'flex', flexDirection: 'column', gap: 10, boxSizing: 'border-box' };

function buildSections() {
  return [
    { h: 74, name: 'NAV', el: (t0) => (
      <div style={{ height: 74, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 26px', borderBottom: '2.5px solid ' + INK, boxSizing: 'border-box' }}>
        <Logo size={32} />
        <div style={{ width: 32, height: 4, background: INK, boxShadow: '0 9px 0 ' + INK + ', 0 18px 0 ' + INK, marginBottom: 18 }} />
      </div>) },
    { h: 140, name: 'HERO COPY', el: (t0) => (
      <div style={{ ...secStyle, height: 140 }}>
        <Stub w="86%" h={22} c={INK} /><Stub w="58%" h={22} c={INK} /><Stub w="44%" h={18} c={ORANGE} />
      </div>) },
    { h: 330, name: 'SLOT 1', el: (t0) => (
      <div style={{ ...secStyle, height: 330 }}>
        <XBox h={250}><Tag t0={t0 + 0.4} label="SLOT 1" /><Play /></XBox>
        <Note>hero storm scene · 1120×620 · crop-safe centre</Note>
      </div>) },
    { h: 82, name: 'INTRO', el: () => (
      <div style={{ ...secStyle, height: 82 }}><Stub w="92%" /><Stub w="70%" /></div>) },
    { h: 320, name: 'FORM', el: () => (
      <div style={{ ...secStyle, height: 320, background: '#f7f7f7' }}>
        <Stub w="64%" h={18} c={INK} center /><Stub w="36%" center />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}><Inp /><Inp /><Inp /><Inp /></div>
        <Inp /><Btn label="BOOK MY CALL" />
      </div>) },
    { h: 130, name: 'SLOT 4', el: (t0) => (
      <div style={{ ...secStyle, height: 130, position: 'relative' }}>
        <div style={{ font: '15px ' + MONO, color: '#555', textAlign: 'center', letterSpacing: 2 }}>AS FEATURED IN</div>
        <Logos n={6} /><Tag t0={t0 + 0.4} label="SLOT 4" style={{ top: 'auto', bottom: 10, right: 10, left: 'auto' }} />
      </div>) },
    { h: 170, name: 'PAIN ×4', el: () => (
      <div style={{ ...secStyle, height: 170 }}>
        <Stub w="72%" h={18} c={INK} center />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
          {Array.from({ length: 4 }).map((_, i) => <div key={i}><Circle /><Stub mt={8} /><Stub w="66%" mt={6} center /></div>)}
        </div>
      </div>) },
    { h: 230, name: 'SLOT 5', el: (t0) => (
      <div style={{ ...secStyle, height: 230, position: 'relative', textAlign: 'center' }}>
        <Stub w="78%" h={18} c={INK} center />
        <div style={{ font: '58px ' + MARKER, color: ORANGE }}>$250M+</div>
        <Logos n={6} /><Tag t0={t0 + 0.4} label="SLOT 5" style={{ top: 'auto', bottom: 10, right: 10, left: 'auto' }} />
      </div>) },
    { h: 150, name: 'SERVICES ×5', el: () => (
      <div style={{ ...secStyle, height: 150 }}>
        <Stub w="60%" h={18} c={INK} center />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 10 }}>
          {Array.from({ length: 5 }).map((_, i) => <div key={i}><Circle s={44} /><Stub mt={8} /></div>)}
        </div>
      </div>) },
    { h: 240, name: 'SLOT 3', el: (t0) => (
      <div style={{ ...secStyle, height: 240, flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
        <XBox h={196} style={{ width: 150, flex: 'none' }}><Tag t0={t0 + 0.4} label="SLOT 3" /></XBox>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Stub w="52%" c={ORANGE} /><Stub w="86%" h={18} c={INK} /><Stub w="94%" /><Stub w="70%" />
          <Inp /><Btn label="DOWNLOAD GUIDE" style={{ fontSize: 14 }} />
        </div>
      </div>) },
    { h: 300, name: 'TESTIMONIALS', el: (t0) => (
      <div style={{ ...secStyle, height: 300 }}>
        <Stub w="56%" h={18} c={INK} center />
        <XBox h={190}><Tag t0={t0 + 0.4} label="VIDEO" /><Play /></XBox>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}><Stub w={26} h={10} c="#999" /><Stub w={10} h={10} /><Stub w={10} h={10} /></div>
        <Note>testimonial videos — new section</Note>
      </div>) },
    { h: 250, name: 'SLOT 2', el: (t0) => (
      <div style={{ ...secStyle, height: 250, flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
        <XBox h={200} style={{ width: 170, flex: 'none', transform: 'rotate(-2deg)', boxShadow: '4px 4px 0 rgba(0,0,0,.12)' }}><Tag t0={t0 + 0.4} label="SLOT 2" /></XBox>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Stub w="68%" h={18} c={INK} /><Stub w="92%" /><Stub w="80%" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Circle s={22} style={{ margin: 0 }} /><Stub w="80%" />
            </div>))}
        </div>
      </div>) },
    { h: 230, name: 'FINAL CTA', el: () => (
      <div style={{ ...secStyle, height: 230, background: '#f7f7f7' }}>
        <Stub w="56%" h={18} c={INK} center />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}><Inp /><Inp /><Inp /><Inp /></div>
        <Btn label="BOOK MY CALL" />
      </div>) },
    { h: 66, name: 'FOOTER', el: () => (
      <div style={{ height: 66, background: INK, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 26px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo size={24} color="#fff" />
          <div style={{ font: '600 9px ' + ARCHIVO, color: 'rgba(255,255,255,.55)', letterSpacing: 1.2, lineHeight: 1.3 }}>GROWTH MARKETING<br />FOR THE FUTURE</div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>{Array.from({ length: 4 }).map((_, i) => <div key={i} style={{ width: 20, height: 20, border: '2px solid #888', borderRadius: '50%' }} />)}</div>
      </div>) },
  ];
}

const T_BUILD = 2.8, CADENCE = 1.05, VIEW = 1120;

/* ---------- scenes ---------- */
function Intro() {
  const t = useTime();
  const p1 = clamp((t + 0.05) / 0.35, 0, 1), e1 = Easing.easeOutBack(p1);
  const p2 = clamp((t - 1.0) / 0.4, 0, 1);
  const p3 = clamp((t - 1.5) / 0.4, 0, 1);
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 30 }}>
      <div style={{ opacity: p1, transform: `scale(${2 - e1}) rotate(${(1 - e1) * -8}deg)`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
        <div style={{ font: '150px ' + LOGOFONT, color: INK, lineHeight: 1, letterSpacing: '-0.02em' }}>ATTN<span style={{ color: ORANGE }}>!</span></div>
        <div style={{ font: '600 27px ' + ARCHIVO, color: 'rgba(32,32,32,.65)', letterSpacing: 7 }}>GROWTH MARKETING FOR THE FUTURE</div>
      </div>
      <div style={{ font: '64px ' + MARKER, color: '#c65200', opacity: p2, transform: `translateY(${(1 - Easing.easeOutCubic(p2)) * 30}px)` }}>the live build</div>
      <div style={{ font: '26px ' + MONO, color: 'rgba(32,32,32,.6)', letterSpacing: 3, opacity: p3 }}>FUNNEL v2.6 · WIREFRAME PASS</div>
    </div>
  );
}

function BuildScene() {
  const t = useTime();
  const sections = buildSections();
  const times = [T_BUILD], targets = [0];
  let cum = 0;
  sections.forEach((s, i) => {
    const t0 = T_BUILD + i * CADENCE;
    cum += s.h;
    times.push(t0 + 0.55);
    targets.push(Math.max(0, cum - VIEW));
  });
  const scroll = interpolate(times, targets, Easing.easeInOutCubic)(t);
  const pin = clamp((t - 2.55) / 0.5, 0, 1), ein = Easing.easeOutCubic(pin);
  const n = clamp(Math.floor((t - T_BUILD) / CADENCE) + 1, 0, sections.length);
  return (
    <div style={{ position: 'absolute', inset: 0, background: PAPER, opacity: pin }}>
      <div style={{ position: 'absolute', top: 96, left: 0, right: 0, textAlign: 'center', font: '30px ' + MONO, color: 'rgba(32,32,32,.6)', letterSpacing: 4 }}>
        LIVE BUILD — ATTN<span style={{ color: ORANGE }}>!</span> FUNNEL v2.6
      </div>
      <div style={{
        position: 'absolute', left: 190, top: 200, width: 700, height: 1310, border: '5px solid ' + INK, borderRadius: 48,
        background: '#fff', overflow: 'hidden', boxShadow: '10px 12px 0 rgba(0,0,0,.10)',
        transform: `translateY(${(1 - ein) * 80}px)`, boxSizing: 'border-box'
      }}>
        <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 130, height: 12, background: INK, borderRadius: 6 }} />
        </div>
        <div style={{ position: 'absolute', top: 44, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          <div style={{ transform: `translateY(${-scroll}px)` }}>
            {sections.map((s, i) => {
              const t0 = T_BUILD + i * CADENCE;
              return <Pop key={i} t0={t0}>{s.el(t0)}</Pop>;
            })}
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 120, left: 0, right: 0, textAlign: 'center', font: '30px ' + MONO, color: 'rgba(32,32,32,.55)', letterSpacing: 3 }}>
        BUILDING… {String(n).padStart(2, '0')}/{String(sections.length).padStart(2, '0')}
        <span style={{ color: ORANGE }}> ▮</span>
      </div>
    </div>
  );
}

function EndCard() {
  const t = useTime();
  const p0 = clamp((t - 18.9) / 0.6, 0, 1);
  const p1 = clamp((t - 19.4) / 0.5, 0, 1), e1 = Easing.easeOutCubic(p1);
  const p2 = clamp((t - 19.9) / 0.5, 0, 1), e2 = Easing.easeOutCubic(p2);
  const p3 = clamp((t - 20.6) / 0.5, 0, 1);
  const p4 = clamp((t - 21.4) / 0.5, 0, 1);
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#14131a', opacity: p0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 34, textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1.4px, transparent 1.4px)', backgroundSize: '7px 7px' }} />
      <div style={{ opacity: p1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ font: '68px ' + LOGOFONT, color: '#ece7da', lineHeight: 1, letterSpacing: '-0.02em' }}>ATTN<span style={{ color: ORANGE }}>!</span></div>
        <div style={{ font: '600 20px ' + ARCHIVO, color: 'rgba(236,231,218,.6)', letterSpacing: 5 }}>GROWTH MARKETING FOR THE FUTURE</div>
      </div>
      <div style={{ font: '150px ' + ANTON, fontStyle: 'italic', color: '#ece7da', lineHeight: 1.02, opacity: p1, transform: `translateY(${(1 - e1) * 40}px)` }}>
        BACK TO THE<br /><span style={{ color: ORANGE }}>FUTURE</span>
      </div>
      <div style={{ font: 'italic 58px ' + ANTON, color: '#ece7da', letterSpacing: 1, opacity: p2, transform: `translateY(${(1 - e2) * 30}px)` }}>
        YOUR BUSINESS. OUR MISSION.
      </div>
      <div style={{ font: '52px ' + MARKER, color: ORANGE, opacity: p3, transform: `rotate(-2deg)` }}>now booking free strategy calls</div>
      <div style={{ opacity: p4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
        <div style={{ font: '26px ' + MONO, color: '#F7A84D', letterSpacing: 5 }}>WHERE ANALOG MEETS DIGITAL</div>
        <div style={{ font: '30px ' + MONO, color: 'rgba(236,231,218,.55)', letterSpacing: 5 }}>ATTNAGENCY.CO</div>
      </div>
    </div>
  );
}

function Labeller({ children }) {
  const t = useTime();
  return <div data-screen-label={'t=' + Math.floor(t) + 's'} style={{ position: 'absolute', inset: 0 }}>{children}</div>;
}

function BuildVideo() {
  return (
    <Stage width={1080} height={1920} duration={24} background={PAPER}>
      <Labeller>
        <Sprite start={0} end={2.9}><Intro /></Sprite>
        <Sprite start={2.5} end={19.6}><BuildScene /></Sprite>
        <Sprite start={18.8} end={24}><EndCard /></Sprite>
      </Labeller>
    </Stage>
  );
}
window.BuildVideo = BuildVideo;
