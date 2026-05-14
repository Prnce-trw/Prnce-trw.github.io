const menuButton = document.getElementById('menuButton');
const navLinks = document.getElementById('navLinks');
const languageMenu = document.getElementById('languageMenu');
const languageButton = document.getElementById('languageButton');
const languageFlag = document.getElementById('languageFlag');
const languageLabel = document.getElementById('languageLabel');
const languageOptions = document.querySelectorAll('.language-option');

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const translations = {
  th: {
    flagClass: 'flag-th',
    label: 'TH',
    lang: 'th',
    title: 'Prince Theerawat — Portfolio',
    content: {
      '.nav-links a[href="#work"]': 'ผลงาน',
      '.nav-links a[href="#skills"]': 'ทักษะ',
      '.nav-links a[href="#experience"]': 'ประสบการณ์',
      '.nav-links a[href="#contact"]': 'ติดต่อ',
      '.hero-copy': 'ผมออกแบบและพัฒนาระบบที่เชื่อมโยงคน กระบวนการ และข้อมูล ให้ทำงานง่ายขึ้น เร็วขึ้น และวัดผลได้จริง',
      '.cta-row .btn-primary[href="#work"]': 'ดูโปรเจกต์',
      '.cta-row .btn-secondary[href="#contact"]': 'ติดต่อ',
      '#work .section-head h2': 'Selected work.',
      '#work .section-head p': 'โปรเจกต์ตัวอย่างที่เน้นแก้ปัญหาหน้างานจริง ทั้งระบบภายใน อนุมัติ เอกสาร Dashboard และ SAP process',
      '.showcase p': 'ระบบสื่อสารและติดตามงานระหว่าง IT กับผู้ใช้งาน รวม ticket, status, priority, dashboard และ SLA insight ในที่เดียว',
      '.card-links a[href="#contact"]': 'ขอรายละเอียด ›',
      '.card-links a[href="#skills"]': 'เทคโนโลยี ›',
      '.card.span-5.dark p': 'ช่วยวิเคราะห์ process, authorization, FUE license, FI/CO issue และออกแบบแนวทาง support สำหรับ SAP S/4HANA Public Cloud',
      '.card.span-4:nth-of-type(3) p': 'Dashboard สำหรับติดตามงาน ปิดงานตามช่วงเวลา วิเคราะห์ performance และสรุป KPI สำหรับทีม',
      '.card.span-4:nth-of-type(4) p': 'เครื่องมือแปลง HTML/XML/CSV เป็น Excel, ตรวจ matrix, export และทำงานแบบ local-first โดยไม่ต้องมี backend',
      '.card.span-4:nth-of-type(5) p': 'เชื่อมต่อข้อมูล POS, ERP, WMS, BI และ SAP เพื่อให้ข้อมูลไหลครบ ลดงาน manual และเพิ่มความถูกต้อง',
      '#skills .section-head h2': 'Skills that ship.',
      '#skills .section-head p': 'ผสมระหว่าง business process, technical execution และการสื่อสารกับผู้ใช้งานจริง',
      '#skills .card.span-6:first-child p': 'สร้างระบบที่ใช้งานง่าย ดูแลต่อได้ และรองรับข้อมูลจริงขององค์กร',
      '#skills .card.dark p': 'เข้าใจ process ฝั่ง finance, operation และ IT governance ทำให้คุยกับ business ได้ตรงประเด็น',
      '#experience .section-head h2': 'Experience.',
      '#experience .section-head p': 'เส้นทางงานที่เชื่อม business requirement กับ solution ที่นำไปใช้จริง',
      '.timeline-item:nth-child(1) .year': 'Now',
      '.timeline-item:nth-child(1) span': 'ดูแลระบบภายใน พัฒนา workflow, dashboard, SAP support และ process improvement',
      '.timeline-item:nth-child(2) .year': 'Before',
      '.timeline-item:nth-child(2) span': 'สร้าง report, integration, inventory, costing และระบบสนับสนุนการทำงานหน้าร้าน/คลังสินค้า',
      '.timeline-item:nth-child(3) .year': 'Focus',
      '.timeline-item:nth-child(3) span': 'ลดงานซ้ำ เพิ่ม visibility และเปลี่ยนข้อมูลให้เป็นการตัดสินใจที่เร็วขึ้น',
      '.contact h2': 'Let’s build something useful.',
      '.contact p': 'กำลังมองหาคนที่เข้าใจทั้งระบบ เทคโนโลยี และ business process? ติดต่อเพื่อคุยเรื่องโปรเจกต์หรือการทำงานร่วมกันได้เลย',
      'footer h4:nth-of-type(1)': 'Prince Theerawat'
    },
    footerLinks: ['ผลงาน', 'ทักษะ', 'ประสบการณ์']
  },
  en: {
    flagClass: 'flag-us',
    label: 'EN',
    lang: 'en',
    title: 'Prince Theerawat — Portfolio',
    content: {
      '.nav-links a[href="#work"]': 'Work',
      '.nav-links a[href="#skills"]': 'Skills',
      '.nav-links a[href="#experience"]': 'Experience',
      '.nav-links a[href="#contact"]': 'Contact',
      '.hero-copy': 'I design and build systems that connect people, processes, and data so work becomes simpler, faster, and measurable.',
      '.cta-row .btn-primary[href="#work"]': 'View projects',
      '.cta-row .btn-secondary[href="#contact"]': 'Contact',
      '#work .section-head h2': 'Selected work.',
      '#work .section-head p': 'A selection of practical projects built around real operational problems, from internal systems and approvals to documents, dashboards, and SAP processes.',
      '.showcase p': 'A communication and work-tracking platform between IT and users, combining tickets, status, priority, dashboards, and SLA insight in one place.',
      '.card-links a[href="#contact"]': 'Request details ›',
      '.card-links a[href="#skills"]': 'Technology ›',
      '.card.span-5.dark p': 'Process analysis, authorization support, FUE license review, FI/CO issue handling, and support design for SAP S/4HANA Public Cloud.',
      '.card.span-4:nth-of-type(3) p': 'Dashboards for tracking work, closure timing, performance analysis, and team KPI summaries.',
      '.card.span-4:nth-of-type(4) p': 'Tools for converting HTML/XML/CSV to Excel, checking matrices, exporting files, and working local-first without a backend.',
      '.card.span-4:nth-of-type(5) p': 'Connecting POS, ERP, WMS, BI, and SAP data to reduce manual work and improve accuracy.',
      '#skills .section-head h2': 'Skills that ship.',
      '#skills .section-head p': 'A blend of business process understanding, technical execution, and clear communication with real users.',
      '#skills .card.span-6:first-child p': 'Building systems that are easy to use, maintainable, and ready for real organizational data.',
      '#skills .card.dark p': 'Understanding finance, operations, and IT governance processes to communicate clearly with business teams.',
      '#experience .section-head h2': 'Experience.',
      '#experience .section-head p': 'A career path focused on connecting business requirements with solutions that actually get used.',
      '.timeline-item:nth-child(1) .year': 'Now',
      '.timeline-item:nth-child(1) span': 'Leading internal systems, workflow development, dashboards, SAP support, and process improvement.',
      '.timeline-item:nth-child(2) .year': 'Before',
      '.timeline-item:nth-child(2) span': 'Built reports, integrations, inventory tools, costing support, and systems for store and warehouse operations.',
      '.timeline-item:nth-child(3) .year': 'Focus',
      '.timeline-item:nth-child(3) span': 'Reducing repetitive work, increasing visibility, and turning data into faster decisions.',
      '.contact h2': 'Let’s build something useful.',
      '.contact p': 'Looking for someone who understands systems, technology, and business process? Reach out to talk about a project or collaboration.',
      'footer h4:nth-of-type(1)': 'Prince Theerawat'
    },
    footerLinks: ['Work', 'Skills', 'Experience']
  }
};

