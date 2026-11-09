"use strict";

/* ---------- Data ---------- */

const STORAGE_KEY = "saki-joshua-app-v1";

const CITIES = {
  "Hamburg":   { lat: 53.55, lon: 9.99 },
  "Berlin":    { lat: 52.52, lon: 13.405 },
  "Cologne":   { lat: 50.94, lon: 6.96 },
  "Frankfurt": { lat: 50.11, lon: 8.68 },
  "Munich":    { lat: 48.14, lon: 11.58 },
  "Stuttgart": { lat: 48.78, lon: 9.18 },
  "Tokyo":     { lat: 35.68, lon: 139.69 },
  "Osaka":     { lat: 34.69, lon: 135.50 },
  "Kyoto":     { lat: 35.01, lon: 135.77 },
  "Nagoya":    { lat: 35.18, lon: 136.91 },
  "Sapporo":   { lat: 43.06, lon: 141.35 },
  "Fukuoka":   { lat: 33.59, lon: 130.40 },
};

const VOCAB = [
  {
    jp: [
      ["こんにちは", "Konnichiwa", "Hello"],
      ["ありがとう", "Arigatou", "Thank you"],
      ["さようなら", "Sayounara", "Goodbye"],
      ["おはよう", "Ohayou", "Good morning"],
      ["おやすみ", "Oyasumi", "Good night"],
    ],
    de: [
      ["Hallo", "hello", "„Hallo, wie geht's?“"],
      ["Danke", "thank you", "„Danke schön!“"],
      ["Bitte", "please / you're welcome", "„Bitte, gern geschehen.“"],
      ["Tschüss", "bye", "„Tschüss, bis bald!“"],
      ["Ich liebe dich", "I love you", "„Ich liebe dich, Saki.“"],
    ],
  },
  {
    jp: [
      ["愛してる", "Aishiteru", "I love you"],
      ["大好き", "Daisuki", "I like you very much"],
      ["会いたい", "Aitai", "I miss you"],
      ["元気？", "Genki?", "Are you okay?"],
      ["かわいい", "Kawaii", "cute"],
    ],
    de: [
      ["Wie geht's?", "How are you?", "„Wie geht's dir, Saki?“"],
      ["Gut", "good", "„Mir geht's gut.“"],
      ["schlafen", "to sleep", "„Gute Nacht, schlaf gut!“"],
      ["Essen", "food", "„Das Essen ist lecker.“"],
      ["trinken", "to drink", "„Möchtest du etwas trinken?“"],
    ],
  },
  {
    jp: [
      ["水", "Mizu", "water"],
      ["ご飯", "Gohan", "rice / meal"],
      ["美味しい", "Oishii", "delicious"],
      ["飲み物", "Nomimono", "drink"],
      ["朝ごはん", "Asagohan", "breakfast"],
    ],
    de: [
      ["Katze", "cat", "„Die Katze ist süß.“"],
      ["Hund", "dog", "„Der Hund spielt gern.“"],
      ["Blume", "flower", "„Diese Blume ist schön.“"],
      ["Stern", "star", "„Schau, ein Stern!“"],
      ["süß", "cute", "„Du bist süß.“"],
    ],
  },
  {
    jp: [
      ["猫", "Neko", "cat"],
      ["犬", "Inu", "dog"],
      ["鳥", "Tori", "bird"],
      ["花", "Hana", "flower"],
      ["星", "Hoshi", "star"],
    ],
    de: [
      ["heute", "today", "„Heute ist ein schöner Tag.“"],
      ["morgen", "tomorrow", "„Morgen sehen wir uns!“"],
      ["gestern", "yesterday", "„Gestern war lustig.“"],
      ["wann", "when", "„Wann kommst du?“"],
      ["hier", "here", "„Hier ist es schön.“"],
    ],
  },
  {
    jp: [
      ["今日", "Kyou", "today"],
      ["明日", "Ashita", "tomorrow"],
      ["昨日", "Kinou", "yesterday"],
      ["いつ", "Itsu", "when"],
      ["ここ", "Koko", "here"],
    ],
    de: [
      ["Bahnhof", "train station", "„Wir treffen uns am Bahnhof.“"],
      ["Flugzeug", "airplane", "„Das Flugzeug nach Japan.“"],
      ["Ticket", "ticket", "„Hast du das Ticket?“"],
      ["Flughafen", "airport", "„Am Flughafen treffen.“"],
      ["reisen", "to travel", "„Ich reise gern.“"],
    ],
  },
  {
    jp: [
      ["駅", "Eki", "train station"],
      ["飛行機", "Hikouki", "airplane"],
      ["切符", "Kippu", "ticket"],
      ["空港", "Kuukou", "airport"],
      ["旅行", "Ryokou", "trip"],
    ],
    de: [
      ["heiß", "hot", "„Heute ist es heiß.“"],
      ["kalt", "cold", "„In Japan ist es kalt.“"],
      ["Regen", "rain", "„Es regnet heute.“"],
      ["Schnee", "snow", "„Im Winter liegt Schnee.“"],
      ["sonnig", "sunny", "„Morgen ist es sonnig.“"],
    ],
  },
  {
    jp: [
      ["暑い", "Atsui", "hot"],
      ["寒い", "Samui", "cold"],
      ["雨", "Ame", "rain"],
      ["雪", "Yuki", "snow"],
      ["晴れ", "Hare", "sunny"],
    ],
    de: [
      ["zusammen", "together", "„Wir essen zusammen.“"],
      ["Date", "date", "„Unser erstes Date.“"],
      ["Film", "movie", "„Welchen Film sehen wir?“"],
      ["Musik", "music", "„Diese Musik gefällt mir.“"],
      ["Foto", "photo", "„Mach ein Foto von uns!“"],
    ],
  },
  {
    jp: [
      ["一緒に", "Issho ni", "together"],
      ["デート", "Deeto", "date"],
      ["映画", "Eiga", "movie"],
      ["音楽", "Ongaku", "music"],
      ["写真", "Shashin", "photo"],
    ],
    de: [
      ["beschäftigt", "busy", "„Ich bin heute beschäftigt.“"],
      ["müde", "tired", "„Ich bin müde, gute Nacht.“"],
      ["glücklich", "happy", "„Ich bin so glücklich!“"],
      ["einsam", "lonely", "„Ohne dich fühle ich mich einsam.“"],
      ["alles in Ordnung", "all right", "„Alles in Ordnung?“"],
    ],
  },
  {
    jp: [
      ["忙しい", "Isogashii", "busy"],
      ["疲れた", "Tsukareta", "tired"],
      ["嬉しい", "Ureshii", "happy"],
      ["寂しい", "Sabishii", "lonely"],
      ["大丈夫", "Daijoubu", "all right"],
    ],
    de: [
      ["nächster Monat", "next month", "„Nächster Monat fliege ich.“"],
      ["nächstes Jahr", "next year", "„Nächstes Jahr heiraten wir?“"],
      ["bis bald", "see you soon", "„Bis bald, mein Schatz!“"],
      ["ich freue mich", "I'm looking forward to it", "„Ich freue mich auf dich!“"],
      ["umarmen", "to hug", "„Ich möchte dich umarmen.“"],
    ],
  },
  {
    jp: [
      ["来月", "Raigetsu", "next month"],
      ["来年", "Rainen", "next year"],
      ["またね", "Mata ne", "see you soon"],
      ["楽しみ", "Tanoshimi", "looking forward to it"],
      ["抱きしめたい", "Dakishimetai", "I want to hug you"],
    ],
    de: [
      ["die Fernbeziehung", "long-distance relationship", "„Unsere Fernbeziehung ist stark.“"],
      ["vermissen", "to miss", "„Ich vermisse dich.“"],
      ["das Treffen", "the meeting", "„Das Treffen war wunderschön.“"],
      ["die Zeitverschiebung", "time difference", "„Die Zeitverschiebung ist 7 Stunden.“"],
      ["die Umarmung", "the hug", "„Eine Umarmung tut gut.“"],
    ],
  },
];

