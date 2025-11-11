import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Cart() {
  const { t } = useTranslation();

  const products = [
    {
      img: "/Без названия (4).jpeg",
      name: "StoneLine Black Premium",
      size: "60×120 sm",
    },
    {
      img: "/Без названия (7).jpeg",
      name: "Marble White Classic",
      size: "60×120 sm",
    },
    {
      img: "/Керамогранит  _ Global Tile 60х120.jpeg",
      name: "Granite Brown Luxe",
      size: "60×120 sm",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-20 transition-colors duration-500">
      <Link to={"/product"}>
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white mb-14">
          {t("товары")}
        </h2>
      </Link>

      <div className="flex flex-wrap justify-center gap-10 px-8">
        {products.map((product, i) => (
          <Card
            key={i}
            className="w-[30%] min-w-[350px] bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <CardHeader
              floated={false}
              shadow={false}
              className="h-[580px] rounded-t-2xl overflow-hidden"
            >
              <img
                src={product.img}
                alt="product"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </CardHeader>

            <CardBody className="px-6 py-5 flex justify-between items-center">
              <div>
                <Typography className="font-semibold text-xl text-gray-900 dark:text-white">
                  {product.name}
                </Typography>
                <Typography className="text-gray-700 dark:text-gray-400">
                  {product.size}
                </Typography>
              </div>
              <Rating value={4} />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cart;
