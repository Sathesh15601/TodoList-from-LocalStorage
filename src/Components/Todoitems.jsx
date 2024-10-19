import PropTypes from "prop-types";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png"; // Assuming not_tick is an unchecked icon
import delete_icon from "../assets/delete.png";

const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img
          src={isComplete ? tick : not_tick}
          alt="status icon"
          className="w-7"
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt="delete icon"
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

Todoitems.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isComplete: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todoitems;
