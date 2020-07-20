import React, { ChangeEventHandler } from 'react';
import classes from './Input.module.css';
import {
  InputElementConfig,
  SelectElementConfig,
} from '../../../containers/Checkout/ContactData/ContactData';

interface InputProps {
  elementType: string;
  label?: string;
  elementConfig: SelectConfig | InputElementConfig;
  ShouldValidation: boolean;
  invalid: boolean;
  hasTouched: boolean;
  changed: ChangeEventHandler;
  value: string;
}

interface SelectConfig {
  options: SelectElementConfig[];
}

const Input: React.FC<InputProps> = (props) => {
  let InputElement = undefined;

  // Type checker || Type Guard
  const isSelectInput = (
    input: SelectConfig | InputElementConfig
  ): input is SelectConfig => (input as SelectConfig).options !== undefined;

  const inputClasses = [classes.InputElement];

  if (!props.invalid && props.ShouldValidation && props.hasTouched) {
    inputClasses.push(classes.Invalid);
  } else {
    inputClasses.filter((value) => value !== classes.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      InputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      InputElement = (
        <textarea className={inputClasses.join(' ')} {...props.elementConfig} />
      );
      break;
    case 'select':
      /* if isSelectInput returned boolean value is banded to variable and that variable is passed to if statement, 
      compiler will throw error - Property 'options' does not exist on type 'InputElementConfig' */

      // let isSelect = isSelectInput(props.elementConfig);
      if (isSelectInput(props.elementConfig))
        InputElement = (
          <select className={inputClasses.join(' ')} onChange={props.changed}>
            {props.elementConfig.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        );
      break;
    default:
      InputElement = (
        <input className={classes.InputElement} {...props.elementConfig} />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label} htmlFor="">
        {props.label}
      </label>
      {InputElement}
    </div>
  );
};

export default Input;