const DEFAULT_STATE = {
  startDate: "",
  meetup: { date: "", duration: "", place: "" },
  challenges: { joshua: "", saki: "" },
  events: {},
  ideas: [
    { text: "Watch the sunset together", done: false },
    { text: "Cook together (Japanese & German)", done: false },
    { text: "City trip", done: false },
  ],
  locations: { joshua: "Berlin", saki: "Tokyo" },
  vocabDone: {},
  vocabDay: 0,
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    return Object.assign(structuredClone(DEFAULT_STATE), JSON.parse(raw));
  } catch (e) {
    return structuredClone(DEFAULT_STATE);
  }
}

let state = loadState();
function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* ---------- Helpers ---------- */

const $ = (sel) => document.querySelector(sel);

function fmtDate(d) {
  return d.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function daysBetween(a, b) {
  const ms = 24 * 60 * 60 * 1000;
  return Math.floor((b - a) / ms);
}

function parseLocalDate(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

/* ---------- Tabs ---------- */

document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".tabpage").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    $("#tab-" + btn.dataset.tab).classList.add("active");
  });
});

/* ---------- Overview ---------- */

function renderHero() {
  const el = $("#hero-countdown");
  const together = $("#hero-together");
  if (state.meetup.date) {
    const target = new Date(state.meetup.date);
    const now = new Date();
    const diffMs = target - now;
    if (diffMs > 0) {
      const d = Math.floor(diffMs / 86400000);
      const h = Math.floor((diffMs % 86400000) / 3600000);
      const m = Math.floor((diffMs % 3600000) / 60000);
      el.textContent = `${d} days, ${h} hrs ${m} min until we see each other again`;
    } else {
      el.textContent = "We're seeing each other right now, or it's over ♥";
    }
  } else {
    el.textContent = "Enter your next meetup";
  }
  if (state.startDate) {
    const start = parseLocalDate(state.startDate);
    const d = daysBetween(start, new Date());
    together.textContent = `Together for ${d} days – since ${fmtDate(start)}`;
  } else {
    together.textContent = "Enter your relationship start date";
  }
}

