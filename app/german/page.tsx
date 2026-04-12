"use client";

import { sectionAnimations } from "@/animations";
import { motion } from "framer-motion";
import { useState } from "react";

const phases = [
  {
    id: 1,
    level: "A1",
    title: "Die Grundlage",
    subtitle: "Building the Foundation",
    months: "Months 1–2 (Apr – May 2026)",
    goals: [
      "Master the German alphabet, pronunciation, and basic phonetics",
      "Learn 800–1000 most common words via Anki flashcards",
      "Handle greetings, introductions, ordering food, asking directions",
      "Understand basic grammar: present tense, articles (der/die/das), noun genders, accusative case",
      "Complete DW Nicos Weg A1 (all 76 episodes)",
    ],
    daily: [
      {
        time: "30 min",
        task: "Anki Flashcards",
        detail:
          "New cards + review. Use the A1–B1 frequency deck. Target 25 new words/day.",
      },
      {
        time: "30 min",
        task: "Grammar Book",
        detail:
          "Work through 'Beginner German: A Grammar and Workbook' (Routledge). Do every exercise. Cover 3–4 pages/day.",
      },
      {
        time: "30 min",
        task: "DW Nicos Weg A1",
        detail:
          "Watch 2 episodes/day. Do ALL interactive exercises. Repeat audio until you can shadow the speakers.",
      },
      {
        time: "30 min",
        task: "Group Speaking",
        detail:
          "Practice dialogues from the day's lesson with your friends. Role-play: one person is the shopkeeper, one the customer, etc.",
      },
      {
        time: "30 min",
        task: "Listening + Review",
        detail:
          "Listen to DW Langsam gesprochene Nachrichten (slow news). Don't worry about understanding everything — just tune your ear.",
      },
    ],
    weekly: [
      "Saturday: Group quiz — test each other on the week's vocabulary using Anki",
      "Sunday: Watch one episode of 'Extra auf Deutsch' (beginner sitcom on YouTube) together. Pause, discuss, repeat phrases.",
      "Mid-week: Pair up and call each other for 15 min — German only, no matter how broken. Use 'Bitte?' and 'Was bedeutet das?' constantly.",
    ],
    milestone:
      "Take a Goethe A1 practice test online. Target: 60%+ to confirm readiness to move on.",
    examTip:
      "Register for Goethe A1 exam in Islamabad — next dates: May 22–24 or June 19–21, 2026.",
  },
  {
    id: 2,
    level: "A2",
    title: "Der Aufbau",
    subtitle: "Expanding the Framework",
    months: "Months 3–4 (Jun – Jul 2026)",
    goals: [
      "Reach 2000+ active words",
      "Handle past tense (Perfekt), modal verbs, dative case, two-way prepositions",
      "Describe daily routines, make appointments, talk about experiences",
      "Complete DW Nicos Weg A2 (all episodes)",
      "Start reading simple German texts (children's news, easy articles)",
    ],
    daily: [
      {
        time: "30 min",
        task: "Anki Flashcards",
        detail:
          "Continue A1–B1 deck. Add custom cards from Nicos Weg vocabulary. Target 20 new words/day + review.",
      },
      {
        time: "30 min",
        task: "Grammar Book",
        detail:
          "Switch to 'Intermediate German: A Grammar and Workbook' (Routledge). Cover prepositions + cases thoroughly.",
      },
      {
        time: "30 min",
        task: "DW Nicos Weg A2",
        detail:
          "2 episodes/day. Start shadowing — repeat sentences immediately after hearing them, matching intonation.",
      },
      {
        time: "30 min",
        task: "Group Conversation",
        detail:
          "Pick a daily theme (Wohnung, Arbeit, Reise). Each person speaks for 2 min about the topic. Others ask follow-up questions.",
      },
      {
        time: "30 min",
        task: "Reading + Dict",
        detail:
          "Read one article from nachrichtenleicht.de (simplified news). Look up max 10 words in dict.cc. Add to Anki.",
      },
    ],
    weekly: [
      "Saturday: Group role-play — simulate real-life scenarios (renting a flat, visiting a doctor, buying groceries). Rotate roles.",
      "Sunday: Watch 'Nicos Weg A2' recap episodes together + play Kahoot quizzes on week's grammar.",
      "Mid-week: Write a short paragraph (5–7 sentences) about your day in German. Share in group chat. Correct each other.",
    ],
    milestone:
      "Take a Goethe A2 practice test. Target: 55%+. Focus on Hören (listening) and Lesen (reading) sections.",
    examTip:
      "Register for Goethe A2 exam — dates: July 24–26 or August 21–23, 2026 in Islamabad.",
  },
  {
    id: 3,
    level: "B1",
    title: "Die Vertiefung",
    subtitle: "Going Deeper",
    months: "Months 5–6 (Aug – Sep 2026)",
    goals: [
      "Reach 4000+ active words",
      "Master Nebensätze (subordinate clauses), Konjunktiv II, passive voice, relative pronouns",
      "Understand and participate in discussions about familiar topics",
      "Complete DW Nicos Weg B1",
      "Start consuming real German media (with subtitles)",
    ],
    daily: [
      {
        time: "30 min",
        task: "Anki Flashcards",
        detail:
          "Finish the A1–B1 frequency list. Start adding words from DW Top-Thema articles. Target 15 new + heavy review.",
      },
      {
        time: "30 min",
        task: "Grammar Book",
        detail:
          "Switch to 'Grundstufen-Grammatik' by Monika Reimann (all in German now!). Cover Nebensätze, Konjunktiv II, Passiv.",
      },
      {
        time: "45 min",
        task: "DW Content Mix",
        detail:
          "1× Nicos Weg B1 episode (meticulous: pause, understand everything). Then 3× DW Top-Thema clips (no pausing — real-time listening).",
      },
      {
        time: "30 min",
        task: "Group Debate",
        detail:
          "Pick a topic (should universities be free? is remote work better?). Each person argues a position for 3 min. Discuss in German.",
      },
      {
        time: "15 min",
        task: "Journal",
        detail:
          "Write 8–10 sentences in German about anything. Use new grammar structures. Review previous entries for errors.",
      },
    ],
    weekly: [
      "Saturday: Group presentation — each person prepares a 5-min talk on a topic (their job, a hobby, a news story). Others ask questions.",
      "Sunday: Watch a German show together (Tatort, Dark, Stromberg) with German subtitles. Discuss plot in German afterward.",
      "Mid-week: Do one DW Top-Thema together — listen, then each person summarizes what they understood. Compare notes.",
    ],
    milestone:
      "Take a full Goethe B1 practice test. This is your stretch goal. Even 40–50% here means you're well-prepared for life in Germany.",
    examTip:
      "If you're confident, register for Goethe B1 — but A2 certificate is more realistic and still valuable for your visa file.",
  },
  {
    id: 4,
    level: "B1+",
    title: "Die Vorbereitung",
    subtitle: "Pre-Departure Intensive",
    months: "Months 7–8 (Sep – Oct 2026)",
    goals: [
      "Consolidate all grammar — fill gaps, review weak areas",
      "Build Kassel-specific vocabulary (university, Studierendenwerk, Mensa, Semesterticket, Anmeldung, Aufenthaltstitel)",
      "Practice real-life Germany scenarios (Ausländerbehörde, bank account, doctor visit, supermarket)",
      "Reach 5000+ active words",
      "Build confidence for Day 1 in Germany",
    ],
    daily: [
      {
        time: "30 min",
        task: "Anki Flashcards",
        detail:
          "Focus on B1 vocabulary + Germany life vocabulary (Bürgeramt, Krankenkasse, Mietvertrag, etc.). Pure review mode.",
      },
      {
        time: "30 min",
        task: "Grammar Review",
        detail:
          "Go through 'em Übungsgrammatik' — focus on your weakest areas. Do exercises, check answers, repeat.",
      },
      {
        time: "30 min",
        task: "DW Video-Thema",
        detail:
          "Graduate to Video-Thema (B2/C1). Do 1 meticulously + 3 in real-time. This is the Reddit poster's #1 recommended resource.",
      },
      {
        time: "30 min",
        task: "Scenario Drills",
        detail:
          "Group: simulate Anmeldung at Bürgeramt, opening a bank account, registering at university. Use real forms if possible.",
      },
      {
        time: "30 min",
        task: "German Media",
        detail:
          "Watch ZDF Terra X or Planet-e documentaries with German subtitles. Note new words in dict.cc's built-in flashcard system.",
      },
    ],
    weekly: [
      "Saturday: Mock 'first week in Kassel' — practice: introducing yourself to flatmates, asking for directions to campus, ordering at Mensa.",
      "Sunday: German movie night — pick a film, watch with German subs, then discuss entirely in German.",
      "Throughout: Switch your phone, laptop, and social media to German. Change Google/YouTube language to German.",
    ],
    milestone:
      "You should be able to: introduce yourself fluently, handle basic daily interactions, understand slow-spoken German, and read simple texts without a dictionary.",
    examTip:
      "If you haven't taken Goethe A2 yet, this is your last window. Having any Goethe certificate adds credibility to your visa application.",
  },
];

