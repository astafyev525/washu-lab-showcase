import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Welcome to Our Laboratory
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a research group at Washington University in St. Louis dedicated to advancing 
              computational biology and biomedical research. Our work combines cutting-edge machine 
              learning techniques with biological data analysis to solve complex problems in healthcare 
              and life sciences.
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link to="/papers">
                  View Our Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/people">Meet Our Team</Link>
              </Button>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Research Focus</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our laboratory focuses on developing innovative computational methods for analyzing 
              biological and medical data. We work on projects spanning genomics, medical imaging, 
              and systems biology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By integrating advanced machine learning algorithms with domain expertise in biology 
              and medicine, we aim to accelerate discovery and improve patient outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest News</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-muted-foreground mb-1">November 2024</p>
                <p className="text-foreground">New paper published on computational biology approaches</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="text-sm text-muted-foreground mb-1">October 2024</p>
                <p className="text-foreground">Lab receives grant for genomic data analysis research</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
