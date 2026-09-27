
// ---------- Configuração (preencher antes de publicar) ----------
const CONFIG = {
  email: '',          // e-mail profissional novo — ainda não existe
  linkedin: '',
  instagram: '',
};

// ---------- Textos PT / EN ----------
const TEXTOS = {
  pt: {
    'cap.quem': 'Início · Hanna', 'nav.irpara': '> ir para:', 'nav.dica': '↑↓ escolher · Enter ir · Esc fechar · 1–6 atalho', 'cap.numeros': '+2.000 criativos',
    'cap.trabalhos': 'Trabalhos', 'cap.produto': 'Seu produto', 'cap.servicos': 'O que eu faço', 'cap.contato': 'Contato',
    'nav.contato': 'Contato', 'hud.funcao': 'IA Creator',
    'a.cargo': 'IA Creator',
    'a.lead': 'Crio avatares, vozes e cenas com IA para VSLs, leads, upsells e anúncios, em qualquer idioma. E construo as automações que aceleram tudo isso.',
    'a.rolar': 'Role para ver mais',
    'c.som': 'Ativar som', 'c.som-on': 'Som ligado',
    'd.criativos': 'criativos criados', 'd.anos': 'anos de experiência', 'd.idiomas': 'idiomas', 'd.formatos': 'formatos',
    'e.titulo': 'Trabalhos',
    'e.lead': 'Avatares, inserts 3D e histórias feitos para ofertas reais.', 'e.ver': 'Ampliar vídeo',
    'e.f.todos': 'Todos', 'e.f.homens': 'Homens', 'e.f.mulheres': 'Mulheres', 'e.f.historias': 'Histórias',
    'f.titulo': 'Seu produto poderia estar aqui.',
    'f.lead': 'A velaxa é uma marca fictícia que criei do zero com IA: identidade, embalagens, linha de produtos e hero shots. Sem estúdio, sem fotógrafo, sem frete. Imagina isso com a sua embalagem.',
    'g.titulo': 'O que eu faço',
    'h.titulo': 'Vamos escalar a próxima oferta?', 'h.cta': 'Entre em contato',
    'h.nota': 'Vaga, freela ou projeto: me manda um e-mail e a gente conversa.',
    'h.faixa': 'IA Creator · Qualquer idioma · +2.000 criativos · ', 'h.carregou': 'esta página carregou em', 'h.direitos': 'Todos os direitos reservados',
    'h.assunto': 'Contato pelo site · Alisson Martins',
    'h.corpo': 'Olá, Alisson! Vi seu site e gostaria de conversar.\n\nEmpresa:\nVaga/projeto:\n',
    'h.embreve': 'em breve',
  },
  en: {
    'cap.quem': 'Start · Hanna', 'nav.irpara': '> go to:', 'nav.dica': '↑↓ choose · Enter go · Esc close · 1–6 shortcut', 'cap.numeros': '2,000+ creatives',
    'cap.trabalhos': 'Work', 'cap.produto': 'Your product', 'cap.servicos': 'What I do', 'cap.contato': 'Contact',
    'nav.contato': 'Contact', 'hud.funcao': 'AI Creator',
    'a.cargo': 'AI Creator',
    'a.lead': 'I create AI avatars, voices and scenes for VSLs, leads, upsells and ads, in any language. And I build the automations that speed it all up.',
    'a.rolar': 'Scroll for more',
    'c.som': 'Turn sound on', 'c.som-on': 'Sound on',
    'd.criativos': 'creatives produced', 'd.anos': 'years of experience', 'd.idiomas': 'languages', 'd.formatos': 'formats',
    'e.titulo': 'Work',
    'e.lead': 'Avatars, 3D inserts and stories made for real offers.', 'e.ver': 'Enlarge video',
    'e.f.todos': 'All', 'e.f.homens': 'Men', 'e.f.mulheres': 'Women', 'e.f.historias': 'Stories',
    'f.titulo': 'Your product could be here.',
    'f.lead': 'velaxa is a fictional brand I built from scratch with AI: identity, packaging, product line and hero shots. No studio, no photographer, no shipping. Picture this with your packaging.',
    'g.titulo': 'What I do',
    'h.titulo': 'Ready to scale your next offer?', 'h.cta': 'Get in touch',
    'h.nota': 'Job, freelance or project: send me an email and let’s talk.',
    'h.faixa': 'AI Creator · Any language · 2,000+ creatives · ', 'h.carregou': 'this page loaded in', 'h.direitos': 'All rights reserved',
    'h.assunto': 'Contact from website · Alisson Martins',
    'h.corpo': 'Hi Alisson! I saw your website and would like to talk.\n\nCompany:\nRole/project:\n',
    'h.embreve': 'soon',
  },
};

