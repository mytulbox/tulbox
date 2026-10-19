var KEY = 'tulbox-' + WEEK_LABEL;
var done = {}, sel = 0, tier = 'garage';
try { done = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
try { var t = localStorage.getItem('tulbox-tier'); if (TIERS[t]) tier = t; } catch (e) {}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

function renderTier(){
  document.getElementById('tierbar').innerHTML = Object.keys(TIERS).map(function(k){
    return '<button type="button" data-t="'+k+'" aria-pressed="'+(k===tier)+'">'+esc(TIERS[k].label)+'</button>';
  }).join('');
  document.getElementById('kit').textContent = 'You need: ' + TIERS[tier].kit;
}

function render(){
  document.getElementById('weekLabel').textContent = WEEK_LABEL;
  document.getElementById('days').innerHTML = WEEK.map(function(w,i){
    return '<button class="day'+(done[i]?' done':'')+'" role="tab" id="tab'+i+'" aria-selected="'+(i===sel)+'" data-i="'+i+'">'+
      '<span><b>'+esc(w.day)+'</b><small>'+esc(w.focus)+'</small></span><span class="tick"></span></button>';
  }).join('');
  var w = WEEK[sel];
  var moves = w[tier] || w.moves || [];
  var count = Object.keys(done).filter(function(k){return done[k];}).length;
  document.getElementById('panel').setAttribute('aria-labelledby','tab'+sel);
  document.getElementById('panel').innerHTML =
    '<header><h3>'+esc(w.name)+'</h3><div class="meta"><span class="chip hot">'+w.mins+' min</span><span class="chip">'+esc(TIERS[tier].label)+'</span><span class="chip">'+esc(w.focus)+'</span></div></header>'+
    '<p class="note">'+esc(w.note)+'</p>'+
    '<ol class="moves">'+moves.map(function(m,j){
      return '<li><span class="n">'+String(j+1).padStart(2,'0')+'</span><div class="m">'+esc(m[0])+'<span>'+esc(m[1])+'</span></div><span class="rx">'+esc(m[2])+'</span></li>';
    }).join('')+'</ol>'+
    '<div class="foot"><button class="btn'+(done[sel]?' ghost':'')+'" id="mark">'+(done[sel]?'Undo':'Mark done')+'</button>'+
    '<div class="week"><span>'+count+' of '+WEEK.length+' done</span><div class="bar"><i style="width:'+(count/WEEK.length*100)+'%"></i></div></div></div>';
}
document.getElementById('tierbar').addEventListener('click', function(e){
  var b = e.target.closest('button'); if(!b) return;
  tier = b.dataset.t;
  try { localStorage.setItem('tulbox-tier', tier); } catch (err) {}
  renderTier(); render();
});
document.getElementById('days').addEventListener('click', function(e){
  var b = e.target.closest('.day'); if(!b) return;
  sel = +b.dataset.i; render(); document.getElementById('tab'+sel).focus();
});
document.getElementById('panel').addEventListener('click', function(e){
  if(e.target.id === 'mark'){ done[sel] = !done[sel]; save(); render(); document.getElementById('mark').focus(); }
});

document.getElementById('posts').innerHTML = POSTS.map(function(p){
  return '<a class="post" href="#journal"><div class="thumb" data-label="'+esc(p.art)+'"></div>'+
    '<div class="eyebrow"><span>'+esc(p.tag)+'</span><span>'+esc(p.date)+'</span></div>'+
    '<h3>'+esc(p.title)+'</h3><p>'+esc(p.text)+'</p></a>';
}).join('');

document.getElementById('form').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('msg').textContent = 'Template only. Connect an email service to collect signups.';
});
renderTier();
render();
