"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Award, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const education = [
  {
    school: "香港中文大学",
    degree: "硕士",
    period: "2026.09 - 2028.06 (预计)",
    major: "计算机科学",
    status: "预录取",
  },
  {
    school: "上海交通大学",
    degree: "本科",
    period: "2022.08 - 2026.06",
    major: "电子与计算机工程；辅修：计算机科学与技术",
    status: "校优秀毕业生",
    courses: "数据结构与算法、计算机组成原理、计算机视觉与深度学习、机器学习中的优化",
  },
  {
    school: "凯斯西储大学（美国）",
    degree: "交换学习",
    period: "2025.01 - 2025.05",
    courses: "数据科学导论、全栈开发、Linux和脚本编程",
  },
  {
    school: "萨格勒布大学（克罗地亚）",
    degree: "交换学习",
    period: "2023.01 - 2023.02",
  },
];

const experience = [
  {
    title: "AI应用工程师实习生",
    company: "苏州比特无限智能科技有限公司",
    period: "2026.02 - 至今",
    highlights: [
      "参与公开 ToC AI CAD 产品 Sparkoh 的 Agent 后端与建模智能体开发，围绕自然语言需求到可执行 CAD 模型搭建生成、执行、验证、修复、评估的工程闭环。",
      "将早期分散的 CAD 执行经验迁移到当前服务化主线，梳理会话、草案确认、建模任务、事件流、产物下载等 API 合同，并用测试、部署配置和运行日志守住关键行为边界。",
      "建设质量反馈链路，把源码快照、STEP 产物、Validate 几何摘要、失败证据与 benchmark 结果组织成可复核材料。",
      "长期用飞书文档/知识库沉淀技术方案、实验结论和复盘材料，并结合飞书 CLI、Codex、Claude Code 探索工程文档自动化。",
    ],
  },
  {
    title: "网络安全实习生",
    company: "上海计算机软件技术开发中心",
    period: "2024.08 - 2024.09",
    highlights: [
      "针对侧信道攻击中的加密信息泄露问题，探索 PCA、CNN、Transformer 等方案。",
      "完成能耗迹线特征提取、模型对比实验和技术报告。",
    ],
  },
];

const projects = [
  {
    name: "Sparkoh Agent",
    description: "AI CAD 建模智能体，负责自然语言到 build123d 源码、STEP 产物、几何验证和修复评估闭环。",
    tech: ["Python", "FastAPI", "build123d", "STEP"],
    link: "https://sparkoh-agent-portfolio.vercel.app",
    linkText: "项目说明",
  },
  {
    name: "qq_claw",
    description: "QQ群聊社交推进 Agent 原型，设计结构化卡片、场景引擎、Judge/Studio 双入口与 fallback 快照。",
    tech: ["Next.js", "TypeScript", "Tailwind", "Zod"],
    link: "https://qqclaw.vercel.app",
    linkText: "在线 Demo",
  },
  {
    name: "md2slides",
    description: "Markdown 到 Reveal.js / Beamer 的演示材料生成工具，接入 Kimi AI draft 与访问码校验。",
    tech: ["JavaScript", "Reveal.js", "Beamer", "Vercel"],
    link: "https://md2slides-rouge.vercel.app",
    linkText: "在线 Demo",
  },
  {
    name: "LinguaBreakpoints",
    description: "视频断点式语言学习工具，支持时间戳笔记、片段循环、项目记录和可选 AI 学习建议。",
    tech: ["Express", "MongoDB", "SPA"],
    link: "https://github.com/Jrx2003/LinguaBreakpoints",
    linkText: "GitHub",
  },
];

const skills = {
  "AI/Agent": ["ChatGPT", "Codex", "Claude Code", "Gemini", "Kimi", "Prompt Engineering", "函数调用", "工具循环"],
  "前端与UI": ["Next.js", "React", "Tailwind", "Vue", "HTML/CSS/JavaScript", "Vercel", "产品原型"],
  "后端与工程": ["Python", "FastAPI", "Pydantic", "Node.js/Express", "Docker", "pytest", "Vitest", "Git"],
  "三维与系统": ["build123d", "STEP", "CadQuery", "PCL", "OpenGL", "C/C++", "STM32"],
  "知识库与协作": ["Obsidian", "Claude Code Skill", "飞书文档", "飞书CLI", "GitHub Actions", "个人网站自动更新"],
  "模型与数据": ["PyTorch", "Pandas", "NumPy", "SQL", "Benchmark评测", "实验复盘"],
};

const languages = [
  { name: "英语", level: "TOEFL 100/120" },
  { name: "日语", level: "N2" },
];

export default function ResumePage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 gradient-bg -z-10" />
      <div className="fixed inset-0 grid-pattern -z-10" />

      <div className="relative z-10 py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
              <FileText className="w-4 h-4 text-blue-400" />
              简历
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="gradient-text">徐劼瑞</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI Agent / Web 工具 / 三维图形方向的软件开发者
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/Jrx2003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  GitHub
                </motion.button>
              </a>
              <Link href="/about/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  关于我
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.section {...fadeInUp} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">教育经历</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.school}</h3>
                      <p className="text-muted-foreground">
                        {edu.degree}
                        {edu.major && <> · {edu.major}</>}
                        {edu.status && <span className="ml-2 text-emerald-400">({edu.status})</span>}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  {edu.courses && (
                    <p className="text-sm text-muted-foreground">
                      <span className="text-foreground/60">核心课程：</span>
                      {edu.courses}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">工作经历</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">项目经历</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-5 hover:bg-white/5 transition-colors"
                >
                  <h3 className="font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {project.linkText}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">技能</h2>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm font-medium text-foreground/60 mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span key={skill} className="text-sm px-2.5 py-1 rounded-full bg-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section {...fadeInUp} className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold">语言能力</h2>
            </div>
            <div className="glass rounded-2xl p-6">
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 text-center"
          >
            <p className="text-muted-foreground text-sm">
              纸质/投递版简历会根据岗位方向单独调整，完整材料可联系本人获取。
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
