import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import ContentImage from "../../components/ContentImage";

const PINNContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <div className="prose prose-gray max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          This project was developed as a final report for{" "}
          <a
            href="https://sites.brown.edu/crunch-group/apma-2070-deep-learning-for-scientists-engineers/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline visited:text-blue-600"
          >
            <strong>
              APMA 2070: Deep Learning for Scientists and Engineers
            </strong>
          </a>
          , a graduate-level course at Brown University. I was the sole person
          who made this project and my goal was to create a Physics-Informed
          Neural Network (PINN) to solve the normalized Boussinesq equation,
          which describes the propagation of shallow-water waves.
        </p>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          What is the Problem?
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The Boussinesq approximation is a mathematical model that describes
            the behavior of surface water waves in shallow channels, capturing
            both weak nonlinearity and dispersion. Solving these equations can
            be computationally expensive, and analytical solutions are only
            available in special cases. Traditional numerical methods often rely
            on a mesh, which can be complex to set up.
          </p>
          <p>
            Physics-Informed Neural Networks (PINNs) offer a promising,
            mesh-free alternative by embedding the governing partial
            differential equation directly into the neural network's training
            loss. My objective was to use this method to construct a PINN that
            could accurately model the wave's behavior, particularly a
            prescribed soliton initial condition. The specific PDE I was solving
            is the normalized Boussinesq equation:
          </p>
          <div className="flex justify-center my-8">
            <BlockMath math="\frac{\partial^2 \psi}{\partial \tau^2} - \frac{\partial^2 \psi}{\partial \xi^2} - \frac{\partial^2}{\partial \xi^2}\left(3\psi^2 + \frac{\partial^2 \psi}{\partial \xi^2}\right) = 0" />
          </div>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Methodology & Implementation
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            My approach involved training a fully-connected neural network to
            approximate the solution to the normalized Boussinesq equation. The
            training loss was composed of two main components:
          </p>
          <ul className="space-y-3 ml-6 mt-4">
            <li>
              <strong>PDE Residual Loss:</strong> This term enforced the
              Boussinesq equation itself. I evaluated this loss at N_r uniformly
              sampled "collocation points" across the domain.
            </li>
            <li>
              <strong>Initial-Condition Loss:</strong> This term enforced the
              initial soliton wave profile at time <InlineMath math="\tau=0" />.
            </li>
          </ul>
          <p>
            The total loss was a weighted combination of these two terms. I
            implemented and benchmarked my models across three different deep
            learning frameworks: <strong>PyTorch</strong>,{" "}
            <strong>TensorFlow</strong>, and <strong>JAX</strong>.
          </p>
          <p>
            A key part of my study was comparing different activation functions
            (ReLU, tanh, and sigmoid) in both their standard form and with an
            adaptive scale parameter. This allowed me to investigate how
            different nonlinearities affect the network's ability to learn the
            underlying physics of the Boussinesq equation. My network
            architecture consisted of 4 hidden layers with 50 neurons each.
          </p>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Results & Key Takeaways
        </h3>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            My systematic benchmark provided several key insights into the
            behavior of PINNs for this specific problem:
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Activation Functions Matter
          </h4>
          <ul className="space-y-3 ml-6">
            <li>
              <strong>ReLU</strong> networks achieved the lowest global loss and
              converged the fastest, but they collapsed to the trivial zero
              solution. This is a crucial finding: a low loss value alone does
              not guarantee a correct physical solution. The network simply
              found a way to satisfy the equation (all derivatives are zero),
              but it failed to capture the wave dynamics.
            </li>
            <li>
              <strong>Tanh</strong> networks provided the best balance. It
              successfully reproduced the soliton wave shape and localized its
              errors (PDE residuals) to the high-curvature regions of the wave,
              where the fourth-derivative term is most challenging.
            </li>
            <li>
              <strong>Sigmoid</strong> networks underfitted the data, producing
              an attenuated and overly smooth wave profile. Its residual
              heatmaps showed large errors propagating along the characteristic
              lines, indicating a failure to correctly model both linear and
              nonlinear terms of the PDE.
            </li>
          </ul>

          <ContentImage
            src="/images/projects/pinn/PINN1.png"
            alt="PINN Framework Performance Comparison"
            caption="Heatmaps of the PDE residual r(ξ, τ) for ReLU vs Sigmoid vs Tanh"
          />

          <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            Framework Performance
          </h4>
          <ul className="space-y-3 ml-6">
            <li>
              <strong>JAX</strong> was the clear winner in terms of both speed
              and accuracy. It achieved the lowest average final loss and the
              fastest training times, largely thanks to its automatic JIT
              compilation.
            </li>
            <li>
              <strong>PyTorch</strong> was a solid second, with faster
              performance and better accuracy than TensorFlow.
            </li>
            <li>
              <strong>TensorFlow</strong> was the slowest and least accurate
              across the board.
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Beyond Scalar Loss
          </h4>
          <p>
            My study highlights that simply looking at a single scalar loss
            value can be misleading. While ReLU networks had the lowest loss,
            they produced a physically meaningless solution. The spatial
            distribution of the PDE residual, visualized through heatmaps, was
            essential for properly validating the model's performance and
            understanding where it was succeeding or failing.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            View Source Code
          </h3>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/seanK04/APMA-2070-Final-Project"
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

export default PINNContent;
