import teamworkImage from "@/assets/teamwork-leadership.jpg";
import storytellingImage from "@/assets/storytelling-speaking.jpg";
import entrepreneurshipImage from "@/assets/entrepreneurship-financial.jpg";
import relationshipImage from "@/assets/relationship-building.jpg";
import gritImage from "@/assets/grit-hardwork.jpg";
import picnicPlannersImage from "@/assets/picnic-planners.jpg";
import parentReportingImage from "@/assets/parent-reporting.jpg";
import legoMasterBuilderImage from "@/assets/lego-master-builder.jpg";
import fairPlayAcademyImage from "@/assets/fair-play-academy.jpg";
import familyTheatreImage from "@/assets/family-theatre.jpg";
import waterForLifeProjectImage from "@/assets/water-for-life-project.jpg";
import aiTeachingAssistantImage from "@/assets/ai-teaching-assistant.jpg";
import alphaNewsLiveImage from "@/assets/alpha-news-live.jpg";
import publicSalesChallengeImage from "@/assets/public-sales-challenge.jpg";
import podcastHostImage from "@/assets/podcast-host.jpg";
import outdoorChefImage from "@/assets/outdoor-chef.jpg";
import fbiFitnessChallengeImage from "@/assets/fbi-fitness-challenge.jpg";
import tedxSpeakerImage from "@/assets/tedx-speaker.jpg";
import startupFounderImage from "@/assets/startup-founder.jpg";
import globalTeachingAmbassadorImage from "@/assets/global-teaching-ambassador.jpg";
import spartanRaceFinisherImage from "@/assets/spartan-race-finisher.jpg";
import alphaNewsLiveStudentsImage from "@/assets/alpha-news-live-students.jpg";
import alphaNewsLiveRealisticImage from "@/assets/alpha-news-live-realistic.jpg";
import alphaSaversPreKImage from "@/assets/alpha-savers-prek.jpg";
import playdatePalsPreKImage from "@/assets/playdate-pals-prek.jpg";

// Helper function to extract YouTube video ID from URL
const getYouTubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Helper function to generate YouTube thumbnail URL
const getYouTubeThumbnail = (videoId: string): string => {
  // For Spartan Race video, use a different thumbnail frame
  if (videoId === 'W9V0dsmhsv8') {
    return `https://img.youtube.com/vi/${videoId}/1.jpg`; // Try frame 1
  }
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};

// Helper function to get Canva preview image
const getCanvaPreview = (url: string): string => {
  // Extract design ID from Canva URL
  const designIdMatch = url.match(/design\/([^\/]+)/);
  if (designIdMatch) {
    // Use a specific timestamp (e.g., 10 seconds in) to capture a frame with kids
    // Format: ?time=10 gets frame at 10 seconds, adjust as needed
    return `https://www.canva.com/api/media/designs/${designIdMatch[1]}/thumbnail/0?format=jpg&width=400&height=300&time=15`;
  }
  return "";
};

// Helper function to get Vimeo thumbnail
const getVimeoThumbnail = (url: string): string => {
  const vimeoIdMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoIdMatch) {
    // Note: Vimeo thumbnails require API calls, so we'll use a placeholder approach
    // In a real implementation, you'd make an API call to get the actual thumbnail
    return `https://vumbnail.com/${vimeoIdMatch[1]}.jpg`;
  }
  return "";
};

// Helper function to get media preview from any supported platform
const getMediaPreview = (url: string): string | null => {
  // Handle direct image URLs (uploaded files)
  if (url.startsWith('/lovable-uploads/') || url.startsWith('/') || url.includes('.png') || url.includes('.jpg') || url.includes('.jpeg')) {
    return url;
  }
  
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = getYouTubeVideoId(url);
    return videoId ? getYouTubeThumbnail(videoId) : null;
  }
  
  if (url.includes('canva.com')) {
    return getCanvaPreview(url);
  }
  
  if (url.includes('vimeo.com')) {
    return getVimeoThumbnail(url);
  }
  
  return null;
};

