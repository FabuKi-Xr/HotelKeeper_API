import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCartServiceDTO, UpdateCartServiceDTO } from './dto/index.dto';

@Injectable()
export class CartserviceService {
    constructor(private prisma: PrismaService) {}

    async findAll() {
        const cartservice = await this.prisma.cartService.findMany();
        return {
            statusCode: 200,
            statusText: 'OK',
            message: 'Find All cart success!',
            cartservice,
        };
    }

    async findById(id: string) {
        const cartservice = await this.prisma.cartService.findMany({
            where: {
                cart_id: id,
                order_request: false,
            },
        });
        return {
            statusCode: 200,
            statusText: 'OK',
            message: 'Find cart success!',
            cartservice,
        };
    }

    async addCartService(dto: CreateCartServiceDTO) {
        const cartservice = await this.prisma.cartService.create({
            data: {
                cart_id: dto.cart_id, // cart_id จาก cartuser
                s_id: dto.s_id,
                time_start: dto.time_start,
                time_finish: dto.time_finish,
                num_maid: dto.num_maid,
            },
        });
        return {
            statusCode: 201,
            statusText: 'Created',
            message: 'Add service success!',
            cartservice,
        };
    }

    async removeCartService(cart_id: string, s_id: string) {
        const cartservice = await this.prisma.cartService.deleteMany({
            where: {
                cart_id: cart_id,
                s_id: s_id,
                order_request: false,
            },
        });
        return {
            statusCode: 203,
            statusText: 'Non-Authoritative Information',
            message: 'Remove service in cart success!',
            cartservice,
        };
    }

    async updateCartService(
        cart_id: string,
        s_id: string,
        dto: UpdateCartServiceDTO,
    ) {
        const cartservice = await this.prisma.cartService.updateMany({
            where: {
                cart_id: cart_id,
                s_id: s_id,
                order_request: false,
            },
            data: {
                time_start: dto.time_start,
                time_finish: dto.time_finish,
                num_maid: dto.num_maid,
            },
        });
        return {
            statusCode: 202,
            statusText: 'Accepted',
            message: 'Update service in cart success!',
            cartservice,
        };
    }

    async updateStateCartService(id: string) {
        const cartservice = await this.prisma.cartService.updateMany({
            where: {
                cart_id: id,
            },
            data: {
                order_request: true,
            },
        });
        return {
            statusCode: 202,
            statusText: 'Accepted',
            message: 'Requested Order success!',
            cartservice,
        };
    }
}
