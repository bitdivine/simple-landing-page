import { Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-6 px-4">
            <div className="container mx-auto">
                <p className="text-center text-sm text-muted-foreground">
                    © 2025. Built with{' '}
                    <Heart className="inline-block w-4 h-4 text-destructive fill-destructive" />{' '}
                    using{' '}
                    <a
                        href="https://caffeine.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors underline underline-offset-4"
                    >
                        caffeine.ai
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}
