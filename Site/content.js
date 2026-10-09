/* Content model — sourced from résumé. Plain global, no module. */
window.PORTFOLIO = {
  name: "Muhammad Muhaimin Memon",
  initials: "MM",
  role: "Software & AI/ML Engineer",
  location: "Toronto, ON",
  email: "muhaiminmemon@gmail.com",
  phone: "+1 (647) 608-5061",
  github: "muhaiminmemon",
  linkedin: "muhaiminmemon",
  tagline: "Software & machine-learning engineer.",
  subtag:
    "Third-year student at the University of Toronto. I focus on machine learning and MLOps: training and evaluating models, then shipping and monitoring them in production. Most recently at Nokia R&D and Autodesk.",

  // headline index — plain facts, not a sales pitch
  stats: [
    { k: "PRIMARY FOCUS", v: "AI·ML", note: "& full-stack" },
    { k: "ALSO WORK IN", v: "INFRA", note: "cloud · k8s" },
    { k: "BASED IN", v: "YYZ", note: "Toronto, Canada" },
    { k: "ENGINEERING ROLES", v: "04", note: "Nokia · Autodesk +" },
  ],

  ticker: [
    "PYTHON", "LANGGRAPH", "KUBERNETES", "PYTORCH", "GO", "FASTAPI",
    "REDIS", "REACT", "TYPESCRIPT", "DOCKER", "RAG", "CHROMADB",
    "MCP", "AWS", "AZURE", "NEXT.JS",
  ],

  about: {
    school: "University of Toronto",
    degree: "Honours BSc, Computer Science & Management",
    spec: "Software Engineering · Machine Learning Specialization",
    grad: "Expected April 2027",
    citizen: "Canadian citizen",
    blurb:
      "My work spans classical ML and LLM systems, from training and evaluating models to the MLOps that gets them to production reliably: deployment pipelines, monitoring, and evaluation.",
  },

  experience: [
    {
      no: "01",
      role: "Machine Learning Operations Engineer",
      org: "Autodesk",
      loc: "Toronto, ON",
      date: "May 2026 – Aug 2026",
      status: "",
      points: [
        "Engineered Watchtower, an autonomous incident-response agent serving 5 production teams, automating manual triage and outperforming the incumbent commercial AIOps tool on the same production incidents.",
        "Built an offline evaluation harness for a non-deterministic LLM system, combining rubric-based automated scoring with a human-labeled feedback store to make prompt and model changes measurable rather than anecdotal.",
        "Co-designed a shared SageMaker Feature Store schema serving 3 production models (content recommender, propensity, churn), joining fixed-window (7/14/30/60-day) and trial-anchored aggregates in one dual-CTE daily job.",
      ],
      stack: ["LLM agents", "AIOps", "LLM evals", "SageMaker", "Feature Store"],
    },
    {
      no: "02",
      role: "Full-Stack Cloud & Machine Learning Engineer",
      org: "Nokia Research & Development",
      loc: "Ottawa, ON",
      date: "Jan 2026 – Apr 2026",
      status: "",
      points: [
        "Architected and shipped a LangGraph multi-agent AI system for Nokia 5G troubleshooting, cutting query resolution from 2–5 hours to 2–5 minutes via ChromaDB, Redis & Kubernetes integration over MCP.",
        "Identified inference latency bottlenecks and built a two-tier Redis semantic cache with cosine-similarity lookup, reducing LLM inference costs by ~60%.",
        "Engineered a Crossplane-based edge deployment system with custom Kubernetes operators in Go, reducing provisioning time from 2 hours to under 5 minutes (~95%) and eliminating manual configuration errors.",
        "Built a fault-tolerant Python Kafka sync service between hub and edge clusters, sustaining 40+ msgs/sec while eliminating replication loops via header-based deduplication and LRU caching.",
      ],
      stack: ["LangGraph", "Go", "Kubernetes", "Redis", "Kafka", "Crossplane"],
    },
    {
      no: "03",
      role: "Software Engineer",
      org: "Mercor",
      loc: "Remote",
      date: "Aug 2025 – Nov 2025",
      status: "",
      points: [
        "Shipped 20+ patches across production open-source Python and C codebases (scikit-learn, sqlite-net), spanning features, refactors, and regression fixes validated against existing test suites.",
        "Drove multi-turn agentic sessions (Claude Code, Codex) from natural-language specs to working patches, decomposing requirements and correcting model reasoning, with session rationales used as training signal for frontier code models.",
      ],
      stack: ["Python", "C", "scikit-learn", "Claude Code", "Codex"],
    },
    {
      no: "04",
      role: "Machine Learning Engineer",
      org: "Outamation",
      loc: "Remote",
      date: "May 2025 – Jul 2025",
      status: "",
      points: [
        "Designed and deployed a computer vision pipeline integrating PyMuPDF OCR with custom NLP models to extract structured data from unstructured documents, achieving an F1-score of 0.95.",
        "Built a RAG-based retrieval system with LlamaIndex that improved information search accuracy by 40% over keyword search, enabling faster retrieval of relevant clauses across the document repository.",
      ],
      stack: ["PyMuPDF", "NLP", "LlamaIndex", "RAG"],
    },
    {
      no: "05",
      role: "IAM Engineer",
      org: "Symcor",
      loc: "Mississauga, ON",
      date: "Jan 2024 – Aug 2024",
      status: "",
      points: [
        "Automated 400+ Azure access reviews with PowerShell and Microsoft Graph API, cutting manual audit effort by 90%, and built Python ETL pipelines validating identity records across Azure, GitLab, and Active Directory.",
      ],
      stack: ["PowerShell", "Graph API", "Azure", "ETL"],
    },
  ],

  projects: [
    {
      name: "Tenpoint",
      type: "Social web app",
      tagline: "A social Letterboxd competitor with precise 10-point ratings.",
      desc:
        "Shareable taste cards and side-by-side taste comparisons between friends, plus Letterboxd and MyAnimeList import.",
      metrics: [
        { v: "2,300+", k: "ratings from real users" },
        { v: "10-pt", k: "precise rating scale" },
        { v: "5", k: "recommender signals" },
      ],
      detail:
        "Two-stage retrieval + ranking recommender: MiniLM embedding neighbours assemble a per-pair candidate pool, then 5 confidence-weighted signals led by mean-centred user CF predict each friend's rating, with a fairness penalty sinking lopsided picks.",
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Transformers.js", "Docker", "Railway"],
      link: "https://tenpoint.site",
      linkLabel: "Live",
    },
    {
      name: "Tessera",
      type: "Open-source library",
      tagline: "Synthetic datasets that replace human annotation.",
      desc:
        "Converts a task description into a validated fine-tuning dataset across 4 NLP task types: classification, extraction, instruction-following, and RAG/QA.",
      metrics: [
        { v: "300×", k: "cheaper than crowd-sourced" },
        { v: "97.1%", k: "of real-data F1 (Banking77)" },
        { v: "98%", k: "hallucination refusal acc." },
      ],
      detail:
        "Tessera-trained Llama-3.2-3B reaches 97.1% of real-data F1 on Banking77 for $0.40 vs. $125 crowd-sourced. Shipped with CI/CD, thread-safe parallel generation, and multi-provider routing (OpenAI, Anthropic, Together, Groq).",
      stack: ["Python", "OpenAI API", "ChromaDB", "sentence-transformers", "Pydantic", "Unsloth"],
      link: "https://github.com/muhaiminmemon/tessera/tree/master",
      linkLabel: "GitHub",
    },
    {
      name: "Wisp",
      type: "AI Chrome extension",
      tagline: "Blocks distractions in real time, by understanding intent.",
      desc:
        "Analyzes browsing activity against tasks pulled from your Google Calendar and blocks what doesn't match, with 90%+ accuracy.",
      metrics: [
        { v: "90%+", k: "block accuracy" },
        { v: "10k+", k: "API requests / day" },
        { v: "OAuth", k: "Google sign-in" },
      ],
      detail:
        "Scalable Node/Express REST API handling 10,000+ requests/day, deployed via Docker on Azure. React/Tailwind dashboard for real-time task progress and analytics.",
      stack: ["React", "Node.js", "Express", "Supabase", "GPT API", "Google Calendar", "Docker", "Azure"],
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7329637123983138818/",
      linkLabel: "Demo",
    },
  ],

  skills: [
    { group: "Languages", items: ["Python", "JavaScript / TypeScript", "Java", "C / C++", "Go", "SQL", "PowerShell", "HTML / CSS"] },
    { group: "AI / ML", items: ["LangGraph", "LangChain", "MCP", "PyTorch", "Hugging Face", "Ollama", "ChromaDB", "OpenAI", "Anthropic"] },
    { group: "Backend", items: ["FastAPI", "Node.js / Express", "React", "Next.js", "PostgreSQL", "Supabase"] },
    { group: "DevOps / Cloud", items: ["Docker", "Kubernetes", "OpenShift", "Helm", "AWS", "Azure", "Git"] },
  ],
};
