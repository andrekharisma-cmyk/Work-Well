const STORAGE_KEY = "workWellDataV1";

const materials = [
  {id:"fisik",title:"Bahaya Fisik",icon:"〰",category:"Jenis bahaya",summary:"Paparan kebisingan, suhu ekstrem, getaran, atau pencahayaan yang tidak memadai.",description:"Bahaya fisik berasal dari faktor lingkungan yang dapat memengaruhi keselamatan dan kesehatan pekerja. Dampaknya bergantung pada intensitas, durasi paparan, dan kondisi individu.",examples:["Kebisingan mesin yang tinggi","Permukaan panas atau lingkungan bersuhu ekstrem","Getaran dari peralatan kerja"],prevention:["Lakukan penilaian paparan sesuai prosedur","Gunakan rekayasa pengendalian dan pemeliharaan peralatan","Sediakan APD yang sesuai jika diperlukan"]},
  {id:"kimia",title:"Bahaya Kimia",icon:"⚗",category:"Jenis bahaya",summary:"Risiko dari gas, uap, debu, cairan, atau bahan kimia yang berbahaya.",description:"Bahaya kimia dapat masuk ke tubuh melalui pernapasan, kontak kulit, mata, atau jalur lain bergantung pada sifat bahan. Selalu ikuti label dan lembar data keselamatan bahan (SDS).",examples:["Uap pelarut di area kerja","Debu bahan tertentu","Cairan pembersih yang digunakan tidak sesuai petunjuk"],prevention:["Identifikasi bahan dan baca SDS","Gunakan substitusi atau ventilasi yang sesuai bila memungkinkan","Ikuti prosedur penyimpanan, pelabelan, dan APD yang ditetapkan"]},
  {id:"biologis",title:"Bahaya Biologis",icon:"✣",category:"Jenis bahaya",summary:"Paparan terhadap mikroorganisme atau bahan biologis yang dapat menimbulkan infeksi atau gangguan kesehatan.",description:"Bahaya biologis dapat ditemukan di layanan kesehatan, laboratorium, pengelolaan limbah, dan lingkungan lain. Pengendalian harus disesuaikan dengan jenis agen dan aktivitas.",examples:["Kontak dengan bahan biologis","Pengelolaan limbah yang tidak sesuai prosedur","Paparan percikan pada pekerjaan tertentu"],prevention:["Terapkan kebersihan tangan dan prosedur kerja aman","Gunakan APD sesuai risiko dan protokol","Ikuti prosedur penanganan limbah serta pelaporan paparan"]},
  {id:"ergonomi",title:"Bahaya Ergonomi",icon:"⌁",category:"Jenis bahaya",summary:"Risiko akibat postur janggal, gerakan berulang, atau penanganan beban yang tidak tepat.",description:"Risiko ergonomi dapat meningkat jika pekerjaan dilakukan berulang, dalam waktu lama, atau dengan posisi tubuh yang tidak nyaman. Desain kerja perlu disesuaikan dengan tugas dan pengguna.",examples:["Bekerja lama dengan posisi duduk tidak nyaman","Gerakan tangan berulang tanpa jeda yang memadai","Mengangkat beban dengan teknik atau alat yang tidak sesuai"],prevention:["Atur posisi kerja dan peralatan","Gunakan alat bantu saat diperlukan","Rencanakan variasi tugas dan jeda sesuai kebutuhan pekerjaan"]},
  {id:"psikososial",title:"Bahaya Psikososial",icon:"♡",category:"Kesehatan kerja",summary:"Faktor organisasi dan lingkungan sosial yang dapat memengaruhi kesejahteraan mental pekerja.",description:"Beban kerja tidak realistis, kontrol kerja yang rendah, komunikasi buruk, dan perundungan dapat menjadi faktor risiko psikososial. Pencegahan memerlukan dukungan individu dan perbaikan organisasi.",examples:["Tuntutan kerja yang tidak seimbang dengan sumber daya","Komunikasi atau pembagian tugas yang tidak jelas","Perilaku intimidasi atau perundungan di tempat kerja"],prevention:["Bangun komunikasi dan pembagian tugas yang jelas","Sediakan mekanisme pelaporan yang aman","Dorong dukungan atasan dan budaya kerja saling menghormati"]}
];

