import { AppHeader } from './cmps/AppHeader.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'


export function App() {
    return (
        // <Router>
        <section className="page-container">
           
           <AppHeader />
           
           <div className="main">
               <div><h3>Enjoy the simple life</h3>
               All your favorite apps, in one place.
               </div>
               <img src="img/intro.jpg" alt=""/>
           </div>
            
            <AppFooter />

           

        
        </section>
        // </Router>
    )
}


