// ============================================
// 🚀 杜亚兰个人简历网站 - 前端渲染引擎
// ============================================
// 自动读取 data.js 中的数据并渲染页面
// ============================================

// ---------- 1. 渲染基础信息 ----------
function renderBasic() {
    const b = SITE_DATA.basic;
    document.getElementById('page-title').textContent = `${b.name} | ${b.title}`;
    document.getElementById('nav-logo').textContent = b.logo;
    document.getElementById('hero-badge').textContent = b.badge;
    document.getElementById('hero-name').textContent = `我是 ${b.name}`;
    document.getElementById('hero-desc').textContent = b.description;
    document.getElementById('hero-avatar').src = b.avatar;
}

// ---------- 2. 渲染核心数据 ----------
function renderMetrics() {
    const container = document.getElementById('metrics-grid');
    container.innerHTML = SITE_DATA.metrics.map(m => `
        <div class="glass-card metric-card">
            <div class="metric-num" data-target="${m.number}" data-text="${m.isText ? 'true' : 'false'}" style="${m.isText ? `background: linear-gradient(to right, #ff7e5f, #feb47b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;` : ''}">${m.isText ? m.number : '0'}</div>
            <div style="color: ${m.color}; font-weight: 600; margin-bottom: 0.3rem;">${m.label}</div>
            <p style="font-size: 0.85rem; color: var(--text-muted);">${m.desc}</p>
        </div>
    `).join('');
}

// ---------- 3. 渲染技能舱 ----------
function renderSkills() {
    document.getElementById('skills-title').textContent = SITE_DATA.skills.title;
    const container = document.getElementById('skills-container');
    container.innerHTML = SITE_DATA.skills.sections.map(s => `
        <div class="glass-card">
            <h3 style="margin-bottom: 1rem; color: ${s.color};">${s.title}</h3>
            ${s.content ? `<p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">${s.content}</p>` : ''}
            ${s.tags ? `
                <div class="skill-tag-group">
                    ${s.tags.map(t => `
                        <div class="skill-tag ${t.highlight ? 'highlight' : ''}">${t.text}</div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

// ---------- 4. 渲染作品集 ----------
function renderPortfolio() {
    document.getElementById('portfolio-title').textContent = SITE_DATA.portfolio.title;
    const container = document.getElementById('portfolio-container');
    container.innerHTML = SITE_DATA.portfolio.cases.map((c, i) => `
        <div class="glass-card case-study" onclick="toggleCase(this)">
            <div class="case-header">
                <div>
                    <span class="case-tag" style="background: ${c.tag.bg}; color: ${c.tag.color};">${c.tag.text}</span>
                    <h3 style="margin-top: 0.5rem; font-size: 1.3rem;">${c.title}</h3>
                </div>
                <div class="arrow-icon">▼</div>
            </div>
            <p style="color: var(--text-muted); font-size: 0.9rem;">${c.summary}</p>
            <div class="case-body">
                <div class="star-box">
                    <div class="star-item"><strong>S (背景):</strong> ${c.star.situation}</div>
                    <div class="star-item"><strong>T (任务):</strong> ${c.star.task}</div>
                    <div class="star-item"><strong>A (行动):</strong> ${c.star.action}</div>
                    <div class="star-item"><strong>R (结果):</strong> ${c.star.result}</div>
                </div>
            </div>
        </div>
    `).join('');
}

// ---------- 5. 渲染履历 ----------
function renderExperience() {
    document.getElementById('experience-title').textContent = SITE_DATA.experience.title;
    const expContainer = document.getElementById('experience-container');
    expContainer.innerHTML = SITE_DATA.experience.jobs.map(j => `
        <div class="glass-card">
            <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                <h4>${j.company} · ${j.position}</h4>
                <span style="color: var(--accent); font-size: 0.9rem;">${j.period}</span>
            </div>
            <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${j.description}</p>
        </div>
    `).join('');

    const eduContainer = document.getElementById('edu-grid');
    eduContainer.innerHTML = SITE_DATA.education.map(e => `
        <div class="glass-card edu-card">
            <div class="edu-school" style="color: ${e.color};">${e.school}</div>
            <div class="edu-degree">${e.degree}</div>
            <p class="edu-desc">${e.desc}</p>
        </div>
    `).join('');
}

// ---------- 6. 渲染联系方式 ----------
function renderContact() {
    const c = SITE_DATA.contact;
    document.getElementById('contact-title').textContent = c.title;
    document.getElementById('contact-desc').textContent = c.desc;
    document.getElementById('contact-grid').innerHTML = c.methods.map(m => `
        <a href="${m.href}" class="contact-btn">
            <span>${m.icon} ${m.label}</span>
            <strong style="color: ${m.color};">${m.value}</strong>
        </a>
    `).join('');
}

// ---------- 7. 渲染页脚 ----------
function renderFooter() {
    document.getElementById('footer-text').textContent = SITE_DATA.footer;
}

// ---------- 8. 数字递增动画 ----------
function initNumberAnimation() {
    const metrics = document.querySelectorAll('.metric-num[data-target]');
    const options = { threshold: 0.5, rootMargin: "0px" };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const isText = target.getAttribute('data-text') === 'true';
                if (isText) { observer.unobserve(target); return; }

                const endValue = parseInt(target.getAttribute('data-target'), 10);
                if (!endValue) return;

                let start = 0;
                const duration = 1200;
                const startTime = performance.now();

                function updateNumber(now) {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeQuadOut = p => p * (2 - p);
                    target.innerText = Math.floor(easeQuadOut(progress) * endValue);
                    if (progress < 1) {
                        requestAnimationFrame(updateNumber);
                    } else {
                        target.innerText = endValue + '+';
                    }
                }
                requestAnimationFrame(updateNumber);
                observer.unobserve(target);
            }
        });
    }, options);

    metrics.forEach(metric => observer.observe(metric));
}

// ---------- 9. 视差滚动 ----------
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bgGlow = document.getElementById('bg-glow');
        const bgDots = document.getElementById('bg-dots');
        if (bgGlow) {
            bgGlow.style.transform = `translateY(${scrolled * 0.3}px) translateZ(-20px) scale(3)`;
        }
        if (bgDots) {
            bgDots.style.transform = `translateY(${scrolled * 0.15}px) translateZ(-10px) scale(2)`;
        }
    });
}

// ---------- 10. 导航高亮 ----------
function initNavHighlight() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

// ---------- 11. 作品集折叠 ----------
function toggleCase(card) {
    if (card.classList.contains('active')) {
        card.classList.remove('active');
    } else {
        document.querySelectorAll('.case-study').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    }
}

// ---------- 12. 页面加载 ----------
function initLoader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.getElementById('pageLoader').classList.add('hidden');
        }, 300);
    });
}

// ---------- 13. Decap CMS 身份验证 ----------
function initNetlifyIdentity() {
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            if (user) {
                document.getElementById('admin-link').style.display = 'inline';
            }
        });
        window.netlifyIdentity.on("login", () => {
            document.getElementById('admin-link').style.display = 'inline';
        });
        window.netlifyIdentity.on("logout", () => {
            document.getElementById('admin-link').style.display = 'none';
        });
    }
}

// ============================================
// 🎯 主程序入口
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderBasic();
    renderMetrics();
    renderSkills();
    renderPortfolio();
    renderExperience();
    renderContact();
    renderFooter();
    initNumberAnimation();
    initParallax();
    initNavHighlight();
    initLoader();
    initNetlifyIdentity();
});
