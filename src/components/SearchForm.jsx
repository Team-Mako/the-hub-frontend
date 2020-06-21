import React, { Component } from 'react';

class SearchForm extends Component {

    render(){
        return(
            <form>
                <input  type="search"
                        name="search"
                        placeholder="What do you want to create" />
                {/* Is search icon from fontawesome?? */}
                <button type="submit">Search</button>
            </form>
        )
    }
}

export default SearchForm;