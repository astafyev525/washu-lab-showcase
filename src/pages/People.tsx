import { Card, CardContent } from "@/components/ui/card";

interface Person {
  name: string;
  role: string;
  bio: string;
  email?: string;
}

const people: Person[] = [
  {
    name: "Hussein Sibai",
    role: "Principal Investigator",
    bio: "Dr. Sibai leads the labratory with expertise in control barrier functions.",
    email: "sibai@wustl.edu"
  },
  {
    name: "Ihab Tabbara",
    role: "PhD Student",
    bio: "Ihab is a second year PhD student.",
    email: "i.k.tabbara@wustl.edu"
  },
  {
    name: "Yuxuan Yang",
    role: "PhD Student",
    bio: "Yuxuan is a first year PhD student.",
    email: "y.yuxuan@wustl.edu"
  },
  {
    name: "Ahmad Hamzeh",
    role: "Undergraduate student",
    bio: "Ahmad is a second year undergraduate student.",
    email: "a.h.hamzeh@wustl.edu"
  }
];

const People = () => {
  return (
    <div className="bg-background">
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
