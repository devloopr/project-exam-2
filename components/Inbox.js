function Inbox({ name, email, subject, messages }) {
  return (
    <div>
      <p> From: {name}</p>
      <p> From: {email}</p>
      <p> From: {subject}</p>
      <p> From: {messages}</p>
    </div>
  );
}

export default Inbox;
