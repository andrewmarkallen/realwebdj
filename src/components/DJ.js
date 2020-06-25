import React, { Component } from 'react'
import { Button, InputGroup, FormControl } from 'react-bootstrap'

class DJ extends Component {
  render() {
    return (
      <div className="dj-component">
        <h1>RealWebDJ</h1>
        <div>
          <InputGroup className="mb-3">
          <InputGroup.Prepend>
                <Button variant="outline-secondary">Button</Button>
              </InputGroup.Prepend>
            <FormControl
              placeholder="youtube url"
              aria-label="youtube url"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Load Track</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    )
  }
}

export default DJ;
