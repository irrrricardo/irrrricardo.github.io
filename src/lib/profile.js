export const profile = {
  name: 'Renxiang (Ricardo) Chu',
  shortName: 'Renxiang Chu',
  handle: 'irrrricardo',
  email: 'ricardo_chu@stu.pku.edu.cn',
  personalEmail: 'r1card0chu1208@gmail.com',
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
    en: 'I study Basic Medical Sciences at Peking University and pursue a dual degree in Economics. My research spans scientific memory for AI co-scientists, representation learning for biological aging, and evaluation of clinical world models. I am also exploring agents for single-cell and virtual-cell discovery and working as a venture capital intern on AI for biology.',
    zh: '我就读于北京大学医学部基础医学专业，同时修读经济学双学位。研究工作涉及 AI co-scientist 的科学记忆、生物衰老表征学习与临床世界模型评估；目前也在探索面向单细胞和虚拟细胞研究的智能体，并从事 AI for Biology 相关的一级市场实习。',
  },
  seeking: {
    en: 'Applying to Fall 2027 PhD programs in generative biomolecular AI and AI for Science',
    zh: '申请 2027 Fall 生成式生物分子 AI 与 AI for Science 方向博士项目',
  },
  phdIntent: {
    en: 'For graduate study, I hope to develop generative models and scientific agents that learn from biological evidence and experimental feedback across iterative protein, RNA, and molecular discovery. I am also interested in how these methods extend to cellular and patient-scale models.',
    zh: '博士阶段，我希望研究能够在多轮蛋白质、RNA 与分子发现中利用生物学证据和实验反馈学习的生成模型与科学智能体，并关注这些方法如何延伸到细胞与患者尺度的建模。',
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
      en: 'Building scientific-memory systems that preserve hypotheses, evidence, conflicts, and provenance across literature and data workflows.',
      zh: '构建能够在文献与数据工作流中保留假设、证据、冲突与来源信息的科学记忆系统。',
    },
    evidence: 'SciEngram · scientific memory · research workflows',
  },
  {
    code: 'Agentic discovery',
    title: { en: 'Agents for virtual-cell discovery', zh: '面向虚拟细胞发现的智能体' },
    question: {
      en: 'Exploring how agents can work with single-cell and virtual-cell models to reason about perturbations and select informative next experiments.',
      zh: '探索智能体如何结合单细胞与虚拟细胞模型进行扰动推理，并选择更有信息量的下一步实验。',
    },
    evidence: 'single-cell models · perturbation reasoning · experiment selection',
  },
];

