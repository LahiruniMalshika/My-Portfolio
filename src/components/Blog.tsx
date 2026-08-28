import { ArrowUpRight } from "lucide-react";
import { images } from "../assets/images";
import { blogPosts } from "../data/content";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function Blog() {
  return (
    <section id="blog" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="My Blog"
          description={
            <>
              Below are my write-ups on{" "}
              <a href="https://medium.com/@lahimalshi" target="_blank" rel="noreferrer" className="text-accent hover:underline">
                Medium
              </a>
              .
            </>
          }
          align="center"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-alt transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={images[post.cover as keyof typeof images]}
                  alt={post.title}
                  loading="lazy"
                  width={800}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium text-fg-muted">{post.date} · Medium</p>
                <h3 className="mt-2 flex items-start justify-between gap-2 font-display text-lg font-semibold text-fg">
                  {post.title}
                  <ArrowUpRight size={18} className="mt-1 shrink-0 text-fg-muted group-hover:text-accent" />
                </h3>
                <p className="mt-2 text-sm text-fg-muted">{post.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
