interface SubdomainConfig {
    file: string;
    title: string;
  }
  
  const subdomainConfig: { [key: string]: SubdomainConfig } = {
    'clfc02-aws': {
      file: '/clfc02-aws.txt',
      title: 'AWS Cloud Certified Practitioner Exam Training',
    },
    'vocab-c1-de': {
      file: '/vocab-c1-de.txt',
      title: 'Vokabel C1 Deutsch',
    },
    'www': {
      file: '/questions.txt',
      title: 'AWS Practitioner Certificate Training - CLF-C02',
    },
  };
  
  export default subdomainConfig;
  