import './styles.css';

function Footer() {
    return(
        <footer>
        {/* Social Icons */ }
        <div className="social-icons">
            <a 
              href="https://www.linkedin.com/in/lara-merican/"
              target="_blank"
              rel="noopener noreferrer">
              <img src="assets/icons8-linkedin.svg" alt="LinkedIn"/>
            </a>
            <a 
              href="mailto:lm323@ic.ac.uk"
              target="_blank"
              rel="noopener noreferrer">
              <img src="assets/icons8-email-30.png" alt="Email"/>
            </a>
            <a 
              href="https://www.instagram.com/merican_lara?igsh=MTNycjVqeWJkN3hwdw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer">
              <img src="assets/icons8-instagram.svg" alt="Instagram"/>
            </a>
        </div>

        {/* Credits */ }
        <div className="credits">
            <p>
              Designed and coded by Lara Merican on&nbsp;
              <a 
                href="https://www.figma.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link">Figma</a> and&nbsp; 
              <a 
                href="https://code.visualstudio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link">Visual Studio Code
              </a>, with icons by&nbsp; 
              <a 
                href="https://icons8.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link">Icons8
              </a> and font&nbsp; 
              <a 
                href="https://fonts.google.com/specimen/Inter" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link">Inter
                
              </a>.
            </p>
        </div>
      </footer>
    )
}

export default Footer;