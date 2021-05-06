import { mailService } from './mail.service/mailService.js';
import { MailList } from './cmps/MailList.jsx';
import { MailPreview } from './cmps/MailPreview.jsx';
export class MailApp extends React.Component {


    state = {
        emails: [],
        myMail: '',
        unreadCount: null,
        filterBy: {
            // mailText: '',
            // currMailBox: 'inbox',
            isUnread: false
        },
    }

    componentDidMount() {
        this.loadEmails();
        mailService.myMail()
            .then(myMail => this.setState({ myMail }));
    }


    loadEmails = () => {
        mailService.query().then(emails => this.setState({ emails }));
        console.log('mailService.query:', mailService.query())
    }

    onUnread = () => {
        const filterCopy = { ...this.state.filterBy };
        filterCopy.isUnread = true;
        this.setState({ filterBy: filterCopy },this.loadEmails)
        console.log(this.setState({ filterBy: filterCopy }))
    
    }

    onDeleteMail = (ev, emailId) => {
        ev.preventDefault();
        console.log('emailId:', emailId)
        console.log('ev:', ev)
        mailService.remove(emailId).then(this.loadEmails);
    }

    onToggleIsRead = (ev, emailId) => { 
        if (ev) ev.preventDefault();             
        mailService.toggleIsRead(emailId).then(this.loadEmails());
    }



    render() {
        const emailsForShowing = (this.state.emails)
        return (
            <div>
                <MailList emails={emailsForShowing}
                 onUnread={this.onUnread} />
                 </div>

          

        )
    }
}



