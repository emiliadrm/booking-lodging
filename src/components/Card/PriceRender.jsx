import iconDolarEmpty from "./resources/Icon-dollar-sign-unk.svg";
import iconDolarFull from "./resources/Icon-dollar-sign-full.svg";

export default function PriceRender(props) {
    if (props === 1) {
      return (
        <div className="priceDrawingComponent">
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarEmpty} alt="" />
          <img src={iconDolarEmpty} alt="" />
          <img src={iconDolarEmpty} alt="" />
        </div>
      );
    }
    if (props === 2) {
      return (
        <div className="priceDrawingComponent">
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarEmpty} alt="" />
          <img src={iconDolarEmpty} alt="" />
        </div>
      );
    }
    if (props === 3) {
      return (
        <div className="priceDrawingComponent">
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarEmpty} alt="" />
        </div>
      );
    }
    if (props === 4) {
      return (
        <div className="priceDrawingComponent">
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarFull} alt="" />
          <img src={iconDolarFull} alt="" />
        </div>
      );
    }
  }