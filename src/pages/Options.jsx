import React, { useContext, useState } from 'react';
import Navigation from '../components/Navigation';
import { OptionsContext } from '../context';
import Button from '../UI/Button';
import Checkbox from '../UI/Checkbox';
import Number from '../UI/Number';
import RadioGroup from '../UI/RadioGroup';

const Options = () => {
  const {options, setOptions} = useContext(OptionsContext);

  const changeOptions = (option, value) => {
    const newOptions = {...options};
    newOptions[option] = value;

    setOptions(newOptions);
  }

  return (
    <div className='page'>
      <Navigation>
        <Button to="/">К игре</Button>
      </Navigation>

      <div className="options">
        <Number
          min="5"
          max="10"
          label="Размер поля"
          value={options.size}
          name="size"
          cb={changeOptions}
        />

        <RadioGroup
          value={options.order}
          name="order"
          cb={changeOptions}
          label="Очёрёдность"
          options={[
            {value: "up", text: "По возрастанию"},
            {value: "down", text: "По убыванию"},
            {value: "random", text: "Хаотично"}
          ]}
        />

        <Checkbox
          label="Штрафное время"
          value={options.penalty}
          name="penalty"
          cb={changeOptions}
        />

        <Checkbox
          label="Подсветка"
          value={options.highlight}
          name="highlight"
          cb={changeOptions}
        />

        <Checkbox
          label="Перемешивать каждый ход"
          value={options.mix}
          name="mix"
          cb={changeOptions}
        />
      </div>
    </div>
  )
}

export default Options;