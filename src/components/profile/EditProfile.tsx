import { IoPencil } from "react-icons/io5";
import InputField from "../ui/InputField";
import ButtonBlue from "../ui/buttonBlue";
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";

import ProfilePicture from "@/assets/images/2810502.png";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useEffect } from "react";

// Define la interfaz para los datos del formulario
interface ProfileForm {
  nombreCompleto: string;
  telefono: number;
  email: string;
  fechaNacimiento: number;
}

const EditProfile = () => {
  const { t } = useTranslation();
  const { profile } = useUserProfile();

  const methods = useForm<ProfileForm>();
  const { handleSubmit, setValue } = methods;

  //Rellena los campos del form con los datos del perfil
  useEffect(() => {
    if (profile) {
      setValue("nombreCompleto", profile.name);
      setValue("email", profile.email);
    }
  }, [profile, setValue]);

  // Utiliza el tipo ProfileForm en la función onSubmit
  const onSubmit = (data: ProfileForm) => {
    console.log(data); // Aquí puedes manejar el envío de datos
  };

  const enableEditing = () => {
    // Habilitar la edición
  };

  return (
    <section className="">
      <div className="w-full px-4 pt-10">
        <header className="flex h-40 flex-col items-center justify-center bg-primary-blue rounded-2xl">
          <div className="w-full flex items-center justify-end">
            <button
              type="button"
              className="px-5 pt-2" 
              onClick={enableEditing}
            >
              <IoPencil className="text-white" />
            </button>
          </div>
            <h3 className="text-2xl text-center font-bold text-white font-primary">
              {t("profile_user.edit_profile.title_h3")}
            </h3>
          <div className="flex flex-col items-center justify-center ">
            <img
              src={ProfilePicture}
              alt="profile picture"
              className="w-24 h-24 rounded-full cursor-pointer"
            />
          </div>
        </header>
        </div>
        <div className="w-full px-4 pt-6 mx-auto md:w-8/12">
          <FormProvider {...methods}>
            <form
              className="flex flex-col items-center justify-center w-full text-2xl"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full flex flex-col gap-4 mb-2 md:mb-6">
                <InputField
                  type="text"
                  label={t(
                    "profile_user.edit_profile.form.input_field_name.label"
                  )}
                  name="nombreCompleto"
                  placeholder={t(
                    "profile_user.edit_profile.form.input_field_name.placeholder"
                  )}
                  required
                />
                <InputField
                  type="number"
                  label={t(
                    "profile_user.edit_profile.form.input_field_phone.label"
                  )}
                  name="telefono"
                  placeholder={t(
                    "profile_user.edit_profile.form.input_field_phone.placeholder"
                  )}
                  required
                />
                <InputField
                  type="email"
                  label={t(
                    "profile_user.edit_profile.form.input_field_email.label"
                  )}
                  name="email"
                  placeholder={t(
                    "profile_user.edit_profile.form.input_field_email.placeholder"
                  )}
                  required
                />
                <InputField
                  type="date"
                  label={t(
                    "profile_user.edit_profile.form.input_field_date.label"
                  )}
                  name="fechaNacimiento"
                  required
                />
              </div>
              <div>
                <ButtonBlue
                  type="submit"
                  text={t("profile_user.edit_profile.form.button_submit")}
                />
              </div>
            </form>
          </FormProvider>
        </div>
    </section>
  );
};

export default EditProfile;
