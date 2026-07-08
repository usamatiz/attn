/* IGPreview — Build Video shown in-context as an Instagram-style story on a phone */
function IGPreview() {
  const { IOSDevice, BuildVideo } = window;
  const MONO = "'Share Tech Mono', monospace";
  const ANTON = "'Archivo Black', sans-serif";
  const seg = (fill) => (
    <div style={{ flex: 1, height: 2.5, borderRadius: 2, background: 'rgba(255,255,255,.35)', overflow: 'hidden' }}>
      <div style={{ width: fill, height: '100%', background: '#fff' }} />
    </div>
  );
  return (
    <div style={{ minHeight: '100vh', background: '#1a1916', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22, padding: '40px 20px', boxSizing: 'border-box' }}>
      <div style={{ font: '13px ' + MONO, color: 'rgba(216,210,196,.6)', letterSpacing: 2, textAlign: 'center' }}>
        STORY PREVIEW · 1080×1920 · 24s — press play in the bar · Share → Export → Video for the .mp4
      </div>
      <IOSDevice dark>
        <div style={{ position: 'relative', width: '100%', height: '100%', background: '#000' }}>
          <BuildVideo />
          {/* story chrome overlay */}
          <div style={{ position: 'absolute', left: 0, right: 0, top: 0, zIndex: 10, pointerEvents: 'none', padding: '58px 12px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', gap: 4 }}>{seg('42%')}{seg('0%')}{seg('0%')}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#fe6700', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: ANTON, fontSize: 19, color: '#fff', border: '1.5px solid rgba(255,255,255,.8)', boxSizing: 'border-box' }}>!</div>
              <div style={{ font: '600 13.5px system-ui, sans-serif', color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,.5)' }}>attnagency</div>
              <div style={{ font: '13px system-ui, sans-serif', color: 'rgba(255,255,255,.65)' }}>2m</div>
              <div style={{ marginLeft: 'auto', font: '400 20px system-ui, sans-serif', color: '#fff', lineHeight: 1 }}>×</div>
            </div>
          </div>
          <div style={{ position: 'absolute', left: 12, right: 12, bottom: 58, zIndex: 10, pointerEvents: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ flex: 1, height: 40, borderRadius: 22, border: '1.2px solid rgba(255,255,255,.55)', display: 'flex', alignItems: 'center', padding: '0 16px', font: '13.5px system-ui, sans-serif', color: 'rgba(255,255,255,.75)' }}>Send message</div>
            <div style={{ font: '22px system-ui, sans-serif', color: '#fff' }}>♡</div>
            <div style={{ font: '19px system-ui, sans-serif', color: '#fff', transform: 'rotate(-20deg)' }}>➤</div>
          </div>
        </div>
      </IOSDevice>
    </div>
  );
}
window.IGPreview = IGPreview;
