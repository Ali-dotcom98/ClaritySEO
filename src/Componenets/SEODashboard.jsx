import React, { useState } from 'react';
import {
  Globe,
  FileText,
  Image,
  Smartphone,
  ClipboardCheck,
  BarChart3,
  Eye,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  XCircle,
  Zap,
  Shield,
  Target,
} from 'lucide-react';

/* ---------- Small UI helpers ---------- */
const StatusIcon = ({ status }) => {
  switch (status) {
    case 'good':
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    case 'warning':
      return <AlertCircle className="w-5 h-5 text-yellow-400" />;
    case 'error':
    default:
      return <XCircle className="w-5 h-5 text-red-400" />;
  }
};

const ScoreCircle = ({ score }) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (score / 100) * circumference;
  const color =
    score >= 90 ? 'white' : score >= 70 ? 'white' : 'white';

  return (
    <div className="relative w-24 h-24">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-gray-700"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={`transition-all duration-1000 stroke-orange-500`}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-xl font-bold text-${color}`}>{score}</span>
      </div>
    </div>
  );
};

const Tooltip = ({ text, children }) => (
  <div className="group relative">
    {children}
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
    </div>
  </div>
);
  const handleonclick = ()=>{
    alert("Helo")
  }
/* ---------- Main Dashboard ---------- */
const SEODashboard = ({data}) => {
  const [iframeError, setIframeError] = useState(false);
  const [seoData, setseoData] = useState(data)
  const [block, setblock] = useState(false)

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex">
      {/* === Left column === */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="bg-[#121212] rounded-2xl border border-[#2A2A2A] p-6 shadow-xl font-outfit">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left: Icon + Title */}
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <div className="p-3 bg-blue-500/10 rounded-xl shadow-sm">
                  <BarChart3 className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-white tracking-tight">
                    SEO Audit Results
                  </h1>
                  <p className="text-sm text-gray-400">
                    Comprehensive analysis for{" "}
                    <span className="text-white font-medium">{seoData.url}</span>
                  </p>
                </div>
              </div>

              {/* Right: Score */}
              <div className="text-center">
                <ScoreCircle score={seoData?.score?.totalScore || 0} />
                <p className="text-sm text-gray-400 mt-2">Overall Score</p>
              </div>
            </div>
          </div>


          {/* --- Meta Tags --- */}
          <div className="bg-[#121212] rounded-2xl border border-[#2A2A2A] p-6 shadow-lg font-outfit">
              <SectionHeader
                Icon={FileText}
                color="purple"
                title="Meta Tags"
                tooltip="Meta tags help search engines understand your page content"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <MetaBlock
                  label="Title Tag"
                  value={seoData?.metaTags?.title}
                  ok={seoData?.metaTags?.checks?.titleLengthOK}
                  length={seoData?.metaTags?.title?.length}
                />
                <MetaBlock
                  label="Meta Description"
                  value={seoData?.metaTags?.description}
                  ok={seoData?.metaTags?.checks?.descriptionLengthOK}
                  length={seoData?.metaTags?.description?.length}
                />
                <MetaSimple
                  label="Open Graph Title"
                  value={seoData?.metaTags?.ogTitle}
                  ok={!!seoData?.metaTags?.ogTitle}
                />
                <MetaSimple
                  label="Twitter Card"
                  value={seoData?.metaTags?.twitterCard}
                  ok={!!seoData?.metaTags?.twitterCard}
                />
              </div>
            </div>


          {/* --- Headings --- */}
         <div className="bg-[#121212] rounded-2xl border border-[#2A2A2A] p-6 shadow-xl font-outfit">
  <SectionHeader
    Icon={ClipboardCheck}
    color="green"
    title="Heading Structure"
    tooltip="Proper heading hierarchy improves accessibility and SEO"
  />

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 mb-6">
    {["h1", "h2", "h3"].map((tag, i) => (
      <HeadCount
        key={i}
        tag={tag.toUpperCase()}
        count={seoData.headings.counts[tag]}
        color={["white", "white", "white"][i]}
      />
    ))}
  </div>

  <div className="space-y-2">
    <CheckRow
      text="Multiple H1 tags"
      ok={!seoData.headings.checks.multipleH1}
    />
    <CheckRow
      text="H1 tag present"
      ok={!seoData.headings.checks.missingH1}
    />
    <CheckRow
      text="Proper hierarchy"
      ok={!seoData.headings.checks.skippedLevels}
    />
  </div>
</div>



          {/* --- Performance & Mobile --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PerformanceBlock fcp={seoData.loadTime.firstContentfulPaint} />
            <MobileBlock data={seoData.mobileFriendly} />
          </div>

          {/* --- Images & Crawling --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImagesBlock data={seoData.imageAltData} />
            <CrawlBlock data={seoData.robotData} />
          </div>

          {/* --- Recommendations --- */}
          <Recommendations
            missingAlt={seoData.imageAltData.missingAlt}
            noSitemap={!seoData.robotData.sitemap.exists}
          />
        </div>
      </div>

      {/* === Right column: preview === */}
      <div className="w-96 bg-[#0A0A0A] border-x border-[#2A2A2A] flex flex-col">
        <PreviewHeader url={seoData.url} />
        <div className="flex-1 p-4">
          <div className="h-full bg-gray-900 rounded-lg border border-[#2A2A2A] overflow-hidden">
            {!iframeError ? (
              <iframe
                src={seoData.url}
                title="preview"
                className="w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts"
                onError={() => setIframeError(true)}
              />
            ) : (
              <IframeFallback url={seoData.url} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- Sub‑components ---------- */
const SectionHeader = ({ Icon, color, title, tooltip }) => {
  const colorMap = {
    purple: "bg-purple-500/20 text-purple-400",
    green: "bg-green-500/20 text-green-400",
    blue: "bg-blue-500/20 text-blue-400",
    orange: "bg-orange-500/20 text-orange-400",
    red: "bg-red-500/20 text-red-400",
    indigo: "bg-indigo-500/20 text-indigo-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
  };

  const colorClass = colorMap[color] || "bg-gray-600 text-gray-200";

  return (
    <div className="flex items-center gap-3 mb-6">
      <div className={`p-2 rounded-lg ${colorClass}`}>
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      {tooltip && (
        <Tooltip text={tooltip}>
          <span className="w-5 h-5 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-full flex items-center justify-center text-xs text-gray-300 cursor-help transition">
            ?
          </span>
        </Tooltip>
      )}
    </div>
  );
};



const MetaBlock = ({ label, value, ok, length }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <StatusIcon status={ok ? "good" : "error"} />
      <span className="font-medium text-white">{label}</span>
      <span className="text-xs text-gray-400 bg-[#0A0A0A] px-2 py-0.5 rounded-md">
        {length} chars
      </span>
    </div>
    <p className="text-sm text-gray-300 bg-[#181818] border border-[#2A2A2A] p-3 rounded-lg  shadow-sm min-h-24 line-clamp-2">
      {value|| "—"}
    </p>
  </div>
);


const MetaSimple = ({ label, value, ok }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <StatusIcon status={ok ? "good" : "error"} />
      <span className="font-medium text-white">{label}</span>
    </div>
    <p className="text-sm text-gray-300 bg-[#181818] border border-[#2A2A2A] rounded-lg p-3 shadow-sm">
      {value || "—"}
    </p>
  </div>
);


const HeadCount = ({ tag, count, color }) => {
  const colorMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400",
  };

  return (
    <div className="text-center p-4 bg-[#181818] border border-[#2A2A2A] rounded-xl shadow-sm">
      <div className={`text-3xl font-bold ${colorMap[color] || "text-white"} mb-1`}>
        {count}
      </div>
      <div className="text-sm text-gray-400">{tag} Tags</div>
    </div>
  );
};
const CheckRow = ({ text, ok }) => (
  <div className="flex items-center gap-3 p-3 bg-[#1f1f1f]  border border-[#2A2A2A] rounded-xl  shadow-sm">
    <StatusIcon status={ok ? "good" : "error"} />
    <span className="text-sm text-gray-300">
      {text}:{" "}
      <span className={ok ? "text-green-400" : "text-red-400"}>
        {ok ? "Good" : "Issue"}
      </span>
    </span>
  </div>
);


const PerformanceBlock = ({ fcp }) => (
  <div className="bg-[#181818] rounded-2xl border border-[#2A2A2A] p-6 shadow-xl font-outfit">
    <SectionHeader Icon={Zap} color="orange" title="Performance" />

    <div className="p-4 bg-[#1f1f1f] rounded-xl border border-[#2A2A2A]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-300">
          First Contentful Paint
        </span>
        <StatusIcon status={fcp < 200 ? 'good' : 'warning'} />
      </div>
      <div className="text-2xl font-bold text-orange-400">{fcp}ms</div>
      <span className="text-xs text-gray-400">
        {fcp < 200 ? 'Excellent' : 'Needs improvement'}
      </span>
    </div>
  </div>
);


const MobileBlock = ({ data }) => (
  <div className="bg-[#181818] rounded-2xl border border-[#2A2A2A] p-6 shadow-lg">
    <SectionHeader Icon={Smartphone} color="blue" title=" Mobile Friendly" />
    <div className='space-y-3'>
      <CheckRow text="Viewport meta tag" ok={data.hasViewport} />
<CheckRow text="Responsive design" ok={data.isResponsive} />
    </div>
  </div>
);

const ImagesBlock = ({ data }) => (
  
  <div className="bg-[#181818] rounded-2xl border border-[#2A2A2A] p-6 shadow-lg">
    <SectionHeader Icon={Image} color="indigo" title="Images" />
    <div  className='space-y-3'>
      <StatRow label="Total images" value={data.totalImages} />
      <StatRow label="Missing alt text" value={data.missingAlt} color="red" />
    </div>
    {
         (
        <div className='space-y-3 mt-3'>
            {
              data.missingAltImages.map((item)=>(
                <CheckRow text={item.src} ok = {false}/>
              ))
            }
        </div>
      )
    }
    <div className="space-y-2 mt-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-300">Alt text coverage</span>
        <span className="text-sm font-medium text-gray-300">
          {100 - data.percentMissing}%
        </span>
      </div>
      <div className="w-full bg-[#2A2A2A] h-3 rounded-full overflow-hidden">
  <div
  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-700"
  style={{ width: `${100 - data.percentMissing}%` }}
/>

</div>
    </div>
  </div>
);

const CrawlBlock = ({ data }) => (
  <div className="bg-[#181818] rounded-2xl border border-[#2A2A2A] p-6 shadow-lg">
    <SectionHeader Icon={Shield} color="red" title="Crawling" />
    <div className='space-y-3'>
      <CheckRow
      text={`Robots.txt (${data.robots.status})`}
      ok={data.robots.exists}
    />
    <CheckRow
      text={`XML Sitemap (${data.sitemap.status})`}
      ok={data.sitemap.exists}
    />
    </div>
  </div>
);

const Recommendations = ({ missingAlt, noSitemap }) => (
  <div className="bg-[#181818] rounded-2xl border border-[#2A2A2A] p-6 shadow-lg">
    <SectionHeader Icon={Target} color="blue" title="Recommendations" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <RecCard title="High Priority">
        {noSitemap && <li>Create XML sitemap</li>}
        {missingAlt > 0 && <li>Add alt text to {missingAlt} images</li>}
      </RecCard>
      <RecCard title="Medium Priority">
        <li>Optimize page load speed</li>
        <li>Add structured data markup</li>
      </RecCard>
    </div>
  </div>
);

const RecCard = ({ title, children }) => (
  <div className="p-4 bg-[#1f1f1f] border border-[#2A2A2A] rounded-lg">
    <h3 className="font-medium text-white mb-2">{title}</h3>
    <ul className="text-sm text-gray-300 space-y-1">{children}</ul>
  </div>
);

const StatRow = ({ label, value, color = 'white' }) => (
  <div onClick={label == "Missing alt text" ? handleonclick :"" } className="flex items-center justify-between p-3 bg-[#1f1f1f]  border border-[#2A2A2A]  rounded-lg">
    <span className="text-sm text-gray-300">{label}</span>
    <span className={`font-semibold text-${color}`}>{value}</span>
  </div>
);

const PreviewHeader = ({ url }) => (
  <div className="p-4 border-b border-[#2A2A2A] bg-gray-750 flex-shrink-0">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-2">
        <Eye className="w-5 h-5 text-orange-500" />
        <h3 className="font-semibold text-white">Live Preview</h3>
      </div>
      <button
        onClick={() => window.open(url, '_blank')}
        className="flex items-center space-x-1 px-3 py-1 bg-[#2A2A2A] text-white text-sm rounded-lg"
      >
        <ExternalLink className="w-4 h-4 text-orange-500" />
        <span>Open</span>
      </button>
    </div>
    <div className="text-xs text-gray-400 font-mono  bg-[#181818] border border-[#2A2A2A]  p-2 rounded truncate">
      {url}
    </div>
  </div>
);

const IframeFallback = ({ url }) => (
  <div className="h-full flex flex-col items-center justify-center text-center p-6">
    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
      <Globe className="w-8 h-8 text-gray-400" />
    </div>
    <h3 className="text-lg font-medium text-white mb-2">Preview Unavailable</h3>
    <p className="text-sm text-gray-400 mb-4">
      Unable to load preview for this website. This might be due to security
      restrictions.
    </p>
    <button
      onClick={() => window.open(url, '_blank')}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg"
    >
      <ExternalLink className="w-4 h-4" />
      <span>Visit Website</span>
    </button>
  </div>
);

export default SEODashboard;
