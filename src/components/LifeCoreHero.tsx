import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lifeskills.jpg";

const LifeCoreHero = () => {
  const scrollToApplication = () => {
    document.getElementById('application')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students engaged in hands-on life skills activities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lifecore-navy/90 via-lifecore-navy/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Life Skills That
            <span className="block text-lifecore-light-blue">Actually Matter</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            While other schools struggle to fit everything in, we complete academics in just 
            <strong className="text-lifecore-light-blue"> 2 hours per day</strong> — 
            giving us time to actively teach the life skills your child truly needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToApplication}
              className="text-lg px-8 py-4"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              See Our Curriculum
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-lifecore-light-blue">PreK-12</div>
              <div className="text-sm text-gray-300">All Age Groups</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-lifecore-light-blue">2 Hours</div>
              <div className="text-sm text-gray-300">Daily Academics</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-lifecore-light-blue">5 Core</div>
              <div className="text-sm text-gray-300">Life Skills Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCoreHero;