import React from "react";
import ContentImage from "../../components/ContentImage";

const HybridCNNContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <div className="prose prose-gray max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Transforming the Brain: A Hybrid CNN-Transformer Approach for
          Diagnosing Harmful Brain Activity
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          This project was developed as a final project for{" "}
          <strong>CSCI 1470 Deep Learning</strong> at Brown University. I
          collaborated with two other students to develop this hybrid approach
          for EEG analysis.
        </p>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Background
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            An <strong>electroencephalogram (EEG)</strong> is a crucial tool for
            providing insight into the brain's electrical activity. The goal of
            this project was to create a model that could output a probability
            distribution for various classes of harmful brain activity,
            including Seizure (SZ), Lateralized Periodic Discharge (LPD),
            Generalized Periodic Discharge (GPD), Lateralized Rhythmic Delta
            Activity (LRDA), Generalized Rhythmic Delta Activity (GRDA), and
            'OTHER'. This is important because the manual review of EEG
            recordings is time-intensive, expensive, and can be subjective. By
            creating this model, we hoped to improve the accuracy of EEG pattern
            classification and help doctors and researchers detect these types
            of activity more quickly.
          </p>
        </div>
        <br />
        <ContentImage
          src="/images/projects/hybrid-cnn-transformer/HCT1.png"
          alt="Spectogram"
          caption="Example of Spectrogram of EEG Data"
          width="full"
        />
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Methodology & Architecture
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Our <strong>hybrid CNN-Transformer model</strong> classifies harmful
            brain activity from EEG data. We decided on this approach due to the
            dual nature of EEG data, which has both visual characteristics
            (spectrograms) and sequential dependencies over time. The CNN is
            well-suited for extracting spatial features from the spectrograms,
            while the Transformer can effectively model the temporal
            relationships between these features. The data we used is publicly
            available from <strong>Harvard Medical School (HMS)</strong>, in the
            form of 50-second EEG and spectrogram data. We implemented our model
            using <strong>TensorFlow</strong>.
          </p>
          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Preprocessing
          </h4>
          <p>
            For each input, we use two spectrograms: one provided in the HMS
            dataset and one we generate ourselves. We use the raw EEG waveform
            time-series data and apply a{" "}
            <strong>wavelet and Fast Fourier transform</strong> to create our
            own spectrogram using the `librosa` library. Finally, both
            spectrograms are log-transformed, normalized, and concatenated
            before being passed into our model.
          </p>
          <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Model Architecture
          </h4>
          <p>
            The preprocessed and concatenated spectrograms are passed through a{" "}
            <strong>pre-trained EfficientNetB0</strong>, a CNN architecture
            initialized with weights from the ImageNet dataset. This creates{" "}
            <strong>1024 channels</strong> that contain important features of
            the spectrogram. The output of the CNN then goes through a Global
            Average 2D Pooling layer, which turns each channel into a single
            value. This 1024-length sequence is then passed into a{" "}
            <strong>Transformer</strong> and, finally, a fully connected layer
            with a softmax activation. Our Transformer uses multi-headed
            attention and dropout layers to capture relationships between the
            channels and prevent the model from overfitting. The final output is
            a probability distribution for the six categories of brain activity.
            We used <strong>KL Divergence</strong> as our loss function to
            measure the difference between the predicted and actual probability
            distributions.
          </p>
          <ContentImage
            src="/images/projects/hybrid-cnn-transformer/HCT2.png"
            alt="Arch"
            caption="Hybrid-CNN Architecture"
            width="full"
          />
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Results
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Our model achieved strong performance as shown in the results table.
            Our hybrid CNN-Transformer approach achieved a KL Divergence score
            of <strong>0.550406</strong>, demonstrating competitive performance
            compared to other advanced methods. While the ViT Pre-Trained Vision
            Transformer achieved <strong>0.457420</strong> and the CNN + LSTM +
            Multimodal Input achieved <strong>0.500874</strong>, our approach
            still delivered robust results. Our model significantly outperformed
            traditional methods like CNN + LSTM with only EEG data (1.101587)
            and 1D CNN approaches (1.106557). The numerical results confirm that
            our hybrid architecture successfully leveraged both spatial feature
            extraction from CNNs and temporal modeling from Transformers to
            achieve solid classification performance across all six categories
            of harmful brain activity.
          </p>
        </div>

        {/* The table you requested is added here */}
        <div className="mt-8 flex justify-center">
          <table className="table-auto border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 border border-gray-400 font-bold text-gray-800">
                  Model
                </th>
                <th className="px-4 py-2 border border-gray-400 font-bold text-gray-800">
                  KL Divergence
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-400">
                  ViT Pre-Trained Vision Transformer
                </td>
                <td className="px-4 py-2 border border-gray-400">0.457420</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-400">
                  CNN + LSTM + Multimodal Input
                </td>
                <td className="px-4 py-2 border border-gray-400">0.500874</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-400 font-bold">
                  <strong>CNN + Transformer</strong>
                </td>
                <td className="px-4 py-2 border border-gray-400 font-bold">
                  <strong>0.550406</strong>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-400">
                  EEG + Spectrogram + 2D CNN
                </td>
                <td className="px-4 py-2 border border-gray-400">0.610243</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-400">
                  CNN + LSTM with only EEG data
                </td>
                <td className="px-4 py-2 border border-gray-400">1.101587</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-400">
                  1D CNN (Time Series & Image)
                </td>
                <td className="px-4 py-2 border border-gray-400">1.106557</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Challenges & Takeaways
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            While designing our project, we encountered several challenges. Our
            dataset was large and our complex model architecture had many
            trainable parameters, leading to long training times. To prevent
            running out of RAM and CPU power, we had to load data and train the
            model in batches, saving the weights in between. Initially, we had
            hoped to implement a more complex multimodal approach, which is why
            we had two different sources of data. However, as this was our first
            time independently designing and implementing such a complex ML
            model, we found that building a multimodal approach was beyond the
            scope of our skills and available time. The EEG data itself was
            difficult to work with, and we had trouble with the feature
            extraction we had initially proposed. While we were unable to
            implement a full multimodal approach, we still performed heavy data
            augmentation and created multiple spectrograms for each input to
            enhance our model's performance.
          </p>
          <p>
            Overall, we felt the project was a success. Our accuracy was
            comparable to most advanced approaches and actually outperformed
            some of them. This was the first time we built such an extensive ML
            model by ourselves from scratch. Our biggest takeaway from this
            project is that real-world datasets are huge and messy. We learned
            that a significant portion of the work can be dedicated to
            preprocessing, cleaning, and augmentation. This project also taught
            us how to load and train our data in batches so our machine could
            handle it.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            View Source Code
          </h3>
          <div className="flex items-center justify-center">
            <a
              href="https://github.com/seanK04/Hybrid-CNN-Transformer-EEG-Diagnosis"
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

export default HybridCNNContent;
