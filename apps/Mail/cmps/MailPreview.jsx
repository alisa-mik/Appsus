const { Link } = ReactRouterDOM;

export function MailPreview({ email, onDeleteMail, onToggleIsRead }) {
    const isReadIcon = (email.isRead) ? '028-email-4' : '031-email-1';
    const isReadClass = (!email.isRead) ? 'not-read-mail' : '';
    return (
        <Link to={`/mail/${email.id}`}>

            <div className={`email-list-line  ${isReadClass} flex space-between`}>
                <section key={email.id} className="hover">
                    <div className="from-to-line flex">
                        <div className="input-container flex">
                            <input type="checkbox" className="flex"></input>
                        </div>
                        <div className="from-to-container flex">
                            <p className="from flex">
                                From: {email.from}
                            </p>
                            <p className="to flex">
                                To: {email.to}
                            </p>
                        </div>
                        <div className="btns-container flex">
                            <button className="garbage" onClick={(ev) => onDeleteMail(ev, email.id)}>
                                <img src='assets/icons/mail.icons/982377-communication/svg/007-email-25.svg' />
                            </button>
                            <button className="toggle-read"
                                onClick={(ev) => onToggleIsRead(ev, email.id)}>
                                <img src={`assets/icons/mail.icons/982377-communication/svg/${isReadIcon}.svg`} />
                            </button>
                        </div>
                    </div>
                    <div className="subject-body-time flex">
                        <div className="subject flex">
                            Subject: {email.subject.substr(0, 40)}
                        </div>
                        <div className="body flex">
                            ...{email.body.substr(0, 50)}...
                    </div>
                        <div className="time flex">
                            {email.sentAt}
                        </div>
                    </div>
                </section>

            </div>
        </Link>

    )


}