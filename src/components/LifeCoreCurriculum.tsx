import React, { useState } from 'react';
import MediaModal from './MediaModal';
import { useToast } from '@/hooks/use-toast';
import teamworkImage from "@/assets/teamwork-leadership.jpg";
import storytellingImage from "@/assets/storytelling-speaking.jpg";
import entrepreneurshipImage from "@/assets/entrepreneurship-financial.jpg";
import relationshipImage from "@/assets/relationship-building.jpg";
import gritImage from "@/assets/grit-hardwork.jpg";
import picnicPlannersImage from "@/assets/picnic-planners-updated.jpg";
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
  "Picnic Planners: Follow directions to plan a picnic for my class": "Plan an in-school playdate with a new friend",
  "Parent Reporting": "Learn to ask questions and listen to conduct parent interviews",
  "Alpha Savers: Save school currency called Alphas": "Build early saving habits to spend and donate",
  "Playdate Pals: Learn to share and make friends": "Plan an in-school playdate with a new friend",
  "LEGO Master Builder": "Persist through failure while building 100+ piece LEGO structures",
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
  "Family Theatre": "/lovable-uploads/85c4adfe-dd3b-4698-bede-d32953c3b0ae.png",
  "Global Teaching Ambassador": globalTeachingAmbassadorImage
};

const WorkshopCard = ({ workshop, bgColor }: { workshop: string, bgColor: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  const getMediaType = (): 'youtube' | 'vimeo' | 'canva' | 'image' | 'upload' => {
    const link = workshopLinks[workshop];
    if (link.includes('youtube.com') || link.includes('youtu.be')) return 'youtube';
    if (link.includes('vimeo.com')) return 'vimeo';
    if (link.includes('canva.com')) return 'canva';
    if (link.includes('/lovable-uploads/')) return 'upload';
    return 'image';
  };

  return (
    <>
      <div 
        className={`p-3 ${bgColor} rounded-lg min-h-[200px] transition-all duration-200 ${
          hasLink ? (isClickable ? 'cursor-pointer hover:shadow-lg hover:scale-105 border-2 border-primary/20' : 'hover:shadow-lg hover:scale-105') : ''
        }`}
        onClick={() => {
          if (isClickable) {
            setIsModalOpen(true);
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

      {/* Media Modal */}
      {isClickable && (
        <MediaModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={displayTitle}
          description={displayDescription}
          mediaUrl={workshopLinks[workshop]}
          mediaType={getMediaType()}
        />
      )}
    </>
  );
};

const LifeCoreCurriculum = () => {
  const { toast } = useToast();
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    if (isSharing) return; // Prevent multiple clicks
    
    setIsSharing(true);
    console.log('Share button clicked');
    
    try {
      // Check if Web Share API is available and supported
      if (navigator.share && navigator.canShare && navigator.canShare({
        title: 'Life Skills Curriculum',
        text: 'Check out this amazing curriculum that teaches kids real-world skills through hands-on workshops!',
        url: window.location.href
      })) {
        console.log('Using Web Share API');
        await navigator.share({
          title: 'Life Skills Curriculum',
          text: 'Check out this amazing curriculum that teaches kids real-world skills through hands-on workshops!',
          url: window.location.href
        });
        console.log('Web Share API succeeded');
        toast({
          title: "Shared successfully!",
          description: "The curriculum has been shared.",
        });
        return;
      }
    } catch (error) {
      console.log('Web Share API failed, falling back to clipboard:', error);
      // Continue to clipboard fallback
    }

    // Fallback to clipboard (this will run if Web Share API fails or isn't available)
    try {
      console.log('Using clipboard fallback');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(window.location.href);
        console.log('Clipboard API succeeded');
        toast({
          title: "Link copied!",
          description: "The curriculum link has been copied to your clipboard.",
        });
      } else {
        console.log('Clipboard API not available, using legacy method');
        // Legacy fallback
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          console.log('Legacy clipboard method succeeded');
          toast({
            title: "Link copied!",
            description: "The curriculum link has been copied to your clipboard.",
          });
        } else {
          throw new Error('Legacy copy method failed');
        }
      }
    } catch (clipboardError) {
      console.error('All sharing methods failed:', clipboardError);
      toast({
        title: "Share not available",
        description: `Please copy this link manually: ${window.location.href}`,
        variant: "destructive",
      });
    } finally {
      setIsSharing(false);
    }
  };

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
                {grade === "PreK" ? "4 years" :
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
        
        {/* Share Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-lifecore-navy mb-2">Share the Alpha Life Skills Curriculum</h3>
            <p className="text-gray-600">Help other families to discover the future of education</p>
          </div>
          
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <button 
              onClick={() => {
                const subject = "Check out this amazing Life Skills Curriculum";
                const body = "I found this incredible curriculum that teaches real life skills to kids through hands-on workshops. Take a look: " + window.location.href;
                window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email
            </button>
            
            <button 
              onClick={() => {
                const text = "Check out this amazing Life Skills Curriculum that teaches kids real-world skills through hands-on workshops!";
                const url = window.location.href;
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
              }}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X (Twitter)
            </button>
            
            <button 
              onClick={() => {
                const url = window.location.href;
                const text = "Check out this amazing Life Skills Curriculum that teaches kids real-world skills through hands-on workshops!";
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
            
            <button 
              onClick={() => {
                const url = window.location.href;
                const text = "Check out this amazing Life Skills Curriculum that teaches kids real-world skills through hands-on workshops!";
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank');
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
            
            <button 
              onClick={handleShare}
              disabled={isSharing}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isSharing 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-gray-600 text-white hover:bg-gray-700 hover:scale-105'
              }`}
            >
              {isSharing ? (
                <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              )}
              {isSharing ? 'Sharing...' : 'Share'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeCoreCurriculum;