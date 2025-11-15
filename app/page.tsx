"use client";

import {
  BarChart3,
  Bot,
  Brain,
  CalendarClock,
  CircuitBoard,
  Compass,
  FolderKanban,
  LayoutDashboard,
  MessageSquare,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { Panel } from "@/components/panel";
import { MetricCard } from "@/components/metric-card";
import { ServiceFlowCard } from "@/components/service-flow-card";
import { KanbanColumn } from "@/components/kanban-column";
import { TaskCard } from "@/components/task-card";
import { Timeline } from "@/components/timeline";
import { AssetTile } from "@/components/asset-tile";
import { PromptCard } from "@/components/prompt-card";
import { ModelCard } from "@/components/model-card";
import { Badge } from "@/components/badge";

const metrics = [
  {
    label: "Monthly Recurring",
    value: "$48.7K",
    delta: { value: "+12.4% vs last month", positive: true },
    icon: <BarChart3 size={20} />
  },
  {
    label: "Active Clients",
    value: "18",
    delta: { value: "3 onboarding", positive: true },
    icon: <Users size={20} />
  },
  {
    label: "Model Fleet Uptime",
    value: "99.2%",
    delta: { value: "SLA stable", positive: true },
    icon: <CircuitBoard />
  },
  {
    label: "Creator Focus",
    value: "72%",
    delta: { value: "Deep work slots", positive: true },
    icon: <Sparkles />
  }
];

const serviceFlows = [
  {
    title: "Custom AI Engine Build",
    stage: "Production sprint",
    timeline: "4-week adaptive cycle",
    outcomes: [
      "Model blueprint + competency matrix",
      "Fine-tuning dataset assembled + sanitized",
      "Eval harness + drift monitoring triggers"
    ],
    icon: <Bot size={24} />
  },
  {
    title: "Prompt Architecture Lab",
    stage: "Iteration loop",
    timeline: "3-day ideation pulses",
    outcomes: [
      "Persona-calibrated prompt trees",
      "Test suite with scenario coverage",
      "Playbook export for client workspace"
    ],
    icon: <PenTool size={24} />,
    tone: "cyan" as const
  },
  {
    title: "Brand Persona Kit",
    stage: "Ready for delivery",
    timeline: "Weekly reveal cadence",
    outcomes: [
      "Voice DNA narrative + lexicon",
      "AI style guide and asset rules",
      "Launch scripts + growth hooks"
    ],
    icon: <Sparkles size={24} />,
    tone: "amber" as const
  }
];

type TaskData = {
  title: string;
  subtitle: string;
  due: string;
  focus: string;
  tone?: "accent" | "cyan" | "amber";
};

type KanbanColumnData = {
  title: string;
  accent: string;
  tasks: TaskData[];
};

const kanban: KanbanColumnData[] = [
  {
    title: "Vision Mapping",
    accent: "#8b5cf6",
    tasks: [
      {
        title: "Northstar Narrative Refresh",
        subtitle: "Reframe AI venture thesis for upcoming investor deck.",
        due: "Due Tomorrow",
        focus: "Strategy",
        tone: "accent"
      },
      {
        title: "2024 Q3 Outcome Grid",
        subtitle: "Align growth, product and creator OKRs in one map.",
        due: "Due Friday",
        focus: "Planning",
        tone: "accent"
      }
    ]
  },
  {
    title: "Build Sprint",
    accent: "#0ea5e9",
    tasks: [
      {
        title: "On-site agent training loop",
        subtitle: "Embed site analytics into multi-agent orchestration layer.",
        due: "In 3 days",
        focus: "Dev",
        tone: "cyan" as const
      },
      {
        title: "Latency regression fixes",
        subtitle: "Optimize sampling + caching on subscriber tier models.",
        due: "In 4 days",
        focus: "Ops",
        tone: "cyan" as const
      }
    ]
  },
  {
    title: "Client Delivery",
    accent: "#f59e0b",
    tasks: [
      {
        title: "Muse Studio drop",
        subtitle: "Ship brand kit + motion templates to Horizon Labs.",
        due: "Today",
        focus: "Delivery",
        tone: "amber" as const
      },
      {
        title: "Workflow audit playback",
        subtitle: "Record Loom walkthrough for Axiom Systems team.",
        due: "In 2 days",
        focus: "Audit",
        tone: "amber" as const
      }
    ]
  }
];

const clientOps = [
  {
    name: "Horizon Labs",
    focus: "Creative engine build",
    status: "Deliver assets",
    window: "Drop at 5pm PST",
    icon: <Sparkles size={18} />
  },
  {
    name: "Axiom Systems",
    focus: "Workflow automation",
    status: "Audit playback",
    window: "Record by Thu",
    icon: <WorkflowIcon size={18} />
  },
  {
    name: "Beacon Collective",
    focus: "Persona kit rollout",
    status: "Feedback sync",
    window: "Set session",
    icon: <MessageSquare size={18} />
  }
];

const timeline = [
  {
    time: "09:00 • Deep Work",
    title: "Train 'Atlas-Synth' v2",
    detail: "Kick adaptive fine-tune on customer transcripts + QA guardrails.",
    tone: "accent" as const,
    badge: "Model Ops"
  },
  {
    time: "11:30 • Client Pulse",
    title: "Horizon Labs live review",
    detail: "Demo generative storyboard engine + capture revisions.",
    tone: "cyan" as const,
    badge: "Delivery"
  },
  {
    time: "14:00 • Growth",
    title: "Launch newsletter drop",
    detail: "Feature Prompt Vault updates + new subscription tier benefits.",
    tone: "amber" as const,
    badge: "Marketing"
  },
  {
    time: "16:00 • Ops Sync",
    title: "System health sweep",
    detail: "Check evaluation dashboards + rotate access tokens.",
    tone: "accent" as const,
    badge: "Ops"
  }
];

const assets = [
  {
    title: "Persona Multiverse Kit",
    category: "Brand DNA",
    status: "In refinement",
    palette: ["#8b5cf6", "#22d3ee"] as [string, string]
  },
  {
    title: "Neon Drift Motion Pack",
    category: "Creative Engine",
    status: "Ready to ship",
    palette: ["#f97316", "#6366f1"] as [string, string]
  },
  {
    title: "Prompt Vault Vol. 05",
    category: "Subscription Assets",
    status: "Live for PRO tier",
    palette: ["#14b8a6", "#a855f7"] as [string, string]
  }
];

const prompts = [
  {
    title: "Conversion Agent - Launch Play",
    audience: "Growth",
    core:
      "Design a 5-email micro-campaign introducing the Atlas-Synth co-pilot to data-focused founders.",
    context:
      "Blend proof points from latest workflow audit, highlight time-to-value, keep tone bold yet grounded."
  },
  {
    title: "Workflow Audit Insight Synthesizer",
    audience: "Consulting",
    core:
      "Summarize top 3 friction points from recorded Loom plus CRM notes, propose automation experiments.",
    context:
      "Output as executive brief with scoring, ROI estimates and immediate actions."
  },
  {
    title: "Brand Persona Aligner",
    audience: "Creative",
    core:
      "Generate a persona call script that anchors the Horizon Labs voice framework across channels.",
    context:
      "Include warm-up, story arc prompts, and alignment checkpoints mapped to brand values."
  }
];

const models = [
  {
    name: "Atlas-Synth",
    tier: "PRO",
    subscribers: 268,
    utilization: 84,
    accent: "linear-gradient(135deg,#8b5cf6,#22d3ee)"
  },
  {
    name: "Muse-Forge",
    tier: "PLUS",
    subscribers: 193,
    utilization: 68,
    accent: "linear-gradient(135deg,#f97316,#a855f7)"
  },
  {
    name: "Sentinel-Audit",
    tier: "CORE",
    subscribers: 142,
    utilization: 74,
    accent: "linear-gradient(135deg,#0ea5e9,#22c55e)"
  }
];

const controlRoom = [
  {
    title: "Model Health",
    description:
      "Latency steady at 420ms p95, drift risk low. Weekly eval suite passed 26/26 checks.",
    icon: <ShieldCheck size={18} />,
    tone: "accent" as const
  },
  {
    title: "Growth Momentum",
    description:
      "Launch list warmed to 3.4k subscribers. Conversion engine experiment running at +18% CTR.",
    icon: <Rocket size={18} />,
    tone: "cyan" as const
  },
  {
    title: "Focus Calendar",
    description:
      "Next deep work windows locked Tue/Wed 7-11am. Schedule protected from calls.",
    icon: <CalendarClock size={18} />,
    tone: "amber" as const
  }
];

function WorkflowIcon({ size }: { size: number }) {
  return <CircuitBoard size={size} />;
}

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="mesh pointer-events-none" />
      <section className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col gap-10 px-8 py-12">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="gradient-border overflow-hidden rounded-3xl border border-white/10 bg-base-900/80 p-8 shadow-glow"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-4">
              <Badge tone="accent">Command Nexus</Badge>
              <h1 className="text-4xl font-semibold text-slate-50 md:text-5xl">
                Orchestrate every AI service from one intelligent cockpit.
              </h1>
              <p className="text-lg text-slate-300">
                Plan visionary moves, engineer bespoke models, deliver creative
                excellence and run your entire solo empire with ruthless focus.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl bg-base-800/80 p-6 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Brain size={20} className="text-accent-300" />
                <span>Deep work sequence live</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-cyan-300" />
                <span>3 automations triggered today</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare size={20} className="text-amber-300" />
                <span>Client feedback windows synced</span>
              </div>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard
                key={metric.label}
                label={metric.label}
                value={metric.value}
                delta={metric.delta}
                icon={metric.icon}
              />
            ))}
          </div>
        </motion.header>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-8">
            <Panel
              title="Service Architecture Studio"
              description="Move client work from spark to delivery with handcrafted flows and transparent tracking."
              accent={<Bot size={20} className="text-accent-300" />}
            >
              <div className="grid gap-6 lg:grid-cols-3">
                {serviceFlows.map((service) => (
                  <ServiceFlowCard
                    key={service.title}
                    title={service.title}
                    stage={service.stage}
                    timeline={service.timeline}
                    outcomes={service.outcomes}
                    icon={service.icon}
                    tone={service.tone}
                  />
                ))}
              </div>
            </Panel>

            <Panel
              title="Execution Atlas"
              description="Current sprint focus with strategic, build, and delivery tracks in motion."
              accent={<FolderKanban size={20} className="text-cyan-300" />}
            >
              <div className="flex flex-col gap-5 lg:flex-row">
                {kanban.map((column) => (
                  <KanbanColumn
                    key={column.title}
                    title={column.title}
                    accent={column.accent}
                    count={column.tasks.length}
                  >
                    {column.tasks.map((task) => (
                      <TaskCard
                        key={task.title}
                        title={task.title}
                        subtitle={task.subtitle}
                        due={task.due}
                        focus={task.focus}
                        tone={task.tone}
                      />
                    ))}
                  </KanbanColumn>
                ))}
              </div>
            </Panel>

            <Panel
              title="Creative & Asset Vault"
              description="High-impact deliverables staged for client drops and subscription releases."
              accent={<Sparkles size={20} className="text-amber-300" />}
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {assets.map((asset) => (
                  <AssetTile key={asset.title} {...asset} />
                ))}
              </div>
            </Panel>

            <Panel
              title="Prompt Intelligence Board"
              description="Ready-to-launch prompt systems organized by business function."
              accent={<PenTool size={20} className="text-accent-300" />}
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {prompts.map((prompt) => (
                  <PromptCard key={prompt.title} {...prompt} />
                ))}
              </div>
            </Panel>
          </div>

          <div className="flex flex-col gap-8">
            <Panel
              title="Mission Control"
              description="Stay present with live signal on models, momentum and focus."
              accent={<LayoutDashboard size={20} className="text-accent-300" />}
            >
              <div className="flex flex-col gap-4">
                {controlRoom.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/8 bg-base-800/70 p-4"
                  >
                    <span className="mt-1 text-accent-200">{item.icon}</span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-semibold text-slate-100">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel
              title="Client Ops Radar"
              description="Critical client pulses and promised outcomes across your book of business."
              accent={<MessageSquare size={20} className="text-cyan-300" />}
            >
              <ul className="flex flex-col gap-4">
                {clientOps.map((client) => (
                  <li
                    key={client.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-base-800/70 p-4"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-slate-100">
                        {client.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {client.focus}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col text-right text-xs text-slate-400">
                        <span className="font-medium text-slate-100">
                          {client.status}
                        </span>
                        <span>{client.window}</span>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-base-700 text-accent-200">
                        {client.icon}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel
              title="Focused Flight Plan"
              description="Time-boxed agenda ensures strategic, build, delivery loops stay balanced."
              accent={<Compass size={20} className="text-amber-300" />}
            >
              <Timeline events={timeline} />
            </Panel>

            <Panel
              title="Model Portfolio"
              description="Tiered prompt + model subscriptions with live utilization."
              accent={<CircuitBoard size={20} className="text-accent-300" />}
            >
              <div className="grid gap-5">
                {models.map((model) => (
                  <ModelCard key={model.name} {...model} />
                ))}
              </div>
            </Panel>

            <Panel
              title="Automation Switchboard"
              description="Trigger-ready automations to reclaim focus and deliver faster."
              accent={<Zap size={20} className="text-cyan-300" />}
            >
              <div className="grid gap-4">
                {[
                  {
                    title: "Client kickoff intelligence pack",
                    detail:
                      "Auto-generate research brief, project tracker and messaging tone benchmarks."
                  },
                  {
                    title: "Prompt subscription refresh",
                    detail:
                      "Schedule drop with new guardrails and push to PRO tier with staged access."
                  },
                  {
                    title: "Ops hygiene sweep",
                    detail:
                      "Rotate API keys, archive outdated assets and notify subscribers of updates."
                  }
                ].map((automation) => (
                  <div
                    key={automation.title}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-white/8 bg-base-800/70 p-4"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-slate-100">
                        {automation.title}
                      </span>
                      <span className="text-xs text-slate-400">
                        {automation.detail}
                      </span>
                    </div>
                    <button className="rounded-full border border-accent-500/40 bg-accent-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-200 transition hover:border-accent-300 hover:text-white">
                      Trigger
                    </button>
                  </div>
                ))}
              </div>
            </Panel>
          </div>
        </section>
      </section>
    </main>
  );
}
