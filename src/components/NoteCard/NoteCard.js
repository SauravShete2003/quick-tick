import "./NoteCard.css";
function NoteCard({ title, description, category, emoji }) {
  return (
    <div className="note-card-conatiner">
      <div className="emoji-contanier">
        <span className="note-card-emoji">{emoji}</span>
      </div>
      <div>
        <h3 className="note-card-title">{title}</h3>
        <p className="note-card-description">{description}</p>
        <span className="note-card-category">{category}</span>
      </div>
    </div>
  );
}

export default NoteCard;
