import { MailPreview } from '../cmps/MailPreview.jsx';

export function MailList({ emails,onUnread }) {
  if (!emails || emails.length === 0) return <div>You don't have any emails...</div>;

  return (

    <section className="email-list">


      <div className="email-list-headline">
        <p>Your awesome emails</p>
        <button onClick={onUnread}>What awaits you?</button>
      </div>


      <div className="email-list-line">
        {emails.map(email => {
          return <MailPreview key={email.id} email={email}
            // onRemove={onRemove} onToggleIsRead={onToggleIsRead}
             />
        })}
      </div>


      {/* <div className="email-list-line">
        {emails.map((email) => {
          return <p key={email.id}>
          {email.from}**
           {email.subject}**
           {email.to}**
           BODY**
           {email.sentAt}**
           </p>
        })}
      </div> */}


    </section >
  );


}