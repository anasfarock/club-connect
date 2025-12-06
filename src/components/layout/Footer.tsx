export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center bg-white border-t border-border-light">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a className="footer-link" href="#terms">Terms of Service</a>
            <a className="footer-link" href="#privacy">Privacy Policy</a>
            <a className="footer-link" href="#contact">Contact Us</a>
          </div>
          <p className="text-text-secondary text-base font-normal leading-normal">
            © 2024 CampusConnect. All rights reserved.
          </p>
        </footer>
      </div>
    </footer>
  );
};