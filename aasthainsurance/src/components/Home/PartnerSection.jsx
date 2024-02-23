import React from 'react';

function PartnerCard({ name, imageUrl }) {
  return (
    <div className="flex items-center justify-center flex-col p-4 partner-card">
      <img src={imageUrl} alt={name} className="w-20 h-25 mb-2 object-fit" />
    </div>
  );
}

function PartnerSection() {
  const partners = [
    { name: 'LIC', imageUrl: 'https://presentations.gov.in/wp-content/uploads/2020/06/Perview-2.png?x93559' },
    { name: 'ICICI', imageUrl: 'https://cionews.co.in/wp-content/uploads/2023/11/Article-Main-Image-7.png' },
    { name: 'Oriental', imageUrl: 'https://api.indianmandarins.com/public/blogImages/OIC_logo.png' },
    { name: 'Tata', imageUrl: 'https://content.jdmagicbox.com/comp/delhi/32/011pk007832/catalogue/tata-aia-life-insurance-company-ltd-rohini-sector-3-delhi-insurance-companies-hm0v7i23ld.jpg' },
    { name: 'Star', imageUrl: 'https://www.starhealth.in/img/star-health-logo.png' },
    { name: 'HDFC', imageUrl: 'https://www.hdfcergo.com/images/default-source/home/logo_hdfc.svg' },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4 partner-section" style={{ animation: 'slideRightToLeft 20s linear infinite' }}>
      {partners.map((partner, index) => (
        <PartnerCard key={index} name={partner.name} imageUrl={partner.imageUrl} />
      ))}
    </div>
  );
}

export default PartnerSection;
