import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  mediaUrl: string;
  mediaType: 'youtube' | 'vimeo' | 'canva' | 'image' | 'upload';
}

const getYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

const getVimeoVideoId = (url: string): string | null => {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
};

const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  mediaUrl,
  mediaType
}) => {
  const renderMedia = () => {
    switch (mediaType) {
      case 'youtube': {
        const videoId = getYouTubeVideoId(mediaUrl);
        if (!videoId) return <div className="text-center py-8">Invalid YouTube URL</div>;
        
        return (
          <div className="relative w-full pb-[56.25%] h-0">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        );
      }
      
      case 'vimeo': {
        const videoId = getVimeoVideoId(mediaUrl);
        if (!videoId) return <div className="text-center py-8">Invalid Vimeo URL</div>;
        
        return (
          <div className="relative w-full pb-[56.25%] h-0">
            <iframe
              src={`https://player.vimeo.com/video/${videoId}`}
              title={title}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        );
      }
      
      case 'canva': {
        return (
          <div className="relative w-full pb-[56.25%] h-0">
            <iframe
              src={mediaUrl}
              title={title}
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        );
      }
      
      case 'image':
      case 'upload': {
        return (
          <div className="flex justify-center">
            <img
              src={mediaUrl}
              alt={title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
          </div>
        );
      }
      
      default:
        return <div className="text-center py-8">Unsupported media type</div>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-lifecore-navy mb-2">
            {title}
          </DialogTitle>
          {description && (
            <p className="text-gray-600 text-sm">
              {description}
            </p>
          )}
        </DialogHeader>
        
        <div className="mt-4">
          {renderMedia()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaModal;