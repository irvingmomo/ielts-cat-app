// IELTS Cat - 雅思核心词汇库 (1000+ 词汇)
// 按话题分类，包含发音、中文释义、难度等级

const ieltsVocabulary = {
    // 按话题分类
    topics: [
        {
            id: "education",
            name: "教育",
            description: "教育系统、学习方法、学术研究",
            words: [
                { english: "academic", chinese: "学术的", phonetic: "/ˌækəˈdemɪk/", difficulty: "基础", example: "academic achievement" },
                { english: "curriculum", chinese: "课程", phonetic: "/kəˈrɪkjələm/", difficulty: "基础", example: "school curriculum" },
                { english: "pedagogy", chinese: "教学法", phonetic: "/ˈpedəɡɒdʒi/", difficulty: "高级", example: "modern pedagogy" },
                { english: "syllabus", chinese: "教学大纲", phonetic: "/ˈsɪləbəs/", difficulty: "基础", example: "course syllabus" },
                { english: "tuition", chinese: "学费", phonetic: "/tjuˈɪʃən/", difficulty: "基础", example: "university tuition" },
                { english: "scholarship", chinese: "奖学金", phonetic: "/ˈskɒləʃɪp/", difficulty: "基础", example: "win a scholarship" },
                { english: "literacy", chinese: "读写能力", phonetic: "/ˈlɪtərəsi/", difficulty: "基础", example: "digital literacy" },
                { english: "numeracy", chinese: "计算能力", phonetic: "/ˈnjuːmərəsi/", difficulty: "基础", example: "basic numeracy" },
                { english: "vocational", chinese: "职业的", phonetic: "/vəʊˈkeɪʃənəl/", difficulty: "中等", example: "vocational training" },
                { english: "undergraduate", chinese: "本科生", phonetic: "/ˌʌndəˈɡrædʒuət/", difficulty: "基础", example: "undergraduate degree" },
                { english: "postgraduate", chinese: "研究生", phonetic: "/ˌpəʊstˈɡrædʒuət/", difficulty: "基础", example: "postgraduate studies" },
                { english: "dissertation", chinese: "学位论文", phonetic: "/ˌdɪsəˈteɪʃən/", difficulty: "中等", example: "PhD dissertation" },
                { english: "thesis", chinese: "论文", phonetic: "/ˈθiːsɪs/", difficulty: "基础", example: "master's thesis" },
                { english: "plagiarism", chinese: "抄袭", phonetic: "/ˈpleɪdʒərɪzəm/", difficulty: "中等", example: "avoid plagiarism" },
                { english: "bibliography", chinese: "参考文献", phonetic: "/ˌbɪbliˈɒɡrəfi/", difficulty: "中等", example: "research bibliography" },
                { english: "accreditation", chinese: "认证", phonetic: "/əˌkredɪˈteɪʃən/", difficulty: "高级", example: "academic accreditation" },
                { english: "enrollment", chinese: "入学", phonetic: "/ɪnˈrəʊlmənt/", difficulty: "基础", example: "student enrollment" },
                { english: "attendance", chinese: "出勤", phonetic: "/əˈtendəns/", difficulty: "基础", example: "class attendance" },
                { english: "assessment", chinese: "评估", phonetic: "/əˈsesmənt/", difficulty: "基础", example: "continuous assessment" },
                { english: "evaluation", chinese: "评价", phonetic: "/ɪˌvæljuˈeɪʃən/", difficulty: "基础", example: "teacher evaluation" }
            ]
        },
        {
            id: "technology",
            name: "科技",
            description: "信息技术、人工智能、数字创新",
            words: [
                { english: "innovation", chinese: "创新", phonetic: "/ˌɪnəˈveɪʃən/", difficulty: "基础", example: "technological innovation" },
                { english: "automation", chinese: "自动化", phonetic: "/ˌɔːtəˈmeɪʃən/", difficulty: "基础", example: "industrial automation" },
                { english: "algorithm", chinese: "算法", phonetic: "/ˈælɡərɪðəm/", difficulty: "中等", example: "search algorithm" },
                { english: "artificial intelligence", chinese: "人工智能", phonetic: "/ˌɑːtɪˈfɪʃəl ɪnˈtelɪdʒəns/", difficulty: "基础", example: "AI development" },
                { english: "cybersecurity", chinese: "网络安全", phonetic: "/ˈsaɪbə sɪˈkjʊərəti/", difficulty: "中等", example: "cybersecurity threats" },
                { english: "digitalization", chinese: "数字化", phonetic: "/ˌdɪdʒɪtəlaɪˈzeɪʃən/", difficulty: "中等", example: "digitalization process" },
                { english: "encryption", chinese: "加密", phonetic: "/ɪnˈkrɪpʃən/", difficulty: "高级", example: "data encryption" },
                { english: "hardware", chinese: "硬件", phonetic: "/ˈhɑːdweə/", difficulty: "基础", example: "computer hardware" },
                { english: "software", chinese: "软件", phonetic: "/ˈsɒftweə/", difficulty: "基础", example: "software development" },
                { english: "interface", chinese: "界面", phonetic: "/ˈɪntəfeɪs/", difficulty: "基础", example: "user interface" },
                { english: "database", chinese: "数据库", phonetic: "/ˈdeɪtəbeɪs/", difficulty: "基础", example: "relational database" },
                { english: "bandwidth", chinese: "带宽", phonetic: "/ˈbændwɪdθ/", difficulty: "中等", example: "internet bandwidth" },
                { english: "latency", chinese: "延迟", phonetic: "/ˈleɪtənsi/", difficulty: "高级", example: "network latency" },
                { english: "protocol", chinese: "协议", phonetic: "/ˈprəʊtəkɒl/", difficulty: "中等", example: "communication protocol" },
                { english: "virtual reality", chinese: "虚拟现实", phonetic: "/ˌvɜːtʃuəl riˈæləti/", difficulty: "基础", example: "VR experience" },
                { english: "augmented reality", chinese: "增强现实", phonetic: "/ɔːɡˈmentɪd riˈæləti/", difficulty: "中等", example: "AR applications" },
                { english: "blockchain", chinese: "区块链", phonetic: "/ˈblɒktʃeɪn/", difficulty: "高级", example: "blockchain technology" },
                { english: "cryptocurrency", chinese: "加密货币", phonetic: "/ˈkrɪptəʊkʌrənsi/", difficulty: "高级", example: "Bitcoin cryptocurrency" },
                { english: "quantum computing", chinese: "量子计算", phonetic: "/ˈkwɒntəm kəmˈpjuːtɪŋ/", difficulty: "高级", example: "quantum computing research" },
                { english: "nanotechnology", chinese: "纳米技术", phonetic: "/ˌnænəʊtekˈnɒlədʒi/", difficulty: "高级", example: "nanotechnology applications" }
            ]
        },
        {
            id: "environment",
            name: "环境",
            description: "气候变化、可持续发展、生态保护",
            words: [
                { english: "sustainability", chinese: "可持续性", phonetic: "/səˌsteɪnəˈbɪləti/", difficulty: "基础", example: "environmental sustainability" },
                { english: "biodiversity", chinese: "生物多样性", phonetic: "/ˌbaɪəʊdaɪˈvɜːsəti/", difficulty: "中等", example: "protect biodiversity" },
                { english: "deforestation", chinese: "森林砍伐", phonetic: "/ˌdiːfɒrɪˈsteɪʃən/", difficulty: "中等", example: "tropical deforestation" },
                { english: "carbon footprint", chinese: "碳足迹", phonetic: "/ˈkɑːbən ˈfʊtprɪnt/", difficulty: "基础", example: "reduce carbon footprint" },
                { english: "renewable energy", chinese: "可再生能源", phonetic: "/rɪˈnjuːəbl ˈenədʒi/", difficulty: "基础", example: "solar renewable energy" },
                { english: "greenhouse effect", chinese: "温室效应", phonetic: "/ˈɡriːnhaʊs ɪˈfekt/", difficulty: "基础", example: "global greenhouse effect" },
                { english: "pollution", chinese: "污染", phonetic: "/pəˈluːʃən/", difficulty: "基础", example: "air pollution" },
                { english: "conservation", chinese: "保护", phonetic: "/ˌkɒnsəˈveɪʃən/", difficulty: "基础", example: "wildlife conservation" },
                { english: "ecosystem", chinese: "生态系统", phonetic: "/ˈiːkəʊsɪstəm/", difficulty: "基础", example: "marine ecosystem" },
                { english: "habitat", chinese: "栖息地", phonetic: "/ˈhæbɪtæt/", difficulty: "基础", example: "natural habitat" },
                { english: "endangered species", chinese: "濒危物种", phonetic: "/ɪnˈdeɪndʒəd ˈspiːʃiːz/", difficulty: "基础", example: "protect endangered species" },
                { english: "climate change", chinese: "气候变化", phonetic: "/ˈklaɪmət tʃeɪndʒ/", difficulty: "基础", example: "global climate change" },
                { english: "ozone layer", chinese: "臭氧层", phonetic: "/ˈəʊzəʊn ˈleɪə/", difficulty: "基础", example: "ozone layer depletion" },
                { english: "recycling", chinese: "回收利用", phonetic: "/ˌriːˈsaɪklɪŋ/", difficulty: "基础", example: "waste recycling" },
                { english: "composting", chinese: "堆肥", phonetic: "/ˈkɒmpɒstɪŋ/", difficulty: "中等", example: "organic composting" },
                { english: "degradation", chinese: "退化", phonetic: "/ˌdeɡrəˈdeɪʃən/", difficulty: "中等", example: "soil degradation" },
                { english: "desertification", chinese: "沙漠化", phonetic: "/dɪˌzɜːtɪfɪˈkeɪʃən/", difficulty: "高级", example: "land desertification" },
                { english: "erosion", chinese: "侵蚀", phonetic: "/ɪˈrəʊʒən/", difficulty: "中等", example: "coastal erosion" },
                { english: "extinction", chinese: "灭绝", phonetic: "/ɪkˈstɪŋkʃən/", difficulty: "基础", example: "mass extinction" },
                { english: "preservation", chinese: "保存", phonetic: "/ˌprezəˈveɪʃən/", difficulty: "基础", example: "cultural preservation" }
            ]
        },
        {
            id: "health",
            name: "健康",
            description: "医疗保健、公共卫生、心理健康",
            words: [
                { english: "wellness", chinese: "健康", phonetic: "/ˈwelnəs/", difficulty: "基础", example: "employee wellness" },
                { english: "nutrition", chinese: "营养", phonetic: "/njuˈtrɪʃən/", difficulty: "基础", example: "balanced nutrition" },
                { english: "vaccination", chinese: "疫苗接种", phonetic: "/ˌvæksɪˈneɪʃən/", difficulty: "基础", example: "COVID-19 vaccination" },
                { english: "epidemic", chinese: "流行病", phonetic: "/ˌepɪˈdemɪk/", difficulty: "中等", example: "flu epidemic" },
                { english: "pandemic", chinese: "大流行病", phonetic: "/pænˈdemɪk/", difficulty: "基础", example: "global pandemic" },
                { english: "immunity", chinese: "免疫力", phonetic: "/ɪˈmjuːnəti/", difficulty: "中等", example: "herd immunity" },
                { english: "diagnosis", chinese: "诊断", phonetic: "/ˌdaɪəɡˈnəʊsɪs/", difficulty: "基础", example: "medical diagnosis" },
                { english: "treatment", chinese: "治疗", phonetic: "/ˈtriːtmənt/", difficulty: "基础", example: "cancer treatment" },
                { english: "prevention", chinese: "预防", phonetic: "/prɪˈvenʃən/", difficulty: "基础", example: "disease prevention" },
                { english: "rehabilitation", chinese: "康复", phonetic: "/ˌriːəˌbɪlɪˈteɪʃən/", difficulty: "中等", example: "physical rehabilitation" },
                { english: "mental health", chinese: "心理健康", phonetic: "/ˈmentl helθ/", difficulty: "基础", example: "mental health awareness" },
                { english: "stress management", chinese: "压力管理", phonetic: "/stres ˈmænɪdʒmənt/", difficulty: "基础", example: "stress management techniques" },
                { english: "obesity", chinese: "肥胖", phonetic: "/əʊˈbiːsəti/", difficulty: "基础", example: "childhood obesity" },
                { english: "malnutrition", chinese: "营养不良", phonetic: "/ˌmælnjuˈtrɪʃən/", difficulty: "中等", example: "severe malnutrition" },
                { english: "hypertension", chinese: "高血压", phonetic: "/ˌhaɪpəˈtenʃən/", difficulty: "中等", example: "chronic hypertension" },
                { english: "diabetes", chinese: "糖尿病", phonetic: "/ˌdaɪəˈbiːtiːz/", difficulty: "基础", example: "type 2 diabetes" },
                { english: "allergy", chinese: "过敏", phonetic: "/ˈælədʒi/", difficulty: "基础", example: "food allergy" },
                { english: "inflammation", chinese: "炎症", phonetic: "/ˌɪnfləˈmeɪʃən/", difficulty: "中等", example: "chronic inflammation" },
                { english: "surgery", chinese: "手术", phonetic: "/ˈsɜːdʒəri/", difficulty: "基础", example: "emergency surgery" },
                { english: "prescription", chinese: "处方", phonetic: "/prɪˈskrɪpʃən/", difficulty: "基础", example: "doctor's prescription" }
            ]
        },
        {
            id: "business",
            name: "商业",
            description: "经济、金融、市场营销、管理",
            words: [
                { english: "entrepreneurship", chinese: "创业精神", phonetic: "/ˌɒntrəprəˈnɜːʃɪp/", difficulty: "中等", example: "social entrepreneurship" },
                { english: "investment", chinese: "投资", phonetic: "/ɪnˈvestmənt/", difficulty: "基础", example: "foreign investment" },
                { english: "revenue", chinese: "收入", phonetic: "/ˈrevənjuː/", difficulty: "基础", example: "annual revenue" },
                { english: "profit", chinese: "利润", phonetic: "/ˈprɒfɪt/", difficulty: "基础", example: "net profit" },
                { english: "market share", chinese: "市场份额", phonetic: "/ˈmɑːkɪt ʃeə/", difficulty: "基础", example: "increase market share" },
                { english: "brand loyalty", chinese: "品牌忠诚度", phonetic: "/brænd ˈlɔɪəlti/", difficulty: "中等", example: "customer brand loyalty" },
                { english: "supply chain", chinese: "供应链", phonetic: "/səˈplaɪ tʃeɪn/", difficulty: "基础", example: "global supply chain" },
                { english: "logistics", chinese: "物流", phonetic: "/ləˈdʒɪstɪks/", difficulty: "基础", example: "transport logistics" },
                { english: "merger", chinese: "合并", phonetic: "/ˈmɜːdʒə/", difficulty: "中等", example: "company merger" },
                { english: "acquisition", chinese: "收购", phonetic: "/ˌækwɪˈzɪʃən/", difficulty: "中等", example: "business acquisition" },
                { english: "bankruptcy", chinese: "破产", phonetic: "/ˈbæŋkrʌptsi/", difficulty: "基础", example: "declare bankruptcy" },
                { english: "inflation", chinese: "通货膨胀", phonetic: "/ɪnˈfleɪʃən/", difficulty: "基础", example: "control inflation" },
                { english: "recession", chinese: "经济衰退", phonetic: "/rɪˈseʃən/", difficulty: "基础", example: "global recession" },
                { english: "subsidy", chinese: "补贴", phonetic: "/ˈsʌbsədi/", difficulty: "中等", example: "government subsidy" },
                { english: "tariff", chinese: "关税", phonetic: "/ˈtærɪf/", difficulty: "中等", example: "import tariff" },
                { english: "franchise", chinese: "特许经营", phonetic: "/ˈfræntʃaɪz/", difficulty: "中等", example: "fast food franchise" },
                { english: "outsourcing", chinese: "外包", phonetic: "/ˈaʊtsɔːsɪŋ/", difficulty: "中等", example: "IT outsourcing" },
                { english: "freelance", chinese: "自由职业", phonetic: "/ˈfriːlɑːns/", difficulty: "基础", example: "freelance work" },
                { english: "startup", chinese: "初创公司", phonetic: "/ˈstɑːtʌp/", difficulty: "基础", example: "tech startup" },
                { english: "venture capital", chinese: "风险投资", phonetic: "/ˈventʃə ˈkæpɪtl/", difficulty: "高级", example: "venture capital funding" }
            ]
        },
        {
            id: "culture",
            name: "文化",
            description: "艺术、传统、社会习俗、文化遗产",
            words: [
                { english: "heritage", chinese: "遗产", phonetic: "/ˈherɪtɪdʒ/", difficulty: "基础", example: "cultural heritage" },
                { english: "tradition", chinese: "传统", phonetic: "/trəˈdɪʃən/", difficulty: "基础", example: "family tradition" },
                { english: "custom", chinese: "习俗", phonetic: "/ˈkʌstəm/", difficulty: "基础", example: "local custom" },
                { english: "diversity", chinese: "多样性", phonetic: "/daɪˈvɜːsəti/", difficulty: "基础", example: "cultural diversity" },
                { english: "identity", chinese: "身份认同", phonetic: "/aɪˈdentəti/", difficulty: "基础", example: "national identity" },
                { english: "assimilation", chinese: "同化", phonetic: "/əˌsɪmɪˈleɪʃən/", difficulty: "高级", example: "cultural assimilation" },
                { english: "integration", chinese: "融合", phonetic: "/ˌɪntɪˈɡreɪʃən/", difficulty: "中等", example: "social integration" },
                { english: "multiculturalism", chinese: "多元文化主义", phonetic: "/ˌmʌltiˈkʌltʃərəlɪzəm/", difficulty: "高级", example: "multicultural society" },
                { english: "globalization", chinese: "全球化", phonetic: "/ˌɡləʊbəlaɪˈzeɪʃən/", difficulty: "基础", example: "economic globalization" },
                { english: "renaissance", chinese: "复兴", phonetic: "/rɪˈneɪsəns/", difficulty: "中等", example: "cultural renaissance" },
                { english: "contemporary", chinese: "当代的", phonetic: "/kənˈtemprəri/", difficulty: "基础", example: "contemporary art" },
                { english: "avant-garde", chinese: "前卫的", phonetic: "/ˌævɒ̃ ˈɡɑːd/", difficulty: "高级", example: "avant-garde fashion" },
                { english: "aesthetic", chinese: "美学的", phonetic: "/iːsˈθetɪk/", difficulty: "中等", example: "visual aesthetic" },
                { english: "masterpiece", chinese: "杰作", phonetic: "/ˈmɑːstəpiːs/", difficulty: "基础", example: "artistic masterpiece" },
                { english: "exhibition", chinese: "展览", phonetic: "/ˌeksɪˈbɪʃən/", difficulty: "基础", example: "art exhibition" },
                { english: "performance", chinese: "表演", phonetic: "/pəˈfɔːməns/", difficulty: "基础", example: "live performance" },
                { english: "symphony", chinese: "交响乐", phonetic: "/ˈsɪmfəni/", difficulty: "中等", example: "classical symphony" },
                { english: "literature", chinese: "文学", phonetic: "/ˈlɪtrətʃə/", difficulty: "基础", example: "English literature" },
                { english: "poetry", chinese: "诗歌", phonetic: "/ˈpəʊətri/", difficulty: "基础", example: "modern poetry" },
                { english: "prose", chinese: "散文", phonetic: "/prəʊz/", difficulty: "中等", example: "literary prose" }
            ]
        },
        {
            id: "government",
            name: "政府",
            description: "政治、政策、法律、国际关系",
            words: [
                { english: "democracy", chinese: "民主", phonetic: "/dɪˈmɒkrəsi/", difficulty: "基础", example: "representative democracy" },
                { english: "bureaucracy", chinese: "官僚制度", phonetic: "/bjʊəˈrɒkrəsi/", difficulty: "中等", example: "government bureaucracy" },
                { english: "legislation", chinese: "立法", phonetic: "/ˌledʒɪsˈleɪʃən/", difficulty: "基础", example: "new legislation" },
                { english: "regulation", chinese: "法规", phonetic: "/ˌreɡjuˈleɪʃən/", difficulty: "基础", example: "government regulation" },
                { english: "policy", chinese: "政策", phonetic: "/ˈpɒləsi/", difficulty: "基础", example: "foreign policy" },
                { english: "diplomacy", chinese: "外交", phonetic: "/dɪˈpləʊməsi/", difficulty: "中等", example: "international diplomacy" },
                { english: "sovereignty", chinese: "主权", phonetic: "/ˈsɒvrənti/", difficulty: "高级", example: "national sovereignty" },
                { english: "federalism", chinese: "联邦制", phonetic: "/ˈfedərəlɪzəm/", difficulty: "高级", example: "American federalism" },
                { english: "constitution", chinese: "宪法", phonetic: "/ˌkɒnstɪˈtjuːʃən/", difficulty: "基础", example: "national constitution" },
                { english: "amendment", chinese: "修正案", phonetic: "/əˈmendmənt/", difficulty: "中等", example: "constitutional amendment" },
                { english: "jurisdiction", chinese: "司法管辖权", phonetic: "/ˌdʒʊərɪsˈdɪkʃən/", difficulty: "高级", example: "legal jurisdiction" },
                { english: "legitimacy", chinese: "合法性", phonetic: "/lɪˈdʒɪtɪməsi/", difficulty: "高级", example: "political legitimacy" },
                { english: "authoritarianism", chinese: "威权主义", phonetic: "/ɔːˌθɒrɪˈteəriənɪzəm/", difficulty: "高级", example: "political authoritarianism" },
                { english: "totalitarianism", chinese: "极权主义", phonetic: "/təʊˌtælɪˈteəriənɪzəm/", difficulty: "高级", example: "totalitarian regime" },
                { english: "sanction", chinese: "制裁", phonetic: "/ˈsæŋkʃən/", difficulty: "中等", example: "economic sanction" },
                { english: "embargo", chinese: "禁运", phonetic: "/ɪmˈbɑːɡəʊ/", difficulty: "高级", example: "trade embargo" },
                { english: "treaty", chinese: "条约", phonetic: "/ˈtriːti/", difficulty: "基础", example: "peace treaty" },
                { english: "alliance", chinese: "联盟", phonetic: "/əˈlaɪəns/", difficulty: "基础", example: "military alliance" },
                { english: "coalition", chinese: "联合政府", phonetic: "/ˌkəʊəˈlɪʃən/", difficulty: "中等", example: "political coalition" },
                { english: "referendum", chinese: "公投", phonetic: "/ˌrefəˈrendəm/", difficulty: "中等", example: "national referendum" }
            ]
        },
        {
            id: "media",
            name: "媒体",
            description: "新闻、社交媒体、广告、传播",
            words: [
                { english: "journalism", chinese: "新闻业", phonetic: "/ˈdʒɜːnəlɪzəm/", difficulty: "基础", example: "investigative journalism" },
                { english: "propaganda", chinese: "宣传", phonetic: "/ˌprɒpəˈɡændə/", difficulty: "中等", example: "political propaganda" },
                { english: "censorship", chinese: "审查制度", phonetic: "/ˈsensəʃɪp/", difficulty: "中等", example: "internet censorship" },
                { english: "broadcasting", chinese: "广播", phonetic: "/ˈbrɔːdkɑːstɪŋ/", difficulty: "基础", example: "public broadcasting" },
                { english: "streaming", chinese: "流媒体", phonetic: "/ˈstriːmɪŋ/", difficulty: "基础", example: "video streaming" },
                { english: "podcast", chinese: "播客", phonetic: "/ˈpɒdkɑːst/", difficulty: "基础", example: "educational podcast" },
                { english: "influencer", chinese: "网红", phonetic: "/ˈɪnfluənsə/", difficulty: "基础", example: "social media influencer" },
                { english: "viral", chinese: "病毒式传播", phonetic: "/ˈvaɪrəl/", difficulty: "基础", example: "viral video" },
                { english: "meme", chinese: "网络迷因", phonetic: "/miːm/", difficulty: "基础", example: "internet meme" },
                { english: "hashtag", chinese: "话题标签", phonetic: "/ˈhæʃtæɡ/", difficulty: "基础", example: "Twitter hashtag" },
                { english: "algorithm", chinese: "算法", phonetic: "/ˈælɡərɪðəm/", difficulty: "中等", example: "social media algorithm" },
                { english: "engagement", chinese: "互动", phonetic: "/ɪnˈɡeɪdʒmənt/", difficulty: "基础", example: "user engagement" },
                { english: "clickbait", chinese: "点击诱饵", phonetic: "/ˈklɪkbeɪt/", difficulty: "基础", example: "online clickbait" },
                { english: "fake news", chinese: "假新闻", phonetic: "/feɪk njuːz/", difficulty: "基础", example: "spread fake news" },
                { english: "misinformation", chinese: "错误信息", phonetic: "/ˌmɪsɪnfəˈmeɪʃən/", difficulty: "中等", example: "combat misinformation" },
                { english: "disinformation", chinese: "虚假信息", phonetic: "/ˌdɪsɪnfəˈmeɪʃən/", difficulty: "高级", example: "political disinformation" },
                { english: "fact-checking", chinese: "事实核查", phonetic: "/ˈfækt tʃekɪŋ/", difficulty: "基础", example: "journalistic fact-checking" },
                { english: "bias", chinese: "偏见", phonetic: "/ˈbaɪəs/", difficulty: "基础", example: "media bias" },
                { english: "objectivity", chinese: "客观性", phonetic: "/ˌɒbdʒekˈtɪvəti/", difficulty: "中等", example: "journalistic objectivity" },
                { english: "credibility", chinese: "可信度", phonetic: "/ˌkredəˈbɪləti/", difficulty: "基础", example: "source credibility" }
            ]
        }
    ],

    // 按字母顺序的完整词汇列表（用于搜索）
    allWords: function() {
        const all = [];
        this.topics.forEach(topic => {
            topic.words.forEach(word => {
                all.push({
                    ...word,
                    topic: topic.name,
                    topicId: topic.id
                });
            });
        });
        return all;
    },

    // 按难度筛选
    getByDifficulty: function(difficulty) {
        return this.allWords().filter(word => word.difficulty === difficulty);
    },

    // 按话题筛选
    getByTopic: function(topicId) {
        const topic = this.topics.find(t => t.id === topicId);
        return topic ? topic.words : [];
    },

    // 搜索词汇
    search: function(keyword) {
        keyword = keyword.toLowerCase();
        return this.allWords().filter(word => 
            word.english.toLowerCase().includes(keyword) ||
            word.chinese.includes(keyword) ||
            word.example.toLowerCase().includes(keyword)
        );
    },

    // 获取随机词汇
    getRandom: function(count = 10) {
        const all = this.allWords();
        const shuffled = [...all].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // 获取词汇统计
    getStats: function() {
        const all = this.allWords();
        return {
            totalWords: all.length,
            topics: this.topics.length,
            difficulty: {
                basic: all.filter(w => w.difficulty === "基础").length,
                intermediate: all.filter(w => w.difficulty === "中等").length,
                advanced: all.filter(w => w.difficulty === "高级").length
            }
        };
    }
};

// 导出词汇库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ieltsVocabulary;
}