export const researchDirections = [
  {
    title: { en: 'Generative AI for biomolecular design', zh: '生成式生物分子设计 AI' },
    description: {
      en: 'Interested in generative models for proteins, RNA, and small molecules, especially methods guided by biological context, function, and experimental feedback.',
      zh: '关注蛋白质、RNA 与小分子的生成模型，尤其是由生物学背景、功能要求与实验反馈共同引导的方法。',
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
    title: { en: 'Intervention modeling and virtual trials', zh: '干预建模与虚拟试验' },
    description: {
      en: 'Interested in evaluating how models respond to candidate interventions, from cellular perturbations to patient trajectories and virtual trials.',
      zh: '关注模型如何响应候选干预，以及从细胞扰动、患者轨迹到虚拟试验的评价方法。',
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
    title: { en: 'Learn from evidence and feedback', zh: '从证据与反馈中学习' },
    body: {
      en: 'I want to study how agents preserve the reasons behind scientific choices and use new results to improve subsequent generation and experimentation.',
      zh: '我希望研究智能体如何保留科学决策的依据，并利用新结果改进后续的生成与实验选择。',
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
      en: 'Multi-omics models and automated workflows for cancer biomarker discovery, together with HistoSeek, a teacher-governed histology learning platform under review at npj Digital Medicine.',
      zh: '面向癌症生物标志物发现的多组学模型与自动化工作流，以及正在 npj Digital Medicine 外审的教师主导型组织学学习平台 HistoSeek。',
    },
    highlights: ['Multi-omics', 'HistoSeek', 'AI-assisted medical education'],
  },
  {
    period: 'Mar. 2026 - Dec. 2026',
    role: { en: 'Research Intern (Remote)', zh: '研究实习生（远程）' },
    place: 'Northeastern University · Khoury College of Computer Sciences',
    advisor: 'Wengong Jin',
    summary: {
      en: 'Evaluation of an action-conditioned clinical world model, including RCT-based counterfactual evaluation, trial screening, causal tracing, and model assessment.',
      zh: '参与动作条件临床世界模型的评估，包括基于 RCT 的反事实能力评价、试验筛选、因果追踪与模型评测。',
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
    status: { en: 'Submitted to ICLR 2027', zh: '已投稿 ICLR 2027' },
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
    title: 'AI Co-Scientist for Biomarker Discovery',
    eyebrow: { en: 'Multi-omics discovery', zh: '多组学发现' },
    period: '2026 - present',
    lab: 'PKU School of Basic Medical Sciences',
    status: { en: 'Ongoing research', zh: '进行中' },
    description: {
      en: 'Machine-learning and deep-learning models for cancer biomarker discovery across multi-omics data, integrated into an automated research workflow.',
      zh: '面向癌症生物标志物发现的机器学习与深度学习多组学模型，并将其整合到自动化研究工作流中。',
    },
    tldr: { en: 'Connects multi-omics modeling with an automated biomarker-discovery workflow.', zh: '将多组学建模与自动化生物标志物发现工作流连接起来。' },
    question: {
      en: 'How can multi-omics evidence be organized into a reproducible workflow for biomarker discovery?',
      zh: '如何把多组学证据组织为可复现的生物标志物发现流程？',
    },
    contribution: {
      en: 'Multi-omics model development and research-workflow automation.',
      zh: '多组学模型开发与研究工作流自动化。',
    },
    links: [],
    tags: ['Multi-omics', 'Biomarkers', 'AI co-scientist', 'Oncology'],
  },
  {
    title: 'Clinical World Models',
    eyebrow: { en: 'Clinical world models', zh: '临床世界模型' },
    period: '2026',
    lab: 'Northeastern University · MGH collaboration',
    status: { en: 'Accepted at WMHS Workshop · NeurIPS 2026', zh: '已被 NeurIPS 2026 WMHS Workshop 接收' },
    description: {
      en: 'A clinical world model that combines a variational autoencoder with treatment-conditioned latent diffusion to simulate patient trajectories under candidate interventions, using MIMIC and a private heart-failure cohort.',
      zh: '一个结合变分自编码器与治疗条件潜空间扩散的临床世界模型，使用 MIMIC 与私有心衰队列模拟候选干预下的患者轨迹。',
    },
    tldr: { en: 'Models future clinical states and risks under candidate actions for offline evaluation.', zh: '建模候选动作下的未来临床状态与风险，用于离线评估。' },
    question: {
      en: 'How can we evaluate clinical actions when online experimentation is unsafe or impossible?',
      zh: '当在线试验不安全或不可行时，如何评估临床动作？',
    },
    contribution: {
      en: 'Proposed RCT-based evaluation of counterfactual reasoning, screened suitable trials, and contributed causal tracing and model evaluation.',
      zh: '提出基于 RCT 的反事实能力评价思路，筛选适用试验，并参与因果追踪与模型评估。',
    },
    links: [],
    tags: ['World models', 'Offline agents', 'MIMIC', 'Counterfactuals'],
  },
  {
    title: 'HistoSeek',
    eyebrow: { en: 'AI-assisted medical education', zh: 'AI 辅助医学教育' },
    period: '2026',
    lab: 'PKU School of Basic Medical Sciences',
    status: { en: 'Under review at npj Digital Medicine', zh: 'npj Digital Medicine 外审中' },
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
  { en: 'AI for Science venture investing, technical diligence, and startup strategy', zh: 'AI for Science 一级市场投资、技术尽调与初创公司策略' },
  { en: 'Research and internship opportunities with AI/AI4S startups and investment teams', zh: 'AI/AI4S 初创公司与投资团队的研究及实习机会' },
];

export const industryExperience = [
  {
    period: 'Sep. 2026 - Jan. 2027',
    role: { en: 'Venture Capital Intern', zh: '风险投资实习生' },
    place: 'Huagai Capital · Medical Devices & Technology Team',
    summary: {
      en: 'Investment-oriented research on brain-computer interfaces and AI for biology, including molecular and drug discovery, virtual-cell models, laboratory automation, and DNA foundation models.',
      zh: '围绕脑机接口与 AI for Biology 开展投资导向的行业研究，覆盖分子与药物发现、虚拟细胞、实验室自动化和 DNA 基础模型。',
    },
    detail: {
      en: 'Conducted on-site diligence and founder interviews to assess technical differentiation, product roadmaps, and commercialization paths.',
      zh: '通过现场尽调与创始人访谈，评估技术差异、产品路线和商业化路径。',
    },
  },
];

export const writing = [
  {
    title: { en: 'Cash flows, expectations, and risk', zh: '现金流、预期与风险' },
    href: '/blog/cash-flows-expectations-and-risk',
    date: '2026-10-16',
    topic: { en: 'Course note', zh: '课程笔记' },
  },
  {
    title: { en: 'Changing fields without erasing the road behind', zh: '转向，不等于否定来路' },
    href: '/blog/changing-fields-without-erasing-the-past',
    date: '2026-10-09',
    topic: { en: 'Life', zh: '生活' },
  },
  {
    title: { en: 'Astrology as a language for uncertainty', zh: '把玄学当作一种面对不确定性的语言' },
    href: '/blog/astrology-as-a-language-for-uncertainty',
    date: '2026-10-05',
    topic: { en: 'Small mysticism', zh: '一点玄学' },
  },
];