const SERVICOS = {
  pt: [
    ['Avatares do zero', 'Personagens realistas criados do nada, com rosto, voz e personalidade consistentes.'],
    ['Lipsync', 'Boca, respiração e microexpressões sincronizadas com qualquer locução.'],
    ['Localização para qualquer idioma', 'O mesmo criativo no idioma de cada mercado, com voz e lipsync nativos.'],
    ['Inserts e B-roll com IA', 'Cenas 3D, histórias e demonstrações que sustentam a narrativa da VSL.'],
    ['Vozes e locução com IA', 'Clonagem e direção de voz com emoção, ritmo e sotaque certos.'],
    ['UGC com IA', 'Depoimentos no formato nativo de rede social, prontos para anúncio.'],
    ['Cenas de demonstração de produto', 'Hero shots e uso do produto sem estúdio, ator ou frete.'],
    ['Automações', 'Ferramentas próprias que cortam horas de trabalho manual da produção.'],
  ],
  en: [
    ['Avatars from scratch', 'Realistic characters built from nothing, with consistent face, voice and personality.'],
    ['Lipsync', 'Mouth, breathing and micro-expressions synced to any voiceover.'],
    ['Localization into any language', "The same creative in each market's language, with native voice and lipsync."],
    ['AI inserts & B-roll', '3D scenes, stories and demos that carry the VSL narrative.'],
    ['AI voices & voiceover', 'Voice cloning and direction with the right emotion, pace and accent.'],
    ['AI UGC', 'Native social-style testimonials, ready to run as ads.'],
    ['Product demo scenes', 'Hero shots and product-in-use scenes with no studio, actors or shipping.'],
    ['Automations', 'In-house tools that cut hours of manual work out of production.'],
  ],
};

let idioma = 'pt';
try { idioma = localStorage.getItem('idioma') === 'en' ? 'en' : 'pt'; } catch { /* sem storage */ }
const t = (chave) => TEXTOS[idioma][chave] ?? chave;

// Títulos grandes viram letras soltas (para o glitch); cada palavra fica inteira na mesma linha.
function quebrarLetras(el) {
  el.innerHTML = el.textContent.split(' ').map((p) =>
    `<span class="palavra">${[...p].map((c) => `<span class="letra">${c}</span>`).join('')}</span>`).join(' ');
}

function aplicarIdioma() {
  document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('.titulo-display[data-i18n]').forEach(quebrarLetras);
  document.querySelectorAll('.idioma [data-lang]').forEach((el) => el.classList.toggle('ativo', el.dataset.lang === idioma));
  const lista = document.querySelector('.servicos');
  lista.innerHTML = SERVICOS[idioma].map(([h, p], i) =>
    `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${h}</h3><p>${p}</p></li>`).join('');
  lista.querySelectorAll('h3').forEach(quebrarLetras);
  montarContato();
  if (typeof traduzirPrompt === 'function') traduzirPrompt();
}

function montarContato() {
  const pedir = document.getElementById('pedir-portfolio');
  const email = document.getElementById('link-email');
  if (CONFIG.email) {
    const url = `mailto:${CONFIG.email}?subject=${encodeURIComponent(t('h.assunto'))}&body=${encodeURIComponent(t('h.corpo'))}`;
    pedir.href = url;
    email.href = `mailto:${CONFIG.email}`;
    email.textContent = CONFIG.email;
  } else {
    pedir.href = '#contato';
    email.textContent = `E-mail · ${t('h.embreve')}`;
    email.classList.add('pendente');
  }
  for (const rede of ['linkedin', 'instagram']) {
    const a = document.getElementById(`link-${rede}`);
    a.href = CONFIG[rede] || '#';
    a.classList.toggle('pendente', !CONFIG[rede]);
    if (CONFIG[rede]) { a.target = '_blank'; a.rel = 'noopener'; }
  }
}

document.querySelector('.idioma').addEventListener('click', () => {
  idioma = idioma === 'pt' ? 'en' : 'pt';
  try { localStorage.setItem('idioma', idioma); } catch { /* sem storage */ }
  aplicarIdioma();
});

// ---------- Rolagem suave ----------
// A página é uma sequência: sempre começa do topo, mesmo ao recarregar.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin, Flip);
const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (movimentoReduzido) document.documentElement.classList.add('movimento-reduzido');
// Modo leve: aparelho fraco (até 4 núcleos ou até 4 GB de memória) ou quem pede menos movimento fica sem desfoques
// animados e sem grão em movimento, e o túnel usa metade das miniaturas.
const modoLeve = movimentoReduzido || (navigator.hardwareConcurrency || 8) <= 4 || (navigator.deviceMemory || 8) <= 4;
if (modoLeve) document.documentElement.classList.add('leve');

