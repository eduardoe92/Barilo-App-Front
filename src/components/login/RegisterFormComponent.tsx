import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/services/authService";
import { registerSchema } from "../../validation/registerSchema";
import { z } from "zod";
import { CustomInput } from "@/components/CustomInput";
import { CustomButton } from "@/components/CustomButton";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ModalContent } from "../../types/Modal";
import { useTranslation } from "react-i18next";

type RegisterUserForm = z.infer<typeof registerSchema>;

export const RegisterFormComponent: React.FC<{
  changeStep: (step: number) => void;
  showModal: (content: ModalContent) => void;
}> = ({ changeStep, showModal }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<RegisterUserForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      mail: "",
      role: "COORDINADOR",
      password: "",
      passwordConfirmation: "",
    },
  });

  const showSuccessModal = () => {
    showModal({
      title: t("modals.register.success.title"),
      message: t("modals.register.success.message"),
      buttons: [
        {
          label: t("buttons.landing.login"),
          action: () => {
            setTimeout(() => changeStep(0), 100);
          },
          isPrimary: true,
        },
      ],
    });
  };

  const showErrorModal = () => {
    showModal({
      title: t("modals.register.error.title"),
      message: t("modals.register.error.message"),
      buttons: [
        {
          label: t("buttons.backButton"),
          action: () => {},
          isPrimary: false,
        },
      ],
    });
  };

  const onSubmit = async (values: RegisterUserForm) => {
    setIsLoading(true);
    try {
      const response = await registerUser(values);
      if (response) {
        showSuccessModal();
      } else {
        showErrorModal();
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      showErrorModal();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col max-w-md"
        >
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="mb-1">
                <FormLabel className="text-lg font-bold font-primary text-primary-celeste">
                  {t("register_form_component.form_label_type_user")}
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex justify-between"
                    aria-labelledby="tipo-usuario"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="COORDINADOR"
                          className="text-primary-blue border-primary-celeste"
                        />
                      </FormControl>
                      <FormLabel className="text-base text-primary-celeste">
                        {t("register_form_component.form_label_coordinator")}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value="ESTUDIANTE"
                          className="text-primary-blue border-primary-celeste"
                        />
                      </FormControl>
                      <FormLabel className="text-base text-primary-celeste ">
                        {t("register_form_component.form_label_student")}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-1">
            <CustomInput
              type="text"
              label={t("register_form_component.custom_input_name.label")}
              name="name"
              placeholder={t(
                "register_form_component.custom_input_name.placeholder"
              )}
              field={form.register("name")}
            />
            <FormMessage>{form.formState.errors.name?.message}</FormMessage>
            <CustomInput
              type="email"
              label={t("register_form_component.custom_input_email.label")}
              name="mail"
              placeholder={t(
                "register_form_component.custom_input_email.placeholder"
              )}
              field={form.register("mail")}
            />
            <FormMessage>{form.formState.errors.mail?.message}</FormMessage>
            <CustomInput
              label={t("register_form_component.custom_input_password.label")}
              name="password"
              type="password"
              placeholder={t(
                "register_form_component.custom_input_password.placeholder"
              )}
              field={form.register("password")}
              showPasswordToggle
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <FormMessage>{form.formState.errors.password?.message}</FormMessage>
            <CustomInput
              label={t(
                "register_form_component.custom_input_passwordConfirmation.label"
              )}
              name="passwordConfirmation"
              type="password"
              placeholder={t(
                "register_form_component.custom_input_passwordConfirmation.placeholder"
              )}
              field={form.register("passwordConfirmation")}
              showPasswordToggle
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
            <FormMessage>
              {form.formState.errors.passwordConfirmation?.message}
            </FormMessage>
          </div>
          <div className="mt-4 space-y-2">
            <CustomButton type="submit" disabled={isLoading}>
              {isLoading
                ? t("buttons.registerButton2")
                : t("buttons.registerButton1")}
            </CustomButton>
          </div>
          <p className="mt-2 text-sm font-normal leading-none text-center text-primary-celeste font-secondary">
            {t("register_form_component.p")}{" "}
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
