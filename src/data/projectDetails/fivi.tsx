import React from "react";
import ContentImage from "../../components/ContentImage";

const FiViContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <div className="prose prose-gray max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          FiVi - AI-Powered Physical Trainer/Therapist
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          This project was developed during{" "}
          <a
            href="https://devpost.com/software/fivi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline
            visited:text-blue-600"
          >
            {" "}
            <strong>YHack 2024</strong>
          </a>
          , where our team won the Best Healthcare Hack award and a sponsor
          award from a company called ActualFood. Our work was also featured on{" "}
          <a
            href="https://awards.cs.brown.edu/2024/12/17/brown-cs-undergraduates-win-first-place-in-yhack-2024s-healthcare-track/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline visited:text-blue-600"
          >
            <strong>Brown CS News</strong>
          </a>
          .
        </p>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Problem Statement: Making Fitness Accessible Anywhere
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            My friends and I are really into fitness, so our goal with FiVi was
            to leverage technology to make professional fitness guidance
            accessible regardless of location or schedule. This initiative aimed
            to empower individuals by providing personalized support for an
            active lifestyle.
          </p>
        </div>
        <br />
        <ContentImage
          src="/images/projects/fivi/Fivi1.jpg"
          alt="FiVi main interface showing AI-powered fitness coaching"
          caption="FiVi's main interface providing real-time AI coaching"
          width="full"
        />
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          What FiVi Does: Real-Time AI Coaching
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            FiVi is a webcam-compatible web application that provides real-time
            feedback on exercise form. It uses a pre-trained deep learning model
            to analyze movements, offering immediate textual and visual
            corrections, tips, and voice guidance. The system also tracks
            progress, offers personalized workout recommendations, and includes
            voice guidance for tailored fitness coaching from anywhere.
          </p>

          <ContentImage
            src="/images/projects/fivi/Fivi2.png"
            alt="FiVi form correction interface showing pose detection"
            caption="Real-time pose detection and form correction feedback"
            width="half"
          />
        </div>

        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          How We Built It: Technical Architecture
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Our solution integrated three main technical components for
            real-time fitness coaching:
          </p>
          <ul className="space-y-3 ml-6 mt-4">
            <li>
              <strong>Computer Vision Model</strong>: We utilized{" "}
              <strong>MediaPipe Pose Landmarks</strong> and{" "}
              <strong>OpenCV</strong> in a Flask backend to continuously process
              webcam video, detecting key body landmarks and calculating joint
              angles for real-time form analysis. This supported squat, pushup,
              and plank analysis.
            </li>
            <li>
              <strong>
                Audio Interface & LLM Integration (Hybrid Approach)
              </strong>
              : This complex component managed both audio input and AI-driven
              voice output.
              <ul className="space-y-2 ml-6 mt-2">
                <li>
                  <strong>Speech-to-Text (STT)</strong>: User audio is captured
                  via <strong>pyaudio</strong> and processed using the{" "}
                  <strong>Vosk API</strong> for real-time speech recognition
                  (16kHz rate, 1024 chunk size).
                </li>
                <li>
                  <strong>User Intent Categorization</strong>: Transcribed input
                  is sent to <strong>OpenAI's Chat Completions API</strong> for
                  categorization (e.g., "fitness_form",
                  "fitness_form_correction").
                </li>
                <li>
                  <strong>Text-to-Speech (TTS)</strong>: For AI voice responses,
                  we used <strong>OpenAI's Realtime API</strong> , managing a
                  WebSocket connection to stream and play audio via
                  <strong>sounddevice</strong>. The LLM's persona is continually
                  updated.
                </li>
                <li>
                  <strong>Inter-service Communication</strong>: Flask handles
                  video/pose analysis, while a separate aiohttp server manages
                  LLM interactions, processing prompts from pose analysis and
                  user queries, and sending them to the LLM backend every 40
                  seconds.
                </li>
              </ul>
            </li>
            <li>
              <strong>User Interface (Full Stack)</strong>:
              <ul className="space-y-2 ml-6 mt-2">
                <li>
                  The front end was developed using{" "}
                  <strong>React with JavaScript</strong>.
                </li>
                <li>
                  The backend, built in <strong>Flask with Python</strong>,
                  facilitates communication between the AI model, audio
                  interface, and user data, ensuring efficient execution and
                  smooth real-time feedback.
                </li>
              </ul>
            </li>
          </ul>
          <br />
          <ContentImage
            src="/images/projects/fivi/Fivi3.jpg"
            alt="FiVi user interface showing fitness tracking and feedback"
            caption="User interface demonstrating fitness tracking and real-time feedback"
            width="third"
          />
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          What I Learned
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Through this project, I gained valuable technical insights into
            adapting to real-time API integration challenges. Navigating the
            limitations of a newly released OpenAI API and managing the
            increased codebase complexity that came with pivoting to a hybrid
            audio solution, combining pyaudio, vosk, and different OpenAI
            APIs,was a key technical learning experience for me. Implementing
            asynchronous operations with <code>asyncio</code> and
            <code>ThreadPoolExecutor</code> for audio and WebSocket handling,
            alongside concurrent processing with threading for Vosk recognition,
            deepened my understanding of building responsive
            multi-threaded/multi-process applications. This project also marked
            my first time integrating an LLM API into a feature, which provided
            a great learning experience in building conversational interfaces
            for real-time applications
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            View Source Code
          </h3>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/fivi-yhack/fivi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
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

export default FiViContent;
