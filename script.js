/* script.js
   Semua style, markup, dan logika ada di sini.
   Pastikan file: index.html (root #app), logocwu.jpg, cwugrup.png, ig.jpg, tiktok.jpg, wa.jpg berada di folder yang sama.
*/

/* ================== DATA ================== */
const dataLinks = {
  instagram: 'https://www.instagram.com/clubwirausaha.unuja?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  tiktok:    'https://www.tiktok.com/@cwu.unuja?is_from_webapp=1&sender_device=pct',
  whatsapp:  'https://whatsapp.com/channel/0029Vb6W0kvFSAsvm6ozaY36'
};

const dataHandles = {
  instagram: '@Clubwirausaha.unuja',
  tiktok:    '@CWU_UNUJA',
  whatsapp:  'CLUB WIRAUSAHA UNUJA'
};

/* ================== STYLE ================== */
const style = document.createElement('style');
style.textContent = `
:root{
  --bg1:#071029; --bg2:#041428;
  --accent:#6ee7b7; --accent-2:#7dd3fc;
  --glass: rgba(255,255,255,0.02);
  --glass-border: rgba(255,255,255,0.08);
  --radius:16px; --card-blur:8px; --shadow: 0 10px 30px rgba(2,6,23,0.6);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
}
*{box-sizing:border-box; -webkit-tap-highlight-color: transparent;}
html,body{height:100%; margin:0;}
body{
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:28px;
  background: radial-gradient(1000px 400px at 10% 10%, rgba(125,211,252,0.08), transparent),
              linear-gradient(180deg,var(--bg1),var(--bg2));
  color:#e6f0ff;
  -webkit-font-smoothing:antialiased;
  overflow:hidden;
}
.app-root{width:100%; max-width:980px; display:grid; grid-template-columns: 1fr 380px; gap:28px; align-items:center;}
@media (max-width:880px){ .app-root{grid-template-columns:1fr; padding:0 8px;} }
.hero{
  padding:24px; border-radius:var(--radius);
  background: linear-gradient(135deg, rgba(125,211,252,0.03), rgba(110,231,183,0.02));
  border:1px solid rgba(125,211,252,0.06);
  box-shadow:var(--shadow);
  backdrop-filter: blur(var(--card-blur));
  position:relative; overflow:hidden;
}
.top-row{display:flex;gap:12px;align-items:center;margin-bottom:12px}
.badge{display:inline-flex;gap:8px;align-items:center;background:rgba(255,255,255,0.03);padding:6px 10px;border-radius:999px;font-weight:600;font-size:13px;border:1px solid rgba(255,255,255,0.03)}
.hero .title{font-size:28px;line-height:1.05;margin:6px 0 6px;font-weight:700}
.hero .sub{margin:0 0 14px 0; opacity:0.8;font-size:14px}
.preview{
  display:flex; flex-direction:column; align-items:center; gap:12px; margin-bottom:12px;
}
.logo-img{
  width:120px; height:120px; border-radius:50%; object-fit:cover; border:2px solid rgba(255,255,255,0.12);
  box-shadow: 0 8px 18px rgba(2,6,23,0.5);
}
.title-main{font-size:18px;font-weight:700; margin-top:6px}
.title-sub{font-size:15px; opacity:0.9}
.banner-img{width:100%; border-radius:12px; max-height:220px; object-fit:cover; box-shadow:0 8px 24px rgba(2,6,23,0.55)}
.links{
  padding:18px; border-radius:var(--radius);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border:1px solid var(--glass-border);
  backdrop-filter: blur(10px) saturate(120%);
  min-height:220px; display:flex; flex-direction:column; gap:12px;
}
.link-card{
  display:flex; align-items:center; gap:14px; padding:12px; border-radius:12px;
  border:1px solid rgba(255,255,255,0.04); background: var(--glass);
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}
.link-card:hover{ transform:translateY(-6px); box-shadow: 0 12px 30px rgba(2,6,23,0.6); border-color: rgba(125,211,252,0.12) }
.logo-wrap{width:56px;height:56px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.03)}
.logo-wrap img{width:36px;height:36px;object-fit:contain;border-radius:8px}
.meta{flex:1; min-width:0}
.meta .name{font-weight:700}
.meta .handle{font-size:13px; opacity:0.75}
.btn{
  padding:10px 14px; border-radius:10px; border:none; cursor:pointer;
  background: linear-gradient(90deg,var(--accent),var(--accent-2));
  color:#022; font-weight:800; display:inline-flex; align-items:center; gap:8px;
  box-shadow:0 6px 18px rgba(125,211,252,0.12);
}
.btn:active{transform:translateY(2px)}
.btn:focus{outline:none}
.small-note{font-size:13px; opacity:0.75; margin-top:auto; display:flex; align-items:center; justify-content:space-between; gap:8px}
.rings{position:absolute; right:-80px; top:-60px; width:420px; height:420px; pointer-events:none; opacity:0.12}
.ring{position:absolute;border-radius:50%;border:1px solid rgba(125,211,252,0.14); filter:blur(6px)}
.r1{width:360px;height:360px; left:10px; top:20px}
.r2{width:260px;height:260px; left:80px; top:80px}
.r3{width:180px;height:180px; left:140px; top:160px}
`;
document.head.appendChild(style);

