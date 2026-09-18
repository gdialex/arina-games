const entries=[
  {
    "id": "syberia",
    "title": "Syberia",
    "category": "love",
    "genre": "ПРИКЛЮЧЕНИЕ",
    "year": "2002",
    "note": "",
    "image": "assets/syberia.png",
    "url": "https://en.wikipedia.org/wiki/Syberia_(video_game)"
  },
  {
    "id": "syberia-2",
    "title": "Syberia 2",
    "category": "love",
    "genre": "ПРИКЛЮЧЕНИЕ",
    "year": "2004",
    "note": "",
    "image": "assets/syberia-2.jpg",
    "url": "https://en.wikipedia.org/wiki/Syberia_II"
  },
  {
    "id": "sims",
    "title": "The Sims",
    "category": "love",
    "genre": "СИМУЛЯТОР ЖИЗНИ",
    "year": "СЕРИЯ",
    "note": "",
    "image": "assets/sims.png",
    "url": "https://en.wikipedia.org/wiki/The_Sims"
  },
  {
    "id": "neighbours",
    "title": "Как достать соседа",
    "category": "love",
    "genre": "ГОЛОВОЛОМКА",
    "year": "2003",
    "note": "",
    "image": "assets/neighbours.png",
    "url": "https://en.wikipedia.org/wiki/Neighbours_from_Hell"
  },
  {
    "id": "nfs",
    "title": "Need for Speed",
    "category": "love",
    "genre": "ГОНКИ",
    "year": "СЕРИЯ",
    "note": "На обложке — Underground.",
    "image": "assets/nfs.jpg",
    "url": "https://en.wikipedia.org/wiki/Need_for_Speed"
  },
  {
    "id": "harry-potter",
    "title": "Гарри Поттер · 1–5",
    "category": "love",
    "genre": "МАГИЯ И ПРИКЛЮЧЕНИЯ",
    "year": "5 ЧАСТЕЙ",
    "note": "Пять приключений в Хогвартсе.",
    "image": "assets/harry-potter.png",
    "url": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone_(PC_video_game)",
    "parts": [
      {
        "title": "Философский камень",
        "url": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone_(PC_video_game)"
      },
      {
        "title": "Тайная комната",
        "url": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets_(video_game)"
      },
      {
        "title": "Узник Азкабана",
        "url": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban_(video_game)"
      },
      {
        "title": "Кубок огня",
        "url": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire_(video_game)"
      },
      {
        "title": "Орден Феникса",
        "url": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix_(video_game)"
      }
    ]
  },
  {
    "id": "worms-2",
    "title": "Worms 2",
    "category": "love",
    "genre": "ТАКТИКА",
    "year": "1997",
    "note": "Понравилось, но скорее на один раз.",
    "image": "assets/worms-2.jpg",
    "url": "https://en.wikipedia.org/wiki/Worms_2"
  },
  {
    "id": "nadia",
    "title": "Treasure of Nadia",
    "category": "love",
    "genre": "ПРИКЛЮЧЕНИЕ · 18+",
    "year": "2022",
    "note": "Интересны сюжет и секс-сцены как награда за прохождение.",
    "image": "assets/nadia.jpg",
    "url": "https://store.steampowered.com/app/1737100/"
  },
  {
    "id": "mario",
    "title": "Mario",
    "category": "okay",
    "genre": "ПЛАТФОРМЕР",
    "year": "СЕРИЯ",
    "note": "Играла — без явного отторжения.",
    "image": "assets/mario.png",
    "url": "https://en.wikipedia.org/wiki/Mario"
  },
  {
    "id": "duck-hunt",
    "title": "Duck Hunt",
    "category": "okay",
    "genre": "РЕТРО",
    "year": "1984",
    "note": "Играла — без явного отторжения.",
    "image": "assets/duck-hunt.jpg",
    "url": "https://en.wikipedia.org/wiki/Duck_Hunt"
  },
  {
    "id": "battle-city",
    "title": "Танчики на Dendy",
    "category": "okay",
    "genre": "АРКАДА",
    "year": "1985",
    "note": "Особенно вдвоём с кем-то.",
    "image": "assets/battle-city.jpg",
    "url": "https://en.wikipedia.org/wiki/Battle_City"
  },
  {
    "id": "heroes-3",
    "title": "Heroes of Might and Magic III",
    "category": "nope",
    "genre": "СТРАТЕГИЯ",
    "year": "1999",
    "note": "Примерно 3–4 часа игры — не зашло.",
    "image": "assets/heroes-3.jpg",
    "url": "https://en.wikipedia.org/wiki/Heroes_of_Might_and_Magic_III"
  },
  {
    "id": "quake-3",
    "title": "Quake III Arena",
    "category": "nope",
    "genre": "ШУТЕР",
    "year": "1999",
    "note": "Не особо понравилось.",
    "image": "assets/quake-3.jpg",
    "url": "https://en.wikipedia.org/wiki/Quake_III_Arena"
  },
  {
    "id": "mortal-kombat",
    "title": "Mortal Kombat",
    "category": "nope",
    "genre": "ФАЙТИНГ",
    "year": "СЕРИЯ",
    "note": "С детства не нравились игры, построенные на драках и противостоянии.",
    "image": "assets/mortal-kombat.JPG",
    "url": "https://en.wikipedia.org/wiki/Mortal_Kombat"
  }
];
const labels={love:'♡ Попали в сердечко',okay:'Можно ещё партию',nope:'Не моя история'};
function render(){document.querySelector('#games').innerHTML=entries.map((g,i)=>`<article class="game" data-category="${g.category}" style="animation-delay:${Math.min(i,5)*40}ms"><a class="cover" href="${g.url}" target="_blank" rel="noopener noreferrer" aria-label="${g.title} — открыть страницу игры"><img src="${g.image}" alt="Обложка ${g.title}" width="300" height="400" loading="lazy"><span class="tag ${g.category}">${labels[g.category]}</span><span class="cover-arrow" aria-hidden="true">↗</span></a><div class="game-meta"><span>${g.genre}</span><span>${g.year||''}</span></div><h3><a href="${g.url}" target="_blank" rel="noopener noreferrer">${g.title}</a></h3><p>${g.note}</p>${g.parts?`<details><summary>Все пять частей ↗</summary><div class="parts">${g.parts.map(p=>`<a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.title} ↗</a>`).join('')}</div></details>`:''}</article>`).join('');}
render();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});let count=0;document.querySelectorAll('.game').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++});document.querySelector('#results').textContent=`В коллекции: ${count} из ${entries.length}`;}));
document.querySelector('#love-button').addEventListener('click',event=>{document.querySelector('#love-message').textContent='Кооператив навсегда. Сохранение — в сердечке ♡';const r=event.currentTarget.getBoundingClientRect();for(let i=0;i<12;i++){const h=document.createElement('span');h.className='heart-particle';h.textContent='♥';h.style.cssText=`left:${r.left+r.width/2}px;top:${r.top}px;color:${i%2?'#d8ff36':'#111110'};--dx:${(Math.random()-.5)*350}px;animation-delay:${i*30}ms`;document.body.append(h);setTimeout(()=>h.remove(),2200)}});
