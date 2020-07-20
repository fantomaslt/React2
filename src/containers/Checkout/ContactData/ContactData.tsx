import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../axios-orders';
import Spiner from '../../../components/UI/Spinner/Spinner';
import { RouteComponentProps } from 'react-router-dom';
import { IngredientBurgerBuilder } from '../../BurgerBuilder/BurgerBuilder';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc1/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import { burgerBuilderReducerProps } from '../../../store/reducers/burgerBuilder';

interface OwnProps extends RouteComponentProps {
  onOrderBurger: (x: OrderDataProps) => void;
}

interface StateProps {
  ings: IngredientBurgerBuilder;
  price: number;
  loading: boolean;
}

type Props = OwnProps & StateProps;

export interface CustomerData {
  name: string;
  email: string;
  street: string;
  zipCode: number;
  deliveryMethod: string;
}

export interface ContactDataState extends CustomerData {
  orderForm: OrderForms;
}

interface OrderForms {
  name: InputTypeInput;
  email: InputTypeInput;
  street: InputTypeInput;
  zipCode: InputTypeInput;
  deliveryMethod: InputTypeSelect;
}

// Input Types
interface Input {
  elementType: string;
  isValid: boolean;
  value: string;
  hasTouched: boolean;
  ShouldValidation: boolean;
}

interface InputTypeInput extends Input {
  elementConfig: InputElementConfig;
  validation: {
    required: boolean;
    minLength?: number;
    maxLength?: number;
  };
}

export interface InputTypeSelect extends Input {
  elementConfig: {
    options: SelectElementConfig[];
  };
  validation: {
    required: boolean;
  };
}

export interface InputElementConfig {
  type: string;
  placeholder: string;
}

export interface SelectElementConfig {
  value: string;
  displayValue: string;
}

export interface OrderDataProps {
  ingredients: IngredientBurgerBuilder;
  price: number;
  orderData: { [element: string]: string };
}

class ContactData extends Component<Props, ContactDataState> {
  state = {
    orderForm: {
      name: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        validation: {
          required: true,
        },
        isValid: false,
        hasTouched: false,
      } as InputTypeInput,
      email: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        validation: {
          required: true,
        },
        isValid: false,
        hasTouched: false,
      } as InputTypeInput,
      street: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        validation: {
          required: true,
        },
        isValid: false,
        hasTouched: false,
      } as InputTypeInput,
      zipCode: {
        value: '',
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'ZIP Code',
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        isValid: false,
        hasTouched: false,
      } as InputTypeInput,
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Tipo greiciau ' },
            { value: 'cheapest', displayValue: 'Kanopos ir uodegos ' },
          ],
        },
        value: 'rrrrrr',
        validation: {},
        isValid: true,
        hasTouched: false,
      } as InputTypeSelect,
    },
    name: '',
    email: '',
    street: '',
    zipCode: 0,
    deliveryMethod: 'Belekaip nieks nevesh  ',

    totalPrice: 0,
    formIsValid: false,
  };

  orderHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    //  reikia tuscio objekto, bet nemato ir nepriima stringo todel turime nurodyti kokios vertes ateina :

    // const PagrState = {
    //   name: {} as OrderFormChildProps,
    //   street: {} as OrderFormChildProps,
    //   zipCode: {} as OrderFormChildProps,
    //   country: {} as OrderFormChildProps,
    //   email: {} as OrderFormChildProps,
    //   deliveryMethod: {} as OrderFormChildProps,
    // };

    // type formElementIdentifier = keyof typeof PagrState;
    // let key: formElementIdentifier;
    // iki cia apsirasome ir tuomet galime naudoti Key

    const formData: { [element: string]: string } = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[
        formElementIdentifier as keyof OrderForms
      ] = this.state.orderForm[formElementIdentifier as keyof OrderForms].value;
    }
    const order: OrderDataProps = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
    };
    this.props.onOrderBurger(order);
  };

  hasMinLengthProp = (
    input: InputTypeInput | InputTypeSelect
  ): input is InputTypeInput =>
    (input as InputTypeInput).validation.minLength !== undefined;

  checkValidity(value: string, rules: InputTypeInput | InputTypeSelect) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    // if (rules.minLength) {
    //   isValid = value.length >= rules.minLength && isValid
    // }
    if (rules.validation.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (this.hasMinLengthProp(rules)) {
      const minLength = rules.validation.minLength;
      const maxLength = rules.validation.maxLength;
      if (minLength && maxLength) {
        isValid =
          value.length >= minLength && value.length <= maxLength && isValid;
      }
    }

    return isValid;
  }

  inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    inputIdentifier: string
  ) => {
    const inputValue: string | number = event.target.value;
    let hasTouched: boolean = inputValue.length ? true : false;

    const key = this.state.orderForm[inputIdentifier as keyof CustomerData];
    const isValid = this.checkValidity(inputValue, key);

    this.setState((prevState) => ({
      ...prevState,
      [inputIdentifier]: inputValue,
      orderForm: {
        ...prevState.orderForm,
        [inputIdentifier]: {
          ...prevState.orderForm[inputIdentifier as keyof OrderForms],
          isValid: isValid,
          hasTouched,
        },
      },
    }));
  };

  render() {
    let formElementsArr = [];
    for (const key in this.state.orderForm) {
      formElementsArr.push({
        id: key,
        config: this.state.orderForm[key as keyof OrderForms],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArr.map((formElement) => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.isValid}
            ShouldValidation={formElement.config.validation ? true : false}
            hasTouched={formElement.config.hasTouched}
            label=""
            changed={(
              event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            ) => this.inputChangeHandler(event, formElement.id)}
          />
        ))}
        <Button btnType="Success" disabled={this.state.formIsValid}>
          ORDERR
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spiner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = (state: burgerBuilderReducerProps) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
  };
};
// interface DispatchProps {
//   fetchTask: () => void;
// }
const mapDispatchToProps = (dispatch: any) => {
  return {
    onOrderBurger: (orderData: string) =>
      dispatch(actions.purchaseBurger(orderData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
