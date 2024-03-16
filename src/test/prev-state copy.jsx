import { useState } from "react";

/**
 * 이전 상태 (PrevState) 재활용하기 (2)
 */
function PrevStateCopy() {
  const [cardState, setCardState] = useState({
    cardNumber: 0,
    cardCompany: "",
  });

  const [openCardPopup, setOpenCardPopup] = useState(false);

  // 같은 상태를 참조하여 변경하는 경우, 사이드이펙트가 생겨날 수 있음.
  const handlerCardNumber = (cardNumber) => {
    // Before
    // setCardState({
    //   ...cardState,
    //   cardNumber,
    // });

    // After
    // 이전 상태를 받아서 사용!
    // 웬만하면 updaterFunc을 사용하자
    setCardState((prevState) => ({
      ...prevState,
      cardNumber,
    }));

    if (cardNumber.length === 0) {
      setOpenCardPopup(true);
    }
  };

  const handlerCardCompany = (cardCompany) => {
    setCardState((prevState) => ({
      ...prevState,
      cardCompany,
    }));

    setOpenCardPopup(false);
  };

  return (
    <div>
      <input
        type="number"
        value={cardState.cardNumber}
        onChange={(e) => handlerCardNumber(e.target.value)}
      />
      <input
        type="text"
        value={cardState.cardCompany}
        onChange={(e) => handlerCardCompany(e.target.value)}
      />
    </div>
  );
}

export default PrevStateCopy;
