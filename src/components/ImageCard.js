import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            spans:0
        };
        //creating ref to access dom element
        this.imageRef=React.createRef();
    }

    componentDidMount(){
        // console.log(this.imageRef.current.clientHeight);

        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans= () => {
        const height = this.imageRef.current.clientHeight; 

        const spans= Math.ceil(height/10) +1;
        this.setState({
            spans
        })
    }

    render(){
        const {description, urls} = this.props.image;
        return(
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} 
                    src={urls.regular}
                />
            </div>
        );
    }
};

export default ImageCard;
