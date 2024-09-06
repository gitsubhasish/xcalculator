import React from "react";
import Button from "./Button";

const ButtonContainer = ({ onButtonClick }) => {
  return (
    <div style={{ width: 275, height: 500, padding: 10, marginTop: 40 }}>
      <div className="row">
        <div className="col-3">
          <Button value="7" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="8" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="9" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="+" onClick={onButtonClick} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <Button value="4" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="5" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="6" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="-" onClick={onButtonClick} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <Button value="1" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="2" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="3" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="*" onClick={onButtonClick} />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-3">
          <Button value="c" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="0" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="=" onClick={onButtonClick} />
        </div>
        <div className="col-3">
          <Button value="/" onClick={onButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default ButtonContainer;
