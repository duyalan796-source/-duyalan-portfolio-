// ============================================
// 📦 杜亚兰个人简历网站 - 内容数据配置中心
// ============================================
// 你可以通过 Decap CMS 后台修改这些内容
// 修改后网站会自动重新构建并更新
// ============================================

const SITE_DATA = {
    // ---------- 基础信息 ----------
    basic: {
        name: "杜亚兰",
        title: "AI-Driven 品牌宣传 & 投资者关系专家",
        logo: "DU YALAN.INDEX",
        avatar: "assets/avatar.jpg",
        badge: "✦ 探索金融科技与多模态内容边界",
        description: "留英背景硕士。两年来深耕金融强监管红海，在国资基金全链路闭环中承担"品牌策略+投教创新+数字化媒体矩阵"复合角色。擅长在高规范、高抗压环境下，实现品牌心智从0到1的重构与品效合一。"
    },

    // ---------- 核心数据指标 ----------
    metrics: [
        {
            number: "80",
            suffix: "+",
            label: "董事会核心材料",
            desc: "格式精准零瑕疵独立撰写交付",
            color: "var(--accent)"
        },
        {
            number: "200",
            suffix: "+",
            label: "全媒体内容发布",
            desc: "独立运营公众号与视频号内容矩阵",
            color: "var(--accent-green)"
        },
        {
            number: "0-1",
            suffix: "",
            label: "VI 视觉体系构建",
            desc: "主导全案策划、视觉对接与闭环落地",
            color: "#feb47b",
            isText: true
        }
    ],

    // ---------- AI 技能舱 ----------
    skills: {
        title: "🧬 AI 时代全链路生产力实验舱",
        sections: [
            {
                title: "📊 人机协作与内容工作流",
                color: "var(--accent)",
                content: "拥抱多模态 AI 浪潮，将传统文案与视觉生产进化为"Prompt-Driven（提示词驱动）"的高效工作流。精通使用大语言模型进行高规范公文的合规性预审、经营分析报告的逻辑梳理；利用自动化工具实现多渠道媒体矩阵的敏捷迭代。"
            },
            {
                title: "🛠️ 数字化与创意工具栈",
                color: "var(--accent-green)",
                tags: [
                    { text: "✦ 精通 PPT 逻辑视觉化", highlight: true },
                    { text: "✦ 熟练 Canva 敏捷视觉", highlight: true },
                    { text: "✦ 熟练 剪映 AI 视频生产", highlight: true },
                    { text: "Excel 数据透视", highlight: false },
                    { text: "跨文化双语沟通", highlight: false },
                    { text: "风控舆情敏感度", highlight: false },
                    { text: "项目敏捷统筹", highlight: false }
                ]
            }
        ]
    },

    // ---------- 作品集 ----------
    portfolio: {
        title: "💼 核心交付作品集 (Case Studies)",
        subtitle: "💡 点击下方案例卡片，即可展开查看详细的 STAR 闭环逻辑拆解：",
        cases: [
            {
                tag: { text: "文旅大盘 · 政务公关", bg: "rgba(56,189,248,0.1)", color: "var(--accent)" },
                title: "第四届湖南省旅游发展大会 · 省级活动品牌曝光全闭环",
                summary: "如何配合省级文旅标杆大盘，完成高严肃性、高曝光度的媒体矩阵联动？",
                star: {
                    situation: "公司投资运营项目入选省旅发大会重点观赏项目，急需对接全省宣传口径，拉升行业美誉度与公信力。",
                    task: "负责全流程政务材料配合、严肃官方新闻通稿撰写、以及核心主流媒体的接待统筹。",
                    action: "建立标准化媒体素材分发包，严控宣发尺度合规性；参与撰写多篇符合政务规范的严谨通稿，点对点精准协同多家主流媒体。",
                    result: "助力该项目成为岳阳市标杆文旅夜游项目，成功斩获《湖南日报》、红网等主流权威媒体的多次深度报道，强力沉淀品牌政信力。"
                }
            },
            {
                tag: { text: "从0到1 · 品牌心智", bg: "rgba(74,222,128,0.1)", color: "var(--accent-green)" },
                title: "企业级 VI 视觉形象系统从零构建与资产沉淀",
                summary: "针对企业扩张期输出口径不一、视觉粗糙等痛点，完成低成本、高质感的视觉重构。",
                star: {
                    situation: "原品牌形象缺乏体系化规划，对外商务拓展时辨识度与专业度存在严重短板。",
                    task: "从零梳理核心价值体系，制定 VI 规范，独立策划产出公司核心物料《品牌宣传手册》。",
                    action: "独立操盘文案撰写，横向高效对接设计与供应商；深度优化视觉图层，统一全渠道输出物料口径与审美逻辑。",
                    result: "建立完整的品牌对外标准，手册高质按时交付；实现企业对外展示形象的高级感与系统化重构。"
                }
            }
        ]
    },

    // ---------- 工作经历 ----------
    experience: {
        title: "⏳ 坚实的复合型底层资产",
        jobs: [
            {
                company: "湖南省国瓴私募基金管理有限公司",
                position: "董事会干事 & 宣传干事",
                period: "2023.12 - 至今",
                description: "全面负责董事会核心公文流转、述职与经营分析汇报 PPT 动态视觉精修。同时全权掌控全公司大型商务沙龙、路演及子公司节日全案策划落地。"
            }
        ]
    },

    // ---------- 教育背景 ----------
    education: [
        {
            school: "英国莱斯特大学 (硕士)",
            degree: "金融专业",
            desc: "风险管理、消费者行为学等核心底座",
            color: "var(--accent)"
        },
        {
            school: "爱尔兰格里菲斯学院 (本科)",
            degree: "会计与金融专业",
            desc: "项目管理、战略管理与国际化视野",
            color: "var(--accent-green)"
        }
    ],

    // ---------- 联系方式 ----------
    contact: {
        title: "⚡ 极速建立连接",
        desc: "如果您正在寻找一位兼具严谨合规风控意识与敏捷 AI 生产力工具流的品牌营销专员，欢迎随时与我联系：",
        methods: [
            { icon: "📱", label: "电话连线 (Phone)", value: "180-7248-9144", href: "tel:18072489144", color: "var(--accent)" },
            { icon: "✉️", label: "电子邮箱 (Email)", value: "duyalan796@gmail.com", href: "mailto:duyalan796@gmail.com", color: "var(--accent-green)" }
        ]
    },

    // ---------- 页脚 ----------
    footer: "© 2026 DU YALAN. Powered by Human-AI Collaboration."
};

// 导出数据（兼容模块和非模块环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_DATA;
}
