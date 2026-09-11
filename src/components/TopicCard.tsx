import React from 'react';
import { Topic, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ArrowRight, BookOpen } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
  index: number;
  lang: Language;
  onSelect: (topicId: string) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ topic, index, lang, onSelect }) => {
  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;
  const numStr = (index + 1) < 10 ? `0${index + 1}` : `${index + 1}`;

  return (
    <article
      id={`topic-card-${topic.id}`}
      onClick={() => onSelect(topic.id)}
      className="group bg-white rounded-2xl overflow-hidden border border-[#00A8E8]/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col cursor-pointer"
    >
      {/* Image Thumbnail */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-sky-100">
        <img
          src={topic.img}
          alt={topic.title[lang]}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#051923]/80 backdrop-blur-md text-white font-mono font-bold text-xs px-2.5 py-1 rounded-md border border-white/20">
          TOPIC #{numStr}
        </div>
        <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-xs text-[10px] text-white/80 px-2 py-0.5 rounded">
          {topic.credit}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-extrabold tracking-widest text-[#00A8E8] uppercase mb-2">
            Global Crisis Analysis
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#051923] group-hover:text-[#006494] transition-colors leading-snug line-clamp-2">
            {topic.title[lang]}
          </h3>
          <p className="mt-3 text-sm text-[#006494]/85 leading-relaxed line-clamp-3">
            {topic.short[lang]}
          </p>
        </div>

        {/* Action Link */}
        <div className="mt-5 pt-4 border-t border-sky-100 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-bold text-sky-600 group-hover:text-[#006494] transition-colors">
            <BookOpen className="w-3.5 h-3.5" />
            650+ words research
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-bold text-[#00A8E8] group-hover:translate-x-1 transition-transform">
            {t('read_more')}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
  );
};
