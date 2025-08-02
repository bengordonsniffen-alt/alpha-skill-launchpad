import teamworkImage from "@/assets/teamwork-leadership.jpg";
import storytellingImage from "@/assets/storytelling-speaking.jpg";
import entrepreneurshipImage from "@/assets/entrepreneurship-financial.jpg";
import relationshipImage from "@/assets/relationship-building.jpg";
import gritImage from "@/assets/grit-hardwork.jpg";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Helper function to generate YouTube thumbnail URL
const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

const getWorkshopImage = (workshopName: string) => {
  // Check if workshop has a YouTube link and use thumbnail
  const youtubeLink = workshopLinks[workshopName];
  if (youtubeLink) {
    const videoId = getYouTubeVideoId(youtubeLink);
    if (videoId) {
      return getYouTubeThumbnail(videoId);
    }
  }
  
  // Fallback to existing image logic
  if (workshopName.includes("Team") || workshopName.includes("Leadership") || workshopName.includes("Fair Play") || workshopName.includes("Escape") || workshopName.includes("Camp") || workshopName.includes("Code") || workshopName.includes("Pirates") || workshopName.includes("Spartan") || workshopName.includes("Picnic Planners")) {
    return teamworkImage;
  }
  if (workshopName.includes("Theater") || workshopName.includes("Theatre") || workshopName.includes("News") || workshopName.includes("Pitch") || workshopName.includes("Podcast") || workshopName.includes("TEDx") || workshopName.includes("Speaker") || workshopName.includes("Parent Reporting")) {
    return storytellingImage;
  }
  if (workshopName.includes("Water") || workshopName.includes("Business") || workshopName.includes("Stock") || workshopName.includes("Investment") || workshopName.includes("Startup") || workshopName.includes("Sales") || workshopName.includes("Public Sales")) {
    return entrepreneurshipImage;
  }
  if (workshopName.includes("Friendship") || workshopName.includes("Social") || workshopName.includes("Community") || workshopName.includes("Teaching") || workshopName.includes("Chess") || workshopName.includes("AI Teaching") || workshopName.includes("Outdoor Chef")) {
    return relationshipImage;
  }
  if (workshopName.includes("LEGO") || workshopName.includes("Challenge") || workshopName.includes("Bike") || workshopName.includes("Rock") || workshopName.includes("Puzzle") || workshopName.includes("Deep") || workshopName.includes("5K") || workshopName.includes("Rubik") || workshopName.includes("Triathlete") || workshopName.includes("Climber") || workshopName.includes("FBI") || workshopName.includes("Race") || workshopName.includes("Spartan")) {
    return gritImage;
  }
  return teamworkImage; // Default fallback
};

const workshopNames = {
  "PreK": {
    "Teamwork/Leadership": "Picnic Planners: Follow directions to plan a picnic for my class",
    "Storytelling/Public Speaking": "Parent Reporting",
    "Entrepreneurship/Financial literacy": "",
    "Relationship Building/Socialization": "",
    "Grit/Hard Work": "LEGO Master Builder"
  },
  "K-1": {
    "Teamwork/Leadership": "Fair Play Academy",
    "Storytelling/Public Speaking": "Family Theatre",
    "Entrepreneurship/Financial literacy": "Water for Life Project",
    "Relationship Building/Socialization": "AI Teaching Assistant: Use AI to teach a classmate a skill",
    "Grit/Hard Work": "5-Mile Bike Challenge"
  },
  "2-3": {
    "Teamwork/Leadership": "Escape Room Expert",
    "Storytelling/Public Speaking": "Alpha News Live",
    "Entrepreneurship/Financial literacy": "Public Sales Challenge: Sell to Strangers in Public",
    "Relationship Building/Socialization": "Friendship Coordinator",
    "Grit/Hard Work": "Rubik's Cube Solver"
  },
  "4-5": {
    "Teamwork/Leadership": "Code & Create Team",
    "Storytelling/Public Speaking": "Podcast Host",
    "Entrepreneurship/Financial literacy": "Business Launch Pad",
    "Relationship Building/Socialization": "Outdoor Chef: Plan and cook my own meals on a 3-day camping trip",
    "Grit/Hard Work": "FBI Fitness Challenge"
  },
  "6-8": {
    "Teamwork/Leadership": "Pirates & Sailing Crew",
    "Storytelling/Public Speaking": "TEDx Speaker",
    "Entrepreneurship/Financial literacy": "Startup Founder",
    "Relationship Building/Socialization": "Global Teaching Ambassador",
    "Grit/Hard Work": "Spartan Race Finisher"
  },
};