const lenis = new Lenis({ lerp: 0.09 });
window.__lenis = lenis;   // útil para depuração no console
lenis.scrollTo(0, { immediate: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((tempo) => lenis.raf(tempo * 1000));
gsap.ticker.lagSmoothing(0);

document.querySelectorAll('[data-nav]').forEach((a) => a.addEventListener('click', (e) => {
  e.preventDefault();
  lenis.scrollTo(a.getAttribute('href'), { duration: 1.6 });
}));

// ---------- Seletor "> ir para" ----------
// Botão no topo com a seção atual; abre uma caixa de terminal com todas as partes do site.
// Dá para digitar para filtrar, usar ↑↓ + Enter, os números 1–6 ou abrir com "/" e Ctrl+K.
const SECOES = ['quem', 'numeros', 'trabalhos', 'produto', 'servicos', 'contato'];
const irPara = document.querySelector('.ir-para');
const irBotao = irPara.querySelector('.ir-para-botao');
const irPainel = irPara.querySelector('.ir-para-painel');
const irBusca = irPara.querySelector('input');
const irLista = irPara.querySelector('.ir-para-lista');
let secaoAtual = 'quem';
let irItens = [];
let irSel = 0;
const semAcento = (x) => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

function desenharIrPara() {
  const q = semAcento(irBusca.value.trim());
  irItens = SECOES.map((id, i) => ({ id, n: i + 1, nome: t(`cap.${id}`) })).filter((x) => !q || semAcento(x.nome).includes(q));
  irSel = Math.max(0, Math.min(irSel, irItens.length - 1));
  irLista.innerHTML = '';
  if (!irItens.length) {
    const li = document.createElement('li');
    li.className = 'vazio';
    li.textContent = idioma === 'pt' ? 'nenhuma parte com esse nome' : 'no section with that name';
    irLista.appendChild(li);
  }
  irItens.forEach((x, k) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', String(k === irSel));
    li.innerHTML = '<span class="tecla"></span><span class="nome"></span>';
    li.querySelector('.tecla').textContent = x.n;
    li.querySelector('.nome').textContent = x.nome;
    if (x.id === secaoAtual) {
      const aqui = document.createElement('span');
      aqui.className = 'aqui';
      aqui.textContent = idioma === 'pt' ? 'você está aqui' : 'you are here';
      li.appendChild(aqui);
    }
    li.addEventListener('pointerenter', () => { irSel = k; marcarIrPara(); });
    li.addEventListener('click', () => irParaSecao(x.id));
    irLista.appendChild(li);
  });
}
function marcarIrPara() { [...irLista.children].forEach((li, k) => li.setAttribute('aria-selected', String(k === irSel))); }
function abrirIrPara() {
  irBusca.value = '';
  irSel = Math.max(0, SECOES.indexOf(secaoAtual));
  desenharIrPara();
  irPainel.hidden = false;
  irBotao.setAttribute('aria-expanded', 'true');
  if (!movimentoReduzido) gsap.fromTo(irPainel, { opacity: 0, y: -8, clipPath: 'inset(0 0 100% 0 round 14px)' },
    { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0 round 14px)', duration: 0.35, ease: 'power3.out' });
  irBusca.focus();
}
function fecharIrPara(devolverFoco = true) {
  if (irPainel.hidden) return;
  irPainel.hidden = true;
  irBotao.setAttribute('aria-expanded', 'false');
  if (devolverFoco) irBotao.focus();
}
function irParaSecao(id) {
  fecharIrPara(false);
  const alvo = id === 'quem' ? 0 : id === 'trabalhos' ? document.querySelector('.trabalhos') : document.getElementById(id);
  lenis.scrollTo(alvo, { offset: id === 'trabalhos' ? -100 : 0, duration: 1.4 });
}
irBotao.addEventListener('click', () => (irPainel.hidden ? abrirIrPara() : fecharIrPara()));
irBusca.addEventListener('input', () => { irSel = 0; desenharIrPara(); });
irBusca.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (irItens.length) irSel = (irSel + (e.key === 'ArrowDown' ? 1 : -1) + irItens.length) % irItens.length;
    marcarIrPara();
  } else if (e.key === 'Enter' && irItens[irSel]) irParaSecao(irItens[irSel].id);
  else if (e.key === 'Escape') fecharIrPara();
  else if (/^[1-6]$/.test(e.key) && !irBusca.value) { e.preventDefault(); irParaSecao(SECOES[+e.key - 1]); }
});
document.addEventListener('keydown', (e) => {
  const digitando = /input|textarea/i.test(document.activeElement?.tagName || '');
  if ((e.key === '/' && !digitando) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
    e.preventDefault();
    irPainel.hidden ? abrirIrPara() : fecharIrPara();
  }
});
document.addEventListener('pointerdown', (e) => { if (!irPara.contains(e.target)) fecharIrPara(false); });

// Seção atual: o botão mostra onde a pessoa está.
function mostrarSecaoAtual() { irBotao.querySelector('.ir-para-atual').textContent = t(`cap.${secaoAtual}`).toLowerCase().split(' · ')[0]; }
document.querySelectorAll('main > section').forEach((sec) => {
  ScrollTrigger.create({
    trigger: sec, start: 'top 50%', end: 'bottom 50%',
    onToggle: (self) => {
      if (!self.isActive) return;
      secaoAtual = sec.id;
      mostrarSecaoAtual();
      if (!irPainel.hidden) desenharIrPara();
    },
  });
});

// Título quebrado em letras
document.querySelectorAll('[data-split]').forEach((el) => {
  el.innerHTML = el.innerHTML.split(/(<br>)/).map((parte) => parte === '<br>' ? parte
    : [...parte].map((c) => `<span class="letra">${c === ' ' ? '&nbsp;' : c}</span>`).join('')).join('');
});

