const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { AppHeader } from 'cmps/AppHeader.jsx'
import { AppFooter } from 'cmps/AppFooter.jsx'
import { MailDetails } from './apps/Mail/cmps/MailDetails.jsx'
import { BooksApp } from 'apps/Books/BooksApp.jsx'
import { KeepApp } from 'apps/Keep/KeepApp.jsx'
import { MailApp } from 'apps/Mail/MailApp.jsx'
import { Home } from 'cmps/Home.jsx'


export function App() {
    return (
        <Router>
            <section className="page-container">
                <AppHeader />
                <main className="main">
                    <Switch>
                        {/* <Route component={CarEdit} path="/car/edit/:carId?" /> */}
                        {/* <Route component={CarDetails} path="/car/:carId/:carVendor?" /> */}
                        
                        <Route component={Home} exact path="/" />
                        <Route component={MailDetails} path="/mail/:emailId" />
                        <Route component={MailApp} path="/mail" />

                        <Route component={KeepApp} path="/keep" />
                        <Route component={BooksApp} path="/books" />
                        {/* <Route component={AboutUs} path="/about" /> */}
                        {/* If we want to send props to a route: */}
                        {/* <Route render={(props)=> <AboutUs {...props} name="popo"/>} path="/about" /> */}
                    </Switch>
                </main>
                <AppFooter />

            </section>
        </Router>
    )
}