function renderMeetup() {
  const view = $("#meetup-view");
  const m = state.meetup;
  if (!m.date) {
    view.innerHTML = "<p>No meetup entered yet.</p>";
    return;
  }
  const target = new Date(m.date);
  const diffMs = target - new Date();
  let countdown = "";
  if (diffMs > 0) {
    const d = Math.floor(diffMs / 86400000);
    countdown = `<p class="big">${d} day${d === 1 ? "" : "s"} left</p>`;
  } else {
    countdown = '<p class="big">It\'s time ♥</p>';
  }
  view.innerHTML = `
    ${countdown}
    <p>📆 ${fmtDate(target)} at ${target.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>
    ${m.place ? `<p>📍 ${escapeHtml(m.place)}</p>` : ""}
    ${m.duration ? `<p>⏳ For ${escapeHtml(m.duration)}</p>` : ""}
  `;
}

function renderStart() {
  const view = $("#start-view");
  if (!state.startDate) {
    view.innerHTML = "<p>Not entered yet.</p>";
    return;
  }
  const start = parseLocalDate(state.startDate);
  const d = daysBetween(start, new Date());
  view.innerHTML = `<p class="big">${d} days</p><p>since ${fmtDate(start)}</p>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

$("#save-meetup").addEventListener("click", () => {
  state.meetup = {
    date: $("#edit-meetup-date").value,
    duration: $("#edit-meetup-duration").value.trim(),
    place: $("#edit-meetup-place").value.trim(),
  };
  save();
  renderHero();
  renderMeetup();
});

$("#save-start").addEventListener("click", () => {
  state.startDate = $("#edit-start-date").value;
  save();
  renderHero();
  renderStart();
});

$("#save-challenges").addEventListener("click", () => {
  state.challenges.joshua = $("#challenge-joshua").value;
  state.challenges.saki = $("#challenge-saki").value;
  save();
  const btn = $("#save-challenges");
  btn.textContent = "Saved ✓";
  setTimeout(() => (btn.textContent = "Save"), 1500);
});

function initOverview() {
  $("#edit-meetup-date").value = state.meetup.date || "";
  $("#edit-meetup-duration").value = state.meetup.duration || "";
  $("#edit-meetup-place").value = state.meetup.place || "";
  $("#edit-start-date").value = state.startDate || "";
  $("#challenge-joshua").value = state.challenges.joshua || "";
  $("#challenge-saki").value = state.challenges.saki || "";
}

/* ---------- Clocks ---------- */

function tickClocks() {
  const now = new Date();
  $("#clock-de").textContent = now.toLocaleTimeString("en-GB", { timeZone: "Europe/Berlin", hour: "2-digit", minute: "2-digit", second: "2-digit" });
  $("#clock-jp").textContent = now.toLocaleTimeString("en-GB", { timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

/* ---------- Calendar ---------- */

let calYear, calMonth, selectedDay = null;

function keyOf(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function renderCalendar() {
  const grid = $("#cal-grid");
  grid.innerHTML = "";
  $("#cal-title").textContent = new Date(calYear, calMonth, 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
  const first = new Date(calYear, calMonth, 1);
  let startOffset = (first.getDay() + 6) % 7; // Monday = 0
  const start = new Date(calYear, calMonth, 1 - startOffset);
  const todayKey = keyOf(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  for (let i = 0; i < 42; i++) {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
    const key = keyOf(d.getFullYear(), d.getMonth(), d.getDate());
    const cell = document.createElement("div");
    cell.className = "cal-day";
    if (d.getMonth() !== calMonth) cell.classList.add("other-month");
    if (key === todayKey) cell.classList.add("today");
    if (key === selectedDay) cell.classList.add("selected");
    cell.innerHTML = `<span>${d.getDate()}</span>`;
    (state.events[key] || []).forEach(() => {
      const dot = document.createElement("span");
      dot.className = "cal-dot";
      cell.appendChild(dot);
    });
    cell.addEventListener("click", () => {
      selectedDay = key;
      renderCalendar();
      renderEvents();
    });
    grid.appendChild(cell);
  }
}

function renderEvents() {
  const list = $("#event-list");
  list.innerHTML = "";
  const title = $("#events-title");
  if (!selectedDay) {
    title.textContent = "Events – tap a day";
    return;
  }
  const [y, m, d] = selectedDay.split("-").map(Number);
  title.textContent = `Events on ${fmtDate(new Date(y, m - 1, d))}`;
  const events = state.events[selectedDay] || [];
  if (!events.length) {
    list.innerHTML = "<li>No events on this day yet.</li>";
    return;
  }
  events.forEach((text, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="idea-text">${escapeHtml(text)}</span>`;
    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "✕";
    del.addEventListener("click", () => {
      state.events[selectedDay].splice(idx, 1);
      if (!state.events[selectedDay].length) delete state.events[selectedDay];
      save();
      renderCalendar();
      renderEvents();
    });
    li.appendChild(del);
    list.appendChild(li);
  });
}

