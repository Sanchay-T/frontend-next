import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaCertificate, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId: string;
  skills: readonly string[];
  logo: string;
  verificationUrl: string;
}
interface CertificationsSectionProps {
  certifications: ReadonlyArray<Certification>;
}

const CertificationCard: React.FC<Certification> = ({
  title,
  issuer,
  issueDate,
  expirationDate,
  credentialId,
  skills,
  logo,
  verificationUrl,
}) => {
  const handleVerify = () => {
    if (verificationUrl) {
      window.open(verificationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="w-[300px] h-[400px] flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <img src={logo} alt={issuer} className="w-16 h-16 object-contain" />
          <FaCertificate className="text-3xl text-yellow-500" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-1">{issuer}</p>
        <p className="text-xs text-muted-foreground">Issued: {issueDate}</p>
        {expirationDate && (
          <p className="text-xs text-muted-foreground">Expires: {expirationDate}</p>
        )}
        {skills && skills.length > 0 && (
          <div className="mt-4 flex-grow">
            <p className="text-sm font-semibold mb-2">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        )}
        <Button
          variant="outline"
          size="sm"
          onClick={handleVerify}
          className="mt-auto"
        >
          Verify Credential
        </Button>
      </CardContent>
    </Card>
  );
};

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 330; // Adjust based on card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certifications" className="w-full py-12">
      <div className="text-center mb-8">
        <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm mb-4">
          Certifications
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">
          Continuous Learning
        </h2>
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
          I'm committed to expanding my knowledge and skills. Here are some of my recent certifications.
        </p>
      </div>
      <div className="relative max-w-[95vw] mx-auto">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={() => scroll('left')}
        >
          <FaChevronLeft />
        </Button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 py-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          onClick={() => scroll('right')}
        >
          <FaChevronRight />
        </Button>
      </div>
    </section>
  );
};