import React, {Component} from 'react';
import illustrator1 from '../assets/Images/Illustration1.png';
import illustrator2 from '../assets/Images/Illustration2.png';
import illustrator3 from '../assets/Images/Illustration3.png';
import illustrator4 from '../assets/Images/Illustration4.png';
import illustrator5 from '../assets/Images/Illustration5.png';

class Home extends Component{
  constructor(props) {
    super();
    this.state = {
      receipe: []
    }
  };

  fetchUpcoming() {
   fetch(`http://starlord.hackerearth.com/recipe`)
       .then(response => response.json())
       .then(data =>
           this.setState({
               receipe: data
           })
       )
}

componentDidMount(){
 this.fetchUpcoming();
}

  render() {
    console.log(this.state.receipe)
    return (
        <div className="container">
            <div className="fixed-bg">
              <div className="banner">
                <img src={illustrator1} className="img1" alt="bg-img1" />
                <img src={illustrator2} className="img2" alt="bg-img2" />
                <img src={illustrator3} className="img3" alt="bg-img3" />
                <img src={illustrator4} className="img4" alt="bg-img4" />
                <img src={illustrator5} className="img5" alt="bg-img5" />
              </div>
            </div>
            <div className="common">
                <div className="header">
                  <p className="">
                    CATEGORY
                  </p>
                  <h1>
                    Foods & Beverage
                  </h1>
                </div>

                <div className="grid-view">
                { this.state.receipe.map((receipe) => (
                    <div key={receipe.id} className="card-view">
                       <div className="forImg">
                          <h4>{receipe.name} <span className="price">$ {receipe.price}</span></h4>
                          <p>{receipe.description}</p>
                       </div>
                       <div className="next">
                          <p>View Details</p>
                       </div>
                    </div>
                 ))}
                </div>
            </div>
        </div>
    )
  }
}

export default Home;