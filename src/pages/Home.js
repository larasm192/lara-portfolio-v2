import './styles.css';

function Home() {
  return (
    <div className="homepage">

      {/* Main Content */ }
      <div className="container">
          <h1>LARA MERICAN.</h1>
          <p>
              Studying 
              <a 
                href="https://www.imperial.ac.uk/study/courses/undergraduate/design-engineering/"
                target="_blank" 
                rel="noopener noreferrer"
                className="highlight-design-engineering"> Design Engineering at Imperial College
              </a> by day, being a&nbsp; 
              <a 
                href="https://lnk.bio/eklsm"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-music">music artist
              </a> by night—somehow making both work <em>(or at least trying)</em>. Whether it's sketching out product ideas, tweaking CAD models, or layering synths in a song, I love bringing creative concepts to life!
              <br/>
              <br/>
              Welcome to my little corner of the internet :)
          </p>
      </div>
    </div>
  );
}

export default Home;
