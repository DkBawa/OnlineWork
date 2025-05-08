import React from 'react';
import { Container, Row, Col, Nav, Stack } from 'react-bootstrap';

const Footer = () => {
  // Static data instead of API call
  const footerData = {
    companyName: "LuckByChance",
    tagline: "Buy a product & get a chance to win amazing prizes!",
    quickLinks: [
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: "Winners", url: "/winners" },
      { name: "About Us", url: "/about" },
      { name: "Contact", url: "/contact" }
    ],
    contact: {
      address: "Zone-1, GIFT SEZ, GIFT House, Block 12, Road 1-D, Gujarat International Finance Tec-City, Gandhinagar, Gujarat 382050",
      phone: "+91 8386088930",
      email: "info@luckbychance.com"
    },
    socialLinks: [
      { platform: "Facebook", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Twitter", url: "#" }
    ]
  };

  return (
    <footer className="text-white pt-5 pb-4 mt-5">
      <Container fluid>
        <Row className="px-5">
          {/* Company Info */}
          <Col md={4} className="mb-4">
            <h5>{footerData.companyName}</h5>
            <p>{footerData.tagline}</p>
            <p>जहां आपके सपने हकीकत बन सकते हैं!</p>
          </Col>
          
          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              {footerData.quickLinks.map((link, idx) => (
                <Nav.Link
                  key={idx}
                  href={link.url}
                  className="text-white px-0"
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Col>
          
          {/* Contact Info */}
          <Col md={4} className="mb-4">
            <h5>Contact Us</h5>
            <Stack gap={2} className="contact-info">
              <div>📍 {footerData.contact.address}</div>
              <div>📞 {footerData.contact.phone}</div>
              <div>✉️ {footerData.contact.email}</div>
            </Stack>
            <div className="mt-2 social-links d-flex gap-4">
              {footerData.socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="text-white"
                  aria-label={social.platform}
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <div className="copyright">
              <small>© {new Date().getFullYear()} {footerData.companyName}. All rights reserved.</small>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;