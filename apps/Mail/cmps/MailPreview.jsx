
export function MailPreview({ email, onDeleteMail, onToggleIsRead }) {

    return (

        <div className="email-list-line flex space-between">
            <section key={email.id}>
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
                        <button className="garbage" onClick={onDeleteMail}>
                            <img src='assets/icons/general.icons/1361849-interface-button/svg/002-bin.svg' />
                        </button>
                        <button className="toggle-read" onClick={onToggleIsRead}>
                            <img src='assets/icons/general.icons/1361849-interface-button/svg/021-mail.svg' />

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
    )


}