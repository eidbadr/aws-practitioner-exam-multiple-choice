import React, { useState } from 'react';
import './App.css';

const App = () => {
  // 100 AWS Practitioner-style questions
  const questions = [
    {
      question: "Which service is used to host applications in the AWS Cloud without provisioning the underlying infrastructure?",
      options: ["EC2", "Lambda", "S3", "RDS"],
      correctAnswer: "Lambda",
    },
    {
      question: "What is the main benefit of the AWS Cloud?",
      options: ["Increased security", "Pay-as-you-go pricing", "Expensive upfront costs", "Long-term contracts"],
      correctAnswer: "Pay-as-you-go pricing",
    },
    {
      question: "Which AWS service is used for object storage?",
      options: ["S3", "DynamoDB", "Redshift", "CloudFront"],
      correctAnswer: "S3",
    },
    {
      question: "Which service provides a virtual server in the cloud?",
      options: ["S3", "IAM", "EC2", "CloudWatch"],
      correctAnswer: "EC2",
    },
    {
      question: "Which service is used for DNS management in AWS?",
      options: ["Route 53", "CloudFront", "VPC", "Lambda"],
      correctAnswer: "Route 53",
    },
    {
      question: "What does VPC stand for in AWS?",
      options: ["Virtual Private Connection", "Virtual Private Cloud", "Virtual Public Cloud", "Virtual Protected Cloud"],
      correctAnswer: "Virtual Private Cloud",
    },
    {
      question: "Which service is used to launch and manage a relational database?",
      options: ["EC2", "DynamoDB", "RDS", "S3"],
      correctAnswer: "RDS",
    },
    {
      question: "Which AWS service provides the fastest way to transfer large amounts of data to the cloud?",
      options: ["AWS Snowball", "AWS Direct Connect", "AWS VPN", "Amazon Kinesis"],
      correctAnswer: "AWS Snowball",
    },
    {
      question: "Which service allows you to run and manage Docker containers in AWS?",
      options: ["AWS Batch", "AWS Lambda", "Amazon ECS", "Amazon SNS"],
      correctAnswer: "Amazon ECS",
    },
    {
      question: "Which service can be used to monitor and collect log files in AWS?",
      options: ["CloudTrail", "CloudWatch", "S3", "SNS"],
      correctAnswer: "CloudWatch",
    },
    {
      question: "Which service is used to distribute content with low latency globally?",
      options: ["Route 53", "CloudFront", "Lambda", "RDS"],
      correctAnswer: "CloudFront",
    },
    {
      question: "Which AWS service helps you automatically scale applications based on demand?",
      options: ["EC2", "Auto Scaling", "RDS", "VPC"],
      correctAnswer: "Auto Scaling",
    },
    {
      question: "Which service is used for identity and access management in AWS?",
      options: ["IAM", "S3", "RDS", "CloudTrail"],
      correctAnswer: "IAM",
    },
    {
      question: "Which service allows you to run event-driven code in the cloud without provisioning or managing servers?",
      options: ["S3", "EC2", "Lambda", "CloudFront"],
      correctAnswer: "Lambda",
    },
    {
      question: "Which service is a fully managed NoSQL database service?",
      options: ["RDS", "DynamoDB", "EC2", "Redshift"],
      correctAnswer: "DynamoDB",
    },
    {
      question: "What does the 'S' in S3 stand for?",
      options: ["Standard", "Storage", "Secure", "Simple"],
      correctAnswer: "Simple",
    },
    {
      question: "Which service is used to cache frequently accessed data?",
      options: ["CloudFront", "RDS", "ElastiCache", "Lambda"],
      correctAnswer: "ElastiCache",
    },
    {
      question: "Which AWS service provides data warehousing solutions?",
      options: ["DynamoDB", "Redshift", "RDS", "ElastiCache"],
      correctAnswer: "Redshift",
    },
    {
      question: "Which service helps with compliance and governance by tracking user activity?",
      options: ["CloudWatch", "CloudTrail", "IAM", "S3"],
      correctAnswer: "CloudTrail",
    },
    {
      question: "Which service is used to automate the deployment of applications to Amazon EC2 instances?",
      options: ["CloudFormation", "CodeDeploy", "OpsWorks", "CloudTrail"],
      correctAnswer: "CodeDeploy",
    },
    {
      question: "Which AWS service is used to run serverless code in response to events?",
      options: ["EC2", "RDS", "Lambda", "CloudFront"],
      correctAnswer: "Lambda",
    },
    {
      question: "Which AWS service can be used to track and manage billing and usage?",
      options: ["CloudWatch", "CloudTrail", "AWS Cost Explorer", "RDS"],
      correctAnswer: "AWS Cost Explorer",
    },
    {
      question: "Which AWS service is used for scalable, managed file storage?",
      options: ["EBS", "S3", "EFS", "RDS"],
      correctAnswer: "EFS",
    },
    {
      question: "Which service is used to transfer large amounts of data between on-premises data centers and AWS?",
      options: ["Direct Connect", "CloudFront", "VPC", "RDS"],
      correctAnswer: "Direct Connect",
    },
    {
      question: "Which AWS service enables you to build applications that automatically adjust capacity to maintain performance?",
      options: ["EC2", "RDS", "Auto Scaling", "Route 53"],
      correctAnswer: "Auto Scaling",
    },
    {
      question: "Which AWS service is a managed distributed database that is highly scalable and fully managed?",
      options: ["RDS", "DynamoDB", "ElastiCache", "Redshift"],
      correctAnswer: "DynamoDB",
    },
    {
      question: "Which service is used to create private networks in the AWS Cloud?",
      options: ["EC2", "VPC", "S3", "Route 53"],
      correctAnswer: "VPC",
    },
    {
      question: "Which AWS service provides a secure way to manage encryption keys?",
      options: ["KMS", "IAM", "RDS", "S3"],
      correctAnswer: "KMS",
    },
    {
      question: "Which AWS service allows you to launch a virtual private server?",
      options: ["EC2", "RDS", "CloudFront", "IAM"],
      correctAnswer: "EC2",
    },
    {
      question: "Which service is used to run SQL queries on data stored in S3?",
      options: ["RDS", "Redshift", "Athena", "DynamoDB"],
      correctAnswer: "Athena",
    },
    {
      question: "Which service provides DNS resolution for domain names?",
      options: ["VPC", "Route 53", "S3", "CloudFront"],
      correctAnswer: "Route 53",
    },
    {
      question: "Which service can be used to manage the source code of applications?",
      options: ["CodeCommit", "CloudFormation", "EC2", "RDS"],
      correctAnswer: "CodeCommit",
    },
    {
      question: "Which AWS service is used to create and manage user permissions?",
      options: ["IAM", "RDS", "VPC", "EC2"],
      correctAnswer: "IAM",
    },
    {
      question: "Which service is used for serverless SQL analytics over data in S3?",
      options: ["Athena", "RDS", "Redshift", "DynamoDB"],
      correctAnswer: "Athena",
    },
    {
      question: "Which AWS service helps you save costs by automatically shutting down unused resources?",
      options: ["CloudFormation", "Auto Scaling", "CloudWatch", "Trusted Advisor"],
      correctAnswer: "Trusted Advisor",
    },
    {
      question: "Which AWS service is used to orchestrate a serverless workflow?",
      options: ["Step Functions", "Lambda", "S3", "CloudFront"],
      correctAnswer: "Step Functions",
    },
    {
      question: "Which service is used to send notifications from the cloud?",
      options: ["S3", "SNS", "EC2", "VPC"],
      correctAnswer: "SNS",
    },
    {
      question: "Which service is used to monitor application health and performance?",
      options: ["CloudWatch", "CloudTrail", "IAM", "RDS"],
      correctAnswer: "CloudWatch",
    },
    {
      question: "Which service helps protect applications from DDoS attacks?",
      options: ["Shield", "IAM", "RDS", "CloudWatch"],
      correctAnswer: "Shield",
    },
    {
      question: "Which AWS service helps customers understand their compliance posture?",
      options: ["CloudTrail", "Config", "IAM", "RDS"],
      correctAnswer: "Config",
    },
    {
      question: "Which service is used to automate the setup of services and infrastructure?",
      options: ["CloudFormation", "EC2", "RDS", "DynamoDB"],
      correctAnswer: "CloudFormation",
    },
    {
      question: "Which AWS service provides APIs to work with artificial intelligence and machine learning?",
      options: ["SageMaker", "Lambda", "RDS", "EC2"],
      correctAnswer: "SageMaker",
    },
    {
      question: "Which service allows you to connect your on-premises network to a VPC?",
      options: ["CloudFront", "VPC Peering", "Direct Connect", "Route 53"],
      correctAnswer: "Direct Connect",
    },
    {
      question: "Which service helps with the automatic failover of relational databases?",
      options: ["CloudTrail", "DynamoDB", "RDS", "EC2"],
      correctAnswer: "RDS",
    },
    {
      question: "Which service is used to run serverless SQL queries on large-scale data?",
      options: ["Athena", "RDS", "Redshift", "DynamoDB"],
      correctAnswer: "Athena",
    },
    {
      question: "Which AWS service allows you to set up a secure and dedicated network connection?",
      options: ["Direct Connect", "VPC", "RDS", "EC2"],
      correctAnswer: "Direct Connect",
    },
    {
      question: "Which AWS service provides managed databases in the cloud?",
      options: ["RDS", "DynamoDB", "S3", "CloudFront"],
      correctAnswer: "RDS",
    },
    {
      question: "Which service is used to deploy, monitor, and scale containerized applications?",
      options: ["ECS", "CloudFormation", "RDS", "EC2"],
      correctAnswer: "ECS",
    },
    {
      question: "Which AWS service is a managed service for real-time data processing?",
      options: ["Kinesis", "Lambda", "DynamoDB", "CloudWatch"],
      correctAnswer: "Kinesis",
    },
    {
      question: "Which AWS service is used to process large data sets quickly?",
      options: ["Redshift", "RDS", "DynamoDB", "EC2"],
      correctAnswer: "Redshift",
    },
    {
      question: "Which service helps you build scalable web applications quickly?",
      options: ["Elastic Beanstalk", "RDS", "EC2", "Lambda"],
      correctAnswer: "Elastic Beanstalk",
    },
    {
      question: "Which service is used for decoupling applications in AWS?",
      options: ["SNS", "S3", "RDS", "VPC"],
      correctAnswer: "SNS",
    },
    {
      question: "Which AWS service is used to automatically run and scale containerized applications?",
      options: ["ECS", "Lambda", "S3", "RDS"],
      correctAnswer: "ECS",
    },
    {
      question: "Which service is used to distribute incoming application traffic across multiple targets?",
      options: ["Auto Scaling", "RDS", "Elastic Load Balancer", "CloudFormation"],
      correctAnswer: "Elastic Load Balancer",
    },
    {
      question: "Which service provides managed file storage for EC2 instances?",
      options: ["EBS", "S3", "EFS", "RDS"],
      correctAnswer: "EFS",
    },
    {
      question: "Which AWS service enables you to visually create, manage, and run automated tests on your applications?",
      options: ["Device Farm", "CloudFormation", "Lambda", "SNS"],
      correctAnswer: "Device Farm",
    },
    {
      question: "Which service is used to create alerts based on monitoring metrics?",
      options: ["CloudWatch Alarms", "CloudTrail", "IAM", "S3"],
      correctAnswer: "CloudWatch Alarms",
    },
    {
      question: "Which AWS service provides a fully managed message queue?",
      options: ["SQS", "SNS", "Lambda", "RDS"],
      correctAnswer: "SQS",
    },
    {
      question: "Which AWS service is used for analytics and real-time insights on operational data?",
      options: ["CloudWatch", "CloudTrail", "X-Ray", "S3"],
      correctAnswer: "CloudWatch",
    },
    {
      question: "Which AWS service is used to store and retrieve secrets, such as API keys and passwords?",
      options: ["Secrets Manager", "IAM", "RDS", "S3"],
      correctAnswer: "Secrets Manager",
    },
    {
      question: "Which service allows you to automate operational tasks for Amazon RDS?",
      options: ["RDS Performance Insights", "Lambda", "RDS Proxy", "RDS Maintenance Window"],
      correctAnswer: "RDS Maintenance Window",
    },
    {
      question: "Which AWS service helps you manage multiple AWS accounts centrally?",
      options: ["AWS Organizations", "IAM", "RDS", "S3"],
      correctAnswer: "AWS Organizations",
    },
    {
      question: "Which service is used to run serverless applications without provisioning any infrastructure?",
      options: ["Lambda", "EC2", "S3", "RDS"],
      correctAnswer: "Lambda",
    },
    {
      question: "Which service can be used to manage and deploy machine learning models?",
      options: ["SageMaker", "Lambda", "RDS", "EC2"],
      correctAnswer: "SageMaker",
    },
    {
      question: "Which service helps ensure that AWS resources comply with policies you define?",
      options: ["CloudFormation", "CloudWatch", "Config", "IAM"],
      correctAnswer: "Config",
    },
    {
      question: "Which service is used to automate the deployment of containerized applications?",
      options: ["ECS", "RDS", "Elastic Beanstalk", "Lambda"],
      correctAnswer: "Elastic Beanstalk",
    },
    {
      question: "Which AWS service helps protect web applications from common web exploits?",
      options: ["WAF", "RDS", "EC2", "Shield"],
      correctAnswer: "WAF",
    },
    {
      question: "Which service is used to create and manage a collection of related AWS resources?",
      options: ["CloudFormation", "RDS", "DynamoDB", "VPC"],
      correctAnswer: "CloudFormation",
    },
    {
      question: "Which service allows you to launch a relational database in the cloud?",
      options: ["RDS", "S3", "DynamoDB", "Lambda"],
      correctAnswer: "RDS",
    },
    {
      question: "Which AWS service helps with the secure exchange of data between applications?",
      options: ["SQS", "SNS", "RDS", "EC2"],
      correctAnswer: "SQS",
    },
    {
      question: "Which AWS service is used to deploy and manage web applications easily?",
      options: ["Elastic Beanstalk", "RDS", "EC2", "Lambda"],
      correctAnswer: "Elastic Beanstalk",
    },
    {
      question: "Which service is used to manage Docker containers in the AWS Cloud?",
      options: ["ECS", "RDS", "Lambda", "S3"],
      correctAnswer: "ECS",
    },
    {
      question: "Which service can be used to create a virtual private cloud within AWS?",
      options: ["VPC", "EC2", "RDS", "S3"],
      correctAnswer: "VPC",
    },
    {
      question: "Which service helps you protect your web applications from common exploits?",
      options: ["WAF", "RDS", "EC2", "S3"],
      correctAnswer: "WAF",
    },
    {
      question: "Which AWS service helps you analyze data stored in S3 using SQL?",
      options: ["Athena", "RDS", "Redshift", "DynamoDB"],
      correctAnswer: "Athena",
    },
    {
      question: "Which service is used to create isolated sections of the AWS Cloud?",
      options: ["VPC", "RDS", "S3", "IAM"],
      correctAnswer: "VPC",
    },
    {
      question: "Which service is used to perform data processing in real time?",
      options: ["Kinesis", "RDS", "Redshift", "DynamoDB"],
      correctAnswer: "Kinesis",
    },
    {
      question: "Which AWS service can help with managing hybrid cloud architectures?",
      options: ["Direct Connect", "VPC", "RDS", "Lambda"],
      correctAnswer: "Direct Connect",
    },
    {
      question: "Which service allows you to integrate machine learning models into applications?",
      options: ["SageMaker", "Lambda", "RDS", "EC2"],
      correctAnswer: "SageMaker",
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
    }
  };

  const getOptionClass = (option) => {
    if (!isAnswered) return "";
    if (option === questions[currentQuestion].correctAnswer) return "correct";
    if (option === selectedOption) return "wrong";
    return "";
  };

  const handleNextClick = () => {
    setSelectedOption("");
    setIsAnswered(false);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="app">
      <div className="question-container">
        <h2>{questions[currentQuestion].question}</h2>
        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (
            <div
              key={index}
              className={`option ${getOptionClass(option)}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
        {isAnswered && (
          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