const getWorkshopImage = (workshopName: string) => {
  // PRIORITY 1: Check if workshop has any media link and use preview
  const mediaLink = workshopLinks[workshopName];
  if (mediaLink) {
    const mediaPreview = getMediaPreview(mediaLink);
    if (mediaPreview) {
      return mediaPreview;
    }
  }
  
  // PRIORITY 2: Use specific AI-generated images ONLY for workshops without media links
  if (workshopName.includes("Picnic Planners")) return picnicPlannersImage;
  if (workshopName.includes("Alpha Savers")) return alphaSaversPreKImage;
  if (workshopName.includes("Playdate Pals")) return playdatePalsPreKImage;
  if (workshopName.includes("Parent Reporting")) return parentReportingImage;
  if (workshopName.includes("LEGO Master Builder")) return "/lovable-uploads/ecabc4db-0d06-42fe-8d6f-a5a40c8a8a5c.png";
  if (workshopName.includes("Fair Play Academy")) return fairPlayAcademyImage;
  if (workshopName.includes("Family Theatre")) return familyTheatreImage;
  if (workshopName.includes("Water for Life Project")) return waterForLifeProjectImage;
  if (workshopName.includes("AI Teaching Assistant")) return aiTeachingAssistantImage;
  // Note: Alpha News Live removed from AI images since it now has a media link
  if (workshopName.includes("Public Sales Challenge")) return publicSalesChallengeImage;
  if (workshopName.includes("Podcast Host")) return podcastHostImage;
  if (workshopName.includes("Outdoor Chef")) return outdoorChefImage;
  if (workshopName.includes("FBI Fitness Challenge")) return fbiFitnessChallengeImage;
  if (workshopName.includes("TEDx Speaker")) return tedxSpeakerImage;
  if (workshopName.includes("Startup Founder")) return startupFounderImage;
  if (workshopName.includes("Global Teaching Ambassador")) return globalTeachingAmbassadorImage;
  if (workshopName.includes("Spartan Race Finisher")) return spartanRaceFinisherImage;
  
  // PRIORITY 3: Fallback to category images for any remaining workshops
  if (workshopName.includes("Team") || workshopName.includes("Leadership") || workshopName.includes("Escape") || workshopName.includes("Camp") || workshopName.includes("Code") || workshopName.includes("Pirates")) {
    return teamworkImage;
  }
  if (workshopName.includes("Theater") || workshopName.includes("Theatre") || workshopName.includes("News") || workshopName.includes("Pitch")) {
    return storytellingImage;
  }
  if (workshopName.includes("Business") || workshopName.includes("Stock") || workshopName.includes("Investment") || workshopName.includes("Sales")) {
    return entrepreneurshipImage;
  }
  if (workshopName.includes("Friendship") || workshopName.includes("Social") || workshopName.includes("Community") || workshopName.includes("Teaching") || workshopName.includes("Chess")) {
    return relationshipImage;
  }
  if (workshopName.includes("Challenge") || workshopName.includes("Bike") || workshopName.includes("Rock") || workshopName.includes("Puzzle") || workshopName.includes("Deep") || workshopName.includes("5K") || workshopName.includes("Rubik") || workshopName.includes("Triathlete") || workshopName.includes("Climber") || workshopName.includes("Race")) {
    return gritImage;
  }
  return teamworkImage; // Default fallback
};

