import { MailPreview } from '../cmps/MailPreview.jsx';

export function MailList({ emails, onUnread }) {
  if (!emails || emails.length === 0) return <div>You don't have any emails...</div>;

  return (

    <main className="email-bgc">

      <section className="email-list">
        <div className="email-list-headline flex space-between">
          <p>Your awesome emails</p>
          <p id="mail-time">{ new Date().toLocaleString()}</p>
          <button onClick={onUnread}>What awaits you?</button>
        </div>

        <div className="email-list-line">
        {emails.map(email => {
          return <MailPreview key={email.id} email={email}
            // onRemove={onRemove} onToggleIsRead={onToggleIsRead}
             />
        })}
        </div>




     


      </section >
    </main>

  );


}