// 雅思猫应用 - 主JavaScript文件

// ==================== 数据定义 ====================

// 雅思词汇数据 (200+词汇)
const vocabulary = [
    // 学术词汇 (50个)
    { english: "accommodation", chinese: "住宿", phonetic: "/əˌkɒməˈdeɪʃən/", category: "学术", difficulty: "中等" },
    { english: "achievement", chinese: "成就", phonetic: "/əˈtʃiːvmənt/", category: "学术", difficulty: "简单" },
    { english: "appropriate", chinese: "适当的", phonetic: "/əˈprəʊpriət/", category: "学术", difficulty: "中等" },
    { english: "assessment", chinese: "评估", phonetic: "/əˈsesmənt/", category: "学术", difficulty: "中等" },
    { english: "assumption", chinese: "假设", phonetic: "/əˈsʌmpʃən/", category: "学术", difficulty: "困难" },
    { english: "atmosphere", chinese: "气氛", phonetic: "/ˈætməsfɪə/", category: "学术", difficulty: "中等" },
    { english: "available", chinese: "可用的", phonetic: "/əˈveɪləbl/", category: "学术", difficulty: "简单" },
    { english: "beneficial", chinese: "有益的", phonetic: "/ˌbenɪˈfɪʃəl/", category: "学术", difficulty: "中等" },
    { english: "characteristic", chinese: "特征", phonetic: "/ˌkærəktəˈrɪstɪk/", category: "学术", difficulty: "困难" },
    { english: "circumstance", chinese: "环境", phonetic: "/ˈsɜːkəmstəns/", category: "学术", difficulty: "中等" },
    { english: "communication", chinese: "沟通", phonetic: "/kəˌmjuːnɪˈkeɪʃən/", category: "学术", difficulty: "中等" },
    { english: "comparison", chinese: "比较", phonetic: "/kəmˈpærɪsən/", category: "学术", difficulty: "中等" },
    { english: "competition", chinese: "竞争", phonetic: "/ˌkɒmpəˈtɪʃən/", category: "学术", difficulty: "中等" },
    { english: "conclusion", chinese: "结论", phonetic: "/kənˈkluːʒən/", category: "学术", difficulty: "中等" },
    { english: "consequence", chinese: "后果", phonetic: "/ˈkɒnsɪkwəns/", category: "学术", difficulty: "困难" },
    { english: "consideration", chinese: "考虑", phonetic: "/kənˌsɪdəˈreɪʃən/", category: "学术", difficulty: "中等" },
    { english: "contemporary", chinese: "当代的", phonetic: "/kənˈtemprəri/", category: "学术", difficulty: "困难" },
    { english: "contribution", chinese: "贡献", phonetic: "/ˌkɒntrɪˈbjuːʃən/", category: "学术", difficulty: "中等" },
    { english: "conversation", chinese: "对话", phonetic: "/ˌkɒnvəˈseɪʃən/", category: "学术", difficulty: "简单" },
    { english: "cooperation", chinese: "合作", phonetic: "/kəʊˌɒpəˈreɪʃən/", category: "学术", difficulty: "中等" },
    
    // 教育词汇 (30个)
    { english: "education", chinese: "教育", phonetic: "/ˌedʒuˈkeɪʃən/", category: "教育", difficulty: "简单" },
    { english: "university", chinese: "大学", phonetic: "/ˌjuːnɪˈvɜːsəti/", category: "教育", difficulty: "简单" },
    { english: "knowledge", chinese: "知识", phonetic: "/ˈnɒlɪdʒ/", category: "教育", difficulty: "简单" },
    { english: "learning", chinese: "学习", phonetic: "/ˈlɜːnɪŋ/", category: "教育", difficulty: "简单" },
    { english: "teaching", chinese: "教学", phonetic: "/ˈtiːtʃɪŋ/", category: "教育", difficulty: "简单" },
    { english: "research", chinese: "研究", phonetic: "/rɪˈsɜːtʃ/", category: "教育", difficulty: "中等" },
    { english: "academic", chinese: "学术的", phonetic: "/ˌækəˈdemɪk/", category: "教育", difficulty: "中等" },
    { english: "curriculum", chinese: "课程", phonetic: "/kəˈrɪkjələm/", category: "教育", difficulty: "困难" },
    { english: "qualification", chinese: "资格", phonetic: "/ˌkwɒlɪfɪˈkeɪʃən/", category: "教育", difficulty: "中等" },
    { english: "scholarship", chinese: "奖学金", phonetic: "/ˈskɒləʃɪp/", category: "教育", difficulty: "中等" },
    
    // 科技词汇 (30个)
    { english: "technology", chinese: "技术", phonetic: "/tekˈnɒlədʒi/", category: "科技", difficulty: "简单" },
    { english: "innovation", chinese: "创新", phonetic: "/ˌɪnəˈveɪʃən/", category: "科技", difficulty: "中等" },
    { english: "development", chinese: "发展", phonetic: "/dɪˈveləpmənt/", category: "科技", difficulty: "简单" },
    { english: "application", chinese: "应用", phonetic: "/ˌæplɪˈkeɪʃən/", category: "科技", difficulty: "中等" },
    { english: "digital", chinese: "数字的", phonetic: "/ˈdɪdʒɪtl/", category: "科技", difficulty: "简单" },
    { english: "software", chinese: "软件", phonetic: "/ˈsɒftweə/", category: "科技", difficulty: "简单" },
    { english: "hardware", chinese: "硬件", phonetic: "/ˈhɑːdweə/", category: "科技", difficulty: "简单" },
    { english: "network", chinese: "网络", phonetic: "/ˈnetwɜːk/", category: "科技", difficulty: "简单" },
    { english: "security", chinese: "安全", phonetic: "/sɪˈkjʊərəti/", category: "科技", difficulty: "中等" },
    { english: "artificial", chinese: "人工的", phonetic: "/ˌɑːtɪˈfɪʃəl/", category: "科技", difficulty: "困难" },
    
    // 环境词汇 (30个)
    { english: "environment", chinese: "环境", phonetic: "/ɪnˈvaɪrənmənt/", category: "环境", difficulty: "中等" },
    { english: "pollution", chinese: "污染", phonetic: "/pəˈluːʃən/", category: "环境", difficulty: "中等" },
    { english: "sustainable", chinese: "可持续的", phonetic: "/səˈsteɪnəbl/", category: "环境", difficulty: "困难" },
    { english: "conservation", chinese: "保护", phonetic: "/ˌkɒnsəˈveɪʃən/", category: "环境", difficulty: "困难" },
    { english: "biodiversity", chinese: "生物多样性", phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/", category: "环境", difficulty: "困难" },
    { english: "ecosystem", chinese: "生态系统", phonetic: "/ˈiːkəʊsɪstəm/", category: "环境", difficulty: "困难" },
    { english: "renewable", chinese: "可再生的", phonetic: "/rɪˈnjuːəbl/", category: "环境", difficulty: "中等" },
    { english: "climate", chinese: "气候", phonetic: "/ˈklaɪmət/", category: "环境", difficulty: "中等" },
    { english: "emission", chinese: "排放", phonetic: "/ɪˈmɪʃən/", category: "环境", difficulty: "中等" },
    { english: "recycling", chinese: "回收", phonetic: "/ˌriːˈsaɪklɪŋ/", category: "环境", difficulty: "中等" },
    
    // 经济词汇 (30个)
    { english: "economy", chinese: "经济", phonetic: "/ɪˈkɒnəmi/", category: "经济", difficulty: "中等" },
    { english: "investment", chinese: "投资", phonetic: "/ɪnˈvestmənt/", category: "经济", difficulty: "中等" },
    { english: "inflation", chinese: "通货膨胀", phonetic: "/ɪnˈfleɪʃən/", category: "经济", difficulty: "困难" },
    { english: "globalization", chinese: "全球化", phonetic: "/ˌɡləʊbəlaɪˈzeɪʃən/", category: "经济", difficulty: "困难" },
    { english: "consumer", chinese: "消费者", phonetic: "/kənˈsjuːmə/", category: "经济", difficulty: "中等" },
    { english: "productivity", chinese: "生产力", phonetic: "/ˌprɒdʌkˈtɪvəti/", category: "经济", difficulty: "困难" },
    { english: "unemployment", chinese: "失业", phonetic: "/ˌʌnɪmˈplɔɪmənt/", category: "经济", difficulty: "困难" },
    { english: "infrastructure", chinese: "基础设施", phonetic: "/ˈɪnfrəstrʌktʃə/", category: "经济", difficulty: "困难" },
    { english: "entrepreneur", chinese: "企业家", phonetic: "/ˌɒntrəprəˈnɜː/", category: "经济", difficulty: "困难" },
    { english: "competitiveness", chinese: "竞争力", phonetic: "/kəmˈpetətɪvnəs/", category: "经济", difficulty: "困难" },
    
    // 社会词汇 (30个)
    { english: "society", chinese: "社会", phonetic: "/səˈsaɪəti/", category: "社会", difficulty: "简单" },
    { english: "community", chinese: "社区", phonetic: "/kəˈmjuːnəti/", category: "社会", difficulty: "简单" },
    { english: "population", chinese: "人口", phonetic: "/ˌpɒpjuˈleɪʃən/", category: "社会", difficulty: "中等" },
    { english: "diversity", chinese: "多样性", phonetic: "/daɪˈvɜːsəti/", category: "社会", difficulty: "中等" },
    { english: "equality", chinese: "平等", phonetic: "/ɪˈkwɒləti/", category: "社会", difficulty: "中等" },
    { english: "justice", chinese: "正义", phonetic: "/ˈdʒʌstɪs/", category: "社会", difficulty: "中等" },
    { english: "democracy", chinese: "民主", phonetic: "/dɪˈmɒkrəsi/", category: "社会", difficulty: "困难" },
    { english: "government", chinese: "政府", phonetic: "/ˈɡʌvənmənt/", category: "社会", difficulty: "简单" },
    { english: "policy", chinese: "政策", phonetic: "/ˈpɒləsi/", category: "社会", difficulty: "中等" },
    { english: "welfare", chinese: "福利", phonetic: "/ˈwelfeə/", category: "社会", difficulty: "中等" }
];

// 雅思句子数据 (21个)
const sentences = [
    { english: "It is widely believed that...", chinese: "人们普遍认为...", category: "观点表达", difficulty: "简单" },
    { english: "From my perspective, ...", chinese: "从我的角度来看，...", category: "观点表达", difficulty: "简单" },
    { english: "I am convinced that...", chinese: "我确信...", category: "观点表达", difficulty: "中等" },
    { english: "The data clearly shows that...", chinese: "数据清楚地表明...", category: "数据描述", difficulty: "中等" },
    { english: "According to the statistics, ...", chinese: "根据统计数据，...", category: "数据描述", difficulty: "中等" },
    { english: "There has been a significant increase in...", chinese: "在...方面有显著增长", category: "数据描述", difficulty: "困难" },
    { english: "In contrast to..., ...", chinese: "与...相比，...", category: "对比表达", difficulty: "中等" },
    { english: "Whereas A is..., B is...", chinese: "虽然A是...，但B是...", category: "对比表达", difficulty: "困难" },
    { english: "On the one hand..., on the other hand...", chinese: "一方面...，另一方面...", category: "对比表达", difficulty: "中等" },
    { english: "This can be attributed to...", chinese: "这可以归因于...", category: "原因结果", difficulty: "困难" },
    { english: "As a result of..., ...", chinese: "作为...的结果，...", category: "原因结果", difficulty: "中等" },
    { english: "Consequently, ...", chinese: "因此，...", category: "原因结果", difficulty: "中等" },
    { english: "One possible solution is...", chinese: "一个可能的解决方案是...", category: "解决方案", difficulty: "中等" },
    { english: "To address this issue, ...", chinese: "为了解决这个问题，...", category: "解决方案", difficulty: "中等" },
    { english: "It would be advisable to...", chinese: "建议...", category: "解决方案", difficulty: "困难" },
    { english: "In conclusion, it can be said that...", chinese: "总之，可以说...", category: "总结", difficulty: "简单" },
    { english: "To sum up, ...", chinese: "总而言之，...", category: "总结", difficulty: "简单" },
    { english: "Overall, ...", chinese: "总体而言，...", category: "总结", difficulty: "简单" },
    { english: "From an academic perspective...", chinese: "从学术角度来看...", category: "学术表达", difficulty: "困难" },
    { english: "In scholarly terms, ...", chinese: "用学术术语来说，...", category: "学术表达", difficulty: "困难" },
    { english: "The literature suggests that...", chinese: "文献表明...", category: "学术表达", difficulty: "困难" }
];

// 音标数据 (43个)
const phonetics = [
    // 单元音 (12个)
    { symbol: "/iː/", example: "see", category: "单元音", difficulty: "简单", description: "长元音，舌前部抬高" },
    { symbol: "/ɪ/", example: "sit", category: "单元音", difficulty: "简单", description: "短元音，舌位稍低" },
    { symbol: "/e/", example: "bed", category: "单元音", difficulty: "简单", description: "短元音，口型中等" },
    { symbol: "/æ/", example: "cat", category: "单元音", difficulty: "简单", description: "短元音，口型较大" },
    { symbol: "/ɑː/", example: "car", category: "单元音", difficulty: "中等", description: "长元音，口型最大" },
    { symbol: "/ɔː/", example: "saw", category: "单元音", difficulty: "中等", description: "长元音，圆唇" },
    { symbol: "/ʊ/", example: "put", category: "单元音", difficulty: "中等", description: "短元音，圆唇" },
    { symbol: "/uː/", example: "too", category: "单元音", difficulty: "中等", description: "长元音，圆唇最紧" },
    { symbol: "/ʌ/", example: "cup", category: "单元音", difficulty: "中等", description: "短元音，中性唇形" },
    { symbol: "/ɜː/", example: "bird", category: "单元音", difficulty: "困难", description: "长元音，舌中部抬高" },
    { symbol: "/ə/", example: "about", category: "单元音", difficulty: "困难", description: "短元音，最放松" },
    
    // 双元音 (8个)
    { symbol: "/eɪ/", example: "day", category: "双元音", difficulty: "简单", description: "从/e/滑向/ɪ/" },
    { symbol: "/aɪ/", example: "my", category: "双元音", difficulty: "简单", description: "从/a/滑向/ɪ/" },
    { symbol: "/ɔɪ/", example: "boy", category: "双元音", difficulty: "中等",