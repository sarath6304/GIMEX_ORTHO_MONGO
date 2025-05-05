

// // import React, { useState } from 'react'

// // export default function AboutUsPage() {
// //   const [activeSection, setActiveSection] = useState('vision')

// //   const sections = [
// //     { id: 'vision', label: 'Our Vision' },
// //     { id: 'mission', label: 'Our Mission' },
// //     { id: 'team', label: 'Meet the Team' },
// //     { id: 'values', label: 'Our Core Values' },
// //     { id: 'journey', label: 'Our Journey' },
// //   ]

// //   return (
// //     <div className="min-h-screen bg-[#212121] text-white flex">
// //       {/* Sidebar Navigation */}
// //       <aside className="w-1/4 p-6 border-r border-gray-700">
// //         <h2 className="text-2xl font-bold mb-6">About Us</h2>
// //         <nav className="space-y-4">
// //           {sections.map((section) => (
// //             <button
// //               key={section.id}
// //               onClick={() => setActiveSection(section.id)}
// //               className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
// //                 activeSection === section.id ? 'bg-yellow-200 text-black' : 'hover:bg-gray-700'
// //               }`}
// //             >
// //               {section.label}
// //             </button>
// //           ))}
// //         </nav>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="w-3/4 p-10 space-y-12">
// //         {activeSection === 'vision' && (
// //           <section>
// //             <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
// //             <p className="text-lg leading-7 text-gray-300">
// //               At Zymo Accessories, our vision is to revolutionize the driving experience by offering cutting-edge, reliable, and aesthetic vehicle accessories that not only enhance functionality but also redefine style. We believe every vehicle should reflect its owner’s personality.
// //             </p>
// //           </section>
// //         )}

// //         {activeSection === 'mission' && (
// //           <section>
// //             <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
// //             <p className="text-lg leading-7 text-gray-300">
// //               Our mission is to provide the highest quality vehicle accessories that merge innovation with affordability. We strive to meet the evolving needs of automobile enthusiasts by ensuring every product we offer is durable, stylish, and sustainable. Customer satisfaction remains at the core of our efforts.
// //             </p>
// //           </section>
// //         )}

// //         {activeSection === 'team' && (
// //           <section>
// //             <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
// //             <p className="text-lg leading-7 text-gray-300">
// //               Our dedicated team comprises passionate engineers, designers, and automobile enthusiasts working together to curate the finest vehicle accessories. Each member brings unique expertise to ensure excellence and innovation in every product we develop.
// //             </p>
// //           </section>
// //         )}

// //         {activeSection === 'values' && (
// //           <section>
// //             <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
// //             <ul className="list-disc pl-6 text-lg leading-7 text-gray-300 space-y-2">
// //               <li>Customer-Centric Approach: Always prioritizing user satisfaction.</li>
// //               <li>Innovation & Quality: Offering products that are advanced and reliable.</li>
// //               <li>Integrity: Transparent dealings and ethical practices.</li>
// //               <li>Sustainability: Ensuring environmentally friendly solutions.</li>
// //             </ul>
// //           </section>
// //         )}

// //         {activeSection === 'journey' && (
// //           <section>
// //             <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
// //             <p className="text-lg leading-7 text-gray-300">
// //               From a small startup founded by car enthusiasts to a leading name in the vehicle accessories market, our journey has been marked by relentless innovation, commitment to quality, and unwavering customer trust. We continue to grow and adapt to the latest trends in automobile accessories.
// //             </p>
// //           </section>
// //         )}
// //       </main>
// //     </div>
// //   )
// // }







// import React, { useState } from 'react'

