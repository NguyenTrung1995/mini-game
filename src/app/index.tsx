import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { ITEM_KEY_NAME } from "app/consts";
import { selectCurrentItem, selectErrorMessage } from 'store/selectors';
import { fetchCurrentItem, updateCurrentItem, resetCurrentItem } from 'store/action';

import Button from "app/components/button";

const App = () => {
  const dispatch = useDispatch();

  const { currentItem, isVisitedYellow } = useSelector(selectCurrentItem) || {};
  const errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    dispatch(fetchCurrentItem());
  }, []);

  const handleOnSelectItem = (itemKeyName: string) => {
    if (itemKeyName === currentItem) return;
    dispatch(updateCurrentItem(itemKeyName));
  }

  const handleReset = () => {
    dispatch(resetCurrentItem());
  };

  const settings = (currentItem: string, isVisitedYellow: boolean) => [
    {
      name: ITEM_KEY_NAME.GREEN,
      disabled: currentItem === ITEM_KEY_NAME.YELLOW
    },
    {
      name: ITEM_KEY_NAME.BLUE,
      disabled: false
    },
    {
      name: ITEM_KEY_NAME.YELLOW,
      disabled: currentItem === ITEM_KEY_NAME.GREEN || (currentItem === ITEM_KEY_NAME.BLUE && isVisitedYellow)
    }
  ];

  return (
    <div className="container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {settings(currentItem, isVisitedYellow).map((item, index) => (
        <Button
          key={`${item}_${index}`}
          color={item.name as 'blue' | 'yellow' | 'green'}
          className={`${currentItem === item.name ? "isSelected" : ""}`}
          disabled={item.disabled}
          onClick={() => handleOnSelectItem(item.name)}
        />
      ))}
      <Button
        text="Reset"
        className="btn-reset"
        shape="round"
        onClick={handleReset}
      />
    </div>
  );
};

export default App;
