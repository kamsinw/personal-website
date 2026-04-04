export interface Project {
  title: string;
  stack: string;
  bullets: string[];
  highlight: string;
  github?: string;
}

export const sweProjects: Project[] = [
  {
    title: "Kestrel",
    stack: "Go",
    bullets: [
      "Implemented RAFT consensus algorithm for a fault-tolerant, strongly consistent distributed KV store",
      "Linearizable replicated state machine with leader election, log replication, majority-based commit",
      "Concurrent RPC handlers with mutex-protected shared state",
    ],
    highlight:
      "Sub-10ms p99 write latency, 99.9% availability across 5-node cluster under leader failover",
  },
  {
    title: "Drift",
    stack: "Go / PostgreSQL / Next.js",
    bullets: [
      "Developer tool detecting silent state drift in event-driven systems by replaying event logs",
      "Deterministic Go replay engine processing 100k+ events",
      "Event ingestion pipeline + REST API backed by PostgreSQL",
    ],
    highlight:
      "Failure simulation framework injecting distributed anomalies across 19 wallet entities",
  },
  {
    title: "Merlin",
    stack: "CUDA C / Python / CuPy",
    bullets: [
      "CUDA kernels for K-Means and logistic regression",
      "Shared-memory tiling reducing global memory accesses by ~70%",
      "Parallel gradient reduction using shared-memory tree reduction",
    ],
    highlight: "Up to 32x speedup over NumPy CPU baselines",
  },
  {
    title: "Peregrine",
    stack: "Go",
    bullets: [
      "Iterative DNS resolver using UDP sockets and raw DNS wire-format parsing (RFC 1035)",
      "Concurrent request handling with goroutines and timeout-based retries",
    ],
    highlight:
      "Thread-safe TTL-based caching reducing upstream queries by ~60%",
  },
  {
    title: "Mako",
    stack: "OCaml",
    bullets: [
      "Functional language interpreter with typed AST, lexer, parser, and evaluation pipeline",
    ],
    highlight:
      "Closure-based execution model with lexical scoping, let rec, higher-order functions, tuples",
  },
];
