import { motion } from 'framer-motion';
import Image from 'next/image';

const PublicationCard = ({ publication, index }) => (
  <motion.div
    className="publication-card"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="publication-card-inner">
      <Image
        src="/urbanflow.png" // Replace with your image path
        alt="Publication background"
        layout="fill"
        objectFit="cover"
        className="publication-card-bg"
      />
      <div className="publication-card-content">
        <h3 className="publication-title">{publication.title}</h3>
        <p className="publication-publisher">{publication.publisher}</p>
        <a 
          href={publication.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="publication-link"
        >
          Read Paper
        </a>
      </div>
    </div>
  </motion.div>
);

const PublicationsSection = ({ DATA }) => (
  <section id="publications" className="publications-section">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="section-title">Research & Publications</h2>
      <p className="section-description">
        Explore my contributions to academic research and industry journals.
      </p>
      <div className="publications-grid">
        {DATA.publications.map((publication, index) => (
          <PublicationCard key={publication.title} publication={publication} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default PublicationsSection;