// export default function AboutUsPage() {
//   const [activeSection, setActiveSection] = useState('vision')
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const sections = [
//     { id: 'vision', label: 'Our Vision' },
//     { id: 'mission', label: 'Our Mission' },
//     { id: 'team', label: 'Meet the Team' },
//     { id: 'values', label: 'Our Core Values' },
//     { id: 'journey', label: 'Our Journey' },
//   ]

//   return (
//     <div className="min-h-screen bg-[#212121] text-white flex flex-col md:flex-row overflow-x-hidden">
//       {/* Sidebar for medium & above */}
//       <aside className="hidden md:block md:w-1/4 p-6 border-r border-gray-700">
//         <h2 className="text-2xl font-bold mb-6">About Us</h2>
//         <nav className="space-y-4">
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
//                 activeSection === section.id
//                   ? 'bg-yellow-200 text-black'
//                   : 'hover:bg-gray-700'
//               }`}
//             >
//               {section.label}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* Mobile Nav Dropdown */}
//       <div className="md:w-full px-4 pt-6">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="w-full bg-yellow-200 text-black py-2 px-4 rounded-md font-semibold"
//         >
//           {sections.find((s) => s.id === activeSection)?.label || 'Select Section'}
//         </button>

//         {isMenuOpen && (
//           <div className="mt-2 bg-[#2c2c2c] rounded-md shadow-md">
//             {sections.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => {
//                   setActiveSection(section.id)
//                   setIsMenuOpen(false)
//                 }}
//                 className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
//                   activeSection === section.id
//                     ? 'bg-yellow-200 text-black'
//                     : 'hover:bg-gray-700'
//                 }`}
//               >
//                 {section.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <main className="w-full md:w-3/4 p-6 md:p-10 space-y-12">
//         {activeSection === 'vision' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
//             <p className="text-lg leading-7 text-gray-300">
//               At Zymo Accessories, our vision is to revolutionize the driving experience by offering cutting-edge, reliable, and aesthetic vehicle accessories that not only enhance functionality but also redefine style. We believe every vehicle should reflect its owner’s personality.
//             </p>
//           </section>
//         )}

//         {activeSection === 'mission' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
//             <p className="text-lg leading-7 text-gray-300">
//               Our mission is to provide the highest quality vehicle accessories that merge innovation with affordability. We strive to meet the evolving needs of automobile enthusiasts by ensuring every product we offer is durable, stylish, and sustainable. Customer satisfaction remains at the core of our efforts.
//             </p>
//           </section>
//         )}

//         {activeSection === 'team' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
//             <p className="text-lg leading-7 text-gray-300">
//               Our dedicated team comprises passionate engineers, designers, and automobile enthusiasts working together to curate the finest vehicle accessories. Each member brings unique expertise to ensure excellence and innovation in every product we develop.
//             </p>
//           </section>
//         )}

//         {activeSection === 'values' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
//             <ul className="list-disc pl-6 text-lg leading-7 text-gray-300 space-y-2">
//               <li>Customer-Centric Approach: Always prioritizing user satisfaction.</li>
//               <li>Innovation & Quality: Offering products that are advanced and reliable.</li>
//               <li>Integrity: Transparent dealings and ethical practices.</li>
//               <li>Sustainability: Ensuring environmentally friendly solutions.</li>
//             </ul>
//           </section>
//         )}

//         {activeSection === 'journey' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
//             <p className="text-lg leading-7 text-gray-300">
//               From a small startup founded by car enthusiasts to a leading name in the vehicle accessories market, our journey has been marked by relentless innovation, commitment to quality, and unwavering customer trust. We continue to grow and adapt to the latest trends in automobile accessories.
//             </p>
//           </section>
//         )}
//       </main>
//     </div>
//   )
// }





import React, { useState } from 'react'
import { Menu, ChevronDown, X } from 'lucide-react' // or use Unicode chars if you don’t use Lucide

export default function AboutUsPage() {
  const [activeSection, setActiveSection] = useState('vision')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'vision', label: 'Our Vision' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'team', label: 'Meet the Team' },
    { id: 'values', label: 'Our Core Values' },
    { id: 'journey', label: 'Our Journey' },
  ]

  return (
    <div className="min-h-screen bg-[#212121] text-white flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar for all screen sizes, but collapsible */}
      <aside className={`${isMenuOpen ? 'block' : 'hidden'} md:block md:w-1/4 p-6 border-r border-gray-700 bg-[#212121]`}>
        <h2 className="text-2xl font-bold mb-6">About Us</h2>
        <nav className="space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id)
                setIsMenuOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                activeSection === section.id
                  ? 'bg-yellow-200 text-black'
                  : 'hover:bg-gray-700'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Toggle Button */}
      <div className="md:hidden p-2 mt-8">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 bg-yellow-200 text-black py-2 px-4 rounded-md font-semibold"
        >
          {isMenuOpen ? (
            <>
              <X size={20} />
              Close Menu
            </>
          ) : (
            <>
              <ChevronDown size={20} /> About Us
              
            </>
          )}
        </button>
      </div>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 md:p-10 space-y-12">
        {activeSection === 'vision' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg leading-7 text-gray-300">
              At Zymo Accessories, our vision is to revolutionize the driving experience by offering cutting-edge, reliable, and aesthetic vehicle accessories that not only enhance functionality but also redefine style. We believe every vehicle should reflect its owner’s personality.
            </p>
          </section>
        )}

        {activeSection === 'mission' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg leading-7 text-gray-300">
              Our mission is to provide the highest quality vehicle accessories that merge innovation with affordability. We strive to meet the evolving needs of automobile enthusiasts by ensuring every product we offer is durable, stylish, and sustainable. Customer satisfaction remains at the core of our efforts.
            </p>
          </section>
        )}

        {activeSection === 'team' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
            <p className="text-lg leading-7 text-gray-300">
              Our dedicated team comprises passionate engineers, designers, and automobile enthusiasts working together to curate the finest vehicle accessories. Each member brings unique expertise to ensure excellence and innovation in every product we develop.
            </p>
          </section>
        )}

        {activeSection === 'values' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
            <ul className="list-disc pl-6 text-lg leading-7 text-gray-300 space-y-2">
              <li>Customer-Centric Approach: Always prioritizing user satisfaction.</li>
              <li>Innovation & Quality: Offering products that are advanced and reliable.</li>
              <li>Integrity: Transparent dealings and ethical practices.</li>
              <li>Sustainability: Ensuring environmentally friendly solutions.</li>
            </ul>
          </section>
        )}

        {activeSection === 'journey' && (
          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
            <p className="text-lg leading-7 text-gray-300">
              From a small startup founded by car enthusiasts to a leading name in the vehicle accessories market, our journey has been marked by relentless innovation, commitment to quality, and unwavering customer trust. We continue to grow and adapt to the latest trends in automobile accessories.
            </p>
          </section>
        )}
      </main>
    </div>
  )
}

