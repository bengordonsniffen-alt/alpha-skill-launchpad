import teamworkImage from "@/assets/teamwork-leadership.jpg";
import storytellingImage from "@/assets/storytelling-speaking.jpg";
import entrepreneurshipImage from "@/assets/entrepreneurship-financial.jpg";
import relationshipImage from "@/assets/relationship-building.jpg";
import gritImage from "@/assets/grit-hardwork.jpg";

const workshops = [
  {
    title: "Teamwork & Leadership",
    image: teamworkImage,
    description: [
      "Follow multi-step directions from PreK through middle school",
      "Succeed in high-pressure escape rooms and team challenges",
      "Lead teams and solve complex problems together",
      "Take initiative in group settings"
    ]
  },
  {
    title: "Storytelling & Public Speaking",
    image: storytellingImage,
    description: [
      "Progress from simple show-and-tell to TED talks",
      "Make podcast appearances and media presentations",
      "Develop confidence and clear communication",
      "Engage any audience with compelling stories"
    ]
  },
  {
    title: "Entrepreneurship & Financial Literacy",
    image: entrepreneurshipImage,
    description: [
      "Run actual businesses and manage real money",
      "Create financial proposals and pitch to investors",
      "Gain real-world business experience early",
      "Understand how money works in the real world"
    ]
  },
  {
    title: "Relationship Building & Socialization",
    image: relationshipImage,
    description: [
      "Build genuine connections from playdates to community events",
      "Develop empathy and conflict resolution skills",
      "Work effectively with people from all backgrounds",
      "Organize and coordinate group activities"
    ]
  },
  {
    title: "Grit & Hard Work",
    image: gritImage,
    description: [
      "Tackle increasingly challenging projects",
      "Build with LEGOs to completing triathlons",
      "Solve complex puzzles that push limits",
      "Learn that persistence always pays off"
    ]
  }
];

const LifeCoreWorkshops = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lifecore-navy mb-4">
            Five Essential Life Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These interconnected skills develop progressively from PreK through 12th grade. 
            Students master each through direct instruction, consistent practice, and real-world application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {workshops.map((workshop, index) => (
            <article 
              key={workshop.title}
              className={`group bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden ${
                index === 3 ? 'lg:col-start-2' : ''
              } ${index === 4 ? 'lg:col-start-3' : ''} ${
                index < 3 ? 'lg:col-span-1' : 'lg:col-span-1'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={workshop.image} 
                  alt={`Students engaged in ${workshop.title.toLowerCase()} activities`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lifecore-navy/60 to-transparent"></div>
                <h3 className="absolute bottom-3 left-3 text-xl font-bold text-white">
                  {workshop.title}
                </h3>
              </div>
              
              <div className="p-5">
                <ul className="mb-6 space-y-2">
                  {workshop.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start text-gray-700">
                      <div className="w-1.5 h-1.5 bg-lifecore-light-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeCoreWorkshops;