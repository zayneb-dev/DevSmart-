const P=[
{id:1,n:"PC Portable IdeaPad 3 15\"",b:"Lenovo",c:"Ordinateurs",p:1899,o:2190,e:'💻',s:["Core i5-1235U", "8 Go RAM", "512 Go SSD"]},
{id:2,n:"PC Portable Pavilion 15",b:"HP",c:"Ordinateurs",p:2349,o:2690,e:'💻',s:["Ryzen 5 7530U", "16 Go RAM", "512 Go SSD"]},
{id:3,n:"PC Portable Inspiron 15 3520",b:"Dell",c:"Ordinateurs",p:1790,o:1990,e:'💻',s:["Core i3-1215U", "8 Go RAM", "256 Go SSD"]},
{id:4,n:"PC Portable Vivobook 15",b:"Asus",c:"Ordinateurs",p:1999,o:2299,e:'💻',s:["Core i5-1235U", "8 Go RAM", "512 Go SSD"]},
{id:5,n:"PC Portable Aspire 5",b:"Acer",c:"Ordinateurs",p:1849,o:2099,e:'💻',s:["Ryzen 5 5500U", "8 Go RAM", "512 Go SSD"]},
{id:6,n:"MacBook Air 13\" M2",b:"Apple",c:"Ordinateurs",p:4290,o:4690,e:'💻',s:["Puce Apple M2", "8 Go RAM", "256 Go SSD"]},
{id:7,n:"PC Portable ThinkPad E15",b:"Lenovo",c:"Ordinateurs",p:2790,e:'💻',s:["Core i7-1255U", "16 Go RAM", "512 Go SSD"]},
{id:8,n:"PC Portable Gaming Katana 15",b:"MSI",c:"Ordinateurs",p:3890,o:4290,e:'🎮',s:["Core i7-12650H", "RTX 4060 8 Go", "16 Go RAM"]},
{id:9,n:"PC Portable Gaming TUF F15",b:"Asus",c:"Ordinateurs",p:3490,o:3790,e:'🎮',s:["Core i5-12500H", "RTX 3050", "16 Go RAM"]},
{id:10,n:"PC Gamer DevSmart RTX",b:"DevSmart",c:"Ordinateurs",p:3590,o:3990,e:'🖥️',s:["Core i5-13400F", "RTX 4060 8 Go", "1 To SSD"]},
{id:11,n:"PC de bureau OptiPlex 3000",b:"Dell",c:"Ordinateurs",p:1650,e:'🖥️',s:["Core i5-12500", "8 Go RAM", "256 Go SSD"]},
{id:12,n:"PC tout-en-un IdeaCentre 24\"",b:"Lenovo",c:"Ordinateurs",p:2390,o:2590,e:'🖥️',s:["Ryzen 5 5500U", "8 Go RAM", "512 Go SSD"]},
{id:13,n:"SSD NVMe NV2 1 To",b:"Kingston",c:"Composants",p:249,o:299,e:'💾',s:["Lecture 3500 Mo/s", "Format M.2", "Garantie 3 ans"]},
{id:14,n:"SSD 980 PRO 1 To",b:"Samsung",c:"Composants",p:389,o:429,e:'💾',s:["Lecture 7000 Mo/s", "PCIe 4.0", "Garantie 5 ans"]},
{id:15,n:"RAM Fury Beast DDR4 16 Go",b:"Kingston",c:"Composants",p:159,e:'🧠',s:["3200 MHz", "CL16", "Compatible PC & portable"]},
{id:16,n:"RAM Vengeance DDR5 32 Go (2×16)",b:"Corsair",c:"Composants",p:369,o:419,e:'🧠',s:["5600 MHz", "CL36", "Kit 2×16 Go"]},
{id:17,n:"Carte graphique RTX 4060 8 Go",b:"MSI",c:"Composants",p:1390,o:1490,e:'🎮',s:["8 Go GDDR6", "DLSS 3", "HDMI + 3×DP"]},
{id:18,n:"Carte graphique RX 7600 8 Go",b:"Sapphire",c:"Composants",p:1290,o:1390,e:'🎮',s:["8 Go GDDR6", "FSR 3", "HDMI + 3×DP"]},
{id:19,n:"Processeur Ryzen 5 5600",b:"AMD",c:"Composants",p:449,o:499,e:'⚙️',s:["6 cœurs / 12 threads", "Jusqu'à 4,4 GHz", "Socket AM4"]},
{id:20,n:"Processeur Core i5-13400F",b:"Intel",c:"Composants",p:599,o:649,e:'⚙️',s:["10 cœurs", "Jusqu'à 4,6 GHz", "Socket LGA1700"]},
{id:21,n:"Carte mère B550 AORUS Elite",b:"Gigabyte",c:"Composants",p:479,e:'🔧',s:["Socket AM4", "DDR4", "M.2 NVMe"]},
{id:22,n:"Alimentation 650W 80+ Bronze",b:"Cooler Master",c:"Composants",p:259,o:289,e:'🔋',s:["650 W", "80+ Bronze", "Câbles semi-modulaires"]},
{id:23,n:"Boîtier PC ATX Verre trempé",b:"Thermaltake",c:"Composants",p:229,e:'🗄️',s:["3 ventilateurs RGB", "Verre trempé", "Format ATX"]},
{id:24,n:"Disque dur BarraCuda 2 To",b:"Seagate",c:"Composants",p:219,e:'💽',s:["7200 tr/min", "SATA III", "Cache 256 Mo"]},
{id:25,n:"Souris Gamer G102",b:"Logitech",c:"Accessoires",p:49,o:65,e:'🖱️',s:["8000 DPI", "Éclairage RGB", "6 boutons"]},
{id:26,n:"Souris DeathAdder Essential",b:"Razer",c:"Accessoires",p:189,o:229,e:'🖱️',s:["6400 DPI", "5 boutons", "Forme ergonomique"]},
{id:27,n:"Souris Gamer Cobra M711",b:"Redragon",c:"Accessoires",p:59,o:79,e:'🖱️',s:["10 000 DPI", "7 boutons", "Rétroéclairage RGB"]},
{id:28,n:"Clavier mécanique Kumara K552",b:"Redragon",c:"Accessoires",p:129,e:'⌨️',s:["Switches rouges", "AZERTY", "Format compact TKL"]},
{id:29,n:"Clavier Gamer K55 RGB",b:"Corsair",c:"Accessoires",p:169,o:199,e:'⌨️',s:["Rétroéclairage RGB", "6 touches macro", "Repose-poignets"]},
{id:30,n:"Clavier sans fil MX Keys",b:"Logitech",c:"Accessoires",p:399,o:449,e:'⌨️',s:["Sans fil Bluetooth", "Rétroéclairé", "Multi-appareils"]},
{id:31,n:"Casque Gamer Cloud Stinger",b:"HyperX",c:"Accessoires",p:149,o:189,e:'🎧',s:["Micro rotatif", "Léger et confortable", "Jack 3,5 mm"]},
{id:32,n:"Casque Gamer Arctis 5",b:"SteelSeries",c:"Accessoires",p:429,o:489,e:'🎧',s:["Son DTS 7.1", "Micro rétractable", "Éclairage RGB"]},
{id:33,n:"Enceinte Bluetooth Flip 6",b:"JBL",c:"Accessoires",p:369,o:419,e:'🔊',s:["Étanche IP67", "12 h d'autonomie", "Bluetooth 5.1"]},
{id:34,n:"Écran Gaming 27\" UltraGear 2K",b:"LG",c:"Accessoires",p:799,o:899,e:'🖥️',s:["2560×1440 IPS", "165 Hz, 1 ms", "HDMI + DisplayPort"]},
{id:35,n:"Écran 24\" Full HD IPS",b:"Philips",c:"Accessoires",p:369,o:419,e:'🖥️',s:["1920×1080", "75 Hz", "HDMI + VGA"]},
{id:36,n:"Webcam C920 HD Pro",b:"Logitech",c:"Accessoires",p:219,o:249,e:'📷',s:["Full HD 1080p", "Micro stéréo", "USB"]},
{id:37,n:"Sac à dos pour PC 15,6\"",b:"HP",c:"Accessoires",p:59,e:'🎒',s:["Compatible 15,6\"", "Résistant à l'eau", "Compartiments"]},
{id:38,n:"Powerbank 20 000 mAh",b:"Anker",c:"Accessoires",p:129,o:149,e:'🔋',s:["Charge rapide 22,5 W", "2 ports USB", "Ultra fin"]},
{id:39,n:"Clé USB 128 Go",b:"SanDisk",c:"Accessoires",p:39,e:'💾',s:["USB 3.0", "128 Go", "Jusqu'à 150 Mo/s"]},
{id:40,n:"Hub USB-C 7 en 1",b:"Ugreen",c:"Accessoires",p:99,e:'🔌',s:["HDMI 4K", "3×USB 3.0", "Lecteur SD"]},
{id:41,n:"Routeur Wi-Fi 6 Archer AX55",b:"TP-Link",c:"Réseau",p:219,o:259,e:'📡',s:["AX3000 double bande", "4 ports Gigabit", "Couverture 150 m²"]},
{id:42,n:"Routeur Wi-Fi AC1200",b:"Tenda",c:"Réseau",p:89,o:109,e:'📡',s:["Double bande", "4 antennes", "Installation facile"]},
{id:43,n:"Switch 8 ports Gigabit",b:"TP-Link",c:"Réseau",p:69,e:'🔌',s:["8×10/100/1000", "Boîtier métal", "Plug & play"]},
{id:44,n:"Switch 24 ports Gigabit",b:"D-Link",c:"Réseau",p:449,o:499,e:'🔌',s:["24×Gigabit", "Rackable 19\"", "Sans configuration"]},
{id:45,n:"Point d'accès Wi-Fi 6 UniFi U6 Lite",b:"Ubiquiti",c:"Réseau",p:599,o:649,e:'📶',s:["Wi-Fi 6", "Montage plafond", "PoE"]},
{id:46,n:"Répéteur Wi-Fi RE200 AC750",b:"TP-Link",c:"Réseau",p:79,o:99,e:'📶',s:["Double bande", "Jusqu'à 750 Mbps", "Prise murale"]},
{id:47,n:"Pack Mesh Deco M4 (×2)",b:"TP-Link",c:"Réseau",p:369,o:429,e:'🏠',s:["Wi-Fi AC1200", "Couverture 260 m²", "Gestion par appli"]},
{id:48,n:"Routeur 4G+ B535",b:"Huawei",c:"Réseau",p:249,o:289,e:'📱',s:["4G+ LTE", "Wi-Fi AC1300", "Port RJ45"]},
{id:49,n:"Câble réseau Cat6 UTP 305 m",b:"Legrand",c:"Réseau",p:329,e:'🔗',s:["Cat6", "Bobine 305 m", "Cuivre pur"]},
{id:50,n:"Baie de brassage 9U murale",b:"Digitus",c:"Réseau",p:549,e:'🗄️',s:["9U / 19\"", "Porte vitrée", "Ventilation"]},
{id:51,n:"Caméra IP Wi-Fi 2K C6N",b:"Ezviz",c:"Réseau",p:139,o:169,e:'📹',s:["Résolution 2K", "Rotation 360°", "Vision nocturne"]},
{id:52,n:"Adaptateur Wi-Fi USB Archer T3U",b:"TP-Link",c:"Réseau",p:59,e:'📶',s:["AC1300", "USB 3.0", "Double bande"]}];
const CATS=['Tous','Ordinateurs','Composants','Accessoires','Réseau'],FREE=300,FEE=8;
const GOV=['Ariana','Béja','Ben Arous','Bizerte','Gabès','Gafsa','Jendouba','Kairouan','Kasserine','Kébili','Le Kef','Mahdia','La Manouba','Médenine','Monastir','Nabeul','Sfax','Sidi Bouzid','Siliana','Sousse','Tataouine','Tozeur','Tunis','Zaghouan'];
let cart={},cat='Tous',brand='',view='cart';
const $=i=>document.getElementById(i),f=n=>n.toLocaleString('fr-TN').replace(/\u202f|\u00a0/g,' ')+' DT';

