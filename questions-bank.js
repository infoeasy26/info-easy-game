/* =====================================================================
   Info Easy | Adventure Map Interactive — بنك الأسئلة (ملف مستقل)
   ---------------------------------------------------------------------
   الجزر 01 إلى 06 (كل الجزر 30 سؤالاً عدا الجزيرة 04: 15 سؤالاً، 5 لكل مرحلة)

   كيف يُحدَّث هذا الملف؟
   • لكل سؤال معرّف ثابت (id) لا يتغير أبداً، مثل: I01-Q07
   • status: 'draft' = مسودة بانتظار المراجعة العلمية | 'approved' = معتمد
     (تظهر شارة «مسودة» على السؤال داخل اللعبة ما دام draft)
   • settings.playDrafts = true  → تُلعب المسودات للاختبار والمراجعة
     بعد اعتماد البنك: ضعي status:'approved' على الأسئلة (أو playDrafts:false
     لإخفاء كل ما لم يُعتمد بعد).
   • وضع المراجعة: افتحي اللعبة بالرابط  ...html?review=1  لفتح كل المراحل
     وإظهار معرّف السؤال ونوعه وزر «عرض الإجابة» وملاحظات المراجعة.
   • الحقل reviewNote يوضح أي إضافة أُضيفت خارج البنك الأصلي (مشتتات الخيارات
     أو أمثلة التصنيف) لتتم مراجعتها.

   أنواع الأسئلة المدعومة (type):
     mcq       اختيار من متعدد          options[] + answer (فهرس)
     truefalse صح أم خطأ               answer: true | false
     fill      ملء الفراغ              template بعلامات {0} {1} + blanks[{accept:[..]}]
     image     التعرف على الصورة       image + options[] + answer
     hotspot   تحديد عنصر في الصورة    image + answer (معرّف العنصر data-hs)
     match     الربط بين العناصر       pairs[{l,r}] + extra[] اختياري (خيارات زائدة لا ارتباط لها)
     finderror اكتشف الخطأ وصحّح      parts[{t,wrong,br?}] + fixes[] + fixAnswer  (br:true = سطر جديد بعد الجزء)
     chart     إكمال المخطط            nodes[] (null = الفراغ) + options[] + answer
     order     ترتيب الخطوات           items[] بالترتيب الصحيح (يُخلط عند العرض فقط)
     classify  التصنيف                 cats[] + items[{t,c}]
     multi     اختيار عدة إجابات       options[] + answers[] (فهارس) + need  (أو free:true = اختر كل الصحيحة)
   place     سحب الأسماء إلى أماكنها على الصورة   image + items[{t,z}] (z = معرّف منطقة data-zone)
   hotspot   (متعدد) answers[] + need = تحديد عدة أخطاء في الرسم؛ وanswer قد تكون قائمة إجابات مقبولة
   ===================================================================== */

