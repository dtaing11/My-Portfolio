import { Lang } from "../LanguageBar"


type CodeSample = {
  label: string           // e.g. "main.dart"
  url: string             // raw GitHub URL
  repoUrl?: string
  challenge?: string
}

type Project = {
  id: string
  title: string
  year: string
  summary: string
  tech: string[]
  details: string[]
  highlights?: string[]
  userExperience?: string[]
  image?: string
  screens?: string[]
  codeSamples?: CodeSample[]
  repoUrl?: string
  showCodePreview?: boolean
  langs?: Lang[] // ✅ add this
}

export const projects: Project[] = [
  {
  id: "smart-recipe-backend",
  title: "Smart Recipe Finder – Java Spring Boot Backend",
  year: "2023",
  summary:
    "A Java Spring Boot backend application that helps users find the best matching recipes based on ingredients available in their fridge. The system uses a custom fuzzy-matching algorithm to handle partial, misspelled, or incomplete ingredient lists and integrates JWT-based authentication for secure user access.",
  tech: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "JWT",
    "REST APIs",
    "MongoDB",
    "Fuzzy Matching",
    "Spring Data MongoDB"
  ],
  details: [
    "Designed and implemented RESTful APIs for managing users, fridge inventories, and recipe search.",
    "Built a custom fuzzy ingredient-matching algorithm to compare fridge contents against recipe ingredient lists.",
    "Handled partial matches, synonyms, and inconsistent ingredient naming to rank recipes by relevance.",
    "Integrated external recipe data sources and normalized ingredient data for accurate comparison.",
    "Implemented JWT-based authentication and authorization using Spring Security.",
    "Secured API endpoints with stateless authentication and role-based access control.",
    "Modeled flexible document schemas in MongoDB for users, ingredients, and saved recipes.",
    "Added validation, error handling, and standardized API responses."
  ],
  highlights: [
    "Custom fuzzy finder for ingredient-to-recipe matching without relying on exact string comparisons.",
    "JWT-secured Spring Boot backend with MongoDB document-based persistence.",
    "Optimized for flexible ingredient data and evolving recipe schemas.",
    "Clear separation of concerns using controller, service, and repository layers."
  ],
  userExperience: [
    "Users register and authenticate to receive a JWT for secure API access.",
    "Users add and update ingredients currently available in their fridge.",
    "The backend ranks recipes based on ingredient similarity and availability.",
    "Recipes requiring fewer missing ingredients are prioritized in results.",
    "Users can save favorite recipes for future reference."
  ],
    langs: [
      { name: "Dart", pct: 72.8, className: "bg-sky-400" },
      { name: "Java", pct: 22.0, className: "bg-orange-500" },
      { name: "JavaScript", pct: 2.5, className: "bg-yellow-400" },
      { name: "Objective-C", pct: 0.8, className: "bg-blue-400" },
      { name: "HTML", pct: 0.7, className: "bg-rose-400" },
      { name: "Ruby", pct: 0.4, className: "bg-red-400" },
      { name: "Other", pct: 0.8, className: "bg-slate-400" },
    ],

},
  {
    id: "municipal",
    title: "Municipal – Hazard Reporting App",
    year: "2024",
    summary:
      "A real-time hazardous infrastructure reporting app built with Flutter, AWS Amplify, DynamoDB, and AWS Lambda. Municipal empowers citizens to quickly report hazardous issues such as potholes, broken streetlights, flooding, unsafe intersections, and other municipal problems. Reports appear instantly on an interactive map, enabling rapid response and improved public safety.",
    tech: ["Flutter", "AWS Amplify", "DynamoDB", "Lambda"],
    details: [
      "Designed and built the end-to-end mobile app, from Flutter UI to AWS backend.",
      "Implemented geo-tagged reports with photos, categories, and status tracking.",
      "Integrated AWS Amplify, DynamoDB, and Lambda for a scalable serverless architecture.",
    ],
    highlights: [
      "Awarded Best Capstone Project.",
      "Nominated for the Engineering Excellence Award in Louisiana.",
    ],
    userExperience: [
      "Citizens open the app and immediately see a map of nearby reported hazards.",
      "To submit a new report, users take a photo, select a category, and confirm their location.",
      "The report appears on the map in real time, and users can track its status as the municipality updates it.",
    ],
    image: "/projects/municipal-cover.png",
    screens: [
      "/projects/muncipal/1.png",
      "/projects/muncipal/2.jpg",
      "/projects/muncipal/3.jpg",
      "/projects/muncipal/4.png",
    ],
    repoUrl: "https://github.com/dtaing11/MuniciPal/tree/master/municipal",
    showCodePreview: true,
    codeSamples: [
      {
        label: "LandingPage.dart",
        url: "https://raw.githubusercontent.com/dtaing11/MuniciPal/refs/heads/master/municipal/lib/Page/LandingPage.dart",
        repoUrl: "https://github.com/dtaing11/MuniciPal/tree/master/municipal",
        challenge:
          "Designing a custom map marker while ensuring accurate placement and preventing visual clutter when multiple reports appear.",
      },
    ],
  langs: [
    { name: "Dart", pct: 69.7, className: "bg-sky-400" },
    { name: "JavaScript", pct: 15.2, className: "bg-yellow-400" },
    { name: "C++", pct: 5.3, className: "bg-blue-500" },
    { name: "CMake", pct: 4.1, className: "bg-indigo-400" },
    { name: "CSS", pct: 3.2, className: "bg-blue-400" },
    { name: "Swift", pct: 0.6, className: "bg-orange-400" },
    { name: "Other", pct: 1.9, className: "bg-slate-400" },
  ],


  },
  {
  id: "eyetracker-ai4selab",
  title: "Eyetracker-AI4SELAB – AI4SE Eye Tracking Plugin",
  year: "2025",
  summary:
    "A JetBrains IDE plugin that integrates real-time eye-tracking analytics into the development environment to support research in AI for Software Engineering (AI4SE Lab). The plugin launches and manages a Dockerized Python backend for gaze tracking, streams gaze coordinates into IntelliJ-based IDEs, and enables visualization and logging of developer attention during coding sessions—reducing experimental setup friction and project failure rates by over 80%.",
  tech: [
    "Java",
    "JetBrains Platform SDK",
    "Python",
    "Docker",
    "IntelliJ Plugin Development",
    "Eye Tracking",
    "Research Tooling",
  ],
  details: [
    "Designed and implemented a JetBrains IDE plugin using Java and the IntelliJ Platform SDK.",
    "Integrated real-time eye-tracking data streams from a Dockerized Python backend into the IDE.",
    "Built automatic Docker image build and container lifecycle management directly from the plugin.",
    "Implemented background task handling to ensure gaze tracking runs without blocking the IDE UI.",
    "Streamed gaze coordinates as structured JSON from Python to the plugin for logging and visualization.",
    "Enabled configurable tracking actions such as start, stop, pause, resume, and labeling events.",
    "Focused on minimizing setup complexity for researchers to dramatically reduce experiment failure rates.",
  ],
  highlights: [
    "One-Click Start/Stop Eye Tracking from IDE",
    "Dockerized Python Backend with Zero Manual Setup",
    "Live Gaze Data Streaming into IntelliJ",
    "Automatic Container Build & Launch",
    "Lightweight Non-Blocking Background Tasks",
    "Reduced Research Project Failure by ~80%",
  ],
  userExperience: [
    "Researchers start eye tracking directly from the IDE Tools menu with a single click.",
    "The plugin automatically builds and launches the required Docker container if it is not present.",
    "Gaze coordinates are streamed live into the IDE for logging, visualization, or downstream analysis.",
    "Developers can pause, resume, or label attention events during coding sessions.",
    "All tracking runs in the background without interrupting normal IDE usage.",
  ],
  repoUrl: "https://github.com/dtaing11/Eyetracker-AI4SELAB",
  showCodePreview: false,

  // ✅ GitHub-style language breakdown
  langs: [
    { name: "Java", pct: 96.3, className: "bg-orange-500" },
    { name: "Python", pct: 2.9, className: "bg-yellow-400" },
    { name: "Dockerfile", pct: 0.8, className: "bg-sky-400" },
  ],
},
  
  {
    id: "agentic-controller",
    title: "Agentic Controller – Tool-Aware LLM Orchestrator",
    year: "2025",
    summary:
      "A minimal but fully featured agentic controller loop that orchestrates an LLM with tools, JSON Schema validation, budgets, and retrieval-augmented generation. It demonstrates planning, argument repair, rolling summarization, and Chroma-based knowledge search on top of the OpenAI API.",
    tech: ["Python", "OpenAI API", "ChromaDB", "JSON Schema", "dotenv", "Requests"],
    details: [
      "Implemented a controller loop that plans the next action (tool call or final answer) using an LLM, with strict JSON-only interfaces.",
      "Defined a tool catalog with JSON Schemas and runtime validation to prevent hallucinated tools or arguments.",
      "Added automatic argument repair via a one-shot LLM call whenever schema validation fails.",
      "Implemented budget controls for max steps, tokens, and cost, with simple accounting tied to OpenAI usage metadata.",
      "Tracked recent actions with hashing to detect and break out of ineffective ReAct-style loops.",
      "Maintained a rolling history summary with an LLM compressor to keep context small while preserving key facts.",
      "Integrated a weather tool backed by Open-Meteo geocoding and forecast APIs with normalized output.",
      "Added a Chroma-based knowledge base search tool that uses manual OpenAI embeddings for retrieval-augmented reasoning.",
      "Implemented a final synthesis step that composes the answer solely from the working summary and tool evidence.",
      "Provided a `run_agent(goal)` entrypoint to execute the full planning–tool–synthesis pipeline from a single question.",
    ],
    highlights: [
      "End-to-end example of a budget-aware agentic loop with real tools and retrieval.",
      "Strict JSON Schema tool interfaces with automatic LLM-based argument repair.",
      "Pluggable planner, summarizer, and synthesizer built around OpenAI chat + embeddings APIs.",
      "ChromaDB integration for local vector search with automatic seeding from SQuAD-style data.",
    ],
    userExperience: [
      "Developers call `run_agent(\"<goal>\")` or run the script from the CLI with a natural language question.",
      "The controller decides whether to call the weather tool, search the knowledge base, or synthesize an answer directly.",
      "Each tool call produces a concise observation that is summarized into a rolling working memory.",
      "If the agent gets stuck repeating the same action, loop detection triggers a different plan instead of spinning forever.",
      "Once enough evidence is gathered, the agent switches to 'answer' mode and generates a final response grounded in the tool outputs.",
    ],
    repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage",
    showCodePreview: true,
    codeSamples: [
      {
        label: "agentic_controller.py",
        url: "https://raw.githubusercontent.com/dtaing11/OpenAi-Chatgpt-Usage/refs/heads/main/Agentic_Model/agentic_controll.py",
        repoUrl:
          "https://github.com/dtaing11/OpenAi-Chatgpt-Usage/blob/main/Agentic_Model/agentic_controll.py",
        challenge:
          "Designing a budget-aware agent loop that coordinates planning, JSON Schema validation, argument repair, Chroma RAG, and final synthesis without hallucinated tools or arguments.",
      },
    ],
    langs: [
  { name: "Python", pct: 100.0, className: "bg-yellow-400" },
],

  },
 
  {
  id: "strikezone-ml",
  title: "LSU Softball Strike Zone Prediction Model",
  year: "2025",
  summary:
    "A machine learning project that models umpire strike-zone decisions for LSU Softball using real pitch-tracking data. The system predicts the probability of a called strike based on pitch location, batter/pitcher handedness, and swing behavior. Built using neural-network transfer learning, model surgery, and custom visualization tools to generate detailed strike-zone heatmaps.",
  tech: [
    "PyTorch",
    "Neural Networks",
    "Python",
    "NumPy",
    "Matplotlib",
    "ML Engineering"
  ],
  details: [
    "Developed a custom MLP architecture that predicts called-strike probability using vertical location, horizontal location, swing status, and handedness inputs.",
    "Implemented weight-surgery transfer learning to expand a small initial model into a more complex 5-feature architecture without losing previously-learned MLB behavior.",
    "Trained and fine-tuned the upgraded model on LSU Softball data to capture umpire-specific strike-zone tendencies.",
    "Created heatmap generators that visualize strike probabilities under all combinations of batter/pitcher handedness and swing behavior.",
    "Added support for overlaying official softball rulebook strike-zone boundaries for comparison against real umpire behavior.",
  ],
  highlights: [
    "Neural Network Weight Surgery",
    "Strike-Zone Heatmaps",
    "Feature Expansion (x, y, swing, pitcher hand, batter hand)",
    "LSU Softball Fine-Tuning",
    "Umpire Behavior Modeling"
  ],
  userExperience: [
    "Analysts can visualize 2D probability maps showing how likely an umpire is to call a strike at any location.",
    "Heatmaps automatically adapt to context: batter handedness, pitcher handedness, and whether the batter swings.",
    "The model reveals expansions/shrinkages in the zone compared to the rulebook, assisting scouting and decision-making.",
    "Coaches and researchers can compare different scenarios (LHP vs RHB, swing vs take) through clear visual outputs.",
    "Umpire tendencies are modeled probabilistically rather than through fixed rules, capturing real-world decision patterns."
  ],
  image: "/projects/strikezone-cover.png",
  screens: ["/projects/softball/1.png","/projects/softball/2.png","/projects/softball/3.png","/projects/softball/4.png"],
  repoUrl: "https://github.com/dtaing11/Math4020-Softball-Trackman-StrikeZone",
  showCodePreview: true,
    codeSamples: [
      {
        label: "model_surgery.py",
        url: "https://raw.githubusercontent.com/dtaing11/Math4020-Softball-Trackman-StrikeZone/refs/heads/main/Strickzone_Predictve_Model/utils/model_weight_surgery.py",
        repoUrl:
          "https://github.com/dtaing11/Math4020-Softball-Trackman-StrikeZone/blob/main/Strickzone_Predictve_Model/utils/model_weight_surgery.py",
        challenge:
  "Expanding a trained 3-input model into a 5-input architecture without losing learned behavior. Required carefully rewriting the first-layer weight matrix, aligning state_dict keys across different model wrappers, and ensuring the upgraded network stayed numerically stable during fine-tuning on the new dataset.",
    },
    ],
  langs: [
  { name: "Python", pct: 98.4, className: "bg-yellow-400" },
  { name: "C", pct: 1.0, className: "bg-blue-600" },
  { name: "Cython", pct: 0.3, className: "bg-green-500" },
  { name: "C++", pct: 0.2, className: "bg-blue-500" },
  { name: "Fortran", pct: 0.1, className: "bg-purple-500" },
  { name: "PowerShell", pct: 0.0, className: "bg-indigo-400" },
],

},
{
  id: "texas-infrastructure",
  title: "Texas Hold’em Multiplayer Engine & Infrastructure",
  year: "2025",
  summary:
    "A production-grade Texas Hold’em engine built in Go with deterministic game state management, full betting-round logic, and real-time WebSocket synchronization. Includes a bot framework, rate-limited WebSocket server, state reconciliation system, and a host client for automated simulations and debugging.",
  tech: [
    "Go",
    "WebSockets",
    "Concurrent Systems",
    "State Machines",
    "FastAPI (Bots)",
    "GCP Cloud Run",
    "Docker"
  ],
  details: [
    "Implemented a fully deterministic Texas Hold’em game engine in Go that manages all betting streets, blinds, pot contributions, side pots, and showdown evaluation.",
    "Designed a real-time WebSocket server that synchronizes table state to all connected clients, supporting reconnection recovery, state replay, and event-driven updates.",
    "Added strict turn-validation and action gating logic (`CanPlayerAct`) to prevent illegal actions such as acting out-of-turn, acting while all-in, or invalid raise sizes.",
    "Built a sliding-window rate limiter to protect Cloud Run endpoints and prevent bot spam or accidental infinite-action loops.",
    "Developed a host client that monitors all table events, logs engine transitions, and visualizes chip movement across hands using live Python-based plotting.",
    "Created an extensible bot interface allowing RL agents, scripted bots, or heuristic AIs to connect via WebSocket and perform legal actions in real time.",
    "Implemented edge-case handling: skipping all-in seats during turn rotation, showdown triggering only when action is complete, and forced actions for blinds."
  ],
  highlights: [
    "Deterministic Betting Engine",
    "Real-Time WebSocket Sync",
    "Action Validation (Turn, Chips, Betting Rules)",
    "Rate-Limited Server Architecture",
    "RL Bot Integration",
    "Cloud Run Deployment"
  ],
  userExperience: [
    "Developers can connect players, bots, and observers through a simple WebSocket API that streams continuous table updates.",
    "State synchronization ensures all clients see identical card distributions, pot sizes, and turn-order information with zero ambiguity.",
    "Illegal actions are transparently rejected with full engine reasoning, allowing bots to debug their policy decisions.",
    "Spectators or analytics tools can subscribe to the table and visualize chip flow, win percentage deltas, and betting patterns.",
    "Poker simulations scale across many Cloud Run instances, enabling massive multi-table experiments for reinforcement-learning bots."
  ],
  repoUrl: "https://github.com/dtaing11/Texas-HoldEm-Infrastructure",
  showCodePreview: true,
  codeSamples: [
    {
      label: "engine.go",
      url: "https://raw.githubusercontent.com/dtaing11/Texas-HoldEm-Infrastructure/refs/heads/main/game/engine.go",
      repoUrl:
        "https://github.com/dtaing11/Texas-HoldEm-Infrastructure",
      challenge:
        "Building a deterministic, bug-resistant betting engine that handles turn rotation, all-in players, multi-round betting logic, illegal action rejection, and showdown state transitions while supporting both human clients and autonomous agents. Required meticulous state management and deep unit testing to avoid edge-case failures."
    }
  ],
  langs: [
  { name: "Go", pct: 81.5, className: "bg-cyan-400" },
  { name: "Python", pct: 16.8, className: "bg-yellow-400" },
  { name: "Dockerfile", pct: 1.7, className: "bg-sky-400" },
],

}

]