// CertificateGallery.js

import React from 'react';
import './Certificate.css'; // Import CSS for styling
import { info } from '../../info/Info';

const CourseCompletioncertificates = info.completetionCerificate;
const awardCertificate = info.awardsCertificate;
const CertificateGallery = () => {
  return (
    <div>
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
    <div className='certificate-title'> Completion Certifactes</div>
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

    </div>
  );
};

export default CertificateGallery;