/* ---------------------- الرسومات (SVG مضمّنة، لا تحتاج ملفات صور) ---------------------- */
window.INFO_EASY_IMAGES = {

/* Q03 — سجلات غير مرتبة (جانب) | قائمة نتائج مصنفة (جانب) */
q03: `<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" font-family="Tahoma,Arial,sans-serif">
<rect width="640" height="300" rx="16" fill="#eaf6ff"/>
<rect x="12" y="12" width="300" height="276" rx="12" fill="#fff" stroke="#9cc7ee" stroke-width="2"/>
<rect x="328" y="12" width="300" height="276" rx="12" fill="#fff" stroke="#9cc7ee" stroke-width="2"/>
<g font-size="15" fill="#1c3b6b" text-anchor="middle">
 <g transform="translate(70,70) rotate(-12)"><rect x="-50" y="-26" width="100" height="52" rx="6" fill="#fff3b0" stroke="#d9b800"/><text y="-4">سامي</text><text y="16">14.25</text></g>
 <g transform="translate(180,60) rotate(9)"><rect x="-50" y="-26" width="100" height="52" rx="6" fill="#ffd6e0" stroke="#e0829a"/><text y="-4">ليلى</text><text y="16">8.50</text></g>
 <g transform="translate(250,125) rotate(-6)"><rect x="-46" y="-26" width="92" height="52" rx="6" fill="#d4f5dd" stroke="#6bbf86"/><text y="-4">كريم</text><text y="16">11.75</text></g>
 <g transform="translate(95,150) rotate(7)"><rect x="-50" y="-26" width="100" height="52" rx="6" fill="#d8e8ff" stroke="#7aa6e6"/><text y="-4">أمينة</text><text y="16">16.00</text></g>
 <g transform="translate(200,200) rotate(-10)"><rect x="-50" y="-26" width="100" height="52" rx="6" fill="#ffe1c2" stroke="#e0a05c"/><text y="-4">يوسف</text><text y="16">9.25</text></g>
 <g transform="translate(75,238) rotate(5)"><rect x="-46" y="-24" width="92" height="48" rx="6" fill="#e8d9ff" stroke="#a98be0"/><text y="-4">مريم</text><text y="16">12.50</text></g>
 <g transform="translate(262,248) rotate(-4)"><rect x="-40" y="-22" width="80" height="44" rx="6" fill="#fff3b0" stroke="#d9b800"/><text y="-3">نور</text><text y="15">15.00</text></g>
</g>
<g font-size="15" text-anchor="middle" fill="#1c3b6b">
 <rect x="344" y="26" width="268" height="36" rx="8" fill="#1a73c9"/><text x="478" y="50" fill="#fff" font-weight="bold">قائمة النتائج</text>
 <g stroke="#cfe3f7">
  <rect x="344" y="70" width="268" height="30" fill="#f2f8ff"/><rect x="344" y="104" width="268" height="30" fill="#fff"/>
  <rect x="344" y="138" width="268" height="30" fill="#f2f8ff"/><rect x="344" y="172" width="268" height="30" fill="#fff"/>
  <rect x="344" y="206" width="268" height="30" fill="#f2f8ff"/><rect x="344" y="240" width="268" height="30" fill="#fff"/>
 </g>
 <g font-weight="bold">
  <circle cx="592" cy="85" r="11" fill="#ffd53a"/><text x="592" y="90">1</text>
  <circle cx="592" cy="119" r="11" fill="#c9d6e6"/><text x="592" y="124">2</text>
  <circle cx="592" cy="153" r="11" fill="#e0a56a"/><text x="592" y="158">3</text>
  <text x="592" y="192">4</text><text x="592" y="226">5</text><text x="592" y="260">6</text>
 </g>
 <text x="500" y="90">أمينة</text><text x="400" y="90">16.00</text>
 <text x="500" y="124">نور</text><text x="400" y="124">15.00</text>
 <text x="500" y="158">سامي</text><text x="400" y="158">14.25</text>
 <text x="500" y="192">مريم</text><text x="400" y="192">12.50</text>
 <text x="500" y="226">كريم</text><text x="400" y="226">11.75</text>
 <text x="500" y="260">يوسف</text><text x="400" y="260">9.25</text>
</g></svg>`,

/* Q08 — حاسوب + هاتف ذكي + لوحة رقمية + أجهزة متصلة بشبكة */
q08: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" font-family="Tahoma,Arial,sans-serif">
<rect width="640" height="320" rx="16" fill="#eaf6ff"/>
<g stroke="#1a73c9" stroke-width="3" stroke-dasharray="7 6" fill="none">
 <path d="M320 160 L130 90"/><path d="M320 160 L510 90"/><path d="M320 160 L130 240"/><path d="M320 160 L510 240"/>
</g>
<!-- الشبكة (المركز) -->
<circle cx="320" cy="160" r="40" fill="#1a73c9"/>
<g fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round">
 <path d="M300 152 a28 28 0 0 1 40 0"/><path d="M306 162 a18 18 0 0 1 28 0"/></g>
<circle cx="320" cy="174" r="4" fill="#fff"/>
<!-- حاسوب محمول -->
<g transform="translate(70,50)"><rect x="12" y="0" width="96" height="64" rx="6" fill="#274b7a"/><rect x="18" y="6" width="84" height="52" rx="3" fill="#7fd0ff"/>
 <path d="M0 74 L120 74 L110 64 L10 64 Z" fill="#9db4cf"/><rect x="0" y="74" width="120" height="6" rx="3" fill="#6f87a6"/>
 <rect x="26" y="16" width="40" height="5" rx="2" fill="#fff"/><rect x="26" y="28" width="60" height="5" rx="2" fill="#fff" opacity=".7"/></g>
<!-- لوحة رقمية -->
<g transform="translate(440,40)"><rect x="0" y="0" width="140" height="92" rx="7" fill="#274b7a"/><rect x="7" y="7" width="126" height="78" rx="3" fill="#bdf1d2"/>
 <g fill="#2fbf71"><rect x="24" y="52" width="16" height="26"/><rect x="50" y="38" width="16" height="40"/><rect x="76" y="28" width="16" height="50"/><rect x="102" y="44" width="16" height="34"/></g>
 <rect x="62" y="92" width="16" height="22" fill="#6f87a6"/><rect x="38" y="112" width="64" height="8" rx="4" fill="#6f87a6"/></g>
<!-- هاتف ذكي -->
<g transform="translate(95,200)"><rect x="0" y="0" width="52" height="92" rx="10" fill="#274b7a"/><rect x="5" y="10" width="42" height="68" rx="3" fill="#ffe08a"/>
 <circle cx="26" cy="85" r="3" fill="#9db4cf"/><rect x="11" y="18" width="30" height="5" rx="2" fill="#fff"/><rect x="11" y="30" width="22" height="5" rx="2" fill="#fff" opacity=".7"/></g>
<!-- حاسوب مكتبي (جهاز متصل) -->
<g transform="translate(470,200)"><rect x="0" y="0" width="80" height="56" rx="5" fill="#274b7a"/><rect x="5" y="5" width="70" height="40" rx="3" fill="#d9c8ff"/>
 <rect x="34" y="56" width="12" height="12" fill="#6f87a6"/><rect x="20" y="68" width="40" height="6" rx="3" fill="#6f87a6"/>
 <rect x="92" y="14" width="26" height="62" rx="4" fill="#9db4cf"/><circle cx="105" cy="62" r="3" fill="#274b7a"/></g>
</svg>`,

/* Q13 — ثلاثة عناصر: حاسوب (معدات) | برنامج (برمجيات) | شبكة متصلة (شبكات الاتصالات) — العناصر قابلة للنقر */
q13: `<svg viewBox="0 0 640 280" xmlns="http://www.w3.org/2000/svg" role="group" font-family="Tahoma,Arial,sans-serif">
<rect width="640" height="280" rx="16" fill="#eaf6ff"/>
<g data-hs="hw" class="hs" tabindex="0" role="button" aria-label="العنصر الأول">
 <rect class="hsbg" x="14" y="16" width="196" height="248" rx="14" fill="#fff" stroke="#9cc7ee" stroke-width="3"/>
 <rect x="52" y="52" width="120" height="86" rx="8" fill="#274b7a"/><rect x="60" y="60" width="104" height="70" rx="4" fill="#7fd0ff"/>
 <rect x="104" y="138" width="16" height="22" fill="#6f87a6"/><rect x="80" y="160" width="64" height="8" rx="4" fill="#6f87a6"/>
 <rect x="62" y="190" width="100" height="44" rx="6" fill="#9db4cf"/><circle cx="80" cy="212" r="6" fill="#274b7a"/><rect x="100" y="206" width="52" height="5" rx="2" fill="#6f87a6"/><rect x="100" y="216" width="52" height="5" rx="2" fill="#6f87a6"/>
</g>
<g data-hs="sw" class="hs" tabindex="0" role="button" aria-label="العنصر الثاني">
 <rect class="hsbg" x="222" y="16" width="196" height="248" rx="14" fill="#fff" stroke="#9cc7ee" stroke-width="3"/>
 <rect x="246" y="60" width="148" height="130" rx="8" fill="#f4f8ff" stroke="#1a73c9" stroke-width="3"/>
 <rect x="246" y="60" width="148" height="26" rx="8" fill="#1a73c9"/><circle cx="262" cy="73" r="5" fill="#ff6b6b"/><circle cx="278" cy="73" r="5" fill="#ffd53a"/><circle cx="294" cy="73" r="5" fill="#2fbf71"/>
 <rect x="260" y="100" width="70" height="8" rx="4" fill="#7aa6e6"/><rect x="260" y="118" width="112" height="8" rx="4" fill="#c4d8f3"/><rect x="260" y="136" width="96" height="8" rx="4" fill="#c4d8f3"/>
 <rect x="260" y="158" width="52" height="20" rx="6" fill="#2fbf71"/>
 <g transform="translate(345,163)" fill="none" stroke="#1a73c9" stroke-width="3"><circle r="7"/><path d="M0 -12 V-9 M0 9 V12 M-12 0 H-9 M9 0 H12"/></g>
 <rect x="276" y="212" width="88" height="26" rx="13" fill="#e6efff"/>
</g>
<g data-hs="net" class="hs" tabindex="0" role="button" aria-label="العنصر الثالث">
 <rect class="hsbg" x="430" y="16" width="196" height="248" rx="14" fill="#fff" stroke="#9cc7ee" stroke-width="3"/>
 <g stroke="#1a73c9" stroke-width="3.5"><path d="M528 140 L470 80"/><path d="M528 140 L590 82"/><path d="M528 140 L470 205"/><path d="M528 140 L592 206"/><path d="M470 80 L590 82" stroke-dasharray="6 5"/><path d="M470 205 L592 206" stroke-dasharray="6 5"/></g>
 <circle cx="528" cy="140" r="26" fill="#1a73c9"/>
 <g fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round"><path d="M514 134 a20 20 0 0 1 28 0"/><path d="M518 142 a13 13 0 0 1 20 0"/></g><circle cx="528" cy="150" r="3" fill="#fff"/>
 <g fill="#7fd0ff" stroke="#274b7a" stroke-width="3"><circle cx="470" cy="80" r="15"/><circle cx="590" cy="82" r="15"/><circle cx="470" cy="205" r="15"/><circle cx="592" cy="206" r="15"/></g>
</g></svg>`,

/* Q23 — طالب يستعمل الحاسوب والهاتف لفترات طويلة وتشتت الانتباه */
q23: `<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" font-family="Tahoma,Arial,sans-serif">
<rect width="640" height="320" rx="16" fill="#eaf6ff"/>
<!-- ساعة: وقت طويل -->
<g transform="translate(560,58)"><circle r="34" fill="#fff" stroke="#274b7a" stroke-width="5"/><path d="M0 0 V-20 M0 0 L15 8" stroke="#274b7a" stroke-width="4" stroke-linecap="round"/>
 <g fill="#ff6b6b"><circle cx="0" cy="-27" r="2.5"/><circle cx="27" cy="0" r="2.5"/><circle cx="0" cy="27" r="2.5"/><circle cx="-27" cy="0" r="2.5"/></g></g>
<text x="560" y="116" font-size="15" fill="#274b7a" text-anchor="middle" font-weight="bold">ساعات طويلة</text>
<!-- فقاعات إشعارات تشتّت -->
<g stroke="#fff" stroke-width="2">
 <g transform="translate(96,56) rotate(-8)"><rect width="66" height="38" rx="12" fill="#ff7fa8"/><path d="M33 22 c-9 -8 -14 -13 -9 -17 c3 -2 7 0 9 3 c2 -3 6 -5 9 -3 c5 4 0 9 -9 17z" fill="#fff" stroke="none"/></g>
 <g transform="translate(176,28) rotate(6)"><rect width="64" height="38" rx="12" fill="#7fd0ff"/><path d="M26 10 L26 28 L42 19Z" fill="#fff" stroke="none"/></g>
 <g transform="translate(392,150) rotate(-5)"><rect width="66" height="38" rx="12" fill="#ffd53a"/><circle cx="22" cy="19" r="4" fill="#274b7a" stroke="none"/><circle cx="33" cy="19" r="4" fill="#274b7a" stroke="none"/><circle cx="44" cy="19" r="4" fill="#274b7a" stroke="none"/></g>
</g>
<g font-size="30" font-weight="bold" fill="#e04a62"><text x="214" y="140" transform="rotate(-12 214 140)">?</text><text x="302" y="132" transform="rotate(10 302 132)">؟</text></g>
<!-- مكتب -->
<rect x="30" y="248" width="580" height="16" rx="6" fill="#b88a5a"/><rect x="60" y="264" width="12" height="46" fill="#9a6f43"/><rect x="568" y="264" width="12" height="46" fill="#9a6f43"/>
<!-- كتاب مغلق -->
<g transform="translate(70,214)"><rect width="92" height="34" rx="4" fill="#2fbf71"/><rect x="6" y="6" width="80" height="22" fill="#d4f5dd"/><text x="46" y="22" font-size="13" fill="#1c6d3f" text-anchor="middle">الدرس</text></g>
<!-- حاسوب -->
<g transform="translate(396,160)"><rect x="10" y="0" width="150" height="88" rx="8" fill="#274b7a"/><rect x="18" y="8" width="134" height="72" rx="4" fill="#7fd0ff"/>
 <rect x="30" y="20" width="60" height="6" rx="3" fill="#fff"/><rect x="30" y="34" width="100" height="6" rx="3" fill="#fff" opacity=".7"/><rect x="30" y="48" width="84" height="6" rx="3" fill="#fff" opacity=".7"/>
 <path d="M0 98 L170 98 L158 88 L12 88Z" fill="#9db4cf"/></g>
<!-- الطالب -->
<g transform="translate(300,0)">
 <path d="M-62 248 C-62 190 -34 160 0 160 C34 160 62 190 62 248Z" fill="#ff9a3c"/>
 <circle cx="0" cy="118" r="44" fill="#ffd9b0"/>
 <path d="M-46 112 C-48 70 -10 62 16 70 C40 76 50 96 46 112 C30 92 -20 92 -46 112Z" fill="#3a2a22"/>
 <!-- عينان مرهقتان وفم متعب -->
 <g stroke="#274b7a" stroke-width="3.5" stroke-linecap="round" fill="none"><path d="M-24 118 q8 -8 16 0"/><path d="M8 118 q8 -8 16 0"/><path d="M-12 140 q12 -9 24 0"/></g>
 <g fill="#9ed7ff"><path d="M54 98 q6 10 0 16 q-6 -6 0 -16z"/></g>
 <!-- ذراع تمسك الهاتف -->
 <path d="M-40 190 C-72 200 -80 220 -66 236" stroke="#ff9a3c" stroke-width="26" stroke-linecap="round" fill="none"/>
 <g transform="translate(-86,214) rotate(-14)"><rect width="30" height="52" rx="7" fill="#274b7a"/><rect x="3" y="7" width="24" height="38" rx="2" fill="#ffe08a"/></g>
</g>
</svg>`
};

/* ---------------------- بنك الأسئلة ---------------------- */
window.INFO_EASY_BANK = {
  version: 1,
  subject: 'Info Easy',
  settings: { playDrafts: true },
  typeLabels: {
    mcq:'اختيار من متعدد', truefalse:'صح أم خطأ', fill:'ملء الفراغ', image:'التعرف على الصورة',
    hotspot:'حدّد على الصورة', place:'السحب والإفلات على الصورة', match:'الربط بين العناصر', finderror:'اكتشف الخطأ', chart:'إكمال المخطط',
    order:'ترتيب الخطوات', classify:'التصنيف', multi:'حل الوضعية'
  },
  islands: {
    island1: {
      title: 'تقنية المعلومات',
      stages: [

/* ============================ المرحلة الأولى: سهل ============================ */
{ id:'I01-S1', level:'easy', title:'المرحلة الأولى: سهل', questions:[
 { id:'I01-Q01', island:'island1', stage:1, level:'easy', n:1, type:'mcq', status:'draft',
   text:'ما المقصود بالبيانات (Data)؟',
   options:['حقائق وقيم أولية في شكلها الخام.','معلومات تمت معالجتها وأصبحت ذات معنى.','برامج تستعمل لمعالجة المعلومات.'], answer:0,
   explanation:'البيانات هي حقائق أو قيم أولية قد تكون حروفًا أو أرقامًا أو رموزًا أو صورًا.' },

 { id:'I01-Q02', island:'island1', stage:1, level:'easy', n:2, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'البيانات التي تمت معالجتها وأصبحت ذات معنى تسمى {0}',
   blanks:[{ accept:['المعلومات','معلومات','information','informations'] }],
   answerText:'المعلومات (Information).',
   explanation:'المعالجة تحول البيانات الخام إلى معلومات ذات معنى ومرتبطة بسياق معين.' },

 { id:'I01-Q03', island:'island1', stage:1, level:'easy', n:3, type:'image', status:'draft',
   text:'أي الجانبين يمثل المعلومات؟',
   image:'q03', imageAlt:'صورة مقسومة إلى جانبين: سجلات تلاميذ غير مرتبة، وقائمة نتائج مصنفة ومرتبة',
   options:['السجلات غير المرتبة.','النتائج المصنفة والمرتبة.'], answer:1,
   explanation:'تصنيف البيانات ومعالجتها يجعلها أكثر وضوحًا وفائدة.' },

 { id:'I01-Q04', island:'island1', stage:1, level:'easy', n:4, type:'truefalse', status:'draft',
   text:'تتكون عملية الاتصال من مرسل ومستقبل ورسالة.', answer:true,
   explanation:'الاتصال عملية تفاعل يتم فيها نقل المعلومات أو الأفكار بين المرسل والمستقبل عبر رسالة.' },

 { id:'I01-Q05', island:'island1', stage:1, level:'easy', n:5, type:'match', status:'draft',
   text:'اربط كل مصطلح بتعريفه الصحيح:',
   pairs:[
     { l:'البيانات',  r:'حقائق وقيم أولية خام.' },
     { l:'المعلومات', r:'بيانات تمت معالجتها.' },
     { l:'الاتصال',   r:'نقل معلومات وأفكار بين الأفراد.' } ],
   explanation:'لكل مصطلح معنى مختلف رغم ارتباطها جميعًا بتداول المعلومات.' },

 { id:'I01-Q06', island:'island1', stage:1, level:'easy', n:6, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'يرمز الاختصار TIC إلى تكنولوجيا الإعلام و{0}',
   blanks:[{ accept:['الاتصال','اتصال','الاتصالات','communication'] }],
   answerText:'الاتصال.',
   explanation:'TIC اختصار لعبارة Technologies de l’Information et de la Communication.' },

 { id:'I01-Q07', island:'island1', stage:1, level:'easy', n:7, type:'finderror', status:'draft',
   scenario:'قال تلميذ:',
   parts:[
     { t:'«المعلومات هي حقائق أولية غير مرتبة،', wrong:true },
     { t:'أما البيانات فهي نتائج المعالجة».', wrong:true } ],
   text:'ما الخطأ في كلامه؟',
   fixes:[
     'عكس تعريف البيانات والمعلومات.',
     'الخلط بين المعلومات والاتصال.',
     'الخلط بين المعدات والبرمجيات.' ], fixAnswer:0,
   answerText:'عكس تعريف البيانات والمعلومات.',
   explanation:'البيانات هي الحقائق الأولية، أما المعلومات فهي البيانات بعد معالجتها.',
   reviewNote:'الإجابة والتفسير من البنك. أضفتُ: تقسيم العبارة إلى جزأين قابلين للمس، وخيارين مشتتين للتشخيص (الخلط بين المعلومات والاتصال / المعدات والبرمجيات) ليكون السؤال تفاعلياً.' },

 { id:'I01-Q08', island:'island1', stage:1, level:'easy', n:8, type:'image', status:'draft',
   text:'ما المجال الذي تعبّر عنه الصورة؟',
   image:'q08', imageAlt:'رسم لحاسوب وهاتف ذكي ولوحة رقمية وأجهزة متصلة بشبكة',
   options:['تكنولوجيا الإعلام والاتصال.','الصيانة الوقائية.','تجميع الحاسوب.'], answer:0,
   explanation:'تجمع الصورة أجهزة وتقنيات الاتصال وتبادل المعلومات.' },

 { id:'I01-Q09', island:'island1', stage:1, level:'easy', n:9, type:'mcq', status:'draft',
   text:'من المكونات الأساسية لتكنولوجيا الإعلام والاتصال:',
   options:['تقنيات المعالجة والتخزين وشبكات الاتصالات.','الطاولات والكراسي والأثاث.','الأوراق والأقلام فقط.'], answer:0,
   explanation:'تتكون TIC من تقنيات المعالجة والتخزين، إضافة إلى شبكات الاتصالات.' },

 { id:'I01-Q10', island:'island1', stage:1, level:'easy', n:10, type:'mcq', status:'draft',
   text:'بعد ترتيب معدلات التلاميذ واستخراج قائمة الناجحين، فإن قائمة الناجحين تمثل:',
   options:['بيانات خام.','معلومات.','أجهزة اتصال.'], answer:1,
   explanation:'القائمة نتجت عن معالجة بيانات المعدلات وأصبحت ذات معنى.' }
]},

/* ============================ المرحلة الثانية: متوسط ============================ */
{ id:'I01-S2', level:'medium', title:'المرحلة الثانية: متوسط', questions:[
 { id:'I01-Q11', island:'island1', stage:2, level:'medium', n:11, type:'mcq', status:'draft',
   text:'استقبلت المؤسسة أسماء التلاميذ وأعمارهم ومعدلاتهم، ثم رتبتهم حسب المعدل. العملية التي قامت بها المؤسسة هي:',
   options:['معالجة البيانات.','إرسال رسالة.','تخزين البرامج.'], answer:0,
   explanation:'ترتيب البيانات وتصنيفها من عمليات المعالجة.' },

 { id:'I01-Q12', island:'island1', stage:2, level:'medium', n:12, type:'classify', status:'draft',
   scenario:'صنّف تلميذ العناصر التالية:',
   scenarioList:['الحاسوب: شبكة اتصالات.','البرنامج: عتاد.','شبكة الإنترنت: وسيلة اتصال.'],
   text:'ما التصحيح المناسب؟ ضع كل عنصر في تصنيفه الصحيح.',
   cats:['المعدات','البرمجيات','تقنيات وشبكات الاتصال'],
   items:[ { t:'الحاسوب', c:0 }, { t:'البرنامج', c:1 }, { t:'شبكة الإنترنت', c:2 } ],
   answerText:'الحاسوب من المعدات. البرنامج من البرمجيات. شبكة الإنترنت من تقنيات وشبكات الاتصال.',
   explanation:'تتضمن TIC معدات وبرمجيات وشبكات اتصالات.' },

 { id:'I01-Q13', island:'island1', stage:2, level:'medium', n:13, type:'hotspot', status:'draft',
   text:'حدد العنصر الذي يمثل شبكة الاتصالات. (المس العنصر في الرسم)',
   image:'q13', imageAlt:'رسم تعليمي: حاسوب يمثل المعدات، برنامج يمثل البرمجيات، شبكة متصلة تمثل شبكات الاتصالات',
   answer:'net', answerText:'رمز الشبكة المتصلة.',
   explanation:'شبكات الاتصالات تسمح بنقل المعلومات عبر اتصالات سلكية أو لاسلكية.' },

 { id:'I01-Q14', island:'island1', stage:2, level:'medium', n:14, type:'truefalse', status:'draft',
   text:'تكنولوجيا الإعلام والاتصال تقتصر على أجهزة الحاسوب فقط.', answer:false,
   explanation:'تشمل أيضًا البرمجيات والوسائط المتعددة والإنترنت وشبكات الاتصالات.' },

 { id:'I01-Q15', island:'island1', stage:2, level:'medium', n:15, type:'fill', status:'draft',
   text:'أكمل الفراغين:',
   template:'من مميزات تكنولوجيا الإعلام والاتصال: ربح {0} و{1}',
   blanks:[ { accept:['الوقت','وقت'] }, { accept:['الجهد','جهد'] } ], anyOrder:true,
   answerText:'الوقت والجهد.',
   explanation:'تساعد هذه التقنيات على إنجاز الأعمال بسرعة وتقليل الجهد.' },

 { id:'I01-Q16', island:'island1', stage:2, level:'medium', n:16, type:'match', status:'draft',
   text:'اربط كل ميزة بالمثال المناسب:',
   pairs:[
     { l:'زيادة الدقة',      r:'التقليل من الأخطاء.' },
     { l:'سرعة الاتصال',     r:'تبادل المعلومات بسرعة.' },
     { l:'توفير المعلومات',  r:'الوصول إلى كميات هائلة وحديثة.' } ],
   explanation:'هذه أمثلة على خصائص ومميزات TIC.' },

 { id:'I01-Q17', island:'island1', stage:2, level:'medium', n:17, type:'mcq', status:'draft',
   text:'أي مما يلي يمثل أحد مكونات تقنيات المعالجة والتخزين؟',
   options:['أنظمة التشغيل والبرامج التطبيقية.','شبكات الاتصال السلكية فقط.','الاجتماعات والمحاضرات.'], answer:0,
   explanation:'البرامج، مثل أنظمة التشغيل ومعالج النصوص، تدخل ضمن تقنيات المعالجة والتخزين.' },

 { id:'I01-Q18', island:'island1', stage:2, level:'medium', n:18, type:'mcq', status:'draft',
   text:'أي عبارة لا تمثل ميزة لتكنولوجيا الإعلام والاتصال؟',
   options:['توفير معلومات حديثة وبكميات كبيرة.','جعل الاتصالات أسرع وأقل تكلفة.','زيادة الوقت والجهد اللازمين لإنجاز العمل.'], answer:2,
   explanation:'من مميزاتها ربح الوقت والجهد، وليس زيادتهما.' },

 { id:'I01-Q19', island:'island1', stage:2, level:'medium', n:19, type:'chart', status:'draft',
   text:'ما المصطلح الذي يوضع في المربع الأوسط؟',
   nodes:['البيانات الخام', null, 'المعلومات'],
   options:['المعالجة (Processing)','الاتصال','العتاد'], answer:0,
   explanation:'تتم معالجة البيانات للحصول على المعلومات.',
   reviewNote:'الإجابة والتفسير من البنك. أضفتُ خيارين مشتتين (الاتصال، العتاد) مأخوذين من مصطلحات الدرس.' },

 { id:'I01-Q20', island:'island1', stage:2, level:'medium', n:20, type:'multi', status:'draft',
   scenario:'استعمل أستاذ الحاسوب والإنترنت لإرسال نتائج التلاميذ إلى أوليائهم بسرعة، مع الاحتفاظ بنسخة من النتائج.',
   text:'اذكر فائدتين لتكنولوجيا الإعلام والاتصال ظهرتا في هذه الوضعية. (اختر فائدتين)',
   options:['تسريع الاتصال وتبادل المعلومات.','تخزين المعلومات والاحتفاظ بها.','زيادة الوقت والجهد اللازمين لإنجاز العمل.','تشتت الانتباه.'],
   answers:[0,1], need:2,
   answerText:'تسريع الاتصال وتبادل المعلومات. تخزين المعلومات والاحتفاظ بها.',
   explanation:'تجمع الوضعية بين الاتصال الرقمي وتخزين المعلومات.',
   reviewNote:'الإجابتان من البنك. أضفتُ خيارين مشتتين (من عبارات الدرس: السؤال 18 والسؤال 23) لأن السؤال في البنك مفتوح الإجابة.' }
]},

/* ============================ المرحلة الثالثة: صعب ============================ */
{ id:'I01-S3', level:'hard', title:'المرحلة الثالثة: صعب', questions:[
 { id:'I01-Q21', island:'island1', stage:3, level:'hard', n:21, type:'mcq', status:'draft',
   scenario:'لدى مؤسسة تربوية ملف يحتوي على أسماء التلاميذ ومعدلاتهم. طلب المدير استخراج قائمة التلاميذ الذين تحصلوا على معدل أكبر من 10.',
   text:'ما الذي تمثله القائمة المستخرجة؟',
   options:['بيانات خام.','معلومات ناتجة عن معالجة البيانات.','شبكة اتصالات.'], answer:1,
   explanation:'تم تطبيق عملية تصنيف واستخراج على البيانات للحصول على معلومات محددة.' },

 { id:'I01-Q22', island:'island1', stage:3, level:'hard', n:22, type:'finderror', status:'draft',
   scenario:'كتب تلميذ في إجابته:',
   parts:[
     { t:'«تتكون تكنولوجيا الإعلام والاتصال من تقنيات المعالجة والتخزين فقط،', wrong:true },
     { t:'ولا علاقة لشبكات الاتصالات بها».', wrong:true } ],
   text:'حدد الخطأ وصحح العبارة.',
   fixes:[
     'تتكون من تقنيات المعالجة والتخزين، وشبكات الاتصالات.',
     'تتكون من شبكات الاتصالات فقط، ولا علاقة لتقنيات المعالجة بها.',
     'تتكون من الحاسوب فقط، ولا علاقة للبرمجيات بها.' ], fixAnswer:0,
   answerText:'أغفل شبكات الاتصالات.',
   correction:'التصحيح: تتكون من تقنيات المعالجة والتخزين، وشبكات الاتصالات.',
   explanation:'',
   reviewNote:'الإجابة والتصحيح من البنك (ولا يوجد تفسير في البنك لهذا السؤال). أضفتُ: تقسيم العبارة إلى جزأين قابلين للمس، وخيارين مشتتين للتصحيح.' },

 { id:'I01-Q23', island:'island1', stage:3, level:'hard', n:23, type:'image', status:'draft',
   text:'ما السلبية التي توضحها الصورة؟',
   image:'q23', imageAlt:'طالب يستعمل الحاسوب والهاتف لفترات طويلة ويظهر عليه تشتت الانتباه أثناء الدراسة',
   options:['تشتت الانتباه نتيجة الاستعمال المكثف للتكنولوجيا.','سرعة الاتصال وتبادل المعلومات.','زيادة الدقة والتنظيم.'], answer:0,
   explanation:'من سلبيات الاستخدام المكثف لتكنولوجيا الإعلام والاتصال تشتت الانتباه.',
   reviewNote:'الإجابة والتفسير من البنك. البنك لا يعطي خيارات لهذا السؤال، فأضفتُ خيارين مشتتين (من مميزات TIC الواردة في الدرس).' },

 { id:'I01-Q24', island:'island1', stage:3, level:'hard', n:24, type:'mcq', status:'draft',
   scenario:'تريد مؤسسة تحسين تنظيم أعمالها وتقليل الأخطاء عند معالجة الملفات.',
   text:'أي خاصيتين من خصائص TIC تساعدانها مباشرة؟',
   options:['زيادة الدقة والتنظيم الإيجابي.','تشتت الانتباه وتقليل المهارات.','كثرة الجلوس والاعتماد الكلي على التكنولوجيا.'], answer:0,
   explanation:'من مميزات TIC زيادة الدقة وتحسين التنظيم وتقليل الأخطاء.' },

 { id:'I01-Q25', island:'island1', stage:3, level:'hard', n:25, type:'order', status:'draft',
   text:'رتّب العناصر التالية من البداية إلى النهاية:',
   items:['جمع البيانات الأولية.','معالجة البيانات.','الحصول على معلومات ذات معنى.'],
   explanation:'لا تتحول البيانات الخام إلى معلومات مفيدة إلا بعد معالجتها.' },

 { id:'I01-Q26', island:'island1', stage:3, level:'hard', n:26, type:'truefalse', status:'draft',
   scenario:'قال موظف: «كلما اعتمدنا على التكنولوجيا بشكل كلي، زادت مهارات الإنسان بالضرورة».',
   text:'هل كلامه صحيح؟ علّل إجابتك.', answer:false,
   answerText:'خطأ.',
   explanation:'الاعتماد الكلي على التكنولوجيا قد يقلل من مهارات الإنسان.' },

 { id:'I01-Q27', island:'island1', stage:3, level:'hard', n:27, type:'classify', status:'draft',
   scenario:'تتكون منظومة المعلوماتية من أربعة أبعاد: العتاد، البرمجيات، الموارد البشرية، الموارد المعرفية.',
   text:'ضع كل عنصر في مكانه الصحيح ضمن أبعاد المنظومة.',
   cats:['العتاد','البرمجيات','الموارد البشرية','الموارد المعرفية'],
   items:[ { t:'الحاسوب والطابعة', c:0 }, { t:'نظام التشغيل ومعالج النصوص', c:1 }, { t:'المستخدم والمبرمج', c:2 }, { t:'المعارف والخبرات والوثائق', c:3 } ],
   answerText:'العتاد: الحاسوب والطابعة. البرمجيات: نظام التشغيل ومعالج النصوص. الموارد البشرية: المستخدم والمبرمج. الموارد المعرفية: المعارف والخبرات والوثائق.',
   explanation:'المعلوماتية لا تقتصر على الأجهزة والبرامج، بل تشمل أيضًا الموارد البشرية والمعرفية.',
   reviewNote:'⚠ يحتاج قرارك: البنك يعطي الأبعاد الأربعة فقط كعناصر وإجابات، ولا يعطي أمثلة لتصنيفها. وضعتُ أمثلة مؤقتة (الحاسوب والطابعة / نظام التشغيل ومعالج النصوص / المستخدم والمبرمج / المعارف والخبرات والوثائق) كي يصبح التصنيف ممكناً. استبدليها بأمثلة الدرس الدقيقة.' },

 { id:'I01-Q28', island:'island1', stage:3, level:'hard', n:28, type:'match', status:'draft',
   scenario:'أنشأت مدرسة نظامًا رقميًا يقوم بجمع بيانات التلاميذ، ومعالجتها لاستخراج النتائج، وتخزينها، ثم إرسالها إلى الأولياء.',
   text:'حدد في الوضعية: اربط كل عنصر بما يناسبه.',
   pairs:[
     { l:'وسيلة المعالجة',  r:'الحواسيب.' },
     { l:'العنصر البرمجي',  r:'البرنامج المستعمل لتنظيم النتائج.' },
     { l:'وسيلة الاتصال',   r:'شبكة الاتصال.' } ],
   explanation:'توضح الوضعية تكامل المعدات والبرمجيات وشبكات الاتصالات.' },

 { id:'I01-Q29', island:'island1', stage:3, level:'hard', n:29, type:'mcq', status:'draft',
   text:'ما المقصود بالمعلوماتية (Informatique) وفق تعريف الدرس؟',
   options:['علم يعالج المعلومات ويبني البرامج بطريقة آلية باستعمال الحاسوب وبرامج خاصة.','علم يهتم فقط بإرسال الرسائل عبر الإنترنت.','علم يختص بتصنيع الأجهزة الإلكترونية فقط.'], answer:0,
   explanation:'المعلوماتية تهتم بمعالجة المعلومات وبناء البرامج آليًا باستخدام الحاسوب.' },

 { id:'I01-Q30', island:'island1', stage:3, level:'hard', n:30, type:'mcq', status:'draft',
   scenario:'أنشأت مؤسسة نظامًا رقميًا يقوم بجمع بيانات التلاميذ، ومعالجتها لاستخراج النتائج، وتخزينها، ثم إرسالها إلى الأولياء. لاحظ المدير أن النظام يوفر الوقت ويحسن الدقة، لكنه حذر الموظفين من الاعتماد الكلي عليه.',
   text:'التحدي النهائي — أي استنتاج صحيح؟',
   options:['التكنولوجيا لها مميزات فقط ولا توجد لها سلبيات.','التكنولوجيا تجمع بين فوائد في المعالجة والاتصال والتخزين، وقد تنتج عنها سلبيات عند سوء أو إفراط الاستخدام.','التكنولوجيا لا تساعد في تنظيم المعلومات.'], answer:1,
   explanation:'يبرز المثال مميزات TIC وسلبيات الاعتماد المفرط عليها.' }
]}

      ]
    }
  }
};


/* =====================================================================
   الجزيرة 02: تجميع الحاسوب (Assemblage d’un ordinateur) — رسومات SVG مولَّدة
   ===================================================================== */
(function(){
  const PCB='#2f9e6b';
  const board=`<rect x="150" y="30" width="330" height="340" rx="8" fill="${PCB}" stroke="#1d6b46" stroke-width="3"/>
<g stroke="#46b985" stroke-width="2" fill="none" opacity=".75"><path d="M170 200 H320 V225"/><path d="M200 190 V232 H430"/><path d="M300 190 H430 V232"/><path d="M160 318 H420"/><path d="M290 135 H330"/></g>`;
  const cpu=`<rect x="200" y="90" width="90" height="90" rx="6" fill="#c9d6e6" stroke="#6f87a6" stroke-width="3"/><rect x="214" y="104" width="62" height="62" rx="4" fill="#8ea5c4" stroke="#5a7396" stroke-width="2"/><rect x="228" y="118" width="34" height="34" rx="3" fill="#aebfd6"/>`;
  const slots=[330,348,366,384].map(x=>`<rect x="${x}" y="70" width="10" height="130" rx="2" fill="#1b3a57"/>`).join('');
  const stick=x=>`<rect x="${x-3}" y="72" width="16" height="126" rx="2" fill="#3a6ea5" stroke="#12304f" stroke-width="1.5"/><g fill="#12304f"><rect x="${x-1}" y="86" width="12" height="14"/><rect x="${x-1}" y="108" width="12" height="14"/><rect x="${x-1}" y="130" width="12" height="14"/><rect x="${x-1}" y="152" width="12" height="14"/></g>`;
  const offStick=`<g transform="rotate(-8 365 212)"><rect x="300" y="204" width="130" height="16" rx="3" fill="#3a6ea5" stroke="#12304f" stroke-width="1.5"/><g fill="#12304f"><rect x="318" y="207" width="14" height="10"/><rect x="342" y="207" width="14" height="10"/><rect x="366" y="207" width="14" height="10"/><rect x="390" y="207" width="14" height="10"/></g></g>`;
  const pcie=[240,268,296].map(y=>`<rect x="200" y="${y}" width="${y===296?120:220}" height="12" rx="3" fill="#2b2f3a"/>`).join('');
  const atx=`<rect x="440" y="70" width="26" height="100" rx="3" fill="#f2f2f2" stroke="#7d8794" stroke-width="2"/>`+
    [0,1,2,3,4,5].map(i=>`<rect x="445" y="${76+i*15}" width="6" height="9" fill="#9aa4b2"/><rect x="455" y="${76+i*15}" width="6" height="9" fill="#9aa4b2"/>`).join('');
  const sata=[165,187,209].map(x=>`<rect x="${x}" y="334" width="16" height="22" rx="2" fill="#1d2129"/><rect x="${x+3}" y="340" width="10" height="10" fill="#6f7886"/>`).join('');
  const psu=`<rect x="500" y="270" width="110" height="100" rx="8" fill="#3b4658" stroke="#1f2733" stroke-width="3"/><circle cx="555" cy="322" r="34" fill="#2a3342" stroke="#8fa3bf" stroke-width="3"/><g stroke="#8fa3bf" stroke-width="3"><path d="M555 292 V352"/><path d="M525 322 H585"/><path d="M534 301 L576 343"/><path d="M576 301 L534 343"/></g><circle cx="555" cy="322" r="7" fill="#8fa3bf"/>`;
  const cableOk=`<path d="M555 270 V120 H466" stroke="#262b33" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="436" y="68" width="34" height="104" rx="4" fill="#33373f" stroke="#12151a" stroke-width="2"/>`;
  const cableLoose=`<path d="M555 270 V150 H520" stroke="#262b33" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/><rect x="494" y="128" width="30" height="44" rx="4" fill="#33373f" stroke="#12151a" stroke-width="2"/>`;
  const hdd=`<rect x="20" y="40" width="110" height="110" rx="6" fill="#aab6c6" stroke="#6f87a6" stroke-width="3"/><circle cx="72" cy="94" r="38" fill="#d7dee9" stroke="#7f93ad" stroke-width="3"/><circle cx="72" cy="94" r="8" fill="#7f93ad"/><path d="M104 56 L78 90" stroke="#4a5a73" stroke-width="5" stroke-linecap="round"/><rect x="26" y="136" width="98" height="8" rx="3" fill="#8798b1"/>`;
  const ssd=`<rect x="20" y="300" width="110" height="50" rx="6" fill="#4a5a73" stroke="#25324a" stroke-width="3"/><g fill="#c9d6e6"><rect x="32" y="312" width="26" height="26" rx="3"/><rect x="66" y="312" width="26" height="26" rx="3"/><rect x="100" y="318" width="20" height="14" rx="2"/></g>`;
  const sataCable=`<path d="M130 325 C150 325,152 345,173 345" stroke="#e04a3a" stroke-width="6" fill="none" stroke-linecap="round"/>`;
  const badge=(n,x,y)=>`<g><circle cx="${x}" cy="${y}" r="13" fill="#ffd53a" stroke="#274b7a" stroke-width="3"/><text x="${x}" y="${y+5}" font-size="15" font-weight="bold" text-anchor="middle" fill="#274b7a">${n}</text></g>`;
  const HS=(id,x,y,w,h)=>`<g class="hs" data-hs="${id}" tabindex="0" role="button" aria-label="منطقة في الرسم"><rect class="hsbg" x="${x}" y="${y}" width="${w}" height="${h}" rx="8"/></g>`;
  const ZN=(id,x,y,w,h,lx,ly)=>`<rect class="zn" data-zone="${id}" data-lx="${lx}" data-ly="${ly}" x="${x}" y="${y}" width="${w}" height="${h}" rx="8"/>`;
  function caseSvg(o){
    let s=`<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" font-family="Tahoma,Arial,sans-serif"><rect width="640" height="400" rx="16" fill="#eaf6ff"/><rect x="8" y="8" width="624" height="384" rx="16" fill="#e7eef8" stroke="#6f87a6" stroke-width="4"/>`;
    s+=board+cpu+slots;
    if(o.ram==='ok')s+=stick(330)+stick(366);
    s+=pcie+atx+sata+psu;
    if(o.cable==='ok')s+=cableOk;
    if(o.cable==='loose')s+=cableLoose;
    if(o.hdd)s+=hdd;
    if(o.ssd)s+=ssd;
    if(o.satacable)s+=sataCable;
    if(o.ram==='off')s+=offStick;
    s+=(o.extra||'')+'</svg>';
    return s;
  }
  /* Q01: لوحة أم وحدها بدون أي كتابة */
  const q01=`<svg viewBox="140 20 350 360" xmlns="http://www.w3.org/2000/svg" role="img"><rect x="140" y="20" width="350" height="360" rx="12" fill="#eaf6ff"/>`+board+
    `<g fill="#cfd8e3" stroke="#6f87a6" stroke-width="2"><rect x="150" y="44" width="34" height="22" rx="2"/><rect x="150" y="72" width="34" height="22" rx="2"/><rect x="150" y="100" width="34" height="22" rx="2"/></g>`+
    cpu+slots+pcie+atx+sata+
    `<circle cx="300" cy="340" r="15" fill="#cfd8e3" stroke="#6f87a6" stroke-width="3"/><circle cx="300" cy="340" r="6" fill="#9db4cf"/>`+
    `<g><rect x="396" y="318" width="52" height="42" rx="4" fill="#c9d6e6" stroke="#6f87a6" stroke-width="2"/><path d="M404 322 V356 M414 322 V356 M424 322 V356 M434 322 V356" stroke="#8ea5c4" stroke-width="3"/></g>`+
    `<g fill="#222"><circle cx="224" cy="52" r="5"/><circle cx="460" cy="52" r="5"/><circle cx="170" cy="352" r="0"/><circle cx="460" cy="350" r="5"/><circle cx="224" cy="200" r="0"/></g></svg>`;
  /* Q06: موصل SATA (كابل أحمر + مقبس أسود على شكل L + 7 أطراف ذهبية) */
  const q06=`<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img"><rect width="640" height="300" rx="16" fill="#eaf6ff"/>
<g stroke="#c83a2c" stroke-width="3"><rect x="20" y="118" width="170" height="64" fill="#e04a3a"/><path d="M20 129 H190 M20 140 H190 M20 151 H190 M20 162 H190 M20 173 H190" stroke="#b02e22" stroke-width="2"/></g>
<path d="M190 100 H480 V160 H440 V200 H190 Z" fill="#20242c" stroke="#0e1115" stroke-width="4" stroke-linejoin="round"/>
<g fill="#e3b43a" stroke="#9a7515" stroke-width="1.5">${[0,1,2,3,4,5,6].map(i=>`<rect x="${214+i*30}" y="122" width="16" height="54" rx="2"/>`).join('')}</g>
<path d="M440 160 V200" stroke="#3a4150" stroke-width="3"/></svg>`;
  /* Q13: صندوق حاسوب بمناطق إفلات (بدون أسماء) */
  const q13=caseSvg({ram:'ok',cable:'ok',ssd:true,satacable:true,extra:
    ZN('mb',150,30,330,340,185,48)+ZN('cpu',200,90,90,90,245,135)+ZN('ram',322,64,90,142,367,135)+ZN('ssd',20,300,110,50,75,325)+ZN('psu',500,270,110,100,538,352)});
  /* Q10: HDD و SSD داخل الحاسوب */
  const q10=caseSvg({ram:'ok',cable:'ok',hdd:true,ssd:true,satacable:true,extra:
    HS('mb',150,30,330,340)+HS('cpu',200,90,90,90)+HS('ramz',322,64,90,142)+HS('psu',500,270,110,100)+HS('hdd',20,40,110,110)+HS('ssd',20,300,110,50)});
  /* Q16: RAM خارج الشق */
  const q16=caseSvg({ram:'off',cable:'ok',extra:
    HS('cpu',200,90,90,90)+HS('slots',322,64,90,130)+HS('pcie',196,236,230,76)+HS('atx',434,64,40,112)+HS('sata',160,330,70,30)+HS('psu',500,270,110,100)+HS('ramstick',292,186,148,56)});
  /* Q22: كابل الطاقة الرئيسي غير موصول */
  const q22=caseSvg({ram:'ok',cable:'loose',extra:
    HS('cpu',200,90,90,90)+HS('ramz',322,64,90,142)+HS('pcie',196,236,230,76)+HS('sata',160,330,70,30)+HS('psu',500,270,110,100)+HS('atx',434,64,100,115)});
  /* Q25: مخطط مرقم، مزود الطاقة = رقم 3 */
  const q25=caseSvg({ram:'ok',cable:'ok',ssd:true,satacable:true,extra:badge(1,214,104)+badge(2,336,60)+badge(3,512,282)+badge(4,34,312)});
  /* Q30: ثلاثة أخطاء: RAM خارج الشق، كابل الطاقة الرئيسي غير موصول، SSD بلا كابل بيانات */
  const q30=caseSvg({ram:'off',cable:'loose',ssd:true,extra:
    HS('cpu',200,90,90,90)+HS('slots',322,64,90,122)+HS('pcie',196,236,230,76)+HS('psu',500,270,110,100)+
    HS('ram',292,190,148,52)+HS('atx',434,64,100,115)+HS('ssd',16,296,216,64)});
  Object.assign(window.INFO_EASY_IMAGES,{i2q01:q01,i2q06:q06,i2q10:q10,i2q13:q13,i2q16:q16,i2q22:q22,i2q25:q25,i2q30:q30});
})();