function initCalendar() {
  const now = new Date();
  calYear = now.getFullYear();
  calMonth = now.getMonth();
  selectedDay = keyOf(now.getFullYear(), now.getMonth(), now.getDate());
  $("#cal-prev").addEventListener("click", () => {
    calMonth--;
    if (calMonth < 0) { calMonth = 11; calYear--; }
    renderCalendar();
  });
  $("#cal-next").addEventListener("click", () => {
    calMonth++;
    if (calMonth > 11) { calMonth = 0; calYear++; }
    renderCalendar();
  });
  $("#event-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selectedDay) return;
    const text = $("#event-input").value.trim();
    if (!text) return;
    if (!state.events[selectedDay]) state.events[selectedDay] = [];
    state.events[selectedDay].push(text);
    $("#event-input").value = "";
    save();
    renderCalendar();
    renderEvents();
  });
  renderCalendar();
  renderEvents();
}

/* ---------- Date ideas ---------- */

function renderIdeas() {
  const list = $("#idea-list");
  list.innerHTML = "";
  state.ideas.forEach((idea, idx) => {
    const li = document.createElement("li");
    if (idea.done) li.classList.add("done");
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = idea.done;
    cb.addEventListener("change", () => {
      idea.done = cb.checked;
      save();
      renderIdeas();
    });
    const span = document.createElement("span");
    span.className = "idea-text";
    span.textContent = idea.text;
    const del = document.createElement("button");
    del.className = "del";
    del.textContent = "✕";
    del.addEventListener("click", () => {
      state.ideas.splice(idx, 1);
      save();
      renderIdeas();
    });
    li.appendChild(cb);
    li.appendChild(span);
    li.appendChild(del);
    list.appendChild(li);
  });
}

