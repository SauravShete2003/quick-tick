import "./Show.css";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard/NoteCard";
function Show() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <div>
      <h1 className="center text-primary">View Notes 👁️</h1>
      <div className="note-container">
        {notes.map((noteObject, index) => {
          const { title, description, category, emoji } = noteObject;
          return (
            <NoteCard
              key={index}
              title={title}
              description={description}
              category={category}
              emoji={emoji}
            />
          );
        })}
      </div>
      <HomeBtn />
    </div>
  );
}

export default Show;
