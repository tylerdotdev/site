import React, { useState } from "react"
import styled from "styled-components"

const Label = styled.div`
  margin-left: 30px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;

  color: #ffffff;

  mix-blend-mode: normal;

  margin-bottom: 20px;
`

const Input = styled.input`
  opacity: 0;
  cursor: pointer;
  position: absolute;
`

const NewBox = styled.span`
  position: absolute;
  opacity: 1;
  margin-top: 2px;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.checked ? "#0ABDC6" : "transparent")};
  border: ${props =>
    props.checked ? "2px solid 0ABDC6" : "2px solid rgba(255, 255, 255, 0.5)"};
  box-sizing: border-box;
  border-radius: 1px;
  transition: all 0.3s ease-out;
  cursor: pointer;
`

const Icon = styled.svg`
  fill: none;
  stroke: #151720;
  stroke-width: 2px;
  visibility: ${props => (props.checked ? "visible" : "hidden")};
`

const Checkbox = ({ label, name }) => {
  const [checked, setChecked] = useState(false)

  const checkboxChange = e => {
    setChecked(!checked)
  }

  return (
    <label>
      <Input name={name} value="x" type="checkbox" />
      <NewBox onClick={checkboxChange} checked={checked}>
        <Icon checked={checked} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </NewBox>
      <Label>{label}</Label>
    </label>
  )
}

export default Checkbox
