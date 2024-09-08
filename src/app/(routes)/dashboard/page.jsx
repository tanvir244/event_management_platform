import Image from "next/image";

export default function Home() {
    
    return (
      <div className="py-12">
        <h1 className="text-4xl text-green-600 font-bold text-center">Welcome Tanvir !</h1>
        <h5 className="text-lg font-semibold w-[360px] mx-auto text-center mt-4 mb-8">As an admin, you have fully access to the Dashboard.</h5>
        <Image src={'https://i.ibb.co/jLZLwfb/sign-741813-1280hh.jpg'} alt="welcome" width={500} height={390} className="mx-auto rounded-xl" />
      </div>
    );
  }