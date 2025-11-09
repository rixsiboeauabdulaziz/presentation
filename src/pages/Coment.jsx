// Dark mode version
import React from "react";
import {
  Card,
  CardBody,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import instance from "../axios2";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export function Coment({ dark = true }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  async function handleGet() {
    const res = await instance.get("/comentari");
    return res.data;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["getComments"],
    queryFn: handleGet,
  });

  async function handleCreate(newData) {
    await instance.post("/comentari", newData);
  }

  const mutation = useMutation({
    mutationFn: handleCreate,
    onSuccess: () => {
      toast.success("✅ Комментарий добавлен!");
      queryClient.invalidateQueries(["getComments"]);
      reset();
    },
    onError: () => {
      toast.error("❌ Ошибка при отправке!");
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  // ✅ Кастомный красивый спиннер
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <Spinner className="h-14 w-14" />
      </div>
    );

  if (error)
    return (
      <h1 className="text-center mt-10 text-xl text-red-400">
        Ошибка: {error.message}
      </h1>
    );

  return (
    <div className="min-h-screen py-10 transition-colors duration-500 bg-white text-black dark:bg-black dark:text-white">
      <Card
        color="transparent"
        shadow={false}
        className="relative p-6 mx-auto max-w-4xl"
      >
        <div className="relative mb-6 w-full h-10 mt-10 rounded-xl overflow-hidden">
          <Typography
            variant="h4"
            className="absolute inset-0 flex items-center justify-center text-[#1b1b1b] dark:text-white"
          >
            {t("Оставьте")}
          </Typography>
        </div>

        {/* ✅ Форма */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 mb-2 w-full max-w-md mx-auto"
        >
          <div className="mb-6 flex flex-col gap-8">
            <Typography variant="h6" className="-mb-3">
              {t("Your Name")}
            </Typography>
            <Input
              {...register("name", { required: true })}
              size="lg"
              placeholder="Ваше имя"
            />

            <Typography variant="h6" className="-mb-3">
              {t("Your Comment")}
            </Typography>

            {/* ✅ Textarea вместо Input */}
            <textarea
              {...register("desc", { required: true })}
              placeholder="Комментарий..."
              className="
                h-28 p-3 rounded-xl border 
                border-gray-300 dark:border-gray-600 
                bg-transparent outline-none
                focus:border-green-600
                transition-colors
              "
            />
          </div>

          <Button type="submit" className="mt-10 py-3 text-lg" fullWidth>
            {t("отправить")}
          </Button>
        </form>

        {/* ✅ Карточки комментариев */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          {data?.map((item) => (
            <Card
              key={item.id}
              className="
                w-80 p-5 rounded-2xl shadow-lg  
                hover:shadow-green-700/30 hover:scale-[1.03]
                transition-all duration-300
                bg-white dark:bg-[#161616]
              "
            >
              <CardBody>

                {/* ✅ Заголовок с аватаром */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Аватар (первая буква имени) */}
                  <div
                    className="
                      w-12 h-12 rounded-full 
                      bg-green-700 text-white 
                      flex items-center justify-center 
                      text-xl font-semibold
                      uppercase
                    "
                  >
                    {item.name?.[0] ?? "?"}
                  </div>

                  <div>
                    <Typography className="font-semibold text-lg">
                      {item.name}
                    </Typography>
                    <Typography className="text-xs text-gray-400">
                      {t("Комментатор")}
                    </Typography>
                  </div>
                </div>

                {/* ✅ Комментарий */}
                <Typography className="text-gray-700 dark:text-gray-300 text-sm leading-[1.4rem]">
                  {item.desc}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
