// CertificateGallery.js

import React from 'react';
import './Certificate.css'; // Import CSS for styling
import { info } from '../../info/Info';
// const certificates = [
//   {
//     name: 'Certificate Name 1',
//     company: 'Company 1',
//     description: 'Description for certificate 1',
//     image: 'certificate1.jpg',
//   },
//   {
//     name: 'Certificate Name 2',
//     company: 'Company 2',
//     description: 'Description for certificate 2',
//     image: 'certificate2.jpg',
//   },
  // Add more certificates as needed
// ];
const certificates = info.cerificate;

const CertificateGallery = () => {
  return (
    <div>
        <div className='certificate-title'> CERTIFICATES</div>
    <div className="certificate-gallery">
        
      {certificates.map((certificate, index) => (
        <div className="certificate" key={index}>
          <img src={certificate.image} alt={certificate.certifacteName} />
          <div className="details">
            <h3 className='certificate-name'>{certificate.certifacteName}</h3>
            <p>{certificate.companyName}</p>
            <p>{certificate.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CertificateGallery;
