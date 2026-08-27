export const profile = {
  name: 'Renxiang (Ricardo) Chu',
  shortName: 'Renxiang Chu',
  handle: 'irrrricardo',
  email: 'r1card0chu1208@gmail.com',
  wechat: 'CRX813655433',
  github: 'https://github.com/irrrricardo',
  linkedin: 'https://www.linkedin.com/in/renxiang-chu-386322333/',
  resume: '/resume',
  resumePdf: '/resume.pdf',
  location: { en: 'Peking University, Beijing', zh: '北京大学，北京' },
  affiliation: {
    en: 'Basic Medical Sciences, Peking University Health Science Center; Dual Degree in Economics, National School of Development',
    zh: '北京大学医学部基础医学专业；国家发展研究院经济学双学位',
  },
  status: { en: 'Basic Medical Sciences · Peking University', zh: '北京大学 · 基础医学' },
  headline: {
    en: 'Building AI systems that understand, simulate, and design biological systems across molecular, cellular, and patient scales.',
    zh: '构建能够跨分子、细胞与患者尺度理解、模拟并设计生物系统的 AI。',
  },
  intro: {
    en: 'I study Basic Medical Sciences at Peking University and pursue a dual degree in Economics. I am currently working on AI co-scientists and developing foundations in virtual-cell modeling. My previous projects span retinal imaging, clinical world models, and AI-assisted medical education.',
    zh: '我就读于北京大学医学部基础医学专业，同时修读经济学双学位。目前主要研究 AI co-scientist，并系统学习虚拟细胞建模；此前的项目涉及视网膜影像、临床世界模型和 AI 辅助医学教育。',
  },
  seeking: {
    en: 'Seeking Fall 2027 PhD / research Master opportunities in AI for biological design and AI for Science',
    zh: '申请 2027 Fall 生物设计与 AI for Science 方向博士及研究型硕士项目',
  },
  phdIntent: {
    en: 'For graduate study, I am seeking groups in AI for protein, RNA, and molecular design, ideally combined with LLM- or agent-assisted scientific discovery and extended toward cellular, tissue, organ, and patient-level modeling.',
    zh: '研究生阶段，我希望加入从事蛋白质、RNA 与分子设计的 AI 课题组，最好同时结合 LLM 或智能体辅助科学发现，并进一步延伸到细胞、组织、器官与患者尺度的建模。',
  },
};

export const quickStats = [
  { value: '3', label: { en: 'co-first-author manuscripts', zh: '篇共同一作成果' } },
  { value: '2027 Fall', label: { en: 'graduate application cycle', zh: '研究生申请周期' } },
];

export const currentDirections = [
  {
    code: 'AI co-scientist',
    title: { en: 'AI co-scientist', zh: 'AI 科学智能体' },
    question: {
      en: 'Building scientific agents that organize literature, use research tools, and maintain traceable evidence across multi-step workflows.',
      zh: '构建能够组织文献、调用研究工具，并在多步骤工作流中保留可追踪证据的科学智能体。',
    },
    evidence: 'SciEngram · scientific memory · research workflows',
  },
  {
    code: 'Virtual cell',
    title: { en: 'Virtual cell', zh: '虚拟细胞' },
    question: {
      en: 'Developing foundations in single-cell modeling, perturbation-response prediction, and the connection between molecular interventions and cellular states.',
      zh: '系统学习单细胞建模、扰动响应预测，以及分子干预与细胞状态之间的联系。',
    },
    evidence: 'single-cell modeling · perturbation prediction · multimodal biology',
  },
];

