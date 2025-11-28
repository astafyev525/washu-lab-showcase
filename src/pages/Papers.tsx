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
    title: "Learning Conservative Neural Control Barrier Functions from Offline Data",
    authors: "Tabbara I., Sibai H.",
    year: 2025,
    description: "This paper presents an algorithm for training neural control barrier functions from offline datasets to design safety filters for autonomous systems. The approach trains safety filters that prevent systems from reaching both unsafe states and out-of-distribution states where the filter would be unreliable. Inspired by Conservative Q-learning from offline reinforcement learning, the method produces Conservative Control Barrier Functions (CCBFs) that outperform existing approaches in maintaining safety and avoiding out-of-distribution states while minimally affecting task performance.",
    githubUrl: "https://github.com/example/paper1",
    paperUrl: "https://arxiv.org/abs/2505.00908"
  },
  {
    title: "Designing Latent Safety Filters using Pre-Trained Vision Models",
    authors: "Tabbara I., Yang Y., Hamzeh H., Astafyev M.",
    year: 2025,
    description: "This paper examines the effectiveness of pre-trained vision models as perception backbones for designing vision-based safety filters in robotics. The work uses these models as backbones for classifiers defining failure sets, for Hamilton-Jacobi reachability-based safety filters, and for latent world models. The research evaluates different approaches including training from scratch, fine-tuning, and freezing the pre-trained models to address the challenge of ensuring safety in vision-based control systems in complex and dynamic environments.",
    githubUrl: "https://arxiv.org/abs/2509.14758",
    paperUrl: "https://arxiv.org/abs/2509.14758"
  },
];

const Papers = () => {
  return (
    <div className="bg-background">
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