// ===== Affichage des produits + filtres =====
function shop(){
const inCat=P.filter(x=>cat=='Tous'||x.c==cat),brands=[...new Set(inCat.map(x=>x.b).filter(Boolean))].sort();
$('bar').innerHTML=CATS.map(c=>`<button class="${c==cat?'on':''}" onclick="cat='${c}';brand='';shop()">${c}</button>`).join('')+`<select aria-label="Marque" onchange="brand=this.value;shop()"><option value="">Toutes les marques</option>${brands.map(b=>`<option${b==brand?' selected':''}>${b}</option>`).join('')}</select>`;
$('grid').innerHTML=inCat.filter(x=>!brand||x.b==brand).map(x=>`<div class="p"><div class="pi">${x.e}${x.o?`<span class="tag">-${Math.round((1-x.p/x.o)*100)}%</span>`:''}</div><div class="pb"><small>${x.b?x.b+' · ':''}${x.c}</small><h3>${x.n}</h3><ul>${x.s.map(s=>`<li>${s}</li>`).join('')}</ul><div class="price"><b>${f(x.p)}</b>${x.o?`<s>${f(x.o)}</s>`:''}</div><button class="add" onclick="add(${x.id})">Ajouter au panier</button></div></div>`).join('')}

// ===== Panier : calculs (sous-total, livraison gratuite pour les accessoires) =====
const sub=()=>Object.entries(cart).reduce((s,[i,q])=>s+P.find(x=>x.id==i).p*q,0);
const cnt=()=>Object.values(cart).reduce((a,b)=>a+b,0);
const acc=()=>Object.entries(cart).reduce((t,[i,q])=>{const x=P.find(y=>y.id==i);return t+(x&&x.c=='Accessoires'?x.p*q:0)},0);
const fee=s=>s==0||acc()>=FREE?0:FEE;
function toast(m){const t=$('ts');t.textContent=m;t.classList.add('on');clearTimeout(t.h);t.h=setTimeout(()=>t.classList.remove('on'),1800)}
function add(id){cart[id]=(cart[id]||0)+1;toast('Produit ajouté au panier ✓');draw()}
function qty(id,d){cart[id]+=d;if(cart[id]<=0)delete cart[id];draw()}
function rm(id){delete cart[id];draw()}
function open(v){view=v||view;$('dr').classList.add('on');$('ov').classList.add('on');draw()}
function close(){$('dr').classList.remove('on');$('ov').classList.remove('on')}

