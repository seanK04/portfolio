import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about-me" className="py-12 px-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-800 leading-relaxed">
            Hi, I'm a student at Brown University studying Computer Science and
            Mathematics with interests in machine learning research and software
            engineering. My machine learning projects are pretty diverse and
            span from developing Physics-Informed Neural Networks to solve
            partial differential equations to enhancing reinforcement learning
            algorithms with Transformer architectures.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Currently, I'm doing research at Princeton's Vertaix Lab on neural
            topic models, which has given me a lot of hands-on experience with
            PyTorch, and I've also dabbled in Jax and TensorFlow through
            personal and course projects. I've also just finished my internship
            at Amazon Web Services, where I developed my cloud infrastructure
            and data engineering skills. I'm excited to take that experience,
            which includes building scalable serverless architectures with
            Lambda, Step Functions, and Glue ETL Jobs and optimizing big data
            piplelines that process millions of transaction records, and apply
            it to more machine learning focused work.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Ultimately, my goal is to bridge the gap between innovative ML
            research and production ready systems. I want to bring both an
            engineer's mindset for scalability and a researcher's approach to
            algorithmic innovation to tackle complex problems in AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
