import React from "react";
import instance from "../axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Spinner,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
  Button,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";


function Products() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  async function handleGet() {
    const res = await instance.get("/ereter");
    return res.data;
  }



  const { error, isLoading, data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: handleGet,
  });


  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
        <Spinner className="h-14 w-14 text-gray-300" />
      </div>
    );

  if (error)
    return (
      <h1 className="text-center mt-10 text-xl text-white bg-gray-900 h-screen">
        {error.message}
      </h1>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-10 gap-8 py-10  min-h-screen transition-colors duration-500 dark:bg-black bg-white">

      {data.map((product) => (

        <Card
          key={product.id}
          className="
  w-full
  bg-white dark:bg-gray-800
  rounded-2xl shadow-xl
  hover:shadow-2xl
  transition-all duration-300
"
        >
          <CardHeader
            floated={false}
            shadow={false}
            className="h-[350px] sm:h-[420px] md:h-[500px] lg:h-[580px] rounded-t-2xl overflow-hidden"
          >
            <img
              src={product.photo}
              alt="card-image"
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </CardHeader>

          <CardBody className="px-6 py-5 flex justify-between items-center gap-3">
            <div>
              <Typography className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
                {product.name}
              </Typography>
              <Typography className="text-gray-700 dark:text-gray-400 text-sm sm:text-base">
                {product.desc}
              </Typography>
            </div>
            <Rating value={4} />
          </CardBody>

          <Link to={`/products/${product.id}`}>
            <Button
              ripple={false}
              fullWidth
              className="
      bg-green-900 text-white
      shadow-none
      hover:scale-105
      hover:shadow-none
      focus:scale-105
      focus:shadow-none
      active:scale-100
    "
            >
              {t("заказат")}
            </Button>
          </Link>
        </Card>





        // <Card
        //   key={product.id}
        //   className="w-full rounded-xl bg-gray-800 border border-gray-700 shadow-xl hover:shadow-gray-700/40 transition-shadow duration-300"
        // >
        //   <CardHeader
        //     shadow={false}
        //     floated={false}
        //     className="h-auto rounded-t-xl overflow-hidden"
        //   >
        //     <img
        //       src={product.photo}
        //       alt="card-image"
        //       className="h-full w-full object-cover rounded-t-xl hover:scale-105 transition-transform duration-500"
        //     />
        //   </CardHeader>

        //   <CardBody className="px-6 py-5 text-gray-200 flex justify-between items-center">
        //     <div>
        //       <Typography className="font-semibold text-lg mb-2 text-white">
        //         {product.name}
        //       </Typography>
        //       <Typography variant="small" className="opacity-75 text-gray-400">
        //         {product.desc}
        //       </Typography>
        //     </div>
        //     {/* ⭐ аккуратный рейтинг */}
        //     <Rating value={4} ratedColor="amber" unratedColor="gray" />
        //   </CardBody>

        //   <Link to={`/products/${product.id}`}>
        //     <Button
        //       ripple={false}
        //       fullWidth={true}
        //       className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        //     >
        //       Update
        //     </Button>
        //   </Link>

        // </Card>
      ))}
    </div>
  );
}

export default Products;
