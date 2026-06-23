export const profile = {
  name: 'Renxiang (Ricardo) Chu',
  handle: 'irrrricardo',
  email: 'r1card0chu1208@gmail.com',
  wechat: 'CRX813655433',
  github: 'https://github.com/irrrricardo',
  linkedin: 'https://www.linkedin.com/in/renxiang-chu-386322333/',
  resume: '/resume',
  resumePdf: '/resume.pdf',
  location: {
    en: 'Peking University, Beijing',
    zh: '北京大学，北京',
  },
  affiliation: {
    en: 'Basic Medical Sciences, Peking University Health Science Center; Dual Degree in Economics, National School of Development',
    zh: '北京大学医学部基础医学专业；国家发展研究院经济学双学位',
  },
  headline: {
    en: 'I study how medical images can reflect aging, disease heterogeneity, and measurable physiology.',
    zh: '我关注医学影像如何反映衰老、疾病异质性和可测量的生理状态。',
  },
  intro: {
    en: 'I am an undergraduate at Peking University majoring in Basic Medical Sciences and pursuing a dual degree in Economics. My current work centers on retinal imaging, biological aging, and representation learning, with an emphasis on models that can be checked against clinical phenotypes rather than treated as black boxes.',
    zh: '我目前就读于北京大学医学部基础医学专业，并在国家发展研究院修读经济学双学位。现在的研究主要围绕视网膜影像、生物年龄与表征学习展开，更关心模型结果能否回到临床表型和生理机制中被检验，而不是停留在黑箱预测。',
  },
  status: {
    en: 'Undergraduate research | Basic Medical Sciences',
    zh: '本科生科研 | 基础医学',
  },
};

export const quickStats = [
  {
    value: 'Basic Medicine',
    label: {
      en: 'Primary training',
      zh: '主修方向',
    },
  },
  {
    value: 'Economics',
    label: {
      en: 'Dual degree',
      zh: '双学位',
    },
  },
  {
    value: 'PODE',
    label: {
      en: 'Public research code',
      zh: '公开研究代码',
    },
  },
];

export const researchDirections = [
  {
    title: {
      en: 'Retinal Imaging and Biological Age',
      zh: '视网膜影像与生物年龄',
    },
    description: {
      en: 'Using fundus images to study aging-related signals, disease-associated deviations, and how visual features connect with measurable clinical phenotypes.',
      zh: '基于眼底影像研究衰老相关信号、疾病相关偏离，以及影像特征如何与可测量的临床表型相联系。',
    },
  },
  {
    title: {
      en: 'Physiology-Linked Representation Learning',
      zh: '面向生理机制的表征学习',
    },
    description: {
      en: 'Building representations that separate age-clock residuals into interpretable axes related to hemodynamics, metabolism, renal function, blood traits, immunity, and neurobiology.',
      zh: '尝试把年龄钟残差分解为更可解释的轴，例如血流动力学、代谢、肾功能、血液指标、免疫状态和神经生物学相关表征。',
    },
  },
  {
    title: {
      en: 'Reproducible Biomedical Research Tools',
      zh: '可复现的生物医学研究工具',
    },
    description: {
      en: 'Maintaining code releases, metadata, and analysis boundaries carefully enough that other researchers can understand what is reproducible and what still depends on restricted data.',
      zh: '整理代码、元数据和分析边界，让读者清楚知道哪些部分可以复现，哪些部分仍依赖受限数据或研究环境。',
    },
  },
];

export const researchApproach = [
  {
    title: {
      en: 'Start from a medical question',
      zh: '从医学问题出发',
    },
    body: {
      en: 'The model is useful only when its output can be related back to disease burden, physiology, or a testable biological explanation.',
      zh: '模型结果只有能回到疾病负担、生理状态或可检验的生物学解释时，才真正有意义。',
    },
  },
  {
    title: {
      en: 'Use computation as a lens',
      zh: '把计算当作观察工具',
    },
    body: {
      en: 'I use deep learning to organize high-dimensional imaging signals, but I try to keep the final claims close to the data and the clinical context.',
      zh: '我用深度学习整理高维影像信号，但会尽量让结论贴近数据本身和具体医学语境。',
    },
  },
  {
    title: {
      en: 'Keep releases honest',
      zh: '诚实说明可复现边界',
    },
    body: {
      en: 'For public code, I care about clear manifests, model metadata, example schemas, and explicit notes about what cannot be fully reproduced without private cohorts.',
      zh: '对于公开代码，我更在意清楚的 manifest、模型元数据、示例 schema，以及对私有队列限制的明确说明。',
    },
  },
];

export const education = [
  {
    period: '2022-2027',
    title: {
      en: 'Undergraduate, Basic Medical Sciences',
      zh: '基础医学专业，本科',
    },
    place: {
      en: 'Peking University Health Science Center',
      zh: '北京大学医学部',
    },
  },
  {
    period: '2023-2027',
    title: {
      en: 'Dual Degree, Economics',
      zh: '经济学双学位',
    },
    place: {
      en: 'National School of Development, Peking University',
      zh: '北京大学国家发展研究院',
    },
  },
];

