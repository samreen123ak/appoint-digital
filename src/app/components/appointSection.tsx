export default function AppointSection() {
  return (
    <section className="bg-bg py-16 ">
      <h2 className="text-5xl  font-extrabold leading-snug text-white text-center">
        Best brands choose <br />
        <span className="text-primary"> Appoint Digital</span>
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex -mx-20 gap-48 mt-10">
          <img src="/images/brand1.svg" alt="" className="w-1/4" />
          <img src="/images/brand2.svg" alt="" className="w-1/4" />
          <img src="/images/brand3.svg" alt="" className="w-1/4" />
          <img src="/images/brand4.svg" alt="" className="w-1/4" />
        </div>
      </div>
    </section>
  );
}
