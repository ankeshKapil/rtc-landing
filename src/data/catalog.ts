export type Counter = "karyana" | "construction" | "feed" | "dham";

export interface Unit {
  id: string;
  labelEn: string;
  labelHi: string;
}

export interface CatalogItem {
  id: string;
  counter: Counter;
  nameEn: string;
  nameHi: string;
  defaultUnit: string;
  units: string[];
  step: number;
}

export const COUNTERS: { id: Counter; nameEn: string; nameHi: string; tagEn: string; tagHi: string }[] = [
  { id: "karyana", nameEn: "Karyana", nameHi: "किराना", tagEn: "Counter 01", tagHi: "काउंटर 01" },
  { id: "construction", nameEn: "Construction", nameHi: "निर्माण", tagEn: "Counter 02", tagHi: "काउंटर 02" },
  { id: "feed", nameEn: "Cattle Feed", nameHi: "पशु आहार", tagEn: "Counter 03", tagHi: "काउंटर 03" },
  { id: "dham", nameEn: "Dham Catering", nameHi: "धाम कैटरिंग", tagEn: "Counter 04", tagHi: "काउंटर 04" },
];

export const UNITS: Record<string, Unit> = {
  kg: { id: "kg", labelEn: "kg", labelHi: "कि.ग्रा." },
  g: { id: "g", labelEn: "g", labelHi: "ग्रा." },
  ltr: { id: "ltr", labelEn: "litre", labelHi: "लीटर" },
  pkt: { id: "pkt", labelEn: "packet", labelHi: "पैकेट" },
  bag: { id: "bag", labelEn: "bag", labelHi: "बोरी" },
  pc: { id: "pc", labelEn: "piece", labelHi: "नग" },
  bundle: { id: "bundle", labelEn: "bundle", labelHi: "बंडल" },
  qtl: { id: "qtl", labelEn: "quintal", labelHi: "क्विंटल" },
};

