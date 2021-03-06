import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 45px;
`

const Label = styled.label`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.25em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.87);

  margin-bottom: 15px;
`

const InputField = styled.input`
  width: 540px;
  padding: 10px 0;
  border: none;
  background: none;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;

  mix-blend-mode: normal;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: rgba(255, 255, 255, 0.37);
  }

  @media (max-width: 500px) {
    width: 250px;
  }
`

const Line = styled.div`
  width: 540px;
  height: 1px;
  background: rgba(255, 255, 255, 0.6);

  @media (max-width: 500px) {
    width: 250px;
  }
`

const Input = ({ label, name, field, fields, setFields }) => {
  const handleChange = e => {
    e.preventDefault()

    const newFields = {
      ...fields,
    }

    newFields[name] = e.target.value

    setFields(newFields)
  }

  return (
    <>
      <Container>
        <Label>{label}</Label>
        <InputField
          name={name}
          id={label}
          type="text"
          value={field}
          placeholder={`Your ${label}`}
          onChange={handleChange}
        />
        <Line />
      </Container>
    </>
  )
}

export default Input
