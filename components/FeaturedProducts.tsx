import Image from 'next/image'
import banner from "../images/store_banner.jpg"
import prod1 from "../images/product1.png"
import prod2 from "../images/product2.png"
import prod3 from "../images/product3.png"
import prod4 from "../images/product4.png"

export default function FeaturedProducts() {
    return (
      <div>
        <div>
            <Image src={banner} width={1500} height={650}alt="store banner"/>
        </div>
        <div>
          <Image src={prod1} width={250} height={400} alt="Product 1" />
          <Image src={prod2} width={250} height={400} alt="Product 2" />
          <Image src={prod3} width={350} height={400} alt="Product 3" />
          <Image src={prod4} width={370} height={400} alt="Product 4" />
        </div>
        <div>Step into Style, Virtually</div>
      </div>
    );
  }
  