function initIdeas() {
  $("#idea-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = $("#idea-input").value.trim();
    if (!text) return;
    state.ideas.push({ text, done: false });
    $("#idea-input").value = "";
    save();
    renderIdeas();
  });
  renderIdeas();
}

/* ---------- Map ---------- */

const MAP_W = 1000, MAP_H = 500;
function project(lat, lon) {
  return { x: ((lon + 180) / 360) * MAP_W, y: ((90 - lat) / 180) * MAP_H };
}

function haversineKm(a, b) {
  const R = 6371;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(h)));
}

const CONTINENTS = [
  "M45,80 L110,50 L200,45 L280,60 L340,95 L330,130 L295,150 L280,185 L255,205 L235,215 L255,235 L270,225 L240,200 L215,185 L185,160 L150,150 L110,140 L80,120 L60,100 Z",
  "M330,30 L390,25 L410,55 L380,75 L340,60 Z",
  "M270,240 L310,235 L340,260 L350,300 L330,350 L310,390 L295,420 L280,400 L270,350 L260,300 L255,265 Z",
  "M470,120 L500,95 L530,85 L560,95 L575,120 L560,145 L540,160 L520,175 L500,170 L480,150 L465,135 Z",
  "M510,60 L540,50 L560,70 L545,90 L520,85 Z",
  "M465,105 L475,95 L480,110 L468,118 Z",
  "M470,190 L510,180 L550,190 L580,210 L590,250 L570,300 L550,340 L530,360 L510,340 L490,300 L470,260 L455,220 Z",
  "M580,60 L650,45 L750,40 L850,60 L920,90 L950,120 L900,150 L860,170 L830,200 L800,230 L780,260 L750,250 L720,220 L690,200 L660,180 L630,160 L600,140 L580,110 Z",
  "M660,180 L690,200 L700,240 L680,250 L665,215 Z",
  "M800,320 L850,310 L890,330 L900,360 L870,380 L830,375 L800,355 Z",
];

const ISLANDS = [
  [905, 150, 4, 7], [913, 163, 3.5, 6], [922, 176, 3, 5], [914, 170, 2.5, 4], // Japan
  [770, 280, 6, 3], [790, 290, 5, 3], [810, 285, 4, 2.5], // Indonesia
  [940, 200, 5, 3], // New Zealand
];

