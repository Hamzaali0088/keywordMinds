import React from 'react'
import Mockups from '../Ui/Mockups'
import Container from '../common/Container'

export default function SeoTeams() {
    const sections = [
        {
          title: "TEAM COLLABORATION",
          headline: "Work together seamlessly across your SEO team",
          description: "Share keyword rankings, assign tasks, and track progress with your entire SEO team. Real-time updates ensure everyone stays on the same page and can contribute to your clients' success.",
          cta: "Explore Team Features >",
          visual: "team-collaboration"
        },
        {
          title: "PROJECT MANAGEMENT",
          headline: "Organize and track multiple client projects",
          description: "Manage multiple client campaigns in one place. Set goals, track progress, and generate reports for each client while keeping your team organized and focused on results.",
          cta: "Learn about Project Management >",
          visual: "project-management"
        },
        {
          title: "PERFORMANCE ANALYTICS",
          headline: "Get insights that drive team decisions",
          description: "Advanced analytics help your team understand what's working and what needs improvement. Share insights with clients and make data-driven decisions to improve rankings.",
          cta: "View Analytics Dashboard >",
          visual: "performance-analytics"
        }
    ]
  return (
    <Container className='flex flex-col gap-10 py-20 '>
        {sections.map((section, index) => (
            <Mockups key={index} {...section} visual={
            (() => {
              switch (section.visual) {
                case "team-collaboration":
                  return <TeamCollaborationMockup />
                case "project-management":
                  return <ProjectManagementMockup />
                case "performance-analytics":
                  return <PerformanceAnalyticsMockup />
                default:
                  return null
            }
        })()
        } />
        ))}
    </Container>
  )
}

