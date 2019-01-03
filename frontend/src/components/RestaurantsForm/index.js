import React from 'react'
import { Input, Button } from 'reactstrap';
import BaseComponent from '../BaseComponent';


class RestaurentsForm extends BaseComponent {

  state = {
    name: '',
  }

  render() {
    return (
      <div>
        <Input
          placeholder="Type in restaurant name..."
          onChange={this.onChangeRestaurantName}
        />
        <Button color="success">{'Send'}</Button>
      </div>
    )
  }

  onChangeRestaurantName(name) {
    this.setState({ name })
  }

}

export default RestaurentsForm


