"use client";

import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Cpu,
  Boxes,
  Globe,
  GitBranch,
  Database,
  ArrowRight,
  Star,
  FileText,
  Gamepad2,
} from "lucide-react";

const projects = [
  {
    title: "Sparkoh Agent",
    description:
      "ToC AI CAD 产品中的建模智能体工作：把自然语言到 CAD 模型的过程组织成可执行、可验证、可修复、可评估的工程闭环。",
    icon: Cpu,
    color: "text-cyan-400",
    bgColor: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/20",
    tags: ["Python", "FastAPI", "build123d", "STEP", "Benchmark"],
    url: "https://sparkoh-agent-portfolio.vercel.app",
    linkLabel: "项目说明",
    featured: true,
    details: [
      "Sparkoh 官方产品入口为 sparkoh.ai；此处链接到个人公开贡献页",
      "负责建模 Agent 核心循环：生成或编辑 build123d Python 源码，在 Sandbox 中执行并导出 STEP",
      "连接预检查、执行、Validate 几何摘要、失败证据和多轮修复提示，使 Agent 能围绕具体错误继续迭代",
      "接入 STEP evaluator、benchmark dashboard 和 review package，把运行结果推进到几何质量复查",
    ],
  },
  {
    title: "qq_claw",
    description:
      "QQ群聊社交推进 Agent 原型，把约饭、开黑、匿名倡议、冲突桥梁和局后回忆抽象为结构化行动闭环。",
    icon: Globe,
    color: "text-purple-400",
    bgColor: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/20",
    tags: ["Next.js", "TypeScript", "Tailwind", "Zod"],
    url: "https://qqclaw.vercel.app",
    linkLabel: "在线 Demo",
    featured: true,
    details: [
      "设计 scenario engine、结构化卡片组件和 Judge / Studio 双入口",
      "为意图提取、匿名倡议、冲突转述、活动回忆和游戏局总结编写 prompt、JSON schema、Zod 校验与 fallback 快照",
      "用 mock / snapshot / live fallback 支持产品原型展示和评测调试",
    ],
  },
  {
    title: "Claude Code 源码研究",
    description:
      "基于公开 Claude Code TypeScript 源码快照做 Agentic Developer Tool 架构研究，重点关注工具注册、权限系统、MCP/Skill 和会话状态。",
    icon: GitBranch,
    color: "text-emerald-400",
    bgColor: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/20",
    tags: ["TypeScript", "Bun", "Ink", "MCP", "Skill"],
    url: "https://github.com/instructkr/claude-code",
    linkLabel: "参考仓库",
    featured: false,
    details: [
      "梳理 CLI 入口、QueryEngine、工具注册、权限系统、MCP/Skill、记忆目录等核心模块",
      "分析用户输入、系统上下文、工具集合、权限检查、流式消息、token/cost 跟踪和会话持久化",
    ],
  },
  {
    title: "md2slides",
    description:
      "AI 辅助演示材料生成工具，将 Markdown 转换为 Reveal.js HTML 幻灯片或 LaTeX Beamer 文档，并提供可控 AI draft 接口。",
    icon: FileText,
    color: "text-amber-400",
    bgColor: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/20",
    tags: ["JavaScript", "Reveal.js", "Beamer", "Vercel"],
    url: "https://md2slides-rouge.vercel.app",
    linkLabel: "在线 Demo",
    featured: false,
    details: [
      "提供源文本编辑、输出设置、实时预览、复制、下载和新窗口打开流程",
      "将原 CGI/AWK 脚本升级为 Vercel 静态前端 + Serverless AI 接口，接入 Kimi 并增加访问码校验",
    ],
  },
  {
    title: "LinguaBreakpoints",
    description:
      "视频断点式语言学习工具，围绕视频片段、时间戳笔记、循环练习和 AI 学习建议组织学习流程。",
    icon: Database,
    color: "text-blue-400",
    bgColor: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/20",
    tags: ["Express", "MongoDB", "SPA", "OpenAI"],
    url: "https://github.com/Jrx2003/LinguaBreakpoints",
    linkLabel: "GitHub",
    featured: false,
    details: [
      "支持项目管理、视频 URL、时间戳断点、可编辑笔记、片段循环和项目级学习记录",
      "提供可选 AI study coach；无 API key 时可使用本地 fallback，保证基础流程可运行",
    ],
  },
  {
    title: "P2M 实时网格重建",
    description:
      "基于 RGB-D 相机、PCL 和 OpenGL 的实时三维重建系统，关注点云采集、网格生成、渲染与导出。",
    icon: Boxes,
    color: "text-teal-400",
    bgColor: "from-teal-500/20 to-emerald-500/20",
    borderColor: "border-teal-500/20",
    tags: ["C++", "PCL", "OpenGL", "RGB-D"],
    url: "https://github.com/Jrx2003/p2m_cpu",
    linkLabel: "GitHub",
    featured: false,
    details: [
      "使用 Orbbec SDK 采集 RGB-D 数据，并基于 PCL Organized Fast Mesh 生成网格",
      "实现点云、网格、线框和相机视角渲染，并支持 PLY 结果导出",
    ],
  },
  {
    title: "STM32RhythmGame",
    description:
      "基于 STM32F103C8T6 的嵌入式节奏游戏，整合按键输入、OLED 显示和蜂鸣器/PWM 音频反馈。",
    icon: Gamepad2,
    color: "text-rose-400",
    bgColor: "from-rose-500/20 to-red-500/20",
    borderColor: "border-rose-500/20",
    tags: ["STM32", "C", "OLED", "PWM"],
    url: "https://github.com/Jrx2003/STM32RhythmGame",
    linkLabel: "GitHub",
    featured: false,
    details: [
      "完成节奏判定、按键交互、显示刷新和音频提示等嵌入式交互流程",
      "在资源受限硬件上组织游戏状态、输入响应和外设驱动协同",
    ],
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 gradient-bg -z-10" />
      <div className="fixed inset-0 grid-pattern -z-10" />

      <div className="relative z-10 py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              项目集
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="gradient-text">我的项目</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              覆盖 AI Agent、Web 产品原型、三维图形、语言学习工具和嵌入式开发。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              精选项目
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`glass rounded-2xl p-6 h-full border ${project.borderColor}`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                          <project.icon className={`w-7 h-7 ${project.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <span className="text-sm text-muted-foreground">Featured</span>
                        </div>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`打开 ${project.title}`}
                        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    <ul className="space-y-3 mb-6">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-3 min-w-0">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-none ${project.color.replace("text-", "bg-")}`} />
                          <span className="min-w-0 flex-1 leading-relaxed break-words">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium glass"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              其他项目
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`glass rounded-2xl p-6 h-full border ${project.borderColor} hover:bg-white/5 transition-colors`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.bgColor} flex items-center justify-center`}>
                        <project.icon className={`w-5 h-5 ${project.color}`} />
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`打开 ${project.title}`}
                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                    <ul className="space-y-2 mb-4">
                      {project.details.slice(0, 2).map((detail, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2 min-w-0">
                          <span className={`w-1 h-1 rounded-full mt-1 flex-none ${project.color.replace("text-", "bg-")}`} />
                          <span className="min-w-0 flex-1 leading-relaxed break-words">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full text-xs glass"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="glass rounded-2xl p-8 max-w-xl mx-auto">
              <Github className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">更多项目</h3>
              <p className="text-muted-foreground mb-6">
                在 GitHub 上查看我的更多开源项目和代码贡献。
              </p>
              <a
                href="https://github.com/Jrx2003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors"
              >
                访问 GitHub
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
