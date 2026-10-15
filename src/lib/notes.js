export const notes = [
  {
    slug: 'cash-flows-expectations-and-risk',
    date: '2026-10-16',
    category: { en: 'Course note', zh: '课程笔记' },
    title: {
      en: 'Cash flows, expectations, and risk',
      zh: '现金流、预期与风险：货币银行学的一条主线',
    },
    description: {
      en: 'A compact map of how present value, interest rates, term structure, and information fit together.',
      zh: '用一条简洁的线索串起现值、利率、期限结构与市场信息。',
    },
    tags: {
      en: ['Money & Banking', 'Economics'],
      zh: ['货币银行学', '经济学'],
    },
    readTime: { en: '4 min read', zh: '阅读约 4 分钟' },
    deck: {
      en: 'The first four lectures of Money and Banking look like separate topics. They become easier to remember when treated as different views of the same object: uncertain future cash flows.',
      zh: '货币银行学的前几讲看起来主题分散。如果把它们都理解成对“不确定的未来现金流”的不同观察，许多概念会自然地连在一起。',
    },
    sections: [
      {
        heading: { en: 'Begin with the object, not the formula', zh: '先看对象，再看公式' },
        paragraphs: {
          en: [
            'A bond, a stock, and a bank loan all exchange value across time. Present value asks what a future payment is worth today. Yield to maturity compresses a bond\'s promised cash flows and current price into one rate. Holding-period return instead records what an investor actually earns over a chosen interval. They answer different questions and should not be used interchangeably.',
            'This distinction is useful beyond exams. Whenever a quoted rate appears, I now ask: Is it a contractual rate, a discount rate, an expected return, or a realized return? Much confusion disappears once the object being measured is named precisely.',
          ],
          zh: [
            '债券、股票和银行贷款，都在交换不同时点的价值。现值回答未来付款今天值多少；到期收益率把债券承诺的现金流与当前价格压缩成一个利率；持有期回报则记录投资者在某一实际持有区间内赚了多少。它们回答的是不同问题，不能混用。',
            '这个区分并不只服务于考试。以后看到一个“利率”，我会先问：它是合同利率、贴现率、预期回报，还是已实现回报？只要先说明被测量的对象，很多争论就会自动消失。',
          ],
        },
      },
      {
        heading: { en: 'Interest rates carry several stories at once', zh: '利率同时承载着多个故事' },
        paragraphs: {
          en: [
            'An increase in money does not imply one mechanical movement in interest rates. A liquidity effect may lower rates at first; higher income, prices, or expected inflation can later push them upward. The observed result depends on timing and on which force dominates.',
            'The yield curve works in a similar way. Expected future short rates matter, but so do term and liquidity premia. A long rate is therefore not a pure forecast. It is a forecast mixed with compensation for holding risk over time.',
          ],
          zh: [
            '货币增加并不机械地对应某一个利率方向。流动性效应可能先压低利率，而收入、价格水平和预期通胀效应又可能把利率推高。最终观察到什么，取决于时间顺序以及哪种力量占主导。',
            '收益率曲线也是如此。未来短期利率的预期固然重要，期限溢价和流动性溢价也不能忽略。因此，长期利率不是一份纯粹的预测，而是一份混合了风险补偿的预测。',
          ],
        },
      },
      {
        heading: { en: 'A reusable reading habit', zh: '一个可以反复使用的阅读习惯' },
        paragraphs: {
          en: [
            'Across asset pricing, banking, and even research evaluation, the same four questions recur: What cash flow or outcome is being valued? What information is available now? What is expected to change? Who bears the remaining risk?',
            'For me, this is the durable lesson of the course so far. The equations matter, but their value is greatest when they discipline these questions rather than replace them.',
          ],
          zh: [
            '从资产定价到银行经营，甚至延伸到科研评价，都可以反复追问四件事：正在被定价的现金流或结果是什么？现在掌握了哪些信息？人们预期什么会变化？剩余风险最终由谁承担？',
            '这是这门课目前留给我最持久的认识。公式当然重要，但它们最大的价值，是迫使这些问题变得精确，而不是代替这些问题。',
          ],
        },
      },
    ],
  },
  {
    slug: 'comparative-advantage-is-relative',
    date: '2026-10-13',
    category: { en: 'Course note', zh: '课程笔记' },
    title: {
      en: 'Comparative advantage is relative—not destiny',
      zh: '比较优势是相对关系，不是命运',
    },
    description: {
      en: 'Three distinctions from international trade: absolute versus comparative advantage, aggregate gains versus distribution, and RCA versus productivity.',
      zh: '国际贸易课中的三个关键区分：绝对优势与比较优势、总体收益与分配，以及 RCA 与生产率。',
    },
    tags: {
      en: ['International Trade', 'Models'],
      zh: ['国际贸易', '经济模型'],
    },
    readTime: { en: '5 min read', zh: '阅读约 5 分钟' },
    deck: {
      en: 'Trade theory is most useful when it prevents intuitive but incorrect shortcuts. A country can be better at producing everything and still import something; trade can raise aggregate welfare while hurting particular workers; export specialization is evidence, but not a direct measurement of technology.',
      zh: '贸易理论最有用的时候，是它阻止我们沿着直觉走向错误结论：一个国家可以在所有商品上都更高效，却仍然进口其中一些；贸易可以提高总体福利，同时让部分劳动者受损；出口专业化是证据，却不是技术水平的直接测量。',
    },
    sections: [
      {
        heading: { en: 'Opportunity cost decides the direction', zh: '贸易方向由机会成本决定' },
        paragraphs: {
          en: [
            'In the Ricardian model, the question is not who can produce more with one worker in isolation. It is what each country gives up when labor moves between sectors. A country with an absolute productivity advantage in both goods can still have a comparative advantage in only one.',
            'This relative logic is why specialization can expand consumption possibilities. Trade becomes a form of indirect production: export what is relatively cheaper to make, then exchange it for more of another good than domestic production would have yielded.',
          ],
          zh: [
            '在李嘉图模型中，关键不是孤立地比较“一名工人能生产多少”，而是劳动从一个行业转向另一个行业时，各国分别放弃了什么。即使一个国家在两种商品上都有绝对生产率优势，它也可能只在其中一种商品上具有比较优势。',
            '正因为这种相对逻辑，专业化才可能扩展消费集合。贸易可以被看成一种间接生产：出口相对更便宜的商品，再换回比国内直接生产更多的另一种商品。',
          ],
        },
      },
      {
        heading: { en: 'Gains do not settle distribution', zh: '总体收益不能回答分配问题' },
        paragraphs: {
          en: [
            'A model can establish gains from trade for a representative economy without proving that every person benefits. Workers tied to an import-competing sector may lose purchasing power even when national consumption possibilities expand. “Does trade create gains?” and “Who receives them?” are separate questions.',
            'The same caution applies to the terms of trade. A deterioration in export prices can reduce one channel of welfare while productivity growth raises another. Looking at one price ratio alone is not enough to infer the total effect.',
          ],
          zh: [
            '模型可以证明代表性经济体从贸易中获益，却不能由此证明每个人都获益。被困在进口竞争行业的劳动者可能购买力下降，即使整个国家的消费可能性在扩大。“贸易是否创造收益”和“收益由谁获得”是两个问题。',
            '对贸易条件也要保持同样的谨慎。出口相对价格恶化可能损害一条福利渠道，但生产率提升又可能改善另一条渠道。只看一个价格比，无法判断总效应。',
          ],
        },
      },
      {
        heading: { en: 'Measurement is a model choice', zh: '测量本身也是一种模型选择' },
        paragraphs: {
          en: [
            'Revealed comparative advantage compares a sector\'s share in a local export basket with its share in a reference economy. It is useful for describing relative specialization and for asking whether patterns change after a policy or the movement of industrial knowledge.',
            'But RCA is not productivity itself. A high value can reflect technology, history, policy, market access, or many other forces. The index makes an abstract idea observable; it does not remove the need for causal reasoning.',
          ],
          zh: [
            '显示性比较优势（RCA）比较某行业在本地出口中的占比与其在参照经济体出口中的占比。它适合描述相对专业化，也适合观察政策变化或产业知识流动之后，出口结构是否改变。',
            '但 RCA 并不等于生产率。一个较高的数值可能来自技术、历史、政策、市场准入或其他多种力量。这个指标把抽象概念变得可观察，却不能替代因果推断。',
          ],
        },
      },
    ],
  },
  {
    slug: 'changing-fields-without-erasing-the-past',
    date: '2026-10-09',
    category: { en: 'Life', zh: '生活' },
    title: {
      en: 'Changing fields without erasing the road behind',
      zh: '转向，不等于否定来路',
    },
    description: {
      en: 'A note on moving from biomedical applications toward model-building without pretending that the transition is already complete.',
      zh: '从生物医学应用走向模型方法：不否定过去，也不假装转向已经完成。',
    },
    tags: {
      en: ['Life', 'Research training'],
      zh: ['生活', '科研成长'],
    },
    readTime: { en: '4 min read', zh: '阅读约 4 分钟' },
    deck: {
      en: 'I used to frame my interests as a list of domains: medicine, biological design, agents, world models. A more honest thread is methodological: I want to understand how models learn useful representations, use evidence and feedback, and support decisions in complex systems.',
      zh: '我曾把兴趣写成一串领域标签：医学、生物设计、智能体、世界模型。更诚实的一条主线其实是方法：我想理解模型如何学到有用表征，如何利用证据与反馈，又如何在复杂系统中支持决策。',
    },
    sections: [
      {
        heading: { en: 'The previous field can remain a source of questions', zh: '过去的领域仍然可以提供问题' },
        paragraphs: {
          en: [
            'Basic medicine trained me to notice partial observation, heterogeneity, feedback, and multiple biological scales. Economics added incentives, counterfactuals, and the difference between aggregate outcomes and individual effects. These are not substitutes for technical depth in machine learning, but they shape the questions I find worth asking.',
            'Keeping that background does not require staying forever in “AI as a tool for medicine.” It can instead provide difficult test beds for representation learning, generation, intervention modeling, and scientific agents.',
          ],
          zh: [
            '基础医学让我不断注意到部分可观测、异质性、反馈以及不同生物尺度；经济学又补充了激励、反事实，以及总体结果与个体效应的差异。这些训练不能替代机器学习方法上的深度，却会影响我认为哪些问题值得研究。',
            '保留这段背景，并不意味着永远停留在“用 AI 做医学应用”。它也可以为表征学习、生成、干预建模和科学智能体提供足够困难的试验场。',
          ],
        },
      },
      {
        heading: { en: 'A transition needs evidence, not a new label', zh: '转向需要证据，而不是新标签' },
        paragraphs: {
          en: [
            'Saying that I want to build foundation or world models is easy. The harder evidence is smaller and more concrete: training a model end to end, knowing what the objective asks it to learn, locating why it fails, building fair comparisons, and explaining which result changed my own belief.',
            'That is the gap I want graduate training to close. The goal is not to collect more adjacent projects, but to own a technical question deeply enough that I can make and defend choices about data, objectives, representations, and evaluation.',
          ],
          zh: [
            '说自己想做基础模型或世界模型很容易。更难、也更可信的证据往往更小、更具体：完整训练一个模型，知道目标函数要求它学会什么，定位失败原因，建立公平对照，并说明哪项结果改变了自己的判断。',
            '这是我希望在研究训练中真正补上的距离。目标不是继续收集更多相邻项目，而是把一个技术问题做得足够深，以至于能对数据、目标、表征和评价作出并捍卫自己的选择。',
          ],
        },
      },
      {
        heading: { en: 'Continuity can be chosen', zh: '连贯性可以由自己定义' },
        paragraphs: {
          en: [
            'A career story does not need to claim that every earlier step was planned. Mine is better described as a sequence of increasingly precise questions. The object may change—from patients, to cells, to molecules, perhaps one day to other environments—but the interest in learning, simulation, design, and action can remain continuous.',
            'Changing direction is therefore not an erasure. It is a commitment to become more exact about what kind of work I want to be responsible for.',
          ],
          zh: [
            '一条职业叙事不需要假装每个早期选择都经过预先设计。对我来说，更合适的描述是：问题在一步步变得精确。研究对象可以从患者到细胞、分子，未来也可能延伸到其他环境；但对学习、模拟、设计与行动的兴趣可以保持连续。',
            '因此，改变方向不是抹掉过去，而是开始更准确地回答：我究竟希望对哪一种工作负责。',
          ],
        },
      },
    ],
  },
  {
    slug: 'astrology-as-a-language-for-uncertainty',
    date: '2026-10-05',
    category: { en: 'Small mysticism', zh: '一点玄学' },
    title: {
      en: 'Astrology as a language for uncertainty',
      zh: '把玄学当作一种面对不确定性的语言',
    },
    description: {
      en: 'Why symbolic systems can feel useful during uncertain periods—and why they should not be allowed to make the decision.',
      zh: '象征系统为何会在不确定时期提供安慰，以及为什么不该让它替我们作决定。',
    },
    tags: {
      en: ['Mysticism', 'Reflection'],
      zh: ['玄学', '随笔'],
    },
    readTime: { en: '3 min read', zh: '阅读约 3 分钟' },
    deck: {
      en: 'During an application season, silence easily turns into a story about the whole future. A symbolic reading can interrupt that story. I find it useful as metaphor and reflection—not as evidence about what will happen.',
      zh: '申请季里，几次沉默很容易被大脑改写成关于整个人生的故事。象征性的解读有时能打断这种推演。对我而言，它适合用作隐喻和反思，却不能作为未来会怎样的证据。',
    },
    sections: [
      {
        heading: { en: 'What a symbolic reading can do', zh: '象征性解读可以做什么' },
        paragraphs: {
          en: [
            'Metaphors such as “transition,” “pressure,” or “a period of selection” can give shape to an experience that otherwise feels chaotic. Their value is not that the sky has verified a result. Their value is that they help name a fear, separate waiting from failure, and notice where attention has become trapped.',
            'Used gently, a reading becomes a prompt: What am I treating as a verdict? Which uncertainty is real, and which conclusion did I add myself?',
          ],
          zh: [
            '“转换期”“压力”“筛选阶段”这样的隐喻，可以给原本混乱的体验提供一种形状。它的价值不在于星象替现实验证了结果，而在于帮助我给恐惧命名，把“等待”与“失败”分开，并注意到自己的注意力被困在了哪里。',
            '温和地使用时，一次解读更像一组问题：我正在把什么当成判决？哪些不确定性真实存在，哪些结论其实是自己补上去的？',
          ],
        },
      },
      {
        heading: { en: 'What it cannot do', zh: '它不能做什么' },
        paragraphs: {
          en: [
            'It cannot establish whether a paper will be accepted, whether a supervisor has funding, or whether an offer will arrive. Those questions belong to evidence, communication, and institutional decisions. A comforting interpretation is not a probability estimate; an ominous one is not a reason to abandon a sound plan.',
            'That boundary matters most when emotions are already intense. The more I want certainty, the more carefully I should distinguish a narrative that helps me breathe from a claim that asks me to believe it.',
          ],
          zh: [
            '它不能证明论文是否会被接收、导师是否有经费，也不能预测 offer 会不会到来。这些问题属于证据、沟通和制度决策。令人安心的解释不是概率估计；令人不安的解释也不能成为放弃合理计划的理由。',
            '情绪越强烈，这条边界越重要。越是渴望确定性，越要区分：什么只是帮助自己喘口气的叙事，什么是在要求自己把它当成事实。',
          ],
        },
      },
      {
        heading: { en: 'Return to the next controllable step', zh: '最后回到可控制的下一步' },
        paragraphs: {
          en: [
            'After the metaphor has done its work, I want to return to a short horizon: revise the paper, prepare the conversation, write the application, rest, or wait without turning silence into rejection. Symbolic thinking can accompany those actions, but it should not replace them.',
            'Perhaps that is the small place I keep for mysticism: not a machine for foretelling life, but an old vocabulary for noticing how a person lives through uncertainty.',
          ],
          zh: [
            '当隐喻完成作用之后，我仍希望回到较短的时间尺度：修改论文、准备交流、写申请、休息，或者只是等待，而不把沉默直接翻译成拒绝。象征性思考可以陪伴这些行动，却不能替代它们。',
            '这大概是我愿意为玄学保留的一点位置：它不是预测人生的机器，而是一套古老的词汇，帮助人观察自己如何穿过不确定性。',
          ],
        },
      },
    ],
  },
];

export function localized(value, lang) {
  if (typeof value === 'string') return value;
  return value?.[lang] || value?.en || '';
}

export function findNote(slug) {
  return notes.find((note) => note.slug === slug);
}