/* =====================================================================
   الجزيرة 02: تجميع الحاسوب — الأسئلة (30 سؤالاً، كلها draft)
   ===================================================================== */
window.INFO_EASY_BANK.islands.island2 = {
  title:'تجميع الحاسوب',
  stages:[

/* ============================ المرحلة الأولى: سهل ============================ */
{ id:'I02-S1', level:'easy', title:'المرحلة الأولى: سهل', questions:[
 { id:'I02-Q01', island:'island2', stage:1, level:'easy', n:1, type:'image', status:'draft',
   text:'ما اسم المكوّن الظاهر في الصورة؟',
   image:'i2q01', imageAlt:'صورة لوحة أم دون كتابة اسمها',
   options:['Carte mère','Processeur','Bloc d’alimentation','Disque dur'], answer:0,
   explanation:'اللوحة الأم هي المكوّن الرئيسي الذي يربط مختلف أجزاء الحاسوب ويسمح لها بالتواصل فيما بينها.',
   reviewNote:'الإجابة والتفسير من البنك. البنك لا يعطي خيارات لهذا السؤال، فأضفتُ ثلاثة مشتتات من مكونات الدرس (Processeur، Bloc d’alimentation، Disque dur).' },

 { id:'I02-Q02', island:'island2', stage:1, level:'easy', n:2, type:'mcq', status:'draft',
   text:'ما المكوّن المسؤول عن تنفيذ التعليمات ومعالجة البيانات؟',
   options:['Processeur','Disque dur','Bloc d’alimentation','Boîtier'], answer:0,
   explanation:'المعالج (CPU) ينفذ التعليمات ويعالج البيانات، ويُعد من أهم مكونات الحاسوب.' },

 { id:'I02-Q03', island:'island2', stage:1, level:'easy', n:3, type:'match', status:'draft',
   text:'اربط كل مكوّن بوظيفته الصحيحة:',
   pairs:[
     { l:'RAM',               r:'تخزين مؤقت للبيانات أثناء تشغيل البرامج.' },
     { l:'SSD',               r:'تخزين دائم للبيانات والملفات.' },
     { l:'Processeur',        r:'تنفيذ التعليمات ومعالجة البيانات.' },
     { l:'Bloc d’alimentation', r:'تزويد مكونات الحاسوب بالطاقة الكهربائية.' } ],
   explanation:'لكل مكوّن وظيفة محددة، وتعمل جميع المكونات معاً لتشغيل الحاسوب.' },

 { id:'I02-Q04', island:'island2', stage:1, level:'easy', n:4, type:'truefalse', status:'draft',
   text:'ذاكرة RAM تحتفظ بمحتوياتها حتى بعد إيقاف تشغيل الحاسوب.', answer:false,
   explanation:'RAM ذاكرة مؤقتة ومتطايرة، تفقد محتوياتها عند انقطاع التيار الكهربائي.' },

 { id:'I02-Q05', island:'island2', stage:1, level:'easy', n:5, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'المكوّن الذي يربط مختلف أجزاء الحاسوب ببعضها يسمى {0}',
   blanks:[{ accept:['اللوحة الأم','لوحة أم','اللوحه الام','Carte mère','Carte mere','Motherboard'] }],
   answerText:'اللوحة الأم (Carte mère).',
   explanation:'اللوحة الأم هي لوحة الدارات الرئيسية التي تتصل بها المكونات الداخلية للحاسوب.' },

 { id:'I02-Q06', island:'island2', stage:1, level:'easy', n:6, type:'image', status:'draft',
   text:'تأمل صورة الموصل، ثم اختر اسمه الصحيح.',
   image:'i2q06', imageAlt:'صورة موصل SATA',
   options:['SATA','HDMI','USB','VGA'], answer:0,
   explanation:'يُستخدم SATA لربط وحدات التخزين المتوافقة مثل HDD وSSD باللوحة الأم.' },

 { id:'I02-Q07', island:'island2', stage:1, level:'easy', n:7, type:'mcq', status:'draft',
   text:'أي من المكونات التالية يُعد وحدة تخزين دائمة؟',
   options:['RAM','Cache','SSD','Registre'], answer:2,
   explanation:'يحتفظ SSD بالبيانات حتى بعد إيقاف تشغيل الحاسوب، بخلاف الذاكرة المؤقتة.' },

 { id:'I02-Q08', island:'island2', stage:1, level:'easy', n:8, type:'classify', status:'draft',
   text:'صنّف المكونات التالية في المجموعة المناسبة:',
   cats:['مكونات داخلية','أجهزة طرفية'],
   items:[ { t:'Processeur', c:0 }, { t:'RAM', c:0 }, { t:'Clavier', c:1 }, { t:'Souris', c:1 }, { t:'Carte mère', c:0 }, { t:'Écran', c:1 } ],
   answerText:'المكونات الداخلية: Processeur، RAM، Carte mère.\nالأجهزة الطرفية: Clavier، Souris، Écran.',
   explanation:'المكونات الداخلية تُركب داخل وحدة الحاسوب، أما الأجهزة الطرفية فتتصل به لتوفير الإدخال والإخراج والتفاعل.' },

 { id:'I02-Q09', island:'island2', stage:1, level:'easy', n:9, type:'mcq', status:'draft',
   text:'ما الوظيفة الأساسية لمزود الطاقة (Bloc d’alimentation)؟',
   options:['معالجة البيانات.','تزويد مكونات الحاسوب بالطاقة الكهربائية.','تخزين الملفات.','عرض الصور.'], answer:1,
   explanation:'يقوم مزود الطاقة بتحويل الطاقة الكهربائية وتوزيعها على مكونات الحاسوب.' },

 { id:'I02-Q10', island:'island2', stage:1, level:'easy', n:10, type:'hotspot', status:'draft',
   text:'في صورة الحاسوب من الداخل، حدد المكوّن المسؤول عن التخزين الدائم للبيانات. (المس المكوّن في الرسم)',
   image:'i2q10', imageAlt:'مخطط داخلي لحاسوب يوضح HDD وSSD دون كتابة أسمائهما',
   answer:['hdd','ssd'], answerText:'HDD أو SSD.',
   explanation:'كلاهما وحدتا تخزين دائمتان، ويختلفان في التقنية والسرعة وطريقة العمل.' }
]},

/* ============================ المرحلة الثانية: متوسط ============================ */
{ id:'I02-S2', level:'medium', title:'المرحلة الثانية: متوسط', questions:[
 { id:'I02-Q11', island:'island2', stage:2, level:'medium', n:11, type:'order', status:'draft',
   text:'رتب الخطوات التالية ترتيباً منطقياً لتركيب المعالج:',
   items:['فتح آلية تثبيت المقبس.','مطابقة اتجاه المعالج مع علامات المقبس.','وضع المعالج برفق في مكانه.','إغلاق آلية تثبيت المعالج.'],
   explanation:'يجب احترام اتجاه المعالج وعدم إجباره على الدخول لتجنب إتلافه.',
   reviewNote:'في قائمة البنك الخطوة الأخيرة «إغلاق آلية تثبيت المعالج» وفي الإجابة «إغلاق آلية التثبيت»؛ اعتمدتُ صياغة القائمة.' },

 { id:'I02-Q12', island:'island2', stage:2, level:'medium', n:12, type:'mcq', status:'draft',
   text:'ما الفرق الأساسي بين RAM وSSD؟',
   options:['RAM ذاكرة مؤقتة، أما SSD فوحدة تخزين دائمة.','كلاهما ذاكرة مؤقتة.','RAM للتخزين الدائم وSSD لمعالجة البيانات.','لا يوجد اختلاف بينهما.'], answer:0,
   explanation:'تحتفظ RAM بالبيانات مؤقتاً أثناء العمل، بينما يحتفظ SSD بالملفات حتى بعد إيقاف الحاسوب.' },

 { id:'I02-Q13', island:'island2', stage:2, level:'medium', n:13, type:'place', status:'draft',
   text:'اسحب أسماء المكونات إلى أماكنها الصحيحة في مخطط الحاسوب.',
   image:'i2q13', imageAlt:'رسم داخلي لصندوق حاسوب يتضمن أماكن اللوحة الأم والمعالج وRAM ووحدة التخزين ومزود الطاقة دون أسماء',
   items:[ { t:'Carte mère', z:'mb' }, { t:'Processeur', z:'cpu' }, { t:'RAM', z:'ram' }, { t:'SSD', z:'ssd' }, { t:'Bloc d’alimentation', z:'psu' } ],
   answerText:'Carte mère: مكان اللوحة الأم.\nProcesseur: مقبس المعالج.\nRAM: شقوق الذاكرة.\nSSD: مكان وحدة التخزين.\nBloc d’alimentation: مكان مزود الطاقة.',
   explanation:'لكل مكوّن موضع مخصص داخل الحاسوب.' },

 { id:'I02-Q14', island:'island2', stage:2, level:'medium', n:14, type:'truefalse', status:'draft',
   text:'يمكن تركيب أي معالج على أي لوحة أم ما دام حجمه مناسباً.', answer:false,
   explanation:'يجب التأكد من توافق المعالج مع Socket اللوحة الأم، إضافة إلى متطلبات التوافق الأخرى.' },

 { id:'I02-Q15', island:'island2', stage:2, level:'medium', n:15, type:'match', status:'draft',
   text:'صل كل موصل بالاستعمال المناسب له:',
   pairs:[
     { l:'HDMI',        r:'نقل الصوت والصورة الرقمية.' },
     { l:'USB',         r:'ربط الأجهزة الطرفية ونقل البيانات.' },
     { l:'SATA',        r:'ربط وحدات التخزين المتوافقة.' },
     { l:'PCI Express', r:'ربط بطاقات التوسعة.' } ],
   explanation:'تختلف الموصلات حسب طبيعة الجهاز أو المكوّن الذي نريد ربطه بالحاسوب.' },

 { id:'I02-Q16', island:'island2', stage:2, level:'medium', n:16, type:'hotspot', status:'draft',
   text:'تأمل صورة اللوحة الأم واكتشف الخطأ في تركيب الذاكرة. (المس موضع الخطأ في الرسم)',
   image:'i2q16', imageAlt:'رسم توضيحي لذاكرة RAM موضوعة بشكل خاطئ خارج شق DIMM المخصص لها',
   answer:'ramstick', answerText:'وحدة RAM لم توضع في الشق المخصص لها.',
   explanation:'يجب تركيب الذاكرة في شقوق DIMM المخصصة لها مع احترام اتجاهها وتوافقها مع اللوحة الأم.' },

 { id:'I02-Q17', island:'island2', stage:2, level:'medium', n:17, type:'multi', status:'draft',
   text:'اختر جميع وحدات التخزين الدائمة:',
   options:['SSD','RAM','HDD','Cache'], answers:[0,2], free:true,
   answerText:'SSD وHDD.',
   explanation:'SSD وHDD يحتفظان بالبيانات بعد إيقاف الحاسوب، أما RAM وCache فذاكرتان مؤقتتان.' },

 { id:'I02-Q18', island:'island2', stage:2, level:'medium', n:18, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'المقبس المخصص لتركيب المعالج على اللوحة الأم يسمى {0}',
   blanks:[{ accept:['Socket','سوكت','سوكيت','مقبس','المقبس'] }],
   answerText:'Socket.',
   explanation:'Socket هو المقبس الموجود على اللوحة الأم والمخصص لتركيب المعالج المتوافق معه.' },

 { id:'I02-Q19', island:'island2', stage:2, level:'medium', n:19, type:'mcq', status:'draft',
   scenario:'أراد تلميذ تركيب ذاكرة RAM، لكنه اكتشف أنها لا تتوافق مع اللوحة الأم.',
   text:'ما التصرف الصحيح؟',
   options:['إجبارها على الدخول.','التحقق من نوع الذاكرة المدعوم واختيار ذاكرة متوافقة.','إزالة المعالج.','تغيير الشاشة.'], answer:1,
   explanation:'يجب التحقق من توافق نوع الذاكرة وسعتها مع اللوحة الأم قبل تركيبها.' },

 { id:'I02-Q20', island:'island2', stage:2, level:'medium', n:20, type:'order', status:'draft',
   text:'رتب المراحل العامة التالية لتجميع حاسوب مكتبي:',
   items:['تركيب المعالج ونظام التبريد المتوافق.','تركيب ذاكرة RAM.','تركيب اللوحة الأم داخل الصندوق.','تركيب وحدة التخزين.','توصيل كابلات الطاقة والبيانات.','مراجعة التوصيلات قبل التشغيل.'],
   explanation:'يجب تنظيم مراحل التركيب ومراجعة جميع التوصيلات والتوافق قبل تشغيل الحاسوب.',
   reviewNote:'الترتيب من البنك كما هو (يفترض تركيب المعالج والذاكرة على اللوحة قبل وضعها في الصندوق). راجعيه مع ما ورد في الدرس.' }
]},

/* ============================ المرحلة الثالثة: صعب ============================ */
{ id:'I02-S3', level:'hard', title:'المرحلة الثالثة: صعب', questions:[
 { id:'I02-Q21', island:'island2', stage:3, level:'hard', n:21, type:'multi', status:'draft',
   text:'ما العناصر التي يجب التحقق من توافقها عند اختيار مكونات الحاسوب؟',
   options:['المعالج مع Socket اللوحة الأم.','نوع RAM مع اللوحة الأم.','حجم اللوحة الأم مع صندوق الحاسوب.','قدرة مزود الطاقة مع احتياجات المكونات.','لون الفأرة مع المعالج.'], answers:[0,1,2,3], free:true,
   answerText:'المعالج مع Socket اللوحة الأم. نوع RAM مع اللوحة الأم. حجم اللوحة الأم مع صندوق الحاسوب. قدرة مزود الطاقة مع احتياجات المكونات.',
   explanation:'التوافق بين المكونات ضروري لضمان تركيبها وتشغيلها بشكل سليم، أما لون الفأرة فلا يؤثر في توافق المكونات الداخلية.' },

 { id:'I02-Q22', island:'island2', stage:3, level:'hard', n:22, type:'hotspot', status:'draft',
   text:'لاحظ مخطط توصيلات الحاسوب واكتشف الخطأ. (المس موضع الخطأ في الرسم)',
   image:'i2q22', imageAlt:'مخطط لوحة أم يظهر فيه كابل الطاقة الرئيسي غير موصول باللوحة الأم',
   answer:'atx', answerText:'عدم توصيل كابل الطاقة الرئيسي للوحة الأم.',
   explanation:'تحتاج اللوحة الأم إلى توصيلات الطاقة المناسبة من مزود الطاقة حتى تتمكن من العمل.' },

 { id:'I02-Q23', island:'island2', stage:3, level:'hard', n:23, type:'mcq', status:'draft',
   text:'ما الغرض من استعمال المعجون الحراري (Pâte thermique) بين المعالج ونظام التبريد؟',
   options:['زيادة سعة RAM.','تحسين انتقال الحرارة من المعالج إلى المشتت.','تخزين البيانات.','تزويد المعالج بالطاقة.'], answer:1,
   explanation:'يساعد المعجون الحراري على تحسين التلامس الحراري بين المعالج والمشتت، مما يساهم في تبديد الحرارة.' },

 { id:'I02-Q24', island:'island2', stage:3, level:'hard', n:24, type:'mcq', status:'draft',
   scenario:'اختار شخص لوحة أم من الحجم ATX، لكن صندوق الحاسوب لا يدعم هذا الحجم.',
   text:'ما المشكلة؟',
   options:['عدم توافق Form Factor بين اللوحة الأم والصندوق.','عدم توافق HDMI مع الشاشة.','نقص مساحة SSD.','عدم توافق الفأرة مع الحاسوب.'], answer:0,
   explanation:'يجب التأكد من أن صندوق الحاسوب يدعم حجم اللوحة الأم، مثل ATX أو Micro-ATX.' },

 { id:'I02-Q25', island:'island2', stage:3, level:'hard', n:25, type:'image', status:'draft',
   text:'تأمل الصورة التي تعرض مكونات الحاسوب من الداخل. ما رقم المكوّن المسؤول عن تزويد الحاسوب بالطاقة الكهربائية؟',
   image:'i2q25', imageAlt:'مخطط داخلي مرقم يوضح المكونات الرئيسية، ومزود الطاقة هو المكوّن رقم 3',
   options:['المكوّن رقم 1.','المكوّن رقم 2.','المكوّن رقم 3.','المكوّن رقم 4.'], answer:2, shuffle:false,
   explanation:'مزود الطاقة (Bloc d’alimentation) يوزع الطاقة الكهربائية على مكونات الحاسوب.' },

 { id:'I02-Q26', island:'island2', stage:3, level:'hard', n:26, type:'mcq', status:'draft',
   scenario:'بعد تركيب الحاسوب وتشغيله، تعمل المراوح لكن لا تظهر أي صورة على الشاشة.',
   text:'ما أول ما ينبغي التحقق منه؟',
   options:['توصيل الشاشة واختيار مدخل العرض الصحيح، ثم مراجعة التوصيلات الأساسية وRAM.','تغيير لوحة المفاتيح مباشرة.','حذف جميع الملفات من SSD.','تغيير لون الصندوق.'], answer:0,
   explanation:'عند غياب الصورة يجب البدء بفحص الشاشة ومدخل العرض والتوصيلات والذاكرة، ثم متابعة التشخيص بشكل منظم.' },

 { id:'I02-Q27', island:'island2', stage:3, level:'hard', n:27, type:'truefalse', status:'draft',
   text:'يمكن استعمال معالج غير متوافق مع Socket اللوحة الأم، ثم حل المشكلة بتحديث BIOS دائماً.', answer:false,
   explanation:'تحديث BIOS لا يجعل المعالج غير المتوافق ميكانيكياً مع المقبس قابلاً للتركيب. يجب التحقق من التوافق أولاً.' },

 { id:'I02-Q28', island:'island2', stage:3, level:'hard', n:28, type:'finderror', status:'draft',
   scenario:'أثناء تجميع الحاسوب:',
   parts:[
     { t:'قام شخص بتوصيل وحدة التخزين SSD', wrong:false },
     { t:'في مكان مخصص لتركيب ذاكرة RAM.', wrong:true } ],
   text:'ما الخطأ؟',
   fixes:[
     'الخلط بين مكان تركيب وحدة التخزين ومكان تركيب ذاكرة RAM.',
     'عدم تثبيت المعالج في مقبسه.',
     'عدم توصيل مزود الطاقة بالكهرباء.' ], fixAnswer:0,
   answerText:'الخلط بين مكان تركيب وحدة التخزين ومكان تركيب ذاكرة RAM.',
   explanation:'لكل مكوّن موصل ومكان مخصص، ويجب التعرف على نوع المكوّن وواجهة الاتصال قبل تركيبه.',
   reviewNote:'الإجابة والتفسير من البنك. أضفتُ: تقسيم العبارة إلى جزأين قابلين للمس، وخيارين مشتتين للتشخيص.' },

 { id:'I02-Q29', island:'island2', stage:3, level:'hard', n:29, type:'mcq', status:'draft',
   scenario:'يريد تلميذ تجميع حاسوب، وقد اختار:',
   scenarioList:['معالجاً متوافقاً مع Socket اللوحة الأم.','ذاكرة RAM غير مدعومة من اللوحة الأم.','صندوقاً يدعم حجم اللوحة الأم.','مزود طاقة بقدرة مناسبة.'],
   text:'ما المكوّن الذي يجب تغييره قبل إتمام التجميع؟',
   options:['المعالج.','ذاكرة RAM.','صندوق الحاسوب.','مزود الطاقة.'], answer:1,
   explanation:'يجب استبدال ذاكرة RAM بذاكرة متوافقة مع اللوحة الأم، مع التأكد من جميع خصائص التوافق قبل التركيب.' },

 { id:'I02-Q30', island:'island2', stage:3, level:'hard', n:30, type:'hotspot', status:'draft',
   text:'التحدي النهائي — تأمل صورة تجميع الحاسوب، وحدد الأخطاء الثلاثة. (المس مواضع الأخطاء الثلاثة ثم اضغط «تحقق»)',
   image:'i2q30', imageAlt:'رسم تعليمي لحاسوب مكتبي فيه ثلاثة أخطاء: RAM خارج شقها، كابل الطاقة الرئيسي غير موصول، وSSD دون كابل بيانات SATA',
   answers:['ram','atx','ssd'], need:3,
   answerText:'1. تركيب RAM في موضع غير صحيح.\n2. عدم توصيل كابل الطاقة الرئيسي باللوحة الأم.\n3. عدم توصيل كابل بيانات SATA لوحدة التخزين.',
   explanation:'نجاح تجميع الحاسوب يتطلب تركيب كل مكوّن في مكانه الصحيح، والتأكد من توصيلات الطاقة والبيانات اللازمة قبل التشغيل.' }
]}

  ]
};


