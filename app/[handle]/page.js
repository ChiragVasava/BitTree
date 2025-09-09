import Link from "next/link"
import Image from "next/image";
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = params.handle; // no need for await
    const client = await clientPromise;
    const db = client.db("bittree");
    const collection = db.collection("links");

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({ handle: handle });
    if (!item) {
        return notFound();
    }

    console.log(item)

    return (
        <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
            {item && (
                <div className="photo flex justify-center flex-col items-center gap-4">
                    <Image
                        src={item.pic}
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-purple-200 shadow-lg"
                        alt="profile pic"
                    />
                    <span className="font-bold text-xl">@{item.handle}</span>
                    <span className="desc w-80 text-center">{item.desc}</span>
                    <div className="links">
                        {item.links.map((link, index) => (
                            <Link key={index} href={link.link}>
                                <div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                                    {link.linktext}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}