const apdItems = [
  {icon:"⛑",title:"Helm keselamatan",purpose:"Melindungi kepala dari bahaya tertentu seperti benturan atau benda jatuh jika helm sesuai dengan risiko.",use:["Pilih jenis helm sesuai penilaian bahaya dan standar yang berlaku.","Periksa kondisi, masa pakai, dan sistem suspensi sesuai petunjuk produsen.","Pastikan ukuran dan pemasangan sesuai."]},
  {icon:"◉",title:"Pelindung mata dan wajah",purpose:"Membantu melindungi mata atau wajah dari percikan, partikel, atau bahaya lain sesuai desainnya.",use:["Pilih kacamata, goggles, atau pelindung wajah berdasarkan jenis bahaya.","Pastikan pelindung kompatibel dengan APD lain.","Periksa lensa dan kebersihannya sebelum digunakan."]},
  {icon:"▤",title:"Pelindung pernapasan",purpose:"Respirator yang sesuai dapat membantu mengurangi paparan bahaya udara tertentu. Jenisnya harus dipilih berdasarkan risiko.",use:["Jangan memilih respirator hanya berdasarkan tampilan.","Ikuti prosedur pemilihan, pemasangan, pemeriksaan kesesuaian, dan perawatan.","Respirator tidak menggantikan kebutuhan pengendalian sumber bahaya."]},
  {icon:"♧",title:"Sarung tangan",purpose:"Melindungi tangan dari bahaya tertentu jika bahan dan jenis sarung tangan sesuai dengan pekerjaan.",use:["Pilih berdasarkan bahaya mekanis, kimia, panas, atau biologis yang relevan.","Periksa kerusakan sebelum digunakan.","Sarung tangan tidak cocok untuk semua pekerjaan; ikuti prosedur kerja."]},
  {icon:"◖",title:"Pelindung pendengaran",purpose:"Earplug atau earmuff yang sesuai dapat membantu mengurangi paparan kebisingan.",use:["Pilih berdasarkan tingkat dan karakteristik kebisingan.","Pastikan pemasangan benar dan alat terawat.","Pengendalian kebisingan pada sumber tetap perlu diprioritaskan."]},
  {icon:"▰",title:"Sepatu keselamatan",purpose:"Membantu melindungi kaki dari bahaya tertentu seperti benturan, tusukan, atau permukaan licin jika sesuai spesifikasi.",use:["Pilih fitur berdasarkan bahaya di area kerja.","Pastikan ukuran pas dan sol masih dalam kondisi baik.","Jaga kebersihan dan ganti jika rusak sesuai ketentuan."]}
];

const hazards = [
  {title:"Lantai basah di jalur berjalan",description:"Kamu melihat lantai basah di lorong yang sering dilewati. Tidak ada tanda peringatan dan orang masih melintas.",options:["Biarkan saja karena lantai akan kering sendiri","Amankan area sesuai prosedur, beri peringatan, dan laporkan atau bersihkan jika berwenang","Tutup mata agar tidak terganggu","Minta orang lain berjalan lebih cepat"],correct:1,feedback:"Area perlu diamankan agar orang tidak terpeleset. Beri peringatan dan ikuti prosedur pelaporan atau pembersihan yang berlaku."},
  {title:"Kabel melintang di jalur evakuasi",description:"Sebuah kabel melintang di jalur berjalan dan dapat menghalangi akses keluar saat keadaan darurat.",options:["Biarkan selama peralatan masih menyala","Tutup kabel dengan kertas tipis","Laporkan dan pastikan jalur dibebaskan oleh orang yang berwenang sesuai prosedur","Pindahkan kabel dengan menariknya tanpa memeriksa sumber listrik"],correct:2,feedback:"Jalur evakuasi harus tetap dapat diakses. Jangan menangani kabel listrik tanpa kewenangan; laporkan agar bahaya ditangani dengan aman."},
  {title:"Bahan kimia tanpa label jelas",description:"Sebuah wadah bahan kimia ditemukan tanpa label yang dapat dibaca di area kerja.",options:["Cium bahan untuk mengenalinya","Gunakan sedikit untuk menguji","Jangan gunakan atau menebak isinya; batasi akses dan laporkan sesuai prosedur","Pindahkan ke botol minuman"],correct:2,feedback:"Jangan mengidentifikasi bahan dengan mencium atau mencoba. Hindari penggunaan dan laporkan agar ditangani oleh petugas yang berwenang."}
];

