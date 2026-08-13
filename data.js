// 18-Day Interview Sprint — Task Data
const DAYS = [
  {
    t: "SE + OOP Revision", tier: 1,
    tasks: [
      "SDLC models — waterfall vs agile vs spiral, when each is used",
      "Agile/Scrum — sprints, standups, backlog, Product Owner vs Scrum Master roles",
      "4 pillars of OOP — Encapsulation, Abstraction, Inheritance, Polymorphism, each with a real code example",
      "Abstraction vs Encapsulation — the exact distinction (interviewers love this trap)",
      "Compile-time polymorphism (overloading) vs Runtime polymorphism (overriding)",
      "SOLID — one concrete example per letter, not just definitions",
      "Association vs Aggregation vs Composition — has-a relationships with examples",
      "Abstract class vs Interface — differences, when to use which",
      "Coupling vs Cohesion — loosely coupled, highly cohesive systems explained simply",
      "Design patterns to know by name: Singleton, Factory, Observer, MVC — one line each",
      "Practice explaining OOP concepts using YOUR project code (e.g. a class from Samadhan/ThriveHer)"
    ]
  },
  {
    t: "Computer Networks Revision", tier: 1,
    tasks: [
      "OSI 7 layers vs TCP/IP 4 layers — map them side by side, know what happens at each",
      "TCP vs UDP — reliability, ordering, use cases (why video calls use UDP)",
      "TCP 3-way handshake (SYN, SYN-ACK, ACK) and 4-way termination",
      "DNS resolution — full step-by-step from browser query to IP address",
      "HTTP vs HTTPS — TLS/SSL handshake basics, why HTTPS is considered secure",
      "HTTP methods — GET/POST/PUT/PATCH/DELETE and idempotency of each",
      "HTTP status codes — 2xx/3xx/4xx/5xx, know 200/201/301/400/401/403/404/500 cold",
      "Cookies vs sessions vs JWT tokens — how the browser and server handle each",
      "Load balancing algorithms — round robin, least connections, IP hash",
      "CDN — how it cuts latency, cache invalidation basics",
      "Classic mega-question: 'What happens when you type a URL and hit enter?' — rehearse the full answer end to end"
    ]
  },
  {
    t: "Project Deep-Dive", tier: 1,
    tasks: [
      "PeeKaboo — full data flow: scraping → storage → processing → sentiment analysis → dashboard",
      "PeeKaboo — why these 5 platforms, how scraping was implemented, how rate limits were handled",
      "PeeKaboo — sentiment analysis pipeline: what approach/model, how the 30% accuracy improvement was measured",
      "PeeKaboo — how the 70% manual research time cut was actually measured — be ready to justify the number",
      "Samadhan — architecture in your head: React frontend, Node backend, Face API, Groq API, Firebase, how they connect",
      "Samadhan — Aadhaar face auth flow step by step, how you handled security/privacy of sensitive data",
      "Samadhan — Bland AI fraud alert integration — trigger conditions, what happens on an alert",
      "Samadhan — multilingual voice query handling — STT/TTS pipeline, how 95% accuracy was tested across 5+ languages",
      "ThriveHer — RAG architecture: embeddings, vector store, retrieval step, LLaMA 3 generation step",
      "ThriveHer — why RAG over fine-tuning or plain prompting, how you managed context window / relevance",
      "For all 3 projects: what breaks first at 10x scale? What's the weakest part of each system?",
      "Rehearse 'walk me through your resume' in under 90 seconds, out loud, timed"
    ]
  },
  {
    t: "DBMS — ER Modeling & Normalization", tier: 1,
    tasks: [
      "ER diagram components — entity, attribute, relationship, weak entity",
      "Cardinality — 1:1, 1:N, N:M with real-world examples",
      "1NF — atomic values, no repeating groups, example of a violation",
      "2NF — removing partial dependency (needs a composite key context)",
      "3NF — removing transitive dependency, walk through an example",
      "BCNF — stricter than 3NF, an example where 3NF passes but BCNF doesn't",
      "Primary key vs candidate key vs super key vs foreign key vs composite key — all five, clearly differentiated",
      "Functional dependencies — how to identify and write them out",
      "Denormalization — real tradeoff, when read-heavy systems intentionally break normal form",
      "Design exercise: normalize a schema for one of your projects (e.g. Samadhan users/transactions/auth logs)",
      "Be ready to draw an ER diagram live on a whiteboard/paper if asked"
    ]
  },
  {
    t: "DBMS — SQL Core", tier: 1,
    tasks: [
      "INNER JOIN vs LEFT/RIGHT/FULL OUTER JOIN — with sample tables, draw the Venn diagrams",
      "SELF JOIN — a real use case (e.g. employee-manager hierarchy)",
      "CROSS JOIN vs regular JOIN — when cross join is actually useful",
      "WHERE vs HAVING — exact difference and query execution order",
      "GROUP BY mechanics — what can and can't legally go in SELECT alongside it",
      "Aggregate functions — COUNT, SUM, AVG, MIN, MAX, and COUNT(*) vs COUNT(column) gotcha",
      "Subqueries — correlated vs non-correlated, with an example of each",
      "CTEs (WITH clause) — including a recursive CTE example",
      "Window functions — ROW_NUMBER, RANK, DENSE_RANK, LAG/LEAD, PARTITION BY, with a query example",
      "Full SQL query execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY",
      "Write and run 10+ original queries against a sample schema, don't just read solutions"
    ]
  },
  {
    t: "DBMS — Transactions & Indexing", tier: 1,
    tasks: [
      "ACID — Atomicity, Consistency, Isolation, Durability, each explained with a bank-transfer example",
      "Isolation levels — Read Uncommitted, Read Committed, Repeatable Read, Serializable",
      "Dirty read vs non-repeatable read vs phantom read — clearly differentiated with examples",
      "Indexing — how a B-tree index actually works under the hood",
      "Clustered vs non-clustered index — key difference",
      "When indexing hurts — write-heavy tables, over-indexing costs",
      "Composite indexes — why column order matters",
      "Deadlocks — how they occur, detection methods, prevention strategies",
      "Locking — shared vs exclusive locks, optimistic vs pessimistic locking",
      "Normalization vs query performance tradeoff — be ready to discuss both sides",
      "EXPLAIN / query execution plan — how to check whether a query is actually using an index"
    ]
  },
  {
    t: "DBMS — SQL Practice Grind", tier: 1,
    tasks: [
      "Solve 5 JOIN-heavy problems (LeetCode SQL / HackerRank)",
      "Solve 5 aggregation + GROUP BY/HAVING problems",
      "Solve 4 window function problems (RANK, ROW_NUMBER, running totals)",
      "Solve 3 subquery/CTE problems",
      "Solve 2 self-join problems",
      "Time yourself — aim to write a correct query in under 5 minutes",
      "Redo any problem you got wrong, from scratch, without looking at the solution",
      "Write one query combining a JOIN + window function + GROUP BY (interview-favorite pattern)",
      "Practice explaining your query logic out loud while writing it",
      "Note down every mistake pattern (e.g. forgetting GROUP BY columns) for tomorrow's review"
    ]
  },
  {
    t: "DBMS — Mock Q&A + Weak Spots", tier: 1,
    tasks: [
      "Self-quiz: explain normalization (1NF→BCNF) out loud with zero notes",
      "Self-quiz: explain ACID + isolation levels out loud with zero notes",
      "Self-quiz: explain indexing + when it helps/hurts out loud with zero notes",
      "Redo every SQL problem that tripped you up on day 7",
      "SQL vs NoSQL — structured comparison: consistency, schema flexibility, scaling",
      "MongoDB — document model basics, embedding vs referencing (ties to your resume)",
      "CAP theorem — intro level, pick 2 of 3, real-world example",
      "Explain why Samadhan used Firebase and PeeKaboo used MongoDB — different tradeoffs",
      "Write one query using a transaction (BEGIN/COMMIT/ROLLBACK) conceptually",
      "Do a full 20-minute mock DBMS interview with yourself (or a friend) covering all of days 4-8"
    ]
  },
  {
    t: "JavaScript Fundamentals", tier: 1,
    tasks: [
      "Closures — explain with a working counter-function code example",
      "var vs let vs const — scope differences, temporal dead zone",
      "Hoisting — function hoisting vs variable hoisting, with a tricky example",
      "'this' keyword — global context, object method, arrow function, explicit binding — all 4 cases",
      "call/apply/bind — differences and a real use case for each",
      "Prototypal inheritance — prototype chain, __proto__ vs .prototype",
      "== vs === — type coercion rules, at least 3 classic gotchas (e.g. [] == false)",
      "Higher-order functions — implement map/filter/reduce logic manually",
      "Currying and function composition — one working example",
      "Execution context and scope chain — how variable lookup actually works",
      "Write 3 tricky JS output-prediction snippets and solve them cold"
    ]
  },
  {
    t: "JavaScript — Async & Event Loop", tier: 1,
    tasks: [
      "Call stack, Web APIs, callback queue, microtask queue — draw the full event loop diagram",
      "Promises — pending/fulfilled/rejected states, chaining behavior",
      "Promise.all vs allSettled vs race vs any — differences with examples",
      "async/await — how it desugars to promises under the hood, try/catch error handling",
      "Callback hell — a messy example, then refactor it with promises and again with async/await",
      "Implement debounce from scratch",
      "Implement throttle from scratch",
      "setTimeout(fn, 0) — why it doesn't run immediately, tie back to the event loop",
      "Event bubbling vs capturing, event delegation — with a DOM example",
      "Common memory leak causes — closures holding stale references, uncleared intervals/listeners",
      "Predict the output of a mixed sync/async/setTimeout code snippet — practice 2-3 of these"
    ]
  },
  {
    t: "React.js Core", tier: 1,
    tasks: [
      "Virtual DOM and the reconciliation/diffing algorithm — explain in plain terms",
      "Fiber architecture — high-level awareness of why React rewrote its core engine",
      "useState — batching behavior, functional updates (setState(prev => ...))",
      "useEffect — dependency array rules, when cleanup functions run",
      "Write a custom hook from scratch (e.g. useFetch or useDebounce)",
      "Controlled vs uncontrolled components — with a form example",
      "Keys in lists — why they matter, what breaks when you use index as key",
      "Lifting state up vs Context API vs external store — when each is the right call",
      "React component lifecycle (mount/update/unmount) mapped onto hooks",
      "JSX under the hood — what React.createElement actually produces",
      "Relate 3 of these concepts directly to how you built ThriveHer or Samadhan's frontend"
    ]
  },
  {
    t: "React — State & Performance", tier: 1,
    tasks: [
      "Context API — provider/consumer pattern, when it causes unnecessary re-renders",
      "useMemo vs useCallback — concrete example of when each actually helps",
      "React.memo — shallow comparison, a case where it doesn't help at all",
      "Why does a component re-render? (state change, parent re-render, context change) — explain all three",
      "Code splitting / lazy loading — React.lazy + Suspense, why it matters for load time",
      "State management options — Redux vs Zustand vs Context — tradeoffs, what you actually used and why",
      "Prop drilling — the problem and 2 ways to solve it",
      "Handling a large, complex form efficiently in React",
      "Explain a specific performance optimization you made in ThriveHer or Samadhan",
      "List 3 common React anti-patterns and why they're bad",
      "Practice answering 'how would you optimize a slow React app?' end to end"
    ]
  },
  {
    t: "Node.js + Express — REST APIs", tier: 1,
    tasks: [
      "REST principles — statelessness, resource-based URLs, uniform interface",
      "Correct HTTP status codes per operation (create/read/update/delete/error cases)",
      "Middleware — execution order, how next() works, error-handling middleware signature",
      "Idempotency — GET/PUT/DELETE vs POST, why it matters for API design",
      "Express routing — route params vs query params vs body, with examples",
      "Request validation — how you'd validate input (e.g. Joi/express-validator) and why it matters",
      "Centralized error handling pattern in Express",
      "Pagination, filtering, and sorting design for a list API endpoint",
      "API versioning strategies (URL-based vs header-based)",
      "Rate limiting — how you'd implement it and why it protects your backend",
      "Explain PeeKaboo or ThriveHer's actual API design choices, endpoint by endpoint"
    ]
  },
  {
    t: "Node.js — Auth & Internals", tier: 1,
    tasks: [
      "JWT structure — header/payload/signature, how verification actually works",
      "Access token vs refresh token flow — full lifecycle",
      "Session-based auth vs token-based auth — tradeoffs",
      "Password hashing — bcrypt, salting, why plain hashing (or encryption) is wrong",
      "Node's single-threaded event loop — phases (timers, poll, check) vs the browser's event loop",
      "How Node handles concurrency despite being single-threaded — libuv, thread pool for I/O",
      "SQL injection and XSS — how to prevent both in a Node/Express + MongoDB or SQL stack",
      "CORS — what it is, how and why you configured it in your projects",
      "Environment variables and secrets management — how you handled API keys (Groq, Bland AI, etc.)",
      "Streams and buffers in Node — brief working understanding",
      "Explain the auth flow you actually built for Samadhan, end to end"
    ]
  },
  {
    t: "System Design Basics", tier: 1,
    tasks: [
      "Client-server model and the full request lifecycle",
      "Vertical vs horizontal scaling — tradeoffs of each",
      "Load balancers — types, health checks, where they sit in the architecture",
      "Caching layers — client-side, CDN, server-side (Redis) — and cache invalidation strategies",
      "Database scaling — replication, read replicas, sharding",
      "CAP theorem revisited in a system design context — real example (e.g. why a chat app picks AP)",
      "Message queues — why/when you'd use one (Kafka/RabbitMQ, high-level awareness)",
      "Design one full system end-to-end on paper — e.g. 'design PeeKaboo at 100x scale' or a URL shortener",
      "Rate limiting and API gateway concepts at the system level",
      "Monolith vs microservices — tradeoffs, and which you'd pick for a project like ThriveHer",
      "Practice explaining your design choice out loud in under 5 minutes, whiteboard-style"
    ]
  },
  {
    t: "Tier 2 Sweep — DBs, Next.js, TS, Git", tier: 2,
    tasks: [
      "MongoDB vs MySQL — one tight comparison answer tied to your own project choices",
      "MongoDB schema design — embedding vs referencing, with a Samadhan/ThriveHer example",
      "Next.js — SSR vs CSR vs SSG vs ISR, and specifically why ThriveHer used Next.js",
      "TypeScript — interfaces vs types, basic generics, why it helps at scale",
      "Git — merge vs rebase, and resolving a merge conflict step by step",
      "Git — cherry-pick, stash, reset vs revert — one-liner each",
      "REST vs GraphQL — be ready even though it's not on your resume, they sometimes probe this",
      "Firebase — Realtime DB vs Firestore, auth, why you picked it for Samadhan",
      "AWS services you actually used in your projects — name them specifically, don't generalize",
      "Config management across dev/staging/prod environments"
    ]
  },
  {
    t: "Tier 2 Sweep — Docker, Cloud, Tools", tier: 2,
    tasks: [
      "Docker — image vs container, what a Dockerfile actually does",
      "Why containerize an app — benefits over a traditional VM setup",
      "docker-compose — running a multi-service app (e.g. API + DB) together",
      "CI/CD basics — what a pipeline automates, GitHub Actions if you used it",
      "Vercel/Netlify deployment flow — exactly how your projects go live from a git push",
      "Postman — collections, environment variables, how you tested your APIs",
      "Figma/Framer — one confident line: 'used it to prototype the UI before building'",
      "Serverless vs traditional server deployment — tradeoffs",
      "Basic monitoring/logging awareness — how you'd know if your deployed app broke",
      "Domain/DNS setup for a project you actually deployed"
    ]
  },
  {
    t: "Full Mock Interview + Tier 3 Rapid Fire", tier: 3,
    tasks: [
      "Timed resume walkthrough — under 90 seconds, no rambling",
      "Mock: answer 3 DBMS questions cold, no notes",
      "Mock: answer 3 JS/React questions cold, no notes",
      "Mock: answer 1 full system design question, whiteboard-style",
      "Rapid fire one-liners: Tailwind, Figma, Framer, Postman, HTML/CSS basics",
      "Redo any SQL problems still shaky from days 7-8",
      "Prepare 2-3 sharp questions to ask the interviewer",
      "Prepare STAR-format answers tied to your achievements (hackathon win, scholarship, 5 competition wins)",
      "Re-read your own resume line by line and anticipate a follow-up question on every single bullet",
      "Pack your bag / test your setup for tomorrow (if in-person or online), then stop studying and sleep early"
    ]
  }
];