// ---------- A: vídeo da Hanna — o pedido aparece pronto e a pessoa clica em "Gerar" ----------
// O clique libera o som (o navegador só deixa tocar com áudio depois de uma interação): carrega rápido e ela já fala.
const HERO_TEXTOS = {
  pt: { prompt: 'gerar vídeo: Hanna, UGC, 1 avatar → qualquer idioma, voz nativa, 9:16', botao: 'Gerar', gerando: 'gerando', pronto: 'pronto · qualquer idioma' },
  en: { prompt: 'generate video: Hanna, UGC, 1 avatar → any language, native voice, 9:16', botao: 'Generate', gerando: 'generating', pronto: 'done · any language' },
};
const heroQuadro = document.querySelector('.hero-quadro');
const heroVideo = heroQuadro.querySelector('.hero-midia');
const botaoSomHero = document.querySelector('.hero-video .botao-som');
let tx = HERO_TEXTOS[idioma];
const caixa = heroQuadro.querySelector('.prompt-caixa'), digitado = heroQuadro.querySelector('.digitado');
const barra = heroQuadro.querySelector('.prompt-barra span'), status = heroQuadro.querySelector('.prompt-status');
const botaoGerar = heroQuadro.querySelector('.botao-gerar');
let progresso = 0, gerando = false, pronto = false, heroNaTela = true;
function mostrarProgresso(v) {
  progresso = v;
  barra.style.width = `${v}%`;
  status.textContent = pronto ? tx.pronto : gerando ? `${tx.gerando} · ${Math.round(v)}%` : '';
}
function tocarHero() { if (pronto && heroNaTela) heroVideo.play().catch(() => {}); }
// Antes do clique: o primeiro quadro fica desfocado atrás do pedido, como uma prévia do que vai ser gerado.
gsap.set(heroVideo, { opacity: 0.35, scale: 1.06, filter: 'blur(16px)' });
gsap.set(botaoSomHero, { opacity: 0, y: 8 });
gsap.set(botaoGerar, { opacity: 0, y: 6, pointerEvents: 'none' });
function mostrarBotao() {
  gsap.to(botaoGerar, { opacity: 1, y: 0, duration: 0.4, ease: 'back.out(2)', onComplete: () => { botaoGerar.style.pointerEvents = ''; } });
}
// O pedido já chega escrito, com o botão pronto (sem esperar digitar).
digitado.textContent = tx.prompt;
gsap.delayedCall(movimentoReduzido ? 0 : 0.5, mostrarBotao);

