"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, BarChart, Briefcase, CheckCircle, Coins, DollarSign, Linkedin, Mail, MessageCircle, PieChart, Shield, TrendingUp, Twitter, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Crypto", id: "crypto" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="FinanceAdvisor"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Your Trusted Financial & Crypto Advisor"
          description="Navigate the complex world of traditional investments and cryptocurrency with expert guidance tailored to your financial goals"
          tag="Professional Advisory"
          tagIcon={TrendingUp}
          buttons={[
            { text: "Schedule Consultation", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763390789218-miydtvma.jpg"
          imageAlt="Professional financial advisor"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About My Services"
          description="With over 15 years of experience in financial planning and 5 years specializing in cryptocurrency investments, I help clients build diversified portfolios that balance traditional assets with digital currencies."
          tag="Professional Advisory"
          tagIcon={Shield}
          buttons={[
            { text: "View Credentials", href: "credentials" },
            { text: "Schedule Consultation", href: "contact" }
          ]}
          bulletPoints={[
            {
              title: "Traditional Investment Expertise",
              description: "15+ years of experience managing stocks, bonds, mutual funds, and retirement accounts with proven track record",
              icon: TrendingUp
            },
            {
              title: "Cryptocurrency Specialization",
              description: "5 years focused on Bitcoin, Ethereum, and altcoin investment strategies with risk management protocols",
              icon: Coins
            },
            {
              title: "Holistic Portfolio Approach",
              description: "Balanced integration of traditional and digital assets tailored to your risk tolerance and financial goals",
              icon: PieChart
            },
            {
              title: "Ongoing Support & Education",
              description: "Continuous market analysis, portfolio monitoring, and client education to ensure informed investment decisions",
              icon: CheckCircle
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763390789218-miydtvma.jpg"
          imageAlt="Financial advisor consulting with client"
          imagePosition="right"
          textboxLayout="default"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardFour
          title="Financial Services"
          description="Comprehensive financial planning and investment management services"
          tag="Services"
          tagIcon={Briefcase}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Investment Planning",
              description: "Strategic portfolio construction with traditional assets including stocks, bonds, and mutual funds tailored to your risk tolerance and timeline",
              icon: TrendingUp
            },
            {
              title: "Cryptocurrency Advisory",
              description: "Expert guidance on Bitcoin, Ethereum, and altcoin investments with risk management strategies for digital asset allocation",
              icon: Coins
            },
            {
              title: "Portfolio Management",
              description: "Active monitoring and rebalancing of your investment portfolio to optimize performance and manage risk exposure",
              icon: PieChart
            },
            {
              title: "Retirement Planning",
              description: "Comprehensive retirement strategies incorporating 401k optimization, IRA planning, and crypto retirement accounts",
              icon: Shield
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Track Record"
          description="Proven results in financial advisory and crypto investments"
          tag="Performance"
          tagIcon={BarChart}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          metrics={[
            { id: "1", icon: Users, title: "Clients Served", value: "500+" },
            { id: "2", icon: DollarSign, title: "Assets Managed", value: "$50M+" },
            { id: "3", icon: TrendingUp, title: "Average Return", value: "12.5%" },
            { id: "4", icon: Award, title: "Years Experience", value: "15+" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Client Success Stories"
          description="What my clients say about their financial journey"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="opacity"
          gridVariant="uniform-all-items-equal"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Owner",
              company: "Tech Startup",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              content: "Working with this advisor transformed my investment strategy. The balanced approach between traditional stocks and crypto helped me achieve a 25% portfolio growth while managing risk effectively."
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Software Engineer",
              company: "Fortune 500",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              content: "The cryptocurrency guidance was exactly what I needed. My advisor helped me navigate the volatile crypto market while building a solid foundation with traditional investments."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "Agency",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              content: "Excellent retirement planning advice that incorporated both conventional 401k optimization and forward-thinking crypto strategies. I feel confident about my financial future."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Entrepreneur",
              company: "E-commerce",
              rating: 5,
              imageSrc: "/placeholders/placeholder1.webp",
              content: "The ongoing portfolio monitoring and market analysis reports keep me informed and confident in my investment decisions. Professional service with proven results."
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Common questions about financial advisory and crypto investments"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How do you approach cryptocurrency investments?",
              content: "I recommend a balanced approach with crypto representing 5-15% of total portfolio, focusing on established coins like Bitcoin and Ethereum while managing volatility through dollar-cost averaging."
            },
            {
              id: "2",
              title: "What are your fees for financial advisory services?",
              content: "My fee structure is transparent with options for hourly consultation ($200/hour), project-based planning ($1,500-5,000), or ongoing management (1% annually on assets under management)."
            },
            {
              id: "3",
              title: "Do you provide tax guidance for crypto investments?",
              content: "Yes, I work with qualified tax professionals to help clients understand crypto tax implications, including capital gains reporting, staking rewards, and tax-loss harvesting strategies."
            },
            {
              id: "4",
              title: "How often do we review and adjust portfolios?",
              content: "We conduct quarterly portfolio reviews with rebalancing as needed. Crypto positions may require more frequent monitoring due to volatility, which I handle proactively."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Schedule Your Consultation"
          description="Ready to take control of your financial future? Let's discuss your investment goals and create a personalized strategy."
          buttonText="Get Free Consultation"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "investmentGoals", type: "text", placeholder: "Primary Investment Goals", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your current financial situation and what you'd like to achieve...",
            rows: 6,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="FinanceAdvisor"
          copyrightText="© 2025 FinanceAdvisor. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                { label: "Investment Planning", href: "services" },
                { label: "Crypto Advisory", href: "crypto" },
                { label: "Portfolio Management", href: "portfolio" },
                { label: "Retirement Planning", href: "retirement" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Market Analysis", href: "analysis" },
                { label: "Crypto Education", href: "education" },
                { label: "Financial Blog", href: "blog" },
                { label: "Tools & Calculators", href: "tools" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Mail, href: "mailto:contact@financeadvisor.com", ariaLabel: "Email" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}