export const researchDirections = [
  {
    title: { en: 'AI for protein, RNA, and molecular design', zh: '蛋白质、RNA 与分子设计 AI' },
    description: {
      en: 'Interested in generative and predictive models for biomolecular structure, function, interaction, and design.',
      zh: '关注生物分子结构、功能、相互作用与设计的生成和预测模型。',
    },
  },
  {
    title: { en: 'LLMs and agents for scientific discovery', zh: 'LLM 与智能体辅助科学发现' },
    description: {
      en: 'Building research agents that work with literature, tools, simulations, and experimental evidence across scientific workflows.',
      zh: '构建能够在科研工作流中使用文献、工具、模拟与实验数据的研究智能体。',
    },
  },
  {
    title: { en: 'Multiscale biological modeling', zh: '多尺度生物系统建模' },
    description: {
      en: 'Interested in computational models that connect molecular mechanisms with cellular states and higher-level phenotypes.',
      zh: '关注连接分子机制、细胞状态与更高层级表型的计算模型。',
    },
  },
  {
    title: { en: 'Biomedical simulation and intervention design', zh: '生物医学模拟与干预设计' },
    description: {
      en: 'Interested in perturbation modeling and in-silico evaluation of how molecular interventions affect biological systems.',
      zh: '关注扰动建模，以及分子干预对生物系统影响的计算评估。',
    },
  },
];

export const researchApproach = [
  {
    title: { en: 'Connect biological scales', zh: '连接不同生物尺度' },
    body: {
      en: 'I am interested in models that connect molecular structure and function with cellular states and higher-level phenotypes.',
      zh: '我关注能够把分子结构与功能、细胞状态以及更高层级表型连接起来的模型。',
    },
  },
  {
    title: { en: 'Move from prediction to design', zh: '从预测走向设计' },
    body: {
      en: 'Beyond predicting biological outcomes, I want to study generative systems that propose molecules and interventions under explicit constraints.',
      zh: '除预测生物学结果外，我希望研究能够在明确约束下提出分子与干预方案的生成系统。',
    },
  },
  {
    title: { en: 'Close the scientific loop', zh: '形成科学发现闭环' },
    body: {
      en: 'LLMs and agents can help connect literature, computational tools, simulations, and experiments into an iterative discovery process.',
      zh: 'LLM 与智能体可以把文献、计算工具、模拟和实验连接为迭代式科学发现过程。',
    },
  },
];

export const education = [
  {
    period: '2022 - 2027',
    title: { en: 'Bachelor of Medicine in Basic Medical Sciences', zh: '基础医学专业，医学学士' },
    place: { en: 'Peking University Health Science Center', zh: '北京大学医学部' },
    note: { en: 'Expected July 2027', zh: '预计 2027 年 7 月毕业' },
  },
  {
    period: '2023 - 2027',
    title: { en: 'Dual Degree in Economics', zh: '经济学双学位' },
    place: { en: 'National School of Development, Peking University', zh: '北京大学国家发展研究院' },
    note: { en: 'A second lens on heterogeneity, incentives, and decisions', zh: '以异质性、激励与决策作为第二视角' },
  },
];

export const researchExperience = [
  {
    period: 'Sep. 2024 - Jun. 2027',
    role: { en: 'Research Assistant', zh: '研究助理' },
    place: 'Peking University Institute for Advanced Clinical Medicine',
    advisor: 'Meng Lu',
    summary: {
      en: 'Medical vision and scientific agents: retinal biological age, physiology-linked representation learning, and evidence-grounded long-term memory for research agents.',
      zh: '医学视觉与科学智能体：视网膜生物年龄、生理机制相关表征学习，以及面向研究智能体的证据驱动长期记忆。',
    },
    highlights: ['PODE', 'SciEngram', 'Retinal imaging'],
  },
  {
    period: 'Mar. 2026 - Jun. 2027',
    role: { en: 'Research Assistant', zh: '研究助理' },
    place: 'Peking University School of Basic Medical Sciences',
    advisor: 'Guangxi Wang · Xiaofan Wei',
    summary: {
      en: 'Machine learning for systems biomedicine and HistoSeek, a teacher-governed AI-assisted histology learning platform now under external review.',
      zh: '面向系统生物医学的机器学习，以及教师主导的 AI 组织学学习平台 HistoSeek，目前正在外审。',
    },
    highlights: ['Multi-omics', 'HistoSeek', 'AI-assisted medical education'],
  },
  {
    period: 'Mar. 2026 - Dec. 2026',
    role: { en: 'Research Intern (Remote)', zh: '研究实习生（远程）' },
    place: 'Northeastern University · Khoury College of Computer Sciences',
    advisor: 'Wengong Jin',
    summary: {
      en: 'Action-conditioned world models and offline decision agents for high-risk sequential decisions in a Northeastern University-MGH collaboration.',
      zh: '参与东北大学与 MGH 合作，研究面向高风险序列决策的动作条件世界模型与离线决策智能体。',
    },
    highlights: ['Clinical world models', 'MIMIC', 'Counterfactual reasoning'],
  },
  {
    period: 'Sep. 2023 - Aug. 2024',
    role: { en: 'Research Trainee', zh: '科研训练生' },
    place: 'PKU Basic Medical Sciences Innovative Talent Program',
    advisor: '',
    summary: {
      en: 'Computational characterization and experimental validation of biomolecular condensate composition and phase-separation dynamics.',
      zh: '对生物分子凝聚体组成与相分离动力学进行计算表征和实验验证。',
    },
    highlights: ['Bioinformatics', 'R / Python', 'Mechanistic validation'],
  },
];

