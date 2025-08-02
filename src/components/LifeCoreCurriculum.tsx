const curriculumData = {
  "PreK": {
    "Teamwork/Leadership": [
      "Follow multi-step directions as part of a team (Magic Pets)",
      "Help my parents (Won't you be my Neighbor)",
      "Put on a play using AI (Frog and Toad are Friends)"
    ],
    "Storytelling/Public Speaking": [],
    "Entrepreneurship/Financial literacy": [],
    "Relationship Building/Socialization": [],
    "Grit/Hard Work": [
      "Fail 20 times without giving up (building LEGO 100-500 pieces)"
    ]
  },
  "K-1": {
    "Teamwork/Leadership": [
      "Join a game and play it fairly (Better Together)"
    ],
    "Storytelling/Public Speaking": [
      "Put on a theatrical production for my family (Curtain Call)",
      "Tell about news live in a school (Alpha News)"
    ],
    "Entrepreneurship/Financial literacy": [
      "World changers: I can donate my Alphas/raise money to give a person a lifetime supply of water"
    ],
    "Relationship Building/Socialization": [
      "Set up my own play date"
    ],
    "Grit/Hard Work": [
      "Ride a bike for 5 miles without stopping",
      "Climb a 40 foot rock wall",
      "Complete a 100 piece puzzle",
      "Swim in the deep end"
    ]
  },
  "2-3": {
    "Teamwork/Leadership": [
      "Succeed in a high pressure situation like an escape room while using 90% uplifting language (T2F GRIT)",
      "Pull up a tent with my teammates (Legends of Alpha challenges as a team)"
    ],
    "Storytelling/Public Speaking": [
      "Sell in public"
    ],
    "Entrepreneurship/Financial literacy": [],
    "Relationship Building/Socialization": [
      "Set up my own play date"
    ],
    "Grit/Hard Work": [
      "Run a 5k in <35min",
      "Independently solve a Rubik's cube",
      "Complete a triathlon"
    ]
  },
  "4-5": {
    "Teamwork/Leadership": [
      "Code self-driving cars / drones / video games with a teammate"
    ],
    "Storytelling/Public Speaking": [
      "Book a podcast appearance and discuss my passion"
    ],
    "Entrepreneurship/Financial literacy": [
      "Launch and run a level-wide business (AirBnB, Food Truck)"
    ],
    "Relationship Building/Socialization": [
      "Meet and connect with new students or strangers in my community (Hype Squad)"
    ],
    "Grit/Hard Work": [
      "Climb via ferrata",
      "Become a special agent by passing the FBI physical fitness test"
    ]
  },
  "6-8": {
    "Teamwork/Leadership": [
      "Learn sailing with a team in six weeks to dodge pirates and earn a group trip to the Bahamas",
      "Cross the finish line of a Spartan Race with my teammates"
    ],
    "Storytelling/Public Speaking": [
      "Connect with experts, conduct interviews, and publish a podcast",
      "Give a TEDx talk"
    ],
    "Entrepreneurship/Financial literacy": [
      "Work with stocks",
      "Draft, pitch, financial proposal",
      "Get $10k funding"
    ],
    "Relationship Building/Socialization": [
      "Teach kids in another country how to use 2FL"
    ],
    "Grit/Hard Work": [
      "Complete a Spartan Race"
    ]
  },
  "9-12": {
    "Teamwork/Leadership": [],
    "Storytelling/Public Speaking": [],
    "Entrepreneurship/Financial literacy": [],
    "Relationship Building/Socialization": [],
    "Grit/Hard Work": []
  },
  "All": {
    "Teamwork/Leadership": [],
    "Storytelling/Public Speaking": [],
    "Entrepreneurship/Financial literacy": [],
    "Relationship Building/Socialization": [
      "Teach chess"
    ],
    "Grit/Hard Work": []
  }
};

const gradeColors = {
  "PreK": "bg-purple-100 text-purple-800",
  "K-1": "bg-blue-100 text-blue-800", 
  "2-3": "bg-green-100 text-green-800",
  "4-5": "bg-yellow-100 text-yellow-800",
  "6-8": "bg-orange-100 text-orange-800",
  "9-12": "bg-red-100 text-red-800",
  "All": "bg-gray-100 text-gray-800"
};

const LifeCoreCurriculum = () => {
  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lifecore-navy mb-4">
            The LifeCore Curriculum Grid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our systematic approach ensures every student develops essential life skills 
            through age-appropriate, hands-on challenges that build real competence.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="text-sm font-medium text-lifecore-navy bg-lifecore-light-blue px-3 py-1 rounded-full">
              Ages PreK-12
            </span>
            <span className="text-sm font-medium text-lifecore-navy bg-lifecore-light-blue px-3 py-1 rounded-full">
              Progressive Rigor
            </span>
            <span className="text-sm font-medium text-lifecore-navy bg-lifecore-light-blue px-3 py-1 rounded-full">
              Tangible Outcomes
            </span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-6 gap-2 mb-4">
              <div className="font-bold text-lifecore-navy text-center p-4">Grade Level</div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-blue-50 rounded-lg">
                Teamwork/<br/>Leadership
              </div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-green-50 rounded-lg">
                Storytelling/<br/>Public Speaking
              </div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-yellow-50 rounded-lg">
                Entrepreneurship/<br/>Financial Literacy
              </div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-purple-50 rounded-lg">
                Relationship Building/<br/>Socialization
              </div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-red-50 rounded-lg">
                Grit/<br/>Hard Work
              </div>
            </div>
            
            {/* Content Rows */}
            {Object.entries(curriculumData).map(([grade, subjects]) => (
              <div key={grade} className="grid grid-cols-6 gap-2 mb-2">
                <div className={`p-4 rounded-lg font-semibold text-center ${gradeColors[grade as keyof typeof gradeColors]}`}>
                  {grade}
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg min-h-[120px]">
                  <ul className="text-sm space-y-2">
                    {subjects["Teamwork/Leadership"].map((item, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg min-h-[120px]">
                  <ul className="text-sm space-y-2">
                    {subjects["Storytelling/Public Speaking"].map((item, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg min-h-[120px]">
                  <ul className="text-sm space-y-2">
                    {subjects["Entrepreneurship/Financial literacy"].map((item, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg min-h-[120px]">
                  <ul className="text-sm space-y-2">
                    {subjects["Relationship Building/Socialization"].map((item, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg min-h-[120px]">
                  <ul className="text-sm space-y-2">
                    {subjects["Grit/Hard Work"].map((item, index) => (
                      <li key={index} className="text-gray-700 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Each activity is designed to build real competence through hands-on experience. 
            Students don't just learn about these skills—they practice them in meaningful contexts 
            that prepare them for success in life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifeCoreCurriculum;