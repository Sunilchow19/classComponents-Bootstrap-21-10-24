import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Mapys from './map';
import { Component } from 'react';



let res=<div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"15px"}}>
    
<Card style={{ width: '18rem' }}>
      <img src="https://im.whatshot.in/img/2019/Apr/shutterstock-562943647-cropped-1555313280.jpg" alt="" />
      <Card.Body>
        <Card.Title>Mutton Biryani</Card.Title>
        <Card.Text>
        Hyderabad mutton biryani is a rich and aromatic dish, famous for its tender marinated meat, basmati rice, and a blend of fragrant spices. This iconic dish is slow-cooked using the dum method, locking in flavors that make it a beloved part of Hyderabadi cuisine.
        </Card.Text>
        <Button variant="primary">Order now!!</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <img src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Chicken_Biryani.jpg" alt="" />
      <Card.Body>
        <Card.Title>Chicken Biryani</Card.Title>
        <Card.Text>
        Hyderabad chicken biryani is a flavorful, aromatic dish known for its rich blend of spices, basmati rice, and marinated chicken. It’s a signature delicacy from Hyderabad, often served with raita or a tangy gravy, and cooked traditionally using the dum (slow-cooking) method.        </Card.Text>
        <Button variant="primary">Order now!!</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src="https://s-media-cache-ak0.pinimg.com/originals/c7/29/02/c729020fb8f3936b141efb11d4807b38.jpg" alt="" />
      <Card.Body>
        <Card.Title>Chicken Dum Biryani</Card.Title>
        <Card.Text>
        Hyderabad chicken dum biryani is a flavorful, aromatic dish known for its rich blend of spices, basmati rice, and marinated chicken. It’s a signature delicacy from Hyderabad, often served with raita or a tangy gravy, and cooked traditionally using the dum (slow-cooking) method.        </Card.Text>
        <Button variant="primary">Order now!!</Button>
      </Card.Body>
    </Card>

        
    <Card style={{ width: '18rem' }}>
      <img src="https://thumbs.dreamstime.com/b/chicken-fry-piece-biryani-hot-spicy-tender-layered-unique-flavored-dum-cooked-195564567.jpg" alt="" />
      <Card.Body>
        <Card.Title>Chicken Fry piece Biryani</Card.Title>
        <Card.Text>
        Hyderabad's Fry Piece Chicken Biryani is a flavorful variation of traditional biryani, featuring crispy, fried chicken pieces mixed with fragrant, spiced basmati rice. This dish combines the rich, aromatic flavors of biryani with the satisfying crunch of fried chicken, making it a popular choice in local eateries.        </Card.Text>
        <Button variant="primary">Order now!!</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <img src="https://th.bing.com/th/id/R.2b2aff36302fddb0d58d74e3089fe9d9?rik=ngusONTeIRWQJw&riu=http%3a%2f%2fwww.authenticroyal.com%2fwp-content%2fuploads%2f2017%2f07%2fRoyal_AABiryani_Square.jpg&ehk=lbkXRJSa%2bgODSs832aRz6Gytzn71pAaYkaLDC2YgFLI%3d&risl=&pid=ImgRaw&r=0" alt="" />
      <Card.Body>
        <Card.Title>Panner Biryani</Card.Title>
        <Card.Text>
        Hyderabad Paneer Biryani is a flavorful, vegetarian twist on the classic Hyderabadi biryani, featuring tender paneer cubes marinated in rich spices and layered with fragrant basmati rice. It's a hearty, aromatic dish with the perfect balance of heat and savoriness, loved for its indulgent taste and royal appeal.
             </Card.Text>
        <Button variant="primary">Order now!!</Button>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <img src="https://www.whiskaffair.com/wp-content/uploads/2014/07/Mushroom-Biryani-3.jpg" alt="" />
      <Card.Body>
        <Card.Title>Mushroom Biryani</Card.Title>
        <Card.Text>
        Hyderabad Mushroom Biryani is a flavorful vegetarian twist on the city's famous biryani, made with tender mushrooms cooked in fragrant basmati rice and aromatic spices. This dish combines the rich taste of Hyderabad's traditional biryani with the earthy flavor of mushrooms for a hearty and delicious meal.
              </Card.Text>
        <Button variant="primary">Order now!!</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src="https://thumbs.dreamstime.com/b/malai-paneer-tikka-creamy-cottage-cheese-barbecue-kabab-tandoori-indian-skewers-kabab-chilli-served-white-plate-73303061.jpg" alt="" />
      <Card.Body>
        <Card.Title>Malai Paneer Tikka</Card.Title>
        <Card.Text>
        Hyderabad Paneer Tikka is a spicy, flavorful Indian dish where marinated paneer cubes are grilled to perfection, infused with aromatic spices and herbs. It's a popular appetizer, known for its smoky flavor and rich blend of regional spices.              </Card.Text>
        <Button variant="primary">Order now!!</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <img src="https://farm5.staticflickr.com/4551/38906976401_27bd27e344_o_d.jpg" alt="" />
      <Card.Body>
        <Card.Title>Fish fry</Card.Title>
        <Card.Text>
        A fish fry is a meal where fish is coated in batter or breadcrumbs and deep-fried to a crispy, golden texture. It's often served with sides like fries, coleslaw, or tartar sauce, and is especially popular in coastal areas or during events like Friday fish fries.              </Card.Text>
        <Button variant="primary">Order now!!</Button>
      </Card.Body>
    </Card>
</div>

class Menus extends Component{
  render(){
    return (
      <>
      {res}
      <br />
      <br />
      <Mapys/>
      </>
  )
  }
}

export default Menus