import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart, CartStatus } from './entities/cart.entity';

@Injectable()
export class CartService {
  create(createCartDto: CreateCartDto): Cart {
    const id: string = randomUUID();
    const cart: Cart = {
      cart_id: id,
      customer_id: createCartDto.customer_id,
      ecommerce_id: createCartDto.ecommerce_id,
      status: CartStatus.CREATED,
      created_at: new Date(),
      updated_at: null,
    } as Cart;

    return cart;
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
