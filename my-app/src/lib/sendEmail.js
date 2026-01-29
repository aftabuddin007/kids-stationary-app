import nodemailer from "nodemailer";

export const sendInvoiceEmail = async ({ userEmail, orderId, items, total, name }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const itemsHtml = items
    .map(
      (item) => `
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.price}</td>
      </tr>
    `
    )
    .join("");

  const mailOptions = {
    from: `${process.env.EMAIL_USER}`,
    to: "aftabhasan7856@gmail.com",
    subject: `🧾 Order Invoice - #${orderId}`,
    html: `
      <div style="font-family: Arial; padding:20px">
        <h2>Thanks for your order, ${name} 🙌</h2>
        <p>Order ID: <strong>${orderId}</strong></p>

        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
          ${itemsHtml}
        </table>

        <h3>Total: $${total}</h3>
        <p>We’ll notify you when your order ships 🚚</p>
      </div>
    `,
  };

const result = await transporter.sendMail(mailOptions);
console.log("result",result)
};
