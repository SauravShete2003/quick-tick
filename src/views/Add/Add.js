import "./Add.css";
import HomeBtn from "../../components/HomeBtn/HomeBtn";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import toast from "react-hot-toast";
function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addNote = ()=>{
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const newNote = {
      title,
      description,
      category,
      emoji
      }
      notes.push(newNote);
      localStorage.setItem("notes", JSON.stringify(notes))
      toast.success('Notes add successfully👍🏻')
  }
  return (
    <div>
      <h1 className="center text-primary home-heading">Add Notes📝</h1>
      <form className="form">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          placeholder="Enter your description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          value={category}
          className="form-control category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="select">Select Category</option>
          <option value="personal">Personal</option>
          <option value="shopping">Shopping</option>
          <option value="learning">Learning</option>
          <option value="work">Work</option>
          <option value="health">Health</option>
          <option value="grocery">Grocery</option>
          <option value="hobbies">Hobbies</option>
        </select>

        <div
          className="form-control center"
          style={{backgroundColor : 'white' }}        
          onClick={() => {
            setShowEmojiPicker(true);
          }}
        >
          {emoji ? emoji : 'Select Emoji'}
        </div>

        <div className="button-conatiner" >

          <EmojiPicker
            open={showEmojiPicker}
            height={"350px"}
            width={"400px"}
            skinTonesDisabled={true}
            onEmojiClick={(emojiObject) => {
              setEmoji(emojiObject.emoji);
              setShowEmojiPicker(false);
            }}
            className="emoji-picker"
          />

          <button
            className="button add-btn"
            onClick={addNote}>
            Add Note ⊕
          </button>
        </div>
      </form>
      <HomeBtn />
    </div>
  );
}

export default Add;
