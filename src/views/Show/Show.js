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
      {notes.map((noteObject, i) => {
        const { title, description, category, emoji } = noteObject;
        return (
          <NoteCard
            key={i}
            title={title}
            description={description}
            category={category}
            emoji={emoji}
          />
        );
      })}
      <HomeBtn />
    </div>
  );
}

export default Show;
