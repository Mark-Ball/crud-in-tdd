import React, { Component } from 'react';

class CreateForm extends Component {
    render() {
        return(
            <>
                <h1>Add a new entry</h1>
                <form>
                    <div>
                        <label>Name</label>
                        <input id='name' type='text' name='name' />
                    </div>
                    <div>
                        <label>Age</label>
                        <input type='text' name='age' />
                    </div>
                    <input type='submit' />
                </form>
            </>
        )
    }
}

export default CreateForm;