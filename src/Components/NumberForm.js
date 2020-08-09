import React from "react";
import styled from "styled-components";

const NumberForm = ({
  className,
  handleSubmit,
  handleChange,
  errors,
  values,
}) => {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="entrer votre numero"
          name="number"
          value={values.number}
        />
        <button type="submit">ok</button>
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      </form>
    </div>
  );
};

export default styled(NumberForm)`
  display: flex;
  flex-direction: column;
  form {
    margin-bottom: 2em;
  }
  input {
    padding: 0.5em 1.5em;
    border-radius: 10px;
    border: 0.4px grey solid;
    background: transparent;
    color: white;
    outline: none;
    margin: 20px;
  }
  button {
    padding: 0.5em 1.5em;
    background: transparent;
    color: white;
    border-radius: 10px;
    border: 0.4px grey solid;
    transition: all 0.3s ease;
    outline: transparent;
  }

  button:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
  button:active {
    transform: scale(1);
    background: grey;
    cursor: pointer;
  }
`;
