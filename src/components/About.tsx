import './About.css';

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Why Choose 3G Consulting?</h2>
                        <a
                            href="https://www.linkedin.com/in/yjgolden/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-linkedin"
                        >
                            <svg className="about-linkedin-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            Connect on LinkedIn
                        </a>
                        <p className="lead-text">
                            We are a team of experienced consultants dedicated to delivering
                            measurable results and sustainable growth for our clients.
                        </p>

                        <div className="about-features">
                            <div className="feature-item">
                                <div className="feature-icon">✓</div>
                                <div>
                                    <h4>Proven Expertise</h4>
                                    <p>Decades of combined experience across diverse industries and business challenges.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">✓</div>
                                <div>
                                    <h4>Tailored Solutions</h4>
                                    <p>Custom strategies designed specifically for your unique organizational needs.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">✓</div>
                                <div>
                                    <h4>Results-Driven</h4>
                                    <p>Focus on tangible outcomes that directly impact your bottom line.</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">✓</div>
                                <div>
                                    <h4>Long-term Partnership</h4>
                                    <p>We invest in your success and build lasting relationships beyond projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card glass-card">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>

                        <div className="stat-card glass-card">
                            <div className="stat-number">200+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>

                        <div className="stat-card glass-card">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
