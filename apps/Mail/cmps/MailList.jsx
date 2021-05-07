import { MailPreview } from '../cmps/MailPreview.jsx';
import { mailService } from '../mail.service/mailService.js';


export function MailList({ emails, onUnread, getTime, onDeleteMail, onToggleIsRead }) {
  function unreadCount() {
    const unreadMailsCount = emails.filter(mail => !mail.isRead)
    return unreadMailsCount.length;
  }
  if (!emails || emails.length === 0) return <div>You don't have any emails...</div>;

  return (
    <main className="email-bgc">
      <section className="email-list">
        <div className="email-list-headline flex space-between">
          <p>Your awesome emails</p>
          <p id="mail-time">{new Date().toLocaleString()}</p>
          {/* <p id="mail-time">{MailService.getTime()}</p> */}
          <button onClick={onUnread}>What awaits you? ({unreadCount()})
           </button>
        </div>

        <div className="email-list-line">
          {emails.map(email => {
            return <MailPreview key={email.id} email={email}
              onDeleteMail={onDeleteMail} onToggleIsRead={onToggleIsRead}
            />
          })}
        </div>
      </section >
    </main>
  );
}