const TeamCollaborationMockup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const mockupRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => {
      if (mockupRef.current) {
        observer.unobserve(mockupRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-4" ref={mockupRef}>
      {/* Team Header */}
      <div className={`flex items-center space-x-3 ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
          👥
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Team Collaboration</h3>
          <p className="text-xs text-gray-500">Real-time team updates</p>
        </div>
        <div className="ml-auto px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
          LIVE
        </div>
      </div>

      {/* Team Members */}
      <div className={`space-y-3 ${isVisible ? 'animate-slide-in' : ''}`}>
        {[
          { name: "Sarah Johnson", role: "SEO Manager", status: "online", lastActivity: "Updated rankings 2m ago" },
          { name: "Mike Chen", role: "Content Specialist", status: "online", lastActivity: "Added new keywords 5m ago" },
          { name: "Lisa Rodriguez", role: "Technical SEO", status: "away", lastActivity: "Fixed crawl issues 15m ago" },
          { name: "David Kim", role: "Link Builder", status: "online", lastActivity: "Secured 3 new backlinks 1h ago" }
        ].map((member, i) => (
          <div key={i} className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg ${isVisible ? 'animate-fade-in-up' : ''}`}
               style={{ animationDelay: isVisible ? `${i * 0.1}s` : '0s' }}>
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                member.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
              }`}></div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800">{member.name}</div>
              <div className="text-xs text-gray-600">{member.role} • {member.lastActivity}</div>
            </div>
            <div className="text-xs text-gray-500">
              {member.status === 'online' ? '🟢' : '🟡'}
            </div>
          </div>
        ))}
      </div>

      {/* Collaboration Stats */}
      <div className={`bg-purple-50 border border-purple-200 rounded-lg p-4 ${isVisible ? 'animate-bounce-in' : ''}`}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-purple-800">Team Activity</h4>
            <p className="text-sm text-purple-600">4 team members active today</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-800">12</div>
            <div className="text-xs text-purple-600">Updates today</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

const ProjectManagementMockup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const mockupRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => {
      if (mockupRef.current) {
        observer.unobserve(mockupRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-4" ref={mockupRef}>
      {/* Project Header */}
      <div className={`flex items-center space-x-3 ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
          📊
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Project Management</h3>
          <p className="text-xs text-gray-500">Organize client campaigns</p>
        </div>
        <div className="ml-auto px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
          ACTIVE
        </div>
      </div>

      {/* Projects */}
      <div className={`space-y-3 ${isVisible ? 'animate-slide-in' : ''}`}>
        {[
          { name: "TechCorp SEO Campaign", client: "TechCorp Inc.", progress: 75, status: "In Progress", keywords: 150 },
          { name: "Local Restaurant SEO", client: "DineWell Restaurant", progress: 90, status: "Near Completion", keywords: 50 },
          { name: "E-commerce Optimization", client: "ShopSmart Store", progress: 45, status: "In Progress", keywords: 200 },
          { name: "Law Firm Local SEO", client: "Legal Associates", progress: 30, status: "Starting", keywords: 75 }
        ].map((project, i) => (
          <div key={i} className={`p-4 bg-gray-50 rounded-lg ${isVisible ? 'animate-fade-in-up' : ''}`}
               style={{ animationDelay: isVisible ? `${i * 0.1}s` : '0s' }}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-800">{project.name}</h4>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                project.status === 'Near Completion' ? 'bg-green-100 text-green-700' :
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {project.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{project.client}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`h-2 rounded-full ${
                  project.progress >= 90 ? 'bg-green-500' :
                  project.progress >= 60 ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`} style={{ width: `${project.progress}%` }}></div>
              </div>
              <div className="text-xs text-gray-500">{project.keywords} keywords tracked</div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Summary */}
      <div className={`bg-blue-50 border border-blue-200 rounded-lg p-4 ${isVisible ? 'animate-bounce-in' : ''}`}>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-blue-800">Campaign Overview</h4>
            <p className="text-sm text-blue-600">4 active client campaigns</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-800">475</div>
            <div className="text-xs text-blue-600">Total keywords</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out both;
        }
      `}</style>
    </div>
  );
};

const PerformanceAnalyticsMockup = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const mockupRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => {
      if (mockupRef.current) {
        observer.unobserve(mockupRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-4" ref={mockupRef}>
      {/* Analytics Header */}
      <div className={`flex items-center space-x-3 ${isVisible ? 'animate-fade-in' : ''}`}>
        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
          📈
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Performance Analytics</h3>
          <p className="text-xs text-gray-500">Data-driven insights</p>
        </div>
        <div className="ml-auto px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
          LIVE
        </div>
      </div>

      {/* Analytics Cards */}
      <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-slide-in' : ''}`}>
        {[
          { title: "Average Position", value: "8.2", change: "+2.1", trend: "up" },
          { title: "Top 10 Keywords", value: "45", change: "+12", trend: "up" },
          { title: "Organic Traffic", value: "12.5K", change: "+18%", trend: "up" },
          { title: "Click-through Rate", value: "3.2%", change: "-0.5%", trend: "down" }
        ].map((metric, i) => (
          <div key={i} className={`p-4 bg-gray-50 rounded-lg ${isVisible ? 'animate-fade-in-up' : ''}`}
               style={{ animationDelay: isVisible ? `${i * 0.1}s` : '0s' }}>
            <div className="text-sm text-gray-600 mb-1">{metric.title}</div>
            <div className="text-2xl font-bold text-gray-800 mb-1">{metric.value}</div>
            <div className={`flex items-center text-sm ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              <span className="mr-1">{metric.trend === 'up' ? '↗' : '↘'}</span>
              {metric.change}
            </div>
          </div>
        ))}
      </div>

      {/* Keyword Performance Chart */}
      <div className={`bg-gray-50 rounded-lg p-4 ${isVisible ? 'animate-fade-in-up' : ''}`}>
        <h4 className="font-medium text-gray-800 mb-3">Top Performing Keywords</h4>
        <div className="space-y-3">
          {[
            { keyword: "best seo agency", position: 3, traffic: "2.1K", change: "+5" },
            { keyword: "seo services near me", position: 7, traffic: "1.8K", change: "+2" },
            { keyword: "digital marketing company", position: 12, traffic: "1.2K", change: "+8" },
            { keyword: "local seo expert", position: 5, traffic: "950", change: "+3" }
          ].map((kw, i) => (
            <div key={i} className="flex items-center justify-between p-2 bg-white rounded">
              <div className="flex-1">
                <div className="font-medium text-gray-800">{kw.keyword}</div>
                <div className="text-sm text-gray-600">{kw.traffic} monthly visits</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-800">#{kw.position}</div>
                <div className="text-sm text-green-600">+{kw.change}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Summary */}
      <div className={`bg-green-50 border border-green-200 rounded-lg p-4 ${isVisible ? 'animate-bounce-in' : ''}`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-green-800">Performance Insights</h4>
            <p className="text-sm text-green-600">15 keywords improved this week</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          50% { opacity: 1; transform: scale(1.05) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
        
        .animate-slide-in {
          animation: slide-in 0.8s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
        
        .animate-bounce-in {
          animation: bounce-in 1s ease-out both;
        }
      `}</style>
    </div>
  );
}; 