const resources = {
  courses: [
    {
      name: "DW Nicos Weg (A1→B1)",
      url: "https://learngerman.dw.com/en/nicos-weg/c-36519687",
      price: "Free",
      priority: "essential",
      desc: "Your primary structured course. Video-based, interactive, covers A1 through B1. Do every exercise.",
    },
    {
      name: "DW Top-Thema (B1)",
      url: "https://learngerman.dw.com/en/top-thema/s-55861562",
      price: "Free",
      priority: "essential",
      desc: "Short audio clips with transcripts and vocab. The Reddit poster's #1 recommended tool.",
    },
    {
      name: "DW Video-Thema (B2/C1)",
      url: "https://learngerman.dw.com/en/video-thema/s-55862284",
      price: "Free",
      priority: "high",
      desc: "Graduate to this in months 5+. 4–6 min clips with exercises and vocabulary.",
    },
    {
      name: "Goethe Institut Online Course",
      url: "https://www.goethe.de/en/spr/kur.html",
      price: "~€800/level",
      priority: "optional",
      desc: "Structured live classes with certified teachers. Consider A1 or A2 if self-study feels insufficient.",
    },
  ],
  books: [
    {
      name: "Beginner German: A Grammar and Workbook",
      author: "Routledge",
      level: "A1",
      price: "~$30",
      note: "Months 1–2. Do 95–100% of exercises.",
    },
    {
      name: "Intermediate German: A Grammar and Workbook",
      author: "Routledge",
      level: "A2",
      price: "~$30",
      note: "Months 3–4. Same publisher, seamless transition.",
    },
    {
      name: "Grundstufen-Grammatik für DaF",
      author: "Monika Reimann",
      level: "A2–B1",
      price: "~€25",
      note: "Months 4–5. All in German — this is your immersion grammar book.",
    },
    {
      name: "em Übungsgrammatik",
      author: "Hueber",
      level: "B1–B2",
      price: "~€25",
      note: "Months 6–8. Advanced grammar practice.",
    },
  ],
  apps: [
    {
      name: "Anki",
      price: "Free (Android/Desktop), $25 (iOS)",
      desc: "THE flashcard app. Spaced repetition. Non-negotiable. Search for 'German A1-B1 frequency list' decks.",
    },
    {
      name: "dict.cc",
      price: "~€10",
      desc: "Best German-English dictionary. Works offline. Has built-in flashcard export. Worth every penny.",
    },
    {
      name: "DW Learn German",
      price: "Free",
      desc: "Official Deutsche Welle app. Access Nicos Weg and all DW content on mobile.",
    },
    {
      name: "Linguee",
      price: "Free",
      desc: "Context-based translations. Shows how words are used in real sentences.",
    },
    {
      name: "ChatGPT / Claude",
      price: "Varies",
      desc: "Practice conversations, get grammar explanations, generate example sentences. Your 24/7 tutor.",
    },
  ],
  media: [
    {
      name: "Extra auf Deutsch",
      type: "YouTube Series",
      level: "A1–A2",
      desc: "Beginner sitcom. Hilarious and educational. Perfect for months 1–3.",
    },
    {
      name: "Langsam gesprochene Nachrichten",
      type: "DW Podcast",
      level: "A2–B1",
      desc: "Real news read slowly. Daily episodes. Train your ear.",
    },
    {
      name: "Easy German",
      type: "YouTube Channel",
      level: "A2–B2",
      desc: "Street interviews with subtitles in German AND English. Real spoken German.",
    },
    {
      name: "Terra X / Planet-e",
      type: "ZDF Documentaries",
      level: "B1+",
      desc: "German documentaries with subtitles. Great for expanding vocabulary.",
    },
    {
      name: "Dark / Tatort / Stromberg",
      type: "Netflix/ARD",
      level: "B1+",
      desc: "German shows with German subtitles. Use VPN for German Netflix if needed.",
    },
  ],
  grammar: [
    {
      name: "Dartmouth German Grammar",
      url: "https://www.dartmouth.edu/~deutsch/Grammatik/Grammatik.html",
      desc: "Free, comprehensive, in English. Perfect reference for A1–B1 grammar questions.",
    },
    {
      name: "COERLL UT Austin Grammar",
      url: "https://coerll.utexas.edu/gg/index.html",
      desc: "Interactive grammar reference. Good for visual learners.",
    },
    {
      name: "DeutschAkademie",
      url: "https://www.deutschakademie.de/online-deutschkurs/",
      desc: "Free grammar exercises organized by level and textbook chapter.",
    },
    {
      name: "mein-deutschbuch.de",
      url: "http://mein-deutschbuch.de/",
      desc: "Detailed grammar explanations in German. Use from A2 onward.",
    },
  ],
};

