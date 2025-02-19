import { model, Schema } from 'mongoose'
import IOrder from './Order.interface'
import mongoose from 'mongoose'

const OrderSchema = new Schema<IOrder>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be biggest then  0  '],
    },
    totalPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const OrderModel = model<IOrder>('Order', OrderSchema)

export default OrderModel
