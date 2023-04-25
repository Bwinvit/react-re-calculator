import { useSelector, useDispatch } from "react-redux";
import { addNum } from "../reducer/inputReducer";

const Calculator = () => {
  const arrEq = useSelector((state) => state.inputReducer.arrEq);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{arrEq}</div>
      <div>
        <button onClick={() => dispatch(addNum(0))}>0</button>
        <button onClick={() => dispatch(addNum(1))}>1</button>
        <button onClick={() => dispatch(addNum(2))}>2</button>
      </div>
    </div>
  );
};

export default Calculator