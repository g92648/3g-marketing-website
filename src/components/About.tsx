import './About.css';

export default function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>Why Choose 3G Consulting?</h2>
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
