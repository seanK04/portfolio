export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "transformer-rudder",
    title: "Transformer-Enhanced RUDDER Credit Assignment",
    description: "I tackled temporal credit assignment in sparse-reward reinforcement learning by replacing RUDDER's LSTM with a 4-layer Transformer architecture featuring 8 attention heads and positional encodings for 1000-timestep episodes. My enhanced loss function combines six complementary signals including TD(λ)-based redistribution and anticipatory reward shaping, achieving a 311% improvement in Atari Solaris and 15.8% in Bowling over the original LSTM-based RUDDER implementation.",
    technologies: ["PyTorch", "Transformers", "Reinforcement Learning"],
    githubUrl: "https://github.com/seanK04"
  },

  {
    id: "physics-pinn",
    title: "Physics Informed Neural Network for Normalized Boussinesq Equation",
    description: "I created a comprehensive PINN framework to solve the normalized Boussinesq equation for shallow-water wave propagation, implementing identical architectures across PyTorch, TensorFlow, and JAX to isolate framework performance differences. My systematic study revealed that JAX achieved superior speed and accuracy through JIT compilation, while activation function choice critically impacts solution quality—with ReLU networks paradoxically achieving low loss but collapsing to trivial solutions.",
    technologies: ["PyTorch", "TensorFlow", "JAX"],
    githubUrl: "https://github.com/seanK04"
  },
    {
    id: "eeg-diagnosis",
    title: "Hybrid CNN-Transformer EEG Diagnosis",
    description: "I designed a novel hybrid architecture combining pre-trained EfficientNetB0 for spatial feature extraction from EEG spectrograms with Transformer attention mechanisms for temporal modeling, achieving competitive performance in classifying six categories of harmful brain activity. My approach leverages both provided Harvard Med School spectrograms and custom wavelet-generated spectrograms.",
    technologies: ["Python", "Pandas", "TensorFlow"],
    githubUrl: "https://github.com/seanK04"
  },
  {
    id: "fivi",
    title: "FiVi - Yale Hackathon Winner",
    description: "I developed an AI fitness coach featuring real-time pose analysis through MediaPipe and OpenCV, coupled with a sophisticated audio interface combining Vosk speech recognition and OpenAI's Realtime API for natural voice interactions. My Flask backend manages concurrent video processing and LLM conversations, delivering personalized form corrections and workout guidance that earned Best Healthcare Hack at YHack 2024.",
    technologies: ["React", "Flask", "MediaPipe", "OpenCV", "OpenAI API"],
    githubUrl: "https://github.com/seanK04"
  }
];

export const experiences: Experience[] = [
  {
    id: "princeton-researcher",
    title: "Machine Learning Researcher",
    company: "Princeton University",
    dates: "May 2024 - Present",
    description: "I'm developing novel approaches to neural topic modeling by integrating the Vendi Score, an entropy-based diversity metric inspired from ecology and quantum statistical mechanics, directly into the training objectives of VAE-based models like ETM, ProdLDA, DecTM, and TSCTM. My research addresses the critical but neglected problem of topic diversity in neural topic models, developing methods to ensure discovered topics are not just coherent but maximally distinct, with promising results on the 20Newsgroups data set and plans to scale to WikiText-103 and NYT datasets."
  },
  {
    id: "aws-intern",
    title: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    dates: "May 2025 - August 2025",
    description: "I'm engineering the Agreement Lifecycle Plan (ALP) Auditor system using AWS Step Functions, Lambda, Glue ETL, and S3 to validate synchronization integrity across over 8 million AWS marketplace agreements. I'm developing Infrastructure as Code using AWS CDK with automated CI/CD pipelines, and implementing high-performance data extraction using PySpark RDD parallel processing with temporal filtering, reducing load from 4M agreements to 500 recently modified records—achieving 99.99% processing efficiency improvement."
  }
];
