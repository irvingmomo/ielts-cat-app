// 用户认证和Freemium逻辑
class UserAuth {
    constructor() {
        this.user = null;
        this.init();
    }
    
    async init() {
        // 检查localStorage
        const userData = localStorage.getItem('ielts_cat_user');
        if (userData) {
            this.user = JSON.parse(userData);
        } else {
            // 创建匿名用户
            this.user = this.createAnonymousUser();
            this.saveUser();
        }
        
        // 更新UI显示
        this.updateUI();
        
        // 检查使用限制
        await this.checkUsageLimits();
    }
    
    createAnonymousUser() {
        return {
            id: 'anon_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            email: null,
            plan: 'free',
            createdAt: new Date().toISOString(),
            usage: {
                testsToday: 0,
                lastTestDate: null,
                totalTests: 0
            },
            testHistory: []
        };
    }
    
    updateUI() {
        const planBadge = document.getElementById('userPlan');
        const upgradeBtn = document.getElementById('upgradeBtn');
        
        if (!planBadge) return;
        
        if (this.user.plan === 'premium') {
            planBadge.textContent = '高级版';
            planBadge.className = 'user-plan premium';
            if (upgradeBtn) upgradeBtn.style.display = 'none';
        } else {
            planBadge.textContent = '免费版';
            planBadge.className = 'user-plan free';
            if (upgradeBtn) upgradeBtn.style.display = 'block';
        }
    }
    
    async checkUsageLimits() {
        const today = new Date().toDateString();
        
        // 重置每日计数
        if (this.user.usage.lastTestDate !== today) {
            this.user.usage.testsToday = 0;
            this.user.usage.lastTestDate = today;
            this.saveUser();
        }
        
        // 检查免费用户限制
        if (this.user.plan === 'free' && this.user.usage.testsToday >= 1) {
            this.showUpgradeModal();
            return false;
        }
        
        return true;
    }
    
    async recordTest(testResult) {
        const today = new Date().toDateString();
        
        if (this.user.usage.lastTestDate !== today) {
            this.user.usage.testsToday = 0;
            this.user.usage.lastTestDate = today;
        }
        
        this.user.usage.testsToday++;
        this.user.usage.totalTests++;
        
        // 保存测试记录
        const testRecord = {
            id: 'test_' + Date.now(),
            timestamp: new Date().toISOString(),
            ...testResult
        };
        
        this.user.testHistory.unshift(testRecord);
        this.saveUser();
        
        // 检查是否需要升级提醒
        if (this.user.plan === 'free' && this.user.usage.totalTests >= 3) {
            this.showUpgradeModal();
        }
        
        return testRecord;
    }
    
    showUpgradeModal() {
        // 如果已经显示过，不再重复显示
        if (document.querySelector('.upgrade-modal')) return;
        
        const modal = document.createElement('div');
        modal.className = 'modal upgrade-modal';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>免费测试次数已用完</h3>
                <p>免费用户每天只能进行1次测试。</p>
                <p>升级到高级版享受：</p>
                <ul>
                    <li>✓ 无限次测试</li>
                    <li>✓ 完整分析报告</li>
                    <li>✓ 历史记录追踪</li>
                    <li>✓ 弱点分析报告</li>
                </ul>
                <div class="modal-actions">
                    <button onclick="upgradeToPremium()" class="btn-primary">立即升级 (¥25/月)</button>
                    <button onclick="this.parentElement.parentElement.style.display='none'" class="btn-text">稍后再说</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 记录事件
        if (typeof gtag !== 'undefined') {
            gtag('event', 'upgrade_prompt_shown', {
                'event_category': 'Monetization',
                'event_label': 'Daily Limit Reached'
            });
        }
    }
    
    saveUser() {
        localStorage.setItem('ielts_cat_user', JSON.stringify(this.user));
    }
    
    async upgradeToPremium() {
        // 这里会调用支付API
        console.log('Starting upgrade process...');
        
        // 模拟升级成功
        this.user.plan = 'premium';
        this.saveUser();
        this.updateUI();
        
        // 隐藏所有升级弹窗
        document.querySelectorAll('.upgrade-modal').forEach(modal => {
            modal.style.display = 'none';
        });
        
        // 显示成功消息
        this.showUpgradeSuccess();
        
        // 记录事件
        if (typeof gtag !== 'undefined') {
            gtag('event', 'upgrade_started', {
                'event_category': 'Monetization',
                'event_label': 'Premium Upgrade'
            });
        }
    }
    
    showUpgradeSuccess() {
        const modal = document.createElement('div');
        modal.className = 'modal success-modal';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>🎉 升级成功！</h3>
                <p>你现在是IELTS Cat高级用户了！</p>
                <p>立即享受：</p>
                <ul>
                    <li>无限次测试</li>
                    <li>完整分析报告</li>
                    <li>历史记录追踪</li>
                </ul>
                <button onclick="location.reload()" class="btn-primary">开始使用</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    // 获取用户测试历史
    getTestHistory() {
        return this.user.testHistory || [];
    }
    
    // 获取今日测试次数
    getTestsToday() {
        const today = new Date().toDateString();
        if (this.user.usage.lastTestDate === today) {
            return this.user.usage.testsToday;
        }
        return 0;
    }
    
    // 检查是否可以开始测试
    canStartTest() {
        if (this.user.plan === 'premium') return true;
        
        const today = new Date().toDateString();
        if (this.user.usage.lastTestDate !== today) return true;
        
        return this.user.usage.testsToday < 1;
    }
}

// 全局实例
const userAuth = new UserAuth();

// 全局升级函数
function upgradeToPremium() {
    userAuth.upgradeToPremium();
}