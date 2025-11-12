import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

interface Person {
  name: string;
  role: string;
  bio: string;
  email?: string;
}

const people: Person[] = [
  {
    name: "Dr. Jane Smith",
    role: "Principal Investigator",
    bio: "Dr. Smith leads the laboratory with expertise in computational biology and systems neuroscience.",
    email: "jane.smith@wustl.edu"
  },
  {
    name: "John Doe",
    role: "PhD Student",
    bio: "John is researching machine learning applications in biomedical data analysis.",
    email: "john.doe@wustl.edu"
  },
  {
    name: "Sarah Johnson",
    role: "Postdoctoral Researcher",
    bio: "Sarah focuses on developing novel computational methods for genomic analysis.",
    email: "sarah.johnson@wustl.edu"
  }
];

const People = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-foreground mb-8">People</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <Card key={person.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{person.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{person.role}</p>
                <p className="text-muted-foreground mb-4">{person.bio}</p>
                {person.email && (
                  <a
                    href={`mailto:${person.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {person.email}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default People;
