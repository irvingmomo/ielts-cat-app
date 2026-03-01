// 邮件捕获弹窗逻辑
let emailModalShown = false;

function showEmailModal() {
    if (!emailModalShown) {
        const modal = document.getElementById('email-modal');
        modal.style.display = 'flex';
        emailModalShown = true;
        
        // 记录事件
        if (typeof gtag !== 'undefined') {
            gtag('event', 'modal_shown', {
                'event_category': 'Email Capture',
                'event_label': 'Post Test Modal'
            });
        }
    }
}

function closeModal() {
    const modal = document.getElementById('email-modal');
    modal.style.display = 'none';
}

// 邮件表单提交
document.getElementById('email-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    // 验证邮箱格式
    if (!validateEmail(email)) {
        alert('请输入有效的邮箱地址');
        return;
    }
    
    // 发送到后端（模拟）
    try {
        // 这里应该调用真实的后端API
        // const response = await fetch('/api/capture-email', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email })
        // });
        
        // 模拟成功响应
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // 记录事件
        if (typeof gtag !== 'undefined') {
            gtag('event', 'email_submitted', {
                'event_category': 'Email Capture',
                'event_label': 'Success'
            });
        }
        
        alert('感谢！你的进度已保存。');
        closeModal();
        
        // 保存到localStorage
        localStorage.setItem('user_email', email);
        localStorage.setItem('email_captured', 'true');
        
    } catch (error) {
        console.error('Error:', error);
        alert('提交失败，请稍后重试');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// 页面加载后检查是否需要显示弹窗
document.addEventListener('DOMContentLoaded', function() {
    // 检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('test_completed') === 'true') {
        setTimeout(showEmailModal, 2000);
    }
    
    // 检查localStorage
    const testCompleted = localStorage.getItem('test_completed');
    if (testCompleted === 'true' && !localStorage.getItem('user_email')) {
        setTimeout(showEmailModal, 3000);
    }
    
    // 记录页面浏览事件
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'event_category': 'Landing Page',
            'event_label': 'Homepage'
        });
    }
});

// CTA按钮点击跟踪
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(button => {
    button.addEventListener('click', function() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'event_category': 'CTA',
                'event_label': this.textContent.trim(),
                'event_action': 'click'
            });
        }
    });
});