import React from 'react';
import Header from '../Header/Header';

import '../../Sass/app.scss'
import TopContent from '../TopContent/TopContent';

function App() {
  return (
    <div className="App">
    <Header />
      <main>
       <TopContent />
        <section>
          middle (form) section
          <form>
            form
            <button>submit button</button>
          </form>
        </section>
        <section>
          bottom section
          image
          <section>
            top info
          </section>
          <section>
            middle info
            image
          </section>
          <section>
            bottom info
            image
          </section>
        </section>
        <footer>
          top footer
          <div>
            sub headline
            <button>Get Started</button>
          </div>
        </footer>
        <footer>
          bottom footer
          sub headline
          <div>Features list</div>
          <div> Resources list</div>
          <div>Company list</div>
          <div>Social Icons</div>
        </footer>
      </main>
    </div>
  );
}

export default App;
