// // import { sendInvoiceEmail } from "@/lib/sendInvoiceEmail";

// import { sendInvoiceEmail } from "./sendEmail";

// export const createOrder = async (payload) => {
//   const { user } = (await getServerSession(authOptions)) || {};
//   if (!user) return { success: false };

//   const cart = await getCartData();

//   if (cart.length === 0) {
//     return { success: false, message: "Cart is empty" };
//   }

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   const newOrder = {
//     createdAt: new Date().toISOString(),
//     items: cart,
//     email: user.email,
//     ...payload,
//   };

//   const insertResult = await orderCollection.insertOne(newOrder);

//   if (insertResult.insertedId) {
//     await clearCart();

 
 
//   }

//   return { success: false };
// };
