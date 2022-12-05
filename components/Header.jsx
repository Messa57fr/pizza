import css from '../styles/Header.module.css';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import {UilShoppingBag,  UilReceipt} from '@iconscout/react-unicons'
import { useStore } from '../store/store';
import { useEffect, useState } from 'react';
import Link from "next/link"

export default function Header() {
  const [Order, setOrder] = useState("");
  useEffect(() => {
    setOrder(localStorage.getItem("order"))
    }, [])

  const state = useStore((state)=>state);
  const items = useStore((state)=>state.cart.pizzas.length)
  return (
    <div className={css.header}>
      {/* Logo */}
      <div className={css.logo}>
        <Image src={Logo} alt="" width={50} height={50}/>
        <span>Kinkao Dinner</span>
      </div>

      {/* Menu */}
      <ul className={css.menu}>
        <li>
          <Link href='../'>Home</Link>
        </li>
        <li>
          <Link href='../'>Menu</Link>
        </li>
        <li>Contact</li>
      </ul>

      {/* Right Side */}
      <div className= {css.rightSide}>
        <Link href='cart'>
        <div className={css.cart}>
          <UilShoppingBag size={35} color="#2E2E2E" />
          <div className={css.badge}>{items}</div>
        </div>
        </Link>
        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color='#2e2e2e'/>
              {Order != "" && <div className={css.badge}>1</div>}
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
