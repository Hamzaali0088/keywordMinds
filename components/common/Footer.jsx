import React from 'react'

export default function Footer() {
    return (
        <footer className="relative overflow-hidden h-[500px]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/st-images/footer.jpg')"
                }}
            >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Blue gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#08112D]  to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#08112D]  to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#08112D]  to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container flex flex-col mx-auto my-auto px-4 py-16 h-full">
                <div className="text-center text-white h-fit my-auto">
                    {/* Product Name */}
                    <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                        THE KEYWORD RANK TRACKER
                    </h3>

                    {/* Main Headline */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                        For smart, passionate SEOs that drive the industry forward
                    </h2>

                    {/* CTA Button */}
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 mb-4">
                        Start Tracking
                    </button>

                    {/* Offer Text */}
                    <p className="text-sm opacity-90">
                        14-day free trial
                    </p>
                </div>
            </div>
        </footer>
    )
}