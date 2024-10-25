import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput } from "@/components/CustomInput";
import { CustomButton } from "@/components/CustomButton";
import { Form, FormMessage } from "@/components/ui/form";
import { forgotPasswordSchema } from "../validation/forgotPasswordSchema";
import { useTranslation } from "react-i18next";
import { sendPasswordResetEmail } from "../services/authService";
import { ModalContent } from "../types/Modal";

type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordComponent: React.FC<{
  changeStep: (step: number) => void;
  showModal: (content: ModalContent) => void;
}> = ({ changeStep, showModal }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      mail: "",
    },
  });

  const showSuccessModal = () => {
    showModal({
      title: t("modals.password.success.title"),
      message: t("modals.password.success.message"),
      buttons: [
        {
          label: t("buttons.backButton"),
          action: () => {
            setTimeout(() => changeStep(0), 100);
          },
          isPrimary: false,
        },
      ],
    });
  };

  const showErrorModal = (errorMessage: string) => {
    showModal({
      title: t("modals.password.error.title"),
      message: errorMessage,
      buttons: [
        {
          label: t("buttons.backButton"),
          action: () => {},
          isPrimary: false,
        },
      ],
    });
  };

  const handlePasswordReset = async (email: string) => {
    try {
      await sendPasswordResetEmail(email);
      showSuccessModal();
    } catch (error) {
      console.error("Error al enviar el correo de restablecimiento:", error);
      showErrorModal(t("modals.password.error.message"));
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (values: ForgotPasswordForm) => {
    setIsLoading(true);
    await handlePasswordReset(values.mail);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col max-w-md"
        >
          <div className="space-y-6">
            <CustomInput
              type="email"
              label={t("forgot_password.f_p_component.custom_input.label")}
              name="mail"
              placeholder={t(
                "forgot_password.f_p_component.custom_input.placeholder"
              )}
              field={form.register("mail")}
            />
            <FormMessage>{form.formState.errors.mail?.message}</FormMessage>
          </div>
          <div className="mt-4 space-y-3">
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading
                ? t("buttons.passwordButton2")
                : t("buttons.passwordButton1")}
            </CustomButton>
          </div>
          <p className="mt-2 text-sm font-normal leading-none text-center text-primary-celeste font-secondary">
            {t("forgot_password.f_p_component.p")}{" "}
            <button
              type="button"
              onClick={() => changeStep(0)}
              className="antialiased font-bold"
            >
              {t("forgot_password.f_p_component.link")}
            </button>
          </p>
        </form>
      </Form>
    </div>
  );
};
