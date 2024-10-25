import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CustomInput } from "@/components/CustomInput";
import { CustomButton } from "@/components/CustomButton";
import { IconButton } from "@/components/IconButton";
import { Separator } from "@/components/ui/separator";
import { FaGoogle } from "react-icons/fa";
import { ImAppleinc } from "react-icons/im";
import { Form, FormMessage } from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../validation/loginSchema";
import { useAuth } from "../context/AuthProvider";
import { useTranslation } from "react-i18next";
import { loginUser } from "../services/authService";
import { ModalContent } from "../types/Modal";

type LoginUserForm = z.infer<typeof loginSchema>;

export const LoginFormComponent: React.FC<{
  changeStep: (step: number) => void;
  showModal: (content: ModalContent) => void;
}> = ({ changeStep, showModal }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authLogin, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const form = useForm<LoginUserForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  const showSuccessModal = () => {
    showModal({
      title: t("login_form_component.show_success_modal.title"),
      message: t("login_form_component.show_success_modal.message"),
      buttons: [
        {
          label: t("modals.login.error.message"),
          action: () => {
            navigate("/home");
          },
          isPrimary: true,
        },
      ],
    });
  };

  const showErrorModal = (errorMessage: string) => {
    showModal({
      title: t("modals.login.error.title"),
      message: errorMessage,
      buttons: [
        {
          label: t("modals.login.error.btn"),
          action: () => {
            setTimeout(() => changeStep(1), 100);
          },
          isPrimary: true,
        },
        {
          label: "Volver",
          action: () => {},
          isPrimary: false,
        },
      ],
    });
  };

  const handleLogin = async (
    email: string,
    password: string
  ): Promise<string> => {
    try {
      const response = await loginUser({ mail: email, password });
      return response.token;
    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      throw new Error(t("modals.login.error.message"));
    }
  };

  const onSubmit = async (values: LoginUserForm) => {
    setIsLoading(true);
    try {
      const token = await handleLogin(values.mail, values.password);
      if (token) {
        await authLogin(values.mail, values.password);
        showSuccessModal();
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      showErrorModal(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log(`Google login simulado`);
  };

  const handleAppleLogin = () => {
    console.log(`Apple login simulado`);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col max-w-md"
        >
          <div className="space-y-1">
            <CustomInput
              type="email"
              label={t("login_form_component.return.custom_input1.label")}
              name="mail"
              placeholder={t(
                "login_form_component.return.custom_input1.placeholder"
              )}
              field={form.register("mail")}
            />
            <FormMessage>{form.formState.errors.mail?.message}</FormMessage>
            <CustomInput
              label={t("login_form_component.return.custom_input2.label")}
              name="password"
              type="password"
              placeholder={t(
                "login_form_component.return.custom_input2.placeholder"
              )}
              field={form.register("password")}
              showPasswordToggle
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </div>
          <FormMessage>{form.formState.errors.password?.message}</FormMessage>
          <button
            type="button"
            onClick={() => changeStep(2)}
            className="mt-2 text-sm font-normal leading-none text-right text-primary-celeste font-secondary"
          >
            {t("login_form_component.return.forget_password")}
          </button>
          <div className="mt-4 space-y-2">
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading
                ? t("buttons.loginButtonMail2")
                : t("buttons.loginButtonMail1")}
            </CustomButton>
            <Separator className="" />
            <IconButton
              className="bg-[#08121f]"
              icon={FaGoogle}
              label={t("buttons.loginButtonGoogle")}
              onClick={handleGoogleLogin}
            />
            <IconButton
              icon={ImAppleinc}
              label={t("buttons.loginButtonApple")}
              className="bg-[#2d3e50]"
              onClick={handleAppleLogin}
            />
          </div>
          <p className="mt-2 text-sm font-normal leading-none text-center text-primary-celeste font-secondary">
            {t("login_form_component.return.p")}{" "}
            <button
              type="button"
              onClick={() => changeStep(1)}
              className="antialiased font-bold"
            >
              {" "}
              {t("login_form_component.return.a")}
            </button>
          </p>
        </form>
      </Form>
    </div>
  );
};
