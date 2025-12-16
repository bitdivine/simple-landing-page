import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-accent/5">
            <main className="flex-1 flex items-center justify-center px-4">
                <h1 className="text-[clamp(4rem,20vw,12rem)] font-bold tracking-tight text-foreground animate-in fade-in duration-1000">
                    one
                </h1>
            </main>
            <Footer />
        </div>
    );
}
