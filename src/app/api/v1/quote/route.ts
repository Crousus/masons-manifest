import {NextResponse} from "next/server";

export const GET = async (req: Request, res: Request) => {
    return NextResponse.json({message: "Hello World!"})
}