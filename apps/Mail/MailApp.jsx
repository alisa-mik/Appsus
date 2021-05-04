import { mailService } from './mail.service/mailService.js';
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
    }

    
    loadEmails = () => {
        mailService.query().then(emails => this.setState({ emails }));
    }


    render() {
        return (
            <h1> I am your Email</h1>
            // <h1> {this.state.emails}</h1>

       )}
        }

    

 