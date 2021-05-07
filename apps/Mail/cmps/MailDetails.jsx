import { mailService } from '../mail.service/mailService.js';

const { withRouter } = ReactRouterDOM;

class _MailDetails extends React.Component {

    state = {
        email: null
    }


    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.emailId !== this.props.match.params.emailId) {
            this.loadEmail();
        }
    }

    loadEmail = () => {
        const { emailId } = this.props.match.params;
        mailService.getById(emailId).then(email => this.setState({ email }))
            .then(this.props.onToggleIsRead(null, emailId, true));
    }


    render() {
        const { email } = this.state;
        console.log('email:', email)
        if (!email) return <div>No mail to display...</div>

        return (
            
            <div className="test">{email.body}</div>
        )
    }
}

export const EmailDetails = withRouter(_MailDetails);

