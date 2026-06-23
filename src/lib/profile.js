export const profile = {
  name: 'Renxiang (Ricardo) Chu',
  handle: 'irrrricardo',
  email: 'r1card0chu1208@gmail.com',
  github: 'https://github.com/irrrricardo',
  linkedin: 'https://www.linkedin.com/in/renxiang-chu-386322333/',
  resume: '/resume',
  resumePdf: '/resume.pdf',
  location: {
    en: 'Peking University, Beijing',
    zh: '北京大学，北京',
  },
  affiliation: {
    en: 'Basic Medical Sciences and Economics, Peking University',
    zh: '北京大学基础医学与经济学',
  },
  headline: {
    en: 'Building AI systems for medical imaging, aging biology, and research workflows.',
    zh: '面向医学影像、衰老生物学与科研流程构建人工智能系统。',
  },
  intro: {
    en: 'I work at the intersection of AI4Med, AI4Bio, and agentic AI for medical research, with a current focus on deep learning models that turn imaging residuals into clinically interpretable signals.',
    zh: '我的兴趣集中在 AI4Med、AI4Bio 以及面向医学科研的 Agentic AI，目前主要关注如何用深度学习把医学影像中的残差信号转化为可解释的临床和生物学信息。',
  },
  status: {
    en: 'Manuscript-stage research release',
    zh: '论文投稿阶段研究发布',
  },
};

export const quickStats = [
  {
    value: 'AI4Med',
    label: {
      en: 'Research focus',
      zh: '研究方向',
    },
  },
  {
    value: 'PODE',
    label: {
      en: 'Public code release',
      zh: '公开代码发布',
    },
  },
  {
    value: 'PKU',
    label: {
      en: 'Basic Medicine and Economics',
      zh: '基础医学与经济学',
    },
  },
];

export const researchDirections = [
  {
    title: {
      en: 'Medical Imaging Foundation Models',
      zh: '医学影像基础模型',
    },
    description: {
      en: 'Retinal and brain MRI models for biological age, disease heterogeneity, and cross-modal validation.',
      zh: '围绕视网膜影像和脑 MRI 构建生物年龄、疾病异质性和跨模态验证模型。',
    },
  },
  {
    title: {
      en: 'Physiology-Guided Representation Learning',
      zh: '生理机制引导的表征学习',
    },
    description: {
      en: 'Disentangling age-clock residuals into hemodynamic, metabolic, renal, hematologic, immune, and neurobiological axes.',
      zh: '将年龄钟残差分解为血流动力学、代谢、肾功能、血液、免疫及神经生物学相关表征。',
    },
  },
  {
    title: {
      en: 'Agentic AI for Medical Research',
      zh: '面向医学科研的 Agentic AI',
    },
    description: {
      en: 'Exploring AI agents that help with literature synthesis, data preparation, reproducible analysis, and research tooling.',
      zh: '探索可辅助文献综合、数据准备、可复现实验分析和科研工具构建的 AI Agent。',
    },
  },
];

export const education = [
  {
    period: '2022-2027',
    title: {
      en: 'Basic Medical Sciences',
      zh: '基础医学',
    },
    place: {
      en: 'Peking University Health Science Center',
      zh: '北京大学医学部',
    },
  },
  {
    period: '2023-2027',
    title: {
      en: 'Dual Degree in Economics',
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
      en: 'Introduces PODE, a physiology-guided residual-decomposition framework for retinal aging and cross-modal BrainMRI validation.',
      zh: '提出 PODE：一种生理机制引导的年龄钟残差分解框架，并在视网膜影像和 BrainMRI 中进行验证。',
    },
    links: [
      { label: 'Code', href: 'https://github.com/LuMengLab/PODE' },
      { label: 'Weights', href: 'https://huggingface.co/irrrricardo/PODE_Weights' },
    ],
    tags: ['Retinal aging', 'Deep learning', 'AI4Med', 'Representation learning'],
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
      en: 'A related release describing physiology-linked heterogeneity in retinal biological aging.',
      zh: '与视网膜生物年龄中生理异质性相关的研究发布。',
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
      en: 'A physiology-guided orthogonal decomposition framework for age-clock residuals, released with fundus and BrainMRI implementations, documentation, model-card metadata, and public checkpoint references.',
      zh: '一种面向年龄钟残差的生理机制引导正交分解框架，已公开视网膜和 BrainMRI 实现、文档、模型卡和权重入口。',
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
      en: 'Deep learning research',
      zh: '深度学习研究',
    },
    period: '2024-present',
    lab: 'Lu Lab @ PKU IACM',
    description: {
      en: 'Developing deep learning pipelines for retinal image analysis, clinical phenotype mapping, and interpretable downstream analysis.',
      zh: '构建视网膜影像深度学习流程，服务于临床表型映射和可解释下游分析。',
    },
    links: [],
    tags: ['Computer vision', 'Medical imaging', 'Clinical signals'],
  },
  {
    title: 'Machine Learning in Systems Biology',
    eyebrow: {
      en: 'Systems biology',
      zh: '系统生物学',
    },
    period: '2026-present',
    lab: 'Wang Lab @ PKU BMS',
    description: {
      en: 'Applying machine learning techniques to systems biology questions and multi-source biomedical data analysis.',
      zh: '将机器学习方法应用于系统生物学问题和多源生物医学数据分析。',
    },
    links: [],
    tags: ['Systems biology', 'Biomedical data', 'Machine learning'],
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
