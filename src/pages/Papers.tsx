import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface Paper {
  title: string;
  authors: string;
  year: number;
  description: string;
  githubUrl?: string;
  paperUrl?: string;
}

const papers: Paper[] = [
  {
    title: "Novel Approaches to Computational Biology",
    authors: "Smith, J., Doe, J., Johnson, S.",
    year: 2024,
    description: "This paper presents innovative computational methods for analyzing complex biological systems. We introduce a new framework that combines machine learning with traditional statistical approaches to improve prediction accuracy in genomic studies.",
    githubUrl: "https://github.com/example/paper1",
    paperUrl: "https://doi.org/example"
  },
  {
    title: "Machine Learning in Medical Diagnostics",
    authors: "Doe, J., Smith, J.",
    year: 2023,
    description: "We explore the application of deep learning algorithms in medical image analysis and diagnostic prediction. Our results demonstrate significant improvements in early disease detection and classification accuracy.",
    githubUrl: "https://github.com/example/paper2",
    paperUrl: "https://doi.org/example2"
  },
  {
    title: "Genomic Data Analysis at Scale",
    authors: "Johnson, S., Smith, J., Doe, J.",
    year: 2023,
    description: "This work addresses the challenges of processing and analyzing large-scale genomic datasets. We present a distributed computing framework that enables efficient analysis of whole-genome sequencing data.",
    githubUrl: "https://github.com/example/paper3",
    paperUrl: "https://doi.org/example3"
  }
];

const Papers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">Publications</h1>
        <div className="space-y-6">
          {papers.map((paper) => (
            <Card key={paper.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{paper.title}</CardTitle>
                <CardDescription className="text-base">
                  {paper.authors} ({paper.year})
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{paper.description}</p>
                <div className="flex flex-wrap gap-3">
                  {paper.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={paper.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {paper.paperUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={paper.paperUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read Paper
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Papers;
