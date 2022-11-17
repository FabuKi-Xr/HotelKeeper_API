import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CartserviceService } from './cartservice.service';
import { CartServiceDTO } from './dto/cartservice.dto';
import { CreateCartServiceDTO } from './dto/createCartservice.dto';

@Controller('cartservice')
export class CartserviceController {
    constructor(private cartserviceService: CartserviceService) {}

    @Get()
    getAllServiceInCart() {
        return this.cartserviceService.findAll();
    }

    @Get('cart=:id')
    getCart(@Param('id') id: string) {
        return this.cartserviceService.findById(id); // return array of service
    }

    @Post('add')
    addCart(@Body() dto: CreateCartServiceDTO) {
        return this.cartserviceService.addCartService(dto);
    }

    @Delete('remove/cart=:cart_id/service=:s_id')
    removeCart(@Param('cart_id') cart_id: string, @Param('s_id') s_id: string) {
        return this.cartserviceService.removeCartService(cart_id, s_id);
    }

    // increase or decrease maid, time_start, time_finish
    @Put('update/cart=:cart_id/service=:s_id')
    updateCart(
        @Param('cart_id') cart_id: string,
        @Param('s_id') s_id: string,
        @Body() dto: CartServiceDTO,
    ) {
        return this.cartserviceService.updateCartService(cart_id, s_id, dto);
    }

    @Put('order/cart=:id')
    updateStateCart(@Param('id') id: string) {
        return this.cartserviceService.updateStateCartService(id);
    }
}
