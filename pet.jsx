import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const petsData = [
  {
    id: 1,
    name: "Golden Retriever",
    age: "2 years",
    price: "₹20,000",
    description: "Friendly and energetic.",
  },
  {
    id: 2,
    name: "Persian Cat",
    age: "1.5 years",
    price: "₹15,000",
    description: "Calm and affectionate.",
  },
];

export default function PetSellingSystem() {
  const [order, setOrder] = useState({ name: "", email: "", petId: null });
  const [listPet, setListPet] = useState({ name: "", age: "", price: "", description: "" });

  const handleOrder = (petId) => setOrder({ ...order, petId });

  const submitOrder = () => {
    alert(`Order placed for pet ID ${order.petId} by ${order.name}`);
    // Integrate with Razorpay here
  };

  const submitPet = () => {
    alert(`Pet listed: ${listPet.name}`);
    // Save to database here
  };

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Pet Selling System</h1>
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="flex justify-center mb-4">
          <TabsTrigger value="buy">Buy Pets</TabsTrigger>
          <TabsTrigger value="sell">Sell Pets</TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <div className="grid gap-4 md:grid-cols-2">
            {petsData.map((pet) => (
              <Card key={pet.id}>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold">{pet.name}</h2>
                  <p>Age: {pet.age}</p>
                  <p>Price: {pet.price}</p>
                  <p>{pet.description}</p>
                  <Button className="mt-2" onClick={() => handleOrder(pet.id)}>Order Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {order.petId && (
            <motion.div className="mt-6 p-4 bg-gray-100 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold mb-2">Order Form</h3>
              <Input placeholder="Your Name" value={order.name} onChange={(e) => setOrder({ ...order, name: e.target.value })} />
              <Input type="email" placeholder="Your Email" className="mt-2" value={order.email} onChange={(e) => setOrder({ ...order, email: e.target.value })} />
              <Button className="mt-3" onClick={submitOrder}>Submit Order</Button>
            </motion.div>
          )}
        </TabsContent>
        <TabsContent value="sell">
          <div className="p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">List Your Pet</h3>
            <Input placeholder="Pet Name" value={listPet.name} onChange={(e) => setListPet({ ...listPet, name: e.target.value })} />
            <Input placeholder="Age" className="mt-2" value={listPet.age} onChange={(e) => setListPet({ ...listPet, age: e.target.value })} />
            <Input placeholder="Price" className="mt-2" value={listPet.price} onChange={(e) => setListPet({ ...listPet, price: e.target.value })} />
            <Textarea placeholder="Description" className="mt-2" value={listPet.description} onChange={(e) => setListPet({ ...listPet, description: e.target.value })} />
            <Button className="mt-3" onClick={submitPet}>Submit</Button>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
