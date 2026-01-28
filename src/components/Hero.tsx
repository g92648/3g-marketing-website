import './Hero.css';

export default function Hero() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title fade-in-up">
                        Transform Your Business with
                        <span className="gradient-text"> Expert Consulting</span>
                    </h1>
                    <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
                        3G Consulting delivers strategic insights and innovative solutions
                        to help your organization achieve sustainable growth and operational excellence.
                    </p>
                    <div className="hero-cta fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <button className="btn btn-primary" onClick={scrollToContact}>
                            Get Started
                        </button>
                        <button className="btn btn-secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}
