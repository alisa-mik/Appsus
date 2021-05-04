const { NavLink, withRouter } = ReactRouterDOM
class _AppHeader extends React.Component {

    render() {
        return (
            <header className="main-header flex space-between">
                <div className="logo"><h2>Dr. Appsus</h2></div>

                <ul className="main-nav flex clear-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/mail">Email</NavLink></li>
                    <li><NavLink to="/keep">Keep</NavLink></li>
                    <li><NavLink to="/books">Books</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </header>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)