botaoGerar.addEventListener('click', () => {
  if (gerando) return;
  gerando = true;
  // Toca e pausa dentro do clique: o navegador passa a aceitar o áudio quando o vídeo aparecer.
  heroVideo.muted = false;
  heroVideo.play().then(() => { if (!pronto) { heroVideo.pause(); heroVideo.currentTime = 0; } }).catch(() => {});
  gsap.to(botaoGerar, { opacity: 0, scale: 0.9, duration: 0.25, onComplete: () => { botaoGerar.hidden = true; } });
  gsap.to({ v: 0 }, { v: 100, duration: 0.6, ease: 'power1.inOut',
    onUpdate() { mostrarProgresso(this.targets()[0].v); }, onComplete: revelarVideo });
});
function revelarVideo() {
  pronto = true;
  mostrarProgresso(100);
  heroVideo.currentTime = 0;
  botaoSomHero.textContent = t(heroVideo.muted ? 'c.som' : 'c.som-on');
  gsap.timeline({ onStart: tocarHero })
    .to(heroVideo, { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' })
    .to(caixa, { opacity: 0, y: -12, filter: 'blur(6px)', duration: 0.4, onComplete: () => { caixa.style.visibility = 'hidden'; } }, 0.3)
    .to(botaoSomHero, { opacity: 1, y: 0, duration: 0.5 }, 0.5);
}
// O botão "Gerar" puxa levemente para o cursor (efeito ímã) enquanto o mouse passa por cima.
botaoGerar.addEventListener('pointermove', (e) => {
  const r = botaoGerar.getBoundingClientRect();
  gsap.to(botaoGerar, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.3 });
});
botaoGerar.addEventListener('pointerleave', () => gsap.to(botaoGerar, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' }));
// Troca PT/EN: o pedido, o status e os botões acompanham o idioma do site.
function traduzirPrompt() {
  tx = HERO_TEXTOS[idioma];
  digitado.textContent = tx.prompt;
  botaoGerar.textContent = tx.botao;
  mostrarProgresso(progresso);
  botaoSomHero.textContent = t(heroVideo.muted ? 'c.som' : 'c.som-on');
  if (typeof desenharFoto === 'function') desenharFoto(Math.max(0, pFoto));
  if (typeof traduzirParede === 'function') traduzirParede();
  if (typeof mostrarSecaoAtual === 'function') { mostrarSecaoAtual(); if (!irPainel.hidden) desenharIrPara(); }
}
botaoSomHero.addEventListener('click', () => {
  heroVideo.muted = !heroVideo.muted;
  tocarHero();
  botaoSomHero.textContent = t(heroVideo.muted ? 'c.som' : 'c.som-on');
});

// ---------- H: foto do Shiro — pedido de geração que falha ("pessoa real detectada") e revela a foto ----------
// Tudo anda com a rolagem: digita, a barra enche, trava no erro e a foto aparece (e volta se a pessoa subir).
const FOTO_TEXTOS = {
  pt: { prompt: 'gerar retrato: Alisson Martins, IA Creator, luz de estúdio, fundo escuro, 8k',
    gerando: 'gerando', erro: 'error 404 · real_human_detected' },
  en: { prompt: 'generate portrait: Alisson Martins, AI Creator, studio light, dark background, 8k',
    gerando: 'generating', erro: 'error 404 · real_human_detected' },
};
const fotoContato = document.querySelector('.foto-contato');
fotoContato.insertAdjacentHTML('beforeend', `<div class="prompt-caixa"><p class="prompt-linha"><span class="digitado"></span><span class="cursor"></span></p>
  <div class="prompt-barra"><span></span></div><p class="prompt-status"></p></div>`);
const caixaFoto = fotoContato.querySelector('.prompt-caixa'), digitadoFoto = fotoContato.querySelector('.digitado');
const barraFoto = fotoContato.querySelector('.prompt-barra span'), statusFoto = fotoContato.querySelector('.prompt-status');
const fotoBase = fotoContato.querySelector('.base'), seloFoto = fotoContato.querySelector('figcaption');
let pFoto = -1;
function desenharFoto(p) {
  const lim = (v) => Math.min(1, Math.max(0, v));
  const tf = FOTO_TEXTOS[idioma];
  const d = lim(p / 0.3), b = lim((p - 0.32) / 0.25), erro = p >= 0.57, r = lim((p - 0.7) / 0.25);
  digitadoFoto.textContent = tf.prompt.slice(0, Math.round(d * tf.prompt.length));
  barraFoto.style.width = `${63 * b}%`;
  statusFoto.textContent = erro ? tf.erro : `${tf.gerando} · ${Math.round(63 * b)}%`;
  caixaFoto.classList.toggle('erro', erro);
  statusFoto.classList.toggle('erro', erro);
  gsap.set(caixaFoto, { opacity: 1 - lim(r * 2), y: -10 * r, filter: `blur(${6 * r}px)` });
  gsap.set(fotoBase, { opacity: r, scale: 1.04 - 0.04 * r, filter: `blur(${12 * (1 - r)}px)` });
  gsap.set(seloFoto, { opacity: lim((p - 0.92) / 0.08) });
}
ScrollTrigger.create({ trigger: '.contato-palco', start: 'top 75%', end: 'bottom bottom', scrub: true,
  onUpdate: (self) => { pFoto = self.progress; desenharFoto(pFoto); } });
desenharFoto(0);

// Fora da tela o vídeo pausa (e volta a tocar quando a pessoa sobe de novo).
new IntersectionObserver(([e]) => {
  heroNaTela = e.isIntersecting;
  if (heroNaTela) tocarHero(); else heroVideo.pause();
}).observe(heroVideo);

// Entradas de texto
// Entrada do título: espera as partículas ficarem prontas (ou 1,2 s) para não disputar o processador.
gsap.set('#quem .letra', { yPercent: 110, opacity: 0, filter: 'blur(8px)' });
gsap.set('#quem .cargo, #quem .lead, #quem .dica-rolar', { y: 20, opacity: 0 });
let tituloMostrado = false;
function mostrarTitulo() {
  if (tituloMostrado) return;
  tituloMostrado = true;
  gsap.to('#quem .letra', { yPercent: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.04, duration: 1.1, ease: 'expo.out' });
  gsap.to('#quem .cargo, #quem .lead, #quem .dica-rolar', { y: 0, opacity: 1, stagger: 0.12, duration: 1, delay: 0.5 });
}
setTimeout(mostrarTitulo, 1200);

// Glitch pontual nos títulos grandes que estão na tela: algumas letras (ou o título todo) separam em ciano/magenta.
function glitchTitulos() {
  const naTela = (el) => { const r = el.getBoundingClientRect(); return r.bottom > 0 && r.top < window.innerHeight; };
  // Serviços: só 1 ou 2 por vez, para a lista não virar um pisca-pisca.
  const servicos = gsap.utils.shuffle([...document.querySelectorAll('.servicos h3')].filter(naTela)).slice(0, 1 + Math.round(Math.random()));
  [...document.querySelectorAll('.titulo-display')].filter(naTela).concat(servicos).forEach((titulo) => {
    const letras = [...titulo.querySelectorAll('.letra')].filter((l) => l.textContent.trim());
    const todas = Math.random() < 0.2;
    const alvo = todas ? letras : gsap.utils.shuffle(letras).slice(0, 2 + Math.floor(Math.random() * 4));
    alvo.forEach((l) => l.classList.add(todas ? 'glitch-forte' : 'glitch-letra'));
    setTimeout(() => alvo.forEach((l) => l.classList.remove('glitch-forte', 'glitch-letra')), todas ? 420 : 320);
  });
  setTimeout(glitchTitulos, 1800 + Math.random() * 1700);
}
if (!movimentoReduzido) setTimeout(glitchTitulos, 3500);
// O topo some desfocando no fim da seção — só no computador; no celular ele rola normalmente.
gsap.matchMedia().add('(min-width: 861px)', () => {
  gsap.to('#quem .bloco-texto, #quem .hero-video', {
    opacity: 0, y: -60, filter: 'blur(10px)', ease: 'none',
    scrollTrigger: { trigger: '#quem', start: '86% bottom', end: 'bottom bottom', scrub: true },
  });
});
// ---------- D: túnel dos 2000 ----------
const mundo = document.querySelector('.tunel-mundo');
const tiles = [];
const PROFUNDIDADE = 9000;
const totalParede = Math.min(window.WALL_COUNT || 0, window.innerWidth < 860 || modoLeve ? 160 : 321);
for (let i = 0; i < totalParede; i++) {
  const img = document.createElement('img');
  img.dataset.src = `media/wall/${String(i + 1).padStart(3, '0')}.webp`;   // carrega só perto da seção D
  img.alt = '';
  img.decoding = 'async';   // sem loading=lazy: em 3D o navegador acha que estão fora da tela e nunca carrega
  const ang = Math.random() * Math.PI * 2;
  const raio = (window.innerWidth < 860 ? 260 : 420) + Math.random() * 520;
  tiles.push({ el: img, x: Math.cos(ang) * raio, y: Math.sin(ang) * raio * 0.75, z: -(i / totalParede) * PROFUNDIDADE - 300 });
  mundo.appendChild(img);
}
// As 321 miniaturas só baixam quando o túnel já entrou um pouco na tela (15% acima da borda de baixo).
// No PC a seção começa colada na borda de baixo ao abrir o site; sem essa folga elas baixariam de cara.
new IntersectionObserver((entradas, obs) => {
  if (!entradas.some((e) => e.isIntersecting)) return;
  for (const tl of tiles) tl.el.src = tl.el.dataset.src;
  obs.disconnect();
}, { rootMargin: '0px 0px -15% 0px' }).observe(document.getElementById('numeros'));
const contador = { v: 0 };
const elContador = document.getElementById('contador');
function desenharTunel(prog) {
  const cam = prog * PROFUNDIDADE;
  for (const tl of tiles) {
    const z = tl.z + cam;
    const visivel = z < 500 && z > -6000;
    tl.el.style.visibility = visivel ? 'visible' : 'hidden';
    if (visivel) {
      tl.el.style.transform = `translate3d(${tl.x}px, ${tl.y}px, ${z}px)`;
      tl.el.style.opacity = Math.min(1, (z + 6000) / 2500) * Math.min(1, (500 - z) / 300);
    }
  }
}
desenharTunel(0);
// O túnel começa logo depois que o texto do +2000 aparece (texto entra em 'top 60%').
ScrollTrigger.create({
  trigger: '#numeros', start: 'top 45%', end: 'bottom top', scrub: true,
  onUpdate: (self) => desenharTunel(self.progress),
});
gsap.fromTo('.tunel', { opacity: 0 }, { opacity: 1, ease: 'none', scrollTrigger: { trigger: '#numeros', start: 'top 45%', end: 'top 0%', scrub: true } });
gsap.to(contador, {
  v: 2000, ease: 'power1.inOut', snap: { v: 10 },
  onUpdate: () => { elContador.textContent = contador.v.toLocaleString('pt-BR'); },
  scrollTrigger: { trigger: '#numeros', start: 'top 50%', end: 'center center', scrub: 1 },
});
gsap.from('.numeros > *', { opacity: 0, y: 30, stagger: 0.08, scrollTrigger: { trigger: '#numeros', start: 'top 60%', toggleActions: 'play none none reverse' } });

// ---------- E: parede de telas ----------
// Os vídeos são distribuídos em colunas (cada um na sua proporção real); as colunas deslizam em velocidades
// diferentes com a rolagem. Só tocam os que estão na tela. O filtro reorganiza a parede com o Flip.
const parede = document.querySelector('.parede');
const telaCheia = document.querySelector('.tela-cheia');
const videoCheio = telaCheia.querySelector('video');
const NOMES_TIPO = { homens: 'e.f.homens', mulheres: 'e.f.mulheres', historias: 'e.f.historias' };
let telas = [];
let colunas = [];
let filtroAtual = 'todos';

// Intercala as categorias (em vez de todos os homens juntos, depois todas as mulheres...).
function intercalar(lista) {
  const grupos = {};
  lista.forEach((f) => (grupos[f.tipo] = grupos[f.tipo] || []).push(f));
  const filas = Object.values(grupos), saida = [];
  for (let i = 0; saida.length < lista.length; i++) filas.forEach((g) => g[i] && saida.push(g[i]));
  return saida;
}

// O vídeo só ganha src quando chega perto da tela, e só toca enquanto está visível.
const perto = new IntersectionObserver((entradas) => entradas.forEach((e) => {
  const v = e.target.querySelector('video');
  if (e.isIntersecting && !v.getAttribute('src')) v.src = v.dataset.src;
}), { rootMargin: '300px 0px' });
const naTela = new IntersectionObserver((entradas) => entradas.forEach((e) => {
  if (modoLeve) return;   // aparelho fraco: só toca ao passar o mouse
  const v = e.target.querySelector('video');
  if (e.isIntersecting) v.play().catch(() => {}); else v.pause();
}), { threshold: 0.35 });

function rotuloTipo(tipo) {
  if (NOMES_TIPO[tipo]) return t(NOMES_TIPO[tipo]);
  return tipo === '3d' ? '3D' : tipo === 'inserts' ? 'Inserts' : tipo;
}

function criarTela(f) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'tela';
  b.dataset.flipId = f.id;
  b.style.aspectRatio = `${f.w} / ${f.h}`;
  b.innerHTML = `<video muted loop playsinline preload="none" poster="media/feed/${f.id}.webp" data-src="media/feed/${f.id}.mp4"></video><span class="tela-tipo"></span>`;
  const v = b.querySelector('video');
  v.setAttribute('muted', '');
  if (modoLeve) {
    b.addEventListener('pointerenter', () => { if (!v.getAttribute('src')) v.src = v.dataset.src; v.play().catch(() => {}); });
    b.addEventListener('pointerleave', () => v.pause());
  }
  b.addEventListener('click', () => abrirTela(f));
  perto.observe(b);
  naTela.observe(b);
  return b;
}

function quantasColunas() { return window.innerWidth < 860 ? 2 : window.innerWidth < 1280 ? 3 : 4; }

// Distribui as telas do filtro atual na coluna mais baixa (masonry), mantendo a ordem intercalada.
function distribuir() {
  const n = quantasColunas();
  if (colunas.length !== n) {
    parede.innerHTML = '';
    colunas = Array.from({ length: n }, () => {
      const c = document.createElement('div');
      c.className = 'coluna';
      parede.appendChild(c);
      return c;
    });
  }
  const alturas = new Array(n).fill(0);
  telas.forEach(({ el, dados }) => {
    const mostra = filtroAtual === 'todos' || dados.tipo === filtroAtual;
    el.hidden = !mostra;
    if (!mostra) return;
    const k = alturas.indexOf(Math.min(...alturas));
    colunas[k].appendChild(el);
    alturas[k] += dados.h / dados.w + 0.06;
  });
}

// As colunas deslizam em sentidos alternados (bem de leve) enquanto a seção passa pela tela.
let deslize = null;
function montarDeslize() {
  if (deslize) deslize.kill();
  gsap.set(colunas, { y: 0 });
  if (movimentoReduzido) return;
  deslize = gsap.timeline({ scrollTrigger: { trigger: parede, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
  colunas.forEach((c, i) => deslize.fromTo(c, { y: i % 2 ? -50 : 50 }, { y: i % 2 ? 50 : -130, ease: 'none' }, 0));
}

function traduzirParede() {
  telas.forEach(({ el, dados }) => {
    el.querySelector('.tela-tipo').textContent = rotuloTipo(dados.tipo);
    el.setAttribute('aria-label', `${t('e.ver')}: ${rotuloTipo(dados.tipo)}`);
  });
}

function montarParede() {
  telas = intercalar(window.FEED || []).map((f) => ({ el: criarTela(f), dados: f }));
  distribuir();
  traduzirParede();
  montarDeslize();
  ScrollTrigger.refresh();
}

// Filtro: as telas voam do lugar antigo para o novo (Flip); as que saem encolhem e somem.
let flipAtual = null;
document.querySelectorAll('.filtros button').forEach((b) => b.addEventListener('click', () => {
  if (b.dataset.filtro === filtroAtual) return;
  if (flipAtual) flipAtual.progress(1);   // clique rápido: termina a animação anterior antes de começar outra
  document.querySelectorAll('.filtros button').forEach((x) => x.classList.toggle('ativo', x === b));
  const estado = Flip.getState(telas.map((x) => x.el));
  filtroAtual = b.dataset.filtro;
  if (deslize) deslize.kill();
  gsap.set(colunas, { y: 0 });
  distribuir();
  // Com menos vídeos a parede encolhe: se a pessoa já desceu por ela, volta para o topo da parede
  // (logo abaixo da barra do topo), sem subir até o túnel da seção anterior.
  // O destino é um número fixo e não rola de novo se a rolagem do clique anterior ainda estiver andando
  // (recalcular no meio do movimento fazia a página passar do ponto e mostrar o túnel).
  const topoGrade = document.querySelector('.trabalhos').getBoundingClientRect().top;
  if (topoGrade < 0 && !lenis.isScrolling) lenis.scrollTo(window.scrollY + topoGrade - 100, { duration: 0.7 });
  flipAtual = Flip.from(estado, {
    duration: movimentoReduzido ? 0 : 0.7, ease: 'power3.inOut', absolute: true, stagger: 0.015, scale: true,
    onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.5, delay: 0.25 }),
    onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.6, duration: 0.35 }),
    onComplete: () => { montarDeslize(); ScrollTrigger.refresh(); },
  });
}));

// Clique: o vídeo abre grande no meio da tela, em loop.
function abrirTela(f) {
  videoCheio.poster = `media/feed/${f.id}.webp`;
  videoCheio.src = `media/feed/${f.id}.mp4`;
  telaCheia.style.setProperty('--proporcao', `${f.w} / ${f.h}`);
  telaCheia.showModal();
  lenis.stop();
  videoCheio.play().catch(() => {});
}
telaCheia.addEventListener('close', () => { videoCheio.pause(); videoCheio.removeAttribute('src'); lenis.start(); });
telaCheia.querySelector('.fechar').addEventListener('click', () => telaCheia.close());
telaCheia.addEventListener('click', (e) => { if (e.target === telaCheia) telaCheia.close(); });   // clique fora do vídeo

window.addEventListener('resize', () => {
  if (!telas.length || quantasColunas() === colunas.length) return;
  colunas = [];
  distribuir();
  montarDeslize();
  ScrollTrigger.refresh();
});

// HUD de baixo só acompanha o topo; some a partir da seção D.
ScrollTrigger.create({
  trigger: '#numeros', start: 'top 80%',
  onEnter: () => document.body.classList.add('hud-oculto'),
  onLeaveBack: () => document.body.classList.remove('hud-oculto'),
});

// ---------- F · Seu produto: pilha de cartas ----------
const cartas = gsap.utils.toArray('#produto .carta');
const pilhaAtual = document.getElementById('pilha-atual');
document.getElementById('pilha-total').textContent = String(cartas.length).padStart(2, '0');
// Posição de uma carta que está "n" posições abaixo do topo da pilha.
const naPilha = (n) => ({ xPercent: -50, yPercent: -50, y: n * 14, scale: 1 - n * 0.04, rotation: n === 0 ? 0 : (n % 2 ? 3 : -3) });
cartas.forEach((c, i) => gsap.set(c, { ...naPilha(Math.min(i, 3)), zIndex: cartas.length - i, opacity: i > 3 ? 0 : 1 }));
const tlPilha = gsap.timeline({
  scrollTrigger: {
    trigger: '#produto', start: 'top top', end: 'bottom bottom', scrub: 0.6,
    onUpdate: (self) => {
      const k = Math.min(cartas.length - 1, Math.floor(self.progress * (cartas.length - 1) + 0.5));
      pilhaAtual.textContent = String(k + 1).padStart(2, '0');
    },
  },
});
cartas.forEach((carta, i) => {
  if (i === cartas.length - 1) return;
  const lado = i % 2 ? 1 : -1;
  tlPilha.to(carta, { x: () => lado * window.innerWidth * 0.9, y: -120, rotation: lado * 28, opacity: 0, ease: 'power2.in', duration: 1 }, i);
  // As de baixo sobem uma posição.
  cartas.slice(i + 1).forEach((c, j) => {
    if (j > 3) return;
    tlPilha.to(c, { ...naPilha(j), opacity: 1, ease: 'power2.out', duration: 1 }, i);
  });
});

// ---------- G e H: entradas ----------
gsap.utils.toArray('.cabecalho-secao, .contato').forEach((el) => {
  gsap.from(el.children, { y: 40, opacity: 0, stagger: 0.1, duration: 1, scrollTrigger: { trigger: el, start: 'top 80%' } });
});

// Rodapé: "aberto a novos projetos" passando pelos 5 idiomas do site, com o texto embaralhando na troca.
const STATUS = [['PT', 'aberto a novos projetos'], ['EN', 'open to new projects'], ['DE', 'offen für neue Projekte'],
  ['FR', 'ouvert aux nouveaux projets'], ['IT', 'aperto a nuovi progetti']];
let statusAtual = idioma === 'en' ? 1 : 0;
const statusLang = document.getElementById('status-lang'), statusTexto = document.getElementById('status-texto');
function trocarStatus() {
  const [lang, texto] = STATUS[statusAtual];
  statusLang.textContent = lang;
  gsap.to(statusTexto, { duration: 0.7, scrambleText: { text: texto, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', speed: 0.5 } });
  statusAtual = (statusAtual + 1) % STATUS.length;
}
trocarStatus();
if (!movimentoReduzido) setInterval(trocarStatus, 3200);

// Rodapé: quanto tempo a página levou para carregar neste acesso.
window.addEventListener('load', () => {
  const s = performance.now() / 1000;
  document.getElementById('tempo-carga').textContent = `${s.toLocaleString(idioma === 'pt' ? 'pt-BR' : 'en', { maximumFractionDigits: 2, minimumFractionDigits: 2 })} s`;
});

// ---------- Início ----------
aplicarIdioma();
// O feed (vídeos) só é montado quando o navegador estiver ocioso.
requestAnimationFrame(() => requestAnimationFrame(mostrarTitulo));
(window.requestIdleCallback || ((f) => setTimeout(f, 300)))(montarParede);
