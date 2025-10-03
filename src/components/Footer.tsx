const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">IFA Motors</h3>
            <p className="text-primary-foreground/80 mt-1">Electric Mobility for Ethiopia</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80">
              © {new Date().getFullYear()} IFA Motors Plc. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Authorized partner of ZP Motors
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
