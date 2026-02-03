import { Award, Lightbulb, GitBranch, Bot, Code, Brain, Cpu, Wallet, Cog, GraduationCap, FileCheck } from "lucide-react";
import certDicodingPemrograman from "@/assets/cert-dicoding-pemrograman.jpg";
import certDicodingLogic from "@/assets/cert-dicoding-logic.jpg";
import certDicodingGit from "@/assets/cert-dicoding-git.jpg";
import certDicodingAI from "@/assets/cert-dicoding-ai.jpg";
import certDicodingPython from "@/assets/cert-dicoding-python.jpg";
import certDicodingML from "@/assets/cert-dicoding-ml.jpg";
import certDicodingDeepLearning from "@/assets/cert-dicoding-deeplearning.jpg";
import certDicodingFinlit from "@/assets/cert-dicoding-finlit.jpg";
import certDicodingMLOps from "@/assets/cert-dicoding-mlops.jpg";
import certAsahML from "@/assets/cert-asah-ml.jpg";
import certAsahKelulusan from "@/assets/cert-asah-kelulusan.jpg";
import type { LucideIcon } from "lucide-react";

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: 0,
    title: "Surat Kelulusan Program Asah",
    issuer: "Dicoding x Accenture",
    year: "Januari 2026",
    description: "Surat kelulusan resmi Program Asah led by Dicoding in association with Accenture untuk alur Machine Learning.",
    icon: FileCheck,
    color: "from-accent to-primary",
    image: certAsahKelulusan,
  },
  {
    id: 1,
    title: "Pelatihan Machine Learning - Asah 2025",
    issuer: "Dicoding x Accenture",
    year: "Januari 2026",
    description: "Menyelesaikan pelatihan intensif Machine Learning mencakup pemrograman, Git, AI, Python, ML, Deep Learning, dan MLOps.",
    icon: GraduationCap,
    color: "from-primary to-accent",
    image: certAsahML,
  },
  {
    id: 1,
    title: "Membangun Sistem Machine Learning",
    issuer: "Dicoding Indonesia",
    year: "Desember 2025",
    description: "Mempelajari MLOps, pipeline ML, model serving, monitoring, dan deployment dengan MLflow, GitHub, dan Docker.",
    icon: Cog,
    color: "from-rose-blush to-primary",
    image: certDicodingMLOps,
  },
  {
    id: 2,
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    year: "Januari 2026",
    description: "Mempelajari pengelolaan keuangan, investasi, dan strategi pinjaman cerdas.",
    icon: Wallet,
    color: "from-primary to-nude-400",
    image: certDicodingFinlit,
  },
  {
    id: 4,
    title: "Belajar Fundamental Deep Learning",
    issuer: "Dicoding Indonesia",
    year: "Oktober 2025",
    description: "Mempelajari neural network, NLP, image classification, dan generative AI.",
    icon: Cpu,
    color: "from-nude-400 to-accent",
    image: certDicodingDeepLearning,
  },
  {
    id: 5,
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "Oktober 2025",
    description: "Mempelajari klasifikasi, regresi, clustering, dan hyperparameter tuning.",
    icon: Brain,
    color: "from-accent to-rose-blush",
    image: certDicodingML,
  },
  {
    id: 6,
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    year: "September 2025",
    description: "Mempelajari dasar Python, OOP, unit testing, dan library populer.",
    icon: Code,
    color: "from-rose-blush to-primary",
    image: certDicodingPython,
  },
  {
    id: 7,
    title: "Dasar Pemrograman Pengembang Software",
    issuer: "Dicoding Indonesia",
    year: "September 2025",
    description: "Mempelajari dasar HTML, CSS, JavaScript, dan dokumentasi teknis aplikasi.",
    icon: Award,
    color: "from-primary to-nude-400",
    image: certDicodingPemrograman,
  },
  {
    id: 8,
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "September 2025",
    description: "Mempelajari konsep AI, Machine Learning, dan Deep Learning.",
    icon: Bot,
    color: "from-nude-400 to-accent",
    image: certDicodingAI,
  },
  {
    id: 9,
    title: "Belajar Dasar Git dengan GitHub",
    issuer: "Dicoding Indonesia",
    year: "Agustus 2025",
    description: "Mempelajari pengelolaan kode dengan Git, branching, dan kolaborasi tim di GitHub.",
    icon: GitBranch,
    color: "from-accent to-rose-blush",
    image: certDicodingGit,
  },
  {
    id: 10,
    title: "Logika Pemrograman (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    year: "Agustus 2025",
    description: "Mempelajari logika pemrograman dasar, gerbang logika, dan computational thinking.",
    icon: Lightbulb,
    color: "from-rose-blush to-primary",
    image: certDicodingLogic,
  },
];
