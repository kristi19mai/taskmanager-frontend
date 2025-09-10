import styled from "styled-components";
const FormRow = ({
  type,
  placeholder,
  name,
  title,
  maxlength,
  minlength,
  defaultValue,
  value,
  handleChange,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name} className="form-label">
        {title}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="form-input"
        placeholder={placeholder}
        required
        maxLength={maxlength}
        minLength={minlength}
        defaultValue={defaultValue}
        value={value}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 1rem;
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

export default FormRow;
