import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import ProfilePicture from "@/assets/images/2810502.png";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useEffect, useState } from "react";
import InputField from "../ui/InputField";
import ButtonBlue from "../ui/buttonBlue";
import { FaUserEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

interface ProfileForm {
  nombreCompleto: string;
  telefono: number;
  email: string;
  fechaNacimiento: string;
}

const EditProfile = () => {
  const { t } = useTranslation();
  const { profile } = useUserProfile();
  const methods = useForm<ProfileForm>();
  const { handleSubmit, setValue } = methods;

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (profile) {
      const { name, email } = profile;
      setValue("nombreCompleto", name);
      setValue("email", email);
      // setValue("telefono", phone);
      // setValue("fechaNacimiento", birthdate);
      setLoading(false);
    }
  }, [profile, setValue]);

  const onSubmit = (data: ProfileForm) => {
    console.log(data);
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const fields = [
    {
      label: t("profile_user.edit_profile.form.input_field_name.label"),
      placeholder: t(
        "profile_user.edit_profile.form.input_field_name.placeholder"
      ),
      value: profile?.name,
      name: "nombreCompleto",
      type: "text",
    },
    {
      label: t("profile_user.edit_profile.form.input_field_phone.label"),
      placeholder: t(
        "profile_user.edit_profile.form.input_field_phone.placeholder"
      ),
      // value: profile?.phone,
      name: "telefono",
      type: "number",
    },
    {
      label: t("profile_user.edit_profile.form.input_field_email.label"),
      placeholder: t(
        "profile_user.edit_profile.form.input_field_email.placeholder"
      ),
      value: profile?.email,
      name: "email",
      type: "email",
    },
    {
      label: t("profile_user.edit_profile.form.input_field_date.label"),
      placeholder: t(
        "profile_user.edit_profile.form.input_field_birthdate.placeholder"
      ),
      // value: profile?.birthdate,
      name: "fechaNacimiento",
      type: "date",
    },
  ];

  return (
    <div className="px-4 py-10">
      <header className="flex flex-col items-center justify-center h-40 bg-primary-blue rounded-2xl">
        <div className="flex items-center w-full pl-12 pr-5">
          <h3 className="flex-grow text-2xl font-bold text-center text-white font-primary">
            {t("profile_user.edit_profile.title_h3")}
          </h3>
          <button
            type="button"
            className="ml-auto text-2xl"
            onClick={isEditing ? disableEditing : enableEditing}
          >
            {isEditing ? (
              <IoIosCloseCircle className="text-white transition hover:scale-110" />
            ) : (
              <FaUserEdit className="text-white transition hover:scale-110" />
            )}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={ProfilePicture}
            alt="profile picture"
            className="w-24 h-24 rounded-full cursor-pointer"
          />
        </div>
      </header>
      <div className="flex justify-center py-6 md:px-4">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-sm md:text-xl"
          >
            {!isEditing ? (
              <table className="w-[20em] mx-auto border-4 border-secondary-celeste rounded-xl shadow-md md:min-w-[30em] lg:min-w-[35em] bg-inactive-button-bg">
                <tbody className="text-primary-celeste">
                  {fields.map((field, index) => (
                    <tr key={index}>
                      <td className="p-2 border-b border-secondary-celeste">
                        <strong>{field.label}:</strong>{" "}
                        {loading
                          ? t("loading")
                          : field.value || t("profile_user.not_specified")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="pb-5 mx-auto text-sm text-justify font-regular text-secondary-celeste md:text-base lg:text-lg md:w-[30em] w-72 lg:w-[35em]">
                {fields.map(({ type, name, label, placeholder, value }) => (
                  <InputField
                    key={name}
                    type={type}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    required={true}
                    defaultValue={value}
                  />
                ))}
                <div className="py-5">
                  <ButtonBlue
                    type="submit"
                    text={t("profile_user.edit_profile.form.button_submit")}
                  />
                </div>
              </div>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default EditProfile;
