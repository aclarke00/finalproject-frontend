import React from 'react';


class NewTreeForm extends React.Component {

    state = {
        name: '',
        size: '',
        bark_description: '',
        leaf_characteristics: '',
        image_url: ''
        
    }


    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div className="flex-container">
                <form onSubmit={this.handleSubmit}>

                    <label className="input-label" htmlFor="name">Tree Name</label>
                    <input className="label-container" type="text" autoComplete="off" name="name"></input>

                    <label className="input-label" htmlFor="size">Tree Size</label>
                    <input className="label-container" type="text" autoComplete="off" name="size"></input>

                    <label className="input-label" htmlFor="bark_description">Bark Description</label>
                    <input className="label-container" type="text" autoComplete="off" name="bark_description"></input>

                    <label className="input-label" htmlFor="leaf_characteristics">Leaf Characteristics</label>
                    <input className="label-container" type="text" autoComplete="off" name="leaf_characteristics"></input>

                    <label className="input-label" htmlFor="image_url">Submit a Photo</label>
                    <input className="label-container" type="text" autoComplete="off" name="image_urll"></input>
                
                    <input className="submit-button" type="submit" value="Submit"/>




                </form>
            </div>    


        )
    }

}




export default NewTreeForm


