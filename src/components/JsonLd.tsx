import React from 'react';

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KamiyTech',
    legalName: 'KamiyTech AI',
    url: 'https://kamiytech.com',
    logo: 'https://kamiytech.com/assets/logo/logo.svg',
    foundingDate: '2026',
    founders: [
      {
        '@type': 'Person',
        name: 'Abhishek Chedwal',
        jobTitle: 'Founder & CEO / CTO',
      },
      {
        '@type': 'Person',
        name: 'Ankit Vaja',
        jobTitle: 'Co-Founder & Business Manager',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9977858817',
      contactType: 'customer service',
      areaServed: ['IN', 'US', 'EU', 'GB', 'AE'],
      availableLanguage: ['English', 'Hindi'],
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'KamiyTech',
    image: 'https://kamiytech.com/assets/logo/logo.svg',
    '@id': 'https://kamiytech.com/#organization',
    url: 'https://kamiytech.com',
    telephone: '+919977858817',
    priceRange: '₹12000 - ₹750000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1/32, behind SICA School Road, Vijay Nagar, Scheme No 54',
      addressLocality: 'Indore',
      addressRegion: 'MP',
      postalCode: '452010',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.7533,
      longitude: 75.8937,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '19:00',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "How does KamiyTech's 40/30/30 milestone payment structure work?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We operate on a transparent 3-stage milestone schedule: 40% Advance Deposit, 30% upon Staging Demo Review, and 30% Pre-Launch Handover. Small landing page or AI bot engagements use a 50/50 deposit model.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do we receive 100% intellectual property (IP) source code ownership?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100%. Upon final milestone payment handover, all custom source code, repository rights, database schemas, vector assets, and API configurations are transferred entirely to your organization.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is 18% GST itemization handled for Indian client entities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KamiyTech is a registered corporate entity in Madhya Pradesh, India. All domestic proposals and tax invoices itemize 18% GST separately, enabling 100% Input Tax Credit (ITC) claiming.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