export const projects = [
  {
    title: 'PODE',
    eyebrow: { en: 'Medical representation learning', zh: '医学表征学习' },
    period: '2024 - present',
    lab: 'Lu Lab @ PKU IACM',
    status: { en: 'Preprint', zh: '预印本' },
    description: {
      en: 'A physiology-guided framework for disentangling retinal age-clock residuals. Built with VisionFM, the system separates physiological aging features from pathological noise and links latent axes to systemic heterogeneity.',
      zh: '一个以生理机制引导的视网膜年龄钟残差解耦框架。系统基于 VisionFM，将生理衰老特征与病理噪声分离，并把潜在表征轴与系统性异质性联系起来。',
    },
    tldr: { en: 'Decomposes retinal age residuals into physiology-linked representation axes.', zh: '将视网膜年龄残差分解为与生理机制相关的表征轴。' },
    question: { en: 'What biological structure is hidden inside an age-clock residual?', zh: '年龄钟残差中隐藏着怎样的生物学结构？' },
    contribution: {
      en: 'Foundation-model fine-tuning, teacher-student residual learning, clinical collaboration, and cross-modal validation.',
      zh: '基础模型微调、教师-学生残差学习、临床合作与跨模态验证。',
    },
    links: [
      { label: 'Repository', href: 'https://github.com/LuMengLab/PODE' },
      { label: 'Preprint', href: 'https://doi.org/10.64898/2026.02.13.26346265' },
      { label: 'Weights', href: 'https://huggingface.co/irrrricardo/PODE_Weights' },
    ],
    tags: ['Retinal imaging', 'Biological age', 'VisionFM', 'Disentanglement'],
  },
  {
    title: 'SciEngram',
    eyebrow: { en: 'Scientific memory', zh: '科学记忆' },
    period: '2026',
    lab: 'Lu Lab @ PKU IACM',
    status: { en: 'Submitted to AAAI 2027', zh: '已投稿 AAAI 2027' },
    description: {
      en: 'A traceable cognitive memory architecture for long-horizon scientific reasoning. It organizes evidence across papers, represents relationships and conflicts, updates current beliefs, and supports verifiable conclusions.',
      zh: '一个面向长程科学推理的可追踪认知记忆架构。它组织跨论文证据、表示关系与冲突、更新当前信念，并支持可验证的科学结论。',
    },
    tldr: { en: 'Organizes scientific evidence, relations, conflicts, and belief updates in a traceable memory.', zh: '在可追踪记忆中组织科学证据、关系、冲突与信念更新。' },
    question: {
      en: 'Can an agent know why it believes something - and revise that belief when evidence changes?',
      zh: '智能体能否知道自己为何相信某个结论，并在证据变化时修正它？',
    },
    contribution: {
      en: 'System architecture, benchmark design, evaluation taxonomy, and comparisons with long-context, RAG, and memory baselines.',
      zh: '系统架构、评测基准、评估维度，以及与长上下文、RAG 和通用记忆系统的比较。',
    },
    links: [],
    tags: ['AI co-scientist', 'Evidence provenance', 'Long-term memory', 'Benchmark'],
  },
  {
    title: 'Clinical World Models',
    eyebrow: { en: 'Clinical world models', zh: '临床世界模型' },
    period: '2026',
    lab: 'Northeastern University · MGH collaboration',
    status: { en: 'Ongoing research', zh: '进行中' },
    description: {
      en: 'An action-conditioned world model for high-risk clinical decisions using longitudinal records from MIMIC and a private heart-failure cohort. The model predicts future states and risks under candidate actions for offline simulation and policy evaluation.',
      zh: '一个面向高风险临床决策的动作条件世界模型，使用 MIMIC 与私有心衰纵向数据，预测候选动作下的未来状态和风险，用于离线模拟与策略评估。',
    },
    tldr: { en: 'Models future clinical states and risks under candidate actions for offline evaluation.', zh: '建模候选动作下的未来临床状态与风险，用于离线评估。' },
    question: {
      en: 'How can we evaluate clinical actions when online experimentation is unsafe or impossible?',
      zh: '当在线试验不安全或不可行时，如何评估临床动作？',
    },
    contribution: {
      en: 'World-model design, action conditioning, and evaluation through causal tracing and counterfactual reasoning.',
      zh: '世界模型设计、动作条件建模，以及因果追踪与反事实推理评估。',
    },
    links: [],
    tags: ['World models', 'Offline agents', 'MIMIC', 'Counterfactuals'],
  },
  {
    title: 'HistoSeek',
    eyebrow: { en: 'AI-assisted medical education', zh: 'AI 辅助医学教育' },
    period: '2026',
    lab: 'PKU School of Basic Medical Sciences',
    status: { en: 'Under external review', zh: '外审中' },
    description: {
      en: 'A teacher-governed histology learning platform that connects image recognition with formative guidance. The exploratory study compares AI-assisted and conventional teaching across theory, specimen identification, practical skills, and learner feedback.',
      zh: '一个由教师主导、连接图像识别与形成性指导的组织学学习平台。探索性研究从理论、标本识别、实践技能和学习者反馈等方面比较 AI 辅助与传统教学。',
    },
    tldr: { en: 'Combines histology image recognition with teacher-authored formative guidance.', zh: '将组织学图像识别与教师编写的形成性指导相结合。' },
    question: {
      en: 'How can AI improve visual-localization practice without displacing the teacher\'s pedagogical judgment?',
      zh: 'AI 如何改善视觉定位训练，同时不取代教师的教学判断？',
    },
    contribution: {
      en: 'System design and implementation, educational study design, and multi-dimensional learner evaluation.',
      zh: '系统设计与实现、教学研究设计及多维学习者评估。',
    },
    links: [],
    tags: ['Histology', 'Medical education', 'Human oversight', 'Computer vision'],
  },
];

