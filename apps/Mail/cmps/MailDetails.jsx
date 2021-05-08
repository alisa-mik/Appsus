import { mailService } from '../mail.service/mailService.js';

// const { withRouter } = ReactRouterDOM;

export class MailDetails extends React.Component {

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
        // .then(this.props.onToggleIsRead(null, emailId, true));
    }

    
    goBack = () => {
        history.back()
    }

    render() {
        
        const { email } = this.state;
        if (email){
            var textAlign = (email.isHebrew) ? 'right' : 'left';
            email.isRead= true;
        }         
        if (!email) return <div>Cant find your mail...</div>
        return (
            <section>

            <nav className="email-details-btns flex" >
                <div className="firs-btns-container flex">
                    <button className="back-btn" onClick="goBack()">Back</button>
                    <button className="prev-btn">Prev</button>
                    <button className="next-btn">Next</button>
                    <button className="delete-btn">Delete</button>
                </div>
                <div className="second-btns-container flex">
                    <button className="save-btn">Save2Notes</button>
                    <button className="reply-btn">Reply</button>
                </div>
            </nav>
            <main className="mail-content flex">
                <div className="from-to-date flex">
                    <p className="details-from flex">From: {email.from}  </p>
                    <p className="details-to flex">  To:{email.to}  </p>
                    <p className="details-sentAt flex">  {email.sentAt}  </p>   
                </div>
                <div className="mail-subject flex"> {email.subject} </div>
                <pre className={`mail-body flex ${textAlign}`}> {email.body} </pre>


            </main>
            </section>
        )

    }
}

// export const EmailDetails = withRouter(_MailDetails);

