"use client";

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 text-gray-900 py-16 px-6 mt-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-green-600 text-center">
          Terms of Service 🌿
        </h1>
        <p className="text-lg text-gray-600 mt-3 text-center">
          Please read these terms carefully before using SustainaBite.
        </p>

        {/* Last Updated Notice */}
        <p className="text-sm text-gray-500 text-center mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Terms of Service Sections */}
        <div className="mt-10 space-y-8">
          {/* Section 1: Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mt-2">
              By accessing or using SustainaBite, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.
            </p>
          </section>

          {/* Section 2: User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">2. User Responsibilities</h2>
            <p className="text-gray-700 mt-2">
              You agree to use SustainaBite responsibly, avoiding any misuse of content, unauthorized data extraction, or actions that violate our policies.
            </p>
          </section>

          {/* Section 3: Content Ownership */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">3. Content Ownership</h2>
            <p className="text-gray-700 mt-2">
              All content on SustainaBite, including text, images, and recipes, is owned by us or our contributors. Unauthorized reproduction or distribution is prohibited.
            </p>
          </section>

          {/* Section 4: Account & Security */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">4. Account & Security</h2>
            <p className="text-gray-700 mt-2">
              Users are responsible for maintaining the confidentiality of their account information. Any suspicious activity should be reported immediately.
            </p>
          </section>

          {/* Section 5: Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">5. Third-Party Links</h2>
            <p className="text-gray-700 mt-2">
              Our platform may contain links to third-party websites. We are not responsible for their content or privacy practices.
            </p>
          </section>

          {/* Section 6: Termination of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">6. Termination of Service</h2>
            <p className="text-gray-700 mt-2">
              We reserve the right to suspend or terminate user access if any violation of these terms is detected.
            </p>
          </section>

          {/* Section 7: Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mt-2">
              SustainaBite is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or error-free content.
            </p>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">8. Limitation of Liability</h2>
            <p className="text-gray-700 mt-2">
              SustainaBite shall not be liable for any direct, indirect, or incidental damages resulting from the use of our platform.
            </p>
          </section>

          {/* Section 9: Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">9. Changes to These Terms</h2>
            <p className="text-gray-700 mt-2">
              We may update these terms periodically. Continued use of SustainaBite after changes means you accept the new terms.
            </p>
          </section>
        </div>

        {/* Contact Info */}
        <div className="mt-10 text-center">
          <p className="text-gray-700">
            If you have any questions about our Terms of Service, contact us at:  
          </p>
          <a href="mailto:support@sustainabite.com" className="text-green-500 underline text-lg">
            support@sustainabite.com
          </a>
        </div>
      </div>
    </div>
  );
}
