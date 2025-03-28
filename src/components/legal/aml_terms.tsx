import React from 'react';
import Layout from '../layout/Layout';

const AMLTerms = () => {
  return (
    <Layout>
      <div className="bg-[#1d1d23] text-gray-200 p-6 max-w-4xl mx-auto font-sans leading-relaxed">
        {/* Header */}
        <header className="mb-8 border-b border-green-800 pb-4">
          <h1 className="text-3xl font-bold text-green-800">Anti-Money Laundering (AML) Policy</h1>
        </header>

        {/* Section 1: Introduction */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">1. Introduction</h2>
          <p className="mb-4">
            At OMAYA EXCHANGE, we are fully committed to maintaining the highest standards of
            integrity and compliance with all applicable laws and regulations related to the prevention
            of money laundering, terrorist financing, and other financial crimes.
          </p>
          <p className="mb-4">
            This Anti-Money Laundering (AML) Policy outlines the principles, controls, and
            procedures implemented by OMAYA EXCHANGE to detect, prevent, and report suspicious
            activities that may involve money laundering or the financing of terrorism. It is our firm
            belief that effective AML compliance is critical not only for legal adherence but also for
            upholding the trust of our users, partners, and regulators.
          </p>
          <p className="mb-4">
            OMAYA EXCHANGE operates in accordance with international best practices, including
            guidelines issued by the Financial Action Task Force (FATF), as well as relevant local
            regulatory authorities, including the Central Bank of Somalia. We recognize our
            responsibility to contribute actively to the fight against financial crime, particularly in
            emerging markets where the risks may be heightened.
          </p>
          <p>
            This policy applies to all OMAYA EXCHANGE users, employees, management, affiliates,
            and third-party service providers involved in any aspect of our operations. It forms an
            integral part of our broader compliance framework and is subject to ongoing review and
            enhancement to reflect evolving regulatory requirements and risk factors.
          </p>
        </section>

        {/* Section 2: What is AML? */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">2. What is Anti-Money Laundering (AML)?</h2>
          <p className="mb-4">
            Anti-Money Laundering (AML) refers to a comprehensive set of laws, regulations, and
            procedures designed to prevent criminals from disguising illegally obtained funds as
            legitimate income. AML frameworks are enforced by financial institutions and virtual asset
            service providers (VASPs) to detect, monitor, and report suspicious financial activities.
          </p>
          <p className="mb-4">
            At OMAYA EXCHANGE, we recognize that trading platforms can be misused by individuals
            or organizations seeking to legitimize proceeds of crime. Therefore, we are committed to
            establishing a robust AML compliance program that aligns with international standards and
            national regulatory obligations.
          </p>
          <p>
            AML compliance is not just a legal requirement; it is a fundamental part of our mission to
            protect the integrity of our platform, support the fight against financial crime, and promote
            a secure environment for all users.
          </p>
        </section>

        {/* Section 3: Objectives */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">3. Objectives of the AML Policy</h2>
          <p className="mb-4">
            The primary objectives of OMAYA EXCHANGE's AML Policy are to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Deter and prevent the use of our platform for money laundering, terrorist financing, and other illicit activities.</li>
            <li>Identify and verify the true identity of our customers (Know Your Customer – KYC).</li>
            <li>Ensure continuous monitoring of transactions to detect suspicious patterns or behavior.</li>
            <li>Comply with all local and international AML laws, including guidelines from the Financial Action Task Force (FATF) and the Central Bank of Somalia.</li>
            <li>Report suspicious activities to the appropriate regulatory authorities in a timely and responsible manner.</li>
            <li>Train our team to understand, detect, and respond to potential AML risks.</li>
          </ul>
          <p>
            Through strict adherence to this policy, OMAYA EXCHANGE strengthens investor
            confidence, upholds legal and ethical standards, and contributes to the global effort to
            combat money laundering and financial crime.
          </p>
        </section>

        {/* Section 4: AML and FATF */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">4. Anti-Money Laundering and the FATF</h2>
          <p className="mb-4">
            The global framework for Anti-Money Laundering (AML) gained momentum with the
            establishment of the Financial Action Task Force (FATF) in 1989. As an intergovernmental
            body, FATF was created to develop international standards and promote effective
            implementation of legal, regulatory, and operational measures for combating money
            laundering, terrorist financing, and other threats to the integrity of the global financial
            system.
          </p>
          <p className="mb-4">
            FATF's 40 Recommendations serve as the cornerstone of international AML efforts and
            provide a framework for countries to implement effective measures. FATF regularly
            assesses member countries and identifies jurisdictions with strategic deficiencies in their
            AML regimes.
          </p>
          <p>
            As a digital asset platform operating in a globally interconnected environment, OMAYA
            EXCHANGE fully aligns its AML policies with FATF guidelines and the evolving standards of
            the global financial community. We are also committed to compliance with directives from
            the Central Bank of Somalia and other relevant regional authorities.
          </p>
        </section>

        {/* Section 5: Money Laundering Process */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">5. Understanding the Money Laundering Process</h2>
          <p className="mb-4">
            Money laundering typically occurs in three stages:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li><strong>Placement:</strong> Illegally obtained funds are introduced into the financial system through deposits, purchases, or other entry points.</li>
            <li><strong>Layering:</strong> A series of complex transactions are performed to obscure the origin of the funds. This may involve transfers between multiple accounts, conversion into digital assets, or other financial instruments.</li>
            <li><strong>Integration:</strong> The laundered funds are reintroduced into the legitimate economy and may appear to come from lawful sources.</li>
          </ol>
        </section>

        {/* Section 6: AML Measures */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">6. OMAYA EXCHANGE AML Measures</h2>
          <p className="mb-4">
            To prevent misuse of our platform, OMAYA EXCHANGE implements rigorous AML
            measures, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Customer Due Diligence (CDD) and Know Your Customer (KYC) procedures.</li>
            <li>Verification of Identity: All users must provide valid government-issued photo identification (e.g., passport, national ID, or driver's license).</li>
            <li>Proof of Address: Recent (within 3 months) utility bills or bank statements clearly showing the customer's name, full address, date of issue, and issuing authority.</li>
            <li>Credit/Debit Card Verification: Users must upload a copy showing only the last four digits (with CVV covered) to ensure transaction security.</li>
            <li>Name Screening: Customers are screened against global sanctions and terrorist watchlists to ensure they are not listed or affiliated with any high-risk entities or persons.</li>
            <li>Transaction Monitoring: User activities and transactions are continuously reviewed to detect unusual patterns or suspicious behavior.</li>
            <li>Source of Funds and Wealth Assessments: Where necessary, users must demonstrate the legitimate origin of their funds.</li>
          </ul>
          <p>
            OMAYA EXCHANGE enforces a withdrawal policy that requires funds to be sent back to
            the original source of remittance, helping to prevent the redirection of funds to unknown or
            unauthorized destinations.
          </p>
        </section>

        {/* Section 7: Commitment to Compliance */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">7. Commitment to Compliance and Cooperation</h2>
          <p className="mb-4">
            OMAYA EXCHANGE does not tolerate money laundering or any activity associated with
            financial crime. All employees, agents, and partners are strictly prohibited from knowingly
            facilitating or engaging in such conduct. We fully cooperate with regulatory bodies,
            financial intelligence units, and law enforcement agencies in the identification and
            reporting of suspicious activities.
          </p>
          <p>
            Through ongoing staff training, real-time monitoring systems, and a proactive compliance
            culture, OMAYA EXCHANGE remains vigilant in protecting its platform, users, and the
            broader financial ecosystem from the risks of money laundering and terrorism financing.
          </p>
        </section>

        {/* Section 8: Customer Identification */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">8. Customer Identification (KYC)</h2>
          <p className="mb-4">
            At OMAYA EXCHANGE, the first line of defense against money laundering is the
            enforcement of a comprehensive Know Your Customer (KYC) process. All users must
            undergo identity verification to access our platform.
          </p>
          <p className="mb-4">
            Our KYC procedures are designed to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Establish and verify the identity of each customer</li>
            <li>Assess the legitimacy of the source of funds</li>
            <li>Ensure the customer is not listed on sanctions or watchlists</li>
          </ul>
          <p>
            Please note that AML and KYC requirements may vary depending on the jurisdiction.
            Therefore, OMAYA EXCHANGE reserves the right to request additional documentation or
            information as needed to comply with local or international regulatory obligations.
          </p>
        </section>

        {/* Section 9: Reporting Suspicious Activity */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">9. Reporting of Suspicious Activity</h2>
          <p className="mb-4">
            OMAYA EXCHANGE strictly adheres to AML regulations requiring the monitoring, detection,
            and reporting of suspicious transactions or behavior. Our compliance team is trained to
            identify red flags and take prompt action.
          </p>
          <p className="mb-4">
            We are legally obligated to report any such activity to the relevant Financial Intelligence
            Unit (FIU) or law enforcement authority and may do so without prior notice to the
            customer involved. In accordance with applicable laws, we are prohibited from disclosing
            the existence or contents of any report (including Suspicious Activity Reports – SARs)
            submitted to authorities.
          </p>
          <p>
            Additionally, OMAYA EXCHANGE reserves the right to suspend or reject any transaction if
            we suspect it is associated with criminal activity or money laundering.
          </p>
        </section>

        {/* Section 10: Payment Supervision */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-800 mb-3">10. Payment Supervision and Transfer Restrictions</h2>
          <p className="mb-4">
            In compliance with AML standards and to prevent misuse of our platform:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Third-party payments are strictly prohibited. All deposits must be made from an account in the customer's own name, and all KYC documentation must match the source of funds.</li>
            <li>Withdrawals will only be processed to the original source of deposit.
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Bank transfers will be returned to the same bank account.</li>
                <li>Credit or debit card deposits will be refunded to the same card.</li>
              </ul>
            </li>
            <li>Cash deposits or cash withdrawals are not accepted under any circumstances.</li>
          </ul>
          <p className="mb-4">
            These controls are designed to ensure traceability of funds, reduce the risk of illicit
            financial activity, and protect the integrity of our services.
          </p>
          <p>
            For any questions or concerns related to AML compliance, please contact us at: <a href="mailto:info@omaya.io" className="text-green-500 hover:underline">info@omaya.io</a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AMLTerms;