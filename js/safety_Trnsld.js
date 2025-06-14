// 中英双语翻译词典
const translations = {
  en: {
    // 导航菜单
	nav_home: 'Home',
	nav_safety: 'Safety Supervision',
	nav_matching: 'Vehicle-Cargo Matching',
	nav_transaction: 'Online Transaction',
	nav_Cost_control: 'Cost Control',
	nav_HRmanagement: 'HR Management',
	nav_app_system: 'Application System',
	nav_about: 'About Us',
    
    // 安全页面内容
    safety_hero_title: "Hazardous Goods Safety Supervision",
    safety_hero_subtitle: "Advanced IoT and AI-powered safety monitoring",
    safety_overview_title: "Intelligent Risk Control System",
    safety_overview_desc: "Our system integrates IoT sensors and AI analytics for maximum safety",
    
    // 统计数据
    stat1: "Accident Reduction",
    stat2: "Faster Response",
    stat3: "Fewer Violations",
    
    // 功能特点
    monitoring_title: "Real-Time Monitoring",
    feature1_title: "IoT Sensors & GPS Tracking",
    feature1_item1: "Real-time cargo condition monitoring",
    feature1_item2: "High-precision GPS tracking",
    feature1_item3: "Electronic fence technology",
    
    feature2_title: "AI Risk Prediction",
    feature2_item1: "Historical accident analysis",
    feature2_item2: "Weather impact assessment",
    feature2_item3: "Driver behavior monitoring",
    
    feature3_title: "Compliance Management",
    feature3_item1: "Electronic waybill verification",
    feature3_item2: "Driver qualification checks",
    feature3_item3: "GB 6944 standards compliance",
    
    // 应急响应
    emergency_title: "Emergency Response",
    response_protocol: "Rapid Response Protocol",
    response_item1: "Instant automated alerts",
    response_item2: "Cross-department coordination",
    response_item3: "Blockchain-secured records",
    response_item4: "Real-time emergency communication",
    
    response_time: "Response Time",
    response_time_desc: "80% faster emergency response",
    incident_resolution: "Incident Resolution",
    incident_resolution_desc: "95% resolved within timeframe",
    
    // 培训中心
    training_title: "Driver Training",
    training1_title: "VR Training",
    training1_desc: "Practice in virtual environment",
    training2_title: "Certification",
    training2_desc: "Official hazmat certifications",
    training3_title: "Safety Guidelines",
    training3_desc: "Regulations documentation",
    
    // 页脚
    footer_tagline: "Connecting Global Logistics",
    footer_quick_links: "Quick Links",
    footer_resources: "Resources",
    footer_contact: "Contact Us",
    footer_blog: "Blog",
    footer_help: "Help Center",
    footer_faq: "FAQs",
    footer_phone: "Phone: +86 123 4567 8910",
    footer_address: "Address: Shanghai, China",
    footer_copyright: "© 2025 Qingtu Tech. All Rights Reserved.",
    
    // CTA
    cta_title: "Enhance Your Safety Today",
    cta_subtitle: "Join leading safety platform",
    cta_button: "Request Consultation"
  },
  zh: {
    // 导航菜单
	nav_home: '首页',
	nav_safety: '安全风控体系',
	nav_matching: '智能物流运营',
	nav_transaction: '线上交易体系',
	nav_Cost_control: '成本管控中心',
	nav_HRmanagement: '人力资源管理',
	nav_app_system: '应用系统',
	nav_about: '关于我们',
    
    // 安全页面内容
    safety_hero_title: "危险品运输安全监管系统",
    safety_hero_subtitle: "基于物联网和人工智能的危险品运输安全监控解决方案",
    safety_overview_title: "智能风险控制系统",
    safety_overview_desc: "我们的安全监管系统集成物联网传感器、AI分析和实时监控，确保危险品运输安全。采用5G+北斗定位技术，精度达±0.3米",
    
    // 统计数据
    stat1: "事故减少",
    stat2: "响应提速",
    stat3: "违规降低",
    
    // 功能特点
    monitoring_title: "实时监控与风险预防",
    feature1_title: "物联网传感器与GPS追踪",
    feature1_item1: "实时货物状态监控(温度、压力、泄漏)",
    feature1_item2: "±0.3米高精度GPS定位",
    feature1_item3: "电子围栏技术确保路线合规",
    
    feature2_title: "AI风险预测",
    feature2_item1: "历史事故数据分析",
    feature2_item2: "天气影响评估",
    feature2_item3: "驾驶员行为与疲劳监测",
    
    feature3_title: "合规管理",
    feature3_item1: "电子运单验证",
    feature3_item2: "驾驶员资质核查",
    feature3_item3: "GB 6944、JT/T 617等标准合规",
    
    // 应急响应
    emergency_title: "应急响应与事件管理",
    response_protocol: "快速响应协议",
    response_item1: "事件自动即时警报",
    response_item2: "跨部门协同系统",
    response_item3: "区块链安全事件记录",
    response_item4: "应急服务实时通讯",
    
    response_time: "响应时间",
    response_time_desc: "比传统系统快80%的应急响应",
    incident_resolution: "事件解决",
    incident_resolution_desc: "95%事件在标准时间内解决",
    
    // 培训中心
    training_title: "驾驶员培训与认证",
    training1_title: "VR培训模拟",
    training1_desc: "在安全虚拟环境中练习危险品处理",
    training2_title: "认证课程",
    training2_desc: "官方危险品运输认证与续证",
    training3_title: "安全指南",
    training3_desc: "最新法规与最佳实践文档",
    
    // 页脚
    footer_tagline: "连接全球物流",
    footer_quick_links: "快速链接",
    footer_resources: "资源中心",
    footer_blog: "博客",
    footer_help: "帮助中心",
    footer_faq: "常见问题",
    footer_contact: "联系我们",
    footer_phone: "电话: +86 13371501878",
    footer_address: "地址: 山东省烟台市莱山区黄海路街道滨海中路191号山东工商学院大学生创业中心M0032",
    footer_copyright: "© 2025 晴途科技 版权所有",
    
    // CTA
    cta_title: "立即提升您的运输安全",
    cta_subtitle: "加入领先的危险品运输安全平台",
    cta_button: "申请安全咨询"
  }
};

// 语言切换功能
function toggleLanguage() {
  const langToggle = document.getElementById('langToggle');
  const currentLang = langToggle.getAttribute('data-current-lang');
  const newLang = currentLang === 'en' ? 'zh' : 'en';
  
  // 更新按钮文本和HTML lang属性
  langToggle.textContent = currentLang === 'en' ? 'EN | 中文' : 'EN | Chinese';
  langToggle.setAttribute('data-current-lang', newLang);
  document.documentElement.lang = newLang;
  
  // 保存偏好到本地存储
  localStorage.setItem('preferredLanguage', newLang);
  
  // 翻译所有元素
  translatePage(newLang);
}

// 页面翻译功能
function translatePage(lang) {
  const translatableElements = document.querySelectorAll('[data-translate]');
  
  translatableElements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT' && element.type === 'placeholder') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
}

// 初始化页面语言
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('preferredLanguage') || 'zh';
  const langToggle = document.getElementById('langToggle');
  
  // 设置初始语言
  langToggle.setAttribute('data-current-lang', savedLang);
  document.documentElement.lang = savedLang;
  translatePage(savedLang);
  
  // 根据初始语言设置按钮文本
  langToggle.textContent = savedLang === 'en' ? '中文 | EN' : 'EN | 中文';
  
  // 添加点击事件监听
  langToggle.addEventListener('click', toggleLanguage);
});