const quizQuestions = [
  {q:"Apa langkah awal yang tepat ketika menemukan potensi bahaya di tempat kerja?",options:["Mengabaikannya jika belum ada kecelakaan","Mengikuti prosedur untuk mengamankan area dan melaporkannya","Memindahkan semua peralatan tanpa izin","Menunggu sampai orang lain melihatnya"],answer:1,explanation:"Potensi bahaya perlu ditangani sesuai prosedur, dengan mengutamakan keselamatan diri dan orang lain serta melaporkan kepada pihak yang berwenang."},
  {q:"APD sebaiknya dipilih berdasarkan apa?",options:["Warna yang paling menarik","Harga termurah saja","Penilaian bahaya, kesesuaian, dan standar yang berlaku","Pilihan rekan kerja tanpa pertimbangan lain"],answer:2,explanation:"Pemilihan APD harus sesuai dengan bahaya dan pekerjaan. APD adalah bagian dari pengendalian risiko, bukan pengganti seluruh langkah pengendalian lainnya."},
  {q:"Contoh bahaya ergonomi adalah ...",options:["Postur kerja janggal dan gerakan berulang","Tanda jalur evakuasi","Pelatihan keselamatan","Pemeriksaan alat pemadam"],answer:0,explanation:"Postur janggal, gerakan berulang, dan penanganan beban yang tidak sesuai dapat menimbulkan risiko ergonomi."},
  {q:"Jika menemukan wadah bahan kimia tanpa label, apa tindakan yang tepat?",options:["Mencium isinya","Mencampurnya dengan bahan lain","Menggunakannya sedikit untuk menguji","Tidak menggunakannya dan melaporkan sesuai prosedur"],answer:3,explanation:"Jangan menebak isi bahan kimia. Hindari penggunaan, amankan area sesuai kewenangan, dan laporkan kepada petugas yang tepat."},
  {q:"Apa tujuan utama jalur evakuasi?",options:["Tempat menyimpan barang sementara","Menyediakan akses keluar yang jelas saat keadaan darurat","Area istirahat","Jalur untuk meletakkan kabel"],answer:1,explanation:"Jalur evakuasi harus mudah dikenali, dapat diakses, dan tidak terhalang agar orang dapat keluar sesuai prosedur darurat."}
];

const checklistData = [
  {id:"evacuation",title:"Jalur evakuasi dapat diakses",desc:"Jalur dan pintu keluar tidak terhalang."},
  {id:"signs",title:"Tanda keselamatan terlihat",desc:"Tanda peringatan dan petunjuk mudah dikenali."},
  {id:"apd",title:"APD sesuai tersedia",desc:"APD yang dibutuhkan tersedia dan dalam kondisi layak."},
  {id:"housekeeping",title:"Area kerja tertata",desc:"Tidak ada hambatan yang dapat menyebabkan tersandung."},
  {id:"equipment",title:"Peralatan diperiksa",desc:"Pemeriksaan dilakukan sesuai prosedur dan kewenangan."},
  {id:"emergency",title:"Informasi darurat diketahui",desc:"Pengguna mengetahui cara melapor dan prosedur setempat."}
];

function defaultData(){return {completedMaterials:[],lastQuiz:null,checklist:{},checklistSavedAt:null,activity:[]};}
function loadData(){
  try { const raw=localStorage.getItem(STORAGE_KEY); return raw?{...defaultData(),...JSON.parse(raw)}:defaultData(); }
  catch(error){ console.warn("LocalStorage tidak tersedia:",error); return defaultData(); }
}
let appData=loadData();
function saveData(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(appData));}catch(error){showToast("Penyimpanan browser tidak tersedia. Data mungkin tidak tersimpan.");}}
function dateLabel(value){if(!value)return "—";try{return new Date(value).toLocaleString("id-ID",{dateStyle:"medium",timeStyle:"short"});}catch{return "—";}}
function addActivity(title,detail){appData.activity.unshift({title,detail,at:new Date().toISOString()});appData.activity=appData.activity.slice(0,15);saveData();}
let toastTimer;
function showToast(message){const toast=document.getElementById("toast");toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),2600);}

