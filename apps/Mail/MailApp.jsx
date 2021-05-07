import { mailService } from './mail.service/mailService.js';
import { MailList } from './cmps/MailList.jsx';
import { SearchLine } from './cmps/SearchLine.jsx';
import { MailPreview } from './cmps/MailPreview.jsx';
export class MailApp extends React.Component {


    state = {
        emails: [],
        myMail: '',
        unreadCount: null,
        filterBy: {
            searchText: '',
            isUnread: false
        },
    }

    componentDidMount() {
        this.loadEmails();
        mailService.myMail()
            .then(myMail => this.setState({ myMail }));
    }


    loadEmails = () => {
        mailService.query(this.state.filterBy).then(emails => this.setState({ emails }));
        // console.log('mailService.query:', mailService.query())
    }

    onUnread = () => {
        const filterCopy = { ...this.state.filterBy };
        filterCopy.isUnread = true;
        this.setState({ filterBy: filterCopy }, this.loadEmails)
    }

    onDeleteMail = (ev, emailId) => {
        ev.preventDefault();
        mailService.remove(emailId).then(this.loadEmails);
    }

    onToggleIsRead = (ev, emailId) => {
        if (ev) ev.preventDefault();
        mailService.toggleIsRead(emailId).then(this.loadEmails());
    }

    onSetFilter = (key, value) => {
        console.log('value:', value)
        const filterCopy = { ...this.state.filterBy };
        filterCopy[key] = value;
        this.setState({ filterBy: filterCopy },() => this.loadEmails(this.state.filterBy))
    }




    render() {
        const emailsForShowing = (this.state.emails)
        return (

            
            <div>

                <SearchLine setFilter={this.onSetFilter}/>
                <MailList emails={emailsForShowing}
                    onUnread={this.onUnread} onDeleteMail={this.onDeleteMail}
                    onToggleIsRead={this.onToggleIsRead} />
            </div>



        )
    }
}