const setMenuOpen = isOpen => {
  navLinks.classList.toggle('open', isOpen);
  menuButton.textContent = isOpen ? '×' : '☰';
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
};

const setLanguageMenuOpen = isOpen => {
  languageMenu.classList.toggle('open', isOpen);
  languageButton.setAttribute('aria-expanded', String(isOpen));
};

const setupRevealAnimations = () => {
  const revealElements = document.querySelectorAll(
    '.section-head, .card, .contact, footer'
  );

  if (!revealElements.length) {
    return;
  }

  revealElements.forEach(element => {
    element.classList.add('reveal');
  });

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(element => {
      element.classList.add('is-visible');
    });
    return;
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -80px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
};

const applyLanguage = lang => {
  const dictionary = translations[lang] ?? translations.th;

  document.documentElement.lang = dictionary.lang;
  document.title = dictionary.title;
  languageFlag.className = `language-flag flag-icon ${dictionary.flagClass}`;
  languageLabel.textContent = dictionary.label;

  Object.entries(dictionary.content).forEach(([selector, text]) => {
    const element = document.querySelector(selector);

    if (element) {
      element.textContent = text;
    }
  });

  document.querySelectorAll('footer a[href^="#"]').forEach((link, index) => {
    link.textContent = dictionary.footerLinks[index];
  });

  languageOptions.forEach(option => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });

  localStorage.setItem('preferredLanguage', lang);
};

menuButton.addEventListener('click', () => {
  setMenuOpen(!navLinks.classList.contains('open'));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    setMenuOpen(false);
  });
});

languageButton.addEventListener('click', event => {
  event.stopPropagation();
  setLanguageMenuOpen(!languageMenu.classList.contains('open'));
});

languageOptions.forEach(option => {
  option.addEventListener('click', event => {
    event.stopPropagation();
    applyLanguage(option.dataset.lang);
    setLanguageMenuOpen(false);
    setMenuOpen(false);
  });
});

document.addEventListener('click', event => {
  if (!languageMenu.contains(event.target)) {
    setLanguageMenuOpen(false);
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    setLanguageMenuOpen(false);
    setMenuOpen(false);
  }
});

applyLanguage(localStorage.getItem('preferredLanguage') || 'th');
window.scrollTo(0, 0);
setupRevealAnimations();
