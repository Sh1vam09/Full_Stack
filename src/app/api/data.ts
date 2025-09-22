// This is your in-memory data store. In a real application, 
// you would replace this with a database connection.
const projects = [
  { 
    id: '1', 
    title: 'Email Spam Classifier', 
    description: 'This is a cool project that check spam emails.', 
    coverImage: 'https://picsum.photos/id/1/600/360',
    githubLink: 'https://github.com/Sh1vam09/Machine-Learning-Projects/tree/main/Email_Spam_Classifier',
    demoLink: 'https://youtu.be/nLhJUwKVRig?si=G_UHXrxd8_JVHMp3' // Example YouTube link
  },
  { 
    id: '2', 
    title: 'Credit card Fraud', 
    description: 'To detect fraud in cc transactions.', 
    coverImage: 'https://picsum.photos/id/2/600/360',
    githubLink: 'https://github.com/Sh1vam09/Machine-Learning-Projects/tree/main/Credit_Card_Fraud_Detection',
    demoLink: 'https://youtu.be/xFYQQPAOz7Y?si=_Y_efzvh1bgPADeV'
  },
  { 
    id: '3', 
    title: 'Project Three', 
    description: 'The third project in the showcase of my work.', 
    coverImage: 'https://picsum.photos/id/3/600/360',
    githubLink: 'https://github.com/sh1vam09',
    demoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
];

export default projects;