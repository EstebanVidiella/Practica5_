import React from "react";
import { FC, useState } from "react";
import "./input.css";

interface InputTextProps {
  changeFilter: Function;
}

const InputText: FC<InputTextProps> = (props) => {
  const [searchName, setName] = useState<string>("");
  const [type, setType] = useState<boolean>(false);

  return (
    <div className="container">
      <div className="box">
        <div className="container_search">
          <input
            placeholder="Introduzca un nombre y pulse buscar"
            className="input_text"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <div
            className="button"
            onClick={() => {
              props.changeFilter(searchName, type);
            }}
          >
            Buscar
          </div>
        </div>
        <div className="container_type">
          {!type && "*"}
          <div
            className="type"
            onClick={() => {
              setType(false);
            }}
          >
            Ciudad
          </div>
          {type && "*"}
          <div
            className="type"
            onClick={() => {
              setType(true);
            }}
          >
            País
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputText;
