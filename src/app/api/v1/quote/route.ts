import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const quotes = process.env["QUOTES"]

export const GET = async (req: Request) => {
    let quoteList = quotes?.split(" | ")

    quoteList = quoteList ? quoteList : ["No quotes found"]
    // Extract Bearer token from Authorization header
    const authHeader = req.headers.get("Authorization");
    const authSplit = authHeader?.split(" ");

    if(!authHeader || authSplit?.length != 2 || authSplit[0] !== "Bearer") {
        return new Response("Invalid Authorization. Please use a bearer token", { status: 401 });
    }

    // Mock token validation
    if (authSplit[1] !== "YOUR_SECRET_TOKEN") {
        return new Response("Invalid token", { status: 401 });
    }

    await Cart();
    // Return a random quote
    const randomQuote = quoteList[Math.floor(Math.random() * quoteList.length)];
    return NextResponse.json({ message: randomQuote });
};



async function Cart() {
  const cart = await kv.get;
  console.log(cart);
}
