import React, { useState, useEffect } from 'react';
import './Certificate.css'; // Import CSS for styling
import { info } from '../../info/Info';

const CourseCompletioncertificates = info.completetionCerificate;
const awardCertificate = info.awardsCertificate;
const internshipCertificate = info.internshipCertificate;

const CertificateGallery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
          <div className='certificate-title'> Awards</div>
          <div className="certificate-gallery">
            {awardCertificate.map((certificate, index) => (
              <div className="certificate" key={index}>
                <img src={certificate.image} alt={certificate.certifacteName} />
                <div className="details">
                  <h3 className='certificate-name'>{certificate.certifacteName}</h3>
                  <h4>{certificate.companyName}.</h4>
                  <p>{certificate.description}.</p>
                </div>
              </div>
            ))}
          </div>

          <div className='certificate-title'> Completion Certificates</div>
          <div className="certificate-gallery">
            {CourseCompletioncertificates.map((certificate, index) => (
              <div className="certificate" key={index}>
                <img src={certificate.image} alt={certificate.certifacteName} />
                <div className="details">
                  <h3 className='certificate-name'>{certificate.certifacteName}</h3>
                  <h4>{certificate.companyName}</h4>
                  <p>{certificate.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='certificate-title'> Internship & Inplant</div>
          <div className="certificate-gallery">
            {internshipCertificate.map((certificate, index) => (
              <div className="certificate" key={index}>
                <img src={certificate.image} alt={certificate.certifacteName} />
                <div className="details">
                  <h3 className='certificate-name'>{certificate.certifacteName}</h3>
                  <h4>{certificate.companyName}</h4>
                  <p>{certificate.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CertificateGallery;