// import React, { useState } from 'react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// export default function AboutUsPage() {
//   const [activeSection, setActiveSection] = useState('vision')
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const sections = [
//     { id: 'vision', label: 'Our Vision' },
//     { id: 'mission', label: 'Our Mission' },
//     { id: 'team', label: 'Meet the Team' },
//     { id: 'values', label: 'Our Core Values' },
//     { id: 'journey', label: 'Our Journey' },
//   ]

//   return (
//     <div className="min-h-screen mt-8 bg-[#212121] text-white flex flex-col md:flex-row overflow-x-hidden">
      
//       {/* Sidebar for medium & above */}
//       <aside className="md:block md:w-1/4 p-6 border-r border-gray-700">
//         <h2 className="text-2xl font-bold mb-6">About Us</h2>
//         <nav className="space-y-4">
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
//                 activeSection === section.id
//                   ? 'bg-yellow-200 text-black'
//                   : 'hover:bg-gray-700'
//               }`}
//             >
//               {section.label}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       {/* Mobile Nav Dropdown */}
//       <div className="px-4 pt-6">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="flex items-center justify-between w-full bg-yellow-200 text-black py-2 px-4 rounded-md font-semibold"
//         >
//           <span>{sections.find((s) => s.id === activeSection)?.label || 'Select Section'}</span>
//           {isMenuOpen ? (
//             <XMarkIcon className="w-5 h-5" />
//           ) : (
//             <Bars3Icon className="w-5 h-5" />
//           )}
//         </button>

//         {isMenuOpen && (
//           <div className="mt-2 bg-[#2c2c2c] rounded-md shadow-md">
//             {sections.map((section) => (
//               <button
//                 key={section.id}
//                 onClick={() => {
//                   setActiveSection(section.id)
//                   setIsMenuOpen(false)
//                 }}
//                 className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
//                   activeSection === section.id
//                     ? 'bg-yellow-200 text-black'
//                     : 'hover:bg-gray-700'
//                 }`}
//               >
//                 {section.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Main Content */}
//       <main className="w-full md:w-3/4 p-6 md:p-10 space-y-12">
//         {activeSection === 'vision' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
//             <p className="text-lg leading-7 text-gray-300">
//               At Zymo Accessories, our vision is to revolutionize the driving experience by offering cutting-edge, reliable, and aesthetic vehicle accessories that not only enhance functionality but also redefine style. We believe every vehicle should reflect its owner’s personality.
//             </p>
//           </section>
//         )}

//         {activeSection === 'mission' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
//             <p className="text-lg leading-7 text-gray-300">
//               Our mission is to provide the highest quality vehicle accessories that merge innovation with affordability. We strive to meet the evolving needs of automobile enthusiasts by ensuring every product we offer is durable, stylish, and sustainable. Customer satisfaction remains at the core of our efforts.
//             </p>
//           </section>
//         )}

//         {activeSection === 'team' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
//             <p className="text-lg leading-7 text-gray-300">
//               Our dedicated team comprises passionate engineers, designers, and automobile enthusiasts working together to curate the finest vehicle accessories. Each member brings unique expertise to ensure excellence and innovation in every product we develop.
//             </p>
//           </section>
//         )}

//         {activeSection === 'values' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
//             <ul className="list-disc pl-6 text-lg leading-7 text-gray-300 space-y-2">
//               <li>Customer-Centric Approach: Always prioritizing user satisfaction.</li>
//               <li>Innovation & Quality: Offering products that are advanced and reliable.</li>
//               <li>Integrity: Transparent dealings and ethical practices.</li>
//               <li>Sustainability: Ensuring environmentally friendly solutions.</li>
//             </ul>
//           </section>
//         )}

//         {activeSection === 'journey' && (
//           <section>
//             <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
//             <p className="text-lg leading-7 text-gray-300">
//               From a small startup founded by car enthusiasts to a leading name in the vehicle accessories market, our journey has been marked by relentless innovation, commitment to quality, and unwavering customer trust. We continue to grow and adapt to the latest trends in automobile accessories.
//             </p>
//           </section>
//         )}
//       </main>
//     </div>
//   )
// }






