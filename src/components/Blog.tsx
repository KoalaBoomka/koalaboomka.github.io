import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Fine-tuning LLMs on Limited Data",
    description: "Practical strategies for achieving high performance with small datasets using transfer learning and data augmentation.",
    date: "2024-03-15",
    readTime: "8 min read",
  },
  {
    title: "Building Production MLOps Pipelines",
    description: "End-to-end guide to creating robust ML pipelines with MLflow, DVC, and automated testing for real-world applications.",
    date: "2024-02-28",
    readTime: "12 min read",
  },
  {
    title: "Understanding Gradient Boosting",
    description: "Breaking down gradient boosting algorithms in simple terms with practical examples and implementation tips.",
    date: "2024-01-20",
    readTime: "6 min read",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4 md:px-6">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2>Latest Writing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and lessons learned from building ML systems in production.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card 
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto font-semibold group/btn">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
