import React from "react";
import Layout from "../layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="bg-[#1d1d23] text-gray-200 p-6 max-w-4xl mx-auto font-sans leading-relaxed">
        {/* Header */}
        <header className="mb-8 border-b border-green-800 pb-4">
          <h1 className="text-3xl font-bold text-green-800">Privacy Policy</h1>
          <p className="italic mt-2">
            Effective Date: 1 March 2025 | Last Updated: 27 March 2025
          </p>
        </header>

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            1. Introduction
          </h2>
          <p className="mb-4">
            OMAYA EXCHANGE, OMAYA EXPRESS EXCHANGE ("OMAYA", "we", "us", or
            "our") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your personal
            data when you use our platform, applications, websites, and services
            (collectively, the "Services"). By accessing or using OMAYA
            EXCHANGE, you agree to the practices described in this Policy.
          </p>
          <p>
            We operate in accordance with the General Data Protection Regulation
            (GDPR), Anti-Money Laundering (AML) regulations, and other
            applicable data protection laws.
          </p>
        </section>

        {/* Section 2: Personal Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            2. Personal Information
          </h2>
          <p className="mb-4">
            When you choose to open an account with OMAYA EXCHANGE, we will
            require certain personal information to verify your identity and
            provide you with our services. This information may include, but is
            not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Full name</li>
            <li>Date of birth</li>
            <li>Residential address</li>
            <li>Contact details (email, phone number)</li>
            <li>Government-issued identification documents</li>
            <li>Financial and transactional details</li>
          </ul>
          <p className="mb-4">
            We may also collect data related to your usage of our platform, such
            as:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Pages visited</li>
            <li>Session duration and frequency</li>
            <li>User activity and transaction behavior</li>
          </ul>
          <p>
            This information is essential for us to deliver secure and
            personalized services, enhance user experience, and fulfill our
            legal and regulatory obligations. By using our website or services,
            you consent to the collection and processing of this information for
            the purposes described.
          </p>
          <p className="mt-4">
            We may share your information with trusted third parties that are
            directly involved in delivering our services, including payment
            processors, compliance partners, and technology strictly to the
            extent necessary to execute and manage your account and
            transactions.
          </p>
        </section>

        {/* Section 3: Disclosure of Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            3. Disclosure of Information
          </h2>
          <p className="mb-4">
            OMAYA EXCHANGE is committed to safeguarding your personal
            information. We do not disclose your personal data to third parties
            without your explicit consent, except in the following limited
            circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Affiliated Entities:</strong> Your information may be
              shared with companies related to OMAYA EXCHANGE when necessary to
              provide our services or fulfill internal business operations.
            </li>
            <li>
              <strong>Legal or Regulatory Requirement:</strong> If we are
              legally required to disclose your information by applicable laws,
              regulations, court orders, or government requests, we will, where
              practical, provide advance notice of the disclosure along with any
              relevant documentation (such as the official request), allowing
              you to take appropriate action to limit or object to the
              disclosure.
            </li>
            <li>
              <strong>Information Provided by Third Parties:</strong> If the
              information we hold was lawfully obtained from a third party
              without breach of any confidentiality agreement and developed
              independently of any personal data you provided to us, it may be
              used or disclosed without restriction.
            </li>
            <li>
              <strong>Protection of Rights:</strong> We may disclose your
              personal information if necessary to protect the rights, property,
              or safety of OMAYA EXCHANGE, our users, or others, including the
              enforcement of our terms and legal agreements.
            </li>
          </ul>
          <p>
            All third parties receiving such data are contractually obligated to
            handle it in accordance with strict confidentiality and data
            protection standards.
          </p>
        </section>

        {/* Section 4: Change or Deletion of Personal Data */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            4. Change or Deletion of Personal Data
          </h2>
          <p className="mb-4">
            You have the right to update, correct, or request the deletion of
            your personal data at any time. If your information changes or if
            you no longer wish OMAYA EXCHANGE to retain your personal data, you
            may contact us at{" "}
            <a
              href="mailto:info@omaya.io"
              className="text-green-500 hover:underline"
            >
              info@omaya.io
            </a>{" "}
            with your request.
          </p>
          <p className="mb-4">
            We will act promptly on your instructions, subject to the following
            conditions:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              We may retain certain personal data where required by law or
              regulation.
            </li>
            <li>
              We may need to keep specific records to fulfill contractual
              obligations or ensure the continued provision of our services.
            </li>
            <li>
              Certain data may be preserved for legitimate business purposes,
              such as fraud prevention, dispute resolution, or recordkeeping.
            </li>
          </ul>
          <p>
            Your privacy and control over your information are important to us,
            and we are committed to ensuring transparency and responsiveness in
            all data-related matters.
          </p>
        </section>

        {/* Section 5: Use of Cookies */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            5. Use of Cookies
          </h2>
          <p className="mb-4">
            When you create an account or access the OMAYA EXCHANGE platform,
            cookies and similar technologies may be used to enhance your
            experience and enable essential platform functionality.
          </p>
          <p className="mb-4">
            Cookies are small data files stored on your device that allow us to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Recognize your browser or device</li>
            <li>Maintain your session and login state</li>
            <li>Track usage patterns and user behavior</li>
            <li>Personalize content and features based on your preferences</li>
            <li>
              Improve the performance, security, and functionality of our
              platform
            </li>
          </ul>
          <p className="mb-4">
            We may also collect related information such as your IP address,
            browser type, device language, and visit timestamp to understand
            usage trends and secure our platform from unauthorized access.
          </p>
          <p className="mb-4">
            These technologies may include not only cookies but also web
            beacons, pixels, and analytic tools that help us tailor the user
            experience and customize the way content is displayed to you.
          </p>
          <h3 className="font-semibold text-green-700 mb-2">
            Cookie Preferences
          </h3>
          <p className="mb-4">
            Most web browsers allow you to manage cookie settings. You can
            choose to accept, reject, or delete cookies at any time. However,
            please note that disabling cookies may affect certain features and
            functionalities of our platform, especially secure or personalized
            sections of the website.
          </p>
          <p>
            For the best experience and full access to all services, we
            recommend enabling cookies in your browser settings.
          </p>
        </section>

        {/* Section 6: Third-Party Technology and Data Sharing */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            6. Third-Party Technology and Data Sharing
          </h2>
          <p className="mb-4">
            OMAYA EXCHANGE may share limited personal data with trusted
            third-party service providers strictly for the purpose of fulfilling
            essential business operations, legal obligations, and improving our
            services. We ensure that only the minimum amount of data necessary
            is disclosed, and only to parties who are contractually bound to use
            such data solely for the purposes defined by us.
          </p>
          <p className="mb-4">
            These third-party partners are not authorized to use, share, or
            retain your data for any unrelated or unauthorized purposes. All
            third-party processors are required to adhere to stringent data
            protection standards consistent with this Privacy Policy and
            applicable laws, including the General Data Protection Regulation
            (GDPR), where applicable.
          </p>
          <p className="mb-4">
            Your data may be shared with the following categories of service
            providers:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>
              Marketing, educational content, and customer support providers
            </li>
            <li>Legal advisors and consultants</li>
            <li>
              Financial institutions, payment processors, and card service
              providers
            </li>
            <li>
              Governmental, regulatory, and supervisory authorities, including
              law enforcement and courts
            </li>
            <li>Data storage and secure archiving providers</li>
            <li>Fraud detection and prevention agencies</li>
            <li>
              Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF)
              information processors
            </li>
            <li>Auditors, tax advisors, and accounting professionals</li>
          </ul>
          <p className="mb-4">
            We do not sell, rent, or license your personal information to any
            third party. However, OMAYA EXCHANGE reserves the right to disclose
            personal information where required by law or regulation, or when
            necessary to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Comply with a legal obligation</li>
            <li>Cooperate with regulatory or enforcement authorities</li>
            <li>
              Fulfill credit reporting, debt collection, or dispute resolution
            </li>
            <li>
              Protect the rights, property, or safety of OMAYA EXCHANGE, its
              users, or the public
            </li>
          </ul>
          <p>
            All such disclosures are carefully assessed and made in accordance
            with our internal governance processes and applicable privacy
            regulations.
          </p>
        </section>

        {/* Section 7: Policy Amendments */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            7. Policy Amendments
          </h2>
          <p className="mb-4">
            OMAYA EXCHANGE reserves the right to amend, update, or modify this
            Privacy Policy at any time, without prior notice, to reflect changes
            in our business operations, legal or regulatory requirements, or
            technological advancements. Any such changes will be effective
            immediately upon posting the revised version on our website.
          </p>
          <p className="mb-4">
            By continuing to use our services after updates are published, you
            acknowledge and agree to be bound by the most current version of
            this Privacy Policy. We encourage all users to periodically review
            this policy to stay informed about how we collect, use, and protect
            your personal data.
          </p>
          <p>
            Any disputes arising from this Privacy Policy are subject to its
            terms, as well as the terms outlined in our Customer Agreement.
          </p>
          <p className="mt-4">
            All third parties with whom we share personal information are
            required to handle your data in a manner consistent with this
            Privacy Policy and, where applicable, in full compliance with the
            General Data Protection Regulation (GDPR) and other relevant data
            protection laws.
          </p>
        </section>

        {/* Section 8: Security of Personal Information */}
        <section className="mb-4">
          <h2 className="text-xl font-semibold text-green-800 mb-3">
            8. Security of Personal Information
          </h2>
          <p className="mb-4">
            At OMAYA EXCHANGE, we take the protection of your personal
            information seriously and implement industry-standard security
            measures to safeguard your data from loss, theft, misuse,
            unauthorized access, disclosure, alteration, or destruction.
          </p>
          <p className="mb-4">
            We utilize a combination of physical, technical, and organizational
            safeguards, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Encrypted communications (e.g., SSL/TLS)</li>
            <li>Secure server environments</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security audits and monitoring</li>
            <li>Staff training and confidentiality obligations</li>
          </ul>
          <p className="mb-4">
            Despite our efforts to ensure a high level of data security, no
            method of transmission over the Internet or method of electronic
            storage is entirely secure. Therefore, while we strive to use
            commercially acceptable means to protect your personal data, we
            cannot guarantee its absolute security.
          </p>
          <p>
            We also ensure that personal data is not retained longer than
            necessary—only for as long as required to fulfill our service
            obligations, comply with legal requirements, or protect our
            legitimate business interests.
          </p>
        </section>
      </div>{" "}
    </Layout>
  );
};

export default PrivacyPolicy;
