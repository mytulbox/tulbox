var KEY = 'tulbox-' + WEEK_LABEL;
var done = {}, sel = 0;
try { done = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(done)); } catch (e) {} }
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

function render(){
  document.getElementById('weekLabel').textContent = WEEK_LABEL;
  var days = document.getElementById('days');
  days.innerHTML = WEEK.map(function(w,i){
    return '<button class="day'+(done[i]?' done':'')+'" role="tab" id="tab'+i+'" aria-selected="'+(i===sel)+'" data-i="'+i+'">'+
      '<span><b>'+esc(w.day)+'</b><small>'+esc(w.focus)+'</small></span><span class="tick"></span></button>';
  }).join('');
  var w = WEEK[sel];
  var count = Object.keys(done).filter(function(k){return done[k];}).length;
  document.getElementById('panel').setAttribute('aria-labelledby','tab'+sel);
  document.getElementById('panel').innerHTML =
    '<header><h3>'+esc(w.name)+'</h3><div class="meta"><span class="chip hot">'+w.mins+' min</span><span class="chip">'+esc(w.tier)+'</span><span class="chip">'+esc(w.focus)+'</span></div></header>'+
    '<p class="note">'+esc(w.note)+'</p>'+
    '<ol class="moves">'+w.moves.map(function(m,j){
      return '<li><span class="n">'+String(j+1).padStart(2,'0')+'</span><div class="m">'+esc(m[0])+'<span>'+esc(m[1])+'</span></div><span class="rx">'+esc(m[2])+'</span></li>';
    }).join('')+'</ol>'+
    '<div class="foot"><button class="btn'+(done[sel]?' ghost':'')+'" id="mark">'+(done[sel]?'Undo':'Mark done')+'</button>'+
    '<div class="week"><span>'+count+' of '+WEEK.length+' done</span><div class="bar"><i style="width:'+(count/WEEK.length*100)+'%"></i></div></div></div>';
}
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
render();
