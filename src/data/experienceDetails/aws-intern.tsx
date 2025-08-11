import React from "react";
import ContentImage from "../../components/ContentImage";

const AWSInternContent: React.FC = () => {
  return (
    <div className="space-y-8 mt-8">
      <div className="prose prose-gray max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Engineering Large-Scale Data Infrastructure at AWS
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Working at Amazon Web Services as a Software Development Engineer
          Intern has been a transformative experience. My project was focused on
          a critical piece of the AWS Marketplace—a system that ensures the
          integrity and reliability of millions of transactions. To put it
          simply, imagine the AWS Marketplace as an eBay for cloud services, and
          the agreements as the contracts for every software subscription. My
          job was to build a system to audit these agreements, a task that
          required tackling a huge amount of data.
        </p>
        <br />

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Project Overview: The ALP Auditor System
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The core of my work was engineering the{" "}
            <strong>Agreement Lifecycle Plan (ALP) Auditor system</strong>. This
            project involved creating a comprehensive serverless solution
            designed to validate over <strong>8 million agreements</strong> in
            the AWS Marketplace domain. We needed a system that could handle
            this massive scale without breaking the bank or slowing down.
          </p>
          <p>
            To achieve this, I leveraged a sophisticated serverless
            architecture. <strong>AWS Step Functions</strong> acted as the
            conductor, orchestrating complex audit workflows. For the heavy
            lifting of processing, I used <strong>AWS Lambda</strong>, which
            provides scalable, on-demand compute power.{" "}
            <strong>AWS Glue ETL</strong> and <strong>Amazon S3</strong> handled
            the data pipelines and storage, forming a reliable and
            cost-effective foundation.
          </p>
          <ContentImage
            src="/images/experiences/aws/AWS1.png"
            alt="ALP Auditor Architecture Diagram"
            caption=""
          />
        </div>
        <br />

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Modern Development Practices: Infrastructure as Code
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            As a developer, there's nothing worse than "it works on my machine"
            issues. That's why building with{" "}
            <strong>Infrastructure as Code (IaC)</strong> was so crucial. I used{" "}
            <strong>AWS CDK</strong> to write code that provisions the entire
            audit infrastructure. This meant that our development, staging, and
            production environments were always perfectly consistent.
          </p>
          <p>
            I also implemented <strong>automated CI/CD pipelines</strong>,
            allowing our team to deploy updates seamlessly and rapidly, while
            still adhering to the strict compliance and security standards
            required at AWS.
          </p>
        </div>
        <br />

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Optimizing Big Data Pipelines & Reducing Production Reads
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The biggest technical challenge was processing the sheer volume of
            data efficiently and cost-effectively. Initially, auditing all 8
            million agreements would have been slow and expensive, especially
            since the data was stored in a massive DynamoDB table. Making
            millions of queries to this table for every audit would have
            incurred significant read costs.
          </p>
          <p>
            My solution was to completely circumvent the DynamoDB reads,{" "}
            <strong>reducing production read usage to zero</strong>. I leveraged
            the table's automatic <strong>Point-in-Time Recovery (PITR)</strong>{" "}
            feature, which exports data to an Amazon S3 bucket every three
            hours. Instead of querying the live database, my system now reads
            from and parses the multiple JSON export files directly from S3.
          </p>
          <p>
            This approach of parsing multiple files proved far more efficient
            than making millions of individual queries to the DynamoDB table.
            Within the ETL job, I further leveraged{" "}
            <strong>PySpark RDD parallel processing</strong> to distribute the
            workload, reducing the data processing time from{" "}
            <strong>30 minutes to under 7 minutes</strong>.
          </p>
          <ContentImage
            src="/images/experiences/aws/AWS2.png"
            alt="Prod Read"
            caption=""
          />
        </div>
        <br />

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Mitigating API Rate Limits with a Temporal Audit Approach
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            For each active agreement, the audit process requires calling APIs
            for a separate configuration system known as "Loopy." The Loopy
            system is responsible for managing the state of each agreement and
            executing lifecycle actions like termination or auto-subscription.
            The problem was that the Loopy APIs have a strict rate limit of{" "}
            <strong>100 transactions per second</strong>.
          </p>
          <p>
            Auditing over 4 million agreements would have required more than 11
            hours, which was unacceptable given our three-hour audit cycle. To
            solve this, I designed a{" "}
            <strong>temporal approach based on "deltas."</strong> By analyzing
            the S3 export, my system now identifies and processes only the
            active agreements that have been modified within the last three
            hours.
          </p>
          <p>
            This reduced the audit scope from over{" "}
            <strong>
              4 million active agreements down to a manageable 100-500
              agreements per run
            </strong>
            . As a result, the entire audit process, including the calls to the
            Loopy APIs, now takes <strong>less than 10 seconds</strong>. This
            simple but powerful insight, combined with the S3-based approach,
            allowed me to achieve an astonishing{" "}
            <strong>99.99% improvement in processing efficiency</strong> and
            dramatically reduced our compute costs and processing time, proving
            that working smarter is just as important as working harder.
          </p>
        </div>
        <br />

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Automated Discrepancy Detection & Incident Management
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Finally, I built an{" "}
            <strong>automated discrepancy detection pipeline</strong> that acts
            as a guardian for the marketplace. The system proactively identifies
            any data inconsistencies and, most importantly, integrates with{" "}
            <strong>Service Incident Management (SIM)</strong>.
          </p>
          <p>
            This means that if something goes wrong, the system automatically
            escalates the issue with all the necessary details, ensuring our
            on-call team can respond instantly. This internship has been a crash
            course in operational excellence and distributed systems. The
            systems I've built are not theoretical—they're in production,
            directly impacting millions of agreements and thousands of
            customers.
          </p>
        </div>
        <br />

        <h3 className="text-2xl font-semibold text-gray-900 mt-12 mb-3">
          Key Technologies & Skills Developed
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <ul className="space-y-3 ml-6 mt-4">
            <li>
              <strong>AWS Services:</strong> Step Functions, Lambda, Glue ETL,
              S3, CDK
            </li>
            <li>
              <strong>Big Data:</strong> PySpark RDD, data optimization
            </li>
            <li>
              <strong>DevOps:</strong> Infrastructure as Code (IaC), CI/CD
              pipelines
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AWSInternContent;
