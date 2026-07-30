// بيانات الخريجين — دفعة 2026
// عايز تضيف خريج جديد؟ زوّد عنصر جديد في المصفوفة دي بنفس الشكل.
// عايز تضيف صورة لخريج؟ حط الصورة في فولدر photos/ بنفس اسم "photo" اللي تحت (مثلا photos/hedra-atif.jpg)
const GRADUATES = [
  {
    name: "Mira Adel",
    college: "تربية نوعية",
    link: "https://miraadel2026.daftarna.net/",
    photo: "photos/01.jpeg"
  },
  {
    name: "Pora Samir",
    college: "علوم",
    link: "https://porasamir2026.daftarna.net/",
    photo: "photos/02.jpeg"
  },
  {
    name: "Engy Barakat",
    college: "نظم معلومات الأعمال",
    link: "https://engybarakat2026.daftarna.net/",
    photo: "photos/03.jpeg"
  },
  {
    name: "Rogina Rafat",
    college: "تربية (لغة إنجليزية)",
    link: "https://roginarafat2026.daftarna.net/",
    photo: "photos/04.jpeg"
  },
  {
    name: "Vero Romany",
    college: "تربية أساسي (علوم)",
    link: "https://veroromany2026.daftarna.net/",
    photo: "photos/05.jpeg"
  },
  {
    name: "Krkr Romany",
    college: "معهد فني صحي",
    link: "https://krkrromany2026.daftarna.net/",
    photo: "photos/06.jpeg"
  },
  {
    name: "Mariam Hany",
    college: "تربية (لغة إنجليزية)",
    link: "https://mariamhany2026.daftarna.net/",
    photo: "photos/07.jpeg"
  },
  {
    name: "Karo Halem",
    college: "علوم إدارية",
    link: "https://karohalem2026.daftarna.net/",
    photo: "photos/08.jpeg"
  },
  {
    name: "Youstina Megahed",
    college: "زراعة",
    link: "https://youstinamegahed2026.daftarna.net/",
    photo: "photos/09.jpeg"
  },
  {
    name: "Mariam Nasser",
    college: "علوم زراعية",
    link: "https://mariamnasser2026.daftarna.net/",
    photo: "photos/010.jpeg"
  },
  {
    name: "Mariam Nabil",
    college: "تربية (لغة فرنسية)",
    link: "https://mariamnabil2026.daftarna.net/",
    photo: "photos/011.jpeg"
  },
  {
    name: "Marvel Esmat",
    college: "تربية نوعية (إعلام)",
    link: "https://marvelesmat2026.daftarna.net/",
    photo: "photos/012.jpeg"
  },
  {
    name: "Mariam Abdelnaser",
    college: "نظم ومعلومات",
    link: "https://mariamabdelnaser2026.daftarna.net/",
    photo: "photos/013.jpeg"
  },
  {
    name: "Mohraeel Melad",
    college: "تربية",
    link: "https://mohraeelmelad2026.daftarna.net/",
    photo: "photos/014.jpeg"
  },
  {
    name: "Rena Romany",
    college: "ألسن (لغة فرنسية)",
    link: "https://renaromany2026.daftarna.net/",
    photo: "photos/015.jpeg"
  },
  {
    name: "Merit Barakat",
    college: "خدمة إجتماعية",
    link: "https://meritbarakat2026.daftarna.net/",
    photo: "photos/016.jpeg"
  },
  {
    name: "Semo Ayman",
    college: "نظم ومعلومات",
    link: "https://semoayman2026.daftarna.net/",
    photo: "photos/017.jpeg"
  },
  {
    name: "Jumana Nabil",
    college: "تربية أساسي (علوم)",
    link: "https://jumananabil2026.daftarna.net/",
    photo: "photos/018.jpeg"
  },
  {
    name: "Marian Noh",
    college: "تربية طفولة",
    link: "https://mariannoh2026.daftarna.net/",
    photo: "photos/019.jpeg"
  },
  {
    name: "Martina Mansour",
    college: "طب بيطري",
    link: "https://martinamansour2026.daftarna.net/",
    photo: "photos/020.jpeg"
  },
  {
    name: "Mariam Younan",
    college: "علوم (كيمياء)",
    link: "https://mariamyounan2026.daftarna.net/",
    photo: "photos/021.jpeg"
  },
  {
    name: "Mohraeel Hany",
    college: "تربية (علوم)",
    link: "https://mohraeelhany2026.daftarna.net/",
    photo: "photos/022.jpeg"
  },
  {
    name: "Mervat Gamel",
    college: "تربية",
    link: "https://mervatgamel2026.daftarna.net/",
    photo: "photos/023.jpeg"
  },
  {
    name: "Jessica Emad",
    college: "إدارة ومحاسبة",
    link: "https://jessicaemad2026.daftarna.net/",
    photo: "photos/024.jpeg"
  },
  {
    name: "Sandra George",
    college: "فنون جميلة (عمارة)",
    link: "https://sandrageorge2026.daftarna.net/",
    photo: "photos/025.jpg"
  },
  {
    name: "Hedra Atif",
    college: "هندسة",
    link: "https://hedraatif.daftarna.net/",
    photo: "photos/1.jpeg"
  },
  {
    name: "Shenouda Akram",
    college: "طب بشري",
    link: "https://shenoudaakram2026.daftarna.net/",
    photo: "photos/2.jpeg"
  },
  {
    name: "Micheal Akram",
    college: "هندسة",
    link: "https://michealakram2026.daftarna.net/",
    photo: "photos/3.jpeg"
  },
  {
    name: "Yassa Melad",
    college: "علاج طبيعي",
    link: "https://yassamelad2026.daftarna.net/",
    photo: "photos/4.jpeg"
  },
  {
    name: "Fady Mansour",
    college: "طب أسنان",
    link: "https://fadymansour2026.daftarna.net/",
    photo: "photos/5.jpeg"
  },
  {
    name: "Maro Jacob",
    college: "إدارة أعمال",
    link: "https://marojacob2026.daftarna.net/",
    photo: "photos/6.jpeg"
  },
  {
    name: "Fady Mamdouh",
    college: "هندسة",
    link: "https://fadymamdouh2026.daftarna.net/",
    photo: "photos/7.jpeg"
  },
  {
    name: "Romany Mansour",
    college: "سياحة وفنادق",
    link: "https://romanymansour2026.daftarna.net/",
    photo: "photos/8.jpeg"
  },
  {
    name: "Kero Safwat",
    college: "صيدلة",
    link: "https://kerosafwat2026.daftarna.net/",
    photo: "photos/9.jpeg"
  },
  {
    name: "Kero Shawkat",
    college: "طب أسنان",
    link: "https://keroshawkat2026.daftarna.net/",
    photo: "photos/10.jpeg"
  },
  {
    name: "Beshoy Emad",
    college: "طب أسنان",
    link: "https://beshoyemad2026.daftarna.net/",
    photo: "photos/11.jpeg"
  },
  {
    name: "Mina Morkos",
    college: "محاسبة",
    link: "https://minamorkos2026.daftarna.net/",
    photo: "photos/12.jpeg"
  },
  {
    name: "Kero Adwar",
    college: "علاج طبيعي",
    link: "https://keroadwar2026.daftarna.net/",
    photo: "photos/13.jpeg"
  },
];
