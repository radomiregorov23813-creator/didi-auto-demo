/* Di-Di Auto — демо. Все цифры в CONFIG и CARS примерные: перед запуском заменить на данные компании. */

const CONFIG = {
  phone: '79644291289',
  // Запасные курсы, если ЦБ недоступен
  rates: { JPY: 0.55, CNY: 11.5, EUR: 92 },
  // Расходы в стране покупки и доставка до Владивостока (в валюте страны)
  abroad: { jp: 180000, cn: 14000 },
  vladivostok: 95000,   // СБКТС, ЭПТС, брокер, стоянка, ₽
  toYakutsk: 170000,    // автовоз или перегон Владивосток — Якутск, ₽
  commission: 50000,    // комиссия компании, ₽ — ПОДСТАВИТЬ РЕАЛЬНУЮ
};

const IMG = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/';
// cost — цена в валюте страны (иены или юани)
const CARS = [
  { id: 'raize',    name: 'Toyota Raize',         year: 2021, engine: '1.0 турбо',   cc: 1000, hp: 98,  type: 'suv', from: 'jp', cost: 1450000, img: '0/01/Toyota_Raize_front_side.jpg/960px-Toyota_Raize_front_side.jpg' },
  { id: 'freed',    name: 'Honda Freed',          year: 2021, engine: '1.5',         cc: 1500, hp: 129, type: 'van', from: 'jp', cost: 1550000, img: 'b/be/Honda_FREED%2B_G_Honda_SENSING_%286BA-GB5%29_front.jpg/960px-Honda_FREED%2B_G_Honda_SENSING_%286BA-GB5%29_front.jpg' },
  { id: 'yarisx',   name: 'Toyota Yaris Cross',   year: 2021, engine: '1.5 гибрид',  cc: 1500, hp: 91,  type: 'suv', from: 'jp', cost: 1750000, img: 'f/f4/Toyota_Yaris_Cross_Hybrid_%28XP210%29_1X7A1846.jpg/960px-Toyota_Yaris_Cross_Hybrid_%28XP210%29_1X7A1846.jpg' },
  { id: 'vezel',    name: 'Honda Vezel',          year: 2021, engine: '1.5 гибрид',  cc: 1500, hp: 106, type: 'suv', from: 'jp', cost: 2300000, img: '5/56/Honda_VEZEL_e-HEV_PLaY_%286AA-RV5%29_front.jpg/960px-Honda_VEZEL_e-HEV_PLaY_%286AA-RV5%29_front.jpg' },
  { id: 'cx5',      name: 'Mazda CX-5',           year: 2021, engine: '2.0',         cc: 2000, hp: 156, type: 'suv', from: 'jp', cost: 2900000, img: 'a/a2/Mazda_CX-5_25S_L_Package_2WD_%286BA-KF5P%29_front.jpg/960px-Mazda_CX-5_25S_L_Package_2WD_%286BA-KF5P%29_front.jpg' },
  { id: 'ccross',   name: 'Toyota Corolla Cross', year: 2022, engine: '1.8 гибрид',  cc: 1800, hp: 98,  type: 'suv', from: 'jp', cost: 3100000, img: '0/0b/Toyota_Corolla_Cross_Hybrid_1X7A1861.jpg/960px-Toyota_Corolla_Cross_Hybrid_1X7A1861.jpg' },
  { id: 'forester', name: 'Subaru Forester',      year: 2021, engine: '2.0 e-Boxer', cc: 2000, hp: 145, type: 'suv', from: 'jp', cost: 3100000, img: 'e/e2/Subaru_FORESTER_SPORT_%284BA-SK5%29_front.jpg/960px-Subaru_FORESTER_SPORT_%284BA-SK5%29_front.jpg' },
  { id: 'prius',    name: 'Toyota Prius',         year: 2023, engine: '1.8 гибрид',  cc: 1800, hp: 98,  type: 'car', from: 'jp', cost: 3600000, img: '7/7e/2025_Toyota_Prius_LE%2C_front_right%2C_09-06-2025.jpg/960px-2025_Toyota_Prius_LE%2C_front_right%2C_09-06-2025.jpg' },
  { id: 'noah',     name: 'Toyota Noah',          year: 2022, engine: '1.8 гибрид',  cc: 1800, hp: 98,  type: 'van', from: 'jp', cost: 3800000, img: 'f/fe/Toyota_NOAH_HYBRID_Z_%286AA-ZWR90W-APXQB%29_front.jpg/960px-Toyota_NOAH_HYBRID_Z_%286AA-ZWR90W-APXQB%29_front.jpg' },
  { id: 'corolla',  name: 'Toyota Corolla',       year: 2023, engine: '1.2 турбо',   cc: 1200, hp: 116, type: 'car', from: 'cn', cost: 72000,   img: '9/9c/Toyota_Corolla_front%2C_Dongguan%2C_China_1_May_2024.jpg/960px-Toyota_Corolla_front%2C_Dongguan%2C_China_1_May_2024.jpg' },
  { id: 'xrv',      name: 'Honda XR-V',           year: 2021, engine: '1.5',         cc: 1500, hp: 131, type: 'suv', from: 'cn', cost: 78000,   img: '4/48/Dongfeng_Honda_XR-V.JPG/960px-Dongfeng_Honda_XR-V.JPG' },
  { id: 'monjaro',  name: 'Geely Monjaro',        year: 2023, engine: '2.0 турбо',   cc: 2000, hp: 238, type: 'suv', from: 'cn', cost: 135000,  img: '6/6c/2021_Geely_Xingyue_L_%28front%29.jpg/960px-2021_Geely_Xingyue_L_%28front%29.jpg' },
];

