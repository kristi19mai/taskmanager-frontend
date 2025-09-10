import styled from "styled-components";
const DateInput = ({ handleChangeDate }) => {
  return (
    <Wrapper className="form-group">
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  .form-label {
    display: block;
    font-size: var(--small-text);
    margin-bottom: 0.5rem;
    letter-spacing: var(--letterSpacing);
    font-weight: 600;
  }
  .form-input {
    width: 100%;
    padding: 0.375rem 0.75rem;
    border-radius: var(--borderRadius);
    background: var(--backgroundColor);
    border: 1px solid var(--grey-200);
    font-size: var(--small-text);
    color: var(--grey-500);
    outline: none;
  }
`;

export default DateInput;