/* =====================================================================
   الجزيرة 03: نظام التشغيل (Système d’exploitation) — رسومات SVG مولَّدة
   (سطح مكتب توضيحي عام: لا يستعمل أي أصول من Microsoft)
   ===================================================================== */
(function(){
  let uid=0;
  const HS=(id,x,y,w,h)=>`<g class="hs" data-hs="${id}" tabindex="0" role="button" aria-label="منطقة في الرسم"><rect class="hsbg" x="${x}" y="${y}" width="${w}" height="${h}" rx="8"/></g>`;
  const ZN=(id,x,y,w,h,lx,ly)=>`<rect class="zn" data-zone="${id}" data-lx="${lx}" data-ly="${ly}" x="${x}" y="${y}" width="${w}" height="${h}" rx="8"/>`;
  function icon(x,y,k,t){
    const g={
      folder:`<path d="M8 20 h16 l5 6 h23 v26 h-44 z" fill="#ffd44d" stroke="#c99a12" stroke-width="2" stroke-linejoin="round"/>`,
      bin:`<path d="M16 22 h32 l-3 30 h-26 z" fill="#cfd8e3" stroke="#6f87a6" stroke-width="2" stroke-linejoin="round"/><rect x="13" y="16" width="38" height="6" rx="2" fill="#9db4cf" stroke="#6f87a6" stroke-width="2"/><path d="M26 28 v18 M32 28 v18 M38 28 v18" stroke="#6f87a6" stroke-width="2"/>`,
      doc:`<path d="M16 12 h22 l10 10 v32 h-32 z" fill="#fff" stroke="#6f87a6" stroke-width="2" stroke-linejoin="round"/><path d="M22 30 h20 M22 38 h20 M22 46 h14" stroke="#7aa6e6" stroke-width="3"/>`
    }[k];
    return `<g transform="translate(${x},${y})">${g}<text x="32" y="68" font-size="11" fill="#fff" text-anchor="middle">${t}</text></g>`;
  }
  function desktop(o){
    o=o||{};const id='dg'+(++uid),ix=o.iconX||24;
    let s=`<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" font-family="Tahoma,Arial,sans-serif"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e6fd9"/><stop offset=".6" stop-color="#3fa3f0"/><stop offset="1" stop-color="#8fd3ff"/></linearGradient></defs>`;
    s+=`<rect width="640" height="400" rx="16" fill="#0e1626"/><rect x="8" y="8" width="624" height="344" rx="10" fill="url(#${id})"/><g opacity=".22" fill="#fff"><circle cx="500" cy="90" r="90"/><circle cx="570" cy="150" r="56"/><circle cx="330" cy="300" r="44"/></g>`;
    s+=icon(ix,24,'folder','Documents')+icon(ix,104,'bin','Corbeille')+icon(ix,184,'doc','Notes');
    if(o.win)s+=`<g><rect x="250" y="50" width="300" height="210" rx="8" fill="#f4f8ff" stroke="#274b7a" stroke-width="3"/><rect x="250" y="50" width="300" height="26" rx="8" fill="#1a73c9"/><circle cx="268" cy="63" r="5" fill="#ff6b6b"/><circle cx="286" cy="63" r="5" fill="#ffd53a"/><circle cx="304" cy="63" r="5" fill="#2fbf71"/><g fill="#c4d8f3"><rect x="266" y="92" width="150" height="10" rx="4"/><rect x="266" y="112" width="250" height="10" rx="4"/><rect x="266" y="132" width="210" height="10" rx="4"/><rect x="266" y="152" width="230" height="10" rx="4"/></g></g>`;
    if(o.menu)s+=`<g><rect x="20" y="150" width="200" height="200" rx="10" fill="#243049" stroke="#6f87a6" stroke-width="2"/>${[0,1,2,3,4].map(i=>`<rect x="34" y="${166+i*34}" width="22" height="22" rx="5" fill="#4cc2ff" opacity="${1-i*.12}"/><rect x="66" y="${171+i*34}" width="120" height="10" rx="4" fill="#9db4cf"/>`).join('')}</g>`;
    s+=`<path d="M8 352 H632 V380 a12 12 0 0 1 -12 12 H20 a12 12 0 0 1 -12 -12 Z" fill="#1b2433"/>`+
       `<g fill="#4cc2ff"><rect x="22" y="361" width="12" height="12"/><rect x="36" y="361" width="12" height="12"/><rect x="22" y="375" width="12" height="12" opacity="0"/><rect x="22" y="374" width="12" height="12" opacity="0"/></g>`+
       `<g fill="#4cc2ff"><rect x="22" y="373" width="12" height="12" transform="translate(0,-1)" opacity="0"/></g>`+
       `<rect x="60" y="360" width="150" height="24" rx="12" fill="#2d3a52"/>`+
       [230,268,306].map((x,i)=>`<rect x="${x}" y="360" width="26" height="26" rx="6" fill="${['#5b6f95','#ffb74d','#7dd87f'][i]}"/>`).join('')+
       `<rect x="230" y="387" width="26" height="3" rx="1" fill="#4cc2ff"/><text x="596" y="379" font-size="12" fill="#fff" text-anchor="middle">10:30</text>`;
    s+=(o.extra||'')+'</svg>';
    return s;
  }
  /* زر ابدأ (أربعة مربعات) فوق شريط المهام */
  const startBtn=`<g fill="#4cc2ff"><rect x="22" y="361" width="12" height="11"/><rect x="36" y="361" width="12" height="11"/><rect x="22" y="374" width="12" height="11"/><rect x="36" y="374" width="12" height="11"/></g>`;
  const dsk=o=>desktop(o).replace('<rect x="60" y="360"',startBtn+'<rect x="60" y="360"');
  /* Q02: شعار نافذة مبسّط (أربعة مربعات زرقاء) */
  const q02=`<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img"><rect width="640" height="300" rx="16" fill="#eaf6ff"/><g fill="#0a84e8"><path d="M240 70 L312 60 V142 H240 Z"/><path d="M324 58 L408 46 V142 H324 Z"/><path d="M240 154 H312 V236 L240 226 Z"/><path d="M324 154 H408 V254 L324 242 Z"/></g></svg>`;
  /* Q07: سطح مكتب (لقطة توضيحية) */
  const q07=dsk({});
  /* Q10: حدد شريط المهام */
  const q10=dsk({win:true,extra:HS('taskbar',8,352,624,40)+HS('desk',8,8,624,344)+HS('icon',22,22,68,74)+HS('win',250,50,300,210)});
  /* Q15: سحب العناصر إلى أماكنها */
  const q15=dsk({menu:true,extra:ZN('desk',8,8,624,344,430,120)+ZN('icon',22,22,68,74,56,60)+ZN('bar',8,352,624,40,430,372)+ZN('menu',20,150,200,200,120,250)});
  /* Q19: تسمية خاطئة: شريط المهام سُمّي Bureau */
  const call=(id,txt,x,y,tx,ty,w)=>`<g><path d="M${x+w/2} ${y+14} L${tx} ${ty}" stroke="#ffd53a" stroke-width="3"/><circle cx="${tx}" cy="${ty}" r="5" fill="#ffd53a"/></g><g class="hs" data-hs="${id}" tabindex="0" role="button" aria-label="تسمية في الرسم"><rect class="hsbg" x="${x-4}" y="${y-4}" width="${w+8}" height="36" rx="10"/><rect x="${x}" y="${y}" width="${w}" height="28" rx="14" fill="#fff" stroke="#274b7a" stroke-width="2.5"/><text x="${x+w/2}" y="${y+19}" font-size="14" font-weight="bold" fill="#274b7a" text-anchor="middle">${txt}</text></g>`;
  const q19=dsk({menu:true,extra:call('lblmenu','Menu Démarrer',250,215,200,250,130)+call('lblicon','Icône',250,60,92,58,64)+call('lblbureau','Bureau',420,290,470,366,80)});
  /* Q25: محاولة تثبيت قبل إعداد وسيط USB */
  const q25=`<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" font-family="Tahoma,Arial,sans-serif"><rect width="640" height="300" rx="16" fill="#eaf6ff"/>
<g stroke="#274b7a" stroke-width="4" fill="none" stroke-linecap="round"><path d="M200 150 H236"/><path d="M228 140 L238 150 L228 160"/><path d="M400 150 H436"/><path d="M428 140 L438 150 L428 160"/></g>
<g><rect x="40" y="95" width="150" height="110" rx="10" fill="#fff" stroke="#274b7a" stroke-width="3"/><path d="M88 112 h40 l16 16 v50 h-56 z" fill="#d8e8ff" stroke="#7aa6e6" stroke-width="3"/><text x="116" y="160" font-size="22" font-weight="bold" fill="#1a73c9" text-anchor="middle">ISO</text></g>
<g><rect x="250" y="95" width="150" height="110" rx="10" fill="#f6f6f6" stroke="#8a97a8" stroke-width="3" stroke-dasharray="9 7"/><rect x="288" y="118" width="74" height="54" rx="6" fill="#e6e9ee" stroke="#a9b3c2" stroke-width="3" stroke-dasharray="6 5"/><rect x="306" y="172" width="38" height="18" rx="3" fill="#e6e9ee" stroke="#a9b3c2" stroke-width="3" stroke-dasharray="5 4"/></g>
<g><rect x="450" y="80" width="160" height="110" rx="8" fill="#274b7a"/><rect x="458" y="88" width="144" height="94" rx="4" fill="#0a84e8"/><g fill="#fff"><rect x="474" y="104" width="22" height="22"/><rect x="500" y="104" width="22" height="22"/><rect x="474" y="130" width="22" height="22"/><rect x="500" y="130" width="22" height="22"/></g><rect x="534" y="112" width="56" height="8" rx="4" fill="#fff"/><rect x="534" y="130" width="40" height="8" rx="4" fill="#fff" opacity=".7"/><rect x="508" y="190" width="64" height="12" fill="#6f87a6"/><rect x="484" y="202" width="112" height="8" rx="4" fill="#6f87a6"/></g>
${HS('iso',36,91,158,118)}${HS('pc',446,76,168,138)}${HS('usb',246,91,158,118)}</svg>`;
  /* Q30: تحديد العناصر الأربعة (أيقونات على اليمين) */
  const q30=dsk({menu:true,iconX:540,extra:ZN('desk',8,8,624,344,380,110)+ZN('icon',538,22,68,74,572,60)+ZN('bar',8,352,624,40,430,372)+ZN('menu',20,150,200,200,120,250)});
  Object.assign(window.INFO_EASY_IMAGES,{i3q02:q02,i3q07:q07,i3q10:q10,i3q15:q15,i3q19:q19,i3q25:q25,i3q30:q30});
})();

/* =====================================================================
   الجزيرة 03: نظام التشغيل — الأسئلة (30 سؤالاً، كلها draft)
   ===================================================================== */