const CASES = [
  { car: 'vezel',   grade: '4.5', days: 41, total: 1850000, note: 'Пробег 38 000 км, аукцион USS Tokyo' },
  { car: 'noah',    grade: '4',   days: 47, total: 2810000, note: 'Пробег 52 000 км, 7 мест' },
  { car: 'corolla', grade: 'A',   days: 36, total: 1590000, note: 'Пробег 21 000 км, от дилера в Харбине' },
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rub = n => Math.round(n).toLocaleString('ru-RU') + ' ₽';
const mln = n => (n / 1e6).toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' млн';
const num = s => Number(String(s).replace(/[^\d]/g, '')) || 0;
const wa = text => `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(text)}`;
const days = n => `${n} ${n % 10 === 1 && n % 100 !== 11 ? 'день' : [2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100) ? 'дня' : 'дней'}`;
const FROM = { jp: 'Япония', cn: 'Китай' };
const TYPE = { any: 'любой', suv: 'кроссовер', van: 'минивэн', car: 'седан или хэтчбек' };
const CUR = { jp: { code: 'JPY', sign: '¥', word: 'иены' }, cn: { code: 'CNY', sign: '¥', word: 'юани' } };
const rates = { ...CONFIG.rates };
const thisYear = new Date().getFullYear();

$$('[data-wa]').forEach(a => { a.href = wa(a.dataset.wa); a.target = '_blank'; a.rel = 'noopener'; });

/* Chips: one active per group */
function setChip(group, v) {
  $$('.chip', group).forEach(c => { const on = c.dataset.v === v; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', on); });
}
function chips(group, onChange) {
  group.addEventListener('click', e => {
    const b = e.target.closest('.chip');
    if (!b) return;
    setChip(group, b.dataset.v);
    onChange(b.dataset.v);
  });
}

/* ——— Расчёт стоимости ——— */
// Единые ставки пошлины для физлиц, евро за см³
const PER_CC = {
  mid: [[1000, 1.5], [1500, 1.7], [1800, 2.5], [2300, 2.7], [3000, 3.0], [Infinity, 3.6]],
  old: [[1000, 3.0], [1500, 3.2], [1800, 3.5], [2300, 4.8], [3000, 5.0], [Infinity, 5.7]],
};
// До 3 лет: процент от стоимости, но не меньше минимума за см³
const NEW = [[8500, .54, 2.5], [16700, .48, 3.5], [42300, .48, 5.5], [84500, .48, 7.5], [169000, .48, 15], [Infinity, .48, 20]];
// Сбор за таможенное оформление по стоимости, ₽
const FEE = [[200000, 1231], [450000, 2462], [1200000, 4924], [2700000, 13541], [4200000, 18465], [5500000, 21344], [7000000, 27540], [Infinity, 30000]];
const tier = (table, v) => table.find(r => v <= r[0]);

function estimate({ from, cost, year, cc, hp }) {
  const rate = rates[CUR[from].code];
  const age = thisYear - year;
  const carRub = cost * rate;
  const eur = carRub / rates.EUR;
  let dutyEur;
  if (age < 3) { const t = tier(NEW, eur); dutyEur = Math.max(eur * t[1], cc * t[2]); }
  else dutyEur = cc * tier(age <= 5 ? PER_CC.mid : PER_CC.old, cc)[1];
  const util = hp > 0 && hp <= 160 && cc <= 3000 ? (age < 3 ? 3400 : 5200) : null;
  const rows = [
    ['Машина', carRub],
    [from === 'jp' ? 'Расходы в Японии и фрахт' : 'Расходы в Китае и доставка до границы', CONFIG.abroad[from] * rate],
    [`Пошлина, ${age < 3 ? 'до 3 лет' : age <= 5 ? '3–5 лет' : 'старше 5 лет'}`, dutyEur * rates.EUR],
    ['Таможенный сбор', tier(FEE, carRub)[1]],
    ['Утильсбор', util],
    ['Оформление: СБКТС, ЭПТС, брокер', CONFIG.vladivostok],
    ['Доставка до Якутска', CONFIG.toYakutsk],
    ['Комиссия Di-Di Auto', CONFIG.commission],
  ];
  const total = Math.round(rows.reduce((s, r) => s + (r[1] || 0), 0) / 10000) * 10000;
  return { rows, total, util, carRub };
}
const priced = () => CARS.map(c => ({ ...c, ...estimate(c), spec: `${c.engine}, ${c.hp} л.с.` }));
const priceLabel = c => (c.util === null ? 'от ' : '≈ ') + mln(c.total);
const HEAVY = 'Свыше 160 л.с. — плюс коммерческий утильсбор';

/* ——— Подбор под бюджет ——— */
const pick = { budget: 2500000, type: 'any', from: 'any' };
const budget = $('#budget');

function renderPicks() {
  const match = c => (pick.type === 'any' || c.type === pick.type) && (pick.from === 'any' || c.from === pick.from);
  const pool = priced().filter(match);
  const list = pool.filter(c => c.total <= pick.budget).sort((a, b) => b.total - a.total).slice(0, 3);
  $('#budgetOut').textContent = rub(pick.budget);
  const box = $('#picks');
  if (!list.length) {
    const min = pool.length ? Math.min(...pool.map(c => c.total)) : 0;
    box.innerHTML = `<p class="picks-empty">${min
      ? `С такими параметрами варианты начинаются от ${mln(min)} ₽. Поднимите бюджет или отправьте запрос — менеджер поищет вручную.`
      : 'Таких машин в подборке нет. Отправьте запрос — менеджер поищет вручную.'}</p>`;
  } else {
    box.innerHTML = list.map(c => `
      <article class="pick">
        <img src="${IMG + c.img}" alt="${c.name}" loading="lazy" width="112" height="76">
        <div>
          <div class="pick-name">${c.name}, ${c.year}</div>
          <div class="pick-spec">${c.spec}, ${FROM[c.from]}</div>
          ${c.util === null ? `<div class="pick-flag">${HEAVY}</div>` : ''}
        </div>
        <div class="pick-price">${priceLabel(c)}<small>₽ в Якутске</small></div>
      </article>`).join('');
  }
  const names = list.map(c => `${c.name} ${c.year}`).join(', ');
  $('#pickSend').href = wa(
    `Здравствуйте! Ищу авто под заказ.\nБюджет: до ${rub(pick.budget)} с доставкой в Якутск.\nКузов: ${TYPE[pick.type]}.\nСтрана: ${pick.from === 'any' ? 'не важно' : FROM[pick.from]}.` +
    (names ? `\nНа сайте понравились: ${names}.` : '') + '\nПришлите, пожалуйста, актуальные варианты.');
}
budget.addEventListener('input', () => { pick.budget = +budget.value; renderPicks(); });
chips($('[data-filter=type]'), v => { pick.type = v; renderPicks(); });
chips($('[data-filter=from]'), v => { pick.from = v; renderPicks(); });
$('#pickSend').target = '_blank';

/* ——— Каталог ——— */
let catFrom = 'any';
function renderCatalog() {
  $('#catalog').innerHTML = priced()
    .filter(c => catFrom === 'any' || c.from === catFrom)
    .sort((a, b) => a.total - b.total)
    .map(c => `
    <article class="car">
      <img src="${IMG + c.img}" alt="${c.name}" loading="lazy" width="480" height="320">
      <div class="car-body">
        <h3>${c.name}</h3>
        <p>${c.year} г., ${c.spec}</p>
        <p>${FROM[c.from]}, ${c.from === 'jp' ? 'правый руль' : 'левый руль'}</p>
        ${c.util === null ? `<p class="pick-flag">${HEAVY}</p>` : ''}
      </div>
      <div class="car-foot">
        <span class="car-price">${priceLabel(c)} ₽</span>
        <button type="button" class="btn-line" data-calc-car="${c.id}">Посчитать</button>
      </div>
    </article>`).join('');
}
chips($('[data-catalog=from]'), v => { catFrom = v; renderCatalog(); });
$('#catalog').addEventListener('click', e => {
  const b = e.target.closest('[data-calc-car]');
  if (!b) return;
  const c = CARS.find(x => x.id === b.dataset.calcCar);
  calc.from = c.from; calc.car = c;
  setChip($('[data-calc=from]'), c.from);
  $('#cPrice').value = c.cost.toLocaleString('ru-RU');
  yearSel.value = c.year; $('#cCc').value = c.cc; $('#cHp').value = c.hp;
  compute();
  $('#calc').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
});

/* ——— Калькулятор ——— */
const calc = { from: 'jp', car: null };
const yearSel = $('#cYear');
for (let y = thisYear; y >= thisYear - 12; y--) yearSel.add(new Option(y, y, false, y === 2021));

function compute() {
  const cur = CUR[calc.from];
  const cost = num($('#cPrice').value), cc = num($('#cCc').value), hp = num($('#cHp').value);
  const e = estimate({ from: calc.from, cost, year: +yearSel.value, cc, hp });
  const valid = cost > 0 && cc > 0 && hp > 0;

  $('#cCur').textContent = cur.word;
  $('#cPriceRub').textContent = cost ? `≈ ${rub(e.carRub)} по курсу ЦБ` : '';
  $('#receiptTitle').textContent = calc.car ? `Расчёт: ${calc.car.name}` : 'Расчёт';
  $('#receipt').innerHTML = e.rows.map(([k, v]) =>
    `<div class="row"><dt>${k}</dt><dd${v === null ? ' class="is-ask"' : ''}>${v === null ? 'считает менеджер' : valid ? rub(v) : '—'}</dd></div>`).join('');
  $('#total').textContent = valid ? (e.util === null ? 'от ' : '≈ ') + rub(e.total) : '—';

  const warn = $('#calcWarn');
  warn.hidden = !(valid && e.util === null);
  warn.textContent = 'Мощность выше 160 л.с. или объём больше 3 литров: утильсбор идёт по коммерческой ставке и в сумму не включён. Менеджер посчитает его точно под вашу машину.';

  $('#calcSend').href = wa(valid
    ? `Здравствуйте! Посчитал машину на сайте.\n${calc.car ? calc.car.name + ', ' : ''}${FROM[calc.from]}, ${yearSel.value} г., ${cc} см³, ${hp} л.с., цена ${cur.sign}${cost.toLocaleString('ru-RU')}.\nВышло ${$('#total').textContent} под ключ в Якутск${e.util === null ? ' без утильсбора' : ''}.\nПодскажите точную сумму.`
    : 'Здравствуйте! Хочу посчитать стоимость авто под ключ в Якутск.');
}
const manual = () => { calc.car = null; compute(); };

$('#cPrice').addEventListener('input', e => {
  const n = num(e.target.value);
  e.target.value = n ? n.toLocaleString('ru-RU') : '';
  manual();
});
['#cCc', '#cHp'].forEach(s => $(s).addEventListener('input', e => { e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 4); manual(); }));
yearSel.addEventListener('change', manual);
chips($('[data-calc=from]'), v => {
  calc.from = v;
  $('#cPrice').value = (v === 'jp' ? 2300000 : 95000).toLocaleString('ru-RU');
  manual();
});
$('#calcSend').target = '_blank';

function showRates(note) {
  $('#rates').textContent = `Курс ${note}: 100 иен — ${(rates.JPY * 100).toFixed(2)} ₽, юань — ${rates.CNY.toFixed(2)} ₽, евро — ${rates.EUR.toFixed(2)} ₽`;
}
function renderAll() { renderPicks(); renderCatalog(); compute(); }
showRates('примерный');
renderAll();
fetch('https://www.cbr-xml-daily.ru/daily_json.js')
  .then(r => r.json())
  .then(d => {
    const v = d.Valute;
    rates.JPY = v.JPY.Value / v.JPY.Nominal;
    rates.CNY = v.CNY.Value / v.CNY.Nominal;
    rates.EUR = v.EUR.Value / v.EUR.Nominal;
    showRates('ЦБ на ' + new Date(d.Date).toLocaleDateString('ru-RU'));
    renderAll();
  })
  .catch(() => {});

/* ——— Привезли ——— */
$('#cases').innerHTML = CASES.map(k => {
  const c = CARS.find(x => x.id === k.car);
  return `
  <article class="sheet case">
    <img src="${IMG + c.img}" alt="${c.name}" loading="lazy" width="640" height="480">
    <span class="stamp" aria-label="Оценка ${k.grade}">оценка<b>${k.grade}</b></span>
    <div class="case-body">
      <h3>${c.name}, ${c.year}</h3>
      <p>${c.engine}, ${c.hp} л.с. ${k.note}</p>
    </div>
    <dl>
      <div><dt>От договора до выдачи</dt><dd>${days(k.days)}</dd></div>
      <div><dt>Под ключ в Якутске</dt><dd>${rub(k.total)}</dd></div>
    </dl>
  </article>`;
}).join('');
