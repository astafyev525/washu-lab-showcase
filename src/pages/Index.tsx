const Index = () => {
  return (
    <div className="bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
          <img 
              src="/Washu_image.jpg" 
              alt="Campus_image" 
              className="mb-8 w-full lg"
            />
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We are a research group at Washington University in St. Louis focused on 
            trustworthy autonomy and cyber-physical systems. Our laboratory develops 
            theory and builds tools to efficiently design, evaluate, and deploy assured 
            autonomous systems. Our work combines formal methods, control theory, 
            and machine learning to ensure the safety and reliability of autonomous systems.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Research Focus</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
            Our laboratory specializes in developing methods to formally verify 
            the safety of complex cyber-physical systems with machine-learned components. 
            We work on control barrier functions, neural network verification, safe reinforcement 
            learning, and robust perception for autonomous systems. Our research has applications 
            in robotics, autonomous vehicles, and safety-critical systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
            By combining rigorous mathematical techniques with practical engineering 
            approaches, we aim to enable the deployment of autonomous systems that are 
            both highly capable and provably safe.
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