window.INFO_EASY_BANK.islands.island3 = {
  title:'نظام التشغيل',
  stages:[

/* ============================ المرحلة الأولى: سهل ============================ */
{ id:'I03-S1', level:'easy', title:'المرحلة الأولى: سهل', questions:[
 { id:'I03-Q01', island:'island3', stage:1, level:'easy', n:1, type:'mcq', status:'draft',
   text:'ما هو نظام التشغيل؟',
   options:['برنامج يسمح بإدارة موارد الحاسوب وتشغيل التطبيقات.','جهاز لتخزين الملفات.','مكوّن إلكتروني لمعالجة البيانات.','برنامج خاص بالرسم فقط.'], answer:0,
   explanation:'نظام التشغيل هو البرنامج الأساسي الذي يدير مكونات الحاسوب ويوفر بيئة لتشغيل التطبيقات.' },

 { id:'I03-Q02', island:'island3', stage:1, level:'easy', n:2, type:'image', status:'draft',
   text:'ما اسم نظام التشغيل الظاهر في الصورة؟',
   image:'i3q02', imageAlt:'شعار Windows',
   options:['Linux','Windows','macOS','Android'], answer:1,
   explanation:'Windows هو نظام تشغيل من تطوير Microsoft، ويُستخدم على نطاق واسع في الحواسيب الشخصية.',
   reviewNote:'الصورة رسم مبسّط لشعار النافذة (أربعة مربعات زرقاء) وليست الشعار الرسمي. يمكن استبدالها بالشعار الرسمي إن توفر لديكِ ترخيص استعماله.' },

 { id:'I03-Q03', island:'island3', stage:1, level:'easy', n:3, type:'truefalse', status:'draft',
   text:'يمكن تشغيل الحاسوب واستعمال مختلف البرامج دون وجود نظام تشغيل.', answer:false,
   explanation:'نظام التشغيل يوفر البيئة الأساسية التي تسمح للمستخدم بالتفاعل مع الحاسوب وتشغيل التطبيقات.' },

 { id:'I03-Q04', island:'island3', stage:1, level:'easy', n:4, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'البرنامج الأساسي الذي يدير موارد الحاسوب ويسمح بتشغيل التطبيقات يسمى {0}',
   blanks:[{ accept:['نظام التشغيل','نظام تشغيل','Système d’exploitation','Systeme d exploitation','Operating system','OS'] }],
   answerText:'نظام التشغيل (Système d’exploitation).',
   explanation:'نظام التشغيل هو المسؤول عن إدارة المكونات والبرامج وتوفير واجهة للمستخدم.' },

 { id:'I03-Q05', island:'island3', stage:1, level:'easy', n:5, type:'match', status:'draft',
   text:'اربط كل نظام تشغيل بالجهاز الذي يُستخدم عليه عادةً.',
   pairs:[
     { l:'Windows', r:'العديد من الحواسيب والأجهزة المختلفة.' },
     { l:'Android', r:'الهواتف الذكية والأجهزة اللوحية التي تعتمد عليه.' },
     { l:'iOS',     r:'الهواتف الذكية من Apple.' },
     { l:'Linux',   r:'الحواسيب وأجهزة وأنظمة مختلفة.' } ],
   explanation:'توجد أنظمة تشغيل مختلفة، ويعتمد اختيارها على نوع الجهاز واستعماله.',
   reviewNote:'⚠ للمراجعة العلمية: تعريفا Windows وLinux في البنك متقاربان («العديد من الحواسيب والأجهزة المختلفة» / «الحواسيب وأجهزة وأنظمة مختلفة») وقد يلتبسان على التلميذ. الإجابات كما في البنك دون تغيير.' },

 { id:'I03-Q06', island:'island3', stage:1, level:'easy', n:6, type:'mcq', status:'draft',
   text:'ما الوظيفة الأساسية لنظام التشغيل؟',
   options:['إدارة موارد الحاسوب.','طباعة الأوراق فقط.','زيادة حجم الشاشة.','تخزين الكهرباء.'], answer:0,
   explanation:'يدير نظام التشغيل المعالج والذاكرة وملفات التخزين والأجهزة المتصلة، ويوفر خدمات للتطبيقات.' },

 { id:'I03-Q07', island:'island3', stage:1, level:'easy', n:7, type:'image', status:'draft',
   text:'ما اسم العنصر الظاهر في الصورة؟',
   image:'i3q07', imageAlt:'صورة سطح مكتب Windows تحتوي على الخلفية والأيقونات وشريط المهام',
   options:['Bureau','Explorateur de fichiers','BIOS','Panneau de configuration'], answer:0,
   explanation:'Bureau هو سطح المكتب الذي يظهر بعد تشغيل النظام وتسجيل الدخول.' },

 { id:'I03-Q08', island:'island3', stage:1, level:'easy', n:8, type:'mcq', status:'draft',
   text:'أي من البرامج التالية يُعد نظام تشغيل؟',
   options:['Microsoft Word','Windows','Paint','Google Chrome'], answer:1,
   explanation:'Windows نظام تشغيل، بينما Word وPaint وChrome تطبيقات تعمل ضمن نظام التشغيل.' },

 { id:'I03-Q09', island:'island3', stage:1, level:'easy', n:9, type:'truefalse', status:'draft',
   text:'يُعتبر Microsoft Word نظام تشغيل.', answer:false,
   explanation:'Microsoft Word برنامج تطبيقي لمعالجة النصوص، وليس نظام تشغيل.' },

 { id:'I03-Q10', island:'island3', stage:1, level:'easy', n:10, type:'hotspot', status:'draft',
   text:'في صورة سطح المكتب، حدد شريط المهام (Barre des tâches). (المس العنصر في الرسم)',
   image:'i3q10', imageAlt:'لقطة توضيحية لسطح مكتب Windows مع إظهار شريط المهام دون كتابة اسمه',
   answer:'taskbar', answerText:'الشريط الموجود عادةً أسفل سطح المكتب ويحتوي على زر Start والأيقونات والتطبيقات المفتوحة.',
   explanation:'شريط المهام يساعد على الوصول إلى التطبيقات وإدارة النوافذ المفتوحة.' }
]},

/* ============================ المرحلة الثانية: متوسط ============================ */
{ id:'I03-S2', level:'medium', title:'المرحلة الثانية: متوسط', questions:[
 { id:'I03-Q11', island:'island3', stage:2, level:'medium', n:11, type:'match', status:'draft',
   text:'اربط كل عنصر بوظيفته.',
   pairs:[
     { l:'Bureau',                r:'عرض مساحة العمل الرئيسية والأيقونات.' },
     { l:'Barre des tâches',      r:'عرض التطبيقات المفتوحة والوصول إليها.' },
     { l:'Menu Démarrer',         r:'الوصول إلى التطبيقات والإعدادات والخيارات.' },
     { l:'Explorateur de fichiers', r:'الوصول إلى الملفات والمجلدات وإدارتها.' } ],
   explanation:'يتكون سطح المكتب من عناصر مختلفة تساعد المستخدم على التعامل مع نظام التشغيل.' },

 { id:'I03-Q12', island:'island3', stage:2, level:'medium', n:12, type:'order', status:'draft',
   text:'رتب مراحل تشغيل الحاسوب بشكل منطقي.',
   items:['تشغيل الحاسوب.','إجراء عملية الإقلاع (Boot).','تحميل نظام التشغيل.','ظهور سطح المكتب.'],
   explanation:'يبدأ الحاسوب عملية الإقلاع، ثم يتم تحميل نظام التشغيل لتصبح البيئة جاهزة للاستعمال.' },

 { id:'I03-Q13', island:'island3', stage:2, level:'medium', n:13, type:'mcq', status:'draft',
   text:'ما البرنامج الذي يسمح بتصفح الملفات والمجلدات في Windows؟',
   options:['Calculatrice','Explorateur de fichiers','Paint','Bloc-notes'], answer:1,
   explanation:'Explorateur de fichiers يسمح باستعراض الملفات والمجلدات وإنشاءها ونقلها ونسخها وحذفها.' },

 { id:'I03-Q14', island:'island3', stage:2, level:'medium', n:14, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'العنصر الذي يسمح بالوصول إلى التطبيقات والإعدادات والخيارات المختلفة في Windows يسمى {0}',
   blanks:[{ accept:['Menu Démarrer','Menu Demarrer','Menu Start','Start Menu','قائمة ابدأ','قائمة Start','قائمة البدء'] }],
   answerText:'Menu Démarrer.',
   explanation:'قائمة Start توفر الوصول إلى البرامج والإعدادات وأدوات النظام.' },

 { id:'I03-Q15', island:'island3', stage:2, level:'medium', n:15, type:'place', status:'draft',
   text:'اسحب كل عنصر إلى مكانه المناسب في مخطط سطح مكتب Windows.',
   scenarioList:['مساحة سطح المكتب.','رمز يمثل برنامجاً أو ملفاً.','الشريط الموجود أسفل الشاشة.','قائمة الوصول إلى التطبيقات والإعدادات.'],
   image:'i3q15', imageAlt:'مخطط سطح مكتب Windows يظهر فيه سطح المكتب وأيقونة وشريط المهام وقائمة ابدأ',
   items:[ { t:'Bureau', z:'desk' }, { t:'Icône', z:'icon' }, { t:'Barre des tâches', z:'bar' }, { t:'Menu Démarrer', z:'menu' } ],
   answerText:'Bureau: مساحة سطح المكتب.\nIcône: رمز يمثل برنامجاً أو ملفاً.\nBarre des tâches: الشريط الموجود أسفل الشاشة.\nMenu Démarrer: قائمة الوصول إلى التطبيقات والإعدادات.',
   explanation:'لكل عنصر في واجهة Windows وظيفة تسهّل التعامل مع النظام.' },

 { id:'I03-Q16', island:'island3', stage:2, level:'medium', n:16, type:'truefalse', status:'draft',
   text:'يمكن لنظام التشغيل إدارة الملفات والمجلدات الموجودة على وحدات التخزين.', answer:true,
   explanation:'يوفر نظام التشغيل أدوات لإنشاء الملفات والمجلدات وتنظيمها ونسخها ونقلها وحذفها.' },

 { id:'I03-Q17', island:'island3', stage:2, level:'medium', n:17, type:'mcq', status:'draft',
   scenario:'أراد تلميذ الوصول إلى ملف موجود في مجلد Documents.',
   text:'ما الأداة المناسبة؟',
   options:['Explorateur de fichiers','Calculatrice','Paint','Lecteur audio'], answer:0,
   explanation:'يسمح مستكشف الملفات بالوصول إلى المجلدات والملفات الموجودة على الحاسوب.' },

 { id:'I03-Q18', island:'island3', stage:2, level:'medium', n:18, type:'multi', status:'draft',
   text:'ما المهام التي يمكن القيام بها باستخدام نظام التشغيل؟',
   options:['إدارة الذاكرة.','إدارة الملفات.','تشغيل التطبيقات.','إدارة الأجهزة المتصلة.','تصنيع المكونات الإلكترونية.'], answers:[0,1,2,3], free:true,
   answerText:'إدارة الذاكرة. إدارة الملفات. تشغيل التطبيقات. إدارة الأجهزة المتصلة.',
   explanation:'نظام التشغيل يدير موارد الحاسوب ويوفر خدمات مختلفة للتطبيقات والمستخدم.' },

 { id:'I03-Q19', island:'island3', stage:2, level:'medium', n:19, type:'hotspot', status:'draft',
   text:'تأمل الصورة واكتشف الخطأ في تسمية عناصر سطح المكتب. (المس التسمية الخاطئة)',
   image:'i3q19', imageAlt:'مخطط لواجهة Windows يحتوي على تسمية خاطئة: تمت تسمية Barre des tâches باسم Bureau',
   answer:'lblbureau', answerText:'تم الخلط بين Barre des tâches وBureau.',
   explanation:'Bureau هو مساحة العمل الرئيسية، بينما Barre des tâches هو الشريط الذي يحتوي على زر Start وأيقونات التطبيقات.' },

 { id:'I03-Q20', island:'island3', stage:2, level:'medium', n:20, type:'order', status:'draft',
   text:'رتب الخطوات التالية لفتح ملف موجود في مجلد Documents.',
   items:['فتح Explorateur de fichiers.','الدخول إلى مجلد Documents.','تحديد الملف.','فتح الملف المطلوب.'],
   explanation:'يجب الوصول إلى موقع الملف أولاً، ثم تحديده وفتحه.' }
]},

/* ============================ المرحلة الثالثة: صعب ============================ */
{ id:'I03-S3', level:'hard', title:'المرحلة الثالثة: صعب', questions:[
 { id:'I03-Q21', island:'island3', stage:3, level:'hard', n:21, type:'mcq', status:'draft',
   text:'ما الذي يحدث عادةً عند تشغيل الحاسوب قبل ظهور سطح المكتب؟',
   options:['يتم تحميل نظام التشغيل بعد عملية الإقلاع.','يتم حذف الملفات.','يتم تشغيل جميع التطبيقات تلقائياً.','يتم إيقاف المعالج.'], answer:0,
   explanation:'يقوم الحاسوب بعملية الإقلاع، ثم يتم تحميل نظام التشغيل من وحدة التخزين إلى الذاكرة لتبدأ عملية الاستخدام.' },

 { id:'I03-Q22', island:'island3', stage:3, level:'hard', n:22, type:'order', status:'draft',
   text:'رتب المراحل العامة لتثبيت نظام تشغيل Windows.',
   items:['تجهيز ملف ISO.','إعداد وسيط تثبيت USB.','اختيار USB كوسيلة إقلاع.','بدء تثبيت Windows.','إكمال إعداد النظام.'],
   explanation:'يتطلب تثبيت النظام تحضير وسيط التثبيت ثم الإقلاع منه واتباع مراحل التثبيت.' },

 { id:'I03-Q23', island:'island3', stage:3, level:'hard', n:23, type:'mcq', status:'draft',
   scenario:'أراد مستخدم حذف ملف، لكنه فتح برنامج Paint بدلاً من مستكشف الملفات.',
   text:'ما الأداة التي ينبغي استعمالها؟',
   options:['Explorateur de fichiers','Microsoft Word','Calculatrice','Lecteur vidéo'], answer:0,
   explanation:'إدارة الملفات وحذفها تتم باستخدام أدوات إدارة الملفات مثل Explorateur de fichiers.' },

 { id:'I03-Q24', island:'island3', stage:3, level:'hard', n:24, type:'multi', status:'draft',
   text:'ما العناصر التي تُعد جزءاً من واجهة Windows الرسومية؟',
   options:['Bureau','Barre des tâches','Menu Démarrer','Icônes','Processeur'], answers:[0,1,2,3], free:true,
   answerText:'Bureau. Barre des tâches. Menu Démarrer. Icônes.',
   explanation:'هذه عناصر من الواجهة الرسومية التي يتعامل معها المستخدم، أما المعالج فهو مكوّن مادي.' },

 { id:'I03-Q25', island:'island3', stage:3, level:'hard', n:25, type:'hotspot', status:'draft',
   text:'تأمل صورة تثبيت Windows واكتشف الخطأ في ترتيب العملية. (المس موضع الخطأ في المخطط)',
   image:'i3q25', imageAlt:'مخطط يوضح محاولة تثبيت Windows قبل إعداد وسيط التثبيت USB',
   answer:'usb', answerText:'لم يتم إعداد وسيط التثبيت قبل البدء.',
   explanation:'يجب تجهيز وسيط التثبيت الذي يحتوي على ملفات النظام قبل الإقلاع منه وبدء عملية التثبيت.' },

 { id:'I03-Q26', island:'island3', stage:3, level:'hard', n:26, type:'mcq', status:'draft',
   scenario:'بعد تشغيل الحاسوب، ظهرت رسالة تفيد بعدم العثور على نظام تشغيل.',
   text:'ما السبب المحتمل؟',
   options:['عدم العثور على نظام تشغيل صالح للإقلاع على وحدة التخزين.','امتلاء الشاشة بالأيقونات.','انخفاض صوت مكبرات الصوت.','عدم اتصال الفأرة.'], answer:0,
   explanation:'قد تظهر هذه الرسالة عندما لا يعثر الحاسوب على وحدة تخزين أو نظام تشغيل صالح للإقلاع.' },

 { id:'I03-Q27', island:'island3', stage:3, level:'hard', n:27, type:'truefalse', status:'draft',
   text:'يمكن لنظام التشغيل أن يعمل كوسيط بين المستخدم والمكونات المادية للحاسوب.', answer:true,
   explanation:'يوفر نظام التشغيل واجهة للمستخدم ويدير الموارد المادية، مما يسمح بالتفاعل مع الحاسوب.' },

 { id:'I03-Q28', island:'island3', stage:3, level:'hard', n:28, type:'match', status:'draft',
   text:'اربط كل نوع من البرامج بوظيفته.',
   pairs:[
     { l:'Système d’exploitation', r:'إدارة الحاسوب وموارده.' },
     { l:'Traitement de texte',    r:'معالجة النصوص وإنشاء الوثائق.' },
     { l:'Navigateur Web',         r:'تصفح مواقع الإنترنت.' },
     { l:'Antivirus',              r:'حماية الحاسوب من بعض التهديدات البرمجية.' } ],
   explanation:'تختلف البرامج حسب وظيفتها، ونظام التشغيل هو البرنامج الأساسي الذي يدير الحاسوب.' },

 { id:'I03-Q29', island:'island3', stage:3, level:'hard', n:29, type:'mcq', status:'draft',
   scenario:'يريد تلميذ إنشاء مجلد جديد باسم Informatique داخل Documents، ثم حفظ ملف فيه.',
   text:'ما الترتيب الصحيح؟',
   options:['فتح الملف ← إنشاء المجلد ← فتح Documents.','فتح Explorateur de fichiers ← الدخول إلى Documents ← إنشاء مجلد Informatique ← حفظ الملف داخله.','تشغيل Paint ← حذف Documents ← حفظ الملف.','فتح Menu Démarrer ← إيقاف الحاسوب.'], answer:1,
   explanation:'يجب الوصول إلى المجلد المطلوب، ثم إنشاء المجلد الجديد، وبعد ذلك حفظ الملف في المكان الصحيح.' },

 { id:'I03-Q30', island:'island3', stage:3, level:'hard', n:30, type:'place', status:'draft',
   text:'التحدي النهائي — تأمل صورة واجهة Windows وحدد العناصر الأربعة المطلوبة: اسحب كل اسم إلى موضعه في الصورة.',
   image:'i3q30', imageAlt:'لقطة توضيحية لسطح مكتب Windows تتضمن Bureau وMenu Démarrer وBarre des tâches وIcône',
   items:[ { t:'Bureau', z:'desk' }, { t:'Menu Démarrer', z:'menu' }, { t:'Barre des tâches', z:'bar' }, { t:'Icône', z:'icon' } ],
   answerText:'Bureau: مساحة العمل الرئيسية.\nMenu Démarrer: قائمة الوصول إلى التطبيقات والإعدادات.\nBarre des tâches: الشريط الموجود أسفل الشاشة.\nIcône: رمز يمثل برنامجاً أو ملفاً أو مجلداً.',
   explanation:'التعرف على عناصر واجهة نظام التشغيل يساعد المستخدم على التعامل مع الحاسوب بكفاءة.' }
]}

  ]
};


/* =====================================================================
   الجزيرة 04: لوحة التحكم (Panneau de configuration) — 15 سؤالاً (5 لكل مرحلة)، كلها draft
   ===================================================================== */
