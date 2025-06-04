import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-primary via-background to-background">
      <div className="absolute inset-0 opacity-10">
         <Image 
            src="https://placehold.co/1920x1080.png" // Abstract background
            alt="Abstract background"
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
            data-ai-hint="abstract background"
          />
      </div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Hi, I&apos;m <span className="text-accent">Hussain</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            A Computer Scientist - Passionate About Building Innovative Solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
