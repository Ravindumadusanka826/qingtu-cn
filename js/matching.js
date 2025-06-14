// 车货匹配页面特定JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // 搜索选项卡
  const searchTabs = document.querySelectorAll('.search-tabs .tab-btn');
  const searchPanels = document.querySelectorAll('.search-panel');
  
  if (searchTabs.length > 0) {
    searchTabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // 移除所有选项卡和面板的active类
        searchTabs.forEach(t => t.classList.remove('active'));
        searchPanels.forEach(p => p.classList.remove('active'));
        
        // 为当前选项卡和面板添加active类
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
        
        // 根据选中的选项卡更新结果标题
        const resultsTitle = document.getElementById('resultsTitle');
        if (resultsTitle) {
          if (tabId === 'find-vehicle') {
            resultsTitle.textContent = '可用车辆';
          } else if (tabId === 'find-cargo') {
            resultsTitle.textContent = '可用货源';
          }
        }
        
        // 生成相应的模拟结果
        generateResults(tabId === 'find-vehicle' ? 'vehicles' : 'cargo');
      });
    });
  }
  
  // 模拟数据（演示用）
  const mockVehicles = [
    {
      id: 'v1',
      type: '厢式货车',
      title: '5吨厢式货车 - 上海至北京',
      details: {
        '司机': '李伟',
        '载重': '5吨',
        '可用时间': '2025年8月15日',
        '距离': '1,200公里'
      },
      price: '¥3,500'
    },
    // 更多车辆数据...
  ];
  
  const mockCargo = [
    {
      id: 'c1',
      type: '普通货物',
      title: '电子元件 - 上海至深圳',
      details: {
        '货主': '科技公司',
        '重量': '3.5吨',
        '日期': '2025年8月14日',
        '距离': '1,500公里'
      },
      price: '¥5,200'
    },
    // 更多货物数据...
  ];
  
  // 生成结果卡片
  function generateResults(type) {
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    const data = type === 'vehicles' ? mockVehicles : mockCargo;
    
    if (resultsGrid) {
      // 清空当前结果
      resultsGrid.innerHTML = '';
      
      // 更新结果计数
      if (resultsCount) {
        resultsCount.textContent = data.length;
      }
      
      // 创建结果卡片
      data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-card';
        
        // 创建卡片各部分...
        // (保持原有DOM操作逻辑，仅内容改为中文)
        
        // 添加到结果网格
        resultsGrid.appendChild(card);
      });
    }
  }
  
  // 初始化页面时显示车辆结果
  generateResults('vehicles');
  
  // 表单提交处理
  const vehicleSearchForm = document.getElementById('vehicleSearchForm');
  const cargoSearchForm = document.getElementById('cargoSearchForm');
  
  if (vehicleSearchForm) {
    vehicleSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      generateResults('vehicles');
      document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  if (cargoSearchForm) {
    cargoSearchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      generateResults('cargo');
      document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // 分页功能
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');
  const pageNumbers = document.querySelectorAll('.page-number');
  
  if (pageNumbers.length > 0) {
    pageNumbers.forEach((page, index) => {
      page.addEventListener('click', function() {
        pageNumbers.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        window.scrollTo({
          top: document.querySelector('.results-section').offsetTop - 80,
          behavior: 'smooth'
        });
      });
    });
  }
  
  // 排序功能
  const sortResults = document.getElementById('sortResults');
  if (sortResults) {
    sortResults.addEventListener('change', function() {
      const sortValue = this.value;
      const currentTab = document.querySelector('.search-tabs .tab-btn.active');
      const type = currentTab.getAttribute('data-tab') === 'find-vehicle' ? 'vehicles' : 'cargo';
      generateResults(type);
    });
  }
});