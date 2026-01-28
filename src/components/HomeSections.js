import React from "react";
import {
  FaShieldAlt,
  FaArrowRight,
  FaBookOpen,
  FaHeartbeat,
  FaHandsHelping,
  FaChartPie,
  FaCheckCircle,
} from "react-icons/fa";
import Section from "./ui/Section";
import Container from "./ui/Container";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Button from "./ui/Button";

const LegacyStrip = () => (
  <Section id="legacy" bg="teal" className="!py-6 border-y-2 border-[#c7e2e8]">
    <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <FaShieldAlt className="text-[#2c798e] text-2xl" />
        <p className="text-gray-900 font-semibold">
          Serving communities since 1988 under SHER Trust.
        </p>
      </div>
      <p className="text-gray-700 text-sm md:text-base">
        MercyBeacon International Foundation builds on this legacy to expand
        healthcare access, education continuity, and dignified family support.
      </p>
    </Container>
  </Section>
);

const SpotlightSection = () => (
  <Section id="community-protection">
    <Container>
      <SectionHeader
        eyebrow="Featured Spotlight"
        title="Public Health Protection"
        description="Addressing harmful food adulteration risks through awareness and community action."
      />
      <div className="grid md:grid-cols-2 gap-8">
        <Card border={true}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            What We Are Highlighting
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Communities deserve safe food and transparent practices. MercyBeacon
            is amplifying concerns around adulteration in honey, butter, and
            sweets, and the health impacts that follow.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#2c798e] mt-1" />
              <span>Awareness drives on food safety and prevention.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#2c798e] mt-1" />
              <span>Community action against harmful practices.</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheckCircle className="text-[#2c798e] mt-1" />
              <span>Partnerships for public health protection.</span>
            </li>
          </ul>
        </Card>

        <div className="bg-[#1f3249] text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4">How You Can Help</h3>
            <p className="mb-6 opacity-90">
              Join prevention campaigns, share verified information, and support
              households most at risk from unsafe food supplies.
            </p>
          </div>
          <div className="space-y-3">
            <Button href="#news" variant="white" className="w-full justify-between">
              <span>Read the latest field updates</span>
              <FaArrowRight />
            </Button>
            <Button href="#get-involved" variant="secondary" className="w-full justify-between bg-white text-[#2c798e] border-white hover:bg-white/90">
              <span>Partner with our community protection work</span>
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

const WhatWeDoSection = () => {
  const items = [
    {
      icon: FaBookOpen,
      title: "Quality Education",
      problem:
        "Scholarships and student support, school supply drives, teacher development, digital learning, and career guidance.",
      action:
        "We provide comprehensive educational support to ensure no child is left behind due to financial constraints.",
      outcome:
        "Keeps students enrolled, improves literacy, and prepares youth for future careers.",
      color: "blue",
    },
    {
      icon: FaHeartbeat,
      title: "Cutting-Edge Healthcare",
      problem:
        "Preventive camps, early detection, health education, diagnostics support, and advanced research.",
      action:
        "We bridge the gap in healthcare access through direct support, partnerships, and scientific research.",
      outcome:
        "Enables early diagnosis, reduces disease burden, and promotes long-term community wellness.",
      color: "teal",
    },
    {
      icon: FaHandsHelping,
      title: "Community Outreach",
      problem:
        "Vulnerable families support, emergency relief, women empowerment, and senior citizen care.",
      action:
        "We deliver dignified support to families in crisis while building long-term resilience and empowerment.",
      outcome:
        "Stabilizes households, protects the vulnerable, and fosters community strength.",
      color: "orange",
    },
  ];

  const colorMap = {
    blue: "bg-[#e6f3f6] border-[#c7e2e8]",
    teal: "bg-[#f1f7f9] border-[#c7e2e8]",
    orange: "bg-[#e6f3f6] border-[#c7e2e8]",
    green: "bg-[#f1f7f9] border-[#c7e2e8]",
  };

  return (
    <Section id="what-we-do" bg="gray">
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="Key Focus Areas"
          description="We focus on three critical pillars to drive sustainable development and community well-being."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card
              key={item.title}
              className={`${colorMap[item.color]} border-2 flex flex-col h-full`}
              hover={true}
              border={false}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white border border-gray-200 rounded-xl p-3 shadow shrink-0">
                  <item.icon className="text-2xl text-gray-900" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-700 mb-6 flex-1 italic">
                {item.problem}
              </p>

              <div className="bg-white rounded-xl p-4 border border-gray-200 mb-4">
                <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  Our Approach
                </p>
                <p className="text-gray-800 text-sm">{item.action}</p>
              </div>
              <p className="text-gray-800 font-semibold text-sm">
                Impact: {item.outcome}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const ImpactSection = () => {
  const stats = [
    { label: "Students supported", value: "5,000+", color: "text-[#2c798e]" },
    { label: "Fee cases covered", value: "2,100", color: "text-[#2c798e]" },
    { label: "Food kits delivered", value: "12,000", color: "text-[#2c798e]" },
    { label: "Medical support cases", value: "1,200", color: "text-[#2c798e]" },
    { label: "Higher education placements", value: "320", color: "text-[#2c798e]" },
  ];

  const stories = [
    {
      title: "Education continuity for a deserving student",
      situation:
        "Household instability put a promising student at risk of dropout.",
      support: "Tuition and transport support through the Education Continuity Fund.",
      outcome: "Student remained enrolled and progressed to the next grade.",
      next: "Monitoring attendance and tutoring support through volunteers.",
    },
    {
      title: "Emergency medical help during hardship",
      situation:
        "Family delayed diagnostics due to cost, risking worsening health.",
      support: "Diagnostics and medicines covered through the Medical Support Fund.",
      outcome: "Treatment started on time and recovery milestones tracked.",
      next: "Follow-up check scheduled; family connected to relief kit support.",
    },
  ];

  return (
    <Section id="impact" bg="gray">
      <Container>
        <SectionHeader
          eyebrow="Impact"
          title="Impact snapshot and stories"
          description="Verified numbers and field stories guide where support is needed most. Placeholder values shown until live data is connected."
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="text-center p-4"
              hover={false}
              border={true}
            >
              <p className={`${stat.color} text-2xl font-bold`}>{stat.value}</p>
              <p className="text-gray-700 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {stories.map((story) => (
            <Card key={story.title} className="bg-white" hover={true}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {story.title}
              </h3>
              <dl className="space-y-3 text-gray-800">
                <div>
                  <dt className="font-semibold text-sm text-[#2c798e]">Situation</dt>
                  <dd>{story.situation}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-sm text-[#2c798e]">Support provided</dt>
                  <dd>{story.support}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-sm text-[#2c798e]">Outcome</dt>
                  <dd>{story.outcome}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-sm text-[#2c798e]">Next steps</dt>
                  <dd>{story.next}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </div>


      </Container>
    </Section>
  );
};

const UpdatesSection = () => {
  const updates = [
    {
      title: "Food kit distribution field update",
      category: "Healthcare/Relief",
      summary:
        "Winter kits distributed to vulnerable households with transparent kit lists.",
      link: "#news",
    },
    {
      title: "Education sponsorship milestones",
      category: "Education",
      summary:
        "New sponsor tiers opened to keep students enrolled through the academic year.",
      link: "#programs",
    },
    {
      title: "Public health awareness on food adulteration",
      category: "Community Protection",
      summary:
        "Community sessions on spotting fake honey/butter/sweets and protecting families.",
      link: "#community-protection",
    },
  ];

  return (
    <Section id="news">
      <Container>
        <SectionHeader
          eyebrow="News & Stories"
          title="Latest updates"
          description="Recent highlights from education, healthcare, community protection, and field updates."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {updates.map((update) => (
            <Card
              key={update.title}
              className="bg-gray-50 flex flex-col h-full"
              border={true}
            >
              <span className="inline-flex w-fit px-3 py-1 text-xs font-semibold bg-[#d3e8ed] text-[#1f3249] rounded-full mb-3">
                {update.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {update.title}
              </h3>
              <p className="text-gray-700 flex-1 mb-4">{update.summary}</p>
              <Button href={update.link} variant="ghost" className="!p-0 !justify-start hover:bg-transparent hover:gap-2">
                Read more <FaArrowRight />
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const TransparencySection = () => {
  const columns = [
    {
      title: "Governance",
      items: [
        "Board/Trustees list with names and roles",
        "Advisory group (optional)",
      ],
    },
    {
      title: "Policies",
      items: [
        "Beneficiary verification policy",
        "Child protection and safeguarding",
        "Anti-fraud, ethics, and donation use policies",
      ],
    },
    {
      title: "Financials",
      items: [
        "Annual reports and audit reports (PDF uploads)",
        "Donation allocation chart (program vs admin)",
        "Legacy statement: MercyBeacon builds on SHER Trust service since 1988.",
      ],
    },
  ];

  return (
    <Section id="transparency" bg="gray">
      <Container>
        <SectionHeader
          eyebrow="Transparency"
          title="Governance, policies, and financials"
          description="Credibility is built on clarity. Publish governance, safeguarding, and financial documents to keep donors informed."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((column) => (
            <Card
              key={column.title}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaChartPie className="text-[#2c798e]" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {column.title}
                </h3>
              </div>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                {column.items.map((item) => (
                  <li key={item} className="leading-snug">{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const GetInvolvedSection = () => {
  const actions = [
    {
      title: "Donate",
      description:
        "One-time or monthly giving with transparent ‘what your donation does’ cards.",
      href: "#donate",
    },
    {
      title: "Volunteer",
      description:
        "Support education, medical camps, field logistics, or documentation efforts.",
      href: "#support",
    },
    {
      title: "Partner With Us",
      description:
        "CSR partnerships, educational institutions, healthcare partners, and community organizations.",
      href: "#get-involved",
    },
    {
      title: "Fundraise",
      description:
        "Create your own campaign or occasion-based fundraising to extend MercyBeacon’s reach.",
      href: "#donate",
    },
  ];

  return (
    <Section id="get-involved">
      <Container>
        <SectionHeader
          eyebrow="Get Involved"
          title="Ways you can help"
          description="Donate, volunteer, partner, or fundraise—every action lights another home with dignity and care."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => (
            <Card
              key={action.title}
              className="flex flex-col h-full bg-gray-50 border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {action.title}
              </h3>
              <p className="text-gray-700 flex-1 mb-4">{action.description}</p>
              <Button href={action.href} variant="ghost" className="!p-0 !justify-start hover:bg-transparent hover:gap-2">
                Take action <FaArrowRight />
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const HomeSections = () => (
  <>
    <LegacyStrip />
    <SpotlightSection />
    <WhatWeDoSection />
    <ImpactSection />
    <UpdatesSection />
    <TransparencySection />
    <GetInvolvedSection />
  </>
);

export default HomeSections;
