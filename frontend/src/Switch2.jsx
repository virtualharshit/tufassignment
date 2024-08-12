import styled from "styled-components";

const Switch2 = ({ value, handleInputChange }) => {
  return (
    <Style>
      <div className="button-cover">
        <div className="button b2" id="button-16">
          <input
            type="checkbox"
            className="checkbox"
            checked={value}
            onChange={handleInputChange}
          />
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
      </div>
    </Style>
  );
};

export default Switch2;

const Style = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .button-cover,
  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .button {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .button.b2 {
    border-radius: 2px;
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    transition: 0.3s ease all;
    background-color: #fcebeb;

    z-index: 1;
  }

  /* Button 16 */
  #button-16 .knobs:before {
    content: "off";
    position: absolute;
    top: 10%;
    left: 5%;
    width: 50%;
    height: 80%;
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 4px;
    background-color: #f44336;
    border-radius: 2px;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }

  #button-16 .checkbox:active + .knobs:before {
    width: 46px;
  }

  #button-16 .checkbox:checked:active + .knobs:before {
    margin-left: -26px;
  }

  #button-16 .checkbox:checked + .knobs:before {
    content: "on";
    left: 50%;
    width: 45%;
    background-color: #92da3d;
    font-size: 1rem;
  }

  #button-16 .checkbox:checked ~ .layer {
    background-color: #d7ffaa;
  }
`;
