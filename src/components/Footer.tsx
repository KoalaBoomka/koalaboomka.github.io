const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-6 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daria. Built with passion for machine learning.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
            {/* <a href="#blog" className="hover:text-primary transition-colors">
              Blog
            </a> */}
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
