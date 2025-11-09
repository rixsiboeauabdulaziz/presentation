import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import instance from "../axios";
import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
function Contakc() {
    const { t } = useTranslation();

    const nav = useNavigate();
    const { id } = useParams();
    const { register, handleSubmit } = useForm();
    const ref = useRef();

    async function handleGetId() {
        const res = await instance.get(`/ereter/${id}`);
        return res.data;
    }

    const { data } = useQuery({
        queryKey: ["getProductId", id],
        queryFn: handleGetId,
    });

    function send() {
        emailjs
            .sendForm(
                "service_cmyni5k",
                "template_pjhqr4p",
                ref.current,
                { publicKey: "FDUP9tSy9_oxmrJXp" }
            )
            .then(
                () => {
                    alert("SUCCESS!");
                    nav("/");
                },
                (error) => {
                    alert("FAILED...", error);
                }
            );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 transition-colors">
            <form
                ref={ref}
                onSubmit={handleSubmit(send)}
                className="
                    bg-white dark:bg-gray-800 
                    shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6 
                    transition-colors
                "
            >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center">
                    Связаться с продавцом
                </h2>

                <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1">
                    {t("имя")}
                    </label>
                    <input
                        name="user_name"
                        type="text"
                        placeholder="Name"
                        defaultValue={data?.name}
                        {...register("name")}
                        className="
                            w-full p-3 border border-gray-300 dark:border-gray-600 
                            rounded-lg outline-none
                            bg-white dark:bg-gray-700 
                            text-gray-800 dark:text-gray-100
                            focus:ring-2 focus:ring-blue-500 
                            transition
                        "
                    />
                </div>

                <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1">
                        {t("телефон")}

                    </label>
                    <input
                        name="user_email"
                        type="text"
                   
                        {...register("email")}
                        className="
                            w-full p-3 border border-gray-300 dark:border-gray-600
                            rounded-lg outline-none
                            bg-white dark:bg-gray-700
                            text-gray-800 dark:text-gray-100
                            focus:ring-2 focus:ring-blue-500 
                            transition
                        "
                    />
                </div>

                <div>
                    <label className="block text-gray-600 dark:text-gray-300 mb-1">
                        {t("Адрес")}
                    </label>
                    <textarea
                        name="message"
                        className="
                            w-full h-32 p-3 border border-gray-300 dark:border-gray-600
                            rounded-lg resize-none outline-none
                            bg-white dark:bg-gray-700
                            text-gray-800 dark:text-gray-100
                            focus:ring-2 focus:ring-blue-500 
                            transition
                        "
                    />
                </div>

                <button
                    type="submit"
                    className="
                        w-full font-semibold py-3 rounded-lg 
                        bg-blue-600 hover:bg-blue-700 
                        text-white 
                        transition
                    "
                >
                       {t("заказат")}
                </button>
            </form>
        </div>
    );
}

export default Contakc;
