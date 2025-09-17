export default function AppointSection() {
  return (
    <section className="bg-white py-24  ">
      <h2 className="text-6xl font-[600px] leading-snug text-black text-center">
        Best brands choose <br />
        <span className="text-primary"> Appoint Digital</span>
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-48 mt-20">
          <img src="/images/brand1.svg" alt="Brand 1" className="w-1/4" />
          <img src="/images/brand2.svg" alt="Brand 2" className="w-1/4" />
          <img src="/images/brand3.svg" alt="Brand 3" className="w-1/4" />
          <img src="/images/brand4.svg" alt="Brand 4" className="w-1/4" />

          {/* Duplicate logos for seamless loop */}
          <img src="/images/brand1.svg" alt="Brand 1" className="w-1/4" />
          <img src="/images/brand2.svg" alt="Brand 2" className="w-1/4" />
          <img src="/images/brand3.svg" alt="Brand 3" className="w-1/4" />
          <img src="/images/brand4.svg" alt="Brand 4" className="w-1/4" />
        </div>
      </div>
    </section>
  );
}