function renderMap() {
  const svg = $("#world-map");
  const NS = "http://www.w3.org/2000/svg";
  svg.innerHTML = "";

  const land = document.createElementNS(NS, "g");
  land.setAttribute("fill", "#cfe3d4");
  land.setAttribute("stroke", "#a9cbb2");
  land.setAttribute("stroke-width", "1.5");
  CONTINENTS.forEach((d) => {
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    land.appendChild(p);
  });
  ISLANDS.forEach(([cx, cy, rx, ry]) => {
    const e = document.createElementNS(NS, "ellipse");
    e.setAttribute("cx", cx); e.setAttribute("cy", cy);
    e.setAttribute("rx", rx); e.setAttribute("ry", ry);
    land.appendChild(e);
  });
  svg.appendChild(land);

  const a = CITIES[state.locations.joshua];
  const b = CITIES[state.locations.saki];
  const pa = project(a.lat, a.lon);
  const pb = project(b.lat, b.lon);

  if (state.locations.joshua !== state.locations.saki) {
    const line = document.createElementNS(NS, "line");
    line.setAttribute("x1", pa.x); line.setAttribute("y1", pa.y);
    line.setAttribute("x2", pb.x); line.setAttribute("y2", pb.y);
    line.setAttribute("stroke", "#e11d48");
    line.setAttribute("stroke-width", "2");
    line.setAttribute("stroke-dasharray", "7 6");
    svg.appendChild(line);
  }

  function marker(p, color, label) {
    const g = document.createElementNS(NS, "g");
    const pulse = document.createElementNS(NS, "circle");
    pulse.setAttribute("cx", p.x); pulse.setAttribute("cy", p.y);
    pulse.setAttribute("r", 14); pulse.setAttribute("fill", color);
    pulse.setAttribute("opacity", "0.25");
    const dot = document.createElementNS(NS, "circle");
    dot.setAttribute("cx", p.x); dot.setAttribute("cy", p.y);
    dot.setAttribute("r", 7); dot.setAttribute("fill", color);
    dot.setAttribute("stroke", "#fff"); dot.setAttribute("stroke-width", "2");
    const text = document.createElementNS(NS, "text");
    text.setAttribute("x", p.x); text.setAttribute("y", p.y - 18);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("font-size", "15");
    text.setAttribute("font-weight", "600");
    text.setAttribute("fill", "#1f2937");
    text.textContent = label;
    g.appendChild(pulse); g.appendChild(dot); g.appendChild(text);
    svg.appendChild(g);
  }

  marker(pa, "#2563eb", "Joshua · " + state.locations.joshua);
  marker(pb, "#e11d48", "Saki · " + state.locations.saki);

  const km = haversineKm(a, b);
  $("#distance-label").textContent = km === 0
    ? "You're in the same place ♥"
    : `Currently ${km.toLocaleString("en-US")} km apart`;
}

function initMap() {
  const selJ = $("#loc-joshua");
  const selS = $("#loc-saki");
  Object.keys(CITIES).forEach((name) => {
    selJ.appendChild(new Option(name, name));
    selS.appendChild(new Option(name, name));
  });
  selJ.value = state.locations.joshua;
  selS.value = state.locations.saki;
  selJ.addEventListener("change", () => { state.locations.joshua = selJ.value; save(); renderMap(); });
  selS.addEventListener("change", () => { state.locations.saki = selS.value; save(); renderMap(); });
  renderMap();
}

/* ---------- Vocabulary ---------- */

function renderVocab() {
  const day = Math.min(Math.max(state.vocabDay, 0), VOCAB.length - 1);
  state.vocabDay = day;
  $("#vocab-day-title").textContent = `Day ${day + 1} of ${VOCAB.length}`;
  const data = VOCAB[day];

  function fill(listSel, items, prefix) {
    const list = $(listSel);
    list.innerHTML = "";
    items.forEach((item, i) => {
      const [word, reading, meaning] = item;
      const key = `${prefix}-${day}-${i}`;
      const li = document.createElement("li");
      if (state.vocabDone[key]) li.classList.add("done");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = !!state.vocabDone[key];
      cb.addEventListener("change", () => {
        state.vocabDone[key] = cb.checked;
        save();
        renderVocab();
      });
      const div = document.createElement("div");
      div.innerHTML = `
        <div><span class="vocab-word">${escapeHtml(word)}</span>
        <div class="vocab-reading">${escapeHtml(reading)}</div></div>
        <div class="vocab-meaning">${escapeHtml(meaning)}</div>`;
      li.appendChild(cb);
      li.appendChild(div);
      list.appendChild(li);
    });
  }

  fill("#vocab-jp", data.jp, "jp");
  fill("#vocab-de", data.de, "de");
}

function initVocab() {
  $("#vocab-prev").addEventListener("click", () => { state.vocabDay = Math.max(0, state.vocabDay - 1); save(); renderVocab(); });
  $("#vocab-next").addEventListener("click", () => { state.vocabDay = Math.min(VOCAB.length - 1, state.vocabDay + 1); save(); renderVocab(); });
  renderVocab();
}

/* ---------- Init ---------- */

initOverview();
initCalendar();
initIdeas();
initMap();
initVocab();

function refreshDynamic() {
  renderHero();
  renderMeetup();
  renderStart();
  tickClocks();
}
refreshDynamic();
setInterval(refreshDynamic, 1000);
