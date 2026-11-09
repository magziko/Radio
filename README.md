<div align="center">

# 📻 إذاعة القرآن الكريم — Quran Radio

**تلاوات القرآن الكريم والأذكار والأدعية والحديث الشريف — على مدار الساعة**
**Quran recitations, adhkar, supplications & Hadith — 24/7**

[🌐 افتح الموقع · Open the site](https://magziko.github.io/Radio/) &nbsp;|&nbsp; [🤖 تطبيق الأندرويد · Android app](https://median.co/share/bnakxxn#androidphone)

</div>

<!--
لقطات الشاشة: ضع الصور داخل مجلد docs/ ثم أزل علامات التعليق حوالين السطر التالى.
Screenshots: put the images in a docs/ folder, then remove the comment markers around the next line.
<p align="center"><img src="docs/screenshot-1.png" width="260"> <img src="docs/screenshot-2.png" width="260"></p>
-->

---

<div dir="rtl" align="right">

## ✨ المميزات

- **مكتبة صوتية كبيرة:** أكثر من ١٦٠٠ محطة وملف صوتى، منها أكثر من ١١٠٠ تلاوة لقرّاء مختلفين، و١١٤ سورة مرتّلة، بالإضافة إلى الروايات والتفسير والسيرة والتلاوات المترجمة والأذكار.
- **شاشة ترحيب بآيات قرآنية** مع ترجمات بعدة لغات، وخط يتكيّف تلقائيًا مع طول الآية.
- **تتبّع الآيات مع التلاوة (تقريبى):** عند تشغيل سورة تظهر الآية الحالية والآيتان التاليتان، مع ضبط سرعة التنقل لكل قارئ من الإعدادات.
- **المسبحة والأذكار:** عدّاد تسبيح، انتقال تلقائى بين الأذكار، وشرح الذكر مع النسخ والمشاركة والاستماع.
- **تطبيق ويب تقدّمى (PWA):** يمكن تثبيته على الشاشة الرئيسية للهاتف أو الكمبيوتر ويعمل بملء الشاشة.
- **تطبيق أندرويد:** رابط التحميل موجود أعلاه وفى إعدادات الموقع.
- **واجهة عربية وإنجليزية** مع عدة ثيمات وإمكانية ترجمة الصفحة.

## 📲 التثبيت كتطبيق

- **أندرويد:** من الرابط أعلاه، أو من قائمة المتصفح اختر «إضافة إلى الشاشة الرئيسية».
- **آيفون:** من Safari اضغط زر المشاركة ثم «إضافة إلى الشاشة الرئيسية».
- **الكمبيوتر:** من شريط العنوان فى كروم أو إيدج اضغط أيقونة التثبيت.

## 🗂️ هيكل المشروع

| الملف | الوظيفة |
|---|---|
| `index.html` | التطبيق الرئيسى (الواجهة والمنطق) |
| `style.css` | التنسيقات |
| `stations.js` | بيانات المحطات والتلاوات |
| `verses.js` | آيات شاشة الترحيب وترجماتها |
| `hls-support.js` | دعم البث بصيغة HLS |
| `equran-embed.js` | تضمين مشروع eQuran |
| `service-worker.js` | التخزين المؤقت وعمل الموقع بدون اتصال جزئيًا |
| `manifest.json` | إعدادات تثبيت التطبيق (PWA) |
| `ma.html` | صفحة إضافية |
| `icon-192.png` · `icon-512.png` · `favicon.png` · `og-image.jpg` | الأيقونات وصورة المشاركة |

## 🛠️ التشغيل محليًا

المشروع ملفات ثابتة (HTML / CSS / JavaScript) ولا يحتاج خطوات بناء:

```bash
git clone https://github.com/magziko/Radio.git
cd Radio
python -m http.server 8000
# ثم افتح http://localhost:8000
```

> ملاحظة: الموقع مضبوط على المسار `/Radio/` (انظر `manifest.json` و`service-worker.js`)، لذلك قد لا تعمل ميزات التثبيت والعمل بدون اتصال محليًا كما تعمل على الموقع المنشور.

## ⚠️ ملاحظة

الملفات الصوتية والبث تعود لأصحابها وتُعرض من مصادرها الأصلية، والموقع لا يستضيفها.

</div>

---

## English

**Quran Radio** is a free, installable web app (PWA) for listening to Quran recitations, adhkar, supplications and Hadith around the clock.

**Live site:** <https://magziko.github.io/Radio/> · **Android app:** <https://median.co/share/bnakxxn#androidphone>

### Features

- **Large audio library:** 1,600+ stations and audio files, including 1,100+ recitations by many reciters, all 114 surahs, narrations (riwayat), tafsir, seerah, translated recitations and adhkar.
- **Welcome screen verses** with translations in several languages and auto-fitting text.
- **Recitation follow-along (approximate):** the current ayah plus the next two are shown while a surah plays, with a per-reciter speed setting in Settings.
- **Tasbih & adhkar:** counter, automatic advance between adhkar, and an explanation card with copy, share and listen.
- **Installable PWA** for phone and desktop.
- **Arabic and English UI**, multiple themes, and page translation.

### Run locally

```bash
git clone https://github.com/magziko/Radio.git
cd Radio
python -m http.server 8000
# open http://localhost:8000
```

The app is configured for the `/Radio/` path, so install and offline features may behave differently locally than on the published site.

### Note

Audio streams and files belong to their respective owners and are served from their original sources; this project does not host them.
