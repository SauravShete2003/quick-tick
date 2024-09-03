import "./NoteCard.css";
import deleteImg from "./../../assets/delete-btn.png";
function deleteNote(index) {
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(savedNotes));
  window.location.reload();
}

function NoteCategory({ category }) {
  const CATEGORY_STYLES = {
    work: { emoji: "💼", bgColor: "#0099ff" },
    personal: { emoji: "📝", bgColor: "#ADD8E6" },
    learning: { emoji: "📚", bgColor: "#D8BFD8" },
    health: { emoji: "💪🏻", bgColor: "#FFB6C1" },  
    shopping: { emoji: "🛍️", bgColor: "#FFE4B5" },
    grocery: { emoji: "🥬", bgColor: "#90EE90" },
  };

  const { emoji = "❓", bgColor = "#ccc" } = CATEGORY_STYLES[category] || {};

  return (
    <div className="note-category" style={{ backgroundColor: bgColor }}>
      <span className="category-emoji">{emoji}</span>
      <span className="category-name">{category}</span>
    </div>
  );
}

function NoteCard({ title, description, category, emoji, index }) {
  return (
    <div className="note-card-container">
      <div className="emoji-container">
        <span className="note-card-emoji">{emoji}</span>
      </div>
      <div className="note-card-content">
        <h3 className="note-card-title">{title}</h3>
        <p className="note-card-description">{description}</p>
        <NoteCategory category={category} />
        <img
          onClick={() => {
            deleteNote(index);
          }}
          src={deleteImg}
          className="delete-icon"
          alt="delete-icon"
        />
      </div>
    </div>
  );
}

export default NoteCard;
