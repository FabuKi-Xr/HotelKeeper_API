import { Injectable } from '@nestjs/common';
import { CreateCartUserDTO, UpdateCartUserDTO } from './dto/index.dto.';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Prisma } from '@prisma/client';

@Injectable()
export class CartuserService {
    constructor(private prisma: PrismaService) {}
    // private cartuser: CartUserDTO[] = [{ id: '1', uid: '1', total: 100 }];

    async findAll() {
        const cartuser = await this.prisma.cartUser.findMany();
        return cartuser;
    }

    async findById(id: string) {
        // cart_id
        const cartuser = await this.prisma.cartUser.findMany({
            where: {
                cart_id: id,
            },
        });
        return cartuser;
    }

    async findByUserId(id: string) {
        const cartuser = await this.prisma.cartUser.findFirst({
            where: {
                u_id: id,
                order_request: false, // ยังไม่ได้กดสั่งซื้อ
            },
        });
        console.log('cart_id: ', cartuser);
        return cartuser;
    }

    async createCartUser(dto: CreateCartUserDTO) {
        const cartuser = await this.prisma.cartUser.create({
            data: {
                cart_id: dto.cart_id,
                u_id: dto.u_id,
                total: dto.total,
            },
        });
        // console.log(`Create Cart : ${cartuser.cart_id}`);
        return {
            statusCode: 200,
            message: 'Crate cart success!',
            cartuser,
        };
    }

    async deleteCartUser(id: string) {
        return id;
    }

    async updateCartUser(id: string, dto: UpdateCartUserDTO) {
        const cartuser = await this.prisma.cartUser.update({
            where: {
                cart_id: id,
            },
            data: {
                total: dto.total,
                order_request: dto.order_request,
            },
        });
        // console.log('update cart', cartuser);
        return cartuser;
    }
}
