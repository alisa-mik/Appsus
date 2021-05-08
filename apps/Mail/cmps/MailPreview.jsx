const { Link } = ReactRouterDOM;

export function MailPreview({ email, onDeleteMail, onToggleIsRead }) {
    const isReadIcon = (email.isRead) ? '021-mail' : '013-envelope';
    const isReadClass = (!email.isRead) ? 'not-read-mail' : '';

    return (
        <Link to={`/email/${email.id}`}>

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
                                <img src='assets/icons/AppIcons/002-bin.svg' />
                            </button>
                            <button className="toggle-read"
                                onClick={(ev) => onToggleIsRead(ev, email.id)}>
                                <img src={`assets/icons/AppIcons/${isReadIcon}.svg`} />
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