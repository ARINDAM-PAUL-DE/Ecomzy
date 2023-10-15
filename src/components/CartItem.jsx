
import {FcDeleteDatabase} from "react-icons/fc"

const CartItem = ({item, itemIndex}) => {
  return (
    <div>
        <div>

          <div>
            <img src={item.image}/>
          </div>
          <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
          </div>
          <div>
            {item.price}
          </div>
          <div>
            <FcDeleteDatabase/>
          </div>
        </div>



    </div>
  )
};

export default CartItem;
