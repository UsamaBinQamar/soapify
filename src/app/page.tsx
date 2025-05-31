import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Image
                  width={32}
                  height={32}
                  src="https://ext.same-assets.com/3980874791/260646423.svg"
                  alt="CoreAI"
                  className="h-8 w-8"
                />
                <span className="text-2xl font-bold text-gray-900">CoreAI</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contacts"
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                Contacts
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex">
                Get Template
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Get started
                <Image
                  src="https://ext.same-assets.com/3980874791/1998606599.svg"
                  alt=""
                  className="ml-2 h-4 w-4"
                  width={16}
                  height={16}
                />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Update Banner */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center">
            <Button variant="outline" className="text-sm">
              Update - see what&apos;s new
              <Image
                src="https://ext.same-assets.com/3980874791/1367661487.svg"
                alt=""
                className="ml-2 h-4 w-4"
                width={16}
                height={16}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Make digital
              <br />
              business easy way
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Simplify your tasks with a cohesive network that facilitates
              seamless collaboration across all departments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Get started
                <Image
                  width={1000}
                  height={1000}
                  src="https://ext.same-assets.com/3980874791/2838098675.svg"
                  alt=""
                  className="ml-2 h-4 w-4"
                />
              </Button>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <Image
                width={1000}
                height={1000}
                src="https://ext.same-assets.com/3980874791/398790070.png"
                alt="CoreAI Dashboard"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Customer Avatars */}
            <div className="mt-12 flex flex-col items-center">
              <div className="flex -space-x-2 mb-4">
                <Image
                  width={40}
                  height={40}
                  src="https://ext.same-assets.com/3980874791/3121527605.png"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <Image
                  width={40}
                  height={40}
                  src="https://ext.same-assets.com/3980874791/2606800698.png"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <Image
                  width={40}
                  height={40}
                  src="https://ext.same-assets.com/3980874791/2543831144.png"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <Image
                  width={40}
                  height={40}
                  src="https://ext.same-assets.com/3980874791/1951174833.png"
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-purple-200">Over 1k happy users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 mb-2">Trusted by Beloved</p>
            <h2 className="text-3xl font-bold text-gray-900">
              Partners and customers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/1908002662.webp"
              alt="Google Play"
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/3620507884.png"
              alt="Netflix"
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/1728493330.png"
              alt="UC Browser"
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/1254009136.webp"
              alt="Samsung"
              className="h-8 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Enhance Your Efficiency Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-500 mb-2">Trusted by Beloved</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Enhance Your Efficiency
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make data-driven decisions with a privacy-compliant analytics
              solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Save Time by Unifying Everything in one Platform
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Leverage marketing automation to pinpoint promising leads and
                automatically notify your sales team for timely follow-ups.
                Engage and cultivate leads precisely when the timing is optimal
                to optimize results.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Daily Reporters
                    </h4>
                    <p className="text-gray-600">
                      Globally streamlining standardization processes
                      error-free.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-purple-600 rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Mobile Reporters
                    </h4>
                    <p className="text-gray-600">
                      Most receptive, optimizing your outreach efforts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                width={1000}
                height={1000}
                src="https://ext.same-assets.com/3980874791/3447258839.webp"
                alt="Analytics Dashboard"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                width={1000}
                height={1000}
                src="https://ext.same-assets.com/3980874791/3996652226.webp"
                alt="Product Management"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Generate and Supervise Your Products
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Proactively manage quality vectors within supply chains to
                enhance client-centric web services. Utilize marketing
                automation to pinpoint potential leads precisely when
                they&apos;re most receptive, thereby maximizing your
                opportunities.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Effectively manage
                    </h4>
                    <p className="text-gray-600">
                      Leveraging invested equity to enhance web-readiness
                      infrastructure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-green-600 rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Evolving metrics
                    </h4>
                    <p className="text-gray-600">
                      Utilize marketing automation to pinpoint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">
            Start your 30-day free trial
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Join over 400+ startups already growing with CoreAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
            >
              Learn more
            </Button>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Get started
              <Image
                width={1000}
                height={1000}
                src="https://ext.same-assets.com/3980874791/3959561553.svg"
                alt=""
                className="ml-2 h-4 w-4"
              />
            </Button>
          </div>
        </div>
      </section>

      {/* All-Inclusive Business Management */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-500 mb-2">Trusted by Beloved</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              All-Inclusive Business Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline your tasks using an integrated network that fosters
              smooth collaboration among all departments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Methods of Payment
              </h4>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Conversion Services for Your Customers
              </h4>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Checkout page Branding for Your Store
              </h4>
            </div>
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Methods of Payment
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Whether your team comprises 2 individuals or 200, our shared
                team inboxes ensure everyone stays aligned and informed.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">1 Site License</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Community Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Free Version Updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Starter Theme</span>
                </div>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Get started
                <Image
                  width={1000}
                  height={1000}
                  src="https://ext.same-assets.com/3980874791/3716944837.svg"
                  alt=""
                  className="ml-2 h-4 w-4"
                />
              </Button>
            </div>
            <div>
              <Image
                width={1000}
                height={1000}
                src="https://ext.same-assets.com/3980874791/2077045651.webp"
                alt="Payment Methods"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top-notch Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-500 mb-2">Why CoreAI?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top-notch Services Enhance the Value of Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether your team comprises 2 individuals or 200, our shared team
              inboxes ensure everyone stays aligned and informed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Image
                  width={1000}
                  height={1000}
                  src="https://ext.same-assets.com/3980874791/2503394466.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Automated Reports
              </h4>
              <p className="text-gray-600">
                Synergistically pursue accurate initiatives without economically
                imperatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Image
                  width={1000}
                  height={1000}
                  src="https://ext.same-assets.com/3980874791/2774674585.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Compare A/B Testing
              </h4>
              <p className="text-gray-600">
                Credibly disintermediate functional processes for team driven
                action.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Image
                  width={1000}
                  height={1000}
                  src="https://ext.same-assets.com/3980874791/3125948561.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                User Journey Flow
              </h4>
              <p className="text-gray-600">
                Quickly productize prospective value before collaborative
                benefits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Image
                  width={1000}
                  height={1000}
                  src="https://ext.same-assets.com/3980874791/2583221674.svg"
                  alt=""
                  className="w-6 h-6"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Customization
              </h4>
              <p className="text-gray-600">
                Dynamically develop ubiquitous opportunities whereas
                relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-500 mb-2">Integrations</p>
            <h2 className="text-3xl font-bold text-gray-900">
              Integrate with Your Workflow
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              A comprehensive customer service platform designed to assist you
              in managing all aspects necessary to ensure customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-8 items-center opacity-60">
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/2503394466.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/2774674585.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/3125948561.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/2583221674.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/2319548613.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/1472600647.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/1724463339.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/4269091746.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/4285606399.svg"
              alt=""
              className="h-8 mx-auto"
            />
            <Image
              width={1000}
              height={1000}
              src="https://ext.same-assets.com/3980874791/1265220235.svg"
              alt=""
              className="h-8 mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-500 mb-2">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple and Transparent
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Track essential metrics using CoreAI&apos;s user-friendly reports.
              Easily filter, export, and analyze data with just a few clicks.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-700">Monthly</span>
              <button className="bg-gray-200 rounded-full p-1 w-12 h-6 flex items-center">
                <div className="bg-white w-4 h-4 rounded-full shadow transform transition-transform"></div>
              </button>
              <span className="text-gray-700">Annual</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starter
                </h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">Free</span>
                  <span className="text-gray-500 block">per year</span>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">1 Site License</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Free Version Updates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Community Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Starter Theme</span>
                  </li>
                </ul>
                <Button className="w-full bg-gray-900 hover:bg-gray-800">
                  Get started
                  <Image
                    width={1000}
                    height={1000}
                    src="https://ext.same-assets.com/3980874791/801332402.svg"
                    alt=""
                    className="ml-2 h-4 w-4"
                  />
                </Button>
              </div>
            </div>

            {/* 3 Sites Plan */}
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white relative">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">3 Sites</h3>
                <div className="mb-6">
                  <span className="text-lg line-through opacity-75">$155</span>
                  <div>
                    <span className="text-5xl font-bold">$159</span>
                    <span className="text-blue-100 block">per year</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>3 Sites License</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Updates for 1 year</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Priority Ticket Support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Starter Theme</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  Get started
                  <Image
                    width={1000}
                    height={1000}
                    src="https://ext.same-assets.com/3980874791/2555040435.svg"
                    alt=""
                    className="ml-2 h-4 w-4"
                  />
                </Button>
              </div>
            </div>

            {/* 5 Sites Plan */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  5 Sites
                </h3>
                <div className="mb-6">
                  <span className="text-lg line-through text-gray-400">
                    $280
                  </span>
                  <div>
                    <span className="text-5xl font-bold text-gray-900">
                      $149
                    </span>
                    <span className="text-gray-500 block">per year</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8 text-left">
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">5 Site License</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Updates for 2 years</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">
                      Priority Ticket Support
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Starter Theme</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Get started
                  <Image
                    width={1000}
                    height={1000}
                    src="https://ext.same-assets.com/3980874791/2702779283.svg"
                    alt=""
                    className="ml-2 h-4 w-4"
                  />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              You get{" "}
              <Link href="#" className="text-purple-600 underline">
                1 year updates and Support
              </Link>{" "}
              from the date of purchase. We offer 14 days Money Back Guarantee
              based on{" "}
              <Link href="#" className="text-purple-600 underline">
                Refund Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-500 mb-2">Get answered</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find all the information you require about the product and
              billing. If you can&apos;t find the answer you&apos;re seeking,
              feel free to chat with our friendly team.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Is VAT included in the price?",
              "How do I get paid for the courses I sell?",
              "Can I switch plans or cancel at any time?",
              "What if I don't sell courses and just want to train?",
              "I have my own website (domain name). Can I use it?",
              "How secure is my data?",
              "I am a registered non-profit. Can I get a discount?",
            ].map((question, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6"
              >
                <button className="flex items-center justify-between w-full text-left">
                  <span className="text-lg font-semibold text-gray-900">
                    {question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            4,000+ startups growing with CoreAI
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
            >
              Learn more
            </Button>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Get started
              <Image
                width={1000}
                height={1000}
                src="https://ext.same-assets.com/3980874791/2059979464.svg"
                alt=""
                className="ml-2 h-4 w-4"
              />
            </Button>
          </div>
          <div className="space-y-2 text-purple-100">
            <p>30-day free trial</p>
            <p>Personalized onboarding</p>
            <p>Access to all features</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Image
                  width={1000}
                  height={1000}
                  src="https://ext.same-assets.com/3980874791/260646423.svg"
                  alt="CoreAI"
                  className="h-8 w-8"
                />
                <span className="text-2xl font-bold">CoreAI</span>
              </div>
              <p className="text-gray-400 mb-6">
                Simplify your tasks with a cohesive network that facilitates
                seamless collaboration across all departments.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://ext.same-assets.com/3980874791/403100032.svg"
                    alt="Twitter"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://ext.same-assets.com/3980874791/1573002659.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://ext.same-assets.com/3980874791/4162928580.svg"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://ext.same-assets.com/3980874791/2328028258.svg"
                    alt="GitHub"
                    className="w-6 h-6"
                  />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://ext.same-assets.com/3980874791/2306923860.svg"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="text-gray-400 hover:text-white"
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms-of-use"
                    className="text-gray-400 hover:text-white"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © 2025 CoreAI. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
