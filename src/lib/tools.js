export const tools = [
  {
    slug: 'fig-cos',
    status: { en: 'Open source', zh: '开源项目' },
    title: { en: 'fig-cos', zh: 'fig-cos' },
    eyebrow: {
      en: 'Editable scientific figures',
      zh: '可编辑科研图重建',
    },
    description: {
      en: 'An Agent Skill for reconstructing reference scientific figures as editable SVG and PowerPoint. It favors source-component tracing, live text, and native shapes over replacing a difficult reference with generic icons or an AI redraw.',
      zh: '一个将参考科研图重建为可编辑 SVG 与 PowerPoint 的 Agent Skill。它优先采用来源组件的局部描摹、可编辑文字与原生形状，而不是在遇到复杂参考图时悄悄换成通用图标或 AI 重绘。',
    },
    note: {
      en: 'Built for figures that need to be revised, inspected, and reused—not merely exported as a flat image.',
      zh: '它面向的是需要继续修改、检查与复用的科研图，而不只是导出一张扁平图片。',
    },
    tags: {
      en: ['Agent Skill', 'SVG', 'PowerPoint'],
      zh: ['Agent Skill', 'SVG', 'PowerPoint'],
    },
    image: '/images/tools/fig-cos-hero.png',
    imageAlt: {
      en: 'fig-cos promotional artwork showing a reference becoming an editable SVG and PowerPoint figure.',
      zh: 'fig-cos 宣传图：将参考图转化为可编辑的 SVG 与 PowerPoint 科研图。',
    },
    imageCaption: {
      en: 'Current fig-cos project artwork: bring a reference, keep editing the text, colors, components, and layout.',
      zh: '当前 fig-cos 项目宣传图：从一张参考图出发，继续编辑文字、颜色、组件与版式。',
    },
    links: [
      {
        label: { en: 'View on GitHub', zh: '在 GitHub 查看' },
        href: 'https://github.com/irrrricardo/fig-cos',
      },
      {
        label: { en: 'Installation guide', zh: '安装与使用' },
        href: 'https://github.com/irrrricardo/fig-cos#quick-start--install-the-skill',
      },
    ],
  },
];