const workshopDescriptions = {
  "Picnic Planners: Follow directions to plan a picnic for my class": "Plan and organize a complete class picnic by following detailed instructions and coordinating with classmates",
  "Parent Reporting": "Practice clear communication by reporting daily activities and learnings to parents",
  "LEGO Master Builder": "Build complex LEGO structures (100-500 pieces)",
  "Fair Play Academy": "Join games and learn to play fairly",
  "Family Theatre": "Put on theatrical productions for families",
  "Alpha News Live": "Report live news for school community",
  "Water for Life Project": "Raise money for lifetime water supplies",
  "AI Teaching Assistant: Use AI to teach a classmate a skill": "Leverage AI tools to help teach a peer a new skill or concept",
  "5-Mile Bike Challenge": "Train to ride 5 miles without stopping",
  "Escape Room Expert": "Succeed in escape rooms with positive talk",
  "Public Sales Challenge: Sell to Strangers in Public": "Develop confidence and sales skills by approaching and selling to strangers",
  "Friendship Coordinator": "Set up and manage your own playdates",
  "Rubik's Cube Solver": "Independently solve a Rubik's cube",
  "Code & Create Team": "Build self-driving cars, drones, and video games with programming partners",
  "Podcast Host": "Book and host podcast appearances discussing your passions",
  "Business Launch Pad": "Launch and run a level-wide business like AirBnB or Food Truck operations",
  "Outdoor Chef: Plan and cook my own meals on a 3-day camping trip": "Plan, shop for, and prepare all meals independently during a camping experience",
  "FBI Fitness Challenge": "Pass the FBI physical fitness test requirements",
  "Pirates & Sailing Crew": "Learn sailing in six weeks and earn group trips through teamwork",
  "TEDx Speaker": "Deliver a compelling TEDx talk to live audiences",
  "Startup Founder": "Secure $10k in funding for your business venture",
  "Global Teaching Ambassador": "Teach life skills to kids in other countries using 2FL methods",
  "Spartan Race Finisher": "Complete full Spartan Race obstacles independently",
};

const workshopLinks = {
  "5-Mile Bike Challenge": "https://www.youtube.com/watch?v=GNVKlZ8Rcto",
  "Friendship Coordinator": "https://www.youtube.com/watch?v=MjziE_v_AIA"
};

const WorkshopCard = ({ workshop, bgColor }: { workshop: string, bgColor: string }) => {
  if (!workshop) {
    return <div className={`p-4 ${bgColor} rounded-lg aspect-square min-h-[150px]`}></div>;
  }

  // Split workshop name and description if it contains a colon
  const [workshopTitle, workshopDesc] = workshop.includes(':') ? workshop.split(':', 2) : [workshop, null];
  const displayTitle = workshopTitle.trim();
  const displayDescription = workshopDesc ? workshopDesc.trim() : workshopDescriptions[workshop];

  return (
    <div className={`p-4 ${bgColor} rounded-lg aspect-square min-h-[150px]`}>
      <div 
        className="group relative h-full w-full perspective-1000 cursor-pointer"
        onClick={() => {
          const link = workshopLinks[workshop];
          if (link) {
            window.open(link, '_blank');
          }
        }}
      >
        <div className="relative h-full w-full transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <img 
              src={getWorkshopImage(workshop)} 
              alt={displayTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lifecore-navy/60 to-transparent"></div>
            <div className="absolute bottom-2 left-2 right-2">
              <span className="text-sm font-medium text-white text-center leading-tight block">
                {displayTitle}
              </span>
            </div>
          </div>
          
          {/* Back of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-lifecore-navy rounded-lg shadow-sm flex items-center justify-center p-3">
            <span className="text-sm text-white text-center leading-tight">
              {displayDescription || "Hands-on life skills workshop designed to build real competence"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
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
             Hover over workshop cards to see descriptions. Click cards with links to watch videos. 
             Our systematic approach ensures every student develops essential life skills.
           </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-6 gap-2 mb-4">
              <div className="font-bold text-lifecore-navy text-center p-4">Grade Level</div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-blue-50 rounded-lg flex flex-col justify-center items-center leading-tight">
                <div>Teamwork</div>
                <div className="text-sm my-1">+</div>
                <div>Leadership</div>
              </div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-green-50 rounded-lg flex flex-col justify-center items-center leading-tight">
                <div>Storytelling</div>
                <div className="text-sm my-1">+</div>
                <div>Public Speaking</div>
              </div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-yellow-50 rounded-lg flex flex-col justify-center items-center leading-tight">
                <div>Entrepreneurship</div>
                <div className="text-sm my-1">+</div>
                <div>Financial Literacy</div>
              </div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-purple-50 rounded-lg flex flex-col justify-center items-center leading-tight">
                <div>Relationship Building</div>
                <div className="text-sm my-1">+</div>
                <div>Socialization</div>
              </div>
              <div className="font-bold text-lifecore-navy text-center p-4 bg-red-50 rounded-lg flex flex-col justify-center items-center leading-tight">
                <div>Grit</div>
                <div className="text-sm my-1">+</div>
                <div>Hard Work</div>
              </div>
            </div>
            
            {/* Content Rows */}
            {Object.entries(workshopNames).map(([grade, subjects]) => (
              <div key={grade} className="grid grid-cols-6 gap-2 mb-2">
                <div className={`p-4 rounded-lg font-semibold text-center ${
                  grade === "PreK" ? "bg-purple-100 text-purple-800" :
                  grade === "K-1" ? "bg-blue-100 text-blue-800" :
                  grade === "2-3" ? "bg-green-100 text-green-800" :
                  grade === "4-5" ? "bg-yellow-100 text-yellow-800" :
                  grade === "6-8" ? "bg-orange-100 text-orange-800" :
                  grade === "9-12" ? "bg-red-100 text-red-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {grade}
                </div>
                
                <WorkshopCard workshop={subjects["Teamwork/Leadership"]} bgColor="bg-blue-50" />
                <WorkshopCard workshop={subjects["Storytelling/Public Speaking"]} bgColor="bg-green-50" />
                <WorkshopCard workshop={subjects["Entrepreneurship/Financial literacy"]} bgColor="bg-yellow-50" />
                <WorkshopCard workshop={subjects["Relationship Building/Socialization"]} bgColor="bg-purple-50" />
                <WorkshopCard workshop={subjects["Grit/Hard Work"]} bgColor="bg-red-50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCoreCurriculum;