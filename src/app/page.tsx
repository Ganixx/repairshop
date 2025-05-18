import Link from "next/link";
export default function Home() {
  return (
    <div className=" bg-black bg-[url('/images/home-img.jpg')] bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 bg-black/90 w-4/5 rounded-xl
        sm:max-w-96 text-white mx-auto sm:text-2xl 
        ">
          <h1 className="text-3xl font-bold">Ganixx&apos;s
          Computer <br />Repair Shop</h1>
          <address>
            555 Gateway Lane <br />
            Arlington, Tx 5555
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link href="tel:5555555555" className="hover:underline">
            (555) 555-5555
          </Link>
        </div>
      </main>
    </div>
  );
}
