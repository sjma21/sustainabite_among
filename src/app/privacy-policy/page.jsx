"use client";

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 text-gray-900 py-16 px-6 mt-4">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-green-600 text-center">
          Privacy Policy 🌿
        </h1>
        <p className="text-lg text-gray-600 mt-3 text-center">
          Your privacy matters to us. This policy outlines how we collect, use, and protect your information.
        </p>

        {/* Last Updated Notice */}
        <p className="text-sm text-gray-500 text-center mt-2">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Privacy Policy Sections */}
        <div className="mt-10 space-y-8">
          {/* Section 1: Information Collection */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">1. Information We Collect</h2>
            <p className="text-gray-700 mt-2">
              We may collect personal information such as your name, email address, and preferences when you subscribe to our newsletter, sign up for an account, or interact with our services.
            </p>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">2. How We Use Your Information</h2>
            <p className="text-gray-700 mt-2">
              Your information helps us improve our services, personalize your experience, and send you eco-friendly recipes, sustainability tips, and updates about SustainaBite.
            </p>
          </section>

          {/* Section 3: Data Protection & Security */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">3. Data Protection & Security</h2>
            <p className="text-gray-700 mt-2">
              We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, no online service is completely secure, so we encourage users to stay mindful of their personal data.
            </p>
          </section>

          {/* Section 4: Cookies & Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">4. Cookies & Tracking Technologies</h2>
            <p className="text-gray-700 mt-2">
              We use cookies to enhance your browsing experience, track website analytics, and personalize content. You can manage your cookie preferences through your browser settings.
            </p>
          </section>

          {/* Section 5: Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">5. Third-Party Services</h2>
            <p className="text-gray-700 mt-2">
              SustainaBite may include links to third-party websites. We are not responsible for their privacy practices, so we encourage you to review their privacy policies before providing any information.
            </p>
          </section>

          {/* Section 6: Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">6. Your Rights & Choices</h2>
            <p className="text-gray-700 mt-2">
              You have the right to access, update, or delete your personal information. If you have any privacy concerns, please contact us at <a href="mailto:privacy@sustainabite.com" className="text-green-500 underline">privacy@sustainabite.com</a>.
            </p>
          </section>

          {/* Section 7: Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-green-500">7. Changes to This Policy</h2>
            <p className="text-gray-700 mt-2">
              We may update this Privacy Policy periodically. We will notify users of any significant changes through our website or email.
            </p>
          </section>
        </div>

        {/* Contact Info */}
        <div className="mt-10 text-center">
          <p className="text-gray-700">
            If you have any questions about our Privacy Policy, contact us at:  
          </p>
          <a href="mailto:privacy@sustainabite.com" className="text-green-500 underline text-lg">
            privacy@sustainabite.com
          </a>
        </div>
      </div>
    </div>
  );
}
