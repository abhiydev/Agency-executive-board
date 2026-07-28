import React from 'react';

export const JsonLd: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://kamiytech.com/#organization',
    name: 'KamiyTech',
    legalName: 'KamiyTech AI',
    url: 'https://kamiytech.com',
    logo: 'https://kamiytech.com/assets/logo/logo.svg',
    image: 'https://kamiytech.com/assets/logo/logo.svg',
    description:
      'Enterprise custom software, Next.js web platforms, cross-platform mobile apps, and AI business automation engineered for scale in Indore, MP, India.',
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1/32, behind SICA School Road, Vijay Nagar',
      addressLocality: 'Indore',
      addressRegion: 'MP',
      postalCode: '452010',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91 9977858817',
      contactType: 'customer service',
      email: 'support@kamiytech.com',
      areaServed: ['IN', 'US', 'EU', 'GB', 'AE'],
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      'https://github.com/kamiytech',
      'https://linkedin.com/company/kamiytech',
      'https://twitter.com/kamiytech',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://kamiytech.com/#localbusiness',
    name: 'KamiyTech',
    legalName: 'KamiyTech AI',
    image: 'https://kamiytech.com/assets/logo/logo.svg',
    url: 'https://kamiytech.com',
    telephone: '+91 9977858817',
    email: 'support@kamiytech.com',
    priceRange: '₹35,000 - ₹7,500,000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1/32, behind SICA School Road, Vijay Nagar',
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

  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://kamiytech.com/#professionalservice',
    name: 'KamiyTech - Software & AI Consultancy',
    image: 'https://kamiytech.com/assets/logo/logo.svg',
    url: 'https://kamiytech.com',
    telephone: '+91 9977858817',
    priceRange: '₹35,000 - ₹7,500,000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1/32, behind SICA School Road, Vijay Nagar',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development & AI Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software & Next.js Web Development',
            description:
              'Enterprise-grade React & Next.js web application engineering with server-side rendering and edge performance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cross-Platform Mobile App Development',
            description:
              'Native-feel iOS & Android mobile app development using React Native and Flutter frameworks.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bespoke AI Automation & LLM Workflows',
            description:
              'Custom AI agent design, workflow automation, and LLM integrations to optimize business operations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical SEO & Organic Growth Engineering',
            description:
              'Data-driven Technical SEO, speed optimization, structured data schemas, and SEO content architecture.',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://kamiytech.com/#faq',
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
      {
        '@type': 'Question',
        name: 'What warranty and SLAs are included after project launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All projects include a 30-day post-launch warranty SLA covering bug fixes, speed optimizations, and system stability checks at zero extra charge.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