const kasselVocab = [
  { de: "die Anmeldung", en: "City registration (mandatory within 2 weeks)" },
  { de: "das Bürgeramt", en: "Citizens' office (where you register)" },
  { de: "der Aufenthaltstitel", en: "Residence permit" },
  { de: "die Krankenkasse", en: "Health insurance provider (TK, AOK, Barmer)" },
  { de: "das Semesterticket", en: "Semester transport pass" },
  { de: "die Mensa", en: "University cafeteria" },
  { de: "das Studierendenwerk", en: "Student services organization" },
  { de: "der Mietvertrag", en: "Rental contract" },
  { de: "die Kaution", en: "Security deposit" },
  { de: "das Sperrkonto", en: "Blocked account" },
  { de: "die Vorlesung", en: "Lecture" },
  { de: "die Übung", en: "Tutorial / exercise session" },
  { de: "die Sprechstunde", en: "Office hours" },
  { de: "die Prüfung", en: "Exam" },
  { de: "das Sommersemester", en: "Summer semester" },
  { de: "das Wintersemester", en: "Winter semester" },
];

const groupRules = [
  {
    rule: "Consistency over intensity",
    detail:
      "2 hours every day beats 8 hours on weekends. Set a fixed time slot. For someone working full-time, 8–10 PM works well. Block it. Non-negotiable.",
  },
  {
    rule: "Accountability buddy system",
    detail:
      "Pair up within the group. Each pair checks in daily: 'Did you do your Anki today?' Share screenshots of streaks. If someone misses 2 days, the buddy calls them.",
  },
  {
    rule: "German-only WhatsApp group",
    detail:
      "Create a separate WhatsApp group where ONLY German is allowed. Even broken German. Use Google Translate if you must. The point is to normalize thinking in German.",
  },
  {
    rule: "Weekly group sessions are sacred",
    detail:
      "Saturday group session is mandatory. If someone can't come in person, they join via video call. No exceptions for 'I'm tired' — show up.",
  },
  {
    rule: "No English during practice time",
    detail:
      "During your 30-min speaking practice, commit to zero English. When you don't know a word, describe it in German: 'Das Ding, das... du weißt... man trinkt Kaffee daraus' (a cup).",
  },
  {
    rule: "Celebrate small wins",
    detail:
      "First time you understand a full DW clip? Celebrate. First time you dream in German? That's huge. Track these moments in the group chat.",
  },
  {
    rule: "Monthly progress check",
    detail:
      "Every 4 weeks, take a level test together (Goethe practice tests online). Compare scores. No shame — it's data, not judgment. Adjust the plan based on where you're weakest.",
  },
  {
    rule: "The 'Bitte?' Rule",
    detail:
      "Get comfortable saying 'Bitte?', 'Was bedeutet das?', and 'Können Sie das wiederholen?' These three phrases are your survival kit in Germany. Practice them until they're reflexive.",
  },
];

