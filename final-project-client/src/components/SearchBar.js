import React from 'react'

class SearchBar extends React.Component {

    handleChange = (event) => {
        console.log(event.target.value)
        this.props.changeSearchTerm(event.target.value)
    }


    render() {
        return(
            <div className="search">
                <input type="text"
                    className="searchTerm"
                    placeholder="Search for Trees"
                    value={this.props.search}
                    onChange={this.handleChange}
                />




            </div>



        )
    }







}

export default SearchBar