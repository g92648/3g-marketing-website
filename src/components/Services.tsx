import './Services.css';

const services = [
    {
        icon: '🎯',
        title: 'Strategic Planning',
        description: 'Develop comprehensive strategies aligned with your business goals and market dynamics.'
    },
    {
        icon: '📊',
        title: 'Business Analytics',
        description: 'Transform data into actionable insights that drive measurable business outcomes.'
    },
    {
        icon: '⚙️',
        title: 'Process Optimization',
        description: 'Streamline operations and improve efficiency through proven methodologies.'
    },
    {
        icon: '💡',
        title: 'Digital Transformation',
        description: 'Navigate technological change and harness digital opportunities for growth.'
    },
    {
        icon: '📈',
        title: 'Performance Management',
        description: 'Implement metrics and systems that track and enhance organizational performance.'
    },
    {
        icon: '🤝',
        title: 'Change Management',
        description: 'Guide your team through transitions with structured approaches and support.'
    },
];

export default function Services() {
    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="services-header text-center">
                    <h2>Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive consulting solutions tailored to your unique challenges
                    </p>
                </div>

                <div className="services-grid grid grid-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
