import React from 'react';



class SearchBar extends React.Component{

  state = {term:''};

  onFromSubmit =(event)=>{
      event.preventDefault();
      this.props.onSubmitForm(this.state.term);
  }

    render() {

        return(
        <div className="ui segment">
            <form onSubmit={this.onFromSubmit} className="ui form">
             <div className="field">
                 <label>image search</label>
             <input 
             type="text" placeholder="Please Enter your Search term here and press Enter . . . . . ." value ={this.state.term} 
             onChange= {
                  e=>{
                  this.setState({term: e.target.value});
                  }
                  } />
             </div>
            </form>
             </div>
        );
    }
}

export { SearchBar as default};
