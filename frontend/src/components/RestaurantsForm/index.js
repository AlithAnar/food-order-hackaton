import React from 'react'
import { Input, Button } from 'reactstrap';
import BaseComponent from '../BaseComponent';
import { Mutation } from 'react-apollo'
import { CREATE_RESTAURANT } from '../../graphql/mutators';


class RestaurentsForm extends BaseComponent {

  state = {
    name: '',
  }

  render() {
    const { name } = this.state
    return (
      <div>
        <Input
          placeholder="Type in restaurant name..."
          onChange={this.onChangeRestaurantName}
        />
        <Mutation mutation={CREATE_RESTAURANT} variables={{ name }}>
          {onCreateRestaurant => <Button color="success" onClick={onCreateRestaurant}>{'Send'}</Button>}
        </Mutation>
        
      </div>
    )
  }

  onChangeRestaurantName(name) {
    this.setState({ name })
  }

}

export default RestaurentsForm


