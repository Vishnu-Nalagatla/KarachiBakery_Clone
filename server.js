const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("Razorpay Server"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Razorpay Server listening at Port http://localhost:${port}`));

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
    key_id: 'rzp_test_sg5ao70ggBtSFq',
    key_secret: 'C7DkuzcPWDVpfCzCOi0LRnWi',
  });


  app.post("/createOrder", async (req, res) => {
    const order = await razorpay.orders.create({
      amount: req.body.amount,
      currency: req.body.currency,
    });
    res.send(order);
  });