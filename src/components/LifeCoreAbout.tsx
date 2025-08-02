import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, Users, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "2-Hour Academic Days",
    description: "We complete traditional academics in just 2 hours daily, freeing up time for what really matters: hands-on life skills development."
  },
  {
    icon: Target,
    title: "Tangible Outcomes",
    description: "Students don't just learn about skills—they demonstrate mastery through real-world achievements like running businesses, giving TED talks, and completing triathlons."
  },
  {
    icon: Users,
    title: "Progressive Development",
    description: "Our curriculum grows with your child, from simple teamwork in PreK to leading complex projects in high school."
  },
  {
    icon: BookOpen,
    title: "Active Learning",
    description: "We believe life skills must be taught actively, not passively. Students learn by doing, not just by listening."
  },
  {
    icon: Heart,
    title: "Whole Child Focus",
    description: "While others race through content, we develop character, confidence, and competence that lasts a lifetime."
  }
];

const LifeCoreAbout = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-lifecore-light-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lifecore-navy mb-4">
            Why LifeCore Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional schools try to cram everything into an impossible schedule. 
            We've solved the time problem, so your child can develop the skills that truly matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-lifecore-light-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-lifecore-navy" />
                  </div>
                  <h3 className="text-xl font-semibold text-lifecore-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-lifecore-navy rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The LifeCore Difference
            </h3>
            <p className="text-lifecore-light-blue text-lg">
              Real results from real families who chose a better way
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lifecore-light-blue mb-2">
                2hrs
              </div>
              <div className="text-lg">Daily Academics</div>
              <div className="text-sm text-gray-300 mt-2">
                vs. 6-8 hours in traditional schools
              </div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lifecore-light-blue mb-2">
                5
              </div>
              <div className="text-lg">Core Life Skills</div>
              <div className="text-sm text-gray-300 mt-2">
                Systematically developed PreK-12
              </div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-lifecore-light-blue mb-2">
                100%
              </div>
              <div className="text-lg">Hands-On Learning</div>
              <div className="text-sm text-gray-300 mt-2">
                Real skills, real achievements
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-lifecore-navy mb-6">
              Our Philosophy
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Most schools are built on an outdated model that tries to cover too much content 
              in too little time. We believe that when you free up time by streamlining academics, 
              you can focus on developing the character, confidence, and competence your child 
              needs to thrive in the real world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our students don't just learn about teamwork—they succeed in escape rooms and 
              Spartan races. They don't just study business—they run real companies. 
              They don't just practice speaking—they give TED talks and appear on podcasts. 
              This is education that prepares students for life, not just tests.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCoreAbout;