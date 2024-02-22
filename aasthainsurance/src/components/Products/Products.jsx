import React from "react";
import Card from "../About/Card";

function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Life Insurance"
          imgsrc="https://img.freepik.com/free-photo/life-insurance-policy-terms-use-concept_53876-125102.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=ais"
        />
        <Card
          title="Health Insurance"
          imgsrc="https://img.freepik.com/free-photo/life-health-insurance-policy-concept-idea_1421-83.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=ais"
        />
        <Card
          title="Vehicle Insurance"
          imgsrc="https://img.freepik.com/free-photo/car-insurance-coverage-accident-benefits_53876-120417.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=ais"
        />
        <Card
          title="Insurace"
          imgsrc="https://img.freepik.com/premium-photo/cork-board-with-list-insurance-car-car-transportation_777576-1643.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=ais"
        />
        <Card
          title="Insurance"
          imgsrc="https://img.freepik.com/premium-photo/cork-board-with-list-insurance-car-car-transportation_777576-1643.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=ais"
        />
        <Card
          title="Insurance"
          imgsrc="https://img.freepik.com/premium-photo/cork-board-with-list-insurance-car-car-transportation_777576-1643.jpg?size=626&ext=jpg&ga=GA1.1.1304262724.1708581590&semt=ais"
        />
      </div>
    </div>
  );
}

export default Products;
