import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack MERN e-commerce app with user authentication, product catalog, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Manager Pro',
    description: 'MERN stack task management application with CRUD operations, user authentication, and responsive design.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'JWT'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'Full-featured blogging platform with user roles, comments, likes, and rich text editor.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
    tags: ['React', 'Express', 'MongoDB', 'Redux'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location search, forecasts, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'API Integration', 'CSS3'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio CMS',
    description: 'Content management system for portfolios with admin dashboard and dynamic content.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
    tags: ['React', 'Express', 'MongoDB', 'REST API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'Real-time messaging app with Socket.io, private chats, and group conversations.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing my expertise in building 
            modern, scalable web applications.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden glass hover:bg-white/10 transition-all duration-500"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Featured badge */}
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-gradient text-white border-0">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-white/5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover glow effect */}
              <div 
                className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  boxShadow: 'inset 0 0 30px -10px hsl(250 95% 60% / 0.3)',
                }}
              />
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 hover:bg-white/10 rounded-full px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
