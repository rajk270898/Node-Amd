import { useState } from 'react';
import { AlertTriangle, FileText, Shield } from 'lucide-react';

const Legal = () => {
  const [activeTab, setActiveTab] = useState('terms');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {activeTab === 'terms' ? 'Terms of Use' : 
             activeTab === 'privacy' ? 'Privacy Policy' : 
             'Code of Conduct'}
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {activeTab === 'terms' ? 'The rules and guidelines governing your use of our platform and services.' : 
             activeTab === 'privacy' ? 'How we collect, use, and protect your personal information.' : 
             'Our commitment to providing a harassment-free experience for everyone.'}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center ${
                activeTab === 'terms' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <FileText size={18} className="mr-2" />
              Terms of Use
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center ${
                activeTab === 'privacy' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <Shield size={18} className="mr-2" />
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('conduct')}
              className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center ${
                activeTab === 'conduct' ? 'bg-white text-emerald-600 shadow-sm' : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <AlertTriangle size={18} className="mr-2" />
              Code of Conduct
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          {activeTab === 'terms' && (
            <div className="prose prose-emerald max-w-none">
              <h2>Terms of Use</h2>
              <p>Last Updated: July 1, 2025</p>
              
              <h3>1. Acceptance of Terms</h3>
              <p>
                By accessing or using the NodeJS Ahmedabad community website, you agree to be bound by these Terms of Use. If you do not agree to all the terms and conditions, you must not access or use our services.
              </p>
              
              <h3>2. Community Membership</h3>
              <p>
                Membership in the NodeJS Ahmedabad community is open to individuals interested in Node.js and related technologies. By becoming a member, you agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information during the registration process</li>
                <li>Maintain and update your information as needed</li>
                <li>Adhere to our Code of Conduct in all community interactions</li>
                <li>Use the community resources for their intended purposes</li>
              </ul>
              
              <h3>3. Content and Intellectual Property</h3>
              <p>
                All content provided on our website, including but not limited to text, graphics, logos, images, and software, is the property of NodeJS Ahmedabad or its content providers and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                By submitting, posting, or displaying content on our platform, you grant NodeJS Ahmedabad a non-exclusive, royalty-free license to use, reproduce, adapt, publish, and distribute such content.
              </p>
              
              <h3>4. User Conduct</h3>
              <p>
                You agree not to:
              </p>
              <ul>
                <li>Use our services for any illegal purpose or in violation of any local, state, national, or international law</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Impersonate another user or person</li>
                <li>Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>Attempt to gain unauthorized access to any portion of the website</li>
              </ul>
              
              <h3>5. Disclaimer of Warranties</h3>
              <p>
                The NodeJS Ahmedabad website and services are provided "as is" and "as available" without any warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              
              <h3>6. Limitation of Liability</h3>
              <p>
                NodeJS Ahmedabad shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the website or services.
              </p>
              
              <h3>7. Changes to Terms</h3>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
              </p>
              
              <h3>8. Contact Us</h3>
              <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:legal@nodejsahmedabad.org">legal@nodejsahmedabad.org</a>.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="prose prose-emerald max-w-none">
              <h2>Privacy Policy</h2>
              <p>Last Updated: July 1, 2025</p>
              
              <h3>1. Information We Collect</h3>
              <p>
                We collect several types of information from and about users of our website, including:
              </p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when registering for membership or events.</li>
                <li><strong>Profile Information:</strong> Professional experience, skills, interests, and other details you choose to share in your community profile.</li>
                <li><strong>Usage Data:</strong> Information about your interaction with our website, including IP address, browser type, operating system, pages visited, and time spent on the site.</li>
                <li><strong>Communications:</strong> Content of messages, comments, and other communications you send through our platform.</li>
              </ul>
              
              <h3>2. How We Use Your Information</h3>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and manage your membership and event registrations</li>
                <li>Send you communications about upcoming events, community updates, and other relevant information</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze usage patterns to enhance user experience</li>
                <li>Protect against unauthorized access and illegal activity</li>
              </ul>
              
              <h3>3. Information Sharing and Disclosure</h3>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li><strong>Community Members:</strong> Basic profile information may be visible to other community members.</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website, conducting events, or serving our users.</li>
                <li><strong>Sponsors:</strong> We may share aggregated, anonymized demographic data with our sponsors.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights or the safety of others.</li>
              </ul>
              
              <h3>4. Your Choices and Rights</h3>
              <p>
                You have certain rights regarding your personal data:
              </p>
              <ul>
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Set your browser to refuse cookies</li>
                <li>Request a copy of your personal data</li>
              </ul>
              
              <h3>5. Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h3>6. Changes to This Privacy Policy</h3>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <h3>7. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@nodejsahmedabad.org">privacy@nodejsahmedabad.org</a>.
              </p>
            </div>
          )}

          {activeTab === 'conduct' && (
            <div className="prose prose-emerald max-w-none">
              <h2>Code of Conduct</h2>
              <p>Last Updated: July 1, 2025</p>
              
              <h3>Our Pledge</h3>
              <p>
                In the interest of fostering an open and welcoming environment, we as members, contributors, and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
              </p>
              
              <h3>Our Standards</h3>
              <p>
                Examples of behavior that contributes to creating a positive environment include:
              </p>
              <ul>
                <li>Using welcoming and inclusive language</li>
                <li>Being respectful of differing viewpoints and experiences</li>
                <li>Gracefully accepting constructive criticism</li>
                <li>Focusing on what is best for the community</li>
                <li>Showing empathy towards other community members</li>
              </ul>
              
              <p>
                Examples of unacceptable behavior include:
              </p>
              <ul>
                <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
                <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
                <li>Public or private harassment</li>
                <li>Publishing others' private information, such as a physical or electronic address, without explicit permission</li>
                <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
              </ul>
              
              <h3>Enforcement Responsibilities</h3>
              <p>
                Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior. They will take appropriate and fair corrective action in response to any behavior that they deem inappropriate, threatening, offensive, or harmful.
              </p>
              
              <h3>Enforcement</h3>
              <p>
                Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders responsible for enforcement at <a href="mailto:conduct@nodejsahmedabad.org">conduct@nodejsahmedabad.org</a>. All complaints will be reviewed and investigated promptly and fairly.
              </p>
              
              <h3>Enforcement Guidelines</h3>
              <p>
                Community leaders will follow these Community Impact Guidelines in determining the consequences for any action they deem in violation of this Code of Conduct:
              </p>
              <ol>
                <li><strong>Correction:</strong> A private, written warning from community leaders, providing clarity around the nature of the violation and an explanation of why the behavior was inappropriate.</li>
                <li><strong>Warning:</strong> A warning with consequences for continued behavior. No interaction with the people involved for a specified period of time.</li>
                <li><strong>Temporary Ban:</strong> A temporary ban from any sort of interaction or public communication with the community for a specified period of time.</li>
                <li><strong>Permanent Ban:</strong> A permanent ban from any sort of public interaction within the community.</li>
              </ol>
              
              <h3>Attribution</h3>
              <p>
                This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org/version/2/0/code_of_conduct.html" target="_blank" rel="noopener noreferrer">Contributor Covenant</a>, version 2.0.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Legal;