/* ================== BUILD MARKUP ================== */
const root = document.getElementById('app') || (function(){ 
  const d = document.createElement('div'); 
  d.id='app'; 
  document.body.appendChild(d); 
  return d; 
})();
root.innerHTML = '';

const appRoot = document.createElement('div');
appRoot.className = 'app-root';

/* HERO */
const hero = document.createElement('section');
hero.className = 'hero';
const topRow = document.createElement('div');
topRow.className = 'top-row';
const badge = document.createElement('div');
badge.className = 'badge';
badge.textContent = '✨ Club Wirausaha UNUJA';
topRow.appendChild(badge);
const topRightNote = document.createElement('div');
topRightNote.style.opacity = '0.75';
topRightNote.style.fontSize = '13px';
topRightNote.style.marginLeft = 'auto';
topRightNote.textContent = 'Untuk berbagi cepat — tekan tombol';
topRow.appendChild(topRightNote);
hero.appendChild(topRow);
const titleMain = document.createElement('h2');
titleMain.className = 'title';
titleMain.textContent = 'Club Wirausaha UNUJA';
hero.appendChild(titleMain);
const sub = document.createElement('p');
sub.className = 'sub';
sub.textContent = 'Temui akun resmi kami';
hero.appendChild(sub);
const preview = document.createElement('div');
preview.className = 'preview';
const logoImg = document.createElement('img');
logoImg.className = 'logo-img';
logoImg.src = 'logocwu.jpg';
preview.appendChild(logoImg);
const grupImg = document.createElement('img');
grupImg.className = 'banner-img';
grupImg.src = 'cwugrup.png';
preview.appendChild(grupImg);
const titleUnderLogo = document.createElement('div');
titleUnderLogo.className = 'title-main';
titleUnderLogo.textContent = 'Club Wirausaha UNUJA';
preview.appendChild(titleUnderLogo);
const titleSmall = document.createElement('div');
titleSmall.className = 'title-sub';
titleSmall.textContent = 'Temui akun resmi kami';
preview.appendChild(titleSmall);
hero.appendChild(preview);
const smallNote = document.createElement('div');
smallNote.className = 'small-note';
smallNote.innerHTML = '<span></span>';
hero.appendChild(smallNote);
const rings = document.createElement('div');
rings.className = 'rings';
rings.innerHTML = '<div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div>';
hero.appendChild(rings);

/* LINKS */
const links = document.createElement('aside');
links.className = 'links';
links.setAttribute('aria-label', 'Link akun Club Wirausaha UNUJA');

/* ================== ICONS pakai IMG ================== */
function imgIcon(name){
  if(name === 'instagram') return `<img src="ig.jpg" alt="Instagram">`;
  if(name === 'tiktok')    return `<img src="tiktok.jpg" alt="TikTok">`;
  if(name === 'whatsapp')  return `<img src="wa.jpg" alt="WhatsApp">`;
  return '';
}

/* ================== CARDS ================== */
function makeLinkCard(key, appName, handle){
  const wrap = document.createElement('div');
  wrap.className = 'link-card';

  const logoWrap = document.createElement('div');
  logoWrap.className = 'logo-wrap';
  logoWrap.innerHTML = imgIcon(key);

  const meta = document.createElement('div');
  meta.className = 'meta';
  const nm = document.createElement('div'); 
  nm.className = 'name'; 
  nm.textContent = appName;
  const hd = document.createElement('div'); 
  hd.className = 'handle'; 
  hd.id = key + '-handle'; 
  hd.textContent = handle;
  meta.appendChild(nm); 
  meta.appendChild(hd);

  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.type = 'button';
  btn.dataset.linkKey = key;

  // Semua tombol tanpa panah
  if(key === 'whatsapp'){
    btn.textContent = 'Ikuti';   // untuk saluran WhatsApp
  } else {
    btn.textContent = 'Pergi';   // untuk IG & TikTok
  }

  btn.addEventListener('click', ()=> {
    const url = dataLinks[key];
    if(!url){ alert('Link belum diatur: ' + key); return; }
    btn.animate([{transform:'translateY(0)'},{transform:'translateY(-6px)'},{transform:'translateY(0)'}],{duration:260});
    window.open(url, '_blank');
  });

  wrap.appendChild(logoWrap);
  wrap.appendChild(meta);
  wrap.appendChild(btn);
  return wrap;
}

links.appendChild(makeLinkCard('instagram','Instagram', dataHandles.instagram));
links.appendChild(makeLinkCard('tiktok','TikTok', dataHandles.tiktok));
links.appendChild(makeLinkCard('whatsapp','Saluran WhatsApp', dataHandles.whatsapp));

/* assemble */
appRoot.appendChild(hero);
appRoot.appendChild(links);
root.appendChild(appRoot);

/* accessibility */
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' && document.activeElement && document.activeElement.classList.contains('btn')){
    document.activeElement.click();
  }
});
logoImg.addEventListener('error', ()=>{ logoImg.style.display = 'none'; });
grupImg.addEventListener('error', ()=>{ grupImg.style.display = 'none'; });
