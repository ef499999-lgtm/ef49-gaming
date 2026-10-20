/* EF49 game directory. External HTML5 games remain hosted by their publisher. */
const GAME_BASE = 'https://mashukui.github.io/web-games/';
const games = [
 ['Ant Flap','ant-flap','Arcade','🐜','Tap to flap through the branches.'],
 ['Ant Jump','ant-jump','Arcade','🦗','Bounce upward across springy platforms.'],
 ['Block Drop','block-drop','Puzzle','🧊','Stack falling blocks and clear rows.'],
 ['Breakout','breakout','Arcade','🧱','Smash bricks with paddle-and-ball action.'],
 ['Paddle Duel','paddle-duel','Arcade','🏓','A classic paddle duel against AI.'],
 ['Stack Tower','stack-tower','Arcade','🏗️','Stack blocks as high as you can.'],
 ['Whack-a-Mole','whack-a-mole','Arcade','🔨','Test your reflexes in a 60-second challenge.'],
 ['Snake','snake','Classic','🐍','Eat, grow, and avoid your own tail.'],
 ['Tic Tac Toe','tic-tac-toe','Classic','⭕','Three in a row against AI or a friend.'],
 ['Connect Four','connect-four','Classic','🔴','Connect four discs before your opponent.'],
 ['2048','2048','Puzzle','🔢','Merge tiles to reach 2048.'],
 ['Minesweeper','minesweeper','Puzzle','💣','Clear the board without hitting a mine.'],
 ['Memory Match','memory-match','Puzzle','🃏','Flip cards and find matching pairs.'],
 ['Star Defender','star-defender','Action','🚀','Shoot waves of enemies and survive.'],
 ['Dino Run','dino-run','Action','🦖','Jump obstacles in an endless desert run.'],
 ['Piano Tap','piano-tap','Arcade','🎹','Tap the right tiles before they pass.'],
 ['Cross Road','cross-road','Arcade','🐸','Dodge traffic and hop across the river.'],
 ['Slide Puzzle','slide-puzzle','Puzzle','🧩','Put the numbered tiles back in order.'],
 ['Fruit Slice','fruit-slice','Action','🍉','Slice fruit and avoid the bombs.'],
 ['Bubble Shooter','bubble-shooter','Arcade','🫧','Match bubbles and clear the board.'],
 ['Sudoku','sudoku','Puzzle','🔟','Solve a classic number logic puzzle.'],
 ['Merge Drop','merge-drop','Puzzle','🍉','Drop and merge matching fruit.'],
 ['Water Sort','water-sort','Puzzle','🧪','Sort coloured liquids into tubes.'],
 ['Slingshot','slingshot','Action','🏹','Aim, pull back, and hit the target.'],
 ['Helix Drop','helix-drop','Action','🌀','Rotate the tower and guide the ball down.'],
 ['Gem Match','gem-match','Puzzle','💎','Match gems and chain cascades.'],
 ['Maze Muncher','maze-muncher','Arcade','🟡','Collect dots while avoiding ghosts.'],
 ['Air Hockey','air-hockey','Arcade','🏒','Drag your mallet and score goals.'],
 ['Reversi','reversi','Classic','⚪','Flip your opponent’s discs to win.'],
 ['Battleship','battleship','Classic','🚢','Find the hidden enemy fleet.'],
 ['Sokoban','sokoban','Puzzle','📦','Push every crate onto its target.'],
 ['Lights Out','lights-out','Puzzle','💡','Switch off every light on the board.'],
 ['Hanoi','hanoi','Puzzle','🗼','Move the tower one disk at a time.'],
 ['Pipe Connect','pipe-connect','Puzzle','🔧','Rotate pipes to connect the flow.'],
 ['Rush Hour','rush-hour','Puzzle','🚗','Move cars to clear the exit route.'],
 ['Mahjong Link','mahjong-link','Puzzle','🀄','Pair matching tiles with a clear path.'],
 ['Nonogram','nonogram','Puzzle','🎨','Reveal a picture using number clues.'],
 ['Checkers','checkers','Classic','🔵','Capture pieces and crown your kings.'],
 ['Snakes and Ladders','snakes-ladders','Classic','🎲','Race to square 100.'],
 ['Hoop Shot','hoop-shot','Action','🏀','Shoot hoops and build a combo.'],
 ['Mini Golf','mini-golf','Action','⛳','Putt through nine custom holes.'],
 ['Helicopter','helicopter','Arcade','🚁','Fly through a narrowing cave.'],
 ['Balloon Pop','balloon-pop','Arcade','🎈','Pop balloons and avoid bombs.'],
 ['Simon Says','simon-says','Arcade','🎵','Repeat the growing light sequence.'],
 ['Gomoku','gomoku','Classic','⚫','Get five in a row on the board.'],
 ['Mancala','mancala','Classic','🫘','Sow seeds and capture your opponent’s pits.'],
 ['Bowling','bowling','Action','🎳','Aim your throw and chase a perfect score.'],
 ['Penalty Kick','penalty-kick','Action','⚽','Beat the keeper in a shootout.'],
 // Two additional entries from the same publisher collection: included as extra playable choices.
 ['Neon Pong','local:games/neon-pong.html','Arcade','🏓','Play a neon paddle duel against the computer.'],
 ['Reflex Rush','local:games/reflex-rush.html','Action','⚡','Test your reaction speed in a quick challenge.'],
 ['Neon Lane Runner','local:games/neon-runner.html','Action','🏃','A fast 3-lane endless runner with swipes, jumps, slides and coins.'],
 ['Fruit Tap','local:games/fruit-tap.html','Arcade','🍓','Tap the falling fruit before it hits the ground.'],
 ['Orbit Dodge','local:games/orbit-dodge.html','Action','🪐','Move around the orbit and dodge incoming space rocks.'],
 ['Pocket Basketball','local:games/pocket-basketball.html','Sports','🏀','Swipe or tap to shoot hoops on your phone or computer.']
].map(([title,slug,category,emoji,description],index)=>({title,slug,category,emoji,description,index}));

