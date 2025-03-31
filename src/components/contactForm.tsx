"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsSubmitting(true);
    setError("");

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

    try {
      const mailtoLink = `mailto:DAYOU-international@mori-dx.jp?subject=${companyName}-${dutyName}からのメッセージ&body=メッセージ内容:%0A会社名: ${companyName}%0A担当者様名: ${dutyName}%0A住所: ${companyAddress}%0A電話番号: ${companyPhone}%0AFAX番号: ${
        companyFax ?? ""
      }%0Aメールアドレス: ${email}%0Aウェブサイト: ${
        companySite ?? ""
      }%0A連絡事項: ${message}%0A%0A返信用メールアドレス: ${email}`;

      window.location.href = mailtoLink;
      reset();
    } catch {
      setError("送信に失敗しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <p className="text-sm text-muted-foreground mb-6">
        <span className="text-destructive">※</span>
        マークは必須項目となります。
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyName" className="text-sm font-medium">
              御社名
              <span className="text-destructive ml-1">※</span>
            </label>
            <input
              type="text"
              id="companyName"
              {...register("companyName", { required: "御社名が未入力です。" })}
              className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            {errors.companyName && (
              <span className="text-sm text-destructive">
                {errors.companyName.message as string}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="dutyName" className="text-sm font-medium">
              ご担当者様名
              <span className="text-destructive ml-1">※</span>
            </label>
            <input
              type="text"
              id="dutyName"
              {...register("dutyName", {
                required: "ご担当者様名が未入力です。",
              })}
              className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            {errors.dutyName && (
              <span className="text-sm text-destructive">
                {errors.dutyName.message as string}
              </span>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="companyAddress" className="text-sm font-medium">
            御社住所
            <span className="text-destructive ml-1">※</span>
          </label>
          <input
            type="text"
            id="companyAddress"
            {...register("companyAddress", {
              required: "御社住所が未入力です。",
            })}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {errors.companyAddress && (
            <span className="text-sm text-destructive">
              {errors.companyAddress.message as string}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="companyPhone" className="text-sm font-medium">
              電話番号
              <span className="text-destructive ml-1">※</span>
            </label>
            <input
              type="text"
              id="companyPhone"
              {...register("companyPhone", {
                required: "電話番号が未入力です。",
              })}
              className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            {errors.companyPhone && (
              <span className="text-sm text-destructive">
                {errors.companyPhone.message as string}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="companyFax" className="text-sm font-medium">
              FAX番号
            </label>
            <input
              type="text"
              id="companyFax"
              {...register("companyFax")}
              className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              E-mail
              <span className="text-destructive ml-1">※</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "E-mailが未入力です。",
              })}
              className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            {errors.email && (
              <span className="text-sm text-destructive">
                {errors.email.message as string}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="companySite" className="text-sm font-medium">
              御社のウェブサイト
            </label>
            <input
              type="text"
              id="companySite"
              {...register("companySite")}
              className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            連絡事項
            <span className="text-destructive ml-1">※</span>
          </label>
          <textarea
            id="message"
            {...register("message", { required: "連絡事項が未入力です。" })}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[120px] resize-y"
            rows={4}
          ></textarea>
          {errors.message && (
            <span className="text-sm text-destructive">
              {errors.message.message as string}
            </span>
          )}
        </div>

        {error && (
          <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
            {error}
          </div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 rounded-md font-medium gradient-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "送信中..." : "送信内容の確認"}
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