const tabs = [
  { id: "plan", label: "Learning Plan" },
  { id: "resources", label: "Resources" },
  { id: "kassel", label: "Kassel Vocab" },
  { id: "rules", label: "Group Rules" },
];

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    essential:
      "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 ring-1 ring-red-500/20 dark:ring-red-500/30",
    high: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 ring-1 ring-amber-500/20 dark:ring-amber-500/30",
    optional:
      "bg-dark-100 text-dark-600 dark:bg-dark-700 dark:text-dark-300 ring-1 ring-dark-300/20 dark:ring-dark-500/30",
  };
  return (
    <span
      className={`rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${styles[priority] || styles.optional}`}
    >
      {priority}
    </span>
  );
}

function PriceBadge({ price }: { price: string }) {
  const isFree = price === "Free";
  return (
    <span
      className={`rounded px-2 py-0.5 text-xs font-semibold ${isFree ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300" : "bg-dark-100 text-dark-600 dark:bg-dark-700 dark:text-dark-300"}`}
    >
      {price}
    </span>
  );
}

function PhaseCard({
  phase,
  isOpen,
  onClick,
}: {
  phase: (typeof phases)[0];
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-all duration-300 ${isOpen ? "border-primary-200 bg-primary-50/30 dark:border-primary-800/50 dark:bg-primary-900/10" : "border-dark-200 dark:border-dark-700 dark:bg-dark-800 bg-white"}`}
    >
      <button
        onClick={onClick}
        className="hover:bg-dark-50/50 dark:hover:bg-dark-700/30 flex w-full items-center gap-4 p-5 text-left transition-colors"
      >
        <div className="from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-700 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-lg font-bold text-white">
          {phase.level}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-dark-800 dark:text-dark-100 text-lg font-bold">
            Phase {phase.id}: {phase.title}
          </div>
          <div className="text-dark-500 dark:text-dark-400 text-sm">
            {phase.subtitle} — {phase.months}
          </div>
        </div>
        <svg
          className={`text-dark-400 h-5 w-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="space-y-6 px-5 pb-6">
          {/* Goals */}
          <div>
            <h4 className="text-primary-600 dark:text-primary-400 mb-3 text-xs font-bold tracking-widest uppercase">
              Goals
            </h4>
            <div className="space-y-2">
              {phase.goals.map((g, i) => (
                <div
                  key={i}
                  className="text-dark-700 dark:text-dark-300 flex items-start gap-2 text-sm leading-relaxed"
                >
                  <span className="bg-primary-500 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Schedule */}
          <div>
            <h4 className="text-primary-600 dark:text-primary-400 mb-3 text-xs font-bold tracking-widest uppercase">
              Daily Schedule (2.5 hrs)
            </h4>
            <div className="space-y-2">
              {phase.daily.map((d, i) => (
                <div
                  key={i}
                  className="border-dark-100 dark:border-dark-700 dark:bg-dark-800/80 rounded-lg border bg-white p-3"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="bg-primary-600 dark:bg-primary-500 rounded px-2 py-0.5 text-[11px] font-bold text-white">
                      {d.time}
                    </span>
                    <span className="text-dark-800 dark:text-dark-100 text-sm font-bold">
                      {d.task}
                    </span>
                  </div>
                  <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Group Activities */}
          <div>
            <h4 className="text-primary-600 dark:text-primary-400 mb-3 text-xs font-bold tracking-widest uppercase">
              Weekly Group Activities
            </h4>
            <div className="space-y-2">
              {phase.weekly.map((w, i) => (
                <div
                  key={i}
                  className="text-dark-700 dark:text-dark-300 flex items-start gap-2 text-sm leading-relaxed"
                >
                  <span className="text-primary-500 mt-1">●</span>
                  <span>{w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone */}
          <div className="border-primary-200 bg-primary-50/50 dark:border-primary-800/40 dark:bg-primary-900/20 rounded-lg border p-4">
            <div className="text-primary-700 dark:text-primary-400 mb-1 text-xs font-bold tracking-widest uppercase">
              Milestone Check
            </div>
            <p className="text-dark-700 dark:text-dark-300 text-sm leading-relaxed">
              {phase.milestone}
            </p>
          </div>

          {/* Exam Tip */}
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-800/40 dark:bg-amber-900/20">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
              📋 {phase.examTip}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GermanLearningPlan() {
  const [openPhase, setOpenPhase] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState("plan");
  const { container: containerVariants, item: itemVariants } =
    sectionAnimations;

  return (
    <section className="section-gradient-neutral min-h-screen py-20">
      <div className="container-max section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <p className="text-primary-600 dark:text-primary-400 mb-3 text-xs font-bold tracking-[0.2em] uppercase">
              A0 → B1 in 8 Months
            </p>
            <h1 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
              Deutsch lernen, <span className="gradient-text">zusammen.</span>
            </h1>
            <p className="text-dark-500 dark:text-dark-400 text-lg">
              A group learning plan for Moin &amp; friends — Kassel, WS 2026
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="border-primary-200 bg-primary-50/40 dark:border-primary-800/40 dark:bg-primary-900/20 mb-10 grid grid-cols-3 gap-4 rounded-xl border p-5"
          >
            {[
              { value: "~16", label: "hrs/week" },
              { value: "~512", label: "total hours" },
              { value: "5000+", label: "target words" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-primary-700 dark:text-primary-400 text-2xl font-bold">
                  {stat.value}
                </div>
                <div className="text-dark-500 dark:text-dark-400 text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants}>
            <div className="border-dark-200 dark:border-dark-700 mb-8 flex gap-1 overflow-x-auto border-b">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`border-b-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400"
                      : "text-dark-500 hover:text-dark-700 dark:text-dark-400 dark:hover:text-dark-200 border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Plan Tab */}
            {activeTab === "plan" && (
              <motion.div className="space-y-4">
                {phases.map(phase => (
                  <PhaseCard
                    key={phase.id}
                    phase={phase}
                    isOpen={openPhase === phase.id}
                    onClick={() =>
                      setOpenPhase(openPhase === phase.id ? null : phase.id)
                    }
                  />
                ))}

                {/* Golden Rule */}
                <div className="border-primary-300 from-primary-50 to-primary-100 dark:border-primary-700/50 dark:from-primary-900/30 dark:to-primary-800/20 mt-8 rounded-xl border bg-gradient-to-br p-6">
                  <h3 className="text-primary-800 dark:text-primary-300 mb-2 text-lg font-bold">
                    The Reddit Poster&apos;s Golden Rule
                  </h3>
                  <p className="text-primary-900/80 dark:text-primary-200/80 mb-3 text-sm leading-relaxed">
                    For every piece of content, use this method:{" "}
                    <strong>1 clip meticulously</strong> (pause, understand
                    everything, 20–30 min) then{" "}
                    <strong>5 clips in real-time</strong> (no pausing, like real
                    life). This builds both accuracy and speed.
                  </p>
                  <p className="text-primary-900/80 dark:text-primary-200/80 text-sm leading-relaxed">
                    Also: learn verbs WITH their prepositions and cases. Not
                    just &quot;warten&quot; but{" "}
                    <strong>&quot;warten auf + Akkusativ&quot;</strong>. This
                    single habit will save you months of confusion later.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Resources Tab */}
            {activeTab === "resources" && (
              <motion.div className="space-y-10">
                {[
                  {
                    title: "Core Courses",
                    items: resources.courses,
                    showPriority: true,
                  },
                  {
                    title: "Grammar Books (Buy in Order)",
                    items: resources.books,
                  },
                  { title: "Essential Apps", items: resources.apps },
                  { title: "Media & Entertainment", items: resources.media },
                  { title: "Grammar References", items: resources.grammar },
                ].map(section => (
                  <div key={section.title}>
                    <h3 className="text-dark-800 dark:text-dark-100 mb-4 text-lg font-bold">
                      {section.title}
                    </h3>
                    <div className="space-y-2">
                      {section.items.map(
                        (
                          item: {
                            name: string;
                            url?: string;
                            price?: string;
                            priority?: string;
                            level?: string;
                            type?: string;
                            desc?: string;
                            author?: string;
                            note?: string;
                          },
                          i: number,
                        ) => (
                          <div
                            key={i}
                            className="border-dark-200 dark:border-dark-700 dark:bg-dark-800 rounded-lg border bg-white p-4"
                          >
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                              {item.url ? (
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary-600 decoration-primary-300 hover:text-primary-700 dark:text-primary-400 dark:decoration-primary-700 dark:hover:text-primary-300 text-sm font-bold underline underline-offset-2 transition-colors"
                                >
                                  {item.name}
                                </a>
                              ) : (
                                <span className="text-dark-800 dark:text-dark-100 text-sm font-bold">
                                  {item.name}
                                </span>
                              )}
                              {item.price && <PriceBadge price={item.price} />}
                              {item.priority && (
                                <PriorityBadge priority={item.priority} />
                              )}
                              {item.level && (
                                <span className="text-dark-500 dark:text-dark-400 text-xs font-semibold">
                                  {item.level}
                                </span>
                              )}
                              {item.type && (
                                <span className="text-dark-400 dark:text-dark-500 text-xs">
                                  ({item.type})
                                </span>
                              )}
                            </div>
                            <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">
                              {item.desc ||
                                (item.author
                                  ? `by ${item.author}${item.note ? ` — ${item.note}` : ""}`
                                  : item.note)}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                ))}

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800/40 dark:bg-amber-900/20">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                    💡 Total investment: ~$100–150 per person (2 grammar books +
                    dict.cc app + Anki iOS). Everything else is free. The Goethe
                    exam fee (~€80–100/level) is separate.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Kassel Vocab Tab */}
            {activeTab === "kassel" && (
              <motion.div>
                <p className="text-dark-500 dark:text-dark-400 mb-6 text-sm leading-relaxed">
                  These are the words you&apos;ll need in your first two weeks
                  in Kassel. Add them to your Anki deck in Phase 4. Practice
                  these in your group scenarios.
                </p>
                <div className="border-dark-200 dark:border-dark-700 overflow-hidden rounded-xl border">
                  {kasselVocab.map((word, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 px-5 py-3 ${
                        i % 2 === 0
                          ? "dark:bg-dark-800 bg-white"
                          : "bg-dark-50 dark:bg-dark-800/60"
                      } ${i !== kasselVocab.length - 1 ? "border-dark-100 dark:border-dark-700/50 border-b" : ""}`}
                    >
                      <span className="text-primary-700 dark:text-primary-400 min-w-[180px] text-sm font-bold">
                        {word.de}
                      </span>
                      <span className="text-dark-500 dark:text-dark-400 text-sm">
                        {word.en}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Group Rules Tab */}
            {activeTab === "rules" && (
              <motion.div className="space-y-3">
                <h3 className="text-dark-800 dark:text-dark-100 mb-4 text-xl font-bold">
                  Pact:{" "}
                  <span className="gradient-text">Regeln für die Gruppe</span>
                </h3>

                {groupRules.map((item, i) => (
                  <div
                    key={i}
                    className="border-dark-200 dark:border-dark-700 dark:bg-dark-800 rounded-xl border bg-white p-5"
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-dark-800 dark:text-dark-100 text-sm font-bold">
                        {item.rule}
                      </span>
                    </div>
                    <p className="text-dark-500 dark:text-dark-400 pl-10 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}

                {/* Motivational Footer */}
                <div className="from-primary-700 to-primary-900 dark:from-primary-800 dark:to-dark-900 mt-6 rounded-xl bg-gradient-to-br p-6 text-white">
                  <h4 className="mb-2 text-base font-bold">
                    Remember what the Reddit poster said:
                  </h4>
                  <p className="text-primary-100 mb-3 text-sm leading-relaxed">
                    &quot;80% of the time I looked like a fool because my German
                    was horrible. You cannot let that phase you. If you are
                    afraid to speak then you will not learn German
                    quickly.&quot;
                  </p>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    You&apos;re going to make mistakes. You&apos;re going to
                    feel dumb. That&apos;s the process. The three of you have
                    each other — that&apos;s your unfair advantage. Most people
                    learn alone.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="pt-12 text-center">
            <p className="text-dark-400 dark:text-dark-500 text-sm">
              Viel Erfolg, Moin. Kassel wartet auf euch. 🇩🇪
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
