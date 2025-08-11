import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import ContentImage from "../../components/ContentImage";

const TransformerRudderContent: React.FC = () => {
  // It's good practice to declare a consistent variable for the image path base
  const imagePath = "/images/projects/transformer-rudder/";

  return (
    <div className="space-y-8 mt-8">
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          This project was developed as a final research paper for{" "}
          <a
            href="https://cs.brown.edu/courses/cs2951x/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline visited:text-blue-600"
          >
            <strong>CSCI 2951X - Reintegrating AI</strong>
          </a>
          , a graduate-level course at Brown University focused on integrating
          existing AI subfields into a single intelligent agent architecture. I
          collaborated with 7 other graduate students on this work.
        </p>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Problem Statement: Delayed and Sparse Rewards in Reinforcement
          Learning
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Reinforcement Learning faces significant challenges in environments
            with delayed or sparse rewards, where the temporal gap between
            actions and their consequences makes credit assignment difficult.
            Traditional policy gradient methods struggle to connect the causal
            relationship between actions and delayed rewards. While Transformers
            excel at long-term memory tasks, they do not inherently improve
            long-term credit assignment in environments with extremely delayed
            rewards, as they still receive feedback only at the final timestep.
            This separation suggests that advances in sequence modeling alone
            may be insufficient for sparse-reward problems.
          </p>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Understanding RUDDER: Return Decomposition for Delayed Rewards
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <a
              href="https://ml-jku.github.io/rudder/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline visited:text-blue-600"
            >
              <strong>RUDDER</strong>
            </a>{" "}
            (Return Decomposition for Delayed Rewards) is a novel model-free
            reinforcement learning approach designed to overcome the challenges
            posed by delayed and sparse rewards. Its main idea is to directly
            and efficiently assign credit to reward-causing state-action pairs
            by transforming an MDP with delayed rewards into an equivalent one
            where rewards are less delayed, thereby dramatically speeding up
            learning.
          </p>
        </div>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            This is achieved by exploiting the fact that value functions in
            complex tasks are often step functions, where changes in return
            expectation can be identified as "steps." Consider a simple
            "key-door" example as shown below:
          </p>
          <ContentImage
            src={imagePath + "Rudder2.png"}
            alt="A simple key-door example showing a key, a locked door, and treasure"
            caption="The 'key-door' task in reinforcement learning."
            width="half"
          />
          <p>
            In this task, the agent only receives a positive reward at the very
            end when it finds the treasure. However, the value of the agent's
            actions increases significantly at two key events: getting the key
            and opening the door. These events, even with no immediate reward,
            are pivotal.
          </p>
          <ContentImage
            src={imagePath + "Rudder3.png"}
            alt="RUDDER diagram showing the value function as a step function with rewards redistributed to key events."
            caption="RUDDER's core concept: The value function (blue line) is a step function. Rewards (red arrows) are redistributed to the pivotal events."
            width="half"
          />
          <p>
            The diagram above visualizes this concept. The value function (blue
            line) is a step function that increases at pivotal events. RUDDER
            then uses this to redistribute rewards to these pivotal steps (red
            arrows), simplifying the learning process for the agent by aiming
            for zero expected future rewards after an event has been credited.
            The original RUDDER implementation achieved this using an LSTM
            network, which excels at memorizing these key events.
          </p>
          <p>
            This transformation of a single, sparse reward into a dense,
            continuous learning signal is the central innovation of RUDDER. It
            provides the agent with immediate feedback on its actions,
            effectively solving the temporal credit assignment problem.
          </p>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Our Approach: T-RUDDER – Enhancing Credit Assignment with Transformers
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            We introduce T-RUDDER, a novel approach that enhances the RUDDER
            framework by replacing LSTM-based sequence modeling with a
            Transformer architecture to improve temporal credit assignment. Our
            approach explicitly addresses the shortcomings of both LSTM-based
            approaches and standard Transformer models in environments with
            delayed or sparse rewards by directly assigning credit to early
            actions. The T-RUDDER implementation maintains structural
            equivalence with the original LSTM-based RUDDER, deliberately
            replacing only the sequence modeling component to isolate the
            Transformer's impact on credit assignment performance.
          </p>
          <p>
            The core of T-RUDDER consists of{" "}
            <strong>four Transformer encoder layers</strong> with gradient
            checkpointing for memory efficiency. Each layer employs 8 attention
            heads, enabling the model to simultaneously track different temporal
            patterns in the input sequence, a capability absent in LSTM
            architectures. Inputs are augmented with sine-cosine positional
            encodings supporting sequences up to 1000 timesteps, addressing a
            fundamental limitation in the original implementation which
            struggled with very long episodes.
          </p>
          <ContentImage
            src={imagePath + "Rudder1.png"}
            alt="T-Rudder."
            caption="T-RUDDER Architecture"
            width="half"
          />
          <p>
            We employ an enhanced RUDDER-style loss function that combines
            multiple learning signals to improve credit assignment. The total
            loss is a weighted combination of six components:
          </p>
          <div className="flex justify-center my-8">
            <BlockMath math="\mathcal{L}_{\text{total}} = 0.35 \cdot \mathcal{L}_{\text{primary}} + 0.25 \cdot \mathcal{L}_{\text{TD}} + 0.15 \cdot \mathcal{L}_{\text{future10}} + 0.10 \cdot \mathcal{L}_{\text{future50}} + 0.10 \cdot \mathcal{L}_{\text{Q}} + 0.05 \cdot \mathcal{L}_{\text{smooth}}" />
          </div>
          <p>
            This multi-component loss creates a rich training signal addressing
            different aspects of credit assignment, from local consistency to
            long-range dependencies and anticipatory dynamics.
          </p>

          <p>
            Our reward redistribution algorithm integrates multiple
            complementary techniques, including:
          </p>
          <ul className="space-y-3 ml-6 mt-4">
            <li>
              <strong>TD(λ)-based redistribution</strong>: Computes TD errors
              with eligibility traces for robust credit assignment.
              <div className="flex justify-center mt-2">
                <InlineMath math="\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)" />
              </div>
            </li>
            <li>
              <strong>Multi-scale delta analysis</strong>: Calculates value
              differences at multiple timescales with progressive smoothing.
              <div className="flex justify-center mt-2">
                <InlineMath math="\Delta_{\text{short}}(t) = V_{\text{smooth}}^{\text{short}}(t+1) - V_{\text{smooth}}^{\text{short}}(t)" />
              </div>
            </li>
            <li>
              <strong>Anticipatory reward shaping</strong>: Creates smooth
              positive signals before actual rewards.
            </li>
            <li>
              <strong>Uncertainty-based smoothing</strong>: Modulates signal
              strength based on prediction variance across overlapping segments.
            </li>
          </ul>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Experimental Setup & Environments
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            We conducted controlled experiments on two representative Atari
            environments, Bowling and Solaris, to ensure a fair comparison. Both
            models were built on identical Trust Region Policy Optimization
            (TRPO) backbones and trained using the same hyperparameters to
            isolate the impact of the sequence modeling architecture.
          </p>
          <ul className="space-y-3 ml-6 mt-4">
            <li>
              <strong>Bowling Environment</strong>: This presents a perfect
              testbed for credit assignment as it features highly delayed
              rewards that depend on precise timing of actions taken
              significantly earlier in the episode.
            </li>
            <li>
              <strong>Solaris Environment</strong>: This offers a more complex
              reward structure with moderate sparsity and diverse timescales,
              requiring both strategic planning and tactical execution.
            </li>
          </ul>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Key Results & Performance
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Our comprehensive empirical evaluation demonstrated that the
            Transformer-based approach consistently outperforms the LSTM
            variant.
          </p>
          <ul className="space-y-4 ml-6 mt-4">
            <li>
              <strong>Bowling Environment</strong>: T-RUDDER obtained an average
              reward of <strong> 34.50</strong> across all 20 evaluation
              episodes, with the final 10 episodes averaging 36.80. This
              represents a{" "}
              <strong className="text-green-600">15.8% improvement</strong> over
              LSTM-RUDDER's average reward of 29.80. T-RUDDER also achieved a
              higher maximum score of 45.00 compared to LSTM-RUDDER's 30.00,
              indicating its ability to discover more optimal policies.
            </li>
            <li>
              <strong>Solaris Environment</strong>: T-RUDDER achieved an
              impressive average reward of <strong>5210.00</strong> across all
              evaluation episodes, approximately{" "}
              <strong className="text-green-600">4.1 times higher</strong> than
              LSTM-RUDDER's 1266.00. This translates to a{" "}
              <strong className="text-green-600">311.5% improvement</strong>.
              This substantially exceeds previously established state-of-the-art
              performance for LSTM-RUDDER in this environment.
            </li>
          </ul>
          <ContentImage
            src={imagePath + "Rudder4.png"}
            alt="results."
            caption="Visualization of T-RUDDER's reward redistribution process in Atari Bowling for the first episode. The top panel shows original sparse rewards, with each vertical line representing a reward event (R=1.0 to R=9.0). The second panel displays redistributed rewards with anticipation zones (green-shaded areas) that identify important action sequences before rewards occur. The third panel quantifies action importance through the rate of change in predicted values, with peaks marking critical decision points. The bottom panel compares cumulative reward curves, showing how T-RUDDER transforms the stepped original reward into a smoother, more continuous learning signal."
            width="half"
          />
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Computational Considerations
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Despite the performance advantages, our T-RUDDER implementation
            faced significant computational challenges. The Transformer-based
            approach required approximately{" "}
            <strong className="text-red-600">3.4 times more GPU memory</strong>{" "}
            and{" "}
            <strong className="text-red-600">
              2.7 times longer training time per episode
            </strong>{" "}
            compared to the LSTM variant. The most resource-intensive component
            was self-attention computation, which scales quadratically with
            sequence length. Our training was limited to 2 million frames due to
            computational constraints, considerably less than the 20 million
            frames used in the original RUDDER paper.
          </p>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Contributions & Takeaways
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            T-RUDDER demonstrates clear performance advantages over LSTM-RUDDER,
            particularly in complex environments like Solaris where the
            Transformer's ability to model multiple temporal dependencies is
            highly beneficial. Our analysis provides insights into the
            trade-offs between performance and computational efficiency in
            sequence-based credit assignment methods, offering guidance for
            future research. While the benefits come with significant
            computational costs, our work highlights that Transformer
            architectures can significantly improve temporal credit assignment
            in environments with delayed rewards.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            View Source Code
          </h3>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/seanK04"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformerRudderContent;