const workshopNames = {
  "PreK": {
    "Teamwork/Leadership": "Picnic Planners: Follow directions to plan a picnic for my class",
    "Storytelling/Public Speaking": "Parent Reporting",
    "Entrepreneurship/Financial literacy": "Alpha Savers: Save school currency called Alphas",
    "Relationship Building/Socialization": "Playdate Pals: Learn to share and make friends",
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
  "Picnic Planners: Follow directions to plan a picnic for my class": "Plan and organize a complete class picnic",
  "Parent Reporting": "Learn to ask questions and listen to conduct parent interviews",
  "Alpha Savers: Save school currency called Alphas": "Learn to save and count classroom currency called Alphas",
  "Playdate Pals: Learn to share and make friends": "Practice sharing, taking turns, and building friendships through play",
  "LEGO Master Builder": "Build complex LEGO structures (100-500 pieces)",
  "Fair Play Academy": "Join games and learn to play fairly",
  "Family Theatre": "Put on theatrical productions for families",
  "Alpha News Live": "Present the news live in front of the entire school",
  "Water for Life Project": "Raise and donate money to provide fresh water",
  "AI Teaching Assistant: Use AI to teach a classmate a skill": "Use AI tools to teach a peer a new skill",
  "5-Mile Bike Challenge": "Train to ride 5 miles without stopping",
  "Escape Room Expert": "Use uplifting language to beat an escape room as a team",
  "Public Sales Challenge: Sell to Strangers in Public": "Develop confidence by selling to strangers",
  "Friendship Coordinator": "Set up and manage your own playdates",
  "Rubik's Cube Solver": "Independently solve a Rubik's cube",
  "Code & Create Team": "Code self-driving cars, drones, and video games with a partner",
  "Podcast Host": "Book and host podcast appearances",
  "Business Launch Pad": "Launch and run an AirBnB or food truck",
  "Outdoor Chef: Plan and cook my own meals on a 3-day camping trip": "Plan and cook meals on a 3-day camping trip",
  "FBI Fitness Challenge": "Pass the FBI physical fitness test",
  "Pirates & Sailing Crew": "Learn to sail to earn a trip to the Bahamas",
  "TEDx Speaker": "Deliver a compelling TEDx talk",
  "Startup Founder": "Secure $10k in funding for your business",
  "Global Teaching Ambassador": "Teach kids worldwide to use 2-Hour Learning",
  "Spartan Race Finisher": "Complete a full Spartan Race",
};

const workshopLinks = {
  "Picnic Planners: Follow directions to plan a picnic for my class": picnicPlannersImage,
  "Parent Reporting": parentReportingImage,
  "Fair Play Academy": fairPlayAcademyImage,
  "AI Teaching Assistant: Use AI to teach a classmate a skill": aiTeachingAssistantImage,
  "Outdoor Chef: Plan and cook my own meals on a 3-day camping trip": outdoorChefImage,
  "FBI Fitness Challenge": fbiFitnessChallengeImage,
  "Alpha News Live": alphaNewsLiveRealisticImage,
  "Alpha Savers: Save school currency called Alphas": alphaSaversPreKImage,
  "Playdate Pals: Learn to share and make friends": playdatePalsPreKImage,
  "5-Mile Bike Challenge": "https://www.youtube.com/watch?v=GNVKlZ8Rcto",
  "Friendship Coordinator": "https://www.youtube.com/watch?v=MjziE_v_AIA",
  "Escape Room Expert": "https://www.youtube.com/watch?v=M34nou_PXMs",
  "Rubik's Cube Solver": "https://www.youtube.com/watch?v=TFtRq--ZKDs",
  "Business Launch Pad": "https://www.youtube.com/watch?v=4IL5TOk-2r4",
  "Code & Create Team": "https://www.youtube.com/watch?v=pUByfy0vcEs",
  "Pirates & Sailing Crew": "https://www.youtube.com/watch?v=IxOR6gacPZ0",
  "LEGO Master Builder": "/lovable-uploads/ecabc4db-0d06-42fe-8d6f-a5a40c8a8a5c.png",
  "Public Sales Challenge: Sell to Strangers in Public": "/lovable-uploads/35cfa662-936f-40c9-99c4-2084c0ca6f27.png",
  "TEDx Speaker": "/lovable-uploads/49cef88c-c80c-4ebf-9059-d475408eb5cf.png",
  "Startup Founder": "https://www.youtube.com/watch?v=B10wOUFDAIk",
  "Spartan Race Finisher": "https://www.youtube.com/watch?v=W9V0dsmhsv8",
  "Podcast Host": "/lovable-uploads/5e29f922-2918-4b7a-a004-1b6991d9e9c9.png",
  "Water for Life Project": "https://vimeo.com/837039532",
  "Family Theatre": "/lovable-uploads/85c4adfe-dd3b-4698-bede-d32953c3b0ae.png"
};

const WorkshopCard = ({ workshop, bgColor }: { workshop: string, bgColor: string }) => {
  if (!workshop) {
    return <div className={`p-4 ${bgColor} rounded-lg min-h-[200px]`}></div>;
  }

  // Split workshop name and description if it contains a colon
  const [workshopTitle, workshopDesc] = workshop.includes(':') ? workshop.split(':', 2) : [workshop, null];
  const displayTitle = workshopTitle.trim();
  const displayDescription = workshopDesc ? workshopDesc.trim() : workshopDescriptions[workshop];
  const hasLink = !!workshopLinks[workshop];
  const isVideoLink = hasLink && (workshopLinks[workshop].includes('youtube.com') || workshopLinks[workshop].includes('youtu.be') || workshopLinks[workshop].includes('canva.com') || workshopLinks[workshop].includes('vimeo.com'));
  const isUploadedImage = hasLink && workshopLinks[workshop].includes('/lovable-uploads/');
  const isAIImage = hasLink && !isVideoLink && !isUploadedImage; // AI images are imported assets
  const isClickable = hasLink && !isAIImage; // Only videos and uploaded images are clickable

  return (
    <div 
      className={`p-3 ${bgColor} rounded-lg min-h-[200px] transition-all duration-200 ${
        hasLink ? (isClickable ? 'cursor-pointer hover:shadow-lg hover:scale-105 border-2 border-primary/20' : 'hover:shadow-lg hover:scale-105') : ''
      }`}
      onClick={() => {
        if (isClickable) {
          const link = workshopLinks[workshop];
          if (link) {
            window.open(link, '_blank');
          }
        }
      }}
    >
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full flex flex-col">
        {/* Image section */}
        <div className="relative h-24 overflow-hidden">
          <img 
            src={getWorkshopImage(workshop)} 
            alt={displayTitle}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-lifecore-navy/60 to-transparent"></div>
          
          {/* Small play button in top left for linked videos only */}
          {isVideoLink && (
            <div className="absolute top-1 left-1">
              <div className="bg-white/90 rounded-full p-1 shadow-md">
                <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          )}
          
          <div className="absolute bottom-1 left-1 right-1">
            <span className="text-xs font-medium text-white text-center leading-tight block">
              {displayTitle}
            </span>
          </div>
          
          {/* Link indicator badge for videos only */}
          {isVideoLink && (
            <div className="absolute top-1 right-1">
              <div className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-full font-medium">
                WATCH
              </div>
            </div>
          )}
        </div>
        
        {/* Description section */}
        <div className="p-2 flex-1 flex items-center">
          <span className="text-xs text-gray-700 text-center leading-tight">
            {displayDescription || "Hands-on life skills workshop designed to build real competence"}
          </span>
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
            The Life Skills Curriculum
          </h2>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
             Explore example workshops for each of the life skills below. Click the cards with links to see the Alpha difference and watch our students in action.
           </p>
        </div>
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-gray-50/50 backdrop-blur-sm border-b border-gray-200 pb-4 mb-4">
          <div className="grid grid-cols-6 gap-2">
            <div className="font-bold text-lifecore-navy text-center p-4"></div>
            <div className="font-bold text-lifecore-navy text-center p-4 bg-orange-50 rounded-lg flex flex-col justify-center items-center leading-tight">
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
        </div>
        
        {/* Content Rows */}
        {Object.entries(workshopNames).map(([grade, subjects]) => (
          <div key={grade} className="grid grid-cols-6 gap-2 mb-2">
            <div className={`p-4 rounded-lg font-semibold text-center flex flex-col justify-center items-center ${
              grade === "PreK" ? "bg-lifecore-light-blue/20 text-lifecore-navy" :
              grade === "K-1" ? "bg-lifecore-light-blue/30 text-lifecore-navy" :
              grade === "2-3" ? "bg-lifecore-light-blue/40 text-lifecore-navy" :
              grade === "4-5" ? "bg-lifecore-light-blue/50 text-lifecore-navy" :
              grade === "6-8" ? "bg-lifecore-light-blue/60 text-lifecore-navy" :
              grade === "9-12" ? "bg-lifecore-light-blue/70 text-lifecore-navy" :
              "bg-gray-100 text-gray-800"
            }`}>
              <div className="leading-tight text-lg font-bold">
                {grade === "PreK" ? "PreK" : `Grades ${grade}`}
              </div>
              <div className="text-base text-gray-600 mt-1 font-medium">
                {grade === "PreK" ? "3-4 years" :
                 grade === "K-1" ? "5-6 years" :
                 grade === "2-3" ? "7-8 years" :
                 grade === "4-5" ? "9-10 years" :
                 grade === "6-8" ? "11-13 years" :
                 ""}
              </div>
            </div>
            
            <WorkshopCard workshop={subjects["Teamwork/Leadership"]} bgColor="bg-orange-50" />
            <WorkshopCard workshop={subjects["Storytelling/Public Speaking"]} bgColor="bg-green-50" />
            <WorkshopCard workshop={subjects["Entrepreneurship/Financial literacy"]} bgColor="bg-yellow-50" />
            <WorkshopCard workshop={subjects["Relationship Building/Socialization"]} bgColor="bg-purple-50" />
            <WorkshopCard workshop={subjects["Grit/Hard Work"]} bgColor="bg-red-50" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeCoreCurriculum;