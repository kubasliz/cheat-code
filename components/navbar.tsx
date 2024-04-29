import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Logo } from './logo';
import { ModeToggle } from './mode-toggle';
import { buttonVariants } from './ui/button';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href="https://github.com/kubasliz" target="_blank">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost'
                  }),
                  'w-9 px-0'
                )}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="https://linkedin.com/in/jakubsliz" target="_blank">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost'
                  }),
                  'w-9 px-0'
                )}
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <Link href="mailto:jakubsliz03@gmail.com" target="_blank">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost'
                  }),
                  'w-9 px-0'
                )}
              >
                <Mail className="h-4 w-4" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <div className="h-6 border-r mx-2" />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};
