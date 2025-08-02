import teamworkImage from "@/assets/teamwork-leadership.jpg";
import storytellingImage from "@/assets/storytelling-speaking.jpg";
import entrepreneurshipImage from "@/assets/entrepreneurship-financial.jpg";
import relationshipImage from "@/assets/relationship-building.jpg";
import gritImage from "@/assets/grit-hardwork.jpg";

const workshops = [
  {
    title: "Teamwork & Leadership",
    image: teamworkImage,
    description: "From following multi-step directions in PreK to succeeding in high-pressure escape rooms in middle school, students develop real collaboration skills. They learn to lead teams, solve complex problems together, and take initiative in group settings.",
    skills: ["Multi-step direction following", "Team problem solving", "Leadership development", "Group communication"]
  },
  {
    title: "Storytelling & Public Speaking",
    image: storytellingImage,
    description: "Students progress from simple show-and-tell to delivering TED talks and podcast appearances. They develop confidence, clear communication, and the ability to engage any audience with compelling stories.",
    skills: ["Confident presentation", "Story structure", "Audience engagement", "Media appearances"]
  },
  {
    title: "Entrepreneurship & Financial Literacy",
    image: entrepreneurshipImage,
    description: "Real-world business experience starts early. Students run actual businesses, manage money, create financial proposals, and learn to pitch ideas to investors. They graduate understanding how money works in the real world.",
    skills: ["Business management", "Financial planning", "Investment pitching", "Money management"]
  },
  {
    title: "Relationship Building & Socialization",
    image: relationshipImage,
    description: "From one-on-one playdates to organizing community events, students learn to build genuine connections. They develop empathy, conflict resolution skills, and the ability to work with people from all backgrounds.",
    skills: ["Conflict resolution", "Empathy development", "Community organizing", "Cross-cultural communication"]
  },
  {
    title: "Grit & Hard Work",
    image: gritImage,
    description: "Students tackle increasingly challenging projects that push their limits. From building with LEGOs to completing triathlons and solving complex puzzles, they learn that persistence pays off.",
    skills: ["Persistence through challenges", "Physical endurance", "Complex problem solving", "Goal achievement"]
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {workshops.map((workshop, index) => (
            <article 
              key={workshop.title}
              className="group bg-white rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={workshop.image} 
                  alt={`Students engaged in ${workshop.title.toLowerCase()} activities`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lifecore-navy/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {workshop.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {workshop.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-lifecore-navy mb-3">Key Skills Developed:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {workshop.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-lifecore-light-blue rounded-full mr-3 flex-shrink-0"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeCoreWorkshops;