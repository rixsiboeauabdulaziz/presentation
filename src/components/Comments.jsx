import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export function SimpleCard() {
  const { t } = useTranslation();
  const comments = [
    {
      title: "Отличный выбор плитки!",
      text: "Покупал кафель для ванной комнаты — качество просто супер!",
      author: "Азиз, Ташкент",
    },
    {
      title: "Магазин с большим ассортиментом",
      text: "Нашёл плитку для кухни по отличной цене, большой выбор!",
      author: "Саида, Самарканд",
    },
    {
      title: "Довольны покупкой!",
      text: "Плитка высокого качества, без сколов. Всё вовремя.",
      author: "Дилшод, Бухара",
    },
  ];

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">

      <Link to={"/coment"} >
      <Typography
        variant="h3"
        className="text-center mb-12 font-bold text-gray-900 dark:text-white"
      >
        {t("Отзывы")}
      </Typography>
      </Link>

      <div className="flex flex-wrap justify-center gap-10 px-4">
        {comments.map((c, i) => (
          <Card
            key={i}
            className="w-96 p-5 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 rounded-2xl"
          >
            <CardBody>
              <Typography variant="h5" className="mb-2 text-gray-900 dark:text-white">
                {c.title}
              </Typography>
              <Typography className="text-gray-700 dark:text-gray-300">{c.text}</Typography>
              <Typography className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                — {c.author}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
