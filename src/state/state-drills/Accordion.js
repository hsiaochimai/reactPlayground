import React from 'react';
class Accordion extends React.Component{
    static defaultProps={
        sections:[]
    };
    state={
        currentSectionIndex:null
    };
    handleButtonClick(index){
this.setState({currentSectionIndex:index})

    }
    
    renderItem(section, index, currentSectionIndex){
        return (
       
            <li className="Accordion_Item"key={index}>
            <button type="button" onClick={()=>this.handleButtonClick(index)}>
            {section.title}
            </button>
            {(currentSectionIndex===index) &&
                <p>{section.content}</p>
            }
            </li>
            
        )
        
        
    }
    render(){
        const {currentSectionIndex}=this.state
        const {sections}=this.props
        return (
            <ul className='Accordion'>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, currentSectionIndex)
        )}
      </ul>
        )
    }
}



export default Accordion;