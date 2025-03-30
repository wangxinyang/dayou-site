"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

const ContactForm = () => {
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const {
      companyName,
      dutyName,
      companyAddress,
      companyPhone,
      companyFax,
      email,
      companySite,
      message,
    } = data;
    setError("");

    const mailtoLink = `mailto:DAYOU-international@mori-dx.jp?subject=${companyName}-${dutyName}からのメッセージ&body=メッセージ内容:%0A会社名: ${companyName}%0A担当者様名: ${dutyName}%0A住所: ${companyAddress}%0A電話番号: ${companyPhone}%0AFAX番号: ${
      companyFax ?? ""
    }%0Aメールアドレス: ${email}%0Aウェブサイト: ${
      companySite ?? ""
    }%0A連絡事項: ${message}%0A%0A返信用メールアドレス: ${email}`;
    window.location.href = mailtoLink;

    reset();
  };

  return (
    <div className="w-full lg:w-[52%] p-6">
      <p>
        <span className="text-red-500 text-xs lg:text-lg">※</span>
        <span className="text-xs lg:text-lg">マークは必須項目となります。</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-semibold">
            御社名
            <span className="text-red-500">※</span>
          </label>
          <input
            type="text"
            id="companyName"
            {...register("companyName", { required: "御社名が未入力です。" })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.companyName && (
            <span className="text-red-500 text-sm">
              {errors.companyName.message as string}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="dutyName" className="block text-sm font-semibold">
            ご担当者様名
            <span className="text-red-500">※</span>
          </label>
          <input
            type="text"
            id="dutyName"
            {...register("dutyName", {
              required: "ご担当者様名が未入力です。",
            })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.dutyName && (
            <span className="text-red-500 text-sm">
              {errors.dutyName.message as string}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="companyAddress"
            className="block text-sm font-semibold"
          >
            御社住所
            <span className="text-red-500">※</span>
          </label>
          <input
            type="text"
            id="companyAddress"
            {...register("companyAddress", {
              required: "御社住所が未入力です。",
            })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.companyAddress && (
            <span className="text-red-500 text-sm">
              {errors.companyAddress.message as string}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="companyPhone" className="block text-sm font-semibold">
            電話番号
            <span className="text-red-500">※</span>
          </label>
          <input
            type="text"
            id="companyPhone"
            {...register("companyPhone", {
              required: "電話番号が未入力です。",
            })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.companyPhone && (
            <span className="text-red-500 text-sm">
              {errors.companyPhone.message as string}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="companyFax" className="block text-sm font-semibold">
            FAX番号
          </label>
          <input
            type="text"
            id="companyFax"
            {...register("companyFax")}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            E-mail
            <span className="text-red-500">※</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "E-mailが未入力です。",
            })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message as string}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="companySite" className="block text-sm font-semibold">
            御社のウェブサイト
          </label>
          <input
            type="text"
            id="companySite"
            {...register("companySite")}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold">
            連絡事項
            <span className="text-red-500">※</span>
          </label>
          <textarea
            id="message"
            {...register("message", { required: "連絡事項が未入力です。" })}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message as string}
            </span>
          )}
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          送信内容の確認
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
