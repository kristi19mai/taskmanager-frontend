
const DateInput = ({ handleChangeDate }) => {
  return (
    <div className="form-group">
      <label htmlFor="date" className="form-label">
        Fälligkeitsdatum hinzufügen
      </label>
      <input
        type="date"
        name="dueDate"
        id="date"
        className="form-input"
        onChange={handleChangeDate}
      />
    </div>
  );
};

export default DateInput;
