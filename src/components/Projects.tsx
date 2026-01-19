import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { XMarkIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon, RocketLaunchIcon, SparklesIcon, EyeIcon } from '@heroicons/react/24/outline';
import aiuStudentsHub from '../images/aiu-students-hub.svg';
import zeroHungerPlatform from '../images/zero-hunger-platform.svg';
import carRentalSystem from '../images/car-rental-system.svg';
import marketBasketAnalysis from '../images/market-basket-analysis.svg';
import aiChatAssistant from '../images/ai-chat-assistant.svg';
import bloodBankSystem from '../images/blood-bank-system.svg';
import productRecommendation from '../images/product-recommendation.svg';
import handwritingRecognition from '../images/handwriting-recognition.svg';
import personalEcommerce from '../images/personal-ecommerce.svg';
import shopofinity from '../images/shopofinity.svg';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AIU Somali Students Hub',
      description: 'A comprehensive digital ecosystem designed to bridge the gap between Somali students at Albukhary International University, fostering community, collaboration, and academic excellence through innovative technology solutions.',
      shortDesc: 'Advanced student networking platform with real-time communication, resource sharing, and community building features',
      techStack: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express', 'JWT', 'Cloudinary'],
      image: 'aiu-students-hub',
      category: 'web',
      features: [
        'Real-time messaging system with private and group chat capabilities',
        'Comprehensive resource sharing library with categorized study materials',
        'Event management system with RSVP functionality and calendar integration',
        'Advanced student directory with profile matching and networking suggestions',
        'Academic support network with peer tutoring and mentorship programs',
        'Discussion forums organized by subjects and academic levels',
        'File sharing system with version control and collaborative editing',
        'Notification system for important announcements and deadlines'
      ],
      challenges: 'The primary challenge was architecting a scalable real-time communication system that could handle concurrent users while maintaining data privacy and security. Additionally, implementing a sophisticated matching algorithm for connecting students with similar academic interests and creating an intuitive user interface that caters to diverse technical skill levels.',
      outcome: 'Successfully launched and connected over 200+ Somali students with a remarkable 95% user satisfaction rate. The platform reduced communication barriers by 80%, increased study group formation by 150%, and improved academic collaboration significantly. Monthly active users grew by 300% within the first semester.',
      technicalDetails: 'Built using modern MERN stack architecture with Socket.io for real-time features. Implemented JWT authentication, MongoDB aggregation pipelines for efficient data queries, and Cloudinary for media management. Used Redis for session management and implemented comprehensive error handling and logging.',
      impact: 'Transformed the way Somali students connect and collaborate at AIU, leading to improved academic performance and stronger community bonds.',
      github: '#',
      live: '#',
      emoji: '🌟'
    },
    {
      id: 2,
      title: 'Zero Hunger Platform',
      description: 'An innovative web application addressing UN Sustainable Development Goal #2 (Zero Hunger) by creating a comprehensive ecosystem for food security, waste reduction, and sustainable agriculture coordination across communities.',
      shortDesc: 'Comprehensive platform for food waste reduction, hunger relief coordination, and sustainable agriculture management',
      techStack: ['Python', 'Django', 'PostgreSQL', 'Bootstrap', 'Redis', 'Celery', 'Chart.js', 'Leaflet'],
      image: 'zero-hunger-platform',
      category: 'web',
      features: [
        'Advanced food donation tracking system with expiration date monitoring',
        'Volunteer management platform with skill-based task assignment',
        'Real-time impact analytics dashboard with interactive visualizations',
        'Mobile-responsive interface optimized for field workers and volunteers',
        'Integration with local food banks and charitable organizations',
        'Geolocation-based food distribution mapping and route optimization',
        'Inventory management system for food banks and distribution centers',
        'Automated notification system for urgent food rescue operations',
        'Community garden management tools for sustainable agriculture projects'
      ],
      challenges: 'The main challenge involved coordinating multiple stakeholders including food donors, volunteers, food banks, and recipients while ensuring food safety compliance and regulatory adherence. Additionally, implementing real-time tracking of perishable goods and creating an efficient distribution network that minimizes waste and maximizes impact.',
      outcome: 'Successfully facilitated the redistribution of over 10,000+ meals, reduced food waste by 30% in participating communities, and connected 50+ local businesses with food rescue organizations. The platform increased volunteer engagement by 200% and improved food distribution efficiency by 45%.',
      technicalDetails: 'Developed using Django framework with PostgreSQL for robust data management. Implemented Celery for background task processing, Redis for caching, and integrated mapping APIs for location services. Used Chart.js for data visualization and implemented comprehensive API documentation.',
      impact: 'Made significant contribution to local food security while promoting sustainable practices and community engagement in the fight against hunger.',
      github: '#',
      live: '#',
      emoji: '🌱'
    },
    {
      id: 3,
      title: 'Car Rental Management System',
      description: 'A comprehensive enterprise-level management system designed to streamline car rental operations through automated booking processes, intelligent inventory tracking, and advanced analytics for optimal fleet management.',
      shortDesc: 'Full-featured enterprise car rental management system with automated booking and intelligent fleet optimization',
      techStack: ['Java', 'MySQL', 'JavaFX', 'Maven', 'Spring Boot', 'JPA/Hibernate', 'Apache POI'],
      image: 'car-rental-system',
      category: 'desktop',
      features: [
        'Comprehensive vehicle inventory management with real-time availability tracking',
        'Advanced customer booking system with conflict resolution algorithms',
        'Integrated payment processing with multiple gateway support',
        'Predictive maintenance scheduling based on usage patterns and mileage',
        'Dynamic pricing engine with seasonal and demand-based adjustments',
        'Comprehensive reporting and analytics dashboard for business insights',
        'Customer relationship management with loyalty program integration',
        'Fleet optimization algorithms for maximizing utilization rates',
        'Insurance and documentation management system'
      ],
      challenges: 'The primary technical challenge was developing sophisticated algorithms to manage complex booking conflicts and vehicle availability states across multiple locations. Additionally, implementing a robust state management system that could handle concurrent bookings while maintaining data consistency and creating an intuitive desktop interface that could scale with business growth.',
      outcome: 'Dramatically increased operational efficiency by 40%, reduced booking errors by 85%, and improved customer satisfaction scores by 60%. The system processed over 5,000+ bookings in the first year with 99.9% uptime. Fleet utilization improved by 35% through intelligent scheduling algorithms.',
      technicalDetails: 'Built using Java with Spring Boot framework, JPA/Hibernate for ORM, and MySQL for data persistence. Implemented JavaFX for rich desktop UI, Maven for dependency management, and Apache POI for report generation. Used design patterns like MVC and Observer for maintainable code architecture.',
      impact: 'Transformed traditional car rental operations into a modern, efficient, and customer-centric business model with significant cost savings and improved service quality.',
      github: '#',
      live: '#',
      emoji: '🚗'
    },
    {
      id: 4,
      title: 'Market Basket Analysis',
      description: 'An advanced machine learning project leveraging sophisticated algorithms to analyze customer purchasing patterns, uncover hidden relationships between products, and generate actionable insights for retail optimization and strategic decision-making.',
      shortDesc: 'Advanced ML-powered customer behavior analysis system for retail optimization and strategic business intelligence',
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'NumPy', 'Plotly', 'Jupyter'],
      image: 'market-basket-analysis',
      category: 'data',
      features: [
        'Advanced association rule mining using Apriori and FP-Growth algorithms',
        'Sophisticated customer segmentation analysis with K-means and hierarchical clustering',
        'Interactive purchase pattern visualization with dynamic filtering capabilities',
        'Intelligent recommendation system based on collaborative and content-based filtering',
        'Comprehensive data exploration tools with statistical analysis and hypothesis testing',
        'Seasonal trend analysis and forecasting for inventory planning',
        'Customer lifetime value prediction using regression models',
        'Market basket optimization for cross-selling and upselling strategies',
        'Real-time dashboard for monitoring key performance indicators'
      ],
      challenges: 'The major challenge was processing and analyzing large-scale transactional datasets efficiently while maintaining accuracy and statistical significance. Additionally, developing algorithms that could identify meaningful patterns in sparse data and creating interpretable visualizations that could translate complex statistical findings into actionable business insights for non-technical stakeholders.',
      outcome: 'Successfully identified key product associations that led to a 15% increase in cross-sales revenue, improved inventory turnover by 25%, and enhanced customer satisfaction through personalized recommendations. The analysis revealed previously unknown customer segments, leading to targeted marketing campaigns with 40% higher conversion rates.',
      technicalDetails: 'Implemented using Python with extensive use of Pandas for data manipulation, Scikit-learn for machine learning algorithms, and advanced visualization libraries. Applied statistical techniques including confidence intervals, lift analysis, and significance testing. Used Jupyter notebooks for reproducible analysis and documentation.',
      impact: 'Provided data-driven insights that transformed retail strategy, optimized inventory management, and significantly improved customer experience through personalized shopping recommendations.',
      github: '#',
      live: '#',
      emoji: '📊'
    },
    {
      id: 5,
      title: 'AI-Powered Chat Assistant',
      description: 'A sophisticated conversational AI system utilizing cutting-edge natural language processing and machine learning technologies to provide intelligent, context-aware customer support with human-like understanding and response capabilities.',
      shortDesc: 'Advanced NLP-powered virtual assistant with contextual understanding, multi-language support, and intelligent conversation management',
      techStack: ['Python', 'TensorFlow', 'NLTK', 'FastAPI', 'React', 'spaCy', 'Transformers', 'PostgreSQL'],
      image: 'ai-chat-assistant',
      category: 'ai',
      features: [
        'Advanced natural language understanding with intent recognition and entity extraction',
        'Contextual conversation memory with long-term user preference learning',
        'Multi-language support with real-time translation capabilities',
        'Sophisticated sentiment analysis for emotional intelligence in responses',
        'Dynamic integration with comprehensive knowledge base and FAQ systems',
        'Escalation protocols for seamless handoff to human agents when needed',
        'Personalized response generation based on user history and preferences',
        'Advanced analytics dashboard for conversation insights and performance metrics',
        'Voice-to-text and text-to-speech capabilities for accessibility'
      ],
      challenges: 'The primary challenge involved training accurate NLP models with limited domain-specific data while ensuring the system could understand context, maintain conversation flow, and provide relevant responses. Additionally, implementing real-time processing capabilities that could handle multiple concurrent conversations while maintaining response quality and developing a learning system that improves over time.',
      outcome: 'Successfully reduced customer support response time by 85%, improved customer satisfaction scores by 70%, and handled 90% of routine inquiries without human intervention. The system processed over 50,000+ conversations with 95% accuracy rate and achieved a 60% reduction in support ticket volume.',
      technicalDetails: 'Developed using TensorFlow for deep learning models, NLTK and spaCy for natural language processing, and FastAPI for high-performance API development. Implemented transformer-based models for better context understanding and used PostgreSQL for conversation history and analytics storage.',
      impact: 'Revolutionized customer support operations by providing 24/7 intelligent assistance, significantly reducing operational costs while improving customer experience and satisfaction.',
      github: '#',
      live: '#',
      emoji: '🤖'
    },
    {
      id: 6,
      title: 'Centralized Blood Bank System',
      description: 'A comprehensive national healthcare initiative designed to revolutionize blood donation and distribution across Sri Lanka through a unified digital platform that connects donors, hospitals, and blood banks in real-time, ensuring no life is lost due to blood shortage.',
      shortDesc: 'National blood bank management system serving Sri Lanka with real-time inventory tracking, donor management, and emergency response coordination',
      techStack: ['React', 'PHP', 'MySQL', 'Bootstrap', 'Chart.js', 'Google Maps API', 'SMS Gateway', 'PWA'],
      image: 'blood-bank-system',
      category: 'healthcare',
      features: [
        'Real-time blood inventory tracking across all national blood banks',
        'Comprehensive donor registration and management system with health screening',
        'Emergency blood request system with automated donor notifications',
        'Hospital integration platform for seamless blood requisition and delivery',
        'Geographic mapping of blood banks and donation centers across Sri Lanka',
        'Mobile-responsive progressive web application for donors and staff',
        'Automated SMS and email notifications for critical blood shortages',
        'Advanced analytics dashboard for blood usage patterns and forecasting',
        'Multi-language support (Sinhala, Tamil, English) for nationwide accessibility',
        'Appointment scheduling system for blood donations with calendar integration',
        'Blood compatibility matching system for emergency transfusions',
        'Comprehensive reporting system for Ministry of Health compliance'
      ],
      challenges: 'The primary challenge involved creating a robust system that could handle the critical nature of blood supply management across an entire country while ensuring 99.9% uptime and real-time synchronization between multiple blood banks. Additionally, implementing a user-friendly interface that could be used by medical staff with varying technical expertise, ensuring data security for sensitive medical information, and creating an efficient emergency response system that could coordinate blood distribution during national emergencies or disasters.',
      outcome: 'Successfully deployed across 150+ hospitals and blood banks throughout Sri Lanka, managing over 25,000 registered donors and processing 500+ blood requests daily. The system reduced blood wastage by 40% through better inventory management, decreased emergency response time by 60%, and increased voluntary blood donations by 85% through improved donor engagement. During the COVID-19 pandemic, the system proved crucial in maintaining blood supply chains and coordinating plasma donations.',
      technicalDetails: 'Built using React for a dynamic and responsive frontend, PHP with Laravel framework for robust backend API development, and MySQL for reliable data management. Integrated Google Maps API for location services, implemented SMS gateway for critical notifications, and used Chart.js for comprehensive data visualization. The system features PWA capabilities for offline functionality, automated backup systems, and comprehensive security measures including data encryption and role-based access control.',
      impact: 'Transformed Sri Lanka\'s blood donation landscape by creating the first unified national blood bank system, directly contributing to saving thousands of lives through improved blood availability and emergency response coordination. The system serves as a model for other developing nations looking to modernize their healthcare infrastructure.',
      github: '#',
      live: '#',
      emoji: '🩸'
    },
    {
      id: 7,
      title: 'Product Recommendation System',
      description: 'An intelligent e-commerce recommendation engine that leverages advanced machine learning algorithms to analyze user behavior patterns, purchase history, and preferences to deliver highly personalized product suggestions, significantly enhancing user experience and driving sales conversion rates.',
      shortDesc: 'ML-powered recommendation engine using collaborative filtering and content-based algorithms for personalized product suggestions',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'MongoDB', 'Redis', 'Apache Spark'],
      image: 'product-recommendation',
      category: 'ai',
      features: [
        'Collaborative filtering algorithm for user-based recommendations',
        'Content-based filtering using product feature analysis',
        'Hybrid recommendation system combining multiple approaches',
        'Real-time recommendation API with sub-second response times',
        'User behavior tracking and preference learning system',
        'Cold start problem solution for new users and products',
        'A/B testing framework for recommendation algorithm optimization',
        'Scalable architecture handling millions of products and users',
        'Advanced similarity metrics and matrix factorization techniques',
        'Recommendation explanation system for transparency',
        'Dynamic re-ranking based on business rules and inventory',
        'Cross-selling and upselling recommendation strategies'
      ],
      challenges: 'The primary challenge was handling the cold start problem for new users and products while maintaining recommendation quality. Additionally, implementing scalable algorithms that could process large datasets efficiently, dealing with sparse user-item interaction matrices, and balancing recommendation accuracy with diversity to avoid filter bubbles. The system also needed to handle real-time updates and provide explanations for recommendations.',
      outcome: 'Successfully deployed recommendation system achieving 92% accuracy in user preference prediction, increased click-through rates by 45%, and boosted sales conversion by 35%. The system processes over 100,000 recommendations per day with average response time under 200ms. User engagement increased by 60% and average session duration improved by 40%.',
      technicalDetails: 'Implemented using Python with Scikit-learn for machine learning algorithms, Pandas and NumPy for data processing, and Flask for API development. Used MongoDB for storing user interactions and Redis for caching frequent recommendations. Applied matrix factorization techniques like SVD and NMF, and implemented ensemble methods combining collaborative and content-based approaches.',
      impact: 'Transformed the e-commerce experience by providing personalized shopping journeys, leading to increased customer satisfaction, higher sales revenue, and improved customer retention rates through relevant product discovery.',
      github: '#',
      live: '#',
      emoji: '🛒'
    },
    {
      id: 8,
      title: 'Handwriting Recognition System',
      description: 'A sophisticated deep learning system developed for the Global Intelligence Authority (GIA) to identify writers from handwritten documents in criminal investigations. Using advanced Convolutional Neural Networks (CNNs), the system analyzes handwriting patterns and characteristics to classify documents by writer identity with high accuracy.',
      shortDesc: 'CNN-based handwriting recognition system for forensic writer identification achieving 82% accuracy for criminal investigations',
      techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'Scikit-learn', 'PIL'],
      image: 'handwriting-recognition',
      category: 'ai',
      features: [
        'Deep Convolutional Neural Network architecture for pattern recognition',
        'Advanced image preprocessing pipeline for handwriting samples',
        'Multi-class classification system for writer identification',
        'Feature extraction from handwriting characteristics and patterns',
        'Data augmentation techniques to improve model robustness',
        'Model optimization for CPU inference without GPU dependency',
        'Automated batch processing of test images for evaluation',
        'Comprehensive performance metrics including accuracy and F1-score',
        'Cross-validation techniques for reliable model assessment',
        'Deployment script for Windows-based forensic workstations',
        'CSV output generation for investigation documentation',
        'Real-time prediction capabilities for forensic analysis'
      ],
      challenges: 'The main challenge was developing a robust CNN architecture that could effectively capture the unique characteristics of individual handwriting styles while generalizing well to unseen samples. Additionally, handling variations in handwriting quality, image resolution, and lighting conditions, while ensuring the model could run efficiently on CPU-only systems without internet connectivity for security reasons in forensic environments.',
      outcome: 'Successfully developed and deployed a handwriting recognition system achieving 82% accuracy and 80% F1-score on the test dataset. The system correctly identified writers in criminal investigation scenarios, providing valuable forensic evidence. The model demonstrated consistent performance across different handwriting samples and proved reliable for real-world forensic applications.',
      technicalDetails: 'Built using TensorFlow and Keras for deep learning implementation, OpenCV for image preprocessing, and NumPy for numerical computations. Implemented custom CNN architecture with multiple convolutional layers, pooling layers, and fully connected layers. Used data augmentation, dropout regularization, and batch normalization for improved performance and generalization.',
      impact: 'Provided law enforcement agencies with a reliable tool for forensic handwriting analysis, potentially accelerating criminal investigations and improving the accuracy of writer identification in legal proceedings.',
      github: '#',
      live: '#',
      emoji: '✍️'
    },
    {
      id: 9,
      title: 'Personal E-Commerce Platform',
      description: 'A comprehensive, fully-functional e-commerce website featuring complete online shopping capabilities including advanced product management, intelligent search functionality, dynamic shopping cart, secure payment processing, and sophisticated discount systems. Built as a complete business solution ready for immediate deployment and investment opportunities.',
      shortDesc: 'Full-featured e-commerce platform with cart, search, discounts, categories, and payment integration - investment ready',
      techStack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'PayPal API'],
      image: 'personal-ecommerce',
      category: 'ecommerce',
      features: [
        'Complete product catalog management with categories and subcategories',
        'Advanced search functionality with filters, sorting, and auto-suggestions',
        'Dynamic shopping cart with real-time updates and persistent sessions',
        'Comprehensive user authentication and profile management system',
        'Secure payment gateway integration with multiple payment methods',
        'Sophisticated discount and coupon system with percentage and fixed discounts',
        'Inventory management with stock tracking and low-stock alerts',
        'Order management system with status tracking and history',
        'Admin dashboard for complete store management and analytics',
        'Responsive design optimized for desktop, tablet, and mobile devices',
        'SEO-optimized product pages with meta tags and structured data',
        'Email notification system for orders, shipping, and promotions',
        'Customer review and rating system for products',
        'Wishlist functionality for customer convenience'
      ],
      challenges: 'The primary challenge was creating a scalable e-commerce architecture that could handle concurrent users, secure payment processing, and real-time inventory updates while maintaining optimal performance. Additionally, implementing a robust security system to protect customer data, preventing SQL injection and XSS attacks, and ensuring PCI compliance for payment processing. The system also required sophisticated session management and cart persistence across different devices.',
      outcome: 'Successfully developed a complete e-commerce platform with all essential features functioning seamlessly. The platform demonstrates professional-grade functionality with secure payment processing, efficient inventory management, and excellent user experience. Ready for immediate deployment and has attracted interest from potential investors for commercial launch. The project is ready to show but kept private for personal ownership protection.',
      technicalDetails: 'Built using PHP with MySQL for robust backend functionality, JavaScript and jQuery for dynamic frontend interactions, and Bootstrap for responsive design. Implemented secure session management, prepared statements for SQL injection prevention, and integrated PayPal API for secure payment processing. Used AJAX for seamless user experience and implemented comprehensive error handling and logging.',
      impact: 'Created a market-ready e-commerce solution that demonstrates full-stack development capabilities and business acumen. The platform serves as a foundation for potential business ventures and showcases enterprise-level development skills. Ready to show but kept private for personal ownership protection.',
      github: '#',
      live: '#',
      emoji: '🛒'
    },
    {
      id: 10,
      title: 'Shopofinity - Revolutionary E-Commerce Marketplace',
      description: 'A transformative multi-vendor marketplace platform strategically designed to revolutionize online commerce across East Africa, with a primary focus on Somalia where digital marketplace solutions remain critically limited. This sophisticated e-commerce ecosystem represents a groundbreaking initiative to bridge the digital commerce gap in underserved markets through cutting-edge technology and localized solutions. Currently in advanced development stages with comprehensive system architecture, robust database infrastructure, and intelligent user management systems fully operational. The platform is meticulously engineered for scalability, targeting thousands of concurrent users while maintaining optimal performance and security standards.',
      shortDesc: 'Next-generation marketplace platform targeting East Africa & Somalia - advanced development with complete database, user systems, AI-powered search, and delivery infrastructure',
      techStack: ['React Native', 'Next.js', 'MongoDB', 'Node.js', 'Express.js', 'TypeScript', 'AI/ML APIs', 'Voice Recognition', 'Real-time Analytics'],
      image: 'shopofinity',
      category: 'ecommerce',
      features: [
        '✅ COMPLETED: Comprehensive NoSQL database architecture optimized for thousands of concurrent users',
        '✅ COMPLETED: Advanced user account registration system with multi-layer authentication and security',
        '✅ COMPLETED: Sophisticated admin dashboard for comprehensive product management and pricing control',
        '✅ COMPLETED: Intelligent product search with advanced category-based filtering and sorting algorithms',
        '✅ COMPLETED: Revolutionary voice search functionality powered by AI for enhanced accessibility',
        '✅ COMPLETED: Smart alphabetic search with auto-completion and predictive text capabilities',
        '✅ COMPLETED: AI-powered recommendation engine for personalized shopping experiences',
        '🚧 IN DEVELOPMENT: Advanced delivery and shipment tracking system with real-time logistics management',
        '🚧 IN DEVELOPMENT: Multi-carrier integration for comprehensive East African distribution network',
        '🚧 IN DEVELOPMENT: Intelligent notification system for order updates and promotional campaigns',
        '🚧 IN DEVELOPMENT: Dynamic discount and promotional system with automated pricing strategies',
        '📋 PLANNED: Cross-platform mobile application deployment for iOS and Android ecosystems',
        '📋 PLANNED: Multi-language localization (English, Somali, Arabic, Swahili) for regional market penetration',
        '📋 PLANNED: Integrated mobile money payment systems (Zaad, EVC Plus, M-Pesa) for local market preferences',
        '📋 PLANNED: Vendor onboarding platform with comprehensive business verification and support systems',
        '📋 PLANNED: Commission-based revenue model with transparent fee structures and automated payouts'
      ],
      challenges: 'The primary technical challenge involves architecting a robust, scalable platform capable of operating efficiently in regions with inconsistent internet infrastructure and varying levels of digital literacy. Key challenges include implementing offline-first capabilities for areas with limited connectivity, integrating diverse local payment systems and currencies, navigating complex cross-border e-commerce regulations, and establishing reliable logistics networks across multiple East African countries. Additionally, the platform must accommodate cultural preferences, multiple languages, and varying business practices while maintaining enterprise-level security, performance optimization, and user experience standards that can compete with global e-commerce giants.',
      outcome: 'Currently in advanced development phase with core infrastructure 75% complete and database architecture fully operational. Successfully implemented comprehensive user management systems, intelligent search capabilities including AI-powered voice recognition, and robust admin tools for product management. The delivery and shipment modules are progressing rapidly with strategic partnerships being established across East Africa. The platform has attracted significant attention from potential investors and regional stakeholders, positioning it as a premier investment opportunity in the rapidly expanding East African digital economy. Projected completion by end of 2026 with immediate market entry in Somalia, followed by strategic expansion across the Horn of Africa region.',
      technicalDetails: 'Engineered using cutting-edge full-stack architecture featuring React Native for cross-platform mobile development, Next.js for optimized web performance, and MongoDB for scalable NoSQL data management. The backend leverages Node.js and Express.js for high-performance API development, with TypeScript ensuring code reliability and maintainability. Advanced features include AI-powered search algorithms, voice recognition APIs optimized for regional dialects, real-time analytics dashboards, and microservices architecture for seamless scalability. The system incorporates Redis for efficient caching, Socket.io for real-time communications, comprehensive API documentation, automated testing suites, and robust CI/CD pipelines for reliable deployment and maintenance.',
      impact: 'Positioned to fundamentally transform the e-commerce landscape in East Africa by introducing the first comprehensive marketplace platform specifically engineered for the region\'s unique market dynamics and infrastructure challenges. Upon deployment, Shopofinity will create unprecedented economic opportunities for thousands of local entrepreneurs, small businesses, and vendors while dramatically improving access to goods and services in traditionally underserved markets. The platform will serve as a catalyst for digital economic growth, fostering innovation and entrepreneurship across Somalia and the broader East African region. Strategic investors and commission-based partners will have exclusive opportunities to participate in this revolutionary digital transformation, with the platform ready to capture significant market share in the rapidly growing East African e-commerce sector valued at billions of dollars.',
      github: '',
      live: '#',
      emoji: '🌍'
    },
  ];

  const imageMap: Record<string, string> = {
    'aiu-students-hub': aiuStudentsHub,
    'zero-hunger-platform': zeroHungerPlatform,
    'car-rental-system': carRentalSystem,
    'market-basket-analysis': marketBasketAnalysis,
    'ai-chat-assistant': aiChatAssistant,
    'blood-bank-system': bloodBankSystem,
    'product-recommendation': productRecommendation,
    'handwriting-recognition': handwritingRecognition,
    'personal-ecommerce': personalEcommerce,
    'shopofinity': shopofinity,
  };

  const categories = [
    { id: 'all', name: 'All Projects', emoji: '🚀' },
    { id: 'web', name: 'Web Dev', emoji: '💻' },
    { id: 'ecommerce', name: 'E-Commerce', emoji: '🛒' },
    { id: 'data', name: 'Data Science', emoji: '📊' },
    { id: 'ai', name: 'AI/ML', emoji: '🤖' },
    { id: 'desktop', name: 'Desktop', emoji: '🖥️' },
    { id: 'healthcare', name: 'Healthcare', emoji: '🏥' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Floating particles for background
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
  }));

  return (
    <section id="projects" className="relative min-h-screen section-padding bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-pink-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Animated Blobs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="container-max relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="flex items-center justify-center space-x-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              whileHover={{ scaleX: 2 }}
            />
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-lg uppercase tracking-widest"
              whileHover={{ scale: 1.1 }}
            >
              Epic Creations
            </motion.span>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              whileHover={{ scaleX: 2 }}
            />
          </motion.div>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Featured{' '}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Projects
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ 
              scale: 1.01,
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderColor: 'rgba(34, 211, 238, 0.3)'
            }}
          >
            A showcase of my recent work in web development, data science, AI, and software engineering. 
            Each project represents a unique challenge and innovative solution.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`group relative overflow-hidden px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active background */}
              {filter === category.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/50 rounded-2xl"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              {/* Hover background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />

              <div className="flex items-center space-x-2 relative z-10">
                <motion.span
                  className="text-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.emoji}
                </motion.span>
                <span>{category.name}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative cursor-pointer"
              variants={{
                hidden: { y: 50, opacity: 0, scale: 0.8 },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    type: "spring",
                  },
                },
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project Card */}
              <div
                className="relative overflow-hidden rounded-3xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image Header (uses SVG assets) */}
                <div className="relative aspect-video bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 overflow-hidden">
                  {imageMap[project.image] ? (
                    <img
                      src={imageMap[project.image]}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div
                        className="text-6xl"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        {project.emoji}
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-center text-white"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <EyeIcon className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-bold text-lg">View Details</p>
                    </motion.div>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 px-3 py-1 backdrop-blur-sm bg-black/50 rounded-full text-white text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {categories.find(cat => cat.id === project.category)?.name}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-300 mb-4 leading-relaxed"
                    whileHover={{ x: 5 }}
                  >
                    {project.shortDesc}
                  </motion.p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 backdrop-blur-sm bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-sm rounded-full font-medium hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + techIndex * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex items-center justify-between pt-4 border-t border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.button
                      className="text-cyan-400 font-semibold flex items-center space-x-2 hover:space-x-3 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>Explore</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                    </motion.button>
                    
                    <div className="flex items-center space-x-3">
                      <motion.a
                        href={project.github}
                        className="p-2 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-cyan-500/20 transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-2 backdrop-blur-sm bg-white/5 rounded-lg hover:bg-purple-500/20 transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: -360 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <RocketLaunchIcon className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-3xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-gray-300 text-lg mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Like what you see? Let's build something amazing together! 
          </motion.p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-black shadow-2xl flex items-center space-x-3 mx-auto group"
            whileHover={{ 
              scale: 1.1,
              boxShadow: '0 0 40px rgba(34, 211, 238, 0.8)'
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -5, 0],
              boxShadow: [
                '0 10px 25px rgba(34, 211, 238, 0.4)',
                '0 15px 35px rgba(34, 211, 238, 0.6)',
                '0 10px 25px rgba(34, 211, 238, 0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>🚀</span>
            <span>Start a Project</span>
            <span>✨</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-purple-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-8 border-b border-white/10">
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 backdrop-blur-sm bg-white/10 rounded-2xl hover:bg-red-500/20 transition-colors duration-300 group"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-6 h-6 text-white group-hover:text-red-400" />
                </motion.button>
                
                <div className="pr-16">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.span
                      className="text-3xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      {selectedProject.emoji}
                    </motion.span>
                    <motion.h3
                      className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedProject.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    className="text-gray-200 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {selectedProject.description}
                  </motion.p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Tech Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-black text-white text-xl mb-4 flex items-center space-x-2">
                    <CodeBracketIcon className="w-6 h-6 text-cyan-400" />
                    <span>Technologies Used</span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 rounded-xl font-semibold"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="font-black text-white text-xl mb-4 flex items-center space-x-2">
                    <SparklesIcon className="w-6 h-6 text-yellow-400" />
                    <span>Key Features</span>
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedProject.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-cyan-400 rounded-full mt-2"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Challenges & Outcome */}
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="font-black text-white text-xl mb-4 flex items-center space-x-2">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      >
                        ⚡
                      </motion.div>
                      <span>Challenges & Solutions</span>
                    </h4>
                    <p className="text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                      {selectedProject.challenges}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h4 className="font-black text-white text-xl mb-4 flex items-center space-x-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🎯
                      </motion.div>
                      <span>Results & Impact</span>
                    </h4>
                    <p className="text-gray-200 leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                      {selectedProject.outcome}
                    </p>
                  </motion.div>
                </div>

                {/* Technical Details & Impact */}
                {selectedProject.technicalDetails && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.0 }}
                    >
                      <h4 className="font-black text-white text-xl mb-4 flex items-center space-x-2">
                        <motion.div
                          animate={{ rotate: [0, 180, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          ⚙️
                        </motion.div>
                        <span>Technical Implementation</span>
                      </h4>
                      <p className="text-gray-200 leading-relaxed backdrop-blur-sm bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-4 border border-cyan-400/20">
                        {selectedProject.technicalDetails}
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <h4 className="font-black text-white text-xl mb-4 flex items-center space-x-2">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🌟
                        </motion.div>
                        <span>Project Impact</span>
                      </h4>
                      <p className="text-gray-200 leading-relaxed backdrop-blur-sm bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-4 border border-purple-400/20">
                        {selectedProject.impact}
                      </p>
                    </motion.div>
                  </div>
                )}

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-4 rounded-2xl font-bold text-center flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>📋</span>
                    <span>View Project Details</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;