const grid=document.getElementById('gameGrid');
const search=document.getElementById('search');
const count=document.getElementById('count');
const empty=document.getElementById('emptyState');
const resultLabel=document.getElementById('resultLabel');
const sort=document.getElementById('sort');
let activeCategory='All';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function urlFor(game){if(game.slug.startsWith('local:'))return game.slug.slice(6);return `${GAME_BASE}${game.slug}/`;}
function render(){
 const q=search.value.trim().toLowerCase();
 let filtered=games.filter(g=>(activeCategory==='All'||g.category===activeCategory)&&(`${g.title} ${g.category} ${g.description}`.toLowerCase().includes(q)));
 if(sort.value==='az')filtered.sort((a,b)=>a.title.localeCompare(b.title));else filtered.sort((a,b)=>a.index-b.index);
 count.textContent=filtered.length;resultLabel.textContent=`Showing ${filtered.length} of ${games.length} games`;empty.hidden=filtered.length>0;
 grid.innerHTML=filtered.map((g,i)=>`<article class="game-card" style="animation-delay:${Math.min(i*12,180)}ms"><div class="cover-wrap"><span class="game-number">EF49 · ${String(g.index+1).padStart(2,'0')}</span><span class="game-emoji" aria-hidden="true">${g.emoji}</span><span class="genre-pill">${esc(g.category)}</span></div><div class="card-info"><h3 class="card-title" title="${esc(g.title)}">${esc(g.title)}</h3><p class="card-desc">${esc(g.description)}</p><a class="play-button" href="${urlFor(g)}" target="_blank" rel="noopener noreferrer" aria-label="Play ${esc(g.title)} in a new tab">▶ &nbsp; PLAY NOW</a></div></article>`).join('');
}
document.querySelectorAll('.category').forEach(button=>button.addEventListener('click',()=>{activeCategory=button.dataset.category;document.querySelectorAll('.category').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});render();document.getElementById('games').scrollIntoView({behavior:'smooth',block:'start'});}));
search.addEventListener('input',render);sort.addEventListener('change',render);document.getElementById('year').textContent=new Date().getFullYear();document.getElementById('statCategories').textContent=new Set(games.map(g=>g.category)).size;render();
