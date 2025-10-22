import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

interface ArticleCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  onClick: (id: string) => void;
}

export function ArticleCard({
  id,
  title,
  category,
  image,
  excerpt,
  onClick,
}: ArticleCardProps) {
  return (
    <article
      className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-border/50"
      onClick={() => onClick(id)}
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <Badge
          variant="secondary"
          className="mb-3 bg-secondary text-secondary-foreground"
        >
          {category}
        </Badge>

        {/* Title */}
        <h2 className="mb-3 text-foreground line-clamp-2 leading-snug">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-foreground/70 mb-4 line-clamp-3 text-sm leading-relaxed">
          {excerpt}
        </p>

        {/* Read More Button */}
        <div className="flex items-center gap-2 text-primary hover:gap-3 transition-all group">
          <span className="text-sm font-medium">続きを読む</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
}