export const publications = [
  {
    title: 'Decomposing retinal age-clock residuals reveals disease-associated systemic heterogeneity in human aging',
    authors: 'Renxiang Chu*, Aimin Sun*, Jinfeng Qu, Meng Lu',
    year: '2026',
    venue: {
      en: 'Submitted manuscript',
      zh: '投稿中',
    },
    description: {
      en: 'Introduces PODE, a physiology-guided framework for decomposing retinal age-clock residuals and validating the resulting signals with cross-modal BrainMRI analysis.',
      zh: '提出 PODE：一个面向视网膜年龄钟残差的生理机制引导分解框架，并通过跨模态 BrainMRI 分析验证相关信号。',
    },
    links: [
      { label: 'Code', href: 'https://github.com/LuMengLab/PODE' },
      { label: 'Weights', href: 'https://huggingface.co/irrrricardo/PODE_Weights' },
    ],
    tags: ['Retinal aging', 'Deep learning', 'Medical imaging', 'Representation learning'],
  },
  {
    title: 'Disentangling physiological heterogeneity in retinal aging using a deep learning-based biological age framework',
    authors: 'Renxiang Chu*, Aimin Sun*, Jinfeng Qu, Meng Lu',
    year: '2026',
    venue: {
      en: 'Research release',
      zh: '研究发布',
    },
    description: {
      en: 'A related release focused on physiological heterogeneity in retinal biological aging and clinically interpretable age-clock signals.',
      zh: '围绕视网膜生物年龄中的生理异质性展开，重点关注年龄钟信号的临床可解释性。',
    },
    links: [
      { label: 'DOI', href: 'https://doi.org/10.64898/2026.02.13.26346265' },
    ],
    tags: ['Biological age', 'Retina', 'Clinical phenotyping'],
  },
];

export const projects = [
  {
    title: 'PODE',
    eyebrow: {
      en: 'Featured research system',
      zh: '重点研究系统',
    },
    period: '2024-present',
    lab: 'Lu Lab @ PKU IACM',
    description: {
      en: 'A physiology-guided orthogonal decomposition framework for age-clock residuals. The public repository now includes fundus and BrainMRI implementations, documentation, model-card metadata, CI, and checkpoint references.',
      zh: '一个面向年龄钟残差的生理机制引导正交分解框架。公开仓库已整理眼底影像和 BrainMRI 实现、文档、模型卡元数据、CI 与权重入口。',
    },
    links: [
      { label: 'Repository', href: 'https://github.com/LuMengLab/PODE' },
      { label: 'Weights', href: 'https://huggingface.co/irrrricardo/PODE_Weights' },
    ],
    tags: ['Retinal imaging', 'BrainMRI', 'Aging clock', 'Open science'],
  },
  {
    title: 'Retinal Image Intelligence',
    eyebrow: {
      en: 'Medical imaging',
      zh: '医学影像',
    },
    period: '2024-present',
    lab: 'Lu Lab @ PKU IACM',
    description: {
      en: 'Developing retinal image analysis workflows for clinical phenotype mapping, age-related signal discovery, and interpretable downstream analysis.',
      zh: '构建视网膜影像分析流程，用于临床表型映射、衰老相关信号发现和可解释下游分析。',
    },
    links: [],
    tags: ['Computer vision', 'Retina', 'Clinical signals'],
  },
  {
    title: 'Machine Learning for Systems Biology',
    eyebrow: {
      en: 'Systems biology',
      zh: '系统生物学',
    },
    period: '2026-present',
    lab: 'Wang Lab @ PKU BMS',
    description: {
      en: 'Exploring machine learning methods for systems biology questions and multi-source biomedical data, with attention to mechanisms rather than prediction alone.',
      zh: '探索机器学习在系统生物学问题和多源生物医学数据中的应用，更关注机制线索，而不只是预测表现。',
    },
    links: [],
    tags: ['Systems biology', 'Biomedical data', 'Machine learning'],
  },
];

export const collaborationTopics = [
  {
    en: 'Retinal imaging, biological aging, and clinical phenotyping',
    zh: '视网膜影像、生物年龄与临床表型分析',
  },
  {
    en: 'Reproducible code releases for manuscript-stage biomedical research',
    zh: '论文阶段生物医学研究代码的可复现发布',
  },
  {
    en: 'Representation learning for heterogeneous biomedical signals',
    zh: '面向异质性生物医学信号的表征学习',
  },
];

export const writing = [
  {
    title: 'Deep Learning Getting Started Guide',
    href: '/blog/deep-learning-guide',
    date: '2024-03-20',
    topic: 'AI',
  },
  {
    title: 'My Journey at Peking University',
    href: '/blog/beijing-university-life',
    date: '2024-03-15',
    topic: 'Life',
  },
];
