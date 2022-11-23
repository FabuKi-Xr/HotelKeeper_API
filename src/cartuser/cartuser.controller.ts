import { Controller, Body, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCartUserDTO, UpdateCartUserDTO } from './dto/index.dto.';
import { CartuserService } from './cartuser.service';

@Controller('cartuser')
export class CartuserController {
    constructor(private cartuserService: CartuserService) {}

    @Get()
    getALLCart() {
        return this.cartuserService.findAll();
    }

    @Get('cart=:id')
    getCart(@Param('id') id: string) {
        // return `${id} get cart`;
        return this.cartuserService.findById(id);
    }

    @Get('user=:id') // จริง ๆ ไม่ควรแสดงที่ URL
    getCartByUser(@Param('id') id: string) {
        // return `${id} get cart`;
        return this.cartuserService.findByUserId(id);
    }

    @Post('create')
    createCartUser(@Body() dto: CreateCartUserDTO) {
        return this.cartuserService.createCartUser(dto);
    }

    @Put('update/:id')
    updateCartUser(@Param('id') id: string, @Body() dto: UpdateCartUserDTO) {
        return this.cartuserService.updateCartUser(id, dto);
    }
}
