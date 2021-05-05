
export function MailPreview({ email }) {

    return (

        <div className="email-list-line flex space-between">
            <line key={email.id}>
                <p className="from-to-line flex">
                    <input type="checkbox" className="flex"></input>
                    <p className="from flex">
                    </p>
                        From:{email.from}
                    <p className="to flex">
                    </p>
                        To:{email.to}
                </p>

                <p className="subject-body-time flex">
                    <div className="subject flex">
                        Subject:{email.subject.substr(0, 20)}
                    </div>
                    <div className="body flex">
                        {email.body.substr(0, 70)}...
                    </div>
                    <div className="time flex">
                        {email.sentAt}
                    </div>
                </p>
            </line>

        </div>
    )


}