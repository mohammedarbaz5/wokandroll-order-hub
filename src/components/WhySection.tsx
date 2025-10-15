import { ChefHat, Clock, Leaf } from 'lucide-react';

export const WhySection = () => {
  const features = [
    {
      icon: ChefHat,
      title: 'Authentic Recipes',
      description: 'Traditional techniques passed down through generations',
    },
    {
      icon: Clock,
      title: 'Ready in Minutes',
      description: 'Fast service without compromising on quality',
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'Sourced daily for maximum flavor and nutrition',
    },
  ];

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why <span className="text-accent">Wok & Roll?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent mb-6 transition-smooth hover:gold-glow hover:scale-110">
                  <Icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
