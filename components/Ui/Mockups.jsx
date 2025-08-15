export default function Mockups({ title, headline, description, cta, visual }) {
    
    return (
      <div className="mb-24 last:mb-0 ">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:w-[45%]">
            <div className="text-sm font-semibold text-primary uppercase tracking-wide">
              {title}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary md:leading-tight leading-9">
              {headline}
            </h2>
            <p className="text-xl text-text-secondary md:leading-relaxed">
              {description}
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-primary hover:text-secondary font-medium text-lg transition-colors"
            >
              {cta}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a> 
          </div>
  
          {/* Visual Mockup */}
          <div className="relative w-full md:w-[55%]">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl px-8  pt-8 shadow-2xl">
              <div className="bg-white rounded-tr-xl rounded-tl-xl p-6 shadow-lg h-80 overflow-y-auto scrollbar-hide">
                {visual}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }