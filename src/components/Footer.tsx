import './Footer.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="brand-logo">3G Consulting</h3>
                        <p>Transforming businesses through strategic excellence.</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li><a onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About Us</a></li>
                                <li><a onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</a></li>
                                <li><a onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="mailto:info@3g-consulting.com">Email</a></li>
                                <li><a href="tel:+1234567890">Phone</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} 3G Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
