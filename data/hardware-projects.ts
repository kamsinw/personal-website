import type { Project } from "./swe-projects";

export const hardwareProjects: Project[] = [
  {
    title: "Sable",
    stack: "Verilog",
    bullets: [
      "FPGA accelerator implementing Power Iteration for dominant eigenvectors (Markov chain analysis)",
      "FSM with BRAM-backed matrix/vector storage and epsilon-based convergence detection",
      "VGA visualization with clock-domain crossing FIFO and debounced hardware inputs",
    ],
    highlight: "4-stage pipelined matrix-vector multiplication",
  },
  {
    title: "Atlas",
    stack: "Verilog",
    bullets: [
      "Vector register file and instruction decoder for parallel ALU operations",
      "Modular RTL datapath: ALU lanes, control FSM, write-back logic",
      "8x throughput over scalar execution",
    ],
    highlight: "8-lane SIMD vector processing engine for data-parallel workloads",
  },
  {
    title: "Beluga",
    stack: "Embedded C",
    bullets: [
      "Microcontroller temperature monitoring: DS18B20, LCD, RGB LEDs, servo, EEPROM, UART",
      "RS-232 protocol for inter-device configuration synchronization",
      "Persistent config storage via EEPROM with structured command parsing",
    ],
    highlight:
      "Interrupt-driven firmware for sensor sampling, actuator control, real-time display",
  },
  {
    title: "Sentinel",
    stack: "Python / Raspberry Pi / GrovePi",
    bullets: [
      "IoT monitoring with ultrasonic distance sensors, rotary input, RGB LCD",
      "Sensor polling + threshold detection for object proximity",
    ],
    highlight:
      "Real-time LCD dashboard with configurable thresholds and presence alerts",
  },
  {
    title: "Orion",
    stack: "Python / Raspberry Pi / Arduino Pro Mini",
    bullets: [
      "Deterministic execution loop with delay/sound timers",
      "GPIO input + Arduino over UART for joystick ADC",
      "Framebuffer renderer with bitwise sprite rasterization, SDL/OpenGL output",
    ],
    highlight:
      "Multithreaded Chip-8 interpreter with opcode decoding, CPU cycle emulation",
  },
];
