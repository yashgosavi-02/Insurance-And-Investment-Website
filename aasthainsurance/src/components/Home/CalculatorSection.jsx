import { Link } from "react-router-dom";

function CalculatorCard({ name, imageUrl, to }) {
  return (
    <div className="max-w-xs rounded overflow-hidden  transition duration-300 ease-in-out transform hover:scale-105 ">
      <Link to={to} className="block w-full h-full">
        <img src={imageUrl} alt={name} className="w-full h-40 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 hover:text-blue-500 transition duration-300">
            {name}
          </div>
        </div>
      </Link>
    </div>
  );
}

function CalculatorSection() {
  const partners = [
    {
      name: "SIP Calculator",
      imageUrl:
        "https://img.freepik.com/free-vector/calculator-concept-illustration_114360-1259.jpg?t=st=1709464477~exp=1709468077~hmac=577212c05302f4e9291856881dfc37929ff2a6c72deec7c264f68444cb8f3a32&w=740",
      to: "/calculator/sip-calculator",
    },
    {
      name: "Retirement Calculator",
      imageUrl:
        "https://img.freepik.com/premium-photo/concept-pension-retirement-plan-blue-background_185193-49796.jpg?w=826",
      to: "/calculator/retirement-calculator",
    },
    {
      name: "Mortgage Calculator",
      imageUrl:
        "https://img.freepik.com/free-vector/flat-design-installment-illustration_23-2149402206.jpg?t=st=1709464704~exp=1709468304~hmac=3c41a6f7525dd1a96014d76daf8b0ccceae5b19634f95f1255913e489976f573&w=740",
      to: "/calculator/mortgage-calculator",
    },
  ];

  return (
    <div className="container mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center">
        Try Our Calculators
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {partners.map((partner, index) => (
          <CalculatorCard
            key={index}
            name={partner.name}
            imageUrl={partner.imageUrl}
            to={partner.to}
          />
        ))}
      </div>
    </div>
  );
}

export default CalculatorSection;