window.INFO_EASY_BANK.islands.island4 = {
  title:'لوحة التحكم',
  stages:[

/* ============================ المرحلة الأولى: سهل ============================ */
{ id:'I04-S1', level:'easy', title:'المرحلة الأولى: سهل', questions:[
 { id:'I04-Q01', island:'island4', stage:1, level:'easy', n:1, type:'mcq', status:'draft',
   text:'ما الوظيفة الأساسية للوحة التحكم (Panneau de configuration) في Windows؟',
   options:['إدارة إعدادات النظام وتخصيصها.','إنشاء ملفات نصية.','تشغيل الألعاب فقط.'], answer:0,
   explanation:'لوحة التحكم تسمح للمستخدم بتغيير إعدادات النظام وإدارة مختلف مكونات الحاسوب.' },

 { id:'I04-Q02', island:'island4', stage:1, level:'easy', n:2, type:'truefalse', status:'draft',
   text:'يمكن استعمال لوحة التحكم لتغيير إعدادات الفأرة (Souris).', answer:true,
   explanation:'تسمح لوحة التحكم بتعديل خصائص الفأرة، مثل سرعة المؤشر وأزرارها.' },

 { id:'I04-Q03', island:'island4', stage:1, level:'easy', n:3, type:'mcq', status:'draft',
   text:'أي أداة نستخدمها لتغيير التاريخ والوقت في Windows؟',
   options:['Programmes et fonctionnalités','Date et heure','Gestionnaire de périphériques'], answer:1,
   explanation:'أداة Date et heure تسمح بضبط التاريخ والوقت والمنطقة الزمنية.' },

 { id:'I04-Q04', island:'island4', stage:1, level:'easy', n:4, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'لتغيير مظهر الشاشة ودقة العرض، نستعمل إعدادات {0}',
   blanks:[{ accept:['Affichage','Display','العرض','إعدادات العرض'] }],
   answerText:'Affichage.',
   explanation:'تسمح إعدادات Affichage بتعديل خصائص العرض، مثل دقة الشاشة وبعض عناصر المظهر.' },

 { id:'I04-Q05', island:'island4', stage:1, level:'easy', n:5, type:'mcq', status:'draft',
   text:'أي أداة تسمح بإزالة برنامج مثبت على الحاسوب؟',
   options:['Programmes et fonctionnalités','Clavier','Son'], answer:0,
   explanation:'تسمح أداة Programmes et fonctionnalités بإدارة البرامج المثبتة وإلغاء تثبيت البرامج غير المرغوب فيها.' }
]},

/* ============================ المرحلة الثانية: متوسط ============================ */
{ id:'I04-S2', level:'medium', title:'المرحلة الثانية: متوسط', questions:[
 { id:'I04-Q06', island:'island4', stage:2, level:'medium', n:6, type:'match', status:'draft',
   text:'اربط كل أداة بوظيفتها المناسبة:',
   pairs:[
     { l:'Souris',        r:'تغيير إعدادات الفأرة.' },
     { l:'Clavier',       r:'تغيير إعدادات لوحة المفاتيح.' },
     { l:'Son',           r:'ضبط إعدادات الصوت.' },
     { l:'Date et heure', r:'تعديل التاريخ والوقت.' } ],
   explanation:'تحتوي لوحة التحكم على أدوات متخصصة، حيث تتولى كل أداة إدارة إعدادات معينة.' },

 { id:'I04-Q07', island:'island4', stage:2, level:'medium', n:7, type:'mcq', status:'draft',
   scenario:'يريد تلميذ تغيير اللغة المستخدمة في لوحة المفاتيح.',
   text:'ما الأداة المناسبة؟',
   options:['Région','Clavier','Affichage'], answer:1,
   explanation:'إعدادات Clavier تسمح بتعديل خصائص لوحة المفاتيح.' },

 { id:'I04-Q08', island:'island4', stage:2, level:'medium', n:8, type:'truefalse', status:'draft',
   text:'تسمح أداة Gestionnaire de périphériques بإدارة الأجهزة المتصلة بالحاسوب والتعرف على مكوناتها.', answer:true,
   explanation:'يمكن من خلالها عرض الأجهزة والتحقق من حالتها وإدارة برامج تشغيلها.' },

 { id:'I04-Q09', island:'island4', stage:2, level:'medium', n:9, type:'finderror', status:'draft',
   scenario:'قال تلميذ:',
   parts:[
     { t:'«إذا أردت تغيير دقة الشاشة،', wrong:false },
     { t:'أفتح أداة Son من لوحة التحكم».', wrong:true } ],
   text:'صحح الخطأ.',
   fixes:[
     'يجب استعمال إعدادات Affichage لتغيير دقة الشاشة، وليس Son.',
     'يجب استعمال Date et heure لتغيير دقة الشاشة.',
     'يجب استعمال Clavier لتغيير دقة الشاشة.' ], fixAnswer:0,
   answerText:'يجب استعمال إعدادات Affichage لتغيير دقة الشاشة، وليس Son.',
   explanation:'أداة Son خاصة بإعدادات الصوت، أما Affichage فتتعلق بإعدادات العرض.',
   reviewNote:'الإجابة والتفسير من البنك. أضفتُ: تقسيم العبارة إلى جزأين قابلين للمس، وخيارين مشتتين للتصحيح (Date et heure، Clavier).' },

 { id:'I04-Q10', island:'island4', stage:2, level:'medium', n:10, type:'mcq', status:'draft',
   scenario:'لاحظت أن صوت الحاسوب منخفض جدًا، وأرادت رفع مستوى الصوت وتغيير جهاز الإخراج.',
   text:'ما الأداة المناسبة؟',
   options:['Son','Souris','Date et heure'], answer:0,
   explanation:'أداة Son تسمح بإدارة مستوى الصوت وأجهزة الصوت وبعض خصائصها.' }
]},

/* ============================ المرحلة الثالثة: صعب ============================ */
{ id:'I04-S3', level:'hard', title:'المرحلة الثالثة: صعب', questions:[
 { id:'I04-Q11', island:'island4', stage:3, level:'hard', n:11, type:'mcq', status:'draft',
   scenario:'أراد مستخدم حذف برنامج لم يعد بحاجة إليه من الحاسوب، دون حذف الملفات الشخصية.',
   text:'ما الأداة التي ينبغي أن يستعملها؟',
   options:['Gestionnaire de périphériques','Programmes et fonctionnalités','Affichage'], answer:1,
   explanation:'Programmes et fonctionnalités تتيح إدارة البرامج المثبتة وإلغاء تثبيتها، بينما حذف الملفات الشخصية عملية مختلفة.' },

 { id:'I04-Q12', island:'island4', stage:3, level:'hard', n:12, type:'mcq', status:'draft',
   text:'أيّ من العمليات التالية يمكن القيام بها من خلال Gestionnaire de périphériques؟',
   options:['تغيير خلفية سطح المكتب فقط.','عرض الأجهزة وإدارة برامج تشغيلها.','إنشاء عرض تقديمي.'], answer:1,
   explanation:'Gestionnaire de périphériques أداة لإدارة الأجهزة المادية والتعرف على حالتها وبرامج تشغيلها.' },

 { id:'I04-Q13', island:'island4', stage:3, level:'hard', n:13, type:'finderror', status:'draft',
   scenario:'أراد مستخدم تغيير إعدادات التاريخ والوقت،',
   parts:[
     { t:'أراد مستخدم تغيير إعدادات التاريخ والوقت،', wrong:false },
     { t:'ففتح أداة Clavier.', wrong:true } ],
   text:'ما الخطأ؟ وما الأداة الصحيحة؟',
   fixes:[
     'الأداة غير مناسبة، ويجب فتح Date et heure.',
     'الأداة مناسبة، ولا يوجد خطأ.',
     'الأداة غير مناسبة، ويجب فتح Son.' ], fixAnswer:0,
   answerText:'الأداة غير مناسبة، ويجب فتح Date et heure.',
   explanation:'Clavier خاصة بإعدادات لوحة المفاتيح، أما Date et heure فتُستخدم لضبط التاريخ والوقت.',
   reviewNote:'الإجابة والتفسير من البنك. أضفتُ: تقسيم العبارة إلى جزأين قابلين للمس، وخيارين مشتتين للتصحيح.' },

 { id:'I04-Q14', island:'island4', stage:3, level:'hard', n:14, type:'mcq', status:'draft',
   scenario:'أراد مستخدم تغيير طريقة عرض الأرقام والتواريخ حسب المنطقة التي يعيش فيها.',
   text:'أي أداة من لوحة التحكم يمكن أن تساعده؟',
   options:['Région','Souris','Programmes et fonctionnalités'], answer:0,
   explanation:'إعدادات Région تسمح بتحديد التنسيقات الإقليمية، مثل طريقة عرض التواريخ والأرقام وبعض الإعدادات المرتبطة باللغة والمنطقة.' },

 { id:'I04-Q15', island:'island4', stage:3, level:'hard', n:15, type:'order', status:'draft',
   text:'رتّب الخطوات التالية للوصول إلى لوحة التحكم في Windows:',
   items:['فتح قائمة Démarrer.','البحث عن Panneau de configuration أو الوصول إليها من القائمة.','اختيار Panneau de configuration وفتحها.'],
   explanation:'يمكن الوصول إلى لوحة التحكم من قائمة ابدأ، كما يمكن البحث عنها مباشرة في Windows.',
   reviewNote:'في قائمة البنك الخطوات بصياغة مختلفة قليلاً عن الإجابة (مثلاً «اختيار Panneau de configuration» و«وفتحها»)؛ اعتمدتُ صياغة الإجابة النموذجية.' }
]}

  ]
};


/* =====================================================================
   الجزيرة 05: حماية الحاسوب (Protection de l'ordinateur) — 30 سؤالاً، كلها draft
   ===================================================================== */
window.INFO_EASY_BANK.islands.island5 = {
  title:'حماية الحاسوب',
  stages:[

/* ============================ المرحلة الأولى: سهل ============================ */
{ id:'I05-S1', level:'easy', title:'المرحلة الأولى: سهل', questions:[
 { id:'I05-Q01', island:'island5', stage:1, level:'easy', n:1, type:'mcq', status:'draft',
   text:'ما المقصود بالفيروس المعلوماتي (Virus informatique)؟',
   options:['برنامج ضار يستطيع إصابة الملفات أو البرامج والتكاثر والانتشار.','برنامج مخصص لتنظيم الملفات.','جهاز يستعمل لتخزين المعلومات.'], answer:0,
   explanation:'الفيروس المعلوماتي برنامج ضار يمكنه إصابة الملفات أو البرامج والتكاثر والانتشار، وقد يتسبب في أضرار للحاسوب.' },

 { id:'I05-Q02', island:'island5', stage:1, level:'easy', n:2, type:'truefalse', status:'draft',
   text:'تستطيع الفيروسات المعلوماتية نسخ نفسها والانتقال إلى ملفات أو برامج أخرى.', answer:true,
   explanation:'من خصائص الفيروسات قدرتها على التكاثر والانتشار، وغالبًا ما ترتبط بملفات أو برامج مضيفة.' },

 { id:'I05-Q03', island:'island5', stage:1, level:'easy', n:3, type:'mcq', status:'draft',
   text:'أي من الأعراض التالية قد يدل على إصابة الحاسوب ببرمجية ضارة؟',
   options:['بطء غير معتاد في الحاسوب وظهور نوافذ ورسائل مجهولة.','زيادة حجم الشاشة.','تحسن سرعة الحاسوب دائمًا.'], answer:0,
   explanation:'بطء الحاسوب وظهور نوافذ غير مألوفة من الأعراض المحتملة للإصابة، لكنها لا تثبت وجود فيروس بمفردها.' },

 { id:'I05-Q04', island:'island5', stage:1, level:'easy', n:4, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'من خصائص الفيروس المعلوماتي قدرته على {0} نفسه والانتشار إلى ملفات أو برامج أخرى.',
   blanks:[{ accept:['نسخ','ينسخ','نسخة','تكرار','تكاثر'] }],
   answerText:'نسخ.',
   explanation:'التكاثر ونسخ نفسه من الخصائص التي تساعد الفيروس على الانتشار.' },

 { id:'I05-Q05', island:'island5', stage:1, level:'easy', n:5, type:'mcq', status:'draft',
   text:'أي من الأضرار التالية يمكن أن تسببه الفيروسات المعلوماتية؟',
   options:['حذف الملفات أو إتلافها.','زيادة سرعة المعالج.','تحسين جودة الشاشة.'], answer:0,
   explanation:'قد تؤدي الفيروسات والبرمجيات الضارة إلى حذف البيانات أو إتلافها أو تغيير محتواها.' },

 { id:'I05-Q06', island:'island5', stage:1, level:'easy', n:6, type:'truefalse', status:'draft',
   text:'يعتبر تحديث برنامج مضاد الفيروسات من طرق الوقاية من البرمجيات الضارة.', answer:true,
   explanation:'تساعد التحديثات على تحسين قدرة برنامج الحماية على التعرف على التهديدات الجديدة.' },

 { id:'I05-Q07', island:'island5', stage:1, level:'easy', n:7, type:'mcq', status:'draft',
   text:'ما وظيفة برنامج مضاد الفيروسات (Antivirus)؟',
   options:['إنشاء الملفات النصية.','اكتشاف البرمجيات الضارة والمساعدة على التعامل معها.','زيادة حجم ذاكرة الحاسوب.'], answer:1,
   explanation:'يساعد مضاد الفيروسات على فحص الملفات واكتشاف التهديدات والتعامل معها.' },

 { id:'I05-Q08', island:'island5', stage:1, level:'easy', n:8, type:'mcq', status:'draft',
   text:'ما البرمجية الضارة التي تتخفى في شكل برنامج يبدو مفيدًا أو عاديًا؟',
   options:['حصان طروادة (Cheval de Troie).','برنامج مضاد الفيروسات.','برنامج معالجة النصوص.'], answer:0,
   explanation:'حصان طروادة يتظاهر بأنه برنامج شرعي أو مفيد، بينما يخفي وظيفة ضارة.' },

 { id:'I05-Q09', island:'island5', stage:1, level:'easy', n:9, type:'truefalse', status:'draft',
   text:'الديدان البرمجية (Vers informatiques) تستطيع نسخ نفسها والانتشار دون الحاجة إلى الارتباط بملف مضيف بالطريقة المعتادة للفيروسات التقليدية.', answer:true,
   explanation:'تستطيع الديدان البرمجية التكاثر والانتشار بشكل مستقل، ومن ذلك الانتشار عبر الشبكات.' },

 { id:'I05-Q10', island:'island5', stage:1, level:'easy', n:10, type:'mcq', status:'draft',
   text:'ما الهدف الأساسي من الصيانة الوقائية (Maintenance préventive)؟',
   options:['حماية المكونات المادية للحاسوب من الغبار والحرارة والسوائل.','تثبيت الألعاب فقط.','تغيير نظام التشغيل باستمرار.'], answer:0,
   explanation:'الصيانة الوقائية تهدف إلى الحفاظ على المكونات المادية وتجنب الأعطال.' }
]},

/* ============================ المرحلة الثانية: متوسط ============================ */
{ id:'I05-S2', level:'medium', title:'المرحلة الثانية: متوسط', questions:[
 { id:'I05-Q11', island:'island5', stage:2, level:'medium', n:11, type:'match', status:'draft',
   text:'اربط كل نوع من البرمجيات الضارة بوصفه المناسب:',
   pairs:[
     { l:'حصان طروادة (Cheval de Troie)',     r:'يتخفى في شكل برنامج يبدو سليمًا أو مفيدًا.' },
     { l:'الديدان البرمجية (Vers informatiques)', r:'ينسخ نفسه وينتشر بشكل مستقل، خاصة عبر الشبكات.' },
     { l:'فيروس الفدية (Ransomware)',         r:'يشفر الملفات أو يمنع الوصول إليها ويطالب بفدية.' },
     { l:'الفيروس المعلوماتي (Virus)',        r:'يصيب الملفات أو البرامج ويمكنه التكاثر والانتشار.' } ],
   explanation:'تختلف البرمجيات الضارة في طريقة عملها وانتشارها والأضرار التي تسببها.' },

 { id:'I05-Q12', island:'island5', stage:2, level:'medium', n:12, type:'mcq', status:'draft',
   text:'ما الدور الأساسي للجدار الناري (Firewall / Pare-feu)؟',
   options:['مراقبة حركة البيانات الواردة والصادرة والتحكم في الاتصالات.','تنظيف الحاسوب من الغبار.','إصلاح الملفات التالفة.'], answer:0,
   explanation:'يراقب الجدار الناري حركة الاتصالات ويسمح بالاتصالات المسموح بها ويحظر الاتصالات غير المصرح بها وفق قواعد محددة.' },

 { id:'I05-Q13', island:'island5', stage:2, level:'medium', n:13, type:'truefalse', status:'draft',
   text:'الجدار الناري ومضاد الفيروسات يؤديان الوظيفة نفسها.', answer:false,
   explanation:'الجدار الناري يراقب حركة الاتصالات، أما مضاد الفيروسات فيركز على اكتشاف البرمجيات الضارة والتعامل معها.' },

 { id:'I05-Q14', island:'island5', stage:2, level:'medium', n:14, type:'classify', status:'draft',
   text:'صنّف الأضرار التالية حسب طبيعتها:',
   cats:['أضرار تمس البيانات','أضرار تمس النظام'],
   items:[ { t:'حذف الملفات.', c:0 }, { t:'سرقة المعلومات الشخصية.', c:0 }, { t:'تعطيل عمل نظام التشغيل.', c:1 }, { t:'تشفير الملفات ومنع الوصول إليها.', c:0 } ],
   answerText:'أضرار تمس البيانات: حذف الملفات، سرقة المعلومات الشخصية، تشفير الملفات ومنع الوصول إليها.\nأضرار تمس النظام: تعطيل عمل نظام التشغيل.',
   explanation:'يمكن للبرمجيات الضارة أن تؤثر على البيانات والخصوصية وسلامة النظام.' },

 { id:'I05-Q15', island:'island5', stage:2, level:'medium', n:15, type:'mcq', status:'draft',
   scenario:'حمّل مستخدم برنامجًا من موقع غير موثوق، وكان البرنامج يبدو عاديًا، لكنه بدأ بعد تشغيله بتنفيذ أنشطة غير مرغوبة.',
   text:'ما نوع البرمجية الضارة التي يمكن أن يكون هذا البرنامج مثالًا عليها؟',
   options:['حصان طروادة (Cheval de Troie).','برنامج مضاد الفيروسات.','برنامج ضغط الملفات.'], answer:0,
   explanation:'حصان طروادة يتخفى في شكل برنامج يبدو سليمًا، لكنه يخفي وظيفة ضارة.' },

 { id:'I05-Q16', island:'island5', stage:2, level:'medium', n:16, type:'mcq', status:'draft',
   text:'ما الذي يميز فيروس الفدية (Ransomware) عن أنواع أخرى من البرمجيات الضارة؟',
   options:['يساعد على تنظيم الملفات.','يشفر الملفات أو يمنع الوصول إليها ويطالب بفدية.','يحسن أداء الحاسوب.'], answer:1,
   explanation:'تهدف برمجيات الفدية إلى منع المستخدم من الوصول إلى بياناته، غالبًا عن طريق تشفيرها، ثم المطالبة بمبلغ مالي.' },

 { id:'I05-Q17', island:'island5', stage:2, level:'medium', n:17, type:'truefalse', status:'draft',
   text:'يمكن أن تنتشر الديدان البرمجية عبر الشبكات وتصل إلى حواسيب أخرى دون الحاجة إلى أن يفتح المستخدم ملفًا مصابًا بالطريقة المعتادة لانتقال بعض الفيروسات.', answer:true,
   explanation:'تتميز الديدان البرمجية بقدرتها على التكاثر والانتشار بشكل مستقل، ويمكنها استغلال الشبكات للانتقال.' },

 { id:'I05-Q18', island:'island5', stage:2, level:'medium', n:18, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'من وسائل الوقاية من البرمجيات الضارة: تحديث نظام التشغيل، وتحديث برنامج {0}، وتجنب فتح الملفات والمرفقات مجهولة المصدر.',
   blanks:[{ accept:['مضاد الفيروسات','مضاد فيروسات','برنامج مضاد الفيروسات','Antivirus','الأنتيفيروس','انتي فيروس'] }],
   answerText:'مضاد الفيروسات (Antivirus).',
   explanation:'تحديث برنامج الحماية والحذر من الملفات والمرفقات المشبوهة يساعدان على تقليل خطر الإصابة.' },

 { id:'I05-Q19', island:'island5', stage:2, level:'medium', n:19, type:'mcq', status:'draft',
   text:'أي من التصرفات التالية يعتبر أكثر أمانًا عند استلام مرفق من مصدر مجهول؟',
   options:['فتحه مباشرة.','إعادة إرساله إلى جميع الأصدقاء.','تجنب فتحه والتحقق من مصدره.'], answer:2,
   explanation:'قد تحتوي المرفقات مجهولة المصدر على برمجيات ضارة، لذلك يجب التحقق من مصدرها قبل فتحها.' },

 { id:'I05-Q20', island:'island5', stage:2, level:'medium', n:20, type:'mcq', status:'draft',
   scenario:'لاحظ تلميذ أن ملفات حاسوبه أصبحت غير قابلة للفتح، وظهرت رسالة تطلب دفع مبلغ مالي مقابل استرجاعها.',
   text:'ما نوع البرمجية الضارة المحتمل؟',
   options:['حصان طروادة.','فيروس الفدية (Ransomware).','الديدان البرمجية.'], answer:1,
   explanation:'من أبرز خصائص فيروس الفدية تشفير الملفات أو منع الوصول إليها مع المطالبة بفدية.' }
]},

/* ============================ المرحلة الثالثة: صعب ============================ */
{ id:'I05-S3', level:'hard', title:'المرحلة الثالثة: صعب', questions:[
 { id:'I05-Q21', island:'island5', stage:3, level:'hard', n:21, type:'mcq', status:'draft',
   text:'ما الفرق الأساسي بين الفيروس المعلوماتي والديدان البرمجية؟',
   options:['الفيروس لا يسبب أضرارًا، بينما الديدان تسببها دائمًا.','الفيروس يرتبط عادة بملف أو برنامج مضيف، بينما تستطيع الديدان نسخ نفسها والانتشار بشكل مستقل.','كلاهما برنامجان مخصصان لحماية الحاسوب.'], answer:1,
   explanation:'الفيروس التقليدي يحتاج عادة إلى ملف أو برنامج مضيف للانتشار، بينما تستطيع الديدان البرمجية الانتشار بشكل مستقل، خاصة عبر الشبكات.' },

 { id:'I05-Q22', island:'island5', stage:3, level:'hard', n:22, type:'mcq', status:'draft',
   scenario:'لاحظ مستخدم مجموعة من العلامات على حاسوبه:',
   scenarioList:['بطء غير معتاد في الأداء.','ظهور نوافذ ورسائل مجهولة.','اختفاء بعض الملفات.','توقف بعض البرامج عن العمل.'],
   text:'ما الاستنتاج الأنسب؟',
   options:['الحاسوب يعمل بصورة طبيعية ولا توجد مشكلة.','قد يكون الحاسوب مصابًا ببرمجية ضارة ويحتاج إلى الفحص.','يجب تغيير الشاشة مباشرة.'], answer:1,
   explanation:'هذه العلامات قد تدل على وجود برمجية ضارة، لكنها ليست دليلًا قاطعًا، لذلك يجب فحص الحاسوب باستعمال برنامج حماية موثوق.' },

 { id:'I05-Q23', island:'island5', stage:3, level:'hard', n:23, type:'truefalse', status:'draft',
   text:'من خصائص حصان طروادة أنه يستطيع نسخ نفسه والانتشار تلقائيًا مثل الديدان البرمجية.', answer:false,
   explanation:'حصان طروادة يتخفى في شكل برنامج سليم، لكنه لا يتميز عادة بآلية التكاثر الذاتي والانتشار المستقل التي تتميز بها الديدان.' },

 { id:'I05-Q24', island:'island5', stage:3, level:'hard', n:24, type:'finderror', status:'draft',
   scenario:'قال تلميذ:',
   parts:[
     { t:'«فيروس الفدية هو برنامج يحسن حماية الملفات', wrong:true },
     { t:'ويمنع الآخرين من الوصول إليها دون إلحاق الضرر بها».', wrong:true } ],
   text:'صحح الخطأ.',
   fixes:[
     'فيروس الفدية برمجية ضارة تشفر الملفات أو تمنع الوصول إليها، ثم تطالب المستخدم بدفع فدية مقابل استعادة الوصول إليها.',
     'فيروس الفدية برنامج يراقب حركة الاتصالات ويحظر الاتصالات غير المصرح بها.',
     'فيروس الفدية برنامج يتخفى في شكل برنامج مفيد دون أي ضرر.' ], fixAnswer:0,
   answerText:'فيروس الفدية برمجية ضارة تشفر الملفات أو تمنع الوصول إليها، ثم تطالب المستخدم بدفع فدية مقابل استعادة الوصول إليها.',
   explanation:'فيروس الفدية يهدد سلامة المعلومات وإمكانية الوصول إليها، ولا يعتبر وسيلة حماية.',
   reviewNote:'الإجابة والتفسير من البنك. أضفتُ: تقسيم العبارة إلى جزأين قابلين للمس (كلاهما خاطئ)، وخيارين مشتتين للتصحيح (وصف الجدار الناري ووصف حصان طروادة).' },

 { id:'I05-Q25', island:'island5', stage:3, level:'hard', n:25, type:'mcq', status:'draft',
   scenario:'استقبلت تلميذة رسالة إلكترونية من عنوان مجهول تحتوي على ملف مرفق، وتطلب منها الرسالة فتحه بسرعة. لم تكن تعرف المرسل.',
   text:'ما التصرف الصحيح؟',
   options:['فتح الملف فورًا.','تجاهل مصدر الرسالة وفتح المرفق.','عدم فتح المرفق والتحقق من مصدر الرسالة، وحذفها أو الإبلاغ عنها وفق قواعد الأمان.'], answer:2,
   explanation:'قد تستعمل البرمجيات الضارة المرفقات والرسائل المشبوهة للوصول إلى الحاسوب، لذلك يجب الحذر والتحقق من المصدر.' },

 { id:'I05-Q26', island:'island5', stage:3, level:'hard', n:26, type:'classify', status:'draft',
   text:'صنّف وسائل الحماية التالية حسب نوعها:',
   cats:['الصيانة الوقائية للمكونات المادية','أمن المعلومات والبرمجيات'],
   items:[
     { t:'تثبيت برنامج مضاد للفيروسات.', c:1 }, { t:'تنظيف الحاسوب من الغبار.', c:0 }, { t:'تحديث نظام التشغيل.', c:1 },
     { t:'إبعاد الحاسوب عن مصادر الحرارة.', c:0 }, { t:'تفعيل الجدار الناري.', c:1 },
     { t:'تجنب فتح المرفقات مجهولة المصدر.', c:1 }, { t:'توفير تهوية مناسبة للحاسوب.', c:0 } ],
   answerText:'الصيانة الوقائية للمكونات المادية: تنظيف الحاسوب من الغبار، إبعاد الحاسوب عن مصادر الحرارة، توفير تهوية مناسبة للحاسوب.\nأمن المعلومات والبرمجيات: تثبيت برنامج مضاد للفيروسات، تحديث نظام التشغيل، تفعيل الجدار الناري، تجنب فتح المرفقات مجهولة المصدر.',
   explanation:'تنقسم حماية الحاسوب إلى حماية مادية للمكونات، وحماية معلوماتية وبرمجية للبيانات والنظام.' },

 { id:'I05-Q27', island:'island5', stage:3, level:'hard', n:27, type:'order', status:'draft',
   text:'رتّب الإجراءات التالية للحصول على حماية أفضل للحاسوب:',
   items:['تحديث نظام التشغيل وبرنامج مضاد الفيروسات.','تفعيل الجدار الناري.','تجنب فتح الملفات المشبوهة.','إجراء فحص للحاسوب باستعمال برنامج الحماية.','الاحتفاظ بنسخ احتياطية من الملفات المهمة.'],
   explanation:'تعتمد الحماية الجيدة على التحديث والحذر والفحص وتفعيل وسائل الحماية والاحتفاظ بنسخ احتياطية.',
   reviewNote:'الترتيب من البنك كما هو؛ بعض هذه الإجراءات متوازية عملياً ويمكن تبديل ترتيبها، فراجعي إن كان الدرس يفرض هذا الترتيب بالذات.' },

 { id:'I05-Q28', island:'island5', stage:3, level:'hard', n:28, type:'match', status:'draft',
   scenario:'أصيب حاسوبان ببرمجيتين ضارتين مختلفتين.',
   scenarioList:['الحاسوب الأول: انتقلت منه البرمجية إلى حواسيب أخرى عبر الشبكة بعد أن نسخت نفسها.','الحاسوب الثاني: حمّل مستخدمه برنامجًا بدا مفيدًا، لكنه أخفى وظيفة ضارة.'],
   text:'حدد نوع البرمجية في كل حالة.',
   pairs:[
     { l:'الحاسوب الأول',  r:'الديدان البرمجية (Vers informatiques).' },
     { l:'الحاسوب الثاني', r:'حصان طروادة (Cheval de Troie).' } ],
   extra:['فيروس الفدية (Ransomware).','الجدار الناري (Pare-feu).'],
   explanation:'الديدان تتميز بالتكاثر والانتشار المستقل، أما حصان طروادة فيعتمد على التخفي داخل برنامج يبدو سليمًا.',
   reviewNote:'الإجابتان من البنك. أضفتُ خيارين زائدين (فيروس الفدية، الجدار الناري) كي لا يكون الربط تخميناً من خيارين فقط.' },

 { id:'I05-Q29', island:'island5', stage:3, level:'hard', n:29, type:'match', status:'draft',
   scenario:'في مخبر الإعلام الآلي، لاحظ الأستاذ المشاكل التالية على الحواسيب.',
   text:'حدد إجراء الحماية المناسب لكل مشكلة.',
   pairs:[
     { l:'تراكم الغبار على الحواسيب.',          r:'تنظيف الحواسيب بانتظام.' },
     { l:'عدم تحديث برامج الحماية.',            r:'تحديث برنامج مضاد الفيروسات ونظام التشغيل.' },
     { l:'وجود ملفات مجهولة المصدر على بعض الأجهزة.', r:'عدم فتحها قبل التحقق من مصدرها وفحصها.' },
     { l:'عدم تفعيل الجدار الناري.',            r:'تفعيله وضبطه لحماية الاتصالات.' },
     { l:'وضع المشروبات بالقرب من الحواسيب.',  r:'إبعاد السوائل عن الأجهزة.' } ],
   explanation:'تتطلب حماية المخبر الجمع بين الصيانة الوقائية والحماية من البرمجيات الضارة وتأمين الاتصالات والالتزام بقواعد الاستخدام الآمن.' },

 { id:'I05-Q30', island:'island5', stage:3, level:'hard', n:30, type:'match', status:'draft',
   text:'التحدي النهائي — اقرأ الحالات التالية ثم حدد اسم كل نوع أو أداة.',
   pairs:[
     { l:'الحالة الأولى: برنامج يبدو عاديًا ومفيدًا، لكنه يخفي وظيفة ضارة.', r:'حصان طروادة (Cheval de Troie).' },
     { l:'الحالة الثانية: برنامج ضار يستطيع نسخ نفسه والانتشار عبر الشبكات بصورة مستقلة.', r:'الديدان البرمجية (Vers informatiques).' },
     { l:'الحالة الثالثة: برنامج ضار يشفر ملفات المستخدم ويطالبه بدفع مبلغ مالي لاستعادة الوصول إليها.', r:'فيروس الفدية (Ransomware).' },
     { l:'الحالة الرابعة: برنامج ضار يرتبط بملف أو برنامج مضيف، ويستطيع التكاثر والانتشار عند تشغيل الملف المصاب.', r:'الفيروس المعلوماتي (Virus informatique).' },
     { l:'الحالة الخامسة: أداة أمنية تراقب حركة البيانات الواردة والصادرة وتتحكم في الاتصالات.', r:'الجدار الناري (Firewall / Pare-feu).' } ],
   explanation:'حصان طروادة يتخفى في شكل برنامج سليم. الديدان تتكاثر وتنتشر بشكل مستقل. فيروس الفدية يشفر الملفات ويطالب بفدية. الفيروس المعلوماتي يرتبط عادة بملف مضيف. الجدار الناري يراقب حركة الاتصالات ويحظر غير المصرح بها.' }
]}

  ]
};


