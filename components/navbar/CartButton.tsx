import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { RiShoppingCartFill } from "react-icons/ri";

async function CartButton() {
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <RiShoppingCartFill />
        <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
}

export default CartButton;