// ===== Panier : affichage =====
function draw(){
$('cnt').textContent=cnt();const s=sub(),d=fee(s),db=$('db'),df=$('df');
if(view=='done')return;
if(view=='cart'){$('dt').textContent='Mon panier';
db.innerHTML=cnt()?Object.entries(cart).map(([i,q])=>{const x=P.find(y=>y.id==i);return`<div class="it"><em>${x.e}</em><div><h4>${x.n}</h4><small>${f(x.p)}</small><div class="q"><button onclick="qty(${i},-1)" aria-label="Moins">−</button><b>${q}</b><button onclick="qty(${i},1)" aria-label="Plus">+</button><button class="rm" onclick="rm(${i})">Retirer</button></div></div><b>${f(x.p*q)}</b></div>`}).join(''):'<div class="empty">🛒<br>Votre panier est vide.<br>Ajoutez un produit pour commencer.</div>';
df.innerHTML=cnt()?sum(s,d)+`<button class="btn" onclick="view='form';draw()">Passer la commande</button>`:''}
else{$('dt').textContent='Finaliser la commande';
db.innerHTML=`<form id="fm" onsubmit="send(event)"><label>Nom et prénom *</label><input name="nom" required autocomplete="name"><label>Téléphone *</label><input name="tel" required type="tel" pattern="[0-9 +]{8,14}" placeholder="Ex : 22 123 456" autocomplete="tel"><label>E-mail</label><input name="mail" type="email"><label>Gouvernorat *</label><select name="gov" required><option value="">Choisir…</option>${GOV.map(g=>`<option>${g}</option>`).join('')}</select><label>Adresse de livraison *</label><textarea name="adr" required rows="2"></textarea><label>Remarque</label><input name="rem" placeholder="Facultatif"></form><p class="note" style="margin-top:12px">Paiement à la livraison.</p>`;
df.innerHTML=sum(s,d)+`<button class="btn" form="fm">Confirmer la commande</button><button class="rm" style="margin-top:10px" onclick="view='cart';draw()">← Retour au panier</button>`}}
function sum(s,d){const a=acc(),left=Math.max(0,FREE-a);return`<div class="prog"><i style="width:${Math.min(100,a/FREE*100)}%"></i></div><p class="note ${left?'':'g'}">${left?`Ajoutez ${f(left)} d'accessoires pour la livraison gratuite`:'🎉 Livraison gratuite !'}</p><div class="row"><span>Sous-total</span><b>${f(s)}</b></div><div class="row"><span>Livraison</span><b>${d?f(d):'Gratuite'}</b></div><div class="row t"><span>Total</span><span>${f(s+d)}</span></div>`}

// ===== Passer la commande =====
function send(e){e.preventDefault();const s=sub(),d=fee(s),n='DS-'+Date.now().toString().slice(-6),fd=new FormData(e.target);
const lines=Object.entries(cart).map(([i,q])=>`${q}× ${P.find(x=>x.id==i).n}`).join('%0A');
const msg=`Commande ${n}%0A${lines}%0ATotal : ${s+d} DT%0AClient : ${fd.get('nom')} – ${fd.get('tel')}%0A${fd.get('gov')}, ${fd.get('adr')}`;
cart={};view='done';$('dt').textContent='Commande envoyée';
$('db').innerHTML=`<div class="ok"><em>✅</em><h3>Merci ${fd.get('nom').split(' ')[0]} !</h3><p>Commande <b>${n}</b> enregistrée.<br>Total à payer à la livraison : <b>${f(s+d)}</b>.<br>Nous vous appelons très vite pour confirmer.</p><a class="btn" style="margin-top:18px" target="_blank" rel="noopener" href="https://wa.me/21600000000?text=${msg}">Envoyer aussi sur WhatsApp</a></div>`;
$('df').innerHTML=`<button class="btn" onclick="view='cart';draw();close()">Fermer</button>`;$('cnt').textContent=0}

// ===== Demande de devis =====
function ask(s){$('qf').service.value=s;$('devis').scrollIntoView({behavior:'smooth'})}
async function quote(e){e.preventDefault();const f=e.target,d=Object.fromEntries(new FormData(f)),b=f.querySelector('button');b.disabled=true;let ok=false;
try{const r=await fetch('/api/quotes',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)});ok=r.ok}catch{}
const wa='https://wa.me/21600000000?text='+encodeURIComponent(`Demande de devis : ${d.service}\n${d.name}${d.company?' ('+d.company+')':''} – ${d.phone}\n${d.message}`);
$('qm').innerHTML=ok?'✅ Merci ! Votre demande est bien reçue, nous vous contactons sous 24 h.':`Envoyez votre demande directement sur WhatsApp :<br><a class="btn" target="_blank" rel="noopener" href="${wa}">Envoyer sur WhatsApp</a>`;
if(ok)f.reset();b.disabled=false}

// ===== Événements & démarrage =====
$('open').onclick=()=>open(cnt()?'cart':'cart');$('cl').onclick=close;$('ov').onclick=close;
shop();
