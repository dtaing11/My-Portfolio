
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
}

export const projects: Project[] = [
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
  },
  {
    id: "SportApp",
    title: "PickleKing – Pickleball Ranking App",
    year: "2024",
    summary:
      "A cross-platform Pickleball tracking app built with Flutter and Supabase. This app helps players play with friends, create groups, track match results, and rank themselves to see who is the best.",
    tech: ["Flutter", "Provider", "PostgreSQL", "Supabase"],
    details: [
      "Designed and built the end-to-end mobile app using Flutter with Provider for clean state management.",
      "Implemented player profiles, match recording, and dynamic ELO/Glicko updates backed by Supabase Postgres.",
      "Integrated Supabase Auth for secure user authentication and session management across devices.",
      "Built real-time leaderboards and match updates using Supabase Realtime for instant syncing.",
      "Used Supabase Storage to handle profile avatars and uploaded images.",
    ],
    highlights: ["ELO Ranking System", "Live Score Update", "Groups & Club"],
    userExperience: [
      "Players open the app and instantly see their current rating, recent matches, and active groups.",
      "To start a game, users create or join a match lobby with friends and record scores as soon as the match ends.",
      "Rankings update immediately after each game, allowing players to see real-time changes powered by ELO/Glicko.",
      "Users explore leaderboards to compare rankings across friends, local clubs, or custom groups they join.",
      "Each player can review detailed match history, including opponents, scorelines, and rating changes.",
      "Groups provide a community space where players can track shared leaderboards and compete within their club.",
      "The experience is seamless across iOS and Android, giving players consistent access to stats anytime, anywhere.",
    ],
    image: "/projects/municipal-cover.png",
    screens: [
      "/projects/pickleball/1.png",
      "/projects/pickleball/2.png",
      "/projects/pickleball/3.png",
      "/projects/pickleball/4.png",
      "/projects/pickleball/5.png",
    ],
    repoUrl: "https://github.com/dtaing11/Sport-App",
    showCodePreview: false,
  },
  {
    id: "GeauxApp",
    title: "GeauxApp – GDG@LSU Project",
    year: "2025",
    summary:
      "A student-built LSU campus discovery and event-sharing app that helps LSU students explore campus, discover events, follow organizations, and post updates. Designed, led, and coordinated by me with a 20+ developer team. Built with Flutter and Supabase, with a custom GCP VM middleware to optimize performance and reduce storage costs. Targeting a Spring 2025 release.",
    tech: [
      "Flutter",
      "Provider",
      "PostgreSQL",
      "Supabase",
      "Google Cloud VM",
      "Node.js Middleware",
    ],
    details: [
      "Leading and coordinating a 20+ developer team ranging from beginners to advanced engineers, balancing workload, mentoring contributors, and maintaining consistent sprint delivery.",
      "Developed the full cross-platform mobile experience using Flutter with Provider for predictable and scalable state management.",
      "Built a custom middleware API running on a GCP virtual machine to centralize logic, handle caching, and reduce direct calls to Supabase.",
      "Implemented cost-optimized media storage by routing image uploads through the middleware and storing them in GCP buckets instead of Supabase Storage.",
      "Integrated Supabase Auth for secure login, user profiles, and persistent cross-device sessions.",
      "Implemented real-time feeds, organization posts, and event updates using Supabase Realtime and custom middleware syncing.",
      "Designed backend data models to support events, posts, organizations, comments, and user engagement across campus.",
    ],
    highlights: [
      "Campus Event Feed",
      "Student Organizations",
      "Real-Time Updates",
      "GCP Middleware Optimization",
      "Cost-Effective Media Storage",
    ],
    userExperience: [
      "Students instantly see a live campus feed showing upcoming events, organization posts, and trending activities around LSU.",
      "Users browse events, explore details, RSVP, and see club account activity all in one place.",
      "Student organizations can post announcements, upload posters, and manage their presence directly through the app.",
      "A personalized feed recommends events and orgs based on user interests and follows.",
      "Media uploads are routed through a GCP-powered pipeline for faster upload speeds and reduced hosting cost.",
      "The app delivers a consistent and smooth iOS/Android experience to help LSU students stay connected anywhere on campus.",
    ],
    image: "/projects/geauxapp-cover.png",
    screens: ["/projects/geauxapp/1.png", "/projects/geauxapp/2.png"],
    repoUrl: "https://github.com/Google-Developers-Student-Club-LSU/GeauxApp-Frontend",
    showCodePreview: false,
  },
  {
    id: "nlp-mini-engine",
    title: "Custom NLP Tokenizer & Language Model",
    year: "2025",
    summary:
      "An end-to-end mini NLP engine that builds a custom Byte Pair Encoding (BPE) tokenizer and an N-Gram language model from scratch. This project focuses on understanding how modern tokenization and classic statistical language modeling work under the hood, without relying on high-level libraries.",
    tech: ["Python", "BPE", "N-Gram", "NLP"],
    details: [
      "Implemented a custom Byte Pair Encoding (BPE) tokenizer, including vocabulary construction, merge operations, and text-to-token pipelines.",
      "Built an N-Gram language model (uni/bi/tri-gram) using the tokenized corpus, with configurable smoothing and context window sizes.",
      "Created a training pipeline to learn token merges, estimate N-Gram probabilities, and persist vocab + model artifacts for reuse.",
      "Exposed simple CLI/Notebook utilities to tokenize text, inspect merges, generate text, and compare different N-Gram orders.",
    ],
    highlights: [
      "End-to-end understanding of how raw text becomes tokens and how tokens drive language prediction.",
      "No heavy NLP frameworks for core logic – algorithms implemented from first principles.",
      "Built in a way that can be extended toward modern transformer-based models later.",
    ],
    userExperience: [
      "Developers point the tool at a text corpus to learn a custom BPE vocabulary and N-Gram statistics.",
      "They can experiment with different vocab sizes or N-Gram orders and immediately see how perplexity and sample generations change.",
      "The CLI/notebooks make it easy to inspect merges, token distributions, and example generated sequences for educational purposes.",
    ],
    repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage",
    showCodePreview: true,
    codeSamples: [
      {
        label: "bpe_tokenizer.py",
        url: "https://raw.githubusercontent.com/dtaing11/OpenAi-Chatgpt-Usage/refs/heads/main/BPEModel/Taing_csc4700_cshw2.py",
        repoUrl:
          "https://github.com/dtaing11/OpenAi-Chatgpt-Usage/blob/main/BPEModel/Taing_csc4700_cshw2.py",
        challenge:
          "Implementing BPE merges and vocabulary construction from scratch while keeping the implementation easy to visualize and debug.",
      },
      {
        label: "ngram_model.py",
        url: "https://raw.githubusercontent.com/dtaing11/OpenAi-Chatgpt-Usage/refs/heads/main/NgramModel/Taing_csc4700_cshw1.py",
        repoUrl:
          "https://github.com/dtaing11/OpenAi-Chatgpt-Usage/blob/main/NgramModel/Taing_csc4700_cshw1.py",
        challenge:
          "Designing an N-Gram model that supports different orders and smoothing methods while remaining simple enough for teaching.",
      },
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
  },
  {
    id: "llm-integration-pipeline",
    title: "LLM Integration & Evaluation Pipeline",
    year: "2025",
    summary:
      "A practical LLM integration pipeline that wires together OpenAI (GPT-5-nano, GPT-5-mini) and OpenRouter (Qwen 3-8B) for large-scale question answering and automatic grading on SQuAD. The focus is on robust API integration, batch workflows, JSON-schema outputs, and end-to-end automation.",
    tech: ["Python", "OpenAI API", "OpenRouter", "Batch API", "JSON Schema", "SQuAD"],
    details: [
      "Integrated multiple LLM providers (OpenAI and OpenRouter) in a single Python pipeline with consistent interfaces and error handling.",
      "Used OpenAI’s Batch API to run GPT-5-nano at scale, building JSONL request payloads and polling job status until completion.",
      "Implemented a unified parsing layer that normalizes differing response formats (raw text, choices, message content) into a clean predictions file.",
      "Called Qwen 3-8B via OpenRouter using a shared system prompt, creating a second prediction set over the same 500 SQuAD questions.",
      "Designed an LLM-as-judge component with GPT-5-mini, enforcing a JSON-schema output that includes a boolean score and short explanation.",
      "Generated judge batches for both GPT-5-nano and Qwen predictions and routed them through the same OpenAI batch endpoint for scalable scoring.",
      "Built robust fallbacks to recover judge outputs whether they appear in `parsed`, `output_text`, or nested message content fields.",
      "Computed model-level accuracy metrics and printed a clear comparison between GPT-5-nano and Qwen 3-8B using the judged scores.",
      "Wrapped all LLM integrations—answering, judging, and evaluation—into a single reproducible script driven by environment variables and local files.",
    ],
    highlights: [
      "Demonstrates real-world multi-LLM integration across two providers with different APIs.",
      "Uses batch APIs to reduce latency and overhead for hundreds of LLM calls.",
      "LLM-as-judge design with strict JSON Schema for machine-readable evaluation.",
      "End-to-end pipeline: data prep → LLM answering → LLM judging → metrics.",
    ],
    userExperience: [
      "An engineer runs the script once and it automatically prepares 500 SQuAD questions if needed.",
      "The pipeline submits a GPT-5-nano batch job, waits for completion, then normalizes outputs into JSONL predictions.",
      "In a second stage, the script streams each question to Qwen 3-8B via OpenRouter, logging progress every few dozen queries.",
      "GPT-5-mini is invoked as a judge in batch mode, returning JSON-schema-constrained scores and explanations for each prediction.",
      "Finally, the script aggregates judged results and prints accuracy for both models, giving a clean, quantitative comparison of LLM performance.",
    ],
    repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage",
    showCodePreview: true,
    codeSamples: [
      {
        label: "llm_integration_pipeline.py",
        url: "https://raw.githubusercontent.com/dtaing11/OpenAi-Chatgpt-Usage/refs/heads/main/OpenAiAPI/Taing_csc4700_cshw2.py",
        repoUrl:
          "https://github.com/dtaing11/OpenAi-Chatgpt-Usage/blob/main/OpenAiAPI/Taing_csc4700_cshw2.py",
        challenge:
          "Coordinating multiple LLMs and providers—answering models and a judging model—through batch APIs, JSON Schema outputs, and resilient parsing while keeping the pipeline fully automated and reproducible.",
      },
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
  ]
}

]