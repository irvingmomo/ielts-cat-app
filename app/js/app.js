// 主应用逻辑
class IELTSApp {
    constructor() {
        this.testInProgress = false;
        this.testStartTime = null;
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.checkUsage();
        
        // 检查URL参数
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('test_completed') === 'true') {
            this.showTestCompleteModal();
        }
    }
    
    bindEvents() {
        // 开始测试按钮
        const startBtn = document.getElementById('startBtn');
        if (startBtn) {
            startBtn.addEventListener('click', () => this.startTest());
        }
        
        // 提交测试按钮
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            submitBtn.addEventListener('click', () => this.submitTest());
        }
        
        // 测试完成后的邮件表单
        const emailForm = document.getElementById('test-email-form');
        if (emailForm) {
            emailForm.addEventListener('submit', (e) => this.handleTestEmailSubmit(e));
        }
    }
    
    checkUsage() {
        const usageAlert = document.getElementById('usageAlert');
        if (!usageAlert) return;
        
        if (!userAuth.canStartTest()) {
            usageAlert.style.display = 'block';
            
            // 记录事件
            if (typeof gtag !== 'undefined') {
                gtag('event', 'usage_limit_reached', {
                    'event_category': 'Usage',
                    'event_label': 'Daily Limit'
                });
            }
        } else {
            usageAlert.style.display = 'none';
        }
    }
    
    async startTest() {
        // 检查使用限制
        if (!userAuth.canStartTest()) {
            userAuth.showUpgradeModal();
            return;
        }
        
        this.testInProgress = true;
        this.testStartTime = new Date();
        
        // 切换按钮
        document.getElementById('startBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'inline-block';
        
        // 启用所有输入
        document.querySelectorAll('input, textarea').forEach(input => {
            input.disabled = false;
        });
        
        // 记录事件
        if (typeof gtag !== 'undefined') {
            gtag('event', 'test_started', {
                'event_category': 'Test',
                'event_label': 'IELTS Mock Test'
            });
        }
        
        // 显示测试说明
        alert('测试已开始！你有2小时完成所有部分。');
    }
    
    async submitTest() {
        if (!this.testInProgress) return;
        
        // 计算测试时长
        const endTime = new Date();
        const duration = Math.round((endTime - this.testStartTime) / 1000 / 60); // 分钟
        
        // 生成模拟分数
        const testResult = this.generateTestResult(duration);
        
        // 记录测试
        const testRecord = await userAuth.recordTest(testResult);
        
        // 显示完成弹窗
        this.showTestCompleteModal(testRecord);
        
        // 重置测试状态
        this.testInProgress = false;
        document.getElementById('startBtn').style.display = 'inline-block';
        document.getElementById('submitBtn').style.display = 'none';
        
        // 记录事件
        if (typeof gtag !== 'undefined') {
            gtag('event', 'test_completed', {
                'event_category': 'Test',
                'event_label': 'Score: ' + testResult.overallScore,
                'value': testResult.overallScore,
                'duration': duration
            });
        }
        
        // 保存测试完成状态
        localStorage.setItem('test_completed', 'true');
    }
    
    generateTestResult(duration) {
        // 生成随机但合理的分数
        const baseScore = 6.0 + Math.random() * 1.5; // 6.0-7.5之间
        
        return {
            overallScore: parseFloat(baseScore.toFixed(1)),
            listening: parseFloat((baseScore + Math.random() * 0.5 - 0.25).toFixed(1)),
            reading: parseFloat((baseScore + Math.random() * 0.5 - 0.25).toFixed(1)),
            writing: parseFloat((baseScore - 0.5 + Math.random() * 0.5).toFixed(1)),
            speaking: parseFloat((baseScore + Math.random() * 0.5 - 0.25).toFixed(1)),
            duration: duration,
            timestamp: new Date().toISOString()
        };
    }
    
    showTestCompleteModal(testRecord = null) {
        const modal = document.getElementById('test-complete-modal');
        if (!modal) return;
        
        if (testRecord) {
            // 更新分数显示
            document.getElementById('overallScore').textContent = testRecord.overallScore;
            document.getElementById('listeningScore').textContent = testRecord.listening;
            document.getElementById('readingScore').textContent = testRecord.reading;
            document.getElementById('writingScore').textContent = testRecord.writing;
            document.getElementById('speakingScore').textContent = testRecord.speaking;
        }
        
        modal.style.display = 'flex';
        
        // 如果用户已经有邮箱，隐藏邮箱捕获部分
        if (localStorage.getItem('user_email')) {
            document.querySelector('.email-capture').style.display = 'none';
        }
    }
    
    closeTestModal() {
        const modal = document.getElementById('test-complete-modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    async handleTestEmailSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value;
        
        // 验证邮箱格式
        if (!this.validateEmail(email)) {
            alert('请输入有效的邮箱地址');
            return;
        }
        
        try {
            // 模拟API调用
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // 保存邮箱
            localStorage.setItem('user_email', email);
            localStorage.setItem('email_captured', 'true');
            
            // 更新用户数据
            if (userAuth.user) {
                userAuth.user.email = email;
                userAuth.saveUser();
            }
            
            // 记录事件
            if (typeof gtag !== 'undefined') {
                gtag('event', 'test_email_submitted', {
                    'event_category': 'Email Capture',
                    'event_label': 'Post Test'
                });
            }
            
            alert('感谢！你的测试结果已保存。');
            this.closeTestModal();
            
            // 重定向到仪表盘
            setTimeout(() => {
                window.location.href = '/app/dashboard/';
            }, 1000);
            
        } catch (error) {
            console.error('Error:', error);
            alert('提交失败，请稍后重试');
        }
    }
    
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}

// 初始化应用
const ieltsApp = new IELTSApp();

// 全局函数
function startTest() {
    ieltsApp.startTest();
}

function submitTest() {
    ieltsApp.submitTest();
}

function closeTestModal() {
    ieltsApp.closeTestModal();
}