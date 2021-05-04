import { mailService } from './mail.service/mailService.js';
import { MailList } from './cmps/MailList.jsx';
export class MailApp extends React.Component {


    state = {
        emails: [],
        myMail: '',
        unreadCount: null,
        filterBy: {
            mailText: '',
            currMailBox: 'inbox',
            isUnread: false
        },
    }

    componentDidMount() {
        this.loadEmails();
        mailService.myMail()
            .then(myMail => this.setState({ myMail }));
        console.log('mailService.myMail():', mailService.myMail())
    }


    loadEmails = () => {
        mailService.query().then(emails => this.setState({ emails }));
        console.log('mailService.query:', mailService.query())
    }


    render() {
        // const emailsForShowing =(mailService.query())
        const emailsForShowing = (this.state.emails)
        return (
            <div>
                <MailList emails={emailsForShowing} />
                I am your Email</div>

          

        )
    }
}



