// Translation dictionary
const translations = {
  en: {
	nav_home: 'Home',
	nav_safety: 'Safety Supervision',
	nav_matching: 'Vehicle-Cargo Matching',
	nav_transaction: 'Online Transaction',
	nav_Cost_control: 'Cost Control',
	nav_HRmanagement: 'HR Management',
	nav_app_system: 'Application System',
	nav_about: 'About Us',
    hero_title: "Comprehensive Hazardous Goods Transportation Solutions",
    hero_subtitle: "Smart Control for Hazardous Transport, Safety Guaranteed",
    cta_primary: "Get Started",
    cta_secondary: "Learn More",
    features_title: "Our Core Services",
    feature1_title: "Safety Supervision",
    feature1_desc: "Comprehensive safety monitoring and regulation compliance",
    feature2_title: "Vehicle-Cargo Matching",
    feature2_desc: "AI-powered matching system connecting logistics partners",
    feature3_title: "Online Transaction",
    feature3_desc: "Secure payment and contract management",
    learn_more: "Learn More",
    stat1: "Carriers",
    stat2: "Shippers",
    stat3: "Successful Matches",
    stat4: "Safety Rating",
    how_it_works: "How It Works",
    step1_title: "Register",
    step1_desc: "Create carrier or shipper account",
    step2_title: "Post or Search",
    step2_desc: "List your vehicles or cargo needs",
    step3_title: "Smart Matching",
    step3_desc: "Get the most suitable partners",
    step4_title: "Complete Transaction",
    step4_desc: "Secure payment and tracking",
    testimonials_title: "Testimonials",
    testimonial1: `"Qingtu Tech has revolutionized how we manage our hazardous goods fleet. The safety supervision features ensure we always stay compliant with standards."`,
    testimonial1_role: "Fleet Manager, Beijing Transport",
    testimonial2: `"The matching system saved us countless hours and increased efficiency by over 40%. Highly recommended!"`,
    testimonial2_role: "Logistics Director, Shanghai Express",
    about_title: "About Qingtu Tech",
    about_desc1: "Qingtu Tech is a comprehensive logistics platform dedicated to revolutionizing the hazardous goods transportation industry.",
    about_desc2: "Our mission is to leverage technology to overcome traditional logistics challenges and enhance safety compliance.",
    about_cta: "Learn More",
    cta_title: "Ready to Transform Your Logistics Operations?",
    cta_subtitle: "Join thousands of satisfied users on the leading platform",
    cta_button: "Get Started Today",
    footer_tagline: "Connecting Global Logistics",
    footer_quick_links: "Quick Links",
    footer_resources: "Resources",
    footer_contact: "Contact Us",
    footer_blog: "Blog",
    footer_help: "Help Center",
    footer_faq: "FAQs",
    footer_phone: "Phone: +86 123 4567 8910",
    footer_address: "Address: 123 Logistics Ave, Shanghai",
    footer_copyright: "© 2025 Qingtu Tech. All Rights Reserved."
  },
  zh: {
    nav_home: '首页',
    nav_safety: '安全风控体系',
    nav_matching: '智能物流运营',
    nav_transaction: '线上交易体系',
    nav_Cost_control: '成本管控中心',
    nav_HRmanagement: '人力资源管理',
    nav_app_system: '应用系统',
    nav_about: '关于我们',
    hero_title: "危险货物智慧运输综合管理平台",
    hero_subtitle: "为智驭危途，安全永驻",
    cta_primary: "立即开始",
    cta_secondary: "了解更多",
    features_title: "我们的核心服务",
    feature1_title: "安全监管",
    feature1_desc: "全面监控危险品运输操作并确保合规",
    feature2_title: "车货匹配",
    feature2_desc: "AI驱动的匹配系统连接危险品运输供需方",
    feature3_title: "在线交易",
    feature3_desc: "危险品运输的安全透明支付和合同管理",
    learn_more: "了解更多",
    stat1: "运输公司",
    stat2: "货主企业",
    stat3: "成功匹配",
    stat4: "安全评分",
    how_it_works: "平台使用流程",
    step1_title: "注册",
    step1_desc: "创建运输方或货主账户",
    step2_title: "发布或搜索",
    step2_desc: "发布车辆或货物需求",
    step3_title: "智能匹配",
    step3_desc: "获取最适合的合作伙伴",
    step4_title: "完成交易",
    step4_desc: "安全支付并跟踪运输",
    testimonials_title: "客户评价",
    testimonial1: `"晴途科技彻底改变了我们管理危险品车队的方式，安全监管功能确保我们始终符合GB 6944标准。"`,
    testimonial1_role: "北京运输公司车队经理",
    testimonial2: `"车货匹配系统为我们节省了大量时间，效率提升了40%以上。强烈推荐用于危险品运输！"`,
    testimonial2_role: "上海快运物流总监",
    about_title: "关于晴途科技",
    about_desc1: "晴途科技是致力于革新危险品运输行业的综合物流平台。我们将运输公司、货主和监管机构汇聚在同一平台，创建更安全、高效的物流生态系统。",
    about_desc2: "我们的使命是利用技术克服传统物流挑战，减少空驶里程，加强安全合规，促进危险品运输各方之间的安全交易。",
    about_cta: "了解更多",
    cta_title: "准备好改变您的物流运营了吗？",
    cta_subtitle: "加入数千家使用领先危险品物流平台的满意用户",
    cta_button: "立即开始",
    footer_tagline: "连接全球物流",
    footer_quick_links: "快速链接",
    footer_resources: "资源中心",
    footer_blog: "博客",
    footer_help: "帮助中心",
    footer_faq: "常见问题",
    footer_contact: "联系我们",
    footer_phone: "电话: +86 13371501878",
    footer_address: "地址: 山东省烟台市莱山区黄海路街道滨海中路191号山东工商学院大学生创业中心M0032",
    footer_copyright: "© 2025 晴途科技 版权所有"
  }
};

// Function to toggle language
function toggleLanguage() {
  const langToggle = document.getElementById('langToggle');
  const currentLang = langToggle.getAttribute('data-current-lang');
  const newLang = currentLang === 'en' ? 'zh' : 'en';
  
  // Update button text and HTML lang attribute
  langToggle.textContent = currentLang === 'en' ? 'EN | 中文' : 'EN | Chinese';
  langToggle.setAttribute('data-current-lang', newLang);
  document.documentElement.lang = newLang;
  
  // Save preference to localStorage
  localStorage.setItem('preferredLanguage', newLang);
  
  // Translate all elements
  translatePage(newLang);
}

// Function to translate the page
function translatePage(lang) {
  const translatableElements = document.querySelectorAll('[data-translate]');
  
  translatableElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      // Handle different element types
      if (element.tagName === 'INPUT' && element.type === 'placeholder') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}

// Initialize the page with saved language preference
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'zh';
  const langToggle = document.getElementById('langToggle');
  
  // Set initial language
  langToggle.setAttribute('data-current-lang', savedLang);
  document.documentElement.lang = savedLang;
  translatePage(savedLang);
  
  // Set button text based on initial language
  langToggle.textContent = savedLang === 'en' ? '中文 | EN' : 'EN | 中文';
  
  // Add event listener
  langToggle.addEventListener('click', toggleLanguage);
});