const pageNames={dashboard:"Dashboard",education:"Edukasi K3",apd:"Panduan APD",hazards:"Identifikasi Bahaya",checklist:"Safety Checklist",quiz:"Kuis K3",report:"Progres & Laporan"};
function navigate(page){
  if(!pageNames[page])return;
  document.querySelectorAll(".page").forEach(el=>el.classList.toggle("active",el.id===`page-${page}`));
  document.querySelectorAll(".nav-link").forEach(el=>el.classList.toggle("active",el.dataset.page===page));
  document.getElementById("pageTitle").textContent=pageNames[page];
  document.getElementById("sidebar").classList.remove("open");
  if(page==="report")renderReport();
  if(page==="checklist")renderChecklist();
  if(page==="dashboard")renderDashboard();
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll("[data-page]").forEach(el=>el.addEventListener("click",()=>navigate(el.dataset.page)));
document.getElementById("mobileMenu").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("year").textContent=new Date().getFullYear();

function renderDashboard(){
  document.getElementById("statMaterials").textContent=materials.length;
  const score=appData.lastQuiz;
  document.getElementById("statScore").textContent=score?`${score.score}/${score.total}`:"—";
  document.getElementById("statScoreNote").textContent=score?`${Math.round(score.score/score.total*100)}% · ${dateLabel(score.at)}`:"Belum mengerjakan kuis";
  const percent=Math.round(appData.completedMaterials.length/materials.length*100);
  document.getElementById("statProgress").textContent=`${percent}%`;
}
function renderMaterials(filter=""){
  const grid=document.getElementById("materialGrid");
  const q=filter.trim().toLowerCase();
  const filtered=materials.filter(m=>(m.title+" "+m.summary+" "+m.category).toLowerCase().includes(q));
  document.getElementById("materialCount").textContent=`${filtered.length} materi`;
  if(!filtered.length){grid.innerHTML='<div class="empty-state">Materi tidak ditemukan. Coba kata kunci lain.</div>';return;}
  grid.innerHTML=filtered.map(m=>{
    const done=appData.completedMaterials.includes(m.id);
    return `<article class="material-card"><div class="material-icon">${m.icon}</div><div><div class="tag-row"><span class="tag">${m.category}</span></div><h3>${escapeHTML(m.title)}</h3><p>${escapeHTML(m.summary)}</p><button class="text-button" data-material="${m.id}">Baca materi →</button>${done?'<span class="done-label">✓ Selesai</span>':""}</div></article>`;
  }).join("");
  grid.querySelectorAll("[data-material]").forEach(btn=>btn.addEventListener("click",()=>openMaterial(btn.dataset.material)));
}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
document.getElementById("materialSearch").addEventListener("input",e=>renderMaterials(e.target.value));
function openMaterial(id){
  const m=materials.find(x=>x.id===id);if(!m)return;
  const done=appData.completedMaterials.includes(id);
  document.getElementById("materialDialogContent").innerHTML=`<h2>${escapeHTML(m.title)}</h2><p>${escapeHTML(m.description)}</p><h3>Contoh bahaya</h3><ul>${m.examples.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul><h3>Langkah pencegahan</h3><ul>${m.prevention.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul><button class="btn btn-primary dialog-done" id="markMaterial">${done?"✓ Sudah ditandai selesai":"Tandai materi selesai"}</button>`;
  const dialog=document.getElementById("materialDialog");
  document.getElementById("markMaterial").addEventListener("click",()=>{
    if(!appData.completedMaterials.includes(id)){appData.completedMaterials.push(id);addActivity("Materi diselesaikan",m.title);renderMaterials(document.getElementById("materialSearch").value);renderDashboard();showToast("Progres materi berhasil disimpan.");}
    dialog.close();renderReport();
  });
  dialog.showModal();
}
document.getElementById("closeDialog").addEventListener("click",()=>document.getElementById("materialDialog").close());
document.getElementById("materialDialog").addEventListener("click",e=>{if(e.target===e.currentTarget)e.currentTarget.close();});

function renderAPD(){
  document.getElementById("apdGrid").innerHTML=apdItems.map(item=>`<article class="apd-card"><div class="apd-emoji">${item.icon}</div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.purpose)}</p><strong class="small-heading">Hal yang perlu diperhatikan</strong><ul>${item.use.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul></article>`).join("");
}
function renderHazards(){
  document.getElementById("hazardScenarios").innerHTML=hazards.map((s,i)=>`<article class="scenario-card" data-scenario="${i}"><div class="scenario-top"><span class="scenario-number">${String(i+1).padStart(2,"0")}</span><h3>${escapeHTML(s.title)}</h3></div><p>${escapeHTML(s.description)}</p><div class="scenario-options">${s.options.map((opt,j)=>`<button class="option-button" data-scenario-answer="${j}">${String.fromCharCode(65+j)}. ${escapeHTML(opt)}</button>`).join("")}</div><div class="scenario-result" aria-live="polite"></div></article>`).join("");
  document.querySelectorAll("[data-scenario]").forEach(card=>{
    const i=Number(card.dataset.scenario),s=hazards[i];
    card.querySelectorAll("[data-scenario-answer]").forEach(btn=>btn.addEventListener("click",()=>{
      card.querySelectorAll("[data-scenario-answer]").forEach(b=>{b.classList.remove("selected");b.disabled=true;});
      btn.classList.add("selected");
      const correct=Number(btn.dataset.scenarioAnswer)===s.correct;
      const result=card.querySelector(".scenario-result");
      result.className=`scenario-result scenario-feedback ${correct?"":"warning"}`;
      result.textContent=(correct?"Tepat. ":"Belum tepat. ")+s.feedback;
      addActivity("Latihan identifikasi bahaya",s.title);
    }));
  });
}
function renderChecklist(){
  const container=document.getElementById("checklistItems");
  container.innerHTML=checklistData.map(item=>`<div class="check-row"><div><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.desc)}</p></div><select class="status-select" data-check="${item.id}" aria-label="Status ${escapeHTML(item.title)}"><option value="pending">Belum diperiksa</option><option value="safe">Aman / sudah diperiksa</option><option value="unsafe">Perlu tindak lanjut</option></select></div>`).join("");
  container.querySelectorAll("[data-check]").forEach(sel=>{sel.value=appData.checklist[sel.dataset.check]||"pending";sel.addEventListener("change",updateChecklistSummary);});
  updateChecklistSummary();
}
function updateChecklistSummary(){
  const values=checklistData.map(item=>document.querySelector(`[data-check="${item.id}"]`)?.value||appData.checklist[item.id]||"pending");
  const safe=values.filter(v=>v==="safe").length,unsafe=values.filter(v=>v==="unsafe").length,pending=values.filter(v=>v==="pending").length;
  const checked=safe+unsafe,percent=Math.round(checked/checklistData.length*100);
  document.getElementById("checkPercent").textContent=`${percent}%`;
  document.getElementById("checkRing").style.background=`conic-gradient(${unsafe?"#e1ae37":"#2c8655"} ${percent*3.6}deg,#e8eee9 ${percent*3.6}deg)`;
  document.getElementById("safeCount").textContent=safe;document.getElementById("unsafeCount").textContent=unsafe;document.getElementById("pendingCount").textContent=pending;
  document.getElementById("checkSummaryText").textContent=checked===0?"Belum ada item yang diperiksa.":`${checked} dari ${checklistData.length} item sudah diberi status.${unsafe?` ${unsafe} item perlu tindak lanjut.`:""}`;
}
document.getElementById("saveChecklist").addEventListener("click",()=>{
  const values={};checklistData.forEach(item=>{values[item.id]=document.querySelector(`[data-check="${item.id}"]`).value;});
  appData.checklist=values;appData.checklistSavedAt=new Date().toISOString();addActivity("Checklist disimpan",`${Object.values(values).filter(v=>v==="safe").length} aman, ${Object.values(values).filter(v=>v==="unsafe").length} perlu tindak lanjut`);
  renderChecklist();renderReport();showToast("Hasil checklist tersimpan di browser.");
});
document.getElementById("resetChecklist").addEventListener("click",()=>{
  if(!confirm("Atur ulang semua status checklist?"))return;
  checklistData.forEach(item=>{document.querySelector(`[data-check="${item.id}"]`).value="pending";});updateChecklistSummary();
});

let quizState={index:0,answers:[],locked:false};
function startQuiz(){quizState={index:0,answers:[],locked:false};renderQuizQuestion();}
function renderQuizQuestion(){
  const content=document.getElementById("quizContent");
  const i=quizState.index;
  if(i>=quizQuestions.length){renderQuizResult();return;}
  const q=quizQuestions[i];
  document.getElementById("quizCounter").textContent=`Pertanyaan ${i+1} dari ${quizQuestions.length}`;
  document.getElementById("quizProgressBar").style.width=`${i/quizQuestions.length*100}%`;
  content.innerHTML=`<div class="question-label">PERTANYAAN ${String(i+1).padStart(2,"0")}</div><h2 class="quiz-question">${escapeHTML(q.q)}</h2><div class="quiz-options">${q.options.map((opt,j)=>`<button class="quiz-option" data-quiz-answer="${j}"><span class="option-letter">${String.fromCharCode(65+j)}</span><span>${escapeHTML(opt)}</span></button>`).join("")}</div><div id="quizFeedback"></div><div class="quiz-actions"><span class="muted">Pilih satu jawaban</span><button class="btn btn-primary" id="quizNext" disabled>${i===quizQuestions.length-1?"Lihat hasil":"Lanjut"} →</button></div>`;
  content.querySelectorAll("[data-quiz-answer]").forEach(btn=>btn.addEventListener("click",()=>answerQuiz(Number(btn.dataset.quizAnswer))));
  document.getElementById("quizNext").addEventListener("click",()=>{if(!quizState.locked)return;quizState.index++;quizState.locked=false;renderQuizQuestion();});
}
function answerQuiz(answer){
  if(quizState.locked)return;quizState.locked=true;quizState.answers[quizState.index]=answer;
  const q=quizQuestions[quizState.index];
  document.querySelectorAll("[data-quiz-answer]").forEach((btn,j)=>{btn.disabled=true;if(j===q.answer)btn.classList.add("correct");if(j===answer&&answer!==q.answer)btn.classList.add("incorrect");});
  const feedback=document.getElementById("quizFeedback");feedback.className="quiz-feedback";feedback.textContent=(answer===q.answer?"Benar. ":"Belum tepat. ")+q.explanation;
  document.getElementById("quizNext").disabled=false;
}
function renderQuizResult(){
  const score=quizQuestions.reduce((sum,q,i)=>sum+(quizState.answers[i]===q.answer?1:0),0);
  appData.lastQuiz={score,total:quizQuestions.length,at:new Date().toISOString()};
  addActivity("Kuis K3 diselesaikan",`Skor ${score}/${quizQuestions.length}`);
  document.getElementById("quizCounter").textContent="Kuis selesai";
  document.getElementById("quizProgressBar").style.width="100%";
  document.getElementById("quizContent").innerHTML=`<div class="result-score">${score}/${quizQuestions.length}</div><p class="result-subtitle">Jawaban benar: ${score} dari ${quizQuestions.length} (${Math.round(score/quizQuestions.length*100)}%).<br>${score===quizQuestions.length?"Sangat baik! Tetap terapkan prinsip keselamatan dalam konteks yang sesuai.":score>=3?"Bagus. Baca kembali materi untuk memperkuat pemahaman.":"Jangan khawatir. Pelajari materi K3 lalu coba kuis kembali."}</p><div class="result-actions"><button class="btn btn-primary" id="retryQuiz">Ulangi kuis</button><button class="btn btn-secondary" id="viewReport">Lihat laporan</button></div>`;
  document.getElementById("retryQuiz").addEventListener("click",startQuiz);
  document.getElementById("viewReport").addEventListener("click",()=>navigate("report"));
  renderDashboard();renderReport();
}
document.getElementById("printReport").addEventListener("click",()=>window.print());
document.getElementById("clearData").addEventListener("click",()=>{
  if(!confirm("Yakin ingin menghapus semua progres, skor, checklist, dan aktivitas lokal?"))return;
  appData=defaultData();saveData();renderDashboard();renderMaterials(document.getElementById("materialSearch").value);renderChecklist();renderReport();showToast("Data lokal berhasil dihapus.");
});
function renderReport(){
  document.getElementById("reportMaterials").textContent=`${appData.completedMaterials.length}/${materials.length}`;
  document.getElementById("reportScore").textContent=appData.lastQuiz?`${appData.lastQuiz.score}/${appData.lastQuiz.total}`:"—";
  document.getElementById("reportScoreDate").textContent=appData.lastQuiz?dateLabel(appData.lastQuiz.at):"Belum ada hasil";
  const saved=appData.checklistSavedAt?Object.values(appData.checklist).filter(v=>v==="safe").length:0;
  document.getElementById("reportChecklist").textContent=appData.checklistSavedAt?`${saved}/${checklistData.length}`:"—";
  document.getElementById("reportChecklistDate").textContent=appData.checklistSavedAt?dateLabel(appData.checklistSavedAt):"Belum disimpan";
  const activity=document.getElementById("reportActivity");
  if(!appData.activity.length){activity.innerHTML='<div class="empty-state">Belum ada aktivitas. Buka materi atau kerjakan kuis untuk mulai mencatat progres.</div>';return;}
  activity.innerHTML=appData.activity.map(item=>`<div class="activity-row"><div class="activity-icon">✓</div><div><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.detail)}</p></div><time>${escapeHTML(dateLabel(item.at))}</time></div>`).join("");
}
renderMaterials();renderAPD();renderHazards();renderChecklist();renderDashboard();renderReport();startQuiz();
