import { useSelector, useDispatch } from "react-redux";
import { addNum, ac } from "../reducer/inputReducer";
import styled from "styled-components";

const Cal = styled.div`
  width: 70vw;
  height: 60vh;
  background-color: #d9d9f2;
  border-radius: 2rem;
  display: grid;
`;

const Display = styled.div`
  width: 60vw;
  height: 10vh;
  background-color: #0d0d26;
  margin: 2rem auto;
  border-radius: 2rem;
  display: flex;
`;

const DisplayNum = styled.div`
  padding: 1rem;
  margin: auto;
`;

const NumGroup = styled.div`
  margin: 1rem auto 1rem;
  width: 56vw;
  height: 35vh;
  background-color: #0d0d26;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  padding: 1rem;
  column-gap: 1rem;
  row-gap: 1rem;
`;

const NumPad = styled.div`
  background-color: #0d9;
  border-radius: 2rem;
  align-items: stretch;
  justify-items: center;
  padding-top: 1rem;
`;

const numPadArr = ["AC", "X", "/", "+", 7, 8, 9, "-", 4, 5, 6, "=", 1, 2, 3, 0];

const Calculator = () => {
  const arrEq = useSelector((state) => state.inputReducer.arrEq);
  const dispatch = useDispatch();

  const handleInputPad = (eachNumPad) => {
    console.log('data', arrEq, eachNumPad);
  
    if (typeof eachNumPad === "number") {
      if (eachNumPad === 0) {
        if (arrEq.length > 0 && arrEq[0] !== 0) {
          dispatch(addNum(0))
        }
      } else {
        dispatch(addNum(eachNumPad))
      }
    } else if (eachNumPad === "AC") {
      dispatch(ac());
    }
  };

  return (
    <div>
      <Cal>
        <Display>
          <DisplayNum>{arrEq}</DisplayNum>
        </Display>
        <NumGroup>
          {numPadArr.map((eachNumPad) => {
            return (
              <NumPad onClick={() => handleInputPad(eachNumPad)}>
                {eachNumPad}
              </NumPad>
            );
          })}
        </NumGroup>
      </Cal>
    </div>
  );
};

export default Calculator;
