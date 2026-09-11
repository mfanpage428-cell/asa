import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, ThumbsUp, ThumbsDown, BookOpen, PenTool } from 'lucide-react';
import { Topic, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface TopicDetailProps {
  topic: Topic;
  lang: Language;
  onBack: () => void;
  onNavigateToWrite: (topicTitle?: string) => void;
}

export const TopicDetail: React.FC<TopicDetailProps> = ({
  topic,
  lang,
  onBack,
  onNavigateToWrite
}) => {
  const t = (k: string) => TRANSLATIONS[k]?.[lang] || k;
  const articleText = (topic?.fullArticle && (topic.fullArticle[lang] || topic.fullArticle.en)) || '';
  
  // Word count calculation
  const wordCount = articleText ? articleText.trim().split(/\s+/).filter(Boolean).length : 0;
  const paragraphs = articleText ? articleText.split(/\n\n+/).filter(Boolean) : [];

  // Local reaction states for topic page
  const [likes, setLikes] = useState(42);
  const [dislikes, setDislikes] = useState(2);
  const [userReaction, setUserReaction] = useState<'like' | 'dislike' | null>(null);

  const handleReaction = (type: 'like' | 'dislike') => {
    if (userReaction === type) {
      setUserReaction(null);
      if (type === 'like') setLikes((l) => l - 1);
      else setDislikes((d) => d - 1);
    } else {
      if (userReaction === 'like') setLikes((l) => l - 1);
      if (userReaction === 'dislike') setDislikes((d) => d - 1);
      
      setUserReaction(type);
      if (type === 'like') setLikes((l) => l + 1);
      else setDislikes((d) => d + 1);
    }
  };

  return (
    <div className="pt-16 pb-24 bg-[#E1F5FE]/30 min-h-screen">
      {/* Top Banner / Hero */}
      <div className="relative h-[48vh] min-h-[380px] max-h-[550px] w-full overflow-hidden">
        <img
          src={topic.img}
          alt={topic.title[lang]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#051923] via-[#051923]/60 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 bg-white/90 hover:bg-white text-[#051923] font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('back_to_topics')}
          </button>
        </div>

        {/* Title and Meta in Hero */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 bg-[#00A8E8]/90 text-white font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-md mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{wordCount} {t('words_count_label')}</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-md">
            {topic.title[lang]}
          </h1>
          <div className="mt-3 text-xs sm:text-sm text-sky-200/80 flex items-center gap-4">
            <span>{topic.credit}</span>
            <span>•</span>
            <span>{t('verified_report_badge')}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-3xl mx-auto px-5 sm:px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-sky-100">
          {/* Reaction & Action Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-sky-100 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-1">{t('react_to_issue')}</span>
              <button
                onClick={() => handleReaction('like')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  userReaction === 'like'
                    ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>{likes}</span>
              </button>
              <button
                onClick={() => handleReaction('dislike')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  userReaction === 'dislike'
                    ? 'bg-rose-500 text-white border-rose-500 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ThumbsDown className="w-3.5 h-3.5" />
                <span>{dislikes}</span>
              </button>
            </div>

            <button
              onClick={() => onNavigateToWrite(topic.title[lang])}
              className="flex items-center gap-1.5 bg-[#00A8E8] hover:bg-[#006494] text-white text-xs font-bold px-4 py-2 rounded-full shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <PenTool className="w-3.5 h-3.5" />
              {t('write_on_topic_btn')}
            </button>
          </div>

          {/* Article Text */}
          <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed font-sans text-base sm:text-lg">
            {paragraphs.map((para, i) => (
              <p key={i} className="mb-6 leading-relaxed text-justify">
                {para}
              </p>
            ))}
          </div>

          {/* Research Sources Section */}
          {topic.sources && topic.sources.length > 0 && (
            <div className="mt-12 pt-8 border-t border-sky-100">
              <h3 className="font-serif text-lg font-bold text-[#051923] mb-4 flex items-center gap-2">
                <span>{t('verified_sources_title')}</span>
              </h3>
              <ul className="space-y-2.5">
                {topic.sources.map((src, i) => (
                  <li key={i}>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#00A8E8] hover:text-[#006494] hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 shrink-0" />
                      {src.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Action Card */}
          <div className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl border border-sky-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-base text-[#051923]">
                {t('topic_cta_title')}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {t('topic_cta_sub')}
              </p>
            </div>
            <button
              onClick={() => onNavigateToWrite(topic.title[lang])}
              className="shrink-0 bg-[#00A8E8] hover:bg-[#006494] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              WRITE AN ARTICLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
