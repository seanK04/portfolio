import React from "react";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const PrincetonResearcherContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <div className="prose prose-gray max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          A Novel Approach to Improve Topic Diversity in Neural Topic Models
        </h2>

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          What is Topic Modeling?
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            At its core, topic modeling is an unsupervised machine learning
            technique used to discover the abstract "topics" that occur in a
            collection of documents. The goal is to uncover the hidden thematic
            structure within a corpus without requiring any human annotation.
          </p>
          <p>
            For example, imagine you have a large dataset of news articles. A
            topic model might automatically identify a "space exploration"
            topic, characterized by words like{" "}
            <em>galaxy, rocket, astronaut, Mars</em>, and <em>telescope</em>.
            Simultaneously, it might identify a "political debate" topic with
            words like <em>election, president, congress, policy</em>, and{" "}
            <em>vote</em>. The model doesn't know what these topics are called,
            but it can learn that these groups of words tend to appear together
            and, more importantly, that each document can be described as a
            mixture of these topics. A single document about a Mars mission's
            budget, for instance, might be composed of 70% of the "space
            exploration" topic and 30% of the "political debate" topic.
          </p>
          <p>
            This relationship forms a clear hierarchical structure. At the top
            is the entire collection of documents, or corpus. Below that, each
            document is represented as a mixture of different latent topics. At
            the lowest level, each topic is a distribution over the vocabulary
            of all words in the corpus. This means a topic is essentially a
            collection of words that tend to co-occur.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs mt-6 mb-6 overflow-x-auto">
            <pre className="whitespace-pre-wrap">
              {`Corpus (News Articles Dataset)
  |
  |-- Document 1 (Mars Mission) --> {Space: 65%, Politics: 25%, Technology: 10%}
  |-- Document 2 (Election News) --> {Politics: 70%, Technology: 20%, Medicine: 10%}
  |-- Document 3 (AI Research) --> {Technology: 80%, Medicine: 15%, Space: 5%}
  |-- ...
  |
  +-- Topics (Word Distributions)
        |
        |-- Topic 1: Space Exploration
        |     |-- mars: 18.5%, rocket: 15.2%, astronaut: 12.8%, nasa: 11.3%, ...
        |
        |-- Topic 2: Politics & Government  
        |     |-- election: 16.8%, president: 14.5%, congress: 13.2%, vote: 12.1%, ...
        |
        |-- Topic 3: Technology & AI
        |     |-- algorithm: 17.3%, neural: 15.6%, computer: 14.2%, data: 11.5%, ...
        |
        |-- Topic 4: Medicine & Health
        |     |-- patient: 19.2%, treatment: 16.8%, disease: 14.5%, clinical: 12.3%, ...
        |
        +-- Vocabulary Layer (~50,000 words)
              |-- High-frequency: {the, and, of, to, in, ...}
              |-- Domain-specific: {mars, election, algorithm, patient, ...}
              |-- Rare words: {exoplanet, filibuster, backpropagation, ...}`}
            </pre>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          The Challenge: Coherence vs. Diversity
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            What makes a good topic model? Is it a model that finds perfectly
            coherent topics, where all the words clearly belong together? Or is
            it a model that discovers a wide range of distinct topics, capturing
            the full breadth of a document collection? The ideal model, of
            course, does both. The field of topic modeling has historically used
            two primary metrics to assess a model's performance:
          </p>
          <ol className="space-y-2 ml-6 mt-4">
            <li>
              <strong>Topic Coherence:</strong> This measures how semantically
              related the words within a single topic are. A high coherence
              score means the topics are interpretable and make intuitive sense
              to a human.
            </li>
            <li>
              <strong>Topic Diversity:</strong> This measures how distinct the
              topics are from each other. A high diversity score means the model
              isn't producing redundant or overlapping topics.
            </li>
          </ol>
          <p>
            While much of the research and development in this area has focused
            on pushing topic coherence scores higher, a critical aspect has been
            largely neglected: diversity. A model can achieve impressive
            coherence scores by generating several versions of the same or very
            similar topics, which ultimately fails the purpose of making sense
            of a large dataset. Redundant topics force a user to manually sift
            through near-duplicates, hindering exploration and insight.
          </p>
          <p>
            This is a problem of <strong>topic diversity</strong>. My research
            focuses on a new, elegant solution to this problem: integrating a
            metric called the{" "}
            <a
              href="https://arxiv.org/abs/2210.02410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline visited:text-blue-600"
            >
              <strong>Vendi Score</strong>
            </a>{" "}
            directly into the training process of neural topic models. The Vendi
            Score provides a principled way to directly optimize for diversity,
            ensuring that the topics discovered are not just coherent, but also
            maximally distinct and useful.
          </p>
          <p>
            In modern topic modeling, the most popular and powerful neural-based
            approaches feature the{" "}
            <strong>Variational Autoencoder (VAE)</strong> architecture. The
            core idea is to represent documents and topics as latent variables,
            much like in a technique you may be familiar with: Non-negative
            Matrix Factorization (NMF).
          </p>
          <p>
            In a topic model, a document is seen as a probabilistic distribution
            over a set of topics, and each topic is itself a distribution over a
            vocabulary of words. The challenge lies in ensuring that these
            discovered topics are truly distinct and non-redundant.
          </p>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Understanding the Models
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            In my research, I am specifically benchmarking the performance of
            the following four prominent neural topic models. Each of these
            models has a unique approach to topic discovery, but a common
            feature among them is the existence of a{" "}
            <strong>topic-word distribution</strong> that defines each topic.
          </p>
          <ul className="space-y-3 ml-6 mt-4">
            <li>
              <strong>ETM (Embedded Topic Model):</strong> This model is a
              bridge between traditional topic models and modern word
              embeddings. By representing words and topics in a shared semantic
              space, ETM is able to learn more coherent topics by capturing the
              semantic relationships between words, not just their
              co-occurrence.
            </li>
            <li>
              <strong>ProdLDA (Product of Latent Dirichlet Allocation):</strong>{" "}
              ProdLDA is a VAE-based model that cleverly uses a "product of
              experts" formulation in its decoder. This simple architectural
              change enables the model to produce sharper and more interpretable
              topics than its predecessors.
            </li>
            <li>
              <strong>DecTM (Deconfounded Topic Model):</strong> Designed to
              handle corpora with a highly skewed, "long-tailed" distribution of
              topics, DecTM uses a causal intervention framework. This
              innovative approach effectively "deconfounds" the topic learning
              process from the bias of frequently occurring words, allowing it
              to discover topics that would otherwise be ignored.
            </li>
            <li>
              <strong>TSCTM (Topic-Semantic Contrastive Topic Model):</strong>{" "}
              This model is a powerful solution for sparse datasets,
              particularly collections of short texts. It uses contrastive
              learning to actively push different topic representations away
              from each other in a semantic space, directly enforcing diversity
              and improving topic quality.
            </li>
          </ul>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          The Innovation: The Vendi Score as a Training Objective
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The common thread uniting these four models is the core output: a
            topic-vocabulary distribution. This is the heart of what we call a
            "topic." My research introduces a novel objective function by
            incorporating the Vendi Score—a powerful, entropy-based metric that
            quantifies the diversity of a set of items—into the model's training
            process.
          </p>
          <p>
            The Vendi Score was first introduced in 2023 in a paper published by
            my PI. It is a uniquely interdisciplinary metric, drawing its
            inspiration from two seemingly unrelated fields:
          </p>
          <ul className="space-y-3 ml-6 mt-4">
            <li>
              <strong>Ecology:</strong> The Vendi Score extends the concept of
              "Hill numbers" from ecology, which are used to measure
              biodiversity. Just as an ecologist would want to know the
              diversity of species in an ecosystem, we want to know the
              diversity of topics in our model. The Vendi Score, however, goes a
              step further by incorporating a similarity function, acknowledging
              that not all topics are entirely distinct.
            </li>
            <li>
              <strong>Quantum Statistical Mechanics:</strong> Mathematically,
              the Vendi Score is equivalent to the exponential of the von
              Neumann entropy of a normalized similarity matrix. In quantum
              mechanics, von Neumann entropy measures the "mixedness" or
              uncertainty of a quantum state. Here, we apply the same principle
              to our set of topics, treating them as a collection and measuring
              their overall "mixedness" or diversity.
            </li>
          </ul>
          <p>
            The Vendi Score's core intuition is that it measures the "effective
            number of unique items" in a set. Imagine a model that is trained to
            discover 10 topics, but 9 of them are virtually identical. A naive
            metric might say the diversity is 10, but the Vendi Score would
            correctly identify that the effective number of unique topics is
            closer to 2. By directly optimizing for a higher Vendi Score, my
            approach provides an explicit incentive for the model to spread its
            "topic creation" across a diverse range of semantic spaces, rather
            than collapsing onto a few redundant ones.
          </p>
          <p>
            The Vendi Score is defined as the exponential of the Shannon entropy
            of the eigenvalues of a similarity matrix. Given a set of topics, we
            can define a similarity matrix{" "}
            <InlineMath math="K \in \mathbb{R}^{n \times n}" /> where{" "}
            <InlineMath math="n" /> is the number of topics, and each entry{" "}
            <InlineMath math="K_{ij}" /> measures the similarity between topic{" "}
            <InlineMath math="i" /> and topic <InlineMath math="j" />. In the
            context of this project, I am using{" "}
            <strong>cosine similarity</strong> as the similarity function. The
            Vendi Score is then calculated as:
          </p>

          <div className="flex justify-center my-8">
            <BlockMath math="\text{VendiScore}(K) = \exp \left( -\sum_{i=1}^{n} \lambda_i \log \lambda_i \right)" />
          </div>

          <p>
            where <InlineMath math="\lambda_i" /> are the eigenvalues of the
            normalized similarity matrix <InlineMath math="K" />. This metric
            provides a single number that can be interpreted as the effective
            number of unique topics.
          </p>
          <p>
            The standard training objective for a VAE-based topic model is to
            maximize the Evidence Lower Bound (ELBO), which is defined as:
          </p>

          <div className="flex justify-center my-8">
            <BlockMath math="\mathcal{L}_{\text{ELBO}} = \mathbb{E}_{q(\theta|x)}\left[\log p(x|\theta)\right] - D_{\text{KL}}(q(\theta|x) || p(\theta))" />
          </div>

          <p>
            While this objective is highly effective at ensuring a document can
            be accurately reconstructed from its topics (promoting coherence),
            none of its terms directly incentivize the model to learn a diverse
            set of topics. The KL divergence term, for example, only regularizes
            the latent distribution of document topic proportions, not the
            relationships between the topics themselves.
          </p>
          <p>
            By adding a term to the ELBO, I've created a new goal for the model:
            not just to accurately reconstruct documents, but also to generate a
            set of topics that are as diverse and distinct as possible. This
            approach provides an explicit, quantitative incentive for the model
            to avoid redundancy. My modified objective function is:
          </p>

          <div className="flex justify-center my-8">
            <BlockMath math="\mathcal{L}_{\text{New}} = \mathcal{L}_{\text{ELBO}} + \lambda \cdot \text{VendiScore}(\beta)" />
          </div>

          <p>
            Here, <InlineMath math="\beta" /> is the topic-vocabulary
            distribution matrix, and <InlineMath math="\lambda" /> is a
            hyperparameter to control the trade-off between the standard ELBO
            and the new diversity objective.
          </p>
        </div>
        <br />
        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Promising Results and Future Work
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            To test this hypothesis, I have benchmarked the performance of ETM,
            ProdLDA, DecTM, and TSCTM against their Vendi Score-augmented
            variants on the <strong>20 Newsgroups</strong> dataset, a smaller
            dataset of approximately 18,000 newsgroup posts. So far, the results
            are highly promising: the Vendi-enhanced topic models have
            maintained comparable topic coherence to the original models, and in
            some cases even achieved better coherence scores. Most importantly,
            topic diversity has improved consistently by around{" "}
            <strong>20%</strong> across all model variants, demonstrating that
            the Vendi Score successfully addresses the diversity challenge
            without sacrificing interpretability.
          </p>
          <p>
            Building on this initial success, my next step is to scale up the
            experiments to larger and more complex datasets:
          </p>
          <ul className="space-y-3 ml-6 mt-4">
            <li>
              <strong>WikiText-103:</strong> A medium-sized collection of over
              100 million words, providing a good intermediate test of
              scalability.
            </li>
            <li>
              <strong>New York Times (NYT):</strong> A massive dataset of over
              1.8 million articles, which will push the models to their limits
              and provide a robust evaluation of this new approach on a
              large-scale, real-world corpus.
            </li>
          </ul>
          <p>
            The goal is to demonstrate that the Vendi Score can serve as a
            universal, interpretable metric and a powerful training objective
            for a new generation of neural topic models.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrincetonResearcherContent;