/* =====================================================================
   الجزيرة 06: الشبكة المحلية (Réseau local – LAN) — رسومات SVG مولَّدة
   ===================================================================== */
(function(){
  const pc=(x,y,s)=>{s=s||1;return `<g transform="translate(${x},${y}) scale(${s})"><rect x="-22" y="-16" width="44" height="30" rx="3" fill="#274b7a"/><rect x="-18" y="-12" width="36" height="22" rx="2" fill="#7fd0ff"/><rect x="-4" y="14" width="8" height="6" fill="#6f87a6"/><rect x="-14" y="20" width="28" height="4" rx="2" fill="#6f87a6"/></g>`};
  const sw=(x,y,w)=>{w=w||120;const n=8,gap=(w-16)/n;return `<g transform="translate(${x-w/2},${y-17})"><rect width="${w}" height="34" rx="6" fill="#1a73c9" stroke="#0e4a8a" stroke-width="3"/>${Array.from({length:n},(_,i)=>`<rect x="${10+i*gap}" y="18" width="${gap-4}" height="10" rx="1.5" fill="#dff1ff"/><circle cx="${10+i*gap+(gap-4)/2}" cy="10" r="2" fill="#7dffae"/>`).join('')}</g>`};
  const printer=(x,y)=>`<g transform="translate(${x},${y})"><rect x="-24" y="-22" width="48" height="12" rx="2" fill="#fff" stroke="#6f87a6" stroke-width="2"/><rect x="-30" y="-12" width="60" height="26" rx="5" fill="#9db4cf" stroke="#4a5a73" stroke-width="3"/><rect x="-20" y="6" width="40" height="14" rx="2" fill="#fff" stroke="#6f87a6" stroke-width="2"/><circle cx="20" cy="-3" r="3" fill="#2fbf71"/></g>`;
  const router=(x,y)=>`<g transform="translate(${x},${y})"><path d="M-30 -14 L-38 -50 M30 -14 L38 -50" stroke="#274b7a" stroke-width="5" stroke-linecap="round"/><rect x="-46" y="-16" width="92" height="30" rx="6" fill="#2f9e6b" stroke="#1d6b46" stroke-width="3"/><g fill="#eafff3"><rect x="-34" y="2" width="10" height="8"/><rect x="-18" y="2" width="10" height="8"/><rect x="-2" y="2" width="10" height="8"/><rect x="14" y="2" width="10" height="8"/></g><circle cx="34" cy="-4" r="3" fill="#ffd53a"/></g>`;
  const nic=(x,y)=>`<g transform="translate(${x},${y})"><rect x="-50" y="-30" width="100" height="56" rx="4" fill="#2f9e6b" stroke="#1d6b46" stroke-width="3"/><rect x="-42" y="-24" width="30" height="24" rx="2" fill="#cfd8e3" stroke="#6f87a6" stroke-width="2"/><rect x="-6" y="-20" width="14" height="14" fill="#222"/><rect x="14" y="-20" width="14" height="14" fill="#222"/><rect x="-44" y="26" width="88" height="10" fill="#e3b43a" stroke="#9a7515"/><g fill="#9a7515">${Array.from({length:11},(_,i)=>`<rect x="${-40+i*8}" y="28" width="3" height="8"/>`).join('')}</g><rect x="-52" y="-34" width="8" height="64" fill="#cfd8e3" stroke="#6f87a6" stroke-width="2"/></g>`;
  const line=(x1,y1,x2,y2)=>`<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#274b7a" stroke-width="3.5"/>`;
  const svg=(w,h,body)=>`<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" font-family="Tahoma,Arial,sans-serif"><rect width="${w}" height="${h}" rx="16" fill="#eaf6ff"/>${body}</svg>`;

  /* Q02: مخبر: حواسيب متصلة بجهاز مركزي بكابلات (بلا أسماء) */
  const q02=(()=>{const pcs=[[90,70],[250,70],[390,70],[550,70],[90,250],[250,250],[390,250],[550,250]];let s='';pcs.forEach(([x,y])=>s+=line(x,y,320,160));s+=sw(320,160,140);pcs.forEach(([x,y])=>s+=pc(x,y,1.2));return svg(640,320,s)})();
  /* Q06: نجمة بأربعة حواسيب وجهاز مركزي مكتوب عليه Switch */
  const q06=(()=>{const pcs=[[100,70],[540,70],[100,250],[540,250]];let s='';pcs.forEach(([x,y])=>s+=line(x,y,320,160));s+=sw(320,160,150);s+=`<text x="320" y="214" font-size="22" font-weight="bold" fill="#274b7a" text-anchor="middle">Switch</text>`;pcs.forEach(([x,y])=>s+=pc(x,y,1.3));return svg(640,320,s)})();
  /* Q09: موصل RJ45 مع كابل Ethernet (مقرّب) */
  const q09=svg(640,300,`<path d="M0 150 H190" stroke="#1a73c9" stroke-width="46" stroke-linecap="butt"/><path d="M0 138 H190 M0 162 H190" stroke="#0e4a8a" stroke-width="3"/>
<path d="M170 108 H200 V192 H170 Z" fill="#cfd8e3" stroke="#6f87a6" stroke-width="3"/>
<path d="M200 96 H430 V204 H200 Z" fill="#e8eef5" stroke="#6f87a6" stroke-width="4" stroke-linejoin="round" opacity=".95"/>
<path d="M250 96 V70 H340 V96" fill="#e8eef5" stroke="#6f87a6" stroke-width="4"/>
<rect x="430" y="108" width="40" height="84" rx="3" fill="#dfe7f1" stroke="#6f87a6" stroke-width="3"/>
<g fill="#e3b43a" stroke="#9a7515" stroke-width="1.5">${Array.from({length:8},(_,i)=>`<rect x="${436+(i%2)*0}" y="${114+i*9.4}" width="30" height="5" rx="1.5"/>`).join('')}</g>
<g stroke="#9db4cf" stroke-width="2.5"><path d="M215 110 V190 M232 110 V190"/></g>`);
  /* Q12: A = ناقل (Bus)، B = حلقة (Ring) */
  const q12=(()=>{let s=`<rect x="12" y="12" width="300" height="276" rx="12" fill="#fff" stroke="#9cc7ee" stroke-width="2"/><rect x="328" y="12" width="300" height="276" rx="12" fill="#fff" stroke="#9cc7ee" stroke-width="2"/>
<text x="36" y="44" font-size="30" font-weight="bold" fill="#1a73c9">A</text><text x="352" y="44" font-size="30" font-weight="bold" fill="#1a73c9">B</text>`;
    s+=`<path d="M40 150 H284" stroke="#274b7a" stroke-width="7"/><rect x="34" y="138" width="8" height="24" fill="#c0392b"/><rect x="282" y="138" width="8" height="24" fill="#c0392b"/>`;
    [[80,80],[160,80],[240,80],[120,220],[200,220]].forEach(([x,y])=>{s+=line(x,y>150?150:150,x,y)+pc(x,y,1)});
    const cx=478,cy=160,r=84,pts=[];for(let i=0;i<5;i++){const a=-Math.PI/2+i*2*Math.PI/5;pts.push([cx+r*Math.cos(a),cy+r*Math.sin(a)])}
    s+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#274b7a" stroke-width="5"/>`;pts.forEach(([x,y])=>s+=pc(x,y,.95));
    return svg(640,300,s)})();
  /* Q16: ثلاث صور مرقمة: Switch، Routeur، بطاقة شبكة */
  const q16=(()=>{const box=(i,x)=>`<rect x="${x}" y="14" width="196" height="232" rx="12" fill="#fff" stroke="#9cc7ee" stroke-width="2"/><circle cx="${x+26}" cy="42" r="16" fill="#ffd53a" stroke="#274b7a" stroke-width="3"/><text x="${x+26}" y="49" font-size="20" font-weight="bold" fill="#274b7a" text-anchor="middle">${i}</text>`;
    return svg(640,260,box(1,10)+box(2,222)+box(3,434)+sw(108,140,150)+router(320,160)+nic(532,150))})();
  /* Q22: مخطط: 4 حواسيب + Switch في الوسط + طابعة */
  const q22=(()=>{const pcs=[[100,70],[100,250],[330,70],[330,250]];let s='';pcs.forEach(([x,y])=>s+=line(x,y,220,160));s+=line(500,160,220,160);s+=sw(220,160,130);pcs.forEach(([x,y])=>s+=pc(x,y,1.2));s+=printer(520,160);return svg(640,320,s)})();
  /* Q30: مخبر فارغ: 20 حاسوباً وطابعة ومساحة فارغة لجهاز مركزي */
  const q30=(()=>{let s=`<rect x="10" y="10" width="620" height="300" rx="14" fill="#f4f8ff" stroke="#9cc7ee" stroke-width="3"/>`;
    [0,1,2,3].forEach(r=>[0,1,2,3,4].forEach(c=>{const x=c<3?60+c*90:420+(c-3)*80,y=40+r*68;s+=pc(x,y,.8)}));
    s+=`<rect x="282" y="110" width="100" height="48" rx="10" fill="none" stroke="#e09a00" stroke-width="3" stroke-dasharray="9 6"/><text x="332" y="142" font-size="26" font-weight="bold" fill="#e09a00" text-anchor="middle">?</text>`;
    s+=printer(580,150);
    return svg(640,320,s)})();
  Object.assign(window.INFO_EASY_IMAGES,{i6q02:q02,i6q06:q06,i6q09:q09,i6q12:q12,i6q16:q16,i6q22:q22,i6q30:q30});
})();

/* =====================================================================
   الجزيرة 06: الشبكة المحلية — الأسئلة (30 سؤالاً، كلها draft)
   ===================================================================== */