export const CATALOG: CatalogItem[] = [
  // ===== Karyana — Grains, pulses & rice =====
  { id: "karyana-rice-basmati", counter: "karyana", nameEn: "Basmati rice", nameHi: "बासमती चावल", defaultUnit: "kg", units: ["kg", "bag"], step: 1 },
  { id: "karyana-rice-regular", counter: "karyana", nameEn: "Regular rice", nameHi: "साधारण चावल", defaultUnit: "kg", units: ["kg", "bag"], step: 1 },
  { id: "karyana-toor-dal", counter: "karyana", nameEn: "Toor (arhar) dal", nameHi: "तूर (अरहर) दाल", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "karyana-moong-dal", counter: "karyana", nameEn: "Moong dal", nameHi: "मूंग दाल", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "karyana-urad-dal", counter: "karyana", nameEn: "Urad dal", nameHi: "उड़द दाल", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "karyana-chana-dal", counter: "karyana", nameEn: "Chana dal", nameHi: "चना दाल", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "karyana-masoor-dal", counter: "karyana", nameEn: "Masoor dal", nameHi: "मसूर दाल", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "karyana-rajma", counter: "karyana", nameEn: "Rajma (kidney beans)", nameHi: "राजमा", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "karyana-kabuli-chana", counter: "karyana", nameEn: "Kabuli chana (chickpeas)", nameHi: "काबुली चना", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "karyana-mah-dal", counter: "karyana", nameEn: "Mah (whole urad) dal", nameHi: "माह दाल (साबुत उड़द)", defaultUnit: "kg", units: ["kg"], step: 1 },

  // Karyana — Flours
  { id: "karyana-atta", counter: "karyana", nameEn: "Wheat flour (atta)", nameHi: "गेहूँ का आटा", defaultUnit: "kg", units: ["kg", "bag"], step: 5 },
  { id: "karyana-maida", counter: "karyana", nameEn: "Maida (refined flour)", nameHi: "मैदा", defaultUnit: "kg", units: ["kg", "bag"], step: 1 },
  { id: "karyana-besan", counter: "karyana", nameEn: "Besan (gram flour)", nameHi: "बेसन", defaultUnit: "kg", units: ["kg", "pkt"], step: 1 },
  { id: "karyana-suji", counter: "karyana", nameEn: "Suji (semolina)", nameHi: "सूजी", defaultUnit: "kg", units: ["kg", "pkt"], step: 1 },
  { id: "karyana-cornflour", counter: "karyana", nameEn: "Corn flour / arrowroot", nameHi: "कॉर्नफ़्लोर / अरारोट", defaultUnit: "pkt", units: ["pkt", "kg"], step: 1 },

  // Karyana — Oils, ghee
  { id: "karyana-pmark-oil", counter: "karyana", nameEn: "P-Mark mustard oil", nameHi: "P-Mark सरसों तेल", defaultUnit: "ltr", units: ["ltr", "pkt"], step: 1 },
  { id: "karyana-rajdhani-oil", counter: "karyana", nameEn: "Rajdhani mustard oil", nameHi: "राजधानी सरसों तेल", defaultUnit: "ltr", units: ["ltr", "pkt"], step: 1 },
  { id: "karyana-refined-oil", counter: "karyana", nameEn: "Refined oil", nameHi: "रिफ़ाइंड तेल", defaultUnit: "ltr", units: ["ltr", "pkt"], step: 1 },
  { id: "karyana-vanaspati", counter: "karyana", nameEn: "Vanaspati", nameHi: "वनस्पति घी", defaultUnit: "kg", units: ["kg", "pkt"], step: 1 },
  { id: "karyana-desi-ghee", counter: "karyana", nameEn: "Desi ghee", nameHi: "देसी घी", defaultUnit: "kg", units: ["kg", "ltr"], step: 1 },

  // Karyana — Spices (Elephant + others)
  { id: "karyana-haldi", counter: "karyana", nameEn: "Turmeric (haldi) powder", nameHi: "हल्दी पाउडर", defaultUnit: "pkt", units: ["pkt", "g", "kg"], step: 1 },
  { id: "karyana-mirch", counter: "karyana", nameEn: "Red chilli powder", nameHi: "मिर्च पाउडर", defaultUnit: "pkt", units: ["pkt", "g", "kg"], step: 1 },
  { id: "karyana-dhaniya", counter: "karyana", nameEn: "Coriander (dhaniya) powder", nameHi: "धनिया पाउडर", defaultUnit: "pkt", units: ["pkt", "g", "kg"], step: 1 },
  { id: "karyana-jeera", counter: "karyana", nameEn: "Cumin (jeera)", nameHi: "जीरा", defaultUnit: "pkt", units: ["pkt", "g"], step: 1 },
  { id: "karyana-garam-masala", counter: "karyana", nameEn: "Garam masala (Elephant)", nameHi: "गरम मसाला (एलिफेंट)", defaultUnit: "pkt", units: ["pkt", "g"], step: 1 },
  { id: "karyana-chana-masala", counter: "karyana", nameEn: "Chana masala (Elephant)", nameHi: "चना मसाला (एलिफेंट)", defaultUnit: "pkt", units: ["pkt"], step: 1 },
  { id: "karyana-meat-masala", counter: "karyana", nameEn: "Meat masala (Elephant)", nameHi: "मीट मसाला (एलिफेंट)", defaultUnit: "pkt", units: ["pkt"], step: 1 },
  { id: "karyana-elaichi", counter: "karyana", nameEn: "Cardamom (elaichi)", nameHi: "इलायची", defaultUnit: "g", units: ["g", "pkt"], step: 50 },
  { id: "karyana-laung", counter: "karyana", nameEn: "Cloves (laung)", nameHi: "लौंग", defaultUnit: "g", units: ["g", "pkt"], step: 50 },
  { id: "karyana-tej-patta", counter: "karyana", nameEn: "Bay leaves (tej patta)", nameHi: "तेज पत्ता", defaultUnit: "pkt", units: ["pkt", "g"], step: 1 },

  // Karyana — Sweeteners, dairy, beverages
  { id: "karyana-sugar", counter: "karyana", nameEn: "Sugar", nameHi: "चीनी", defaultUnit: "kg", units: ["kg", "bag"], step: 1 },
  { id: "karyana-jaggery", counter: "karyana", nameEn: "Jaggery (gur)", nameHi: "गुड़", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "karyana-salt", counter: "karyana", nameEn: "Salt", nameHi: "नमक", defaultUnit: "pkt", units: ["pkt", "kg"], step: 1 },
  { id: "karyana-tea", counter: "karyana", nameEn: "Tea", nameHi: "चाय", defaultUnit: "pkt", units: ["pkt", "g", "kg"], step: 1 },
  { id: "karyana-milk-powder", counter: "karyana", nameEn: "Milk powder", nameHi: "दूध पाउडर", defaultUnit: "pkt", units: ["pkt", "kg"], step: 1 },

  // Karyana — Dry fruits
  { id: "karyana-kishmish", counter: "karyana", nameEn: "Raisins (kishmish)", nameHi: "किशमिश", defaultUnit: "g", units: ["g", "kg"], step: 100 },
  { id: "karyana-kaju", counter: "karyana", nameEn: "Cashews (kaju)", nameHi: "काजू", defaultUnit: "g", units: ["g", "kg"], step: 100 },
  { id: "karyana-badam", counter: "karyana", nameEn: "Almonds (badam)", nameHi: "बादाम", defaultUnit: "g", units: ["g", "kg"], step: 100 },

  // Karyana — Cleaning & household
  { id: "karyana-detergent", counter: "karyana", nameEn: "Detergent / washing powder", nameHi: "डिटर्जेंट / सर्फ़", defaultUnit: "pkt", units: ["pkt", "kg"], step: 1 },
  { id: "karyana-bath-soap", counter: "karyana", nameEn: "Bathing soap", nameHi: "नहाने का साबुन", defaultUnit: "pc", units: ["pc", "pkt"], step: 1 },
  { id: "karyana-dish-soap", counter: "karyana", nameEn: "Dishwash bar / liquid", nameHi: "बर्तन साबुन / लिक्विड", defaultUnit: "pc", units: ["pc"], step: 1 },
  { id: "karyana-broom", counter: "karyana", nameEn: "Broom (jhaadu)", nameHi: "झाड़ू", defaultUnit: "pc", units: ["pc"], step: 1 },
  { id: "karyana-incense", counter: "karyana", nameEn: "Agarbatti / dhoop", nameHi: "अगरबत्ती / धूप", defaultUnit: "pkt", units: ["pkt"], step: 1 },

  // ===== Construction =====
  { id: "construction-acc", counter: "construction", nameEn: "ACC cement", nameHi: "ACC सीमेंट", defaultUnit: "bag", units: ["bag"], step: 1 },
  { id: "construction-bangur", counter: "construction", nameEn: "Bangur cement", nameHi: "बांगुर सीमेंट", defaultUnit: "bag", units: ["bag"], step: 1 },
  { id: "construction-ppc-cement", counter: "construction", nameEn: "PPC cement (any brand)", nameHi: "PPC सीमेंट (कोई भी ब्रांड)", defaultUnit: "bag", units: ["bag"], step: 1 },
  { id: "construction-tmt-8mm", counter: "construction", nameEn: "Kamdhenu TMT — 8 mm", nameHi: "कामधेनु टीएमटी — 8 मि.मी.", defaultUnit: "qtl", units: ["qtl", "kg"], step: 1 },
  { id: "construction-tmt-10mm", counter: "construction", nameEn: "Kamdhenu TMT — 10 mm", nameHi: "कामधेनु टीएमटी — 10 मि.मी.", defaultUnit: "qtl", units: ["qtl", "kg"], step: 1 },
  { id: "construction-tmt-12mm", counter: "construction", nameEn: "Kamdhenu TMT — 12 mm", nameHi: "कामधेनु टीएमटी — 12 मि.मी.", defaultUnit: "qtl", units: ["qtl", "kg"], step: 1 },
  { id: "construction-tmt-16mm", counter: "construction", nameEn: "Kamdhenu TMT — 16 mm", nameHi: "कामधेनु टीएमटी — 16 मि.मी.", defaultUnit: "qtl", units: ["qtl", "kg"], step: 1 },
  { id: "construction-angle", counter: "construction", nameEn: "M.S. angles", nameHi: "एम.एस. एंगल", defaultUnit: "qtl", units: ["qtl", "kg", "pc"], step: 1 },
  { id: "construction-channel", counter: "construction", nameEn: "M.S. channels", nameHi: "एम.एस. चैनल", defaultUnit: "qtl", units: ["qtl", "kg", "pc"], step: 1 },
  { id: "construction-ms-pipe", counter: "construction", nameEn: "M.S. pipe", nameHi: "एम.एस. पाइप", defaultUnit: "pc", units: ["pc", "bundle"], step: 1 },
  { id: "construction-gi-pipe", counter: "construction", nameEn: "G.I. pipe", nameHi: "जी.आई. पाइप", defaultUnit: "pc", units: ["pc", "bundle"], step: 1 },
  { id: "construction-pvc-pipe", counter: "construction", nameEn: "PVC pipe", nameHi: "पीवीसी पाइप", defaultUnit: "pc", units: ["pc", "bundle"], step: 1 },
  { id: "construction-binding-wire", counter: "construction", nameEn: "Binding wire", nameHi: "बाँधने का तार", defaultUnit: "kg", units: ["kg", "bundle"], step: 1 },
  { id: "construction-nails", counter: "construction", nameEn: "Nails (kil)", nameHi: "कील", defaultUnit: "kg", units: ["kg", "pkt"], step: 1 },

  // ===== Cattle Feed =====
  { id: "feed-compounded", counter: "feed", nameEn: "Compounded cattle feed", nameHi: "कम्पाउंडेड पशु आहार", defaultUnit: "bag", units: ["bag", "kg"], step: 1 },
  { id: "feed-khal", counter: "feed", nameEn: "Khal (oil cake)", nameHi: "खल (तेल खली)", defaultUnit: "bag", units: ["bag", "kg"], step: 1 },
  { id: "feed-binola", counter: "feed", nameEn: "Binola (cottonseed)", nameHi: "बिनौला", defaultUnit: "bag", units: ["bag", "kg"], step: 1 },
  { id: "feed-khal-binola", counter: "feed", nameEn: "Khal-Binola mix (premium)", nameHi: "खल-बिनौला मिक्स (प्रीमियम)", defaultUnit: "bag", units: ["bag", "kg"], step: 1 },
  { id: "feed-chokher", counter: "feed", nameEn: "Chokher / wheat bran", nameHi: "चोकर / गेहूँ चोकर", defaultUnit: "bag", units: ["bag", "kg"], step: 1 },
  { id: "feed-makka-churi", counter: "feed", nameEn: "Maize churi", nameHi: "मक्का चूरी", defaultUnit: "bag", units: ["bag", "kg"], step: 1 },
  { id: "feed-mineral-mix", counter: "feed", nameEn: "Mineral mixture", nameHi: "मिनरल मिक्सचर", defaultUnit: "pkt", units: ["pkt", "kg"], step: 1 },
  { id: "feed-calcium", counter: "feed", nameEn: "Calcium supplement", nameHi: "कैल्शियम सप्लीमेंट", defaultUnit: "pkt", units: ["pkt"], step: 1 },
  { id: "feed-buffalo-tonic", counter: "feed", nameEn: "Milk-yield tonic", nameHi: "दूध बढ़ाने की दवा", defaultUnit: "pc", units: ["pc", "ltr"], step: 1 },
  { id: "feed-salt-lick", counter: "feed", nameEn: "Salt lick brick", nameHi: "सॉल्ट लिक", defaultUnit: "pc", units: ["pc"], step: 1 },
  { id: "feed-poultry", counter: "feed", nameEn: "Poultry feed", nameHi: "पोल्ट्री फ़ीड", defaultUnit: "bag", units: ["bag", "kg"], step: 1 },
  { id: "feed-goat", counter: "feed", nameEn: "Goat feed", nameHi: "बकरी का चारा", defaultUnit: "bag", units: ["bag", "kg"], step: 1 },

  // ===== Dham =====
  { id: "dham-rajma", counter: "dham", nameEn: "Rajma (for madra)", nameHi: "राजमा (मद्रा के लिए)", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "dham-urad-badi", counter: "dham", nameEn: "Urad badi (sepu)", nameHi: "उड़द बड़ी (सेपू)", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "dham-channa-madra", counter: "dham", nameEn: "Channa (for madra)", nameHi: "चना (मद्रा के लिए)", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "dham-rice-thali", counter: "dham", nameEn: "Rice (thali quantity)", nameHi: "चावल (थाली मात्रा)", defaultUnit: "kg", units: ["kg", "bag"], step: 1 },
  { id: "dham-curd", counter: "dham", nameEn: "Curd (dahi)", nameHi: "दही", defaultUnit: "kg", units: ["kg", "ltr"], step: 1 },
  { id: "dham-ghee", counter: "dham", nameEn: "Desi ghee (for tadka)", nameHi: "देसी घी (तड़के के लिए)", defaultUnit: "kg", units: ["kg", "ltr"], step: 1 },
  { id: "dham-mustard-oil", counter: "dham", nameEn: "Mustard oil (cooking)", nameHi: "सरसों का तेल (पकाने के लिए)", defaultUnit: "ltr", units: ["ltr"], step: 1 },
  { id: "dham-sugar-mittha", counter: "dham", nameEn: "Sugar (for mittha)", nameHi: "चीनी (मीठा के लिए)", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "dham-kishmish", counter: "dham", nameEn: "Kishmish (for mittha)", nameHi: "किशमिश (मीठा के लिए)", defaultUnit: "g", units: ["g", "kg"], step: 100 },
  { id: "dham-besan-boondi", counter: "dham", nameEn: "Besan (for boondi)", nameHi: "बेसन (बूँदी के लिए)", defaultUnit: "kg", units: ["kg"], step: 1 },
  { id: "dham-spice-pack", counter: "dham", nameEn: "Dham spice pack (Elephant)", nameHi: "धाम मसाला सेट (एलिफेंट)", defaultUnit: "pkt", units: ["pkt"], step: 1 },
  { id: "dham-disposable", counter: "dham", nameEn: "Disposable plates / glasses", nameHi: "डिस्पोज़ेबल थाली / गिलास", defaultUnit: "pkt", units: ["pkt", "pc"], step: 1 },
];
