//มีเพื่ออัพเดตสถานะของคำสั่งซื้อ -> state ของคำสั่งซื้อ

import { 
    IsNotEmpty, 

} from "class-validator";

export class updateOrderDto {
    
    state : OrderState 
}

enum OrderState{
    ORDERING = "Ordering",
    ONPAY = "OnPay",
    ONPROCESS = "OnProcess",
    CANCEL = "Cancel",
    SUCCESS = "Success",
}