window.INFO_EASY_BANK.islands.island6 = {
  title:'الشبكة المحلية',
  stages:[

/* ============================ المرحلة الأولى: سهل ============================ */
{ id:'I06-S1', level:'easy', title:'المرحلة الأولى: سهل', questions:[
 { id:'I06-Q01', island:'island6', stage:1, level:'easy', n:1, type:'mcq', status:'draft',
   text:'ما المقصود بالشبكة المحلية (Réseau local – LAN)؟',
   options:['مجموعة حواسيب وأجهزة مترابطة داخل نطاق جغرافي محدود لتبادل المعلومات والموارد.','حاسوب واحد يعمل دون اتصال.','مجموعة برامج مثبتة على حاسوب واحد.'], answer:0,
   explanation:'الشبكة المحلية تربط جهازين أو أكثر داخل مكان محدود مثل المنزل أو المؤسسة أو مخبر الإعلام الآلي.' },

 { id:'I06-Q02', island:'island6', stage:1, level:'easy', n:2, type:'image', status:'draft',
   text:'ما نوع الشبكة التي يمثلها هذا المخبر؟',
   image:'i6q02', imageAlt:'مخبر إعلام آلي يحتوي على عدة حواسيب متصلة بجهاز مركزي باستعمال كابلات',
   options:['PAN.','LAN.','WAN.'], answer:1,
   explanation:'ربط الحواسيب داخل مخبر واحد يمثل شبكة محلية LAN.' },

 { id:'I06-Q03', island:'island6', stage:1, level:'easy', n:3, type:'truefalse', status:'draft',
   text:'تسمح الشبكة المحلية بتبادل الملفات ومشاركة الموارد مثل الطابعات بين الأجهزة المتصلة بها.', answer:true,
   explanation:'من فوائد الشبكة المحلية تسهيل تبادل المعلومات ومشاركة الموارد والأجهزة.' },

 { id:'I06-Q04', island:'island6', stage:1, level:'easy', n:4, type:'fill', status:'draft',
   text:'أكمل الفراغين:',
   template:'تصنف الشبكات حسب وسط النقل إلى شبكات {0} وشبكات {1}',
   blanks:[ { accept:['سلكية','السلكية','سلكي'] }, { accept:['لاسلكية','اللاسلكية','لاسلكي'] } ],
   answerText:'سلكية ولاسلكية.',
   explanation:'تعتمد الشبكات السلكية على الكابلات، بينما تعتمد الشبكات اللاسلكية على تقنيات مثل Wi-Fi.' },

 { id:'I06-Q05', island:'island6', stage:1, level:'easy', n:5, type:'mcq', status:'draft',
   text:'أي من التقنيات التالية تسمح بالاتصال اللاسلكي داخل الشبكة؟',
   options:['Wi-Fi.','RJ45.','كابل Ethernet.'], answer:0,
   explanation:'تسمح تقنية Wi-Fi للأجهزة بالاتصال بالشبكة دون الحاجة إلى كابل اتصال مباشر.' },

 { id:'I06-Q06', island:'island6', stage:1, level:'easy', n:6, type:'image', status:'draft',
   text:'ما اسم شكل الربط الذي يظهر في الصورة؟',
   image:'i6q06', imageAlt:'مخطط يحتوي على أربعة حواسيب متصلة جميعها بجهاز مركزي واحد مكتوب عليه Switch',
   options:['Bus.','Ring.','Star.'], answer:2,
   explanation:'في طوبولوجيا النجمة Star تتصل جميع الأجهزة بجهاز مركزي.' },

 { id:'I06-Q07', island:'island6', stage:1, level:'easy', n:7, type:'mcq', status:'draft',
   text:'أي جهاز يسمح بربط عدة حواسيب داخل شبكة محلية سلكية؟',
   options:['Switch.','Scanner.','Projecteur.'], answer:0,
   explanation:'يستعمل Switch لربط عدة أجهزة داخل الشبكة المحلية وتمرير البيانات نحو الجهاز المستهدف.' },

 { id:'I06-Q08', island:'island6', stage:1, level:'easy', n:8, type:'truefalse', status:'draft',
   text:'بطاقة الشبكة (Carte réseau) تسمح للحاسوب بالاتصال بالشبكة.', answer:true,
   explanation:'بطاقة الشبكة هي أحد المكونات الأساسية التي تمكّن الحاسوب من الاتصال بالشبكة.' },

 { id:'I06-Q09', island:'island6', stage:1, level:'easy', n:9, type:'image', status:'draft',
   text:'ما اسم الموصل الظاهر في الصورة؟',
   image:'i6q09', imageAlt:'صورة مقربة لموصل RJ45 مع كابل Ethernet',
   options:['HDMI.','RJ45.','USB.'], answer:1,
   explanation:'يستعمل موصل RJ45 لربط كابل Ethernet بمنفذ الشبكة في الحاسوب أو أجهزة الشبكة.' },

 { id:'I06-Q10', island:'island6', stage:1, level:'easy', n:10, type:'truefalse', status:'draft',
   text:'تعتبر شبكة PAN شبكة شخصية ذات نطاق جغرافي صغير جدًا.', answer:true,
   explanation:'PAN تعني Personal Area Network، وهي شبكة تربط أجهزة قريبة من المستخدم.' }
]},

/* ============================ المرحلة الثانية: متوسط ============================ */
{ id:'I06-S2', level:'medium', title:'المرحلة الثانية: متوسط', questions:[
 { id:'I06-Q11', island:'island6', stage:2, level:'medium', n:11, type:'match', status:'draft',
   text:'اربط كل نوع من الشبكات حسب النطاق الجغرافي بالتسمية المناسبة:',
   pairs:[
     { l:'PAN', r:'شبكة تغطي نطاقًا شخصيًا صغيرًا.' },
     { l:'LAN', r:'شبكة تغطي مكانًا محدودًا مثل مؤسسة أو مخبر.' },
     { l:'MAN', r:'شبكة تغطي نطاقًا حضريًا أو مدينة.' },
     { l:'WAN', r:'شبكة تغطي مساحة جغرافية واسعة وقد تربط دولًا وقارات.' } ],
   explanation:'تصنف الشبكات حسب المساحة الجغرافية التي تغطيها.' },

 { id:'I06-Q12', island:'island6', stage:2, level:'medium', n:12, type:'image', status:'draft',
   text:'حدد الطوبولوجيا المناسبة لكل صورة.',
   image:'i6q12', imageAlt:'الصورة A: عدة حواسيب متصلة بكابل رئيسي واحد. الصورة B: عدة حواسيب متصلة على شكل حلقة مغلقة',
   options:['A = Bus ، B = Ring.','A = Star ، B = Bus.','A = Ring ، B = Star.'], answer:0, shuffle:false,
   explanation:'Bus هي طوبولوجيا الناقل حيث تتصل الأجهزة بكابل رئيسي واحد. Ring هي طوبولوجيا الحلقة حيث ترتبط الأجهزة لتشكيل مسار دائري مغلق.' },

 { id:'I06-Q13', island:'island6', stage:2, level:'medium', n:13, type:'mcq', status:'draft',
   text:'ما الفرق الأساسي بين Switch وHub؟',
   options:['Switch يمرر البيانات نحو منفذ الجهاز المستهدف، بينما Hub يرسل البيانات إلى جميع منافذه.','Hub جهاز تخزين، وSwitch جهاز طباعة.','لا يوجد أي اختلاف بينهما.'], answer:0,
   explanation:'يوجه Switch البيانات إلى المنفذ المرتبط بالجهاز المقصود، بينما يكرر Hub البيانات إلى جميع المنافذ المتصلة به.' },

 { id:'I06-Q14', island:'island6', stage:2, level:'medium', n:14, type:'classify', status:'draft',
   text:'صنّف الشبكات التالية حسب وسط النقل:',
   cats:['الشبكات السلكية','الشبكات اللاسلكية'],
   items:[ { t:'شبكة تعتمد على كابلات Ethernet.', c:0 }, { t:'شبكة تعتمد على Wi-Fi.', c:1 }, { t:'شبكة تستعمل الألياف البصرية (Fibre optique).', c:0 }, { t:'شبكة تعتمد على الاتصال اللاسلكي.', c:1 } ],
   answerText:'الشبكات السلكية: كابلات Ethernet، الألياف البصرية.\nالشبكات اللاسلكية: Wi-Fi، الاتصال اللاسلكي.',
   explanation:'الشبكة السلكية تعتمد على وسيط مادي لنقل البيانات، أما اللاسلكية فتعتمد على تقنيات الاتصال دون كابلات.' },

 { id:'I06-Q15', island:'island6', stage:2, level:'medium', n:15, type:'mcq', status:'draft',
   text:'ما وظيفة الموجّه (Routeur)؟',
   options:['ربط شبكات مختلفة وتوجيه البيانات بينها.','طباعة الوثائق.','تخزين الملفات.'], answer:0,
   explanation:'يسمح الموجّه بربط شبكات مختلفة وتوجيه حزم البيانات بينها.' },

 { id:'I06-Q16', island:'island6', stage:2, level:'medium', n:16, type:'image', status:'draft',
   text:'أي صورة تمثل الموجّه Routeur؟',
   image:'i6q16', imageAlt:'ثلاث صور مرقمة: 1 جهاز Switch، 2 جهاز Routeur بهوائيات Wi-Fi، 3 بطاقة شبكة Ethernet',
   options:['الصورة 1.','الصورة 2.','الصورة 3.'], answer:1, shuffle:false,
   explanation:'الموجّه Routeur جهاز يربط الشبكات المختلفة ويوجه البيانات بينها، وقد يوفر الاتصال اللاسلكي أيضًا.' },

 { id:'I06-Q17', island:'island6', stage:2, level:'medium', n:17, type:'truefalse', status:'draft',
   text:'في شبكة Client-Serveur، يقدم الخادم (Serveur) خدمات أو موارد للحواسيب العميلة (Clients).', answer:true,
   explanation:'تعتمد هذه البنية على خادم يقدم خدمات وموارد تستفيد منها الأجهزة العميلة.' },

 { id:'I06-Q18', island:'island6', stage:2, level:'medium', n:18, type:'fill', status:'draft',
   text:'أكمل الفراغ:',
   template:'في طوبولوجيا النجمة (Topologie en étoile)، تتصل جميع الأجهزة بجهاز {0}',
   blanks:[{ accept:['مركزي','المركزي','central','Centrale'] }],
   answerText:'مركزي.',
   explanation:'تعتمد طوبولوجيا النجمة على جهاز مركزي مثل Switch أو Hub تتصل به بقية الأجهزة.' },

 { id:'I06-Q19', island:'island6', stage:2, level:'medium', n:19, type:'mcq', status:'draft',
   text:'أي من العبارات التالية تصف شبكة Peer to Peer؟',
   options:['يوجد خادم مركزي مخصص يقدم جميع الخدمات.','تتبادل الأجهزة الموارد مباشرة ويمكن لكل جهاز تقديم موارد والاستفادة منها.','لا تسمح بتبادل الملفات.'], answer:1,
   explanation:'في شبكة Peer to Peer يمكن للأجهزة تبادل الموارد مباشرة دون الاعتماد على خادم مركزي مخصص.' },

 { id:'I06-Q20', island:'island6', stage:2, level:'medium', n:20, type:'mcq', status:'draft',
   scenario:'تريد مؤسسة ربط 15 حاسوبًا داخل مخبر واحد، حتى يتمكن المستخدمون من تبادل المعلومات ومشاركة الطابعة.',
   text:'أي نوع من الشبكات يناسب هذه الحالة؟',
   options:['PAN.','LAN.','WAN.'], answer:1,
   explanation:'الشبكة المحلية LAN مناسبة لربط الحواسيب والأجهزة داخل مساحة محدودة مثل مخبر المؤسسة.' }
]},

/* ============================ المرحلة الثالثة: صعب ============================ */
{ id:'I06-S3', level:'hard', title:'المرحلة الثالثة: صعب', questions:[
 { id:'I06-Q21', island:'island6', stage:3, level:'hard', n:21, type:'mcq', status:'draft',
   text:'ما الفرق الأساسي بين Client-Serveur وPeer to Peer؟',
   options:['في Client-Serveur يوجد خادم يقدم الخدمات للعملاء، أما Peer to Peer فتتبادل الأجهزة الموارد مباشرة دون الاعتماد على خادم مركزي مخصص.','في Peer to Peer لا يمكن تبادل الملفات.','كلاهما يعني الاتصال اللاسلكي فقط.'], answer:0,
   explanation:'تختلف البنيتان في طريقة تنظيم العلاقة بين الأجهزة وتقديم الخدمات والموارد.' },

 { id:'I06-Q22', island:'island6', stage:3, level:'hard', n:22, type:'image', status:'draft',
   text:'حدد العناصر الصحيحة التي تصف المخطط.',
   image:'i6q22', imageAlt:'مخطط شبكة: أربعة حواسيب، جهاز Switch في الوسط، كابلات Ethernet تربط كل حاسوب بالجهاز المركزي، وطابعة متصلة به أيضًا',
   options:['شبكة LAN سلكية بطوبولوجيا Star.','شبكة WAN لاسلكية بطوبولوجيا Ring.','شبكة PAN سلكية بطوبولوجيا Bus.'], answer:0,
   explanation:'المخطط يمثل شبكة محلية LAN تعتمد على الكابلات، وتتبع طوبولوجيا النجمة Star لأن الأجهزة متصلة بجهاز مركزي.' },

 { id:'I06-Q23', island:'island6', stage:3, level:'hard', n:23, type:'truefalse', status:'draft',
   text:'في شبكة Peer to Peer، يمكن لكل حاسوب أن يقدم موارد ويستفيد من موارد الحواسيب الأخرى.', answer:true,
   explanation:'في هذا النوع من الشبكات يمكن للأجهزة تبادل الموارد مباشرة دون وجود خادم مركزي مخصص.' },

 { id:'I06-Q24', island:'island6', stage:3, level:'hard', n:24, type:'finderror', status:'draft',
   scenario:'قال تلميذ:',
   parts:[
     { t:'«الشبكة MAN تغطي مساحة شخصية صغيرة جدًا،', wrong:true },
     { t:'أما PAN فتغطي مدينة كاملة».', wrong:true } ],
   text:'صحح الخطأ.',
   fixes:[
     'PAN شبكة شخصية ذات نطاق صغير جدًا، أما MAN فهي شبكة حضرية تغطي مدينة أو نطاقًا حضريًا.',
     'LAN شبكة شخصية صغيرة جدًا، أما WAN فهي شبكة تغطي مدينة فقط.',
     'PAN شبكة تغطي عدة دول، أما MAN فتغطي جهازًا واحدًا.' ], fixAnswer:0,
   answerText:'PAN شبكة شخصية ذات نطاق صغير جدًا، أما MAN فهي شبكة حضرية تغطي مدينة أو نطاقًا حضريًا.',
   explanation:'يختلف تصنيف PAN وMAN حسب المساحة الجغرافية التي تغطيها كل شبكة.',
   reviewNote:'الإجابة والتفسير من البنك. أضفتُ: تقسيم العبارة إلى جزأين قابلين للمس (كلاهما خاطئ)، وخيارين مشتتين للتصحيح.' },

 { id:'I06-Q25', island:'island6', stage:3, level:'hard', n:25, type:'match', status:'draft',
   scenario:'في مخبر الإعلام الآلي، يريد الأستاذ ربط جميع الحواسيب بجهاز مركزي، بحيث تتصل كل محطة بهذا الجهاز بصورة مستقلة.',
   text:'ما الطوبولوجيا المناسبة؟ وما الجهاز الذي يمكن استعماله في المركز؟',
   pairs:[
     { l:'الطوبولوجيا المناسبة', r:'Star (النجمة).' },
     { l:'الجهاز في المركز',     r:'Switch أو Hub.' } ],
   extra:['Bus (الناقل).','Ring (الحلقة).','Routeur.'],
   explanation:'في طوبولوجيا النجمة تتصل جميع الأجهزة بجهاز مركزي، ويمكن استعمال Switch أو Hub لتحقيق هذا الربط.',
   reviewNote:'الإجابتان من البنك (سؤال مفتوح بجزأين). أضفتُ ثلاثة خيارات زائدة (Bus، Ring، Routeur) ليصبح الربط تفاعلياً.' },

 { id:'I06-Q26', island:'island6', stage:3, level:'hard', n:26, type:'classify', status:'draft',
   text:'صنّف التجهيزات التالية حسب وظيفتها:',
   cats:['أجهزة ومكونات الاتصال','وسائط وموصلات الربط'],
   items:[ { t:'Carte réseau.', c:0 }, { t:'Switch.', c:0 }, { t:'Routeur.', c:0 }, { t:'RJ45.', c:1 }, { t:'كابل Ethernet.', c:1 } ],
   answerText:'أجهزة ومكونات الاتصال: Carte réseau، Switch، Routeur.\nوسائط وموصلات الربط: كابل Ethernet، RJ45.',
   explanation:'بطاقة الشبكة تتيح اتصال الحاسوب، وSwitch يربط الأجهزة داخل الشبكة، وRouteur يربط الشبكات، أما الكابل وRJ45 فيستعملان في الربط السلكي.' },

 { id:'I06-Q27', island:'island6', stage:3, level:'hard', n:27, type:'order', status:'draft',
   text:'رتّب العناصر التالية لإنشاء اتصال سلكي بين حاسوب وجهاز Switch:',
   items:['بطاقة الشبكة في الحاسوب.','كابل Ethernet المزود بموصل RJ45.','منفذ الشبكة في جهاز Switch.'],
   explanation:'يربط كابل Ethernet بين منفذ بطاقة الشبكة في الحاسوب وأحد منافذ جهاز Switch.' },

 { id:'I06-Q28', island:'island6', stage:3, level:'hard', n:28, type:'mcq', status:'draft',
   scenario:'توجد مؤسسة بها عدة مخابر، وكل مخبر يحتوي على شبكة محلية خاصة به، كما توجد شبكة تربط هذه المخابر ببعضها على مستوى المدينة.',
   text:'ما نوع الشبكة التي تربط المخابر حسب النطاق الجغرافي؟',
   options:['PAN.','MAN.','LAN.'], answer:1,
   explanation:'عندما تمتد الشبكة لتغطي نطاقًا حضريًا أو مدينة، تصنف ضمن MAN.' },

 { id:'I06-Q29', island:'island6', stage:3, level:'hard', n:29, type:'finderror', status:'draft',
   scenario:'كتب تلميذ المعلومات التالية:',
   parts:[
     { t:'PAN: شبكة شخصية.', wrong:false, br:true },
     { t:'LAN: شبكة محلية.', wrong:false, br:true },
     { t:'MAN: شبكة حضرية.', wrong:false, br:true },
     { t:'WAN: شبكة واسعة جغرافيًا.', wrong:false, br:true },
     { t:'Star: جميع الأجهزة تتصل بجهاز مركزي.', wrong:false, br:true },
     { t:'Ring: الأجهزة تتصل على شكل خط مستقيم.', wrong:true, br:true },
     { t:'Bus: الأجهزة تتصل بكابل رئيسي واحد.', wrong:false, br:true } ],
   text:'حدد العبارة الخاطئة وصححها.',
   fixes:[
     'Ring: الأجهزة تتصل على شكل حلقة مغلقة.',
     'Ring: جميع الأجهزة تتصل بجهاز مركزي.',
     'Ring: الأجهزة تتصل بكابل رئيسي واحد.' ], fixAnswer:0,
   answerText:'العبارة الخاطئة: Ring: الأجهزة تتصل على شكل خط مستقيم.',
   correction:'التصحيح: Ring: الأجهزة تتصل على شكل حلقة مغلقة.',
   explanation:'في طوبولوجيا Ring تشكل الأجهزة مسارًا دائريًا، بينما في Bus تتصل الأجهزة بكابل رئيسي واحد.',
   reviewNote:'الإجابة والتصحيح والتفسير من البنك. أضفتُ خيارين مشتتين للتصحيح (بصياغة من تعريفي Star وBus).' },

 { id:'I06-Q30', island:'island6', stage:3, level:'hard', n:30, type:'image', status:'draft',
   scenario:'تريد المؤسسة تجهيز هذا المخبر بشبكة تحقق الشروط التالية: ربط جميع الحواسيب والطابعة، استعمال الاتصال السلكي، ربط الأجهزة بجهاز مركزي، والسماح بتبادل المعلومات ومشاركة الطابعة.',
   text:'التحدي النهائي — اختر التجهيز والتصميم المناسبين:',
   image:'i6q30', imageAlt:'مخبر إعلام آلي فارغ يحتوي على 20 حاسوبًا وطابعة، مع مساحة فارغة مخصصة لإظهار جهاز مركزي',
   options:['شبكة PAN لاسلكية بطوبولوجيا Ring.','شبكة LAN سلكية بطوبولوجيا Star باستعمال Switch وكابلات Ethernet.','شبكة WAN لاسلكية دون أجهزة ربط.'], answer:1,
   answerText:'شبكة LAN سلكية بطوبولوجيا Star باستعمال Switch وكابلات Ethernet.',
   explanation:'نوع الشبكة: LAN لأنها تغطي مخبرًا واحدًا. وسط النقل: سلكي. الطوبولوجيا: Star. الجهاز المركزي: Switch. التجهيزات: بطاقات الشبكة، كابلات Ethernet وموصلات RJ45. تسمح هذه البنية بربط الحواسيب والطابعة وتبادل الموارد داخل المخبر.' }
]}

  ]
};

/* فحص ذاتي خفيف عند التحميل: يطبع تحذيراً في وحدة التحكم إن اختل شيء (معرّفات مكررة، عدد الأسئلة...) */
(function(){
  try{
    const ids=new Set(),warn=m=>console.warn('[questions-bank] '+m);
    Object.entries(window.INFO_EASY_BANK.islands).forEach(([k,isl])=>{
      isl.stages.forEach(s=>{
        if(!s.questions.length)warn(k+' / '+s.id+': المرحلة بلا أسئلة');
        s.questions.forEach(q=>{
          if(ids.has(q.id))warn('معرّف مكرر: '+q.id);ids.add(q.id);
          if(q.image&&!window.INFO_EASY_IMAGES[q.image])warn(q.id+': الصورة '+q.image+' غير موجودة');
        });
      });
    });
  }catch(e){console.warn('[questions-bank] '+e.message)}
})();
