import Carousel from 'react-bootstrap/Carousel';
import Menu from './menu';


function Caros(){
    return (
        <>
        
        <Carousel >
      <Carousel.Item > 
       <img src="https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg" alt="" height={600} width={1500}/>
        <Carousel.Caption>
          <h3>Chicken Biryani</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Priya__Suresh/Paneer_Biryani_Recipe_1_1600.jpg" alt="" height={600} width={1500} />
        <Carousel.Caption>
          <h3>Paneer Biryani</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://th.bing.com/th/id/OIP.r99IPuxBE9CTSlmyYgcb3QHaEo?rs=1&pid=ImgDetMain" alt="" height={600} width={1500}/>
        <Carousel.Caption>
          {/* <div style={{textAlign:"center",color:"black",display:"grid",justifyContent:"center"}}> */}
          <h3>Mutton Biryani</h3>
         
          {/* </div> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<br />
<br />

    <Menu/>
        
        </>
    )
}


export default Caros