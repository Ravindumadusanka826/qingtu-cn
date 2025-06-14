document.addEventListener('DOMContentLoaded', function() {
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
    
    // 匹配页面内容
    matching_hero_title: "AI-Powered Hazardous Goods Matching",
    matching_hero_subtitle: "Intelligent matching platform with 96% accuracy",
    results_title: "Available Cargo",
  
    
    // 统计数据
    stats_title: "Platform Performance",
    stat1: "Matching Accuracy",
    stat2: "Average Response Time",
    stat3: "Accident Reduction",
    stat4: "Return Load Rate",
    
    // 匹配流程
    process_title: "AI-Powered Matching Process",
    step1_title: "Data Analysis",
    step1_desc: "AI analyzes cargo properties and vehicle specifications",
    step2_title: "Safety Verification",
    step2_desc: "Automatic compliance and certification checks",
    step3_title: "Route Optimization",
    step3_desc: "Real-time route planning with risk assessment",
    step4_title: "Match Confirmation",
    step4_desc: "Final verification and booking confirmation",
    
    // 通用
    loading_time: "Loading time",
    view_btn: "View Details",
    
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
    footer_copyright: "© 2025 Qingtu Tech. All Rights Reserved."
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
    
    // 匹配页面内容
    matching_hero_title: "AI智能危险品车货匹配平台",
    matching_hero_subtitle: "匹配准确率96%，平均响应时间23秒",
    results_title: "实时货源",
    
    
    // 统计数据
    stats_title: "平台性能数据",
    stat1: "匹配准确率",
    stat2: "平均响应时间",
    stat3: "事故减少率",
    stat4: "回程车利用率",
    
    // 匹配流程
    process_title: "AI智能匹配流程",
    step1_title: "数据分析",
    step1_desc: "AI分析货物属性与车辆规格",
    step2_title: "安全验证",
    step2_desc: "自动合规性与资质检查",
    step3_title: "路线优化",
    step3_desc: "实时路线规划与风险评估",
    step4_title: "匹配确认",
    step4_desc: "最终验证与预订确认",
    
    // 通用
    loading_time: "装货时间",
    view_btn: "查看详情",
    
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
    footer_copyright: "© 2025 晴途科技 版权所有"
  }
};

  let currentLang = localStorage.getItem('lang') || 'zh';
  
  // Apply translations based on current language
  function applyTranslations() {
    document.documentElement.lang = currentLang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[currentLang] && translations[currentLang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.value = translations[currentLang][key];
        } else {
          element.innerHTML = translations[currentLang][key];
        }
      }
    });
  }

  // Initialize translations
  applyTranslations();

  // Language toggle functionality
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function() {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      localStorage.setItem('lang', currentLang);
      applyTranslations();
      
      // Update button text
      if (currentLang === 'zh') {
        langToggle.textContent = 'EN | 中文';
      } else {
        langToggle.textContent = '中文 | EN';
      }
    });
  }
});