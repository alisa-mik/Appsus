


export function MailList({ emails }) {
    console.log('emails:', emails)
    if (!emails || emails.length === 0) return <div>No emails to show...</div>;
    // return (
    //     <section className="email-list">
    //         <h1>TEST</h1>
    //         {/* {emails[8].body} */}
    //     </section>

    return (
        <ol>
          {emails.map((email) => (
            <li key={email.id}>{email}</li>
          ))}
        </ol>
      );

    // )
}