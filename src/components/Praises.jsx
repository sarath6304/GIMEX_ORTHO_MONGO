import React from "react";
import { Hourglass, Leaf, PawPrint, Heart } from "lucide-react";

const praises = [
    { title: "Ayurvedic Formulation", icon: Hourglass, description: "Our formulations are anchored in the time-honored principles of Ayurveda, a holistic wellness system practiced for centuries. We offer a curated selection of products that seamlessly integrate the wisdom of Ayurveda with the advancements of modern times."},
    { title: "Natural Ingredients", icon: Leaf, description: "Our products are made with natural and organic ingredients that are sustainably sourced and ethically produced. We use only natural and organic plant-based oils, herbs, and extracts to create luxurious, effective products that are truly good for you."},
    { title: "Cruelty Free", icon: PawPrint, description: "We are committed to creating products that are good for you and Our planet. All our formulations are cruelty-free, vegan, and sustainable. Free from potentially harmful ingredients like sulfates & parabens, you can trust our gentle, safe formulas for your skin."},
    { title: "Holistic Approach", icon: Heart, description: "Ayurveda is a centuries-old system of medicine that offers a holistic approach to health and well-being. It has been shown to be effective in treating a variety of health conditions and can also help to promote overall health and well-being."},
]

// export default function PraiseSection() {

//     return(
//         <section className="w-full bg-[#FDF5F5] mt-9">
//             <div className="flex flex-wrap justify-center py-10 gap-1">
//                 {praises.map((praise, index) => (
//                     <div key={index} className="w-1/4 p-4 flex flex-col items-center justify-center text-center">
//                         <div className="bg-white rounded justify-center items-center flex-row h-[450px] w-auto">
//                             <div className="w-full items-center justify-center flex">
//                                 <div className="w-[130px] h-[130px] bg-[#9E703F] rounded-full flex items-center justify-center mt-4">
//                                     <praise.icon className="w-[65px] h-[65px]  text-black mb-4 p-2" />
//                                 </div>
//                             </div>
//                             <h3 className="text-lg font-semibold text-[#9E703F]">{praise.title}</h3>
//                             <p className="text-gray-600 mt-2">{praise.description}</p>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//         </section>
//     );
// };

export default function PraiseSection() {
    // Define responsive styles
    
    const cardContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem'
    };
    
    const iconContainerStyle = {
        width: '130px',
        height: '130px',
        backgroundColor: '#9E703F',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1rem'
    };
    
    // For smaller screens, adjust icon size with media query functionality
    const getIconContainerStyle = () => {
        const width = window.innerWidth;
        if (width < 768) {
            return {
                ...iconContainerStyle,
                width: '80px',
                height: '80px'
            };
        }
        return iconContainerStyle;
    };
    
    return(
        // <section style={sectionStyle}>
        <section className="w-full bg-[#FDF5F5] mt-9 px-4 py-10">
            <div className="max-w-7xl mx-auto my-0">
                <div style={cardContainerStyle}>
                {/* <div className="gird grid-cols-[repeat(auto-fit, minmax(250px, 1fr))] gap-6"> */}
                    {praises.map((praise, index) => (
                        <div key={index}
                            className="bg-white rounded p-6 flex flex-col items-center text-center shadow">
                            <div style={getIconContainerStyle()}>
                                {/* <praise.icon style={{width: '65px', height: '65px', padding: '0.5rem'}} /> */}
                                <praise.icon className="w-[65px] h-[65px] p-2 text-white" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#9E703F] mt-4">{praise.title}</h3>
                            <p className="text-[#4B5563] mt-2 text-base">{praise.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};