export const smallSystems = projects.slice(1).map((project) => ({
  title: project.title,
  status: project.status,
  description: project.tldr,
  tags: project.tags,
}));

export const collaborationTopics = [
  { en: 'Generative and predictive models for protein, RNA, and molecular design', zh: '面向蛋白质、RNA 与分子设计的生成和预测模型' },
  { en: 'LLM- and agent-assisted scientific discovery', zh: 'LLM 与智能体辅助科学发现' },
  { en: 'Multiscale modeling from molecular mechanisms to cellular and patient phenotypes', zh: '从分子机制到细胞与患者表型的多尺度建模' },
  { en: 'Biological simulation, perturbation modeling, and intervention design', zh: '生物系统模拟、扰动建模与干预设计' },
  { en: 'AI and AI for Science startups, including technology assessment and scientific due diligence', zh: 'AI 与 AI for Science 初创公司的技术评估与科学尽调' },
  { en: 'Internships with AI/AI4S startups, venture capital firms, and private-market investment research teams', zh: 'AI/AI4S 初创公司、风险投资机构与一级市场投资研究团队的实习机会' },
];

export const writing = [
  { title: 'Deep Learning Getting Started Guide', href: '/blog/deep-learning-guide', date: '2024-03-20', topic: 'AI' },
  { title: 'My Journey at Peking University', href: '/blog/beijing-university-life', date: '2024-03